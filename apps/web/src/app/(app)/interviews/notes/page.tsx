import Link from "next/link";
import {
  INDEX,
  indexStyle,
  LENGTHS,
  lengthStyle,
  ANSWER,
  MEMORY,
  CARDS,
  chipStyle,
  cardStateColors,
} from "@/lib/mock/quick-notes";

export default function QuickNotesPage() {
  return (
    <div style={{ padding: "20px 22px 44px", display: "grid", gap: 14, alignContent: "start" }}>
      <div>
        <Link
          href="/interviews"
          className="hover:text-[#2F5BEA]"
          style={{ display: "inline-block", fontSize: 11.5, fontWeight: 560, border: 0, background: "none", color: "#64748B", cursor: "pointer", padding: "0 0 6px" }}
        >
          ← Interview center
        </Link>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 20, fontWeight: 640, letterSpacing: "-.02em" }}>Quick Notes</h1>
            <div style={{ fontSize: 12.5, color: "#475569", marginTop: 3 }}>
              Your interview brain. Three lengths for every core question, plus the points you must not lose under pressure.
            </div>
          </div>
          <div style={{ display: "flex", gap: 7 }}>
            <button
              type="button"
              className="hover:bg-[#F8FAFC]"
              style={{ fontSize: 12, fontWeight: 560, padding: "7px 11px", borderRadius: 7, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
            >
              Print one-pager
            </button>
            <button
              type="button"
              className="hover:bg-[#2449C4]"
              style={{ fontSize: 12, fontWeight: 620, padding: "7px 13px", borderRadius: 7, border: "1px solid #2F5BEA", background: "#2F5BEA", color: "#fff", cursor: "pointer" }}
            >
              Practice run
            </button>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 9, padding: "10px 13px", border: "1px solid #C7D2FE", borderRadius: 9, background: "#F8FAFF" }}>
        <span style={{ flex: "none", color: "#2F5BEA", fontSize: 13 }}>◈</span>
        <span style={{ flex: 1, minWidth: 0, fontSize: 12.5, color: "#334155", lineHeight: 1.45 }}>
          Do not memorise these word for word. Panels can hear a recited script. Hold the memory points and rebuild the sentences each time.
        </span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "206px minmax(0,1fr)", gap: 14, alignItems: "start" }}>
        <aside style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden", position: "sticky", top: 0 }}>
          <div style={{ padding: "10px 12px", borderBottom: "1px solid #EEF1F6" }}>
            <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Core questions</h2>
          </div>
          {INDEX.map((item, i) => {
            const s = indexStyle(item.state);
            return (
              <div
                key={i}
                className="hover:bg-[#F8FAFC]"
                style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", borderBottom: "1px solid #F4F7FA", cursor: "pointer", background: s.bg }}
              >
                <span style={{ width: 5, height: 5, borderRadius: 99, flex: "none", background: s.dot }} />
                <span style={{ flex: 1, minWidth: 0, fontSize: 12, fontWeight: s.weight, color: s.fg, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {item.label}
                </span>
              </div>
            );
          })}
        </aside>

        <div style={{ display: "grid", gap: 14, minWidth: 0 }}>
          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 11, padding: "12px 14px", borderBottom: "1px solid #EEF1F6", flexWrap: "wrap" }}>
              <h2 style={{ margin: 0, fontSize: 16, fontWeight: 640, color: "#0F172A", letterSpacing: "-.015em" }}>Tell me about yourself</h2>
              <div style={{ display: "flex", gap: 5 }}>
                {LENGTHS.map((l) => {
                  const s = lengthStyle(l.on);
                  return (
                    <button
                      key={l.label}
                      type="button"
                      style={{ fontSize: 11.5, fontWeight: s.weight, padding: "3px 10px", borderRadius: 6, border: `1px solid ${s.bd}`, background: s.bg, color: s.fg, cursor: "pointer" }}
                    >
                      {l.label}
                    </button>
                  );
                })}
              </div>
            </div>
            <div style={{ padding: "13px 14px", display: "grid", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#2F5BEA", background: "#EEF2FF", border: "1px solid #C7D2FE", padding: "1px 6px", borderRadius: 4 }}>
                  60-second answer
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#94A3B8" }}>142 words · ~58 seconds at your pace</span>
              </div>
              <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.68, color: "#1E293B" }}>{ANSWER}</p>

              <div style={{ border: "1px solid #EEF1F6", borderRadius: 8, background: "#FCFDFE", padding: 12 }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".09em", textTransform: "uppercase", color: "#94A3B8", marginBottom: 8 }}>Memory points</div>
                <div style={{ display: "grid", gap: 6 }}>
                  {MEMORY.map((m, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 9, fontSize: 12.5, color: "#334155", lineHeight: 1.45 }}>
                      <span style={{ flex: "none", width: 5, height: 5, borderRadius: 99, background: "#2F5BEA", marginTop: 6 }} />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 7, flexWrap: "wrap", paddingTop: 10, borderTop: "1px solid #F1F5F9" }}>
                <span style={{ fontSize: 11.5, color: "#0B6E45" }}>✓ Built from verified profile evidence only</span>
                <span style={{ flex: 1 }} />
                <button
                  type="button"
                  className="hover:bg-[#F8FAFC]"
                  style={{ fontSize: 11.5, fontWeight: 560, padding: "5px 11px", borderRadius: 6, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="hover:bg-[#2449C4]"
                  style={{ fontSize: 11.5, fontWeight: 620, padding: "5px 13px", borderRadius: 6, border: "1px solid #2F5BEA", background: "#2F5BEA", color: "#fff", cursor: "pointer" }}
                >
                  Practice
                </button>
              </div>
            </div>
          </section>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: 12 }}>
            {CARDS.map((c, i) => {
              const s = cardStateColors(c.state);
              return (
                <section key={i} style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 9, padding: "11px 13px", borderBottom: "1px solid #EEF1F6" }}>
                    <h3 style={{ margin: 0, fontSize: 13.5, fontWeight: 620, color: "#0F172A", letterSpacing: "-.01em", minWidth: 0 }}>{c.q}</h3>
                    <span style={{ flex: "none", fontSize: 10.5, fontWeight: 640, padding: "1px 6px", borderRadius: 4, border: `1px solid ${s.bd}`, background: s.bg, color: s.fg }}>
                      {c.state}
                    </span>
                  </div>
                  <div style={{ padding: "11px 13px", display: "grid", gap: 9 }}>
                    <div style={{ display: "flex", gap: 5 }}>
                      {c.lengths.map((l, j) => {
                        const chip = chipStyle(l.done);
                        return (
                          <span key={j} style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, padding: "1px 6px", borderRadius: 4, border: `1px solid ${chip.bd}`, background: chip.bg, color: chip.fg }}>
                            {l.label}
                          </span>
                        );
                      })}
                    </div>
                    <div style={{ display: "grid", gap: 5 }}>
                      {c.points.map((p, j) => (
                        <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12, color: "#475569", lineHeight: 1.45 }}>
                          <span style={{ flex: "none", width: 4, height: 4, borderRadius: 99, background: "#CBD5E1", marginTop: 6 }} />
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
