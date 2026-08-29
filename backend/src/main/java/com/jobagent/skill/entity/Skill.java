package com.jobagent.skill.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.Instant;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

/**
 * A global, shared skill catalog entry (e.g. "Spring Boot", "PostgreSQL"). Not user-scoped -
 * users claim skills via {@link ProfileSkill}, which is where evidence lives.
 *
 * <p>Uniqueness is case-insensitive: "Spring Boot" and "spring boot" must resolve to the same
 * row. That's enforced both here (service-layer lookup via {@code findByNameIgnoreCase}) and at
 * the database level (a unique index on {@code lower(name)}, see the Flyway migration).
 */
@Entity
@Table(name = "skills")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Skill {

  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  private UUID id;

  @Column(nullable = false, unique = true)
  private String name;

  @Column
  private String category;

  @CreationTimestamp
  @Column(name = "created_at", nullable = false, updatable = false)
  private Instant createdAt;
}
