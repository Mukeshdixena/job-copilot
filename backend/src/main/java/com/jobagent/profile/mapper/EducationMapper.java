package com.jobagent.profile.mapper;

import com.jobagent.profile.dto.EducationResponse;
import com.jobagent.profile.entity.Education;

public final class EducationMapper {

  private EducationMapper() {}

  public static EducationResponse toResponse(Education education) {
    return new EducationResponse(
        education.getId(),
        education.getInstitution(),
        education.getDegree(),
        education.getFieldOfStudy(),
        education.getStartYear(),
        education.getEndYear(),
        education.getGpa(),
        education.isVerified(),
        education.getCreatedAt(),
        education.getUpdatedAt());
  }
}
