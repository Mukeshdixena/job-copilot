package com.jobagent.project.dto;

import java.time.Instant;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

public record ProjectResponse(
    UUID id,
    UUID userId,
    String name,
    String description,
    LocalDate startDate,
    LocalDate endDate,
    String repoUrl,
    boolean deployed,
    String status,
    List<String> technologies,
    Integer healthScore,
    Instant createdAt,
    Instant updatedAt) {}
