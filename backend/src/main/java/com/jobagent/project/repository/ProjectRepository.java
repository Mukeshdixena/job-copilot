package com.jobagent.project.repository;

import com.jobagent.project.entity.Project;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, UUID> {
  List<Project> findByUserId(UUID userId);

  Optional<Project> findByIdAndUserId(UUID id, UUID userId);
}
