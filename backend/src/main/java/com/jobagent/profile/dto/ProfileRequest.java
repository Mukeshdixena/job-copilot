package com.jobagent.profile.dto;

import com.jobagent.profile.entity.RemoteWorkPreference;
import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.Size;
import java.util.List;

/** Full upsert payload for {@code PUT /api/profile}. */
public record ProfileRequest(
    @Size(max = 50) String phone,
    @Size(max = 255) String location,
    List<@Size(max = 255) String> targetRoles,
    List<@Size(max = 255) String> preferredLocations,
    RemoteWorkPreference remoteWorkPreference,
    @PositiveOrZero Integer experienceBandMin,
    @PositiveOrZero Integer experienceBandMax,
    @Size(max = 50) String noticePeriod,
    @PositiveOrZero Long salaryExpectationMin,
    @PositiveOrZero Long salaryExpectationMax,
    @Size(max = 5000) String summary,
    @Size(max = 500) String githubUrl,
    @Size(max = 500) String linkedinUrl,
    @Size(max = 500) String portfolioUrl) {}
