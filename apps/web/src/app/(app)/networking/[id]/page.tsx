import Link from "next/link";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { MatchScore } from "@/components/shared/MatchScore";
import { TIMELINE, TYPES, DRAFT, CHECKS, DETAILS, LINKED, NOTES } from "@/lib/mock/contact";

export default function ContactPage() {
  return (
    <div style={{ padding: "20px 22px 44px", display: "grid", gap: 14, alignContent: "start" }}>
      <div>
        <Link
          href="/networking"
          className="hover:text-[#2F5BEA]"
          style={{ fontSize: 11.5, fontWeight: 560, border: 0, background: "none", color: "#64748B", cursor: "pointer", padding: "0 0 6px", display: "inline-block" }}
        >
          ← Networking
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 13, flexWrap: "wrap" }}>
          <div
            style={{
              width: 44,
              height: 44,
              flex: "none",
              borderRadius: 99,
              background: "#0C1425",
              display: "grid",
              placeItems: "center",
              fontFamily: "var(--font-mono)",
              fontSize: 15,
              fontWeight: 600,
              color: "#fff",
            }}
          >
            PN
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9, flexWrap: "wrap" }}>
              <h1 style={{ margin: 0, fontSize: 19, fontWeight: 640, letterSpacing: "-.02em" }}>Priya Nair</h1>
              <StatusBadge text="Replied" tone="success" />
              <StatusBadge text="Follow-up 4 days late" tone="danger" />
            </div>
            <div style={{ fontSize: 12.5, color: "#475569", marginTop: 3 }}>
              Technical Recruiter · TCS · Bangalore ·{" "}
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5 }}>linkedin.com/in/priya-nair</span>
            </div>
          </div>
          <span style={{ flex: 1 }} />
          <div style={{ display: "flex", gap: 7 }}>
            <button
              type="button"
              className="hover:bg-[#F8FAFC]"
              style={{ fontSize: 12, fontWeight: 560, padding: "7px 11px", borderRadius: 7, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
            >
              Log activity
            </button>
            <button
              type="button"
              className="hover:bg-[#2449C4]"
              style={{ fontSize: 12, fontWeight: 620, padding: "7px 13px", borderRadius: 7, border: "1px solid #2F5BEA", background: "#2F5BEA", color: "#fff", cursor: "pointer" }}
            >
              Generate message
            </button>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 280px", gap: 14, alignItems: "start" }}>
        <div style={{ display: "grid", gap: 14, minWidth: 0 }}>
          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
              <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Timeline</h2>
              <span style={{ fontSize: 11.5, color: "#94A3B8" }}>7 events · first contact 12 days ago</span>
            </div>
            <div style={{ padding: "14px 14px 6px" }}>
              {TIMELINE.map((t, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "52px 16px minmax(0,1fr)", gap: 11, alignItems: "start" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "#94A3B8", paddingTop: 1, textAlign: "right" }}>{t.date}</span>
                  <div style={{ display: "grid", justifyItems: "center", height: "100%" }}>
                    <span style={{ width: 9, height: 9, borderRadius: 99, flex: "none", background: t.dotBg, border: `2px solid ${t.dotBd}`, marginTop: 3 }} />
                    <span style={{ width: 1.5, flex: 1, background: t.line, minHeight: 16 }} />
                  </div>
                  <div style={{ minWidth: 0, paddingBottom: 14 }}>
                    <div style={{ fontSize: 12.5, fontWeight: t.weight, color: t.fg }}>{t.title}</div>
                    {t.detail && (
                      <div style={{ fontSize: 11.5, color: "#64748B", marginTop: 2, lineHeight: 1.45 }}>{t.detail}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9, padding: "10px 14px", borderBottom: "1px solid #EEF1F6", flexWrap: "wrap" }}>
              <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Message generator</h2>
              <span style={{ flex: 1 }} />
              {TYPES.map((t) => (
                <button
                  key={t.label}
                  type="button"
                  style={{ fontSize: 11, fontWeight: t.weight, padding: "3px 8px", borderRadius: 5, border: `1px solid ${t.bd}`, background: t.bg, color: t.fg, cursor: "pointer" }}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div style={{ padding: "12px 14px", display: "grid", gap: 11 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "#5B21B6", background: "#F5F3FF", border: "1px solid #DDD6FE", padding: "1px 5px", borderRadius: 4 }}>
                  AI drafted
                </span>
                <span style={{ fontSize: 11.5, color: "#64748B" }}>Follow-up · escalation 1 of 2 · then the agent stops nudging</span>
              </div>
              <div style={{ border: "1px solid #E3E8EF", borderRadius: 8, overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 9, padding: "8px 11px", background: "#FCFDFE", borderBottom: "1px solid #EEF1F6" }}>
                  <span style={{ fontSize: 11, color: "#94A3B8", fontFamily: "var(--font-mono)" }}>Subject</span>
                  <span style={{ fontSize: 12, fontWeight: 560, color: "#0F172A" }}>Following up — Java Developer application, TCS</span>
                </div>
                <p style={{ margin: 0, padding: 12, fontSize: 12.5, lineHeight: 1.6, color: "#334155", whiteSpace: "pre-line" }}>{DRAFT}</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 8 }}>
                {CHECKS.map((c, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 7, fontSize: 11.5, color: "#475569", lineHeight: 1.4 }}>
                    <span style={{ flex: "none", color: c.color, width: 11, textAlign: "center" }}>{c.icon}</span>
                    <span>{c.text}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", paddingTop: 9, borderTop: "1px solid #F1F5F9" }}>
                <button
                  type="button"
                  className="hover:bg-[#F8FAFC]"
                  style={{ fontSize: 11.5, fontWeight: 560, padding: "6px 11px", borderRadius: 6, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
                >
                  Regenerate
                </button>
                <button
                  type="button"
                  className="hover:bg-[#F8FAFC]"
                  style={{ fontSize: 11.5, fontWeight: 560, padding: "6px 11px", borderRadius: 6, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
                >
                  Edit
                </button>
                <span style={{ flex: 1 }} />
                <button
                  type="button"
                  className="hover:bg-[#E0E7FF]"
                  style={{ fontSize: 11.5, fontWeight: 600, padding: "6px 11px", borderRadius: 6, border: "1px solid #C7D2FE", background: "#EEF2FF", color: "#2F5BEA", cursor: "pointer" }}
                >
                  Copy
                </button>
                <button
                  type="button"
                  className="hover:bg-[#2449C4]"
                  style={{ fontSize: 11.5, fontWeight: 620, padding: "6px 13px", borderRadius: 6, border: "1px solid #2F5BEA", background: "#2F5BEA", color: "#fff", cursor: "pointer" }}
                >
                  Send from my account
                </button>
              </div>
            </div>
          </section>
        </div>

        <div style={{ display: "grid", gap: 14, minWidth: 0 }}>
          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
              <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Details</h2>
            </div>
            {DETAILS.map((d, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "84px minmax(0,1fr)", gap: 10, padding: "8px 14px", borderBottom: "1px solid #F4F7FA" }}>
                <span style={{ fontSize: 11, color: "#94A3B8" }}>{d.k}</span>
                <span style={{ fontSize: 12, color: "#334155", minWidth: 0, overflow: "hidden", textOverflow: "ellipsis" }}>{d.v}</span>
              </div>
            ))}
          </section>

          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
              <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Linked opportunities</h2>
            </div>
            {LINKED.map((l, i) => (
              <Link
                key={i}
                href="/drives"
                className="hover:bg-[#FCFDFE]"
                style={{ display: "flex", alignItems: "center", gap: 9, width: "100%", textAlign: "left", padding: "10px 14px", border: 0, borderBottom: "1px solid #F4F7FA", background: "#fff", cursor: "pointer" }}
              >
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontSize: 12.5, fontWeight: 560, color: "#0F172A", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{l.title}</div>
                  <div style={{ fontSize: 11, color: "#64748B" }}>{l.stage}</div>
                </div>
                <MatchScore value={l.match} size="sm" />
              </Link>
            ))}
          </section>

          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
              <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Notes</h2>
            </div>
            <div style={{ padding: "12px 14px", display: "grid", gap: 9 }}>
              {NOTES.map((n, i) => (
                <div key={i} style={{ borderLeft: "2px solid #E3E8EF", paddingLeft: 9 }}>
                  <div style={{ fontSize: 12, color: "#334155", lineHeight: 1.5 }}>{n.text}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "#94A3B8", marginTop: 3 }}>{n.date}</div>
                </div>
              ))}
              <button
                type="button"
                className="hover:border-[#C7D2FE] hover:text-[#2F5BEA]"
                style={{ fontSize: 11.5, fontWeight: 560, padding: 6, borderRadius: 6, border: "1px dashed #CBD5E1", background: "#FCFDFE", color: "#64748B", cursor: "pointer" }}
              >
                + Add note
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
