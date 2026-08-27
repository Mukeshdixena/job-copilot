package com.jobagent.auth;

import com.jobagent.auth.config.JwtProperties;
import com.jobagent.user.entity.User;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TokenService {

  private final JwtEncoder jwtEncoder;
  private final JwtProperties properties;

  public IssuedToken issueAccessToken(User user) {
    Instant now = Instant.now();
    Instant expiresAt = now.plus(properties.accessTokenTtlMinutes(), ChronoUnit.MINUTES);

    JwtClaimsSet claims =
        JwtClaimsSet.builder()
            .issuer(properties.issuer())
            .issuedAt(now)
            .expiresAt(expiresAt)
            .subject(user.getEmail())
            .claim("userId", user.getId().toString())
            .claim("roles", List.of(user.getRole().name()))
            .build();

    String token = jwtEncoder.encode(JwtEncoderParameters.from(claims)).getTokenValue();
    long expiresInSeconds = ChronoUnit.SECONDS.between(now, expiresAt);
    return new IssuedToken(token, expiresInSeconds);
  }

  public record IssuedToken(String token, long expiresInSeconds) {}
}
