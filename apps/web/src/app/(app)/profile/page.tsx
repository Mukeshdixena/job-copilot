"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth/AuthProvider";
import { useEducations, useExperiences, useProfile, useProfileSkills } from "@/lib/api/hooks";
import { TargetRoleSection } from "@/components/profile/TargetRoleSection";
import { SkillsSection } from "@/components/profile/SkillsSection";
import { ExperienceSection } from "@/components/profile/ExperienceSection";
import { EducationSection } from "@/components/profile/EducationSection";

function computeCompleteness(
  hasProfileBasics: boolean,
  hasExperience: boolean,
  hasEducation: boolean,
  hasSkills: boolean
) {
  let score = 0;
  if (hasProfileBasics) score += 40;
  if (hasExperience) score += 20;
  if (hasEducation) score += 15;
  if (hasSkills) score += 25;
  return score;
}

export default function ProfilePage() {
  const { user } = useAuth();
  const { data: profile } = useProfile();
  const { data: experiences } = useExperiences();
  const { data: educations } = useEducations();
  const { data: skills } = useProfileSkills();

  const hasProfileBasics = Boolean(profile && (profile.targetRoles.length > 0 || profile.summary));
  const completeness = computeCompleteness(
    hasProfileBasics,
    Boolean(experiences && experiences.length > 0),
    Boolean(educations && educations.length > 0),
    Boolean(skills && skills.length > 0)
  );
  const missingSections = [
    !hasProfileBasics && "target role",
    !(experiences && experiences.length > 0) && "experience",
    !(educations && educations.length > 0) && "education",
    !(skills && skills.length > 0) && "skills",
  ].filter(Boolean).length;

  const initials = user?.email ? user.email.slice(0, 2).toUpperCase() : "--";

  return (
    <div style={{ padding: "20px 22px 44px", display: "grid", gap: 14, alignContent: "start" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 640, letterSpacing: "-.02em" }}>Profile</h1>
          <div style={{ fontSize: 12.5, color: "#475569", marginTop: 3 }}>
            Your single source of career truth. Everything the agent writes is traced back to what is recorded here.
          </div>
        </div>
        <Link
          href="/profile/audit"
          className="hover:bg-[#2449C4]"
          style={{ fontSize: 12, fontWeight: 620, padding: "7px 13px", borderRadius: 7, border: "1px solid #2F5BEA", background: "#2F5BEA", color: "#fff", cursor: "pointer" }}
        >
          Run AI audit
        </Link>
      </div>

      <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, padding: 14, display: "grid", gridTemplateColumns: "auto minmax(0,1fr) auto", gap: 16, alignItems: "center" }}>
        <div style={{ width: 52, height: 52, borderRadius: 99, background: "#0C1425", display: "grid", placeItems: "center", fontFamily: "var(--font-mono)", fontSize: 17, fontWeight: 600, color: "#fff" }}>
          {initials}
        </div>
        <div style={{ minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9, flexWrap: "wrap" }}>
            <span style={{ fontSize: 16, fontWeight: 640, color: "#0F172A", letterSpacing: "-.015em" }}>
              {user?.email ?? "Loading…"}
            </span>
          </div>
          <div style={{ fontSize: 12.5, color: "#475569", marginTop: 3 }}>
            {profile?.targetRoles && profile.targetRoles.length > 0
              ? profile.targetRoles.join(", ")
              : "No target role set yet"}
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#94A3B8" }}>Completeness</div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 28, fontWeight: 600, letterSpacing: "-.04em", color: "#0F172A", lineHeight: 1.05 }}>
            {completeness}%
          </div>
          <div style={{ fontSize: 11, color: "#64748B" }}>
            {missingSections === 0 ? "All sections filled" : `${missingSections} section${missingSections === 1 ? "" : "s"} need work`}
          </div>
        </div>
      </section>

      <div style={{ display: "grid", gap: 14, minWidth: 0 }}>
        <TargetRoleSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
      </div>
    </div>
  );
}
