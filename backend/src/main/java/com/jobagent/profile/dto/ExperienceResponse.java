package com.jobagent.profile.dto;

import java.time.Instant;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

public record ExperienceResponse(
    UUID id,
    String title,
    String organization,
    LocalDate startDate,
    LocalDate endDate,
    List<String> technologies,
    String description,
    Instant createdAt,
    Instant updatedAt) {}
