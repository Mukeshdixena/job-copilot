package com.jobagent.skill.dto;

import java.time.Instant;
import java.util.UUID;

public record SkillResponse(UUID id, String name, String category, Instant createdAt) {}
