package com.jobagent.skill;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.jobagent.auth.dto.AuthResponse;
import com.jobagent.auth.dto.RegisterRequest;
import com.jobagent.skill.dto.ProfileSkillResponse;
import com.jobagent.skill.dto.SkillResponse;
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
class SkillIntegrationTest {

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
  void creatingTheSameCatalogSkillTwiceIsIdempotent() throws Exception {
    String skillName = "Spring Boot " + UUID.randomUUID();

    MvcResult firstResult =
        mockMvc
            .perform(
                post("/api/skills")
                    .header("Authorization", "Bearer " + accessToken)
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(
                        objectMapper.writeValueAsString(
                            new CreateSkillPayload(skillName, "Backend"))))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.name").value(skillName))
            .andExpect(jsonPath("$.category").value("Backend"))
            .andReturn();

    SkillResponse firstSkill =
        objectMapper.readValue(firstResult.getResponse().getContentAsString(), SkillResponse.class);

    // Same name, different case -> treated as the same catalog entry, 200 not 201.
    mockMvc
        .perform(
            post("/api/skills")
                .header("Authorization", "Bearer " + accessToken)
                .contentType(MediaType.APPLICATION_JSON)
                .content(
                    objectMapper.writeValueAsString(
                        new CreateSkillPayload(skillName.toLowerCase(), "Something Else"))))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.id").value(firstSkill.id().toString()))
        .andExpect(jsonPath("$.category").value("Backend"));

    mockMvc
        .perform(
            get("/api/skills")
                .param("query", skillName.substring(0, 10))
                .header("Authorization", "Bearer " + accessToken))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$[0].name").value(skillName));
  }

  @Test
  void addSkillClaimByNameThenListUpdateAndDelete() throws Exception {
    String skillName = "Kubernetes " + UUID.randomUUID();

    MvcResult addResult =
        mockMvc
            .perform(
                post("/api/profile/skills")
                    .header("Authorization", "Bearer " + accessToken)
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(
                        objectMapper.writeValueAsString(
                            new AddSkillPayload(
                                null,
                                skillName,
                                "INTERMEDIATE",
                                "2026-06-01",
                                true,
                                List.of("Project: Order Management API")))))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.skillName").value(skillName))
            .andExpect(jsonPath("$.proficiency").value("INTERMEDIATE"))
            .andExpect(jsonPath("$.interviewReady").value(true))
            .andExpect(jsonPath("$.evidence[0]").value("Project: Order Management API"))
            .andReturn();

    UUID profileSkillId =
        objectMapper
            .readValue(addResult.getResponse().getContentAsString(), ProfileSkillResponse.class)
            .id();

    mockMvc
        .perform(get("/api/profile/skills").header("Authorization", "Bearer " + accessToken))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$[0].id").value(profileSkillId.toString()))
        .andExpect(jsonPath("$[0].skillName").value(skillName))
        .andExpect(jsonPath("$[0].evidence.length()").value(1));

    // Duplicate claim on the same skill (by name again) is rejected.
    mockMvc
        .perform(
            post("/api/profile/skills")
                .header("Authorization", "Bearer " + accessToken)
                .contentType(MediaType.APPLICATION_JSON)
                .content(
                    objectMapper.writeValueAsString(
                        new AddSkillPayload(null, skillName, null, null, null, null))))
        .andExpect(status().isConflict());

    mockMvc
        .perform(
            put("/api/profile/skills/" + profileSkillId)
                .header("Authorization", "Bearer " + accessToken)
                .contentType(MediaType.APPLICATION_JSON)
                .content(
                    objectMapper.writeValueAsString(
                        new UpdateSkillPayload(
                            "ADVANCED",
                            "2026-08-01",
                            false,
                            List.of("Project: Order Management API", "Experience: Nexlify internship")))))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.proficiency").value("ADVANCED"))
        .andExpect(jsonPath("$.interviewReady").value(false))
        .andExpect(jsonPath("$.evidence.length()").value(2));

    mockMvc
        .perform(
            delete("/api/profile/skills/" + profileSkillId)
                .header("Authorization", "Bearer " + accessToken))
        .andExpect(status().isNoContent());

    mockMvc
        .perform(
            put("/api/profile/skills/" + profileSkillId)
                .header("Authorization", "Bearer " + accessToken)
                .contentType(MediaType.APPLICATION_JSON)
                .content(
                    objectMapper.writeValueAsString(
                        new UpdateSkillPayload("BEGINNER", null, false, List.of()))))
        .andExpect(status().isNotFound());
  }

  @Test
  void addingASkillClaimWithoutSkillIdOrNameIsRejected() throws Exception {
    mockMvc
        .perform(
            post("/api/profile/skills")
                .header("Authorization", "Bearer " + accessToken)
                .contentType(MediaType.APPLICATION_JSON)
                .content(
                    objectMapper.writeValueAsString(
                        new AddSkillPayload(null, null, null, null, null, null))))
        .andExpect(status().isBadRequest());
  }

  @Test
  void profileSkillEndpointsRequireAuthentication() throws Exception {
    mockMvc.perform(get("/api/profile/skills")).andExpect(status().isUnauthorized());
  }

  private record CreateSkillPayload(String name, String category) {}

  private record AddSkillPayload(
      UUID skillId,
      String skillName,
      String proficiency,
      String lastUsed,
      Boolean interviewReady,
      List<String> evidence) {}

  private record UpdateSkillPayload(
      String proficiency, String lastUsed, boolean interviewReady, List<String> evidence) {}
}
