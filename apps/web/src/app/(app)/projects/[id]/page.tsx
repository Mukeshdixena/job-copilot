import Link from "next/link";
import {
  PROJECT,
  HEALTH_CHECKS,
  IMPROVEMENT_PLAN,
  PROVES,
  SIGNALS,
  UNLOCKS,
  checkStyle,
  planStyle,
} from "@/lib/mock/project-analyzer";

export default function ProjectAnalyzerPage() {
  return (
    <div style={{ padding: "20px 22px 44px", display: "grid", gap: 14, alignContent: "start" }}>
      <div>
        <Link
          href="/projects"
          className="hover:text-[#2F5BEA]"
          style={{ fontSize: 11.5, fontWeight: 560, color: "#64748B", cursor: "pointer", padding: "0 0 6px", display: "inline-block" }}
        >
          ← Projects
        </Link>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 20, fontWeight: 640, letterSpacing: "-.02em" }}>{PROJECT.name}</h1>
            <div style={{ fontSize: 12.5, color: "#475569", marginTop: 3 }}>
              {PROJECT.stackLine} · <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5 }}>{PROJECT.repo}</span>
            </div>
          </div>
          <button
            type="button"
            className="hover:bg-[#F8FAFC]"
            style={{ fontSize: 12, fontWeight: 560, padding: "7px 11px", borderRadius: 7, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
          >
            Re-scan repository
          </button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 300px", gap: 14, alignItems: "start" }}>
        <div style={{ display: "grid", gap: 14, minWidth: 0 }}>
          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, padding: 14, display: "grid", gridTemplateColumns: "auto 1px minmax(0,1fr)", gap: 18, alignItems: "center" }}>
            <div style={{ textAlign: "center", minWidth: 100 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#94A3B8" }}>Project health</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 42, fontWeight: 600, letterSpacing: "-.045em", lineHeight: 1, color: PROJECT.healthColor, marginTop: 3 }}>
                {PROJECT.health}
              </div>
              <div style={{ fontSize: 11.5, color: "#94A3B8", marginTop: 2 }}>out of 100</div>
              <div style={{ display: "inline-block", fontSize: 11, fontWeight: 620, color: "#2F5BEA", background: "#EEF2FF", border: "1px solid #C7D2FE", padding: "2px 7px", borderRadius: 4, marginTop: 7 }}>
                → {PROJECT.achievable} achievable
              </div>
            </div>
            <div style={{ background: "#EEF1F6" }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 18px" }}>
              {HEALTH_CHECKS.map((c) => {
                const cs = checkStyle(c.state);
                return (
                  <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 8, padding: "3px 0" }}>
                    <span style={{ flex: "none", width: 14, textAlign: "center", color: cs.color, fontSize: 12 }}>{cs.icon}</span>
                    <span style={{ flex: 1, minWidth: 0, fontSize: 12.5, color: cs.textColor, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.label}</span>
                    <span style={{ flex: "none", fontFamily: "var(--font-mono)", fontSize: 10.5, color: "#94A3B8" }}>{c.note}</span>
                  </div>
                );
              })}
            </div>
          </section>

          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
              <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Improvement plan</h2>
              <span style={{ fontSize: 11.5, color: "#94A3B8" }}>Ordered by interview payoff per hour</span>
            </div>
            {IMPROVEMENT_PLAN.map((p) => {
              const ps = planStyle(p.tone);
              return (
                <div key={p.n} style={{ display: "grid", gridTemplateColumns: "26px minmax(0,1fr) auto", gap: 12, padding: "12px 14px", borderBottom: "1px solid #F4F7FA", alignItems: "start" }}>
                  <span
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 6,
                      display: "grid",
                      placeItems: "center",
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      fontWeight: 600,
                      background: ps.numBg,
                      color: ps.numFg,
                      border: `1px solid ${ps.numBd}`,
                      marginTop: 1,
                    }}
                  >
                    {p.n}
                  </span>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#0F172A" }}>{p.title}</div>
                    <div style={{ fontSize: 12, color: "#475569", marginTop: 3, lineHeight: 1.5 }}>{p.what}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 9, marginTop: 6, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 11, color: "#0B6E45" }}>↑ {p.gain}</span>
                      <span style={{ color: "#CBD5E1" }}>·</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#64748B" }}>{p.effort}</span>
                      <span style={{ color: "#CBD5E1" }}>·</span>
                      <span style={{ fontSize: 11, color: "#64748B" }}>Unblocks: {p.unblocks}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="hover:brightness-[.96]"
                    style={{ flex: "none", fontSize: 11.5, fontWeight: 600, padding: "5px 11px", borderRadius: 6, border: `1px solid ${ps.ctaBd}`, background: ps.ctaBg, color: ps.ctaFg, cursor: "pointer", marginTop: 1 }}
                  >
                    {ps.cta}
                  </button>
                </div>
              );
            })}
          </section>
        </div>

        <div style={{ display: "grid", gap: 14, minWidth: 0 }}>
          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
              <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>What this project already proves</h2>
            </div>
            {PROVES.map((p, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 9, padding: "9px 14px", borderBottom: "1px solid #F4F7FA" }}>
                <span style={{ flex: "none", color: "#12915C", fontSize: 12, lineHeight: 1.4 }}>✓</span>
                <span style={{ flex: 1, minWidth: 0, fontSize: 12, color: "#334155", lineHeight: 1.45 }}>{p}</span>
              </div>
            ))}
          </section>

          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
              <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Repository signals</h2>
            </div>
            {SIGNALS.map((s) => (
              <div key={s.k} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: 10, padding: "8px 14px", borderBottom: "1px solid #F4F7FA", alignItems: "center" }}>
                <span style={{ fontSize: 12, color: "#475569", minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{s.k}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, fontWeight: 600, color: s.color }}>{s.v}</span>
              </div>
            ))}
          </section>

          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
              <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Interview questions this unlocks</h2>
            </div>
            {UNLOCKS.map((u, i) => (
              <Link
                key={i}
                href="/interviews/questions/1"
                className="hover:bg-[#FCFDFE]"
                style={{ display: "flex", alignItems: "center", gap: 9, width: "100%", textAlign: "left", padding: "9px 14px", borderBottom: "1px solid #F4F7FA", background: "#fff", cursor: "pointer" }}
              >
                <span style={{ flex: 1, minWidth: 0, fontSize: 12, color: "#334155", lineHeight: 1.4 }}>{u}</span>
                <span style={{ flex: "none", color: "#CBD5E1", fontSize: 11 }}>→</span>
              </Link>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
