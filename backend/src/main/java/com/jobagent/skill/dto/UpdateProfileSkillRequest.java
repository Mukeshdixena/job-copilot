package com.jobagent.skill.dto;

import com.jobagent.skill.entity.Proficiency;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.List;

public record UpdateProfileSkillRequest(
    @NotNull Proficiency proficiency, LocalDate lastUsed, boolean interviewReady, List<String> evidence) {}
