package com.jobagent.skill.service;

import com.jobagent.common.exception.DuplicateResourceException;
import com.jobagent.common.exception.ResourceNotFoundException;
import com.jobagent.skill.dto.AddProfileSkillRequest;
import com.jobagent.skill.dto.UpdateProfileSkillRequest;
import com.jobagent.skill.entity.Proficiency;
import com.jobagent.skill.entity.ProfileSkill;
import com.jobagent.skill.entity.Skill;
import com.jobagent.skill.repository.ProfileSkillRepository;
import com.jobagent.user.entity.User;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Manages a user's skill claims. Every write here is an explicit user action - there is
 * deliberately no logic anywhere that infers or auto-adds a skill claim on the user's behalf; a
 * skill only ever appears once evidence for it has been submitted.
 */
@Service
@RequiredArgsConstructor
public class ProfileSkillService {

  private final ProfileSkillRepository profileSkillRepository;
  private final SkillService skillService;

  @Transactional(readOnly = true)
  public List<ProfileSkill> listForUser(User user) {
    return profileSkillRepository.findAllByUserWithSkill(user);
  }

  @Transactional
  public ProfileSkill add(User user, AddProfileSkillRequest request) {
    Skill skill =
        request.skillId() != null
            ? skillService.getById(request.skillId())
            : skillService.getOrCreate(request.skillName());

    if (profileSkillRepository.existsByUserAndSkill(user, skill)) {
      throw new DuplicateResourceException(
          "You already have a skill claim for \"" + skill.getName() + "\"");
    }

    ProfileSkill profileSkill =
        ProfileSkill.builder()
            .user(user)
            .skill(skill)
            .proficiency(request.proficiency() != null ? request.proficiency() : Proficiency.NONE)
            .lastUsed(request.lastUsed())
            .interviewReady(Boolean.TRUE.equals(request.interviewReady()))
            .evidence(copyOrEmpty(request.evidence()))
            .build();

    return profileSkillRepository.save(profileSkill);
  }

  @Transactional
  public ProfileSkill update(User user, UUID profileSkillId, UpdateProfileSkillRequest request) {
    ProfileSkill profileSkill = requireOwned(user, profileSkillId);
    profileSkill.setProficiency(request.proficiency());
    profileSkill.setLastUsed(request.lastUsed());
    profileSkill.setInterviewReady(request.interviewReady());
    profileSkill.setEvidence(copyOrEmpty(request.evidence()));
    return profileSkillRepository.save(profileSkill);
  }

  @Transactional
  public void delete(User user, UUID profileSkillId) {
    ProfileSkill profileSkill = requireOwned(user, profileSkillId);
    profileSkillRepository.delete(profileSkill);
  }

  private ProfileSkill requireOwned(User user, UUID profileSkillId) {
    // Join-fetches the skill so the mapper can read it after this @Transactional method returns
    // and the persistence session closes (skill is a lazy @ManyToOne on ProfileSkill).
    return profileSkillRepository
        .findByIdAndUserWithSkill(profileSkillId, user)
        .orElseThrow(
            () -> new ResourceNotFoundException("Skill claim not found: " + profileSkillId));
  }

  private static List<String> copyOrEmpty(List<String> values) {
    return values != null ? new ArrayList<>(values) : new ArrayList<>();
  }
}
