"use client";

import { useForm } from "react-hook-form";
import type { ProjectRequest, ProjectResponse, ProjectStatus } from "@/lib/api/types";
import { inputStyle, labelStyle, primaryButtonStyle, secondaryButtonStyle } from "./formStyles";

const STATUSES: ProjectStatus[] = ["IN_PROGRESS", "DEPLOYED", "LIVE_WITH_CLIENT", "ARCHIVED", "UNFINISHED"];

export interface ProjectFormValues {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  repoUrl: string;
  deployed: boolean;
  status: ProjectStatus;
  technologies: string;
  healthScore: string;
}

export function toProjectRequest(values: ProjectFormValues): ProjectRequest {
  return {
    name: values.name,
    description: values.description || null,
    startDate: values.startDate || null,
    endDate: values.endDate || null,
    repoUrl: values.repoUrl || null,
    deployed: values.deployed,
    status: values.status,
    technologies: values.technologies
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean),
    healthScore: values.healthScore ? Number(values.healthScore) : null,
  };
}

export function projectToFormValues(project: ProjectResponse): ProjectFormValues {
  return {
    name: project.name,
    description: project.description ?? "",
    startDate: project.startDate ?? "",
    endDate: project.endDate ?? "",
    repoUrl: project.repoUrl ?? "",
    deployed: project.deployed,
    status: project.status,
    technologies: project.technologies.join(", "),
    healthScore: project.healthScore?.toString() ?? "",
  };
}

export const emptyProjectValues: ProjectFormValues = {
  name: "",
  description: "",
  startDate: "",
  endDate: "",
  repoUrl: "",
  deployed: false,
  status: "IN_PROGRESS",
  technologies: "",
  healthScore: "",
};

export function ProjectForm({
  initial,
  onSubmit,
  onCancel,
  submitLabel,
  isPending,
}: {
  initial: ProjectFormValues;
  onSubmit: (values: ProjectFormValues) => void;
  onCancel?: () => void;
  submitLabel: string;
  isPending: boolean;
}) {
  const { register, handleSubmit } = useForm<ProjectFormValues>({ defaultValues: initial });
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: "grid", gap: 8 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 8 }}>
        <label style={{ display: "grid", gap: 4 }}>
          <span style={labelStyle}>Name</span>
          <input style={inputStyle} required {...register("name")} />
        </label>
        <label style={{ display: "grid", gap: 4 }}>
          <span style={labelStyle}>Status</span>
          <select style={inputStyle} {...register("status")}>
            {STATUSES.map((s) => (
              <option key={s} value={s}>
                {s.replaceAll("_", " ")}
              </option>
            ))}
          </select>
        </label>
        <label style={{ display: "grid", gap: 4 }}>
          <span style={labelStyle}>Start date</span>
          <input style={inputStyle} type="date" {...register("startDate")} />
        </label>
        <label style={{ display: "grid", gap: 4 }}>
          <span style={labelStyle}>End date</span>
          <input style={inputStyle} type="date" {...register("endDate")} />
        </label>
        <label style={{ display: "grid", gap: 4 }}>
          <span style={labelStyle}>Repo URL</span>
          <input style={inputStyle} {...register("repoUrl")} placeholder="https://github.com/…" />
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 16 }}>
          <input type="checkbox" {...register("deployed")} />
          <span style={{ fontSize: 12, color: "#334155" }}>Deployed</span>
        </label>
      </div>
      <label style={{ display: "grid", gap: 4 }}>
        <span style={labelStyle}>Technologies (comma-separated)</span>
        <input style={inputStyle} {...register("technologies")} placeholder="Spring Boot 3, JPA, MySQL, Docker" />
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
