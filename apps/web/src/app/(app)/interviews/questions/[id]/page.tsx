import Link from "next/link";
import { StatusBadge } from "@/components/shared/StatusBadge";
import {
  INTENT,
  LENGTHS,
  lengthStyle,
  ANSWER,
  MEMORY,
  FOLLOWUPS,
  followUpColors,
  ATTEMPTS,
} from "@/lib/mock/question";

export default function QuestionPage() {
  return (
    <div style={{ padding: "20px 22px 44px", display: "grid", gap: 14, alignContent: "start", maxWidth: 1100 }}>
      <div>
        <Link
          href="/interviews"
          className="hover:text-[#2F5BEA]"
          style={{ display: "inline-block", fontSize: 11.5, fontWeight: 560, border: 0, background: "none", color: "#64748B", cursor: "pointer", padding: "0 0 7px" }}
        >
          ← Interview center · Spring Boot
        </Link>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <div style={{ minWidth: 0 }}>
            <h1 style={{ margin: 0, fontSize: 21, fontWeight: 640, letterSpacing: "-.02em", lineHeight: 1.25 }}>
              How does @Transactional propagation work?
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6, flexWrap: "wrap" }}>
              <StatusBadge text="Flagged weak in round 1" tone="danger" />
              <span style={{ fontSize: 12, color: "#64748B" }}>88% likely tomorrow · Spring Boot track · asked in 4 of your 6 interviews</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 7, flex: "none" }}>
            <button
              type="button"
              className="hover:bg-[#F8FAFC]"
              style={{ fontSize: 12, fontWeight: 560, padding: "7px 11px", borderRadius: 7, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
            >
              ↑ Previous
            </button>
            <button
              type="button"
              className="hover:bg-[#F8FAFC]"
              style={{ fontSize: 12, fontWeight: 560, padding: "7px 11px", borderRadius: 7, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
            >
              Next ↓
            </button>
          </div>
        </div>
      </div>

      <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
          <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>
            What the interviewer is checking
          </h2>
        </div>
        <div style={{ padding: "12px 14px", display: "grid", gap: 9 }}>
          {INTENT.map((i, idx) => (
            <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 9, fontSize: 12.5, color: "#334155", lineHeight: 1.5 }}>
              <span style={{ flex: "none", width: 13, textAlign: "center", color: "#2F5BEA" }}>→</span>
              <span>{i}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9, padding: "10px 14px", borderBottom: "1px solid #EEF1F6", flexWrap: "wrap" }}>
          <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Your answer</h2>
          <span style={{ flex: 1 }} />
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
        <div style={{ padding: "13px 14px", display: "grid", gap: 11 }}>
          <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: "#1E293B" }}>{ANSWER}</p>
          <div style={{ display: "flex", alignItems: "center", gap: 9, flexWrap: "wrap", paddingTop: 10, borderTop: "1px solid #F1F5F9" }}>
            <span style={{ fontSize: 11.5, color: "#0B6E45" }}>✓ Grounded in your Order Management API — the example is real</span>
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
              className="hover:bg-[#F8FAFC]"
              style={{ fontSize: 11.5, fontWeight: 560, padding: "5px 11px", borderRadius: 6, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
            >
              Regenerate
            </button>
            <button
              type="button"
              className="hover:bg-[#2449C4]"
              style={{ fontSize: 11.5, fontWeight: 620, padding: "5px 13px", borderRadius: 6, border: "1px solid #2F5BEA", background: "#2F5BEA", color: "#fff", cursor: "pointer" }}
            >
              Practice out loud
            </button>
          </div>
        </div>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 14, alignItems: "start" }}>
        <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
          <div style={{ padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
            <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Memory points</h2>
          </div>
          <div style={{ padding: "12px 14px", display: "grid", gap: 7 }}>
            {MEMORY.map((m, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 9, fontSize: 12.5, color: "#334155", lineHeight: 1.45 }}>
                <span style={{ flex: "none", width: 5, height: 5, borderRadius: 99, background: "#2F5BEA", marginTop: 6 }} />
                <span>{m}</span>
              </div>
            ))}
          </div>
          <div style={{ padding: "9px 14px", background: "#FCFDFE", fontSize: 11.5, color: "#64748B" }}>
            Learn the shape of the answer, not the sentences. Reciting a memorised script reads badly in a panel.
          </div>
        </section>

        <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
          <div style={{ padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
            <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Likely follow-ups</h2>
          </div>
          {FOLLOWUPS.map((f, i) => {
            const c = followUpColors(f.state);
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderBottom: "1px solid #F4F7FA" }}>
                <span style={{ flex: 1, minWidth: 0, fontSize: 12.5, color: "#334155", lineHeight: 1.4 }}>{f.q}</span>
                <span style={{ flex: "none", fontSize: 10.5, fontWeight: 640, padding: "1px 6px", borderRadius: 4, border: `1px solid ${c.bd}`, background: c.bg, color: c.fg }}>
                  {f.state}
                </span>
              </div>
            );
          })}
        </section>
      </div>

      <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
          <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Practice history</h2>
          <span style={{ fontSize: 11.5, color: "#94A3B8" }}>3 attempts · last one 2 days ago</span>
        </div>
        {ATTEMPTS.map((a, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "70px 66px minmax(0,1fr)", gap: 12, padding: "10px 14px", borderBottom: "1px solid #F4F7FA", alignItems: "center" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "#94A3B8" }}>{a.date}</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "#475569" }}>{a.duration}</span>
            <span style={{ fontSize: 12, color: "#334155", minWidth: 0, lineHeight: 1.4 }}>{a.note}</span>
          </div>
        ))}
      </section>
    </div>
  );
}
