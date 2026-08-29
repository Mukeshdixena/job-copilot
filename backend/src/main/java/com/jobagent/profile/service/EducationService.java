package com.jobagent.profile.service;

import com.jobagent.common.exception.ResourceNotFoundException;
import com.jobagent.profile.dto.EducationRequest;
import com.jobagent.profile.dto.EducationResponse;
import com.jobagent.profile.entity.Education;
import com.jobagent.profile.mapper.EducationMapper;
import com.jobagent.profile.repository.EducationRepository;
import java.util.List;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class EducationService {

  private final EducationRepository educationRepository;

  @Transactional(readOnly = true)
  public List<EducationResponse> listEducations(UUID userId) {
    return educationRepository.findByUserIdOrderByStartYearDesc(userId).stream()
        .map(EducationMapper::toResponse)
        .toList();
  }

  @Transactional
  public EducationResponse createEducation(UUID userId, EducationRequest request) {
    Education education =
        Education.builder()
            .userId(userId)
            .institution(request.institution())
            .degree(request.degree())
            .fieldOfStudy(request.fieldOfStudy())
            .startYear(request.startYear())
            .endYear(request.endYear())
            .gpa(request.gpa())
            .verified(false)
            .build();

    Education saved = educationRepository.save(education);
    return EducationMapper.toResponse(saved);
  }

  @Transactional
  public EducationResponse updateEducation(UUID userId, UUID id, EducationRequest request) {
    Education education = requireOwned(userId, id);

    education.setInstitution(request.institution());
    education.setDegree(request.degree());
    education.setFieldOfStudy(request.fieldOfStudy());
    education.setStartYear(request.startYear());
    education.setEndYear(request.endYear());
    education.setGpa(request.gpa());

    Education saved = educationRepository.save(education);
    return EducationMapper.toResponse(saved);
  }

  @Transactional
  public void deleteEducation(UUID userId, UUID id) {
    Education education = requireOwned(userId, id);
    educationRepository.delete(education);
  }

  private Education requireOwned(UUID userId, UUID id) {
    return educationRepository
        .findByIdAndUserId(id, userId)
        .orElseThrow(() -> new ResourceNotFoundException("Education not found: " + id));
  }
}
