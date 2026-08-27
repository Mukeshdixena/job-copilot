package com.jobagent.auth;

import com.jobagent.auth.dto.AuthResponse;
import com.jobagent.auth.dto.LoginRequest;
import com.jobagent.auth.dto.RegisterRequest;
import com.jobagent.common.exception.EmailAlreadyExistsException;
import com.jobagent.user.entity.User;
import com.jobagent.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AuthService {

  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;
  private final AuthenticationManager authenticationManager;
  private final TokenService tokenService;

  @Transactional
  public AuthResponse register(RegisterRequest request) {
    if (userRepository.existsByEmail(request.email())) {
      throw new EmailAlreadyExistsException(request.email());
    }

    User user =
        User.builder()
            .email(request.email())
            .passwordHash(passwordEncoder.encode(request.password()))
            .build();
    user = userRepository.save(user);

    return toAuthResponse(user);
  }

  public AuthResponse login(LoginRequest request) {
    // Delegates to the DaoAuthenticationProvider (AppUserDetailsService + PasswordEncoder)
    // wired up implicitly by Spring Security; throws BadCredentialsException on failure.
    authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(request.email(), request.password()));

    User user =
        userRepository
            .findByEmail(request.email())
            .orElseThrow(() -> new BadCredentialsException("Email or password is incorrect"));

    return toAuthResponse(user);
  }

  private AuthResponse toAuthResponse(User user) {
    TokenService.IssuedToken issued = tokenService.issueAccessToken(user);
    return new AuthResponse(
        issued.token(), "Bearer", issued.expiresInSeconds(), user.getId(), user.getEmail());
  }
}
