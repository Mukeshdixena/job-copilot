package com.jobagent.profile.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.time.LocalDate;
import java.util.List;

public record ExperienceRequest(
    @NotBlank @Size(max = 255) String title,
    @NotBlank @Size(max = 255) String organization,
    @NotNull LocalDate startDate,
    LocalDate endDate,
    List<@Size(max = 255) String> technologies,
    @Size(max = 5000) String description) {}
