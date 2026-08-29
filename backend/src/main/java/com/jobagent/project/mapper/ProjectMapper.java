package com.jobagent.project.mapper;

import com.jobagent.project.dto.ProjectRequest;
import com.jobagent.project.dto.ProjectResponse;
import com.jobagent.project.entity.Project;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public final class ProjectMapper {

  private ProjectMapper() {}

  public static Project toEntity(ProjectRequest request, UUID userId) {
    return Project.builder()
        .userId(userId)
        .name(request.name())
        .description(request.description())
        .startDate(request.startDate())
        .endDate(request.endDate())
        .repoUrl(request.repoUrl())
        .deployed(request.deployed())
        .status(request.status())
        .technologies(copyOf(request.technologies()))
        .healthScore(request.healthScore())
        .build();
  }

  /** Mutates the managed entity's persistent collection in place rather than replacing it. */
  public static void applyUpdate(Project project, ProjectRequest request) {
    project.setName(request.name());
    project.setDescription(request.description());
    project.setStartDate(request.startDate());
    project.setEndDate(request.endDate());
    project.setRepoUrl(request.repoUrl());
    project.setDeployed(request.deployed());
    project.setStatus(request.status());
    project.getTechnologies().clear();
    if (request.technologies() != null) {
      project.getTechnologies().addAll(request.technologies());
    }
    project.setHealthScore(request.healthScore());
  }

  public static ProjectResponse toResponse(Project project) {
    return new ProjectResponse(
        project.getId(),
        project.getUserId(),
        project.getName(),
        project.getDescription(),
        project.getStartDate(),
        project.getEndDate(),
        project.getRepoUrl(),
        project.isDeployed(),
        project.getStatus().name(),
        List.copyOf(project.getTechnologies()),
        project.getHealthScore(),
        project.getCreatedAt(),
        project.getUpdatedAt());
  }

  private static List<String> copyOf(List<String> technologies) {
    return technologies == null ? new ArrayList<>() : new ArrayList<>(technologies);
  }
}
