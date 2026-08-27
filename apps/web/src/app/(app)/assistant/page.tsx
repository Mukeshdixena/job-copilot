import Link from "next/link";
import { ACTIONS, ACTION_HREFS, PROMPTS, SCOPES } from "@/lib/mock/assistant";

export default function AssistantPage() {
  return (
    <div
      style={{
        padding: "20px 22px 44px",
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) 288px",
        gap: 14,
        alignItems: "start",
        maxWidth: 1400,
      }}
    >
      <div style={{ display: "grid", gap: 14, minWidth: 0 }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 640, letterSpacing: "-.02em" }}>AI assistant</h1>
          <div style={{ fontSize: 12.5, color: "#475569", marginTop: 3 }}>
            Has read access to your profile, applications, resume versions, contacts and interview notes. It
            prepares work; you approve anything that leaves the app.
          </div>
        </div>

        <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden", display: "grid" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 14px",
              borderBottom: "1px solid #EEF1F6",
              background: "#FCFDFE",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: 99,
                background: "#4ADE80",
                animation: "jjaPulse 2.4s ease-in-out infinite",
              }}
            />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B" }}>
              Session · today 08:14
            </span>
            <span style={{ flex: 1 }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "#94A3B8" }}>
              context: profile · 41 applications · 48 contacts
            </span>
          </div>

          <div style={{ padding: 14, display: "grid", gap: 14 }}>
            <div
              style={{
                justifySelf: "end",
                maxWidth: "74%",
                background: "#0C1425",
                color: "#E2E8F0",
                borderRadius: "10px 10px 3px 10px",
                padding: "9px 12px",
                fontSize: 13,
                lineHeight: 1.5,
              }}
            >
              What should I do today?
            </div>

            <div style={{ display: "grid", gap: 11, maxWidth: "88%" }}>
              <div
                style={{
                  background: "#F8FAFF",
                  border: "1px solid #E4E9FB",
                  borderRadius: "10px 10px 10px 3px",
                  padding: "12px 13px",
                  display: "grid",
                  gap: 10,
                }}
              >
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: "#1E293B" }}>
                  Three things, in the order they matter. The TCS drive closes at 11:59 tonight and your pack is
                  ready, so that is first — it needs a read-through, not new work. Second, Priya Nair and Arjun Rao
                  are both four days past follow-up; drafts are written. Third, tomorrow&apos;s XYZ round 2 asked
                  you to go deeper on transaction handling, and that answer is still the weakest thing in your
                  Spring Boot track.
                </p>
                <div style={{ display: "grid", gap: 6 }}>
                  {ACTIONS.map((a) => (
                    <div
                      key={a.key}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "8px 10px",
                        border: `1px solid ${a.bd}`,
                        borderRadius: 8,
                        background: "#fff",
                      }}
                    >
                      <span
                        style={{
                          flex: "none",
                          fontFamily: "var(--font-mono)",
                          fontSize: 10.5,
                          fontWeight: 600,
                          color: a.fg,
                          background: a.bg,
                          border: `1px solid ${a.bd}`,
                          padding: "1px 5px",
                          borderRadius: 4,
                        }}
                      >
                        {a.tag}
                      </span>
                      <span style={{ flex: 1, minWidth: 0, fontSize: 12.5, color: "#334155", lineHeight: 1.4 }}>{a.label}</span>
                      <Link
                        href={ACTION_HREFS[a.key]}
                        className="hover:bg-[#F8FAFC]"
                        style={{
                          flex: "none",
                          fontSize: 11.5,
                          fontWeight: 600,
                          padding: "4px 10px",
                          borderRadius: 6,
                          border: "1px solid #E3E8EF",
                          background: "#fff",
                          color: "#334155",
                          cursor: "pointer",
                        }}
                      >
                        {a.cta}
                      </Link>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 9,
                    flexWrap: "wrap",
                    paddingTop: 9,
                    borderTop: "1px solid #E4E9FB",
                  }}
                >
                  <span style={{ fontSize: 11, color: "#64748B" }}>
                    Sources: placement drive listing, contact timeline, round 1 feedback note
                  </span>
                  <span style={{ flex: 1 }} />
                  <button
                    type="button"
                    style={{ fontSize: 11.5, fontWeight: 600, padding: 0, border: 0, background: "none", color: "#2F5BEA", cursor: "pointer" }}
                  >
                    Prepare all three for review
                  </button>
                </div>
              </div>
            </div>

            <div
              style={{
                justifySelf: "end",
                maxWidth: "74%",
                background: "#0C1425",
                color: "#E2E8F0",
                borderRadius: "10px 10px 3px 10px",
                padding: "9px 12px",
                fontSize: 13,
                lineHeight: 1.5,
              }}
            >
              Why am I not getting interviews?
            </div>

            <div
              style={{
                maxWidth: "88%",
                background: "#F8FAFF",
                border: "1px solid #E4E9FB",
                borderRadius: "10px 10px 10px 3px",
                padding: "12px 13px",
                display: "grid",
                gap: 9,
              }}
            >
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: "#1E293B" }}>
                You are, at 15% — but the volume is concentrated in the wrong channel. Thirteen applications went
                through Naukri and produced zero interviews. Four referral applications produced three. Your core
                skills are not the issue: no rejection has ever cited Java or Spring Boot. The four with stated
                reasons all named infrastructure — Kafka twice, AWS once, system design once.
              </p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                <Link
                  href={ACTION_HREFS.analytics}
                  className="hover:bg-[#E0E7FF]"
                  style={{
                    fontSize: 11.5,
                    fontWeight: 600,
                    padding: "5px 11px",
                    borderRadius: 6,
                    border: "1px solid #C7D2FE",
                    background: "#EEF2FF",
                    color: "#2F5BEA",
                    cursor: "pointer",
                  }}
                >
                  See the funnel
                </Link>
                <Link
                  href={ACTION_HREFS.networking}
                  className="hover:bg-[#E0E7FF]"
                  style={{
                    fontSize: 11.5,
                    fontWeight: 600,
                    padding: "5px 11px",
                    borderRadius: 6,
                    border: "1px solid #C7D2FE",
                    background: "#EEF2FF",
                    color: "#2F5BEA",
                    cursor: "pointer",
                  }}
                >
                  Find referral paths
                </Link>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                maxWidth: "88%",
                padding: "9px 12px",
                border: "1px dashed #C7D2FE",
                borderRadius: 10,
                background: "#FCFDFF",
              }}
            >
              <span
                style={{
                  flex: "none",
                  width: 13,
                  height: 13,
                  border: "2px solid #E3E8EF",
                  borderTopColor: "#2F5BEA",
                  borderRadius: 99,
                  animation: "jjaSpin .8s linear infinite",
                }}
              />
              <span style={{ fontSize: 12.5, color: "#475569" }}>Drafting the two follow-up messages…</span>
            </div>
          </div>

          <div style={{ padding: "11px 14px", borderTop: "1px solid #EEF1F6", background: "#FCFDFE", display: "grid", gap: 9 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                padding: "9px 11px",
                border: "1px solid #E3E8EF",
                borderRadius: 8,
                background: "#fff",
              }}
            >
              <span style={{ color: "#94A3B8", fontSize: 12 }}>✦</span>
              <span style={{ flex: 1, minWidth: 0, fontSize: 12.5, color: "#94A3B8" }}>
                Ask about your jobs, resume, interviews or contacts…
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  border: "1px solid #E3E8EF",
                  borderRadius: 4,
                  padding: "1px 4px",
                  color: "#64748B",
                }}
              >
                ↵
              </span>
            </div>
            <div style={{ fontSize: 11, color: "#64748B" }}>
              The assistant can read your data and prepare drafts. It cannot send messages, submit applications, or
              change your profile without you accepting.
            </div>
          </div>
        </section>
      </div>

      <div style={{ display: "grid", gap: 14, minWidth: 0 }}>
        <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
          <div style={{ padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
            <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>
              Try asking
            </h2>
          </div>
          {PROMPTS.map((p, i) => (
            <button
              key={i}
              type="button"
              className="hover:bg-[#F8FAFF] hover:text-[#2F5BEA]"
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "9px 14px",
                border: 0,
                borderBottom: "1px solid #F4F7FA",
                background: "#fff",
                fontSize: 12.5,
                color: "#334155",
                cursor: "pointer",
                lineHeight: 1.4,
              }}
            >
              {p}
            </button>
          ))}
        </section>

        <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
          <div style={{ padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
            <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>
              What it can reach
            </h2>
          </div>
          {SCOPES.map((s, i) => (
            <div
              key={i}
              style={{ display: "flex", alignItems: "center", gap: 9, padding: "8px 14px", borderBottom: "1px solid #F4F7FA" }}
            >
              <span style={{ flex: "none", width: 13, textAlign: "center", color: s.color, fontSize: 12 }}>{s.icon}</span>
              <span style={{ flex: 1, minWidth: 0, fontSize: 12, color: "#334155" }}>{s.label}</span>
              <span style={{ flex: "none", fontSize: 10.5, color: "#94A3B8", fontFamily: "var(--font-mono)" }}>{s.mode}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
