package com.jobagent.skill.mapper;

import com.jobagent.skill.dto.ProfileSkillResponse;
import com.jobagent.skill.entity.ProfileSkill;
import com.jobagent.skill.entity.Skill;
import java.util.List;

public final class ProfileSkillMapper {

  private ProfileSkillMapper() {}

  public static ProfileSkillResponse toResponse(ProfileSkill profileSkill) {
    Skill skill = profileSkill.getSkill();
    return new ProfileSkillResponse(
        profileSkill.getId(),
        skill.getId(),
        skill.getName(),
        skill.getCategory(),
        profileSkill.getProficiency(),
        profileSkill.getLastUsed(),
        profileSkill.isInterviewReady(),
        List.copyOf(profileSkill.getEvidence()),
        profileSkill.getCreatedAt(),
        profileSkill.getUpdatedAt());
  }
}
