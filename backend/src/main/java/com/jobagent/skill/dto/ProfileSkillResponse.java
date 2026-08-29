package com.jobagent.skill.dto;

import com.jobagent.skill.entity.Proficiency;
import java.time.Instant;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

/** Nests the catalog skill's name/category so clients don't need a second lookup. */
public record ProfileSkillResponse(
    UUID id,
    UUID skillId,
    String skillName,
    String skillCategory,
    Proficiency proficiency,
    LocalDate lastUsed,
    boolean interviewReady,
    List<String> evidence,
    Instant createdAt,
    Instant updatedAt) {}
