package com.jobagent.skill.dto;

import jakarta.validation.constraints.NotBlank;

public record CreateSkillRequest(@NotBlank String name, String category) {}
