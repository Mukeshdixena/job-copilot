package com.jobagent.profile.entity;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;
import java.time.Instant;
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
 * The user's "core profile" — a 1:1 record with {@link com.jobagent.user.entity.User}. The user's
 * id is reused as this entity's primary key (no separate surrogate id), so a {@code Profile} is
 * looked up/created by the owning user's id directly.
 */
@Entity
@Table(name = "profiles")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Profile {

  @Id
  @Column(name = "user_id")
  private UUID userId;

  @Column(name = "phone")
  private String phone;

  @Column(name = "location")
  private String location;

  @ElementCollection
  @CollectionTable(
      name = "profile_target_roles",
      joinColumns = @JoinColumn(name = "profile_user_id"))
  @Column(name = "target_role", nullable = false)
  @Builder.Default
  private List<String> targetRoles = new ArrayList<>();

  @ElementCollection
  @CollectionTable(
      name = "profile_preferred_locations",
      joinColumns = @JoinColumn(name = "profile_user_id"))
  @Column(name = "preferred_location", nullable = false)
  @Builder.Default
  private List<String> preferredLocations = new ArrayList<>();

  @Enumerated(EnumType.STRING)
  @Column(name = "remote_work_preference", length = 20)
  private RemoteWorkPreference remoteWorkPreference;

  @Column(name = "experience_band_min")
  private Integer experienceBandMin;

  @Column(name = "experience_band_max")
  private Integer experienceBandMax;

  @Column(name = "notice_period")
  private String noticePeriod;

  @Column(name = "salary_expectation_min")
  private Long salaryExpectationMin;

  @Column(name = "salary_expectation_max")
  private Long salaryExpectationMax;

  @Column(name = "summary", columnDefinition = "text")
  private String summary;

  @Column(name = "github_url")
  private String githubUrl;

  @Column(name = "linkedin_url")
  private String linkedinUrl;

  @Column(name = "portfolio_url")
  private String portfolioUrl;

  @CreationTimestamp
  @Column(name = "created_at", nullable = false, updatable = false)
  private Instant createdAt;

  @UpdateTimestamp
  @Column(name = "updated_at", nullable = false)
  private Instant updatedAt;
}
