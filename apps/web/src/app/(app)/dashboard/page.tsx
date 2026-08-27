import Link from "next/link";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { JobCard } from "@/components/shared/JobCard";
import { MetricBar } from "@/components/shared/MetricBar";
import {
  PRIORITIES,
  priorityColors,
  DEADLINES,
  deadlineColors,
  FUNNEL,
  DASHBOARD_JOBS,
  PROFILE_HEALTH,
  SKILL_GAP_SNAPSHOT,
} from "@/lib/mock/dashboard";

export default function DashboardPage() {
  return (
    <div style={{ padding: "20px 22px 44px", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 15, alignContent: "start" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 22, fontWeight: 640, letterSpacing: "-.022em", color: "#0F172A" }}>
            Good morning, Mukesh
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 5, fontSize: 12.5, color: "#475569" }}>
            <span style={{ fontWeight: 560, color: "#334155" }}>Java Spring Boot Backend Developer</span>
            <span style={{ color: "#CBD5E1" }}>·</span>
            <StatusBadge text="Job search active" tone="success" />
            <span style={{ color: "#CBD5E1" }}>·</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5 }}>Tue 26 Aug · week 7</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 7 }}>
          <Link
            href="/skill-gaps"
            className="hover:bg-[#F8FAFC]"
            style={{ fontSize: 12.5, fontWeight: 560, padding: "7px 12px", borderRadius: 7, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
          >
            Weekly review
          </Link>
          <Link
            href="/assistant"
            className="hover:bg-[#1B2A47]"
            style={{ fontSize: 12.5, fontWeight: 620, padding: "7px 13px", borderRadius: 7, border: "1px solid #0C1425", background: "#0C1425", color: "#fff", cursor: "pointer" }}
          >
            ✦ Ask AI
          </Link>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.62fr) minmax(0,1fr)", gap: 15, alignItems: "start" }}>
        <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>
                Today&apos;s priorities
              </h2>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 600, color: "#2F5BEA", background: "#EEF2FF", border: "1px solid #C7D2FE", padding: "1px 5px", borderRadius: 4 }}>
                5 open
              </span>
            </div>
            <span style={{ fontSize: 11.5, color: "#94A3B8" }}>Ranked by impact on getting hired</span>
          </div>
          {PRIORITIES.map((p) => {
            const c = priorityColors(p.tone, p.primary);
            return (
              <div
                key={p.n}
                className="hover:bg-[#FCFDFE]"
                style={{ display: "grid", gridTemplateColumns: "22px minmax(0,1fr) auto", gap: 12, alignItems: "center", padding: "11px 14px", borderBottom: "1px solid #F4F7FA" }}
              >
                <span style={{ width: 22, height: 22, borderRadius: 6, display: "grid", placeItems: "center", fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600, background: c.numBg, color: c.numFg, border: `1px solid ${c.numBd}` }}>
                  {p.n}
                </span>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 580, color: "#0F172A", letterSpacing: "-.008em" }}>{p.title}</div>
                  <div style={{ fontSize: 11.5, color: "#64748B", marginTop: 2 }}>{p.detail}</div>
                </div>
                <Link
                  href={p.href}
                  className="hover:brightness-95"
                  style={{ fontSize: 12, fontWeight: 600, padding: "5px 11px", borderRadius: 6, border: `1px solid ${c.ctaBd}`, background: c.ctaBg, color: c.ctaFg, cursor: "pointer", whiteSpace: "nowrap" }}
                >
                  {p.cta}
                </Link>
              </div>
            );
          })}
          <div style={{ padding: "9px 14px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#FCFDFE" }}>
            <span style={{ fontSize: 11.5, color: "#94A3B8" }}>AI can complete 3 of these for your review</span>
            <Link href="/assistant" style={{ fontSize: 12, fontWeight: 600, color: "#2F5BEA" }}>
              Let AI prepare them →
            </Link>
          </div>
        </section>

        <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, padding: "11px 14px", borderBottom: "1px solid #EEF1F6", background: "#FFFBFB" }}>
            <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#A3170F", fontWeight: 700 }}>Deadlines</h2>
            <span style={{ fontSize: 11, fontWeight: 620, color: "#A3170F", background: "#FEF2F2", border: "1px solid #FCA5A5", padding: "1px 6px", borderRadius: 4 }}>
              1 closes tonight
            </span>
          </div>
          {DEADLINES.map((d, i) => {
            const c = deadlineColors(d.tone);
            return (
              <div
                key={i}
                className="hover:bg-[#FCFDFE]"
                style={{ display: "grid", gridTemplateColumns: "46px minmax(0,1fr)", gap: 11, padding: "10px 14px", borderBottom: "1px solid #F4F7FA", alignItems: "start" }}
              >
                <div style={{ textAlign: "center", borderRadius: 6, border: `1px solid ${c.chipBd}`, background: c.chipBg, padding: "3px 0" }}>
                  <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: c.chipFg }}>{d.mon}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 600, color: c.chipFg, lineHeight: 1.1 }}>{d.day}</div>
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 12.5, fontWeight: 580, color: "#0F172A" }}>{d.title}</div>
                  <div style={{ fontSize: 11, color: "#64748B", marginTop: 1 }}>{d.meta}</div>
                  <div style={{ marginTop: 5, display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: 10.5, fontWeight: 640, padding: "1px 6px", borderRadius: 4, border: `1px solid ${c.chipBd}`, background: c.chipBg, color: c.chipFg }}>
                      {d.urgency}
                    </span>
                    <Link href={d.href} style={{ fontSize: 11.5, fontWeight: 600, color: "#2F5BEA" }}>
                      {d.cta} →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
          <Link
            href="/drives"
            className="hover:text-[#2F5BEA]"
            style={{ display: "block", width: "100%", textAlign: "center", padding: 9, background: "#FCFDFE", fontSize: 12, fontWeight: 560, color: "#475569", cursor: "pointer" }}
          >
            View full calendar
          </Link>
        </section>
      </div>

      <section style={{ minWidth: 0, background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, padding: "13px 14px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 12 }}>
          <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Job search funnel</h2>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 11.5, color: "#64748B" }}>
            <span>
              Applied → Interview{" "}
              <strong style={{ color: "#0F172A", fontFamily: "var(--font-mono)" }}>18%</strong>
            </span>
            <Link href="/analytics" style={{ fontSize: 11.5, fontWeight: 600, color: "#2F5BEA" }}>
              Analytics →
            </Link>
          </div>
        </div>
        <div className="jja-scroll" style={{ display: "flex", alignItems: "stretch", gap: 0, minWidth: 0, overflowX: "auto" }}>
          {FUNNEL.map((f, i) => (
            <Link
              key={f.label}
              href={f.href}
              className="hover:bg-[#F4F7FC]"
              style={{
                flex: 1,
                minWidth: 96,
                textAlign: "left",
                padding: "9px 11px",
                border: "1px solid #E9EEF4",
                borderRight: 0,
                background: f.active ? "#F4F7FC" : "#fff",
                cursor: "pointer",
                borderRadius: i === 0 ? "8px 0 0 8px" : i === FUNNEL.length - 1 ? "0 8px 8px 0" : 0,
              }}
            >
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 19, fontWeight: 600, letterSpacing: "-.03em", color: f.active ? "#2F5BEA" : "#0F172A", lineHeight: 1 }}>
                {f.n}
              </div>
              <div style={{ fontSize: 11, fontWeight: 560, color: "#64748B", marginTop: 4, whiteSpace: "nowrap" }}>{f.label}</div>
              <div style={{ height: 2, borderRadius: 99, marginTop: 6, background: f.active ? "#2F5BEA" : "#E3E8EF" }} />
            </Link>
          ))}
          <div style={{ flex: "none", width: 1, background: "#E9EEF4" }} />
        </div>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.62fr) minmax(0,1fr)", gap: 15, alignItems: "start" }}>
        <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>High-match jobs</h2>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 600, color: "#0B6E45", background: "#ECFDF3", border: "1px solid #A7E3C4", padding: "1px 5px", borderRadius: 4 }}>
                3 new today
              </span>
            </div>
            <Link href="/jobs" style={{ fontSize: 11.5, fontWeight: 600, color: "#2F5BEA" }}>
              All 128 jobs →
            </Link>
          </div>
          <div style={{ padding: 11, display: "grid", gap: 9 }}>
            {DASHBOARD_JOBS.map((j, i) => (
              <JobCard key={j.title} job={j} analyzeHref={`/jobs/${i + 1}`} prepareHref={`/applications/prepare/${i + 1}`} />
            ))}
          </div>
        </section>

        <div style={{ display: "grid", gap: 15 }}>
          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
              <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Profile health</h2>
            </div>
            <div style={{ padding: "13px 14px", display: "grid", gap: 11 }}>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 9 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 34, fontWeight: 600, letterSpacing: "-.04em", lineHeight: 0.9, color: "#0F172A" }}>82</span>
                <span style={{ fontSize: 12, color: "#94A3B8", paddingBottom: 3 }}>/ 100</span>
                <span style={{ flex: 1 }} />
                <span style={{ fontSize: 11, fontWeight: 620, color: "#0B6E45", background: "#ECFDF3", border: "1px solid #A7E3C4", padding: "2px 6px", borderRadius: 4 }}>
                  +6 this week
                </span>
              </div>
              <div style={{ display: "grid", gap: 9 }}>
                {PROFILE_HEALTH.map((h) => (
                  <MetricBar key={h.label} label={h.label} value={h.value} />
                ))}
              </div>
              <Link
                href="/profile/audit"
                className="hover:bg-[#2449C4]"
                style={{ display: "block", textAlign: "center", width: "100%", fontSize: 12.5, fontWeight: 620, padding: 8, borderRadius: 7, border: "1px solid #2F5BEA", background: "#2F5BEA", color: "#fff", cursor: "pointer" }}
              >
                Improve Profile
              </Link>
            </div>
          </section>

          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
              <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Skill gap snapshot</h2>
              <span style={{ fontSize: 10.5, color: "#94A3B8", fontFamily: "var(--font-mono)" }}>vs 128 JD sample</span>
            </div>
            {SKILL_GAP_SNAPSHOT.map((g) => (
              <div key={g.skill} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderBottom: "1px solid #F4F7FA" }}>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, fontWeight: 600, color: "#0F172A" }}>{g.skill}</span>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".05em", textTransform: "uppercase", color: "#A3170F", background: "#FEF2F2", border: "1px solid #FCA5A5", padding: "1px 5px", borderRadius: 4 }}>
                      {g.priority}
                    </span>
                  </div>
                  <div style={{ fontSize: 11, color: "#64748B", marginTop: 2 }}>{g.reason}</div>
                </div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "#64748B", whiteSpace: "nowrap" }}>{g.demand}</span>
              </div>
            ))}
            <Link
              href="/skill-gaps"
              className="hover:bg-[#F4F7FC]"
              style={{ display: "block", width: "100%", textAlign: "center", padding: 9, background: "#FCFDFE", fontSize: 12, fontWeight: 600, color: "#2F5BEA", cursor: "pointer" }}
            >
              View Skill Plan →
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
