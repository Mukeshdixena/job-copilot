"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useProfile, useUpdateProfile } from "@/lib/api/hooks";
import type { ProfileRequest, RemoteWorkPreference } from "@/lib/api/types";
import { inputStyle, labelStyle, primaryButtonStyle } from "./formStyles";

interface FormValues {
  targetRoles: string;
  preferredLocations: string;
  remoteWorkPreference: RemoteWorkPreference | "";
  experienceBandMin: string;
  experienceBandMax: string;
  noticePeriod: string;
  salaryExpectationMin: string;
  salaryExpectationMax: string;
  phone: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
  portfolioUrl: string;
  summary: string;
}

const emptyValues: FormValues = {
  targetRoles: "",
  preferredLocations: "",
  remoteWorkPreference: "",
  experienceBandMin: "",
  experienceBandMax: "",
  noticePeriod: "",
  salaryExpectationMin: "",
  salaryExpectationMax: "",
  phone: "",
  location: "",
  githubUrl: "",
  linkedinUrl: "",
  portfolioUrl: "",
  summary: "",
};

function toNumberOrUndefined(value: string): number | undefined {
  if (value.trim() === "") return undefined;
  const n = Number(value);
  return Number.isNaN(n) ? undefined : n;
}

function toListOrUndefined(value: string): string[] {
  return value
    .split(",")
    .map((v) => v.trim())
    .filter(Boolean);
}

