"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useAddProfileSkill,
  useDeleteProfileSkill,
  useProfileSkills,
  useUpdateProfileSkill,
} from "@/lib/api/hooks";
import type { Proficiency, ProfileSkillResponse } from "@/lib/api/types";
import { ApiClientError } from "@/lib/api/client";
import { inputStyle, labelStyle, primaryButtonStyle, dangerButtonStyle } from "./formStyles";

const PROFICIENCIES: Proficiency[] = ["NONE", "BEGINNER", "INTERMEDIATE", "ADVANCED"];

interface RowFormValues {
  proficiency: Proficiency;
  interviewReady: boolean;
  evidence: string;
}

function SkillRow({ skill }: { skill: ProfileSkillResponse }) {
  const updateSkill = useUpdateProfileSkill();
  const deleteSkill = useDeleteProfileSkill();
  const { register, handleSubmit, watch } = useForm<RowFormValues>({
    defaultValues: {
      proficiency: skill.proficiency,
      interviewReady: skill.interviewReady,
      evidence: skill.evidence.join("\n"),
    },
  });

  const onSave = (values: RowFormValues) => {
    updateSkill.mutate({
      id: skill.id,
      request: {
        proficiency: values.proficiency,
        interviewReady: values.interviewReady,
        evidence: values.evidence
          .split("\n")
          .map((v) => v.trim())
          .filter(Boolean),
      },
    });
  };

  return (
    <div style={{ padding: "11px 14px", borderBottom: "1px solid #F4F7FA", display: "grid", gap: 8 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600, color: "#0F172A" }}>
          {skill.skillName}
        </span>
        {skill.skillCategory && (
          <span style={{ fontSize: 10.5, color: "#94A3B8" }}>{skill.skillCategory}</span>
        )}
        <span style={{ flex: 1 }} />
        <button
          type="button"
          onClick={() => deleteSkill.mutate(skill.id)}
          style={{ ...dangerButtonStyle }}
          className="hover:text-[#A3170F] hover:border-[#FCA5A5]"
        >
          Remove
        </button>
      </div>
      <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
        <select style={{ ...inputStyle, width: "auto" }} {...register("proficiency")}>
          {PROFICIENCIES.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        <label style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "#334155" }}>
          <input type="checkbox" {...register("interviewReady")} />
          Interview ready
        </label>
      </div>
      <textarea
        style={{ ...inputStyle, minHeight: 44, resize: "vertical" }}
        placeholder="Evidence, one per line — e.g. Project: Order Management API"
        {...register("evidence")}
      />
      <div>
        <button type="button" onClick={handleSubmit(onSave)} style={{ ...primaryButtonStyle, fontSize: 11.5, padding: "5px 11px" }}>
          {updateSkill.isPending ? "Saving…" : "Save"}
        </button>
      </div>
      {watch("evidence").trim() === "" && (
        <span style={{ fontSize: 11, color: "#9A4A08" }}>
          No evidence recorded — this skill will not be claimed on your behalf until you add some.
        </span>
      )}
    </div>
  );
}

export function SkillsSection() {
  const { data: skills, isLoading } = useProfileSkills();
  const addSkill = useAddProfileSkill();
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, reset } = useForm<{ skillName: string; proficiency: Proficiency }>({
    defaultValues: { skillName: "", proficiency: "NONE" },
  });

  const onAdd = async (values: { skillName: string; proficiency: Proficiency }) => {
    if (!values.skillName.trim()) return;
    setError(null);
    try {
      await addSkill.mutateAsync({ skillName: values.skillName.trim(), proficiency: values.proficiency });
      reset();
    } catch (err) {
      setError(err instanceof ApiClientError ? err.message : "Could not add skill.");
    }
  };

  return (
    <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
      <div style={{ padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
        <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>
          Skills &amp; evidence
        </h2>
      </div>

      {isLoading ? (
        <div style={{ padding: 14, fontSize: 12.5, color: "#64748B" }}>Loading…</div>
      ) : skills && skills.length > 0 ? (
        skills.map((s) => <SkillRow key={s.id} skill={s} />)
      ) : (
        <div style={{ padding: 14, fontSize: 12.5, color: "#64748B" }}>
          No skills recorded yet. A skill only appears here once you add it with real evidence.
        </div>
      )}

      <form onSubmit={handleSubmit(onAdd)} style={{ display: "flex", gap: 8, padding: "10px 14px", background: "#FCFDFE", flexWrap: "wrap" }}>
        <input style={{ ...inputStyle, flex: 1, minWidth: 160 }} placeholder="Skill name, e.g. Kafka" {...register("skillName")} />
        <select style={{ ...inputStyle, width: "auto" }} {...register("proficiency")}>
          {PROFICIENCIES.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        <button type="submit" style={{ ...primaryButtonStyle, fontSize: 11.5, padding: "6px 12px" }} disabled={addSkill.isPending}>
          {addSkill.isPending ? "Adding…" : "+ Add skill"}
        </button>
      </form>
      {error && <div style={{ padding: "0 14px 10px", fontSize: 11.5, color: "#A3170F" }}>{error}</div>}
    </section>
  );
}
