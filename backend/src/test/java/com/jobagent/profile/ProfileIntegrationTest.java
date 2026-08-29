package com.jobagent.profile;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.jobagent.auth.dto.AuthResponse;
import com.jobagent.auth.dto.RegisterRequest;
import com.jobagent.profile.dto.EducationRequest;
import com.jobagent.profile.dto.EducationResponse;
import com.jobagent.profile.dto.ExperienceRequest;
import com.jobagent.profile.dto.ExperienceResponse;
import com.jobagent.profile.dto.ProfileRequest;
import com.jobagent.profile.entity.RemoteWorkPreference;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;
import tools.jackson.databind.ObjectMapper;

@SpringBootTest
@AutoConfigureMockMvc
@Testcontainers
class ProfileIntegrationTest {

  @Container
  static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:17-alpine");

  @DynamicPropertySource
  static void overrideDatasource(DynamicPropertyRegistry registry) {
    registry.add("spring.datasource.url", postgres::getJdbcUrl);
    registry.add("spring.datasource.username", postgres::getUsername);
    registry.add("spring.datasource.password", postgres::getPassword);
    registry.add("spring.docker.compose.enabled", () -> "false");
  }

  @Autowired private MockMvc mockMvc;
  @Autowired private ObjectMapper objectMapper;

  private String accessToken;

  @BeforeEach
  void registerUser() throws Exception {
    String email = "mukesh+" + UUID.randomUUID() + "@example.com";
    RegisterRequest register = new RegisterRequest(email, "supersecret123");

    MvcResult result =
        mockMvc
            .perform(
                post("/api/auth/register")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(objectMapper.writeValueAsString(register)))
            .andExpect(status().isCreated())
            .andReturn();

    AuthResponse response =
        objectMapper.readValue(result.getResponse().getContentAsString(), AuthResponse.class);
    accessToken = response.accessToken();
  }

  @Test
  void getProfileForNewUserReturnsEmptyDefaultInsteadOf404() throws Exception {
    mockMvc
        .perform(get("/api/profile").header("Authorization", "Bearer " + accessToken))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.phone").doesNotExist())
        .andExpect(jsonPath("$.targetRoles").isArray())
        .andExpect(jsonPath("$.targetRoles").isEmpty());
  }

  @Test
  void profileEndpointsRequireAuthentication() throws Exception {
    mockMvc.perform(get("/api/profile")).andExpect(status().isUnauthorized());
  }

  @Test
  void upsertThenGetProfileRoundTrips() throws Exception {
    ProfileRequest request =
        new ProfileRequest(
            "+1-555-0100",
            "Bengaluru, India",
            List.of("Java Developer", "Backend Software Engineer"),
            List.of("Bengaluru", "Remote"),
            RemoteWorkPreference.HYBRID,
            3,
            6,
            "30 days",
            1_200_000L,
            1_800_000L,
            "Backend engineer with a focus on Spring Boot.",
            "https://github.com/mukesh",
            "https://linkedin.com/in/mukesh",
            "https://mukesh.dev");

    mockMvc
        .perform(
            put("/api/profile")
                .header("Authorization", "Bearer " + accessToken)
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.phone").value("+1-555-0100"))
        .andExpect(jsonPath("$.location").value("Bengaluru, India"))
        .andExpect(jsonPath("$.targetRoles", org.hamcrest.Matchers.hasSize(2)))
        .andExpect(jsonPath("$.remoteWorkPreference").value("HYBRID"))
        .andExpect(jsonPath("$.salaryExpectationMin").value(1_200_000))
        .andExpect(jsonPath("$.salaryExpectationMax").value(1_800_000));

    mockMvc
        .perform(get("/api/profile").header("Authorization", "Bearer " + accessToken))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.phone").value("+1-555-0100"))
        .andExpect(jsonPath("$.preferredLocations", org.hamcrest.Matchers.hasSize(2)));

    // Upserting again updates the existing row rather than creating a second one.
    ProfileRequest updated =
        new ProfileRequest(
            "+1-555-0200",
            "Remote",
            List.of("Staff Engineer"),
            List.of("Remote"),
            RemoteWorkPreference.REMOTE,
            5,
            9,
            "Immediate",
            2_000_000L,
            2_500_000L,
            "Updated summary.",
            null,
            null,
            null);

    mockMvc
        .perform(
            put("/api/profile")
                .header("Authorization", "Bearer " + accessToken)
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(updated)))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.phone").value("+1-555-0200"))
        .andExpect(jsonPath("$.targetRoles", org.hamcrest.Matchers.hasSize(1)))
        .andExpect(jsonPath("$.githubUrl").doesNotExist());
  }

