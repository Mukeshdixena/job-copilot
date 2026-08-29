package com.jobagent.profile.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import java.time.Instant;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

/** A single education entry belonging to a {@link com.jobagent.user.entity.User}. */
@Entity
@Table(name = "educations")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Education {

  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  private UUID id;

  @Column(name = "user_id", nullable = false)
  private UUID userId;

  @Column(name = "institution", nullable = false)
  private String institution;

  @Column(name = "degree", nullable = false)
  private String degree;

  @Column(name = "field_of_study", nullable = false)
  private String fieldOfStudy;

  @Column(name = "start_year", nullable = false)
  private Integer startYear;

  @Column(name = "end_year")
  private Integer endYear;

  @Column(name = "gpa", precision = 4, scale = 2)
  private BigDecimal gpa;

  @Column(name = "verified", nullable = false)
  @Builder.Default
  private boolean verified = false;

  @CreationTimestamp
  @Column(name = "created_at", nullable = false, updatable = false)
  private Instant createdAt;

  @UpdateTimestamp
  @Column(name = "updated_at", nullable = false)
  private Instant updatedAt;
}
