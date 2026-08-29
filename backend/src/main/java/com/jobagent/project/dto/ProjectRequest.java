package com.jobagent.project.dto;

import com.jobagent.project.entity.ProjectStatus;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.List;

public record ProjectRequest(
    @NotBlank String name,
    String description,
    LocalDate startDate,
    LocalDate endDate,
    String repoUrl,
    boolean deployed,
    @NotNull ProjectStatus status,
    List<String> technologies,
    @Min(0) @Max(100) Integer healthScore) {}
