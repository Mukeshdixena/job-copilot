package com.jobagent.profile.service;

import com.jobagent.profile.dto.ProfileRequest;
import com.jobagent.profile.dto.ProfileResponse;
import com.jobagent.profile.entity.Profile;
import com.jobagent.profile.mapper.ProfileMapper;
import com.jobagent.profile.repository.ProfileRepository;
import java.util.ArrayList;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Reads and upserts the current user's core {@link Profile}. A user who has never saved a
 * profile has no row in {@code profiles} yet; {@link #getProfile(UUID)} returns a transient,
 * all-empty {@link ProfileResponse} in that case rather than 404ing or eagerly creating a row —
 * the row is only ever created on the first {@link #upsertProfile(UUID, ProfileRequest)} call.
 */
@Service
@RequiredArgsConstructor
public class ProfileService {

  private final ProfileRepository profileRepository;

  @Transactional(readOnly = true)
  public ProfileResponse getProfile(UUID userId) {
    return profileRepository
        .findById(userId)
        .map(ProfileMapper::toResponse)
        .orElseGet(() -> ProfileMapper.emptyResponse(userId));
  }

  @Transactional
  public ProfileResponse upsertProfile(UUID userId, ProfileRequest request) {
    Profile profile = profileRepository.findById(userId).orElseGet(() -> newProfile(userId));

    profile.setPhone(request.phone());
    profile.setLocation(request.location());
    profile.setTargetRoles(
        request.targetRoles() == null ? new ArrayList<>() : new ArrayList<>(request.targetRoles()));
    profile.setPreferredLocations(
        request.preferredLocations() == null
            ? new ArrayList<>()
            : new ArrayList<>(request.preferredLocations()));
    profile.setRemoteWorkPreference(request.remoteWorkPreference());
    profile.setExperienceBandMin(request.experienceBandMin());
    profile.setExperienceBandMax(request.experienceBandMax());
    profile.setNoticePeriod(request.noticePeriod());
    profile.setSalaryExpectationMin(request.salaryExpectationMin());
    profile.setSalaryExpectationMax(request.salaryExpectationMax());
    profile.setSummary(request.summary());
    profile.setGithubUrl(request.githubUrl());
    profile.setLinkedinUrl(request.linkedinUrl());
    profile.setPortfolioUrl(request.portfolioUrl());

    Profile saved = profileRepository.save(profile);
    return ProfileMapper.toResponse(saved);
  }

  private Profile newProfile(UUID userId) {
    return Profile.builder().userId(userId).build();
  }
}
