import { MetricBar } from "@/components/shared/MetricBar";
import {
  VERSIONS,
  versionColors,
  COVERAGE,
  SUGGESTIONS,
  suggestionKindColors,
  whyStyle,
  PREVIEW,
} from "@/lib/mock/resume";

export default function ResumePage() {
  return (
    <div style={{ padding: "20px 22px 44px", display: "grid", gap: 14, alignContent: "start" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 640, letterSpacing: "-.02em" }}>Resume workspace</h1>
          <div style={{ fontSize: 12.5, color: "#475569", marginTop: 3 }}>
            Master resume plus tailored versions. Every AI change is shown as a diff you accept or reject.
          </div>
        </div>
        <div style={{ display: "flex", gap: 7 }}>
          <button
            type="button"
            className="hover:bg-[#F8FAFC]"
            style={{ fontSize: 12, fontWeight: 560, padding: "7px 11px", borderRadius: 7, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
          >
            Upload version
          </button>
          <button
            type="button"
            className="hover:bg-[#2449C4]"
            style={{ fontSize: 12, fontWeight: 620, padding: "7px 13px", borderRadius: 7, border: "1px solid #2F5BEA", background: "#2F5BEA", color: "#fff", cursor: "pointer" }}
          >
            Tailor to a job
          </button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "236px minmax(0,1fr)", gap: 14, alignItems: "start" }}>
        <div style={{ display: "grid", gap: 14, position: "sticky", top: 0 }}>
          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ padding: "11px 13px", borderBottom: "1px solid #EEF1F6" }}>
              <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>
                Versions
              </h2>
            </div>
            {VERSIONS.map((v) => {
              const c = versionColors(v.on);
              return (
                <div
                  key={v.name}
                  className="hover:bg-[#F8FAFC]"
                  style={{ padding: "10px 13px", borderBottom: "1px solid #F4F7FA", cursor: "pointer", background: c.bg, borderLeft: `3px solid ${c.rail}` }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 12,
                        fontWeight: 600,
                        color: c.fg,
                        minWidth: 0,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {v.name}
                    </span>
                    {v.master && (
                      <span
                        style={{
                          fontSize: 9.5,
                          fontWeight: 700,
                          letterSpacing: ".06em",
                          textTransform: "uppercase",
                          color: "#5B21B6",
                          background: "#F5F3FF",
                          border: "1px solid #DDD6FE",
                          padding: "1px 4px",
                          borderRadius: 3,
                          flex: "none",
                        }}
                      >
                        Master
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: 11, color: "#64748B", marginTop: 2 }}>{v.meta}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 5 }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "#94A3B8" }}>{v.stat}</span>
                  </div>
                </div>
              );
            })}
          </section>

          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ padding: "11px 13px", borderBottom: "1px solid #EEF1F6" }}>
              <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>
                Job-to-resume match
              </h2>
            </div>
            <div style={{ padding: "12px 13px", display: "grid", gap: 10 }}>
              <div style={{ fontSize: 12, color: "#475569" }}>
                Against <strong style={{ fontWeight: 580, color: "#0F172A" }}>Java Spring Boot Developer</strong> at ABC Technologies
              </div>
              <div style={{ display: "grid", gap: 9 }}>
                {COVERAGE.map((c) => (
                  <MetricBar key={c.label} label={c.label} value={c.value} valueText={c.text} />
                ))}
              </div>
            </div>
          </section>
        </div>

        <div style={{ display: "grid", gap: 14, minWidth: 0 }}>
          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 11, padding: "11px 14px", borderBottom: "1px solid #EEF1F6", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>
                  AI suggestions
                </h2>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    fontWeight: 600,
                    color: "#5B21B6",
                    background: "#F5F3FF",
                    border: "1px solid #DDD6FE",
                    padding: "1px 5px",
                    borderRadius: 4,
                  }}
                >
                  {SUGGESTIONS.length} pending
                </span>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                <button
                  type="button"
                  className="hover:bg-[#F8FAFC]"
                  style={{ fontSize: 11.5, fontWeight: 560, padding: "4px 10px", borderRadius: 6, border: "1px solid #E3E8EF", background: "#fff", color: "#64748B", cursor: "pointer" }}
                >
                  Reject all
                </button>
                <button
                  type="button"
                  className="hover:bg-[#E6F7EE]"
                  style={{ fontSize: 11.5, fontWeight: 600, padding: "4px 10px", borderRadius: 6, border: "1px solid #A7E3C4", background: "#F3FBF6", color: "#0B6E45", cursor: "pointer" }}
                >
                  Accept all
                </button>
              </div>
            </div>

            {SUGGESTIONS.map((s, i) => {
              const k = suggestionKindColors(s.kind);
              return (
                <div key={i} style={{ padding: "13px 14px", borderBottom: "1px solid #F4F7FA" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
                    <span style={{ fontSize: 12, fontWeight: 620, color: "#0F172A" }}>{s.section}</span>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: ".06em",
                        textTransform: "uppercase",
                        color: k.fg,
                        background: k.bg,
                        border: `1px solid ${k.bd}`,
                        padding: "1px 5px",
                        borderRadius: 4,
                      }}
                    >
                      {s.kind}
                    </span>
                    <span style={{ flex: 1 }} />
                    <span style={{ fontSize: 11, color: "#94A3B8", fontFamily: "var(--font-mono)" }}>{s.trigger}</span>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9 }}>
                    <div style={{ border: "1px solid #F1D9D9", borderRadius: 7, overflow: "hidden", background: "#FFFCFC" }}>
                      <div
                        style={{
                          padding: "5px 9px",
                          background: "#FEF6F6",
                          borderBottom: "1px solid #F7E4E4",
                          fontSize: 9.5,
                          fontWeight: 700,
                          letterSpacing: ".08em",
                          textTransform: "uppercase",
                          color: "#A3170F",
                        }}
                      >
                        Original
                      </div>
                      <div style={{ padding: 9, fontSize: 12.5, lineHeight: 1.55, color: "#5B4444" }}>{s.original}</div>
                    </div>
                    <div style={{ border: "1px solid #C9EBD9", borderRadius: 7, overflow: "hidden", background: "#FCFEFD" }}>
                      <div
                        style={{
                          padding: "5px 9px",
                          background: "#F3FBF6",
                          borderBottom: "1px solid #DBF0E5",
                          fontSize: 9.5,
                          fontWeight: 700,
                          letterSpacing: ".08em",
                          textTransform: "uppercase",
                          color: "#0B6E45",
                        }}
                      >
                        Suggested
                      </div>
                      <div style={{ padding: 9, fontSize: 12.5, lineHeight: 1.55, color: "#26443A" }}>{s.suggested}</div>
                    </div>
                  </div>

                  <div style={{ marginTop: 10, border: "1px solid #EEF1F6", borderRadius: 7, background: "#FCFDFE", padding: "9px 10px" }}>
                    <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#94A3B8", marginBottom: 6 }}>
                      Why
                    </div>
                    <div style={{ display: "grid", gap: 4 }}>
                      {s.why.map((w, wi) => {
                        const ws = whyStyle(w.tone);
                        return (
                          <div key={wi} style={{ display: "flex", alignItems: "flex-start", gap: 7, fontSize: 12, color: "#475569", lineHeight: 1.45 }}>
                            <span style={{ flex: "none", color: ws.color, width: 11, textAlign: "center" }}>{ws.icon}</span>
                            <span>{w.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
                    <button
                      type="button"
                      className="hover:bg-[#E6F7EE]"
                      style={{ fontSize: 11.5, fontWeight: 600, padding: "5px 11px", borderRadius: 6, border: "1px solid #A7E3C4", background: "#F3FBF6", color: "#0B6E45", cursor: "pointer" }}
                    >
                      Accept
                    </button>
                    <button
                      type="button"
                      className="hover:bg-[#F8FAFC]"
                      style={{ fontSize: 11.5, fontWeight: 560, padding: "5px 11px", borderRadius: 6, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="hover:text-[#A3170F] hover:border-[#FCA5A5]"
                      style={{ fontSize: 11.5, fontWeight: 560, padding: "5px 11px", borderRadius: 6, border: "1px solid #E3E8EF", background: "#fff", color: "#64748B", cursor: "pointer" }}
                    >
                      Reject
                    </button>
                    <span style={{ flex: 1 }} />
                    <button
                      type="button"
                      className="hover:bg-[#2449C4]"
                      style={{ fontSize: 11.5, fontWeight: 600, padding: "5px 11px", borderRadius: 6, border: "1px solid #2F5BEA", background: "#2F5BEA", color: "#fff", cursor: "pointer" }}
                    >
                      Apply to Resume
                    </button>
                  </div>
                </div>
              );
            })}

            <div style={{ display: "flex", alignItems: "center", gap: 9, padding: "10px 14px", background: "#FCFDFE" }}>
              <span style={{ fontSize: 11.5, color: "#64748B", flex: 1 }}>Accepted changes stay revertible for 30 days.</span>
              <button type="button" style={{ fontSize: 11.5, fontWeight: 600, padding: 0, border: 0, background: "none", color: "#2F5BEA", cursor: "pointer" }}>
                Revert last change
              </button>
            </div>
          </section>

          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
              <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>
                backend-v3.pdf · preview
              </h2>
              <div style={{ display: "flex", gap: 6 }}>
                <button
                  type="button"
                  className="hover:bg-[#F8FAFC]"
                  style={{ fontSize: 11.5, fontWeight: 560, padding: "4px 10px", borderRadius: 6, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
                >
                  Download
                </button>
                <button
                  type="button"
                  className="hover:bg-[#F8FAFC]"
                  style={{ fontSize: 11.5, fontWeight: 560, padding: "4px 10px", borderRadius: 6, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
                >
                  Compare versions
                </button>
              </div>
            </div>
            <div style={{ padding: 16, background: "#F1F5F9", display: "grid", placeItems: "center" }}>
              <div
                style={{
                  width: "100%",
                  maxWidth: 520,
                  background: "#fff",
                  border: "1px solid #E3E8EF",
                  borderRadius: 4,
                  padding: "24px 26px",
                  boxShadow: "0 1px 3px rgba(15,23,42,.06)",
                }}
              >
                <div style={{ fontSize: 17, fontWeight: 660, letterSpacing: "-.02em", color: "#0F172A" }}>Mukesh K.</div>
                <div style={{ fontSize: 11, color: "#475569", marginTop: 2, fontFamily: "var(--font-mono)" }}>
                  Java Backend Developer · Bangalore · github.com/mukesh-k
                </div>
                <div style={{ height: 1, background: "#E3E8EF", margin: "12px 0" }} />
                {PREVIEW.map((p) => (
                  <div key={p.head} style={{ marginBottom: 13 }}>
                    <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#2F5BEA", marginBottom: 6 }}>
                      {p.head}
                    </div>
                    {p.lines.map((l, li) => (
                      <div key={li} style={{ fontSize: 11.5, lineHeight: 1.55, color: "#334155", marginBottom: 3 }}>
                        {l}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
