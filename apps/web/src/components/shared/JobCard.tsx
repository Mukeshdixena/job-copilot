import Link from "next/link";
import type { Job } from "@/lib/types";
import { MatchScore } from "./MatchScore";

export function JobCard({
  job,
  analyzeHref = "/jobs/1",
  prepareHref = "/applications/prepare/1",
}: {
  job: Job;
  analyzeHref?: string;
  prepareHref?: string;
}) {
  const urgent = /today|tonight|1 day|hour/i.test(job.deadline || "");
  const deadlineColor = urgent ? "#A3170F" : "#9A4A08";

  return (
    <article
      style={{
        border: "1px solid #E3E8EF",
        borderRadius: 9,
        background: "#fff",
        padding: "13px 14px",
        display: "grid",
        gap: 11,
      }}
      className="hover:border-[#C7D2FE] hover:shadow-[0_1px_2px_rgba(15,23,42,.05)]"
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, flexWrap: "wrap" }}>
            <h3 style={{ margin: 0, fontSize: 14.5, fontWeight: 640, color: "#0F172A", letterSpacing: "-.012em" }}>
              {job.title}
            </h3>
            {job.flag && (
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: ".07em",
                  textTransform: "uppercase",
                  color: "#9A4A08",
                  background: "#FFF7ED",
                  border: "1px solid #FDBA74",
                  padding: "1px 5px",
                  borderRadius: 4,
                }}
              >
                {job.flag}
              </span>
            )}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 3, fontSize: 12.5, color: "#475569" }}>
            <span style={{ fontWeight: 560, color: "#334155" }}>{job.company}</span>
            <span style={{ color: "#CBD5E1" }}>·</span>
            <span>{job.location}</span>
            <span style={{ color: "#CBD5E1" }}>·</span>
            <span>{job.exp}</span>
          </div>
        </div>
        <MatchScore value={job.match} size="md" />
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, alignItems: "center" }}>
        {job.have.map((s) => (
          <span
            key={s}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              fontSize: 11.5,
              fontFamily: "var(--font-mono)",
              color: "#0B6E45",
              background: "#F3FBF6",
              border: "1px solid #C9EBD9",
              padding: "2px 6px",
              borderRadius: 4,
            }}
          >
            ✓ {s}
          </span>
        ))}
        {job.missing.length > 0 && (
          <span style={{ width: 1, height: 14, background: "#E3E8EF", margin: "0 2px" }} />
        )}
        {job.missing.map((s) => (
          <span
            key={s}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              fontSize: 11.5,
              fontFamily: "var(--font-mono)",
              color: "#9A4A08",
              background: "#FFFBF4",
              border: "1px dashed #F0B67A",
              padding: "2px 6px",
              borderRadius: 4,
            }}
          >
            △ {s}
          </span>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
          paddingTop: 10,
          borderTop: "1px solid #F1F5F9",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11.5, color: "#64748B" }}>
          <span>{job.posted}</span>
          {job.deadline && (
            <>
              <span style={{ color: "#CBD5E1" }}>·</span>
              <span style={{ color: deadlineColor, fontWeight: 600 }}>{job.deadline}</span>
            </>
          )}
          <span style={{ color: "#CBD5E1" }}>·</span>
          <span style={{ fontFamily: "var(--font-mono)" }}>{job.source}</span>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <Link
            href={analyzeHref}
            className="hover:bg-[#F8FAFC] hover:border-[#CBD5E1]"
            style={{
              font: "inherit",
              fontSize: 12,
              fontWeight: 560,
              padding: "5px 10px",
              borderRadius: 6,
              border: "1px solid #E3E8EF",
              background: "#fff",
              color: "#334155",
              cursor: "pointer",
            }}
          >
            Analyze
          </Link>
          <Link
            href={prepareHref}
            className="hover:bg-[#2449C4] hover:border-[#2449C4]"
            style={{
              font: "inherit",
              fontSize: 12,
              fontWeight: 600,
              padding: "5px 10px",
              borderRadius: 6,
              border: "1px solid #2F5BEA",
              background: "#2F5BEA",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Prepare Application
          </Link>
          <button
            type="button"
            className="hover:text-[#2F5BEA] hover:border-[#C7D2FE]"
            style={{
              font: "inherit",
              fontSize: 12,
              fontWeight: 560,
              padding: "5px 9px",
              borderRadius: 6,
              border: "1px solid #E3E8EF",
              background: "#fff",
              color: "#64748B",
              cursor: "pointer",
            }}
          >
            Save
          </button>
        </div>
      </div>
    </article>
  );
}
