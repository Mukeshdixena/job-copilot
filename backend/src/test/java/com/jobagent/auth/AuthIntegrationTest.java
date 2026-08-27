package com.jobagent.auth;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.jobagent.auth.dto.AuthResponse;
import com.jobagent.auth.dto.LoginRequest;
import com.jobagent.auth.dto.RegisterRequest;
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
class AuthIntegrationTest {

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

  @Test
  void meIsRejectedWithoutAToken() throws Exception {
    mockMvc.perform(get("/api/users/me")).andExpect(status().isUnauthorized());
  }

  @Test
  void registerThenLoginThenAccessProtectedEndpoint() throws Exception {
    String email = "mukesh+" + UUID.randomUUID() + "@example.com";
    RegisterRequest register = new RegisterRequest(email, "supersecret123");

    MvcResult registerResult =
        mockMvc
            .perform(
                post("/api/auth/register")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(objectMapper.writeValueAsString(register)))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.email").value(email))
            .andReturn();

    AuthResponse registerResponse =
        objectMapper.readValue(
            registerResult.getResponse().getContentAsString(), AuthResponse.class);
    Assertions.assertThat(registerResponse.accessToken()).isNotBlank();

    mockMvc
        .perform(get("/api/users/me").header("Authorization", "Bearer " + registerResponse.accessToken()))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.email").value(email));

    LoginRequest login = new LoginRequest(email, "supersecret123");
    mockMvc
        .perform(
            post("/api/auth/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(login)))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.email").value(email));
  }

  @Test
  void loginWithWrongPasswordIsRejected() throws Exception {
    String email = "mukesh+" + UUID.randomUUID() + "@example.com";
    RegisterRequest register = new RegisterRequest(email, "supersecret123");
    mockMvc
        .perform(
            post("/api/auth/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(register)))
        .andExpect(status().isCreated());

    LoginRequest badLogin = new LoginRequest(email, "wrong-password");
    mockMvc
        .perform(
            post("/api/auth/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(badLogin)))
        .andExpect(status().isUnauthorized());
  }

  @Test
  void registeringTheSameEmailTwiceIsRejected() throws Exception {
    String email = "mukesh+" + UUID.randomUUID() + "@example.com";
    RegisterRequest register = new RegisterRequest(email, "supersecret123");

    mockMvc
        .perform(
            post("/api/auth/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(register)))
        .andExpect(status().isCreated());

    mockMvc
        .perform(
            post("/api/auth/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(register)))
        .andExpect(status().isConflict());
  }
}
