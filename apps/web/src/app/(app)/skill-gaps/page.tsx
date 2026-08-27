import Link from "next/link";
import { SKILLS, LEARNING_PLAN, REJECTIONS } from "@/lib/mock/skill-gaps";

export default function SkillGapsPage() {
  return (
    <div style={{ padding: "20px 22px 44px", display: "grid", gap: 14, alignContent: "start" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 640, letterSpacing: "-.02em" }}>Skill gaps</h1>
          <div style={{ fontSize: 12.5, color: "#475569", marginTop: 3 }}>
            Your readiness against demand in 128 Java / Spring Boot postings matched to your profile, sampled over the last 30 days.
          </div>
        </div>
        <button
          type="button"
          className="hover:bg-[#F8FAFC]"
          style={{ fontSize: 12, fontWeight: 560, padding: "7px 11px", borderRadius: 7, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
        >
          Change sample
        </button>
      </div>

      <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "11px 14px", borderBottom: "1px solid #EEF1F6", flexWrap: "wrap" }}>
          <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>
            Market demand vs your readiness
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 11.5, color: "#64748B" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 14, height: 5, borderRadius: 99, background: "#94A3B8" }} />
              Market demand
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 14, height: 5, borderRadius: 99, background: "#2F5BEA" }} />
              Your readiness
            </span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "118px minmax(0,1fr) 78px 62px", gap: 12, padding: "8px 14px", borderBottom: "1px solid #EEF1F6", background: "#FCFDFE" }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: "#94A3B8" }}>Skill</div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: "#94A3B8" }}>Demand / readiness</div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: "#94A3B8", textAlign: "right" }}>Gap</div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: "#94A3B8", textAlign: "right" }}>Priority</div>
        </div>

        {SKILLS.map((s) => (
          <div
            key={s.name}
            className="hover:bg-[#FCFDFE]"
            style={{ display: "grid", gridTemplateColumns: "118px minmax(0,1fr) 78px 62px", gap: 12, padding: "9px 14px", borderBottom: "1px solid #F4F7FA", alignItems: "center" }}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, fontWeight: 600, color: "#0F172A", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {s.name}
            </span>
            <div style={{ display: "grid", gap: 3, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                <div style={{ flex: 1, minWidth: 0, height: 5, borderRadius: 99, background: "#EDF1F6", overflow: "hidden" }}>
                  <div style={{ height: "100%", borderRadius: 99, background: "#94A3B8", width: s.demandPct }} />
                </div>
                <span style={{ flex: "none", fontFamily: "var(--font-mono)", fontSize: 10.5, color: "#64748B", width: 30, textAlign: "right" }}>{s.demand}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                <div style={{ flex: 1, minWidth: 0, height: 5, borderRadius: 99, background: "#EDF1F6", overflow: "hidden" }}>
                  <div style={{ height: "100%", borderRadius: 99, background: s.youColor, width: s.youPct }} />
                </div>
                <span style={{ flex: "none", fontFamily: "var(--font-mono)", fontSize: 10.5, color: s.youColor, width: 30, textAlign: "right" }}>{s.you}</span>
              </div>
            </div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600, color: s.gapColor, textAlign: "right" }}>{s.gap}</span>
            <div style={{ textAlign: "right" }}>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: ".05em",
                  textTransform: "uppercase",
                  padding: "1px 5px",
                  borderRadius: 4,
                  border: `1px solid ${s.pBd}`,
                  background: s.pBg,
                  color: s.pFg,
                }}
              >
                {s.priority}
              </span>
            </div>
          </div>
        ))}
      </section>

      <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
          <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Prioritised learning plan</h2>
          <span style={{ fontSize: 11.5, color: "#94A3B8" }}>6 weeks · sequenced so each step gives you something to say in an interview</span>
        </div>
        {LEARNING_PLAN.map((p) => (
          <div key={p.title} style={{ padding: "13px 14px", borderBottom: "1px solid #F4F7FA" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 14, flexWrap: "wrap" }}>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 9, flexWrap: "wrap" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10.5,
                      fontWeight: 600,
                      color: "#2F5BEA",
                      background: "#EEF2FF",
                      border: "1px solid #C7D2FE",
                      padding: "1px 6px",
                      borderRadius: 4,
                    }}
                  >
                    {p.window}
                  </span>
                  <span style={{ fontSize: 13.5, fontWeight: 620, color: "#0F172A", letterSpacing: "-.01em" }}>{p.title}</span>
                  <span
                    style={{
                      fontSize: 10.5,
                      fontWeight: 640,
                      padding: "1px 6px",
                      borderRadius: 4,
                      border: `1px solid ${p.bd}`,
                      background: p.bg,
                      color: p.fg,
                    }}
                  >
                    {p.impact}
                  </span>
                </div>
                <div style={{ fontSize: 12.5, color: "#475569", marginTop: 5, lineHeight: 1.5 }}>{p.why}</div>
                <div style={{ display: "grid", gap: 4, marginTop: 8 }}>
                  {p.steps.map((s, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12, color: "#475569", lineHeight: 1.45 }}>
                      <span style={{ flex: "none", width: 4, height: 4, borderRadius: 99, background: "#CBD5E1", marginTop: 6 }} />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: 11.5, color: "#0B6E45", marginTop: 8 }}>Evidence you will be able to claim: {p.evidence}</div>
              </div>
              <div style={{ flex: "none", display: "grid", gap: 6, minWidth: 120 }}>
                <Link
                  href="/projects/1"
                  className="hover:brightness-95"
                  style={{
                    fontSize: 12,
                    fontWeight: 620,
                    padding: "7px 12px",
                    borderRadius: 7,
                    border: `1px solid ${p.ctaBd}`,
                    background: p.ctaBg,
                    color: p.ctaFg,
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  {p.cta}
                </Link>
                <span style={{ fontSize: 10.5, color: "#94A3B8", textAlign: "center" }}>{p.unlocks} jobs unlocked</span>
              </div>
            </div>
          </div>
        ))}
        <div style={{ padding: "10px 14px", background: "#FCFDFE", fontSize: 11.5, color: "#64748B" }}>
          Nothing here is added to your profile until you have working evidence. Starting a course does not make you claim the skill.
        </div>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 12 }}>
        {REJECTIONS.map((r) => (
          <section key={r.label} style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, padding: "12px 13px" }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#94A3B8" }}>{r.label}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 22, fontWeight: 600, letterSpacing: "-.03em", color: r.color, marginTop: 5, lineHeight: 1 }}>{r.n}</div>
            <div style={{ fontSize: 12, color: "#475569", marginTop: 5, lineHeight: 1.45 }}>{r.note}</div>
          </section>
        ))}
      </div>
    </div>
  );
}
