package com.jobagent.project;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.jobagent.auth.dto.AuthResponse;
import com.jobagent.auth.dto.RegisterRequest;
import com.jobagent.project.dto.ProjectRequest;
import com.jobagent.project.dto.ProjectResponse;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;
import org.assertj.core.api.Assertions;
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
class ProjectIntegrationTest {

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

  private String registerAndGetToken() throws Exception {
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
    return response.accessToken();
  }

  @Test
  void fullCrudLifecycleForOwnProjects() throws Exception {
    String token = registerAndGetToken();

    ProjectRequest createRequest =
        new ProjectRequest(
            "Job Copilot",
            "An AI job application assistant",
            LocalDate.of(2025, 1, 1),
            null,
            "https://github.com/example/job-copilot",
            true,
            com.jobagent.project.entity.ProjectStatus.DEPLOYED,
            List.of("Spring Boot 3", "JPA", "PostgreSQL", "Docker"),
            80);

    MvcResult createResult =
        mockMvc
            .perform(
                post("/api/projects")
                    .header("Authorization", "Bearer " + token)
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(objectMapper.writeValueAsString(createRequest)))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.name").value("Job Copilot"))
            .andExpect(jsonPath("$.status").value("DEPLOYED"))
            .andExpect(jsonPath("$.technologies.length()").value(4))
            .andExpect(jsonPath("$.healthScore").value(80))
            .andReturn();

    ProjectResponse created =
        objectMapper.readValue(createResult.getResponse().getContentAsString(), ProjectResponse.class);
    Assertions.assertThat(created.id()).isNotNull();

    // list it back
    mockMvc
        .perform(get("/api/projects").header("Authorization", "Bearer " + token))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.length()").value(1))
        .andExpect(jsonPath("$[0].id").value(created.id().toString()));

    // get by id
    mockMvc
        .perform(
            get("/api/projects/" + created.id()).header("Authorization", "Bearer " + token))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.name").value("Job Copilot"));

    // update it
    ProjectRequest updateRequest =
        new ProjectRequest(
            "Job Copilot v2",
            "Updated description",
            LocalDate.of(2025, 1, 1),
            LocalDate.of(2025, 6, 1),
            "https://github.com/example/job-copilot",
            true,
            com.jobagent.project.entity.ProjectStatus.LIVE_WITH_CLIENT,
            List.of("Spring Boot 3", "JPA", "MySQL"),
            90);

    mockMvc
        .perform(
            put("/api/projects/" + created.id())
                .header("Authorization", "Bearer " + token)
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(updateRequest)))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.name").value("Job Copilot v2"))
        .andExpect(jsonPath("$.status").value("LIVE_WITH_CLIENT"))
        .andExpect(jsonPath("$.technologies.length()").value(3))
        .andExpect(jsonPath("$.endDate").value("2025-06-01"));

    // a second user cannot see or modify the first user's project
    String otherToken = registerAndGetToken();
    mockMvc
        .perform(
            get("/api/projects/" + created.id()).header("Authorization", "Bearer " + otherToken))
        .andExpect(status().isNotFound());

    mockMvc
        .perform(
            put("/api/projects/" + created.id())
                .header("Authorization", "Bearer " + otherToken)
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(updateRequest)))
        .andExpect(status().isNotFound());

    mockMvc
        .perform(
            delete("/api/projects/" + created.id()).header("Authorization", "Bearer " + otherToken))
        .andExpect(status().isNotFound());

    // second user's project list stays empty
    mockMvc
        .perform(get("/api/projects").header("Authorization", "Bearer " + otherToken))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.length()").value(0));

    // delete it (by the owner)
    mockMvc
        .perform(delete("/api/projects/" + created.id()).header("Authorization", "Bearer " + token))
        .andExpect(status().isNoContent());

    mockMvc
        .perform(get("/api/projects/" + created.id()).header("Authorization", "Bearer " + token))
        .andExpect(status().isNotFound());
  }

  @Test
  void projectEndpointsAreRejectedWithoutAToken() throws Exception {
    mockMvc.perform(get("/api/projects")).andExpect(status().isUnauthorized());
  }
}
