package com.jobagent.skill.entity;

import com.jobagent.user.entity.User;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OrderColumn;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import java.time.Instant;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

/**
 * A single user's claim on a {@link Skill}, carrying the evidence that backs it up. This is the
 * only place a skill can be asserted for a user - the system must never imply a skill the user
 * hasn't actually claimed with evidence, so there is deliberately no auto-inference anywhere that
 * creates or updates these rows.
 *
 * <p>{@code lastUsed} is stored as a {@link LocalDate} (simplification: the 1st of the relevant
 * month) rather than a {@link java.time.YearMonth} to avoid a custom JPA converter for this pass.
 */
@Entity
@Table(
    name = "profile_skills",
    uniqueConstraints = @UniqueConstraint(columnNames = {"user_id", "skill_id"}))
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProfileSkill {

  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  private UUID id;

  @ManyToOne(fetch = FetchType.LAZY, optional = false)
  @JoinColumn(name = "user_id", nullable = false)
  private User user;

  @ManyToOne(fetch = FetchType.LAZY, optional = false)
  @JoinColumn(name = "skill_id", nullable = false)
  private Skill skill;

  @Enumerated(EnumType.STRING)
  @Column(nullable = false, length = 32)
  @Builder.Default
  private Proficiency proficiency = Proficiency.NONE;

  @Column(name = "last_used")
  private LocalDate lastUsed;

  @Column(name = "interview_ready", nullable = false)
  @Builder.Default
  private boolean interviewReady = false;

  /** Free-text pointers to what backs this claim, e.g. "Project: Order Management API". */
  @ElementCollection(fetch = FetchType.EAGER)
  @CollectionTable(
      name = "profile_skill_evidence",
      joinColumns = @JoinColumn(name = "profile_skill_id"))
  @OrderColumn(name = "evidence_order")
  @Column(name = "evidence", columnDefinition = "text", nullable = false)
  @Builder.Default
  private List<String> evidence = new ArrayList<>();

  @CreationTimestamp
  @Column(name = "created_at", nullable = false, updatable = false)
  private Instant createdAt;

  @UpdateTimestamp
  @Column(name = "updated_at", nullable = false)
  private Instant updatedAt;
}
