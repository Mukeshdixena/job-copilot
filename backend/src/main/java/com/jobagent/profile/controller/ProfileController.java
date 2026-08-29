package com.jobagent.profile.controller;

import com.jobagent.auth.CurrentUserService;
import com.jobagent.profile.dto.ProfileRequest;
import com.jobagent.profile.dto.ProfileResponse;
import com.jobagent.profile.service.ProfileService;
import com.jobagent.user.entity.User;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/profile")
@RequiredArgsConstructor
public class ProfileController {

  private final CurrentUserService currentUserService;
  private final ProfileService profileService;

  @GetMapping
  public ProfileResponse getProfile(Authentication authentication) {
    User user = currentUserService.require(authentication);
    return profileService.getProfile(user.getId());
  }

  @PutMapping
  public ProfileResponse upsertProfile(
      Authentication authentication, @Valid @RequestBody ProfileRequest request) {
    User user = currentUserService.require(authentication);
    return profileService.upsertProfile(user.getId(), request);
  }
}