  @Test
  void experienceCrudFlowScopedToOwner() throws Exception {
    ExperienceRequest create =
        new ExperienceRequest(
            "Backend Engineer",
            "Acme Corp",
            LocalDate.of(2020, 1, 1),
            LocalDate.of(2023, 6, 30),
            List.of("Java", "Spring Boot", "PostgreSQL"),
            "Built the core platform.");

    MvcResult createResult =
        mockMvc
            .perform(
                post("/api/profile/experiences")
                    .header("Authorization", "Bearer " + accessToken)
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(objectMapper.writeValueAsString(create)))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.title").value("Backend Engineer"))
            .andExpect(jsonPath("$.technologies", org.hamcrest.Matchers.hasSize(3)))
            .andReturn();

    UUID id =
        objectMapper
            .readValue(createResult.getResponse().getContentAsString(), ExperienceResponse.class)
            .id();

    mockMvc
        .perform(get("/api/profile/experiences").header("Authorization", "Bearer " + accessToken))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$", org.hamcrest.Matchers.hasSize(1)));

    ExperienceRequest update =
        new ExperienceRequest(
            "Senior Backend Engineer",
            "Acme Corp",
            LocalDate.of(2020, 1, 1),
            null,
            List.of("Java", "Kubernetes"),
            "Promoted; leading the platform team.");

    mockMvc
        .perform(
            put("/api/profile/experiences/" + id)
                .header("Authorization", "Bearer " + accessToken)
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(update)))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.title").value("Senior Backend Engineer"))
        .andExpect(jsonPath("$.endDate").doesNotExist());

    mockMvc
        .perform(
            delete("/api/profile/experiences/" + id).header("Authorization", "Bearer " + accessToken))
        .andExpect(status().isNoContent());

    mockMvc
        .perform(get("/api/profile/experiences").header("Authorization", "Bearer " + accessToken))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$", org.hamcrest.Matchers.hasSize(0)));
  }

  @Test
  void updatingOrDeletingSomeoneElsesExperienceReturns404() throws Exception {
    ExperienceRequest create =
        new ExperienceRequest(
            "Backend Engineer",
            "Acme Corp",
            LocalDate.of(2020, 1, 1),
            null,
            List.of("Java"),
            null);

    MvcResult createResult =
        mockMvc
            .perform(
                post("/api/profile/experiences")
                    .header("Authorization", "Bearer " + accessToken)
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(objectMapper.writeValueAsString(create)))
            .andExpect(status().isCreated())
            .andReturn();

    UUID id =
        objectMapper
            .readValue(createResult.getResponse().getContentAsString(), ExperienceResponse.class)
            .id();

    // A second, different user must not be able to see, update, or delete the first user's row.
    String otherEmail = "mukesh+" + UUID.randomUUID() + "@example.com";
    MvcResult otherRegister =
        mockMvc
            .perform(
                post("/api/auth/register")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(
                        objectMapper.writeValueAsString(
                            new RegisterRequest(otherEmail, "supersecret123"))))
            .andExpect(status().isCreated())
            .andReturn();
    String otherToken =
        objectMapper
            .readValue(otherRegister.getResponse().getContentAsString(), AuthResponse.class)
            .accessToken();

    mockMvc
        .perform(
            put("/api/profile/experiences/" + id)
                .header("Authorization", "Bearer " + otherToken)
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(create)))
        .andExpect(status().isNotFound());

    mockMvc
        .perform(
            delete("/api/profile/experiences/" + id).header("Authorization", "Bearer " + otherToken))
        .andExpect(status().isNotFound());
  }

  @Test
  void educationCrudFlow() throws Exception {
    EducationRequest create =
        new EducationRequest("IIT Bombay", "B.Tech", "Computer Science", 2014, 2018, new BigDecimal("8.75"));

    MvcResult createResult =
        mockMvc
            .perform(
                post("/api/profile/educations")
                    .header("Authorization", "Bearer " + accessToken)
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(objectMapper.writeValueAsString(create)))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.institution").value("IIT Bombay"))
            .andExpect(jsonPath("$.verified").value(false))
            .andReturn();

    UUID id =
        objectMapper
            .readValue(createResult.getResponse().getContentAsString(), EducationResponse.class)
            .id();

    mockMvc
        .perform(get("/api/profile/educations").header("Authorization", "Bearer " + accessToken))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$", org.hamcrest.Matchers.hasSize(1)));

    EducationRequest update =
        new EducationRequest("IIT Bombay", "B.Tech", "Electrical Engineering", 2014, 2018, new BigDecimal("9.00"));

    mockMvc
        .perform(
            put("/api/profile/educations/" + id)
                .header("Authorization", "Bearer " + accessToken)
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(update)))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.fieldOfStudy").value("Electrical Engineering"));

    mockMvc
        .perform(
            delete("/api/profile/educations/" + id).header("Authorization", "Bearer " + accessToken))
        .andExpect(status().isNoContent());

    mockMvc
        .perform(get("/api/profile/educations").header("Authorization", "Bearer " + accessToken))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$", org.hamcrest.Matchers.hasSize(0)));
  }
}
