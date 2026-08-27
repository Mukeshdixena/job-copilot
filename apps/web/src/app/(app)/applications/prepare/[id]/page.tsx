import Link from "next/link";
import { MatchScore } from "@/components/shared/MatchScore";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { STEPS, RESUMES, ANSWERS, LETTER, OUTREACH, CHECKS } from "@/lib/mock/application-prep";

export default function ApplicationPrepPage() {
  return (
    <div style={{ padding: "20px 22px 44px", display: "grid", gap: 14, alignContent: "start" }}>
      <div>
        <Link
          href="/jobs"
          className="hover:text-[#2F5BEA]"
          style={{ fontSize: 11.5, fontWeight: 560, border: 0, background: "none", color: "#64748B", cursor: "pointer", padding: "0 0 6px", display: "inline-block" }}
        >
          ← Jobs
        </Link>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 20, fontWeight: 640, letterSpacing: "-.02em" }}>Application preparation</h1>
            <div style={{ fontSize: 12.5, color: "#475569", marginTop: 3 }}>
              Java Spring Boot Developer · <strong style={{ fontWeight: 580, color: "#334155" }}>ABC Technologies</strong> · 94% match · closes in 6 days
            </div>
          </div>
          <div style={{ display: "flex", gap: 7 }}>
            <button
              type="button"
              className="hover:bg-[#F8FAFC]"
              style={{ fontSize: 12, fontWeight: 560, padding: "7px 11px", borderRadius: 7, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
            >
              Save draft
            </button>
            <button
              type="button"
              className="hover:bg-[#2449C4]"
              style={{ fontSize: 12, fontWeight: 620, padding: "7px 13px", borderRadius: 7, border: "1px solid #2F5BEA", background: "#2F5BEA", color: "#fff", cursor: "pointer" }}
            >
              Review Everything
            </button>
          </div>
        </div>
      </div>

      <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, padding: "13px 14px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 11 }}>
          <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Readiness</h2>
          <span style={{ fontSize: 12, color: "#475569" }}>
            5 of 6 steps prepared · <strong style={{ fontFamily: "var(--font-mono)", fontWeight: 600, color: "#0F172A" }}>83%</strong>
          </span>
        </div>
        <div style={{ height: 6, borderRadius: 99, background: "#EDF1F6", overflow: "hidden", marginBottom: 12 }}>
          <div style={{ width: "83%", height: "100%", background: "#2F5BEA", borderRadius: 99 }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 8 }}>
          {STEPS.map((s) => (
            <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", border: `1px solid ${s.bd}`, borderRadius: 7, background: s.bg }}>
              <span style={{ flex: "none", width: 14, textAlign: "center", color: s.color, fontSize: 12 }}>{s.icon}</span>
              <span style={{ flex: 1, minWidth: 0, fontSize: 12, fontWeight: 520, color: s.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.55fr) minmax(0,1fr)", gap: 14, alignItems: "start" }}>
        <div style={{ display: "grid", gap: 14, minWidth: 0 }}>
          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
              <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Resume selection</h2>
              <Link href="/resume" style={{ fontSize: 11.5, fontWeight: 600, color: "#2F5BEA" }}>
                Edit in workspace →
              </Link>
            </div>
            {RESUMES.map((r) => (
              <div key={r.name} style={{ display: "flex", alignItems: "center", gap: 11, padding: "11px 14px", borderBottom: "1px solid #F4F7FA", background: r.bg }}>
                <span style={{ width: 14, height: 14, flex: "none", borderRadius: 99, border: r.radioBd, background: r.radioBg, display: "grid", placeItems: "center" }}>
                  <span style={{ width: 5, height: 5, borderRadius: 99, background: r.radioDot }} />
                </span>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, fontWeight: 600, color: "#0F172A" }}>{r.name}</div>
                  <div style={{ fontSize: 11.5, color: "#64748B", marginTop: 1 }}>{r.note}</div>
                </div>
                <span style={{ flex: "none", fontSize: 11.5, fontFamily: "var(--font-mono)", color: "#475569" }}>{r.coverage}</span>
                <MatchScore value={r.score} size="sm" />
              </div>
            ))}
          </section>

          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Application answers</h2>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "#5B21B6", background: "#F5F3FF", border: "1px solid #DDD6FE", padding: "1px 5px", borderRadius: 4 }}>
                  AI drafted
                </span>
              </div>
              <span style={{ fontSize: 11.5, color: "#94A3B8" }}>4 questions · grounded in verified evidence</span>
            </div>
            {ANSWERS.map((a) => (
              <div key={a.q} style={{ padding: "12px 14px", borderBottom: "1px solid #F4F7FA" }}>
                <div style={{ fontSize: 12, fontWeight: 620, color: "#334155" }}>{a.q}</div>
                <p style={{ margin: "6px 0 0", fontSize: 12.5, lineHeight: 1.55, color: "#475569", background: "#FCFDFE", border: "1px solid #EEF1F6", borderRadius: 7, padding: "9px 10px" }}>
                  {a.a}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 8, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 11, color: "#0B6E45", display: "inline-flex", alignItems: "center", gap: 4 }}>✓ {a.source}</span>
                  <span style={{ flex: 1 }} />
                  <button
                    type="button"
                    className="hover:bg-[#E6F7EE]"
                    style={{ fontSize: 11.5, fontWeight: 600, padding: "4px 10px", borderRadius: 6, border: "1px solid #A7E3C4", background: "#F3FBF6", color: "#0B6E45", cursor: "pointer" }}
                  >
                    Accept
                  </button>
                  <button
                    type="button"
                    className="hover:bg-[#F8FAFC]"
                    style={{ fontSize: 11.5, fontWeight: 560, padding: "4px 10px", borderRadius: 6, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="hover:text-[#A3170F] hover:border-[#FCA5A5]"
                    style={{ fontSize: 11.5, fontWeight: 560, padding: "4px 10px", borderRadius: 6, border: "1px solid #E3E8EF", background: "#fff", color: "#64748B", cursor: "pointer" }}
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </section>

          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Cover letter</h2>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "#5B21B6", background: "#F5F3FF", border: "1px solid #DDD6FE", padding: "1px 5px", borderRadius: 4 }}>
                  AI drafted · needs review
                </span>
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#94A3B8" }}>218 words</span>
            </div>
            <div style={{ padding: "12px 14px", display: "grid", gap: 9 }}>
              <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.6, color: "#475569", whiteSpace: "pre-line" }}>{LETTER}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 7, paddingTop: 9, borderTop: "1px solid #F1F5F9", flexWrap: "wrap" }}>
                <span style={{ fontSize: 11, color: "#0B6E45" }}>✓ Every claim traced to profile evidence</span>
                <span style={{ color: "#CBD5E1" }}>·</span>
                <span style={{ fontSize: 11, color: "#9A4A08" }}>⚠ No experience invented</span>
                <span style={{ flex: 1 }} />
                <button
                  type="button"
                  className="hover:bg-[#2449C4]"
                  style={{ fontSize: 11.5, fontWeight: 600, padding: "5px 11px", borderRadius: 6, border: "1px solid #2F5BEA", background: "#2F5BEA", color: "#fff", cursor: "pointer" }}
                >
                  Accept &amp; attach
                </button>
                <button
                  type="button"
                  className="hover:bg-[#F8FAFC]"
                  style={{ fontSize: 11.5, fontWeight: 560, padding: "5px 11px", borderRadius: 6, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
                >
                  Edit
                </button>
              </div>
            </div>
          </section>
        </div>

        <div style={{ display: "grid", gap: 14, minWidth: 0 }}>
          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
              <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Outreach</h2>
            </div>
            <div style={{ padding: "12px 14px", display: "grid", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{ width: 29, height: 29, flex: "none", borderRadius: 99, background: "#F1F5F9", border: "1px solid #E3E8EF", display: "grid", placeItems: "center", fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 640, color: "#475569" }}
                >
                  PN
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontSize: 12.5, fontWeight: 580, color: "#0F172A" }}>Priya Nair</div>
                  <div style={{ fontSize: 11, color: "#64748B" }}>Technical Recruiter · ABC Technologies</div>
                </div>
                <StatusBadge text="Identified" tone="accent" />
              </div>
              <div style={{ border: "1px solid #EEF1F6", borderRadius: 7, background: "#FCFDFE", padding: 10 }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: "#94A3B8", marginBottom: 5 }}>
                  LinkedIn message · draft
                </div>
                <p style={{ margin: 0, fontSize: 12, lineHeight: 1.55, color: "#475569" }}>{OUTREACH}</p>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                <button
                  type="button"
                  className="hover:bg-[#F8FAFC]"
                  style={{ flex: 1, fontSize: 11.5, fontWeight: 600, padding: 6, borderRadius: 6, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
                >
                  Copy
                </button>
                <Link
                  href="/networking/1"
                  className="hover:bg-[#2449C4]"
                  style={{ flex: 1, textAlign: "center", fontSize: 11.5, fontWeight: 600, padding: 6, borderRadius: 6, border: "1px solid #2F5BEA", background: "#2F5BEA", color: "#fff", cursor: "pointer" }}
                >
                  Review &amp; send
                </Link>
              </div>
              <div style={{ fontSize: 11, color: "#64748B", lineHeight: 1.45 }}>
                You send this yourself. The agent will not message anyone on your behalf.
              </div>
            </div>
          </section>

          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
              <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Before you submit</h2>
            </div>
            {CHECKS.map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 9, padding: "10px 14px", borderBottom: "1px solid #F4F7FA" }}>
                <span style={{ flex: "none", width: 13, textAlign: "center", color: c.color, fontSize: 12, lineHeight: 1.4 }}>{c.icon}</span>
                <span style={{ flex: 1, minWidth: 0, fontSize: 12, color: "#334155", lineHeight: 1.45 }}>{c.text}</span>
              </div>
            ))}
            <div style={{ padding: "11px 14px" }}>
              <button
                type="button"
                className="hover:bg-[#1B2A47]"
                style={{ width: "100%", fontSize: 12.5, fontWeight: 620, padding: 9, borderRadius: 7, border: "1px solid #0C1425", background: "#0C1425", color: "#fff", cursor: "pointer" }}
              >
                Open application form ↗
              </button>
              <div style={{ fontSize: 10.5, color: "#94A3B8", textAlign: "center", marginTop: 7 }}>
                Opens the employer&apos;s site. Submission stays in your hands.
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
