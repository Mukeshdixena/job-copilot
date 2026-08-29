package com.jobagent.skill.repository;

import com.jobagent.skill.entity.ProfileSkill;
import com.jobagent.skill.entity.Skill;
import com.jobagent.user.entity.User;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ProfileSkillRepository extends JpaRepository<ProfileSkill, UUID> {

  @Query(
      "select ps from ProfileSkill ps join fetch ps.skill where ps.user = :user "
          + "order by ps.createdAt asc")
  List<ProfileSkill> findAllByUserWithSkill(@Param("user") User user);

  @Query("select ps from ProfileSkill ps join fetch ps.skill where ps.id = :id and ps.user = :user")
  Optional<ProfileSkill> findByIdAndUserWithSkill(@Param("id") UUID id, @Param("user") User user);

  boolean existsByUserAndSkill(User user, Skill skill);
}
