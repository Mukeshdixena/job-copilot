package com.jobagent.skill.controller;

import com.jobagent.skill.dto.CreateSkillRequest;
import com.jobagent.skill.dto.SkillResponse;
import com.jobagent.skill.entity.Skill;
import com.jobagent.skill.mapper.SkillMapper;
import com.jobagent.skill.service.SkillService;
import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * The skill catalog is global/shared, not scoped to the current user - every authenticated user
 * can search it or add to it.
 */
@RestController
@RequestMapping("/api/skills")
@RequiredArgsConstructor
public class SkillController {

  private final SkillService skillService;

  @GetMapping
  public List<SkillResponse> search(@RequestParam(required = false) String query) {
    return skillService.search(query).stream().map(SkillMapper::toResponse).toList();
  }

  /**
   * Create-or-get: returns 201 if a new catalog entry was created, 200 if a skill with this name
   * (case-insensitive) already existed. Either way the response body is the catalog entry - this
   * is friendlier for a shared catalog than forcing every caller to look-before-post.
   */
  @PostMapping
  public ResponseEntity<SkillResponse> createOrGet(@Valid @RequestBody CreateSkillRequest request) {
    boolean alreadyExisted = skillService.existsByName(request.name());
    Skill skill = skillService.getOrCreate(request.name(), request.category());
    HttpStatus status = alreadyExisted ? HttpStatus.OK : HttpStatus.CREATED;
    return ResponseEntity.status(status).body(SkillMapper.toResponse(skill));
  }
}
