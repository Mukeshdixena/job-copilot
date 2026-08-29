package com.jobagent.profile.dto;

import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.math.BigDecimal;

public record EducationRequest(
    @NotBlank @Size(max = 255) String institution,
    @NotBlank @Size(max = 255) String degree,
    @NotBlank @Size(max = 255) String fieldOfStudy,
    @NotNull @Min(1900) Integer startYear,
    @Min(1900) Integer endYear,
    @DecimalMin("0.0") @DecimalMax("100.0") BigDecimal gpa) {}
