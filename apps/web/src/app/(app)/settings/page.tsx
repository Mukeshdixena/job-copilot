import { SETTINGS_GROUPS, HARD_LIMITS } from "@/lib/mock/settings";

export default function SettingsPage() {
  return (
    <div style={{ padding: "20px 22px 44px", display: "grid", gap: 14, alignContent: "start", maxWidth: 960 }}>
      <div>
        <h1 style={{ margin: 0, fontSize: 20, fontWeight: 640, letterSpacing: "-.02em" }}>Settings</h1>
        <div style={{ fontSize: 12.5, color: "#475569", marginTop: 3 }}>
          Target role, sources, notifications, and the limits on what the agent may do without asking.
        </div>
      </div>

      {SETTINGS_GROUPS.map((g) => (
        <section key={g.title} style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
            <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>
              {g.title}
            </h2>
            <span style={{ fontSize: 11.5, color: "#94A3B8" }}>{g.note}</span>
          </div>
          {g.rows.map((r) => (
            <div
              key={r.label}
              style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: 14, padding: "11px 14px", borderBottom: "1px solid #F4F7FA", alignItems: "center" }}
            >
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 12.5, fontWeight: 560, color: "#0F172A" }}>{r.label}</div>
                <div style={{ fontSize: 11.5, color: "#64748B", marginTop: 2, lineHeight: 1.45 }}>{r.detail}</div>
              </div>
              {r.isToggle && (
                <div style={{ flex: "none", width: 34, height: 19, borderRadius: 99, background: r.trackBg, border: `1px solid ${r.trackBd}`, position: "relative", cursor: "pointer" }}>
                  <span style={{ position: "absolute", top: 2, left: r.knobLeft, width: 13, height: 13, borderRadius: 99, background: "#fff", boxShadow: "0 1px 2px rgba(15,23,42,.2)" }} />
                </div>
              )}
              {r.isValue && (
                <span style={{ flex: "none", fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 560, color: "#334155", background: "#F5F8FB", border: "1px solid #E7EDF3", padding: "3px 9px", borderRadius: 6, cursor: "pointer" }}>
                  {r.value} ⌄
                </span>
              )}
            </div>
          ))}
        </section>
      ))}

      <section style={{ background: "#fff", border: "1px solid #FCA5A5", borderRadius: 10, overflow: "hidden" }}>
        <div style={{ padding: "11px 14px", borderBottom: "1px solid #F7E4E4", background: "#FFFBFB" }}>
          <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#A3170F", fontWeight: 700 }}>
            Hard limits — cannot be turned on
          </h2>
        </div>
        {HARD_LIMITS.map((l, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 11, padding: "10px 14px", borderBottom: "1px solid #F4F7FA" }}>
            <span style={{ flex: "none", color: "#DC2626", fontSize: 12, width: 13, textAlign: "center" }}>✕</span>
            <span style={{ flex: 1, minWidth: 0, fontSize: 12.5, color: "#334155", lineHeight: 1.45 }}>{l}</span>
          </div>
        ))}
        <div style={{ padding: "10px 14px", background: "#FCFDFE", fontSize: 11.5, color: "#64748B" }}>
          These are product decisions, not preferences. Every external action stays under your control.
        </div>
      </section>
    </div>
  );
}
