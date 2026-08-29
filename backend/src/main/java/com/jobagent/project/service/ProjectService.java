package com.jobagent.project.service;

import com.jobagent.common.exception.ResourceNotFoundException;
import com.jobagent.project.dto.ProjectRequest;
import com.jobagent.project.dto.ProjectResponse;
import com.jobagent.project.entity.Project;
import com.jobagent.project.mapper.ProjectMapper;
import com.jobagent.project.repository.ProjectRepository;
import java.util.List;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ProjectService {

  private final ProjectRepository projectRepository;

  @Transactional(readOnly = true)
  public List<ProjectResponse> listForUser(UUID userId) {
    return projectRepository.findByUserId(userId).stream().map(ProjectMapper::toResponse).toList();
  }

  @Transactional(readOnly = true)
  public ProjectResponse getForUser(UUID id, UUID userId) {
    return ProjectMapper.toResponse(findOwned(id, userId));
  }

  @Transactional
  public ProjectResponse create(ProjectRequest request, UUID userId) {
    Project saved = projectRepository.save(ProjectMapper.toEntity(request, userId));
    return ProjectMapper.toResponse(saved);
  }

  @Transactional
  public ProjectResponse update(UUID id, ProjectRequest request, UUID userId) {
    Project project = findOwned(id, userId);
    ProjectMapper.applyUpdate(project, request);
    return ProjectMapper.toResponse(projectRepository.save(project));
  }

  @Transactional
  public void delete(UUID id, UUID userId) {
    projectRepository.delete(findOwned(id, userId));
  }

  private Project findOwned(UUID id, UUID userId) {
    return projectRepository
        .findByIdAndUserId(id, userId)
        .orElseThrow(() -> new ResourceNotFoundException("Project not found: " + id));
  }
}