export function TargetRoleSection() {
  const { data: profile, isLoading } = useProfile();
  const updateProfile = useUpdateProfile();
  const { register, handleSubmit, reset, formState } = useForm<FormValues>({
    defaultValues: emptyValues,
  });

  useEffect(() => {
    if (!profile) return;
    reset({
      targetRoles: profile.targetRoles.join(", "),
      preferredLocations: profile.preferredLocations.join(", "),
      remoteWorkPreference: profile.remoteWorkPreference ?? "",
      experienceBandMin: profile.experienceBandMin?.toString() ?? "",
      experienceBandMax: profile.experienceBandMax?.toString() ?? "",
      noticePeriod: profile.noticePeriod ?? "",
      salaryExpectationMin: profile.salaryExpectationMin?.toString() ?? "",
      salaryExpectationMax: profile.salaryExpectationMax?.toString() ?? "",
      phone: profile.phone ?? "",
      location: profile.location ?? "",
      githubUrl: profile.githubUrl ?? "",
      linkedinUrl: profile.linkedinUrl ?? "",
      portfolioUrl: profile.portfolioUrl ?? "",
      summary: profile.summary ?? "",
    });
  }, [profile, reset]);

  const onSubmit = (values: FormValues) => {
    const request: ProfileRequest = {
      targetRoles: toListOrUndefined(values.targetRoles),
      preferredLocations: toListOrUndefined(values.preferredLocations),
      remoteWorkPreference: values.remoteWorkPreference || null,
      experienceBandMin: toNumberOrUndefined(values.experienceBandMin) ?? null,
      experienceBandMax: toNumberOrUndefined(values.experienceBandMax) ?? null,
      noticePeriod: values.noticePeriod || null,
      salaryExpectationMin: toNumberOrUndefined(values.salaryExpectationMin) ?? null,
      salaryExpectationMax: toNumberOrUndefined(values.salaryExpectationMax) ?? null,
      phone: values.phone || null,
      location: values.location || null,
      githubUrl: values.githubUrl || null,
      linkedinUrl: values.linkedinUrl || null,
      portfolioUrl: values.portfolioUrl || null,
      summary: values.summary || null,
    };
    updateProfile.mutate(request);
  };

  return (
    <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
        <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>
          Personal &amp; target role
        </h2>
        {updateProfile.isSuccess && (
          <span style={{ fontSize: 11, color: "#0B6E45" }}>Saved</span>
        )}
      </div>

      {isLoading ? (
        <div style={{ padding: 14, fontSize: 12.5, color: "#64748B" }}>Loading…</div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "12px 14px", display: "grid", gap: 12 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 10 }}>
            <label style={{ display: "grid", gap: 4 }}>
              <span style={labelStyle}>Target roles (comma-separated)</span>
              <input style={inputStyle} {...register("targetRoles")} placeholder="Java Backend Developer, SDE — Backend" />
            </label>
            <label style={{ display: "grid", gap: 4 }}>
              <span style={labelStyle}>Preferred locations</span>
              <input style={inputStyle} {...register("preferredLocations")} placeholder="Bangalore, Remote" />
            </label>
            <label style={{ display: "grid", gap: 4 }}>
              <span style={labelStyle}>Remote work preference</span>
              <select style={inputStyle} {...register("remoteWorkPreference")}>
                <option value="">—</option>
                <option value="ONSITE">Onsite</option>
                <option value="HYBRID">Hybrid</option>
                <option value="REMOTE">Remote</option>
                <option value="OPEN">Open</option>
              </select>
            </label>
            <label style={{ display: "grid", gap: 4 }}>
              <span style={labelStyle}>Experience band (years)</span>
              <div style={{ display: "flex", gap: 6 }}>
                <input style={inputStyle} type="number" min={0} {...register("experienceBandMin")} placeholder="Min" />
                <input style={inputStyle} type="number" min={0} {...register("experienceBandMax")} placeholder="Max" />
              </div>
            </label>
            <label style={{ display: "grid", gap: 4 }}>
              <span style={labelStyle}>Notice period</span>
              <input style={inputStyle} {...register("noticePeriod")} placeholder="Immediate" />
            </label>
            <label style={{ display: "grid", gap: 4 }}>
              <span style={labelStyle}>Salary expectation</span>
              <div style={{ display: "flex", gap: 6 }}>
                <input style={inputStyle} type="number" min={0} {...register("salaryExpectationMin")} placeholder="Min" />
                <input style={inputStyle} type="number" min={0} {...register("salaryExpectationMax")} placeholder="Max" />
              </div>
            </label>
            <label style={{ display: "grid", gap: 4 }}>
              <span style={labelStyle}>Phone</span>
              <input style={inputStyle} {...register("phone")} />
            </label>
            <label style={{ display: "grid", gap: 4 }}>
              <span style={labelStyle}>Location</span>
              <input style={inputStyle} {...register("location")} placeholder="Bangalore" />
            </label>
            <label style={{ display: "grid", gap: 4 }}>
              <span style={labelStyle}>GitHub URL</span>
              <input style={inputStyle} {...register("githubUrl")} placeholder="https://github.com/…" />
            </label>
            <label style={{ display: "grid", gap: 4 }}>
              <span style={labelStyle}>LinkedIn URL</span>
              <input style={inputStyle} {...register("linkedinUrl")} placeholder="https://linkedin.com/in/…" />
            </label>
            <label style={{ display: "grid", gap: 4 }}>
              <span style={labelStyle}>Portfolio URL</span>
              <input style={inputStyle} {...register("portfolioUrl")} />
            </label>
          </div>
          <label style={{ display: "grid", gap: 4 }}>
            <span style={labelStyle}>Summary</span>
            <textarea style={{ ...inputStyle, minHeight: 64, resize: "vertical" }} {...register("summary")} />
          </label>
          <div>
            <button type="submit" disabled={updateProfile.isPending} style={{ ...primaryButtonStyle, opacity: updateProfile.isPending ? 0.7 : 1 }}>
              {updateProfile.isPending ? "Saving…" : "Save"}
            </button>
          </div>
          {formState.isSubmitSuccessful && updateProfile.isError && (
            <span style={{ fontSize: 11.5, color: "#A3170F" }}>Could not save. Try again.</span>
          )}
        </form>
      )}
    </section>
  );
}
