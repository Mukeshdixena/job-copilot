import Link from "next/link";
import { MatchScore } from "@/components/shared/MatchScore";
import { MetricBar } from "@/components/shared/MetricBar";
import { StatusBadge } from "@/components/shared/StatusBadge";
import {
  FACTS,
  BREAKDOWN,
  WHY,
  MISSING,
  RESUME_GAPS,
  COMPANY,
  PREP,
  READINESS,
  PEOPLE,
  SIMILAR,
  MATCH_TOP,
  READY_PCT,
} from "@/lib/mock/job-detail";

export default function JobDetailPage() {
  return (
    <div>
      <div style={{ padding: "14px 22px 13px", background: "#fff", borderBottom: "1px solid #E3E8EF", position: "sticky", top: 0, zIndex: 5 }}>
        <Link
          href="/jobs"
          className="hover:text-[#2F5BEA]"
          style={{ fontSize: 11.5, fontWeight: 560, border: 0, background: "none", color: "#64748B", cursor: "pointer", padding: "0 0 7px", display: "inline-block" }}
        >
          ← Jobs
        </Link>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 18, flexWrap: "wrap" }}>
          <div style={{ minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9, flexWrap: "wrap" }}>
              <h1 style={{ margin: 0, fontSize: 19, fontWeight: 640, letterSpacing: "-.02em" }}>Java Spring Boot Developer</h1>
              <MatchScore value={MATCH_TOP} size="md" />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4, fontSize: 12.5, color: "#475569", flexWrap: "wrap" }}>
              <span style={{ fontWeight: 580, color: "#334155" }}>ABC Technologies</span>
              <span style={{ color: "#CBD5E1" }}>·</span>
              <span>Bangalore · Hybrid</span>
              <span style={{ color: "#CBD5E1" }}>·</span>
              <span>0–2 years</span>
              <span style={{ color: "#CBD5E1" }}>·</span>
              <span>₹6–9 LPA</span>
              <span style={{ color: "#CBD5E1" }}>·</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5 }}>LinkedIn · posted 2h ago</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 7, flex: "none" }}>
            <button
              type="button"
              className="hover:bg-[#F8FAFC]"
              style={{ fontSize: 12, fontWeight: 560, padding: "7px 11px", borderRadius: 7, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
            >
              Save
            </button>
            <button
              type="button"
              className="hover:bg-[#F8FAFC]"
              style={{ fontSize: 12, fontWeight: 560, padding: "7px 11px", borderRadius: 7, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
            >
              Open posting ↗
            </button>
            <Link
              href="/applications/prepare/1"
              className="hover:bg-[#2449C4]"
              style={{ fontSize: 12, fontWeight: 620, padding: "7px 13px", borderRadius: 7, border: "1px solid #2F5BEA", background: "#2F5BEA", color: "#fff", cursor: "pointer" }}
            >
              Prepare Application
            </Link>
          </div>
        </div>
      </div>

      <div style={{ padding: "16px 22px 44px", display: "grid", gridTemplateColumns: "minmax(0,1.7fr) minmax(0,1fr)", gap: 14, alignItems: "start" }}>
        <div style={{ display: "grid", gap: 14, minWidth: 0 }}>
          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, padding: "13px 14px" }}>
            <h2 style={{ margin: "0 0 10px", fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Job overview</h2>
            <p style={{ margin: "0 0 11px", fontSize: 13, lineHeight: 1.55, color: "#334155" }}>
              Build and maintain REST services for the order and billing domain. You will own service-layer code in Spring Boot, work with
              JPA/Hibernate against MySQL, and help move batch jobs onto an event-driven pipeline.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 9 }}>
              {FACTS.map((f, i) => (
                <div key={i} style={{ border: "1px solid #EEF1F6", borderRadius: 7, padding: "8px 10px", background: "#FCFDFE" }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: "#94A3B8" }}>{f.k}</div>
                  <div style={{ fontSize: 12.5, fontWeight: 560, color: "#0F172A", marginTop: 3 }}>{f.v}</div>
                </div>
              ))}
            </div>
          </section>

          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
              <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Match score breakdown</h2>
              <span style={{ fontSize: 11.5, color: "#94A3B8" }}>Weighted against the posting&apos;s stated requirements</span>
            </div>
            <div style={{ padding: "13px 14px", display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", gap: 18, alignItems: "center" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 40, fontWeight: 600, letterSpacing: "-.04em", lineHeight: 0.9, color: "#0B6E45" }}>94</div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".09em", textTransform: "uppercase", color: "#12915C", marginTop: 5 }}>Strong match</div>
                <div style={{ fontSize: 10.5, color: "#94A3B8", marginTop: 3, fontFamily: "var(--font-mono)" }}>rank 2 of 128</div>
              </div>
              <div style={{ display: "grid", gap: 9 }}>
                {BREAKDOWN.map((b, i) => (
                  <MetricBar key={i} label={b.label} value={b.value} valueText={b.text} />
                ))}
              </div>
            </div>
          </section>

          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
              <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Why you match</h2>
            </div>
            {WHY.map((w, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "16px minmax(0,1fr)", gap: 10, padding: "10px 14px", borderBottom: "1px solid #F4F7FA" }}>
                <span style={{ color: "#12915C", fontSize: 13, lineHeight: 1.3 }}>✓</span>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 12.5, fontWeight: 560, color: "#0F172A" }}>{w.claim}</div>
                  <div style={{ fontSize: 11.5, color: "#64748B", marginTop: 2 }}>Evidence: {w.evidence}</div>
                </div>
              </div>
            ))}
          </section>

          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 14px", borderBottom: "1px solid #EEF1F6", background: "#FFFCF7" }}>
              <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#9A4A08", fontWeight: 700 }}>Missing requirements</h2>
              <span style={{ fontSize: 11, fontWeight: 620, color: "#9A4A08", background: "#FFF7ED", border: "1px solid #FDBA74", padding: "1px 6px", borderRadius: 4 }}>
                2 blockers · 1 soft
              </span>
            </div>
            {MISSING.map((m, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 11, padding: "11px 14px", borderBottom: "1px solid #F4F7FA" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#9A4A08",
                    background: "#FFF7ED",
                    border: "1px solid #FDBA74",
                    padding: "2px 7px",
                    borderRadius: 5,
                    flex: "none",
                  }}
                >
                  {m.skill}
                </span>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontSize: 12.5, color: "#334155" }}>{m.note}</div>
                  <div style={{ fontSize: 11.5, color: "#64748B", marginTop: 2 }}>
                    Closeable in {m.effort} · {m.severity}
                  </div>
                </div>
                <Link
                  href="/skill-gaps"
                  className="hover:bg-[#F8FAFC]"
                  style={{ flex: "none", fontSize: 11.5, fontWeight: 600, padding: "4px 9px", borderRadius: 6, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
                >
                  Plan
                </Link>
              </div>
            ))}
            <div style={{ padding: "9px 14px", background: "#FCFDFE", fontSize: 11.5, color: "#64748B" }}>
              Nothing here is added to your resume automatically. Gaps stay visible until you have real evidence.
            </div>
          </section>

          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
              <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Resume match</h2>
              <Link href="/resume" style={{ fontSize: 11.5, fontWeight: 600, border: 0, background: "none", color: "#2F5BEA", cursor: "pointer", padding: 0 }}>
                Open resume workspace →
              </Link>
            </div>
            <div style={{ padding: "12px 14px", display: "grid", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                <StatusBadge text="Best version: Backend-v3" tone="accent" />
                <span style={{ fontSize: 12, color: "#475569" }}>
                  covers <strong style={{ fontFamily: "var(--font-mono)", color: "#0F172A" }}>11 of 14</strong> stated requirements
                </span>
              </div>
              <div style={{ display: "grid", gap: 7 }}>
                {RESUME_GAPS.map((r, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 12, padding: "7px 9px", border: "1px solid #EEF1F6", borderRadius: 7, background: "#FCFDFE" }}>
                    <span style={{ color: r.color, flex: "none", fontSize: 12 }}>{r.icon}</span>
                    <span style={{ flex: 1, minWidth: 0, color: "#334155" }}>{r.text}</span>
                    <span style={{ fontSize: 11, color: "#94A3B8", fontFamily: "var(--font-mono)", flex: "none" }}>{r.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
              <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Company information</h2>
            </div>
            <div style={{ padding: "12px 14px", display: "grid", gap: 11 }}>
              <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.55, color: "#334155" }}>
                Mid-size product company in logistics SaaS. Backend is Java 17 + Spring Boot on AWS, moving from a monolith to service boundaries.
                Engineering team of roughly 40.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))", gap: 9 }}>
                {COMPANY.map((c, i) => (
                  <div key={i} style={{ border: "1px solid #EEF1F6", borderRadius: 7, padding: "8px 10px", background: "#FCFDFE" }}>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: "#94A3B8" }}>{c.k}</div>
                    <div style={{ fontSize: 12.5, fontWeight: 560, color: "#0F172A", marginTop: 3 }}>{c.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div style={{ display: "grid", gap: 14, minWidth: 0 }}>
          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
              <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Application preparation</h2>
            </div>
            {PREP.map((p, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 9, padding: "8px 14px", borderBottom: "1px solid #F4F7FA" }}>
                <span style={{ width: 15, flex: "none", textAlign: "center", color: p.color, fontSize: 12 }}>{p.icon}</span>
                <span style={{ flex: 1, minWidth: 0, fontSize: 12.5, color: p.textColor }}>{p.label}</span>
                <span style={{ fontSize: 11, color: "#94A3B8", fontFamily: "var(--font-mono)" }}>{p.meta}</span>
              </div>
            ))}
            <div style={{ padding: "11px 14px" }}>
              <Link
                href="/applications/prepare/1"
                className="hover:bg-[#2449C4]"
                style={{ display: "block", width: "100%", textAlign: "center", fontSize: 12.5, fontWeight: 620, padding: 8, borderRadius: 7, border: "1px solid #2F5BEA", background: "#2F5BEA", color: "#fff", cursor: "pointer" }}
              >
                Review Everything
              </Link>
            </div>
          </section>

          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
              <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Interview readiness</h2>
              <MatchScore value={READY_PCT} size="sm" label="ready" />
            </div>
            <div style={{ padding: "12px 14px", display: "grid", gap: 9 }}>
              {READINESS.map((r, i) => (
                <MetricBar key={i} label={r.label} value={r.value} />
              ))}
              <Link
                href="/interviews"
                className="hover:bg-[#F8FAFC]"
                style={{ display: "block", width: "100%", textAlign: "center", fontSize: 12, fontWeight: 600, padding: 7, borderRadius: 7, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
              >
                Open interview prep
              </Link>
            </div>
          </section>

          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
              <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Recruiters &amp; referral paths</h2>
            </div>
            {PEOPLE.map((p, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderBottom: "1px solid #F4F7FA" }}>
                <div
                  style={{
                    width: 27,
                    height: 27,
                    flex: "none",
                    borderRadius: 99,
                    background: "#F1F5F9",
                    border: "1px solid #E3E8EF",
                    display: "grid",
                    placeItems: "center",
                    fontSize: 10.5,
                    fontWeight: 640,
                    color: "#475569",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {p.initials}
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontSize: 12.5, fontWeight: 560, color: "#0F172A", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.name}</div>
                  <div style={{ fontSize: 11, color: "#64748B", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.role}</div>
                </div>
                <Link
                  href="/networking/1"
                  className="hover:bg-[#E0E7FF]"
                  style={{ flex: "none", fontSize: 11.5, fontWeight: 600, padding: "4px 9px", borderRadius: 6, border: "1px solid #C7D2FE", background: "#EEF2FF", color: "#2F5BEA", cursor: "pointer" }}
                >
                  {p.cta}
                </Link>
              </div>
            ))}
            <div style={{ padding: "9px 14px", background: "#FCFDFE", fontSize: 11, color: "#64748B" }}>
              Messages are drafted for your review. Nothing is sent without you pressing send.
            </div>
          </section>

          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
              <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Similar jobs</h2>
            </div>
            {SIMILAR.map((s, i) => (
              <Link
                key={i}
                href="/jobs"
                className="hover:bg-[#FCFDFE]"
                style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", textAlign: "left", padding: "10px 14px", border: 0, borderBottom: "1px solid #F4F7FA", background: "#fff", cursor: "pointer" }}
              >
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontSize: 12.5, fontWeight: 560, color: "#0F172A", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{s.title}</div>
                  <div style={{ fontSize: 11, color: "#64748B" }}>
                    {s.company} · {s.loc}
                  </div>
                </div>
                <MatchScore value={s.match} size="sm" />
              </Link>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
