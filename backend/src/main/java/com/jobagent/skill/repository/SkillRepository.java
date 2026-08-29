package com.jobagent.skill.repository;

import com.jobagent.skill.entity.Skill;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SkillRepository extends JpaRepository<Skill, UUID> {

  Optional<Skill> findByNameIgnoreCase(String name);

  List<Skill> findByNameContainingIgnoreCaseOrderByNameAsc(String query);
}
