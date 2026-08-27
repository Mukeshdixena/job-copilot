package com.jobagent.auth.dto;

import java.util.UUID;

public record AuthResponse(
    String accessToken, String tokenType, long expiresInSeconds, UUID userId, String email) {}
