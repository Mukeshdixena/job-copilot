package com.jobagent.profile.repository;

import com.jobagent.profile.entity.Experience;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExperienceRepository extends JpaRepository<Experience, UUID> {

  List<Experience> findByUserIdOrderByStartDateDesc(UUID userId);

  Optional<Experience> findByIdAndUserId(UUID id, UUID userId);
}
