package com.jobagent.profile.controller;

import com.jobagent.auth.CurrentUserService;
import com.jobagent.profile.dto.EducationRequest;
import com.jobagent.profile.dto.EducationResponse;
import com.jobagent.profile.service.EducationService;
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
@RequestMapping("/api/profile/educations")
@RequiredArgsConstructor
public class EducationController {

  private final CurrentUserService currentUserService;
  private final EducationService educationService;

  @GetMapping
  public List<EducationResponse> listEducations(Authentication authentication) {
    User user = currentUserService.require(authentication);
    return educationService.listEducations(user.getId());
  }

  @PostMapping
  public ResponseEntity<EducationResponse> createEducation(
      Authentication authentication, @Valid @RequestBody EducationRequest request) {
    User user = currentUserService.require(authentication);
    EducationResponse response = educationService.createEducation(user.getId(), request);
    return ResponseEntity.status(HttpStatus.CREATED).body(response);
  }

  @PutMapping("/{id}")
  public EducationResponse updateEducation(
      Authentication authentication,
      @PathVariable UUID id,
      @Valid @RequestBody EducationRequest request) {
    User user = currentUserService.require(authentication);
    return educationService.updateEducation(user.getId(), id, request);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteEducation(Authentication authentication, @PathVariable UUID id) {
    User user = currentUserService.require(authentication);
    educationService.deleteEducation(user.getId(), id);
    return ResponseEntity.noContent().build();
  }
}
