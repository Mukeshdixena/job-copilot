import Link from "next/link";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { MetricBar } from "@/components/shared/MetricBar";
import {
  TRACKS,
  TODO,
  todoColors,
  TABS,
  tabColors,
  QUESTIONS,
  questionStateColors,
  UPCOMING,
} from "@/lib/mock/interview";

export default function InterviewsPage() {
  return (
    <div style={{ padding: "20px 22px 44px", display: "grid", gap: 14, alignContent: "start" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 640, letterSpacing: "-.02em" }}>Interview center</h1>
          <div style={{ fontSize: 12.5, color: "#475569", marginTop: 3 }}>
            One interview tomorrow. Two tracks are below 60% and both come up in round 2.
          </div>
        </div>
        <div style={{ display: "flex", gap: 7 }}>
          <Link
            href="/interviews/notes"
            className="hover:bg-[#F8FAFC]"
            style={{ fontSize: 12, fontWeight: 560, padding: "7px 11px", borderRadius: 7, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
          >
            Quick Notes
          </Link>
          <button
            type="button"
            className="hover:bg-[#2449C4]"
            style={{ fontSize: 12, fontWeight: 620, padding: "7px 13px", borderRadius: 7, border: "1px solid #2F5BEA", background: "#2F5BEA", color: "#fff", cursor: "pointer" }}
          >
            Start mock interview
          </button>
        </div>
      </div>

      <section style={{ border: "1px solid #C7D2FE", borderRadius: 10, overflow: "hidden", background: "#fff" }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: 16, padding: 14, background: "#F8FAFF", borderBottom: "1px solid #E4E9FB", alignItems: "center" }}>
          <div style={{ minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9, flexWrap: "wrap" }}>
              <span style={{ fontSize: 16, fontWeight: 660, color: "#0F172A", letterSpacing: "-.015em" }}>XYZ Technologies</span>
              <StatusBadge text="Tomorrow, 11:00 AM" tone="danger" />
              <StatusBadge text="Round 2 of 3" tone="accent" />
            </div>
            <div style={{ fontSize: 12.5, color: "#475569", marginTop: 3 }}>Java Backend Developer · 60 min · panel of 2 · Google Meet</div>
            <div style={{ fontSize: 12, color: "#475569", marginTop: 7, lineHeight: 1.5 }}>
              Round 1 feedback: strong on Spring Boot fundamentals, asked to go deeper on transaction handling and to prepare a design discussion.
            </div>
          </div>
          <div style={{ textAlign: "center", flex: "none", minWidth: 104 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#94A3B8" }}>Readiness</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 38, fontWeight: 600, letterSpacing: "-.04em", color: "#2F5BEA", lineHeight: 1 }}>78</div>
            <div style={{ fontSize: 11, color: "#64748B" }}>+11 in 3 days</div>
          </div>
        </div>

        <div style={{ padding: "13px 14px", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 16 }}>
          <div style={{ display: "grid", gap: 9, alignContent: "start" }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#94A3B8" }}>Track readiness</div>
            {TRACKS.map((t) => (
              <MetricBar key={t.label} label={t.label} value={t.value} />
            ))}
          </div>
          <div style={{ display: "grid", gap: 9, alignContent: "start" }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#94A3B8" }}>Do these first</div>
            {TODO.map((t, i) => {
              const c = todoColors(t.tone);
              return (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 11px", border: `1px solid ${c.bd}`, borderRadius: 8, background: c.bg }}>
                  <span style={{ flex: "none", fontFamily: "var(--font-mono)", fontSize: 10.5, fontWeight: 600, color: c.fg, background: "#fff", border: `1px solid ${c.bd}`, padding: "1px 5px", borderRadius: 4 }}>
                    {t.time}
                  </span>
                  <span style={{ flex: 1, minWidth: 0, fontSize: 12.5, color: "#334155", lineHeight: 1.4 }}>{t.label}</span>
                  <Link
                    href="/interviews/questions/1"
                    className="hover:bg-[#F8FAFC]"
                    style={{ flex: "none", fontSize: 11.5, fontWeight: 600, padding: "4px 9px", borderRadius: 6, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
                  >
                    Open
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "9px 12px", borderBottom: "1px solid #EEF1F6", overflowX: "auto", flexWrap: "wrap" }}>
          {TABS.map((t) => {
            const c = tabColors(t.on);
            return (
              <button
                key={t.label}
                type="button"
                style={{ display: "inline-flex", alignItems: "center", gap: 5, whiteSpace: "nowrap", fontSize: 11.5, fontWeight: c.weight, padding: "4px 9px", borderRadius: 6, border: `1px solid ${c.bd}`, background: c.bg, color: c.fg, cursor: "pointer" }}
              >
                {t.label}
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, opacity: 0.72 }}>{t.n}</span>
              </button>
            );
          })}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 260px", gap: 0 }}>
          <div style={{ minWidth: 0, borderRight: "1px solid #EEF1F6" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", borderBottom: "1px solid #EEF1F6", background: "#FCFDFE" }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B" }}>Spring Boot · 34 questions</span>
              <span style={{ fontSize: 11.5, color: "#94A3B8" }}>Sorted by likelihood for this panel</span>
            </div>
            {QUESTIONS.map((q, i) => {
              const c = questionStateColors(q.state);
              return (
                <Link
                  key={i}
                  href="/interviews/questions/1"
                  className="hover:bg-[#FCFDFE]"
                  style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto auto", gap: 11, width: "100%", textAlign: "left", alignItems: "center", padding: "10px 14px", border: 0, borderBottom: "1px solid #F4F7FA", background: "#fff", cursor: "pointer" }}
                >
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 12.5, fontWeight: 540, color: "#0F172A", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{q.q}</div>
                    <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 2 }}>{q.meta}</div>
                  </div>
                  <span style={{ fontSize: 10.5, fontWeight: 640, padding: "1px 6px", borderRadius: 4, border: `1px solid ${c.bd}`, background: c.bg, color: c.fg, whiteSpace: "nowrap" }}>{q.state}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#94A3B8", whiteSpace: "nowrap" }}>{q.likelihood}</span>
                </Link>
              );
            })}
          </div>

          <div>
            <div style={{ padding: "10px 14px", borderBottom: "1px solid #EEF1F6", background: "#FCFDFE" }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B" }}>Upcoming</span>
            </div>
            {UPCOMING.map((u, i) => (
              <div key={i} style={{ padding: "11px 14px", borderBottom: "1px solid #F4F7FA" }}>
                <div style={{ fontSize: 12.5, fontWeight: 560, color: "#0F172A" }}>{u.company}</div>
                <div style={{ fontSize: 11.5, color: "#64748B", marginTop: 1 }}>{u.role}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 6 }}>
                  <span style={{ fontSize: 10.5, fontWeight: 640, padding: "1px 6px", borderRadius: 4, border: `1px solid ${u.bd}`, background: u.bg, color: u.fg }}>{u.when}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "#94A3B8" }}>{u.ready}</span>
                </div>
              </div>
            ))}
            <div style={{ padding: 14, textAlign: "center" }}>
              <div style={{ fontSize: 11.5, color: "#94A3B8", lineHeight: 1.5 }}>
                No interviews after Sep 04.
                <br />
                Three applications are still in screening.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
