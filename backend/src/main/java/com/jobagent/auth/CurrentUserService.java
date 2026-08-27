package com.jobagent.auth;

import com.jobagent.user.entity.User;
import com.jobagent.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

/**
 * Resolves the {@link User} behind the current request's JWT. The token's subject is the user's
 * email (see {@link TokenService}), so every module that needs "who is asking" goes through here
 * instead of re-deriving it from the {@link Authentication} directly.
 */
@Component
@RequiredArgsConstructor
public class CurrentUserService {

  private final UserRepository userRepository;

  public User require(Authentication authentication) {
    String email = authentication.getName();
    return userRepository
        .findByEmail(email)
        .orElseThrow(() -> new IllegalStateException("Authenticated user not found: " + email));
  }
}
