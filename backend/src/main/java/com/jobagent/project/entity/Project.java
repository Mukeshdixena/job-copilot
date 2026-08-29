package com.jobagent.project.entity;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OrderColumn;
import jakarta.persistence.Table;
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
 * A personal project owned directly by a {@link com.jobagent.user.entity.User} (not nested under
 * a profile), per the product's data model. Scored/analyzed later by the (not-yet-built) project
 * analyzer module; this pass only persists the raw data it will need.
 */
@Entity
@Table(name = "projects")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Project {

  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  private UUID id;

  @Column(name = "user_id", nullable = false)
  private UUID userId;

  @Column(nullable = false)
  private String name;

  @Column(columnDefinition = "text")
  private String description;

  @Column(name = "start_date")
  private LocalDate startDate;

  @Column(name = "end_date")
  private LocalDate endDate;

  @Column(name = "repo_url", length = 500)
  private String repoUrl;

  @Column(nullable = false)
  @Builder.Default
  private boolean deployed = false;

  @Enumerated(EnumType.STRING)
  @Column(nullable = false, length = 32)
  private ProjectStatus status;

  @ElementCollection
  @CollectionTable(name = "project_technologies", joinColumns = @JoinColumn(name = "project_id"))
  @OrderColumn(name = "list_index")
  @Column(name = "technology", nullable = false)
  @Builder.Default
  private List<String> technologies = new ArrayList<>();

  @Column(name = "health_score")
  private Integer healthScore;

  @CreationTimestamp
  @Column(name = "created_at", nullable = false, updatable = false)
  private Instant createdAt;

  @UpdateTimestamp
  @Column(name = "updated_at", nullable = false)
  private Instant updatedAt;
}
