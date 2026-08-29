"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useCreateExperience,
  useDeleteExperience,
  useExperiences,
  useUpdateExperience,
} from "@/lib/api/hooks";
import type { ExperienceRequest, ExperienceResponse } from "@/lib/api/types";
import { ApiClientError } from "@/lib/api/client";
import { inputStyle, labelStyle, primaryButtonStyle, secondaryButtonStyle, dangerButtonStyle } from "./formStyles";

interface FormValues {
  title: string;
  organization: string;
  startDate: string;
  endDate: string;
  technologies: string;
  description: string;
}

const emptyValues: FormValues = {
  title: "",
  organization: "",
  startDate: "",
  endDate: "",
  technologies: "",
  description: "",
};

function toRequest(values: FormValues): ExperienceRequest {
  return {
    title: values.title,
    organization: values.organization,
    startDate: values.startDate,
    endDate: values.endDate || null,
    technologies: values.technologies
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean),
    description: values.description || null,
  };
}

function ExperienceForm({
  initial,
  onSubmit,
  onCancel,
  submitLabel,
  isPending,
}: {
  initial: FormValues;
  onSubmit: (values: FormValues) => void;
  onCancel?: () => void;
  submitLabel: string;
  isPending: boolean;
}) {
  const { register, handleSubmit } = useForm<FormValues>({ defaultValues: initial });
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: "grid", gap: 8 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 8 }}>
        <label style={{ display: "grid", gap: 4 }}>
          <span style={labelStyle}>Title</span>
          <input style={inputStyle} required {...register("title")} />
        </label>
        <label style={{ display: "grid", gap: 4 }}>
          <span style={labelStyle}>Organization</span>
          <input style={inputStyle} required {...register("organization")} />
        </label>
        <label style={{ display: "grid", gap: 4 }}>
          <span style={labelStyle}>Start date</span>
          <input style={inputStyle} type="date" required {...register("startDate")} />
        </label>
        <label style={{ display: "grid", gap: 4 }}>
          <span style={labelStyle}>End date (blank = current)</span>
          <input style={inputStyle} type="date" {...register("endDate")} />
        </label>
      </div>
      <label style={{ display: "grid", gap: 4 }}>
        <span style={labelStyle}>Technologies (comma-separated)</span>
        <input style={inputStyle} {...register("technologies")} placeholder="Spring Boot 3, JPA, MySQL" />
      </label>
      <label style={{ display: "grid", gap: 4 }}>
        <span style={labelStyle}>Description</span>
        <textarea style={{ ...inputStyle, minHeight: 56, resize: "vertical" }} {...register("description")} />
      </label>
      <div style={{ display: "flex", gap: 8 }}>
        <button type="submit" disabled={isPending} style={{ ...primaryButtonStyle, opacity: isPending ? 0.7 : 1 }}>
          {isPending ? "Saving…" : submitLabel}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} style={secondaryButtonStyle}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

function ExperienceRow({ experience }: { experience: ExperienceResponse }) {
  const [editing, setEditing] = useState(false);
  const updateExperience = useUpdateExperience();
  const deleteExperience = useDeleteExperience();

  if (editing) {
    return (
      <div style={{ padding: "12px 14px", borderBottom: "1px solid #F4F7FA" }}>
        <ExperienceForm
          initial={{
            title: experience.title,
            organization: experience.organization,
            startDate: experience.startDate,
            endDate: experience.endDate ?? "",
            technologies: experience.technologies.join(", "),
            description: experience.description ?? "",
          }}
          submitLabel="Save"
          isPending={updateExperience.isPending}
          onCancel={() => setEditing(false)}
          onSubmit={(values) =>
            updateExperience.mutate(
              { id: experience.id, request: toRequest(values) },
              { onSuccess: () => setEditing(false) }
            )
          }
        />
      </div>
    );
  }

  return (
    <div style={{ padding: "12px 14px", borderBottom: "1px solid #F4F7FA" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 11, flexWrap: "wrap" }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#0F172A" }}>{experience.title}</div>
          <div style={{ fontSize: 11.5, color: "#64748B", marginTop: 1 }}>
            {experience.organization} · {experience.startDate} — {experience.endDate ?? "present"}
          </div>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <button type="button" onClick={() => setEditing(true)} style={secondaryButtonStyle}>
            Edit
          </button>
          <button type="button" onClick={() => deleteExperience.mutate(experience.id)} style={dangerButtonStyle}>
            Delete
          </button>
        </div>
      </div>
      {experience.technologies.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 8 }}>
          {experience.technologies.map((t) => (
            <span
              key={t}
              style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#475569", background: "#F5F8FB", border: "1px solid #E7EDF3", padding: "2px 6px", borderRadius: 4 }}
            >
              {t}
            </span>
          ))}
        </div>
      )}
      {experience.description && (
        <div style={{ fontSize: 12, color: "#475569", marginTop: 8, lineHeight: 1.5 }}>{experience.description}</div>
      )}
    </div>
  );
}

export function ExperienceSection() {
  const { data: experiences, isLoading } = useExperiences();
  const createExperience = useCreateExperience();
  const [adding, setAdding] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
        <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>
          Experience
        </h2>
        {!adding && (
          <button type="button" onClick={() => setAdding(true)} style={{ fontSize: 11.5, fontWeight: 600, border: 0, background: "none", color: "#2F5BEA", cursor: "pointer", padding: 0 }}>
            + Add experience
          </button>
        )}
      </div>

      {isLoading ? (
        <div style={{ padding: 14, fontSize: 12.5, color: "#64748B" }}>Loading…</div>
      ) : experiences && experiences.length > 0 ? (
        experiences.map((x) => <ExperienceRow key={x.id} experience={x} />)
      ) : (
        !adding && <div style={{ padding: 14, fontSize: 12.5, color: "#64748B" }}>No experience recorded yet.</div>
      )}

      {adding && (
        <div style={{ padding: "12px 14px", borderTop: "1px solid #F4F7FA", background: "#FCFDFE" }}>
          <ExperienceForm
            initial={emptyValues}
            submitLabel="Add"
            isPending={createExperience.isPending}
            onCancel={() => setAdding(false)}
            onSubmit={async (values) => {
              setError(null);
              try {
                await createExperience.mutateAsync(toRequest(values));
                setAdding(false);
              } catch (err) {
                setError(err instanceof ApiClientError ? err.message : "Could not save.");
              }
            }}
          />
          {error && <div style={{ fontSize: 11.5, color: "#A3170F", marginTop: 8 }}>{error}</div>}
        </div>
      )}
    </section>
  );
}
