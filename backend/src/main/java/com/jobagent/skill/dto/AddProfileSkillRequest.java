package com.jobagent.skill.dto;

import com.jobagent.skill.entity.Proficiency;
import jakarta.validation.constraints.AssertTrue;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

/**
 * Either {@code skillId} (an existing catalog skill) or {@code skillName} (resolved/created via
 * the same get-or-create logic as {@code POST /api/skills}) must be provided - accepting a name
 * directly saves a real frontend the two-step "look up skill id, then post" round trip.
 */
public record AddProfileSkillRequest(
    UUID skillId,
    String skillName,
    Proficiency proficiency,
    LocalDate lastUsed,
    Boolean interviewReady,
    List<String> evidence) {

  @AssertTrue(message = "Either skillId or skillName must be provided")
  public boolean isSkillIdentifierPresent() {
    return skillId != null || (skillName != null && !skillName.isBlank());
  }
}
