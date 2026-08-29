"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useCreateEducation,
  useDeleteEducation,
  useEducations,
  useUpdateEducation,
} from "@/lib/api/hooks";
import type { EducationRequest, EducationResponse } from "@/lib/api/types";
import { ApiClientError } from "@/lib/api/client";
import { inputStyle, labelStyle, primaryButtonStyle, secondaryButtonStyle, dangerButtonStyle } from "./formStyles";

interface FormValues {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startYear: string;
  endYear: string;
  gpa: string;
}

const emptyValues: FormValues = {
  institution: "",
  degree: "",
  fieldOfStudy: "",
  startYear: "",
  endYear: "",
  gpa: "",
};

function toRequest(values: FormValues): EducationRequest {
  return {
    institution: values.institution,
    degree: values.degree,
    fieldOfStudy: values.fieldOfStudy,
    startYear: Number(values.startYear),
    endYear: values.endYear ? Number(values.endYear) : null,
    gpa: values.gpa ? Number(values.gpa) : null,
  };
}

function EducationForm({
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
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 8 }}>
        <label style={{ display: "grid", gap: 4 }}>
          <span style={labelStyle}>Institution</span>
          <input style={inputStyle} required {...register("institution")} />
        </label>
        <label style={{ display: "grid", gap: 4 }}>
          <span style={labelStyle}>Degree</span>
          <input style={inputStyle} required {...register("degree")} placeholder="B.E." />
        </label>
        <label style={{ display: "grid", gap: 4 }}>
          <span style={labelStyle}>Field of study</span>
          <input style={inputStyle} required {...register("fieldOfStudy")} placeholder="Computer Science" />
        </label>
        <label style={{ display: "grid", gap: 4 }}>
          <span style={labelStyle}>Start year</span>
          <input style={inputStyle} type="number" required min={1900} {...register("startYear")} />
        </label>
        <label style={{ display: "grid", gap: 4 }}>
          <span style={labelStyle}>End year</span>
          <input style={inputStyle} type="number" min={1900} {...register("endYear")} />
        </label>
        <label style={{ display: "grid", gap: 4 }}>
          <span style={labelStyle}>GPA (0–100)</span>
          <input style={inputStyle} type="number" step="0.01" min={0} max={100} {...register("gpa")} />
        </label>
      </div>
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

function EducationRow({ education }: { education: EducationResponse }) {
  const [editing, setEditing] = useState(false);
  const updateEducation = useUpdateEducation();
  const deleteEducation = useDeleteEducation();

  if (editing) {
    return (
      <div style={{ padding: "12px 14px", borderBottom: "1px solid #F4F7FA" }}>
        <EducationForm
          initial={{
            institution: education.institution,
            degree: education.degree,
            fieldOfStudy: education.fieldOfStudy,
            startYear: education.startYear.toString(),
            endYear: education.endYear?.toString() ?? "",
            gpa: education.gpa?.toString() ?? "",
          }}
          submitLabel="Save"
          isPending={updateEducation.isPending}
          onCancel={() => setEditing(false)}
          onSubmit={(values) =>
            updateEducation.mutate(
              { id: education.id, request: toRequest(values) },
              { onSuccess: () => setEditing(false) }
            )
          }
        />
      </div>
    );
  }

  return (
    <div style={{ padding: "12px 14px", borderBottom: "1px solid #F4F7FA", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 11, flexWrap: "wrap" }}>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: "#0F172A" }}>
          {education.degree} · {education.fieldOfStudy}
        </div>
        <div style={{ fontSize: 11.5, color: "#64748B", marginTop: 1 }}>
          {education.institution} · {education.startYear}–{education.endYear ?? "present"}
          {education.gpa != null ? ` · GPA ${education.gpa}` : ""}
        </div>
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        <button type="button" onClick={() => setEditing(true)} style={secondaryButtonStyle}>
          Edit
        </button>
        <button type="button" onClick={() => deleteEducation.mutate(education.id)} style={dangerButtonStyle}>
          Delete
        </button>
      </div>
    </div>
  );
}

export function EducationSection() {
  const { data: educations, isLoading } = useEducations();
  const createEducation = useCreateEducation();
  const [adding, setAdding] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
        <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>
          Education
        </h2>
        {!adding && (
          <button type="button" onClick={() => setAdding(true)} style={{ fontSize: 11.5, fontWeight: 600, border: 0, background: "none", color: "#2F5BEA", cursor: "pointer", padding: 0 }}>
            + Add education
          </button>
        )}
      </div>

      {isLoading ? (
        <div style={{ padding: 14, fontSize: 12.5, color: "#64748B" }}>Loading…</div>
      ) : educations && educations.length > 0 ? (
        educations.map((e) => <EducationRow key={e.id} education={e} />)
      ) : (
        !adding && <div style={{ padding: 14, fontSize: 12.5, color: "#64748B" }}>No education recorded yet.</div>
      )}

      {adding && (
        <div style={{ padding: "12px 14px", borderTop: "1px solid #F4F7FA", background: "#FCFDFE" }}>
          <EducationForm
            initial={emptyValues}
            submitLabel="Add"
            isPending={createEducation.isPending}
            onCancel={() => setAdding(false)}
            onSubmit={async (values) => {
              setError(null);
              try {
                await createEducation.mutateAsync(toRequest(values));
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
