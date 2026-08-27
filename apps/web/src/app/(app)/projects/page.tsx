import Link from "next/link";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { MatchScore } from "@/components/shared/MatchScore";
import { PROJECTS, checkStyle } from "@/lib/mock/projects";

export default function ProjectsPage() {
  return (
    <div style={{ padding: "20px 22px 44px", display: "grid", gap: 14, alignContent: "start" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 640, letterSpacing: "-.02em" }}>Projects</h1>
          <div style={{ fontSize: 12.5, color: "#475569", marginTop: 3 }}>
            Scored against what Java backend postings actually ask to see. Improving one project beats starting a fifth.
          </div>
        </div>
        <button
          type="button"
          className="hover:bg-[#F8FAFC]"
          style={{ fontSize: 12, fontWeight: 560, padding: "7px 11px", borderRadius: 7, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
        >
          + Add project
        </button>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 13, padding: "11px 14px", borderRadius: 10, border: "1px solid #C7D2FE", background: "#F8FAFF" }}>
        <span style={{ flex: "none", color: "#2F5BEA", fontSize: 14 }}>◈</span>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ fontSize: 12.5, fontWeight: 600, color: "#0F172A" }}>
            Order Management API is your strongest asset and your biggest missed opportunity
          </div>
          <div style={{ fontSize: 12, color: "#475569", marginTop: 1 }}>
            Health 76. Adding CI/CD, structured logging and a health endpoint would take it to 88 and answer three of the questions you were weak on in round 1.
          </div>
        </div>
        <Link
          href="/projects/1"
          className="hover:bg-[#2449C4]"
          style={{ flex: "none", fontSize: 12, fontWeight: 620, padding: "7px 12px", borderRadius: 7, border: "1px solid #2F5BEA", background: "#2F5BEA", color: "#fff", cursor: "pointer" }}
        >
          Improve this project
        </Link>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 12 }}>
        {PROJECTS.map((p) => (
          <article
            key={p.name}
            className="hover:border-[#C7D2FE]"
            style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 11, padding: "12px 13px", borderBottom: "1px solid #F1F5F9" }}>
              <div style={{ minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7, flexWrap: "wrap" }}>
                  <h3 style={{ margin: 0, fontSize: 14.5, fontWeight: 640, color: "#0F172A", letterSpacing: "-.012em" }}>{p.name}</h3>
                  <StatusBadge text={p.status} tone={p.tone} />
                </div>
                <div style={{ fontSize: 11.5, color: "#64748B", marginTop: 3 }}>{p.meta}</div>
              </div>
              <MatchScore value={p.health} size="md" label="health" />
            </div>

            <div style={{ padding: "11px 13px", borderBottom: "1px solid #F4F7FA" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                {p.stack.map((s) => (
                  <span
                    key={s}
                    style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#475569", background: "#F5F8FB", border: "1px solid #E7EDF3", padding: "2px 6px", borderRadius: 4 }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ padding: "11px 13px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px 12px", borderBottom: "1px solid #F4F7FA" }}>
              {p.checks.map((c) => {
                const cs = checkStyle(c.state);
                return (
                  <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11.5, color: cs.color }}>
                    <span style={{ flex: "none", width: 11, textAlign: "center" }}>{cs.icon}</span>
                    <span style={{ minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.label}</span>
                  </div>
                );
              })}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 9, padding: "10px 13px" }}>
              <span style={{ flex: 1, minWidth: 0, fontSize: 11.5, color: "#64748B", lineHeight: 1.4 }}>{p.next}</span>
              <Link
                href="/projects/1"
                className="hover:bg-[#F8FAFC]"
                style={{ flex: "none", fontSize: 11.5, fontWeight: 600, padding: "5px 11px", borderRadius: 6, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
              >
                Analyze
              </Link>
            </div>
          </article>
        ))}
      </div>

      <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, padding: 20, display: "grid", placeItems: "center", textAlign: "center", gap: 9 }}>
        <span style={{ fontSize: 18, color: "#CBD5E1" }}>▥</span>
        <div style={{ fontSize: 13, fontWeight: 580, color: "#0F172A" }}>One project short of what postings expect</div>
        <div style={{ fontSize: 12, color: "#64748B", maxWidth: 420, lineHeight: 1.5 }}>
          Postings at your match level typically reference an event-driven or caching component. A small Kafka consumer attached to the existing order service would close both the Kafka and Redis gaps without starting from zero.
        </div>
        <Link
          href="/skill-gaps"
          className="hover:bg-[#2449C4]"
          style={{ fontSize: 12, fontWeight: 620, padding: "6px 13px", borderRadius: 7, border: "1px solid #2F5BEA", background: "#2F5BEA", color: "#fff", cursor: "pointer", marginTop: 2 }}
        >
          See suggested project
        </Link>
      </section>
    </div>
  );
}
