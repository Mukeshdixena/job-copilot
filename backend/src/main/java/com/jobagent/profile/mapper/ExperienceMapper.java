package com.jobagent.profile.mapper;

import com.jobagent.profile.dto.ExperienceResponse;
import com.jobagent.profile.entity.Experience;
import java.util.List;

public final class ExperienceMapper {

  private ExperienceMapper() {}

  public static ExperienceResponse toResponse(Experience experience) {
    return new ExperienceResponse(
        experience.getId(),
        experience.getTitle(),
        experience.getOrganization(),
        experience.getStartDate(),
        experience.getEndDate(),
        List.copyOf(experience.getTechnologies()),
        experience.getDescription(),
        experience.getCreatedAt(),
        experience.getUpdatedAt());
  }
}
