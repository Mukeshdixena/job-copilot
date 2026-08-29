package com.jobagent.skill.controller;

import com.jobagent.auth.CurrentUserService;
import com.jobagent.skill.dto.AddProfileSkillRequest;
import com.jobagent.skill.dto.ProfileSkillResponse;
import com.jobagent.skill.dto.UpdateProfileSkillRequest;
import com.jobagent.skill.entity.ProfileSkill;
import com.jobagent.skill.mapper.ProfileSkillMapper;
import com.jobagent.skill.service.ProfileSkillService;
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

/** Scoped to the current authenticated user via {@link CurrentUserService}. */
@RestController
@RequestMapping("/api/profile/skills")
@RequiredArgsConstructor
public class ProfileSkillController {

  private final ProfileSkillService profileSkillService;
  private final CurrentUserService currentUserService;

  @GetMapping
  public List<ProfileSkillResponse> list(Authentication authentication) {
    User user = currentUserService.require(authentication);
    return profileSkillService.listForUser(user).stream()
        .map(ProfileSkillMapper::toResponse)
        .toList();
  }

  @PostMapping
  public ResponseEntity<ProfileSkillResponse> add(
      Authentication authentication, @Valid @RequestBody AddProfileSkillRequest request) {
    User user = currentUserService.require(authentication);
    ProfileSkill profileSkill = profileSkillService.add(user, request);
    return ResponseEntity.status(HttpStatus.CREATED)
        .body(ProfileSkillMapper.toResponse(profileSkill));
  }

  @PutMapping("/{id}")
  public ProfileSkillResponse update(
      Authentication authentication,
      @PathVariable UUID id,
      @Valid @RequestBody UpdateProfileSkillRequest request) {
    User user = currentUserService.require(authentication);
    ProfileSkill profileSkill = profileSkillService.update(user, id, request);
    return ProfileSkillMapper.toResponse(profileSkill);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> delete(Authentication authentication, @PathVariable UUID id) {
    User user = currentUserService.require(authentication);
    profileSkillService.delete(user, id);
    return ResponseEntity.noContent().build();
  }
}
