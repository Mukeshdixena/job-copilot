package com.jobagent.project.controller;

import com.jobagent.auth.CurrentUserService;
import com.jobagent.project.dto.ProjectRequest;
import com.jobagent.project.dto.ProjectResponse;
import com.jobagent.project.service.ProjectService;
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
@RequestMapping("/api/projects")
@RequiredArgsConstructor
public class ProjectController {

  private final ProjectService projectService;
  private final CurrentUserService currentUserService;

  @GetMapping
  public List<ProjectResponse> list(Authentication authentication) {
    User user = currentUserService.require(authentication);
    return projectService.listForUser(user.getId());
  }

  @GetMapping("/{id}")
  public ProjectResponse get(@PathVariable UUID id, Authentication authentication) {
    User user = currentUserService.require(authentication);
    return projectService.getForUser(id, user.getId());
  }

  @PostMapping
  public ResponseEntity<ProjectResponse> create(
      @Valid @RequestBody ProjectRequest request, Authentication authentication) {
    User user = currentUserService.require(authentication);
    return ResponseEntity.status(HttpStatus.CREATED)
        .body(projectService.create(request, user.getId()));
  }

  @PutMapping("/{id}")
  public ProjectResponse update(
      @PathVariable UUID id,
      @Valid @RequestBody ProjectRequest request,
      Authentication authentication) {
    User user = currentUserService.require(authentication);
    return projectService.update(id, request, user.getId());
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> delete(@PathVariable UUID id, Authentication authentication) {
    User user = currentUserService.require(authentication);
    projectService.delete(id, user.getId());
    return ResponseEntity.noContent().build();
  }
}
