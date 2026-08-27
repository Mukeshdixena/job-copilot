package com.jobagent.auth.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "jobagent.jwt")
public record JwtProperties(
    String secret, long accessTokenTtlMinutes, long refreshTokenTtlDays, String issuer) {}
