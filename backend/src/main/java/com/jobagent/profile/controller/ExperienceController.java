package com.jobagent.profile.controller;

import com.jobagent.auth.CurrentUserService;
import com.jobagent.profile.dto.ExperienceRequest;
import com.jobagent.profile.dto.ExperienceResponse;
import com.jobagent.profile.service.ExperienceService;
import com.jobagent.user.entity.User;
import jakarta.validation.Valid;
import java.util.List;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/profile/experiences")
@RequiredArgsConstructor
public class ExperienceController {

  private final CurrentUserService currentUserService;
  private final ExperienceService experienceService;

  @GetMapping
  public List<ExperienceResponse> listExperiences(Authentication authentication) {
    User user = currentUserService.require(authentication);
    return experienceService.listExperiences(user.getId());
  }

  @PostMapping
  public ResponseEntity<ExperienceResponse> createExperience(
      Authentication authentication, @Valid @RequestBody ExperienceRequest request) {
    User user = currentUserService.require(authentication);
    ExperienceResponse response = experienceService.createExperience(user.getId(), request);
    return ResponseEntity.status(HttpStatus.CREATED).body(response);
  }

  @PutMapping("/{id}")
  public ExperienceResponse updateExperience(
      Authentication authentication,
      @PathVariable UUID id,
      @Valid @RequestBody ExperienceRequest request) {
    User user = currentUserService.require(authentication);
    return experienceService.updateExperience(user.getId(), id, request);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteExperience(Authentication authentication, @PathVariable UUID id) {
    User user = currentUserService.require(authentication);
    experienceService.deleteExperience(user.getId(), id);
    return ResponseEntity.noContent().build();
  }
}
