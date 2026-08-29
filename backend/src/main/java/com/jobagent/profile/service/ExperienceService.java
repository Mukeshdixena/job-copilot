package com.jobagent.profile.service;

import com.jobagent.common.exception.ResourceNotFoundException;
import com.jobagent.profile.dto.ExperienceRequest;
import com.jobagent.profile.dto.ExperienceResponse;
import com.jobagent.profile.entity.Experience;
import com.jobagent.profile.mapper.ExperienceMapper;
import com.jobagent.profile.repository.ExperienceRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ExperienceService {

  private final ExperienceRepository experienceRepository;

  @Transactional(readOnly = true)
  public List<ExperienceResponse> listExperiences(UUID userId) {
    return experienceRepository.findByUserIdOrderByStartDateDesc(userId).stream()
        .map(ExperienceMapper::toResponse)
        .toList();
  }

  @Transactional
  public ExperienceResponse createExperience(UUID userId, ExperienceRequest request) {
    Experience experience =
        Experience.builder()
            .userId(userId)
            .title(request.title())
            .organization(request.organization())
            .startDate(request.startDate())
            .endDate(request.endDate())
            .technologies(toMutableList(request.technologies()))
            .description(request.description())
            .build();

    Experience saved = experienceRepository.save(experience);
    return ExperienceMapper.toResponse(saved);
  }

  @Transactional
  public ExperienceResponse updateExperience(UUID userId, UUID id, ExperienceRequest request) {
    Experience experience = requireOwned(userId, id);

    experience.setTitle(request.title());
    experience.setOrganization(request.organization());
    experience.setStartDate(request.startDate());
    experience.setEndDate(request.endDate());
    experience.setTechnologies(toMutableList(request.technologies()));
    experience.setDescription(request.description());

    Experience saved = experienceRepository.save(experience);
    return ExperienceMapper.toResponse(saved);
  }

  @Transactional
  public void deleteExperience(UUID userId, UUID id) {
    Experience experience = requireOwned(userId, id);
    experienceRepository.delete(experience);
  }

  private Experience requireOwned(UUID userId, UUID id) {
    return experienceRepository
        .findByIdAndUserId(id, userId)
        .orElseThrow(() -> new ResourceNotFoundException("Experience not found: " + id));
  }

  private static List<String> toMutableList(List<String> values) {
    return values == null ? new ArrayList<>() : new ArrayList<>(values);
  }
}
