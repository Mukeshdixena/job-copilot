package com.jobagent.skill.mapper;

import com.jobagent.skill.dto.SkillResponse;
import com.jobagent.skill.entity.Skill;

public final class SkillMapper {

  private SkillMapper() {}

  public static SkillResponse toResponse(Skill skill) {
    return new SkillResponse(skill.getId(), skill.getName(), skill.getCategory(), skill.getCreatedAt());
  }
}
