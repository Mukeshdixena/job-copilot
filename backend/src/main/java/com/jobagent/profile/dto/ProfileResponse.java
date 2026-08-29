package com.jobagent.profile.dto;

import com.jobagent.profile.entity.RemoteWorkPreference;
import java.time.Instant;
import java.util.List;
import java.util.UUID;

public record ProfileResponse(
    UUID userId,
    String phone,
    String location,
    List<String> targetRoles,
    List<String> preferredLocations,
    RemoteWorkPreference remoteWorkPreference,
    Integer experienceBandMin,
    Integer experienceBandMax,
    String noticePeriod,
    Long salaryExpectationMin,
    Long salaryExpectationMax,
    String summary,
    String githubUrl,
    String linkedinUrl,
    String portfolioUrl,
    Instant createdAt,
    Instant updatedAt) {}
