package com.jobagent.user;

import com.jobagent.auth.CurrentUserService;
import com.jobagent.user.dto.UserResponse;
import com.jobagent.user.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

  private final CurrentUserService currentUserService;

  @GetMapping("/me")
  public UserResponse me(Authentication authentication) {
    User user = currentUserService.require(authentication);
    return new UserResponse(
        user.getId(), user.getEmail(), user.getRole().name(), user.getCreatedAt());
  }
}
