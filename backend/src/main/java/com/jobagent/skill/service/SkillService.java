package com.jobagent.skill.service;

import com.jobagent.common.exception.ResourceNotFoundException;
import com.jobagent.skill.entity.Skill;
import com.jobagent.skill.repository.SkillRepository;
import java.util.List;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * The skill catalog is global and shared across users (not user-scoped). Name matching is
 * case-insensitive everywhere so "Spring Boot" and "spring boot" resolve to the same row.
 */
@Service
@RequiredArgsConstructor
public class SkillService {

  private final SkillRepository skillRepository;

  @Transactional(readOnly = true)
  public List<Skill> search(String query) {
    if (query == null || query.isBlank()) {
      return skillRepository.findAll(Sort.by(Sort.Direction.ASC, "name"));
    }
    return skillRepository.findByNameContainingIgnoreCaseOrderByNameAsc(query.trim());
  }

  @Transactional(readOnly = true)
  public boolean existsByName(String name) {
    return skillRepository.findByNameIgnoreCase(name.trim()).isPresent();
  }

  @Transactional(readOnly = true)
  public Skill getById(UUID id) {
    return skillRepository
        .findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Skill not found: " + id));
  }

  /**
   * Idempotent create-or-get: returns the existing catalog entry if a skill with this name
   * (case-insensitive) already exists, otherwise creates it. Friendlier for a shared catalog than
   * a hard 409 on every re-submission of a skill name a client isn't sure exists yet.
   */
  @Transactional
  public Skill getOrCreate(String name, String category) {
    String trimmed = name.trim();
    return skillRepository
        .findByNameIgnoreCase(trimmed)
        .orElseGet(
            () -> skillRepository.save(Skill.builder().name(trimmed).category(category).build()));
  }

  @Transactional
  public Skill getOrCreate(String name) {
    return getOrCreate(name, null);
  }
}
