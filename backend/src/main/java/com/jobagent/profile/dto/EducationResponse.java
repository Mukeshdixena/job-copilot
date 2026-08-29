package com.jobagent.profile.dto;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.UUID;

public record EducationResponse(
    UUID id,
    String institution,
    String degree,
    String fieldOfStudy,
    Integer startYear,
    Integer endYear,
    BigDecimal gpa,
    boolean verified,
    Instant createdAt,
    Instant updatedAt) {}
