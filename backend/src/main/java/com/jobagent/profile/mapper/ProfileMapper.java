package com.jobagent.profile.mapper;

import com.jobagent.profile.dto.ProfileResponse;
import com.jobagent.profile.entity.Profile;
import java.util.ArrayList;
import java.util.List;

public final class ProfileMapper {

  private ProfileMapper() {}

  public static ProfileResponse toResponse(Profile profile) {
    return new ProfileResponse(
        profile.getUserId(),
        profile.getPhone(),
        profile.getLocation(),
        List.copyOf(profile.getTargetRoles()),
        List.copyOf(profile.getPreferredLocations()),
        profile.getRemoteWorkPreference(),
        profile.getExperienceBandMin(),
        profile.getExperienceBandMax(),
        profile.getNoticePeriod(),
        profile.getSalaryExpectationMin(),
        profile.getSalaryExpectationMax(),
        profile.getSummary(),
        profile.getGithubUrl(),
        profile.getLinkedinUrl(),
        profile.getPortfolioUrl(),
        profile.getCreatedAt(),
        profile.getUpdatedAt());
  }

  /** Transient response for a user that has not saved a profile yet — never persisted. */
  public static ProfileResponse emptyResponse(java.util.UUID userId) {
    return new ProfileResponse(
        userId,
        null,
        null,
        new ArrayList<>(),
        new ArrayList<>(),
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null);
  }
}
