"use client";

import { useState } from "react";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { MatchScore } from "@/components/shared/MatchScore";
import { useCreateProject, useDeleteProject, useProjects, useUpdateProject } from "@/lib/api/hooks";
import { ApiClientError } from "@/lib/api/client";
import type { ProjectResponse, ProjectStatus } from "@/lib/api/types";
import type { Tone } from "@/lib/types";
import {
  ProjectForm,
  emptyProjectValues,
  projectToFormValues,
  toProjectRequest,
} from "@/components/profile/ProjectForm";
import { secondaryButtonStyle, dangerButtonStyle } from "@/components/profile/formStyles";

const STATUS_TONE: Record<ProjectStatus, Tone> = {
  IN_PROGRESS: "accent",
  DEPLOYED: "success",
  LIVE_WITH_CLIENT: "accent",
  ARCHIVED: "neutral",
  UNFINISHED: "warn",
};

function ProjectCard({ project }: { project: ProjectResponse }) {
  const [editing, setEditing] = useState(false);
  const updateProject = useUpdateProject();
  const deleteProject = useDeleteProject();

  if (editing) {
    return (
      <article style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, padding: 13 }}>
        <ProjectForm
          initial={projectToFormValues(project)}
          submitLabel="Save"
          isPending={updateProject.isPending}
          onCancel={() => setEditing(false)}
          onSubmit={(values) =>
            updateProject.mutate(
              { id: project.id, request: toProjectRequest(values) },
              { onSuccess: () => setEditing(false) }
            )
          }
        />
      </article>
    );
  }

  return (
    <article
      className="hover:border-[#C7D2FE]"
      style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 11, padding: "12px 13px", borderBottom: "1px solid #F1F5F9" }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, flexWrap: "wrap" }}>
            <h3 style={{ margin: 0, fontSize: 14.5, fontWeight: 640, color: "#0F172A", letterSpacing: "-.012em" }}>{project.name}</h3>
            <StatusBadge text={project.status.replaceAll("_", " ")} tone={STATUS_TONE[project.status]} />
          </div>
          <div style={{ fontSize: 11.5, color: "#64748B", marginTop: 3 }}>
            {project.startDate ?? "—"} – {project.endDate ?? "present"}
            {project.repoUrl ? ` · ${project.repoUrl}` : ""}
          </div>
        </div>
        {project.healthScore != null && <MatchScore value={project.healthScore} size="md" label="health" />}
      </div>

      {project.technologies.length > 0 && (
        <div style={{ padding: "11px 13px", borderBottom: "1px solid #F4F7FA" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            {project.technologies.map((s) => (
              <span
                key={s}
                style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#475569", background: "#F5F8FB", border: "1px solid #E7EDF3", padding: "2px 6px", borderRadius: 4 }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      )}

      {project.description && (
        <div style={{ padding: "11px 13px", fontSize: 12, color: "#475569", lineHeight: 1.5, borderBottom: "1px solid #F4F7FA" }}>
          {project.description}
        </div>
      )}

      <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 13px" }}>
        <span style={{ flex: 1 }} />
        <button type="button" onClick={() => setEditing(true)} style={secondaryButtonStyle}>
          Edit
        </button>
        <button type="button" onClick={() => deleteProject.mutate(project.id)} style={dangerButtonStyle}>
          Delete
        </button>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  const { data: projects, isLoading } = useProjects();
  const createProject = useCreateProject();
  const [adding, setAdding] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div style={{ padding: "20px 22px 44px", display: "grid", gap: 14, alignContent: "start" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 640, letterSpacing: "-.02em" }}>Projects</h1>
          <div style={{ fontSize: 12.5, color: "#475569", marginTop: 3 }}>
            Your personal projects, kept as evidence for skills and interview stories.
          </div>
        </div>
        {!adding && (
          <button
            type="button"
            onClick={() => setAdding(true)}
            className="hover:bg-[#F8FAFC]"
            style={{ fontSize: 12, fontWeight: 560, padding: "7px 11px", borderRadius: 7, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
          >
            + Add project
          </button>
        )}
      </div>

      {adding && (
        <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, padding: 14 }}>
          <ProjectForm
            initial={emptyProjectValues}
            submitLabel="Add project"
            isPending={createProject.isPending}
            onCancel={() => setAdding(false)}
            onSubmit={async (values) => {
              setError(null);
              try {
                await createProject.mutateAsync(toProjectRequest(values));
                setAdding(false);
              } catch (err) {
                setError(err instanceof ApiClientError ? err.message : "Could not save project.");
              }
            }}
          />
          {error && <div style={{ fontSize: 11.5, color: "#A3170F", marginTop: 8 }}>{error}</div>}
        </section>
      )}

      {isLoading ? (
        <div style={{ fontSize: 12.5, color: "#64748B" }}>Loading…</div>
      ) : projects && projects.length > 0 ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 12 }}>
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      ) : (
        !adding && (
          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, padding: 20, display: "grid", placeItems: "center", textAlign: "center", gap: 9 }}>
            <span style={{ fontSize: 18, color: "#CBD5E1" }}>▥</span>
            <div style={{ fontSize: 13, fontWeight: 580, color: "#0F172A" }}>No projects yet</div>
            <div style={{ fontSize: 12, color: "#64748B", maxWidth: 420, lineHeight: 1.5 }}>
              Add the projects that back up your skills — they become evidence for skill claims and material for
              interview answers.
            </div>
          </section>
        )
      )}
    </div>
  );
}
