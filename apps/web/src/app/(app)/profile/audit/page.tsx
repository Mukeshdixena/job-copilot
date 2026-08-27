import Link from "next/link";
import { BUCKETS, CRITICAL, IMPROVE, STRONG } from "@/lib/mock/audit";

export default function ProfileAuditPage() {
  return (
    <div style={{ padding: "20px 22px 44px", display: "grid", gap: 14, alignContent: "start" }}>
      <div>
        <Link
          href="/profile"
          className="hover:text-[#2F5BEA]"
          style={{ display: "inline-block", fontSize: 11.5, fontWeight: 560, border: 0, background: "none", color: "#64748B", cursor: "pointer", padding: "0 0 6px" }}
        >
          ← Profile
        </Link>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 20, fontWeight: 640, letterSpacing: "-.02em" }}>AI profile audit</h1>
            <div style={{ fontSize: 12.5, color: "#475569", marginTop: 3 }}>
              Run Aug 26, 08:12 · benchmarked against 128 Java / Spring Boot postings matched to you
            </div>
          </div>
          <button
            type="button"
            className="hover:bg-[#F8FAFC]"
            style={{ fontSize: 12, fontWeight: 560, padding: "7px 11px", borderRadius: 7, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
          >
            Re-run audit
          </button>
        </div>
      </div>

      <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, padding: 15, display: "grid", gridTemplateColumns: "auto 1px minmax(0,1fr)", gap: 20, alignItems: "center" }}>
        <div style={{ textAlign: "center", minWidth: 118 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 46, fontWeight: 600, letterSpacing: "-.045em", lineHeight: 0.9, color: "#0F172A" }}>82</div>
          <div style={{ fontSize: 11.5, color: "#94A3B8", marginTop: 4 }}>out of 100</div>
          <div style={{ display: "inline-block", fontSize: 11, fontWeight: 620, color: "#0B6E45", background: "#ECFDF3", border: "1px solid #A7E3C4", padding: "2px 7px", borderRadius: 4, marginTop: 7 }}>
            +6 since Aug 12
          </div>
        </div>
        <div style={{ background: "#EEF1F6", alignSelf: "stretch" }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(146px,1fr))", gap: 11 }}>
          {BUCKETS.map((b) => (
            <div key={b.label} style={{ border: `1px solid ${b.bd}`, background: b.bg, borderRadius: 8, padding: "9px 11px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                <span style={{ width: 8, height: 8, borderRadius: 99, background: b.dot, flex: "none" }} />
                <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: b.fg }}>{b.label}</span>
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 22, fontWeight: 600, letterSpacing: "-.03em", color: b.fg, marginTop: 5, lineHeight: 1 }}>{b.n}</div>
              <div style={{ fontSize: 11, color: "#64748B", marginTop: 3, lineHeight: 1.35 }}>{b.note}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 14px", borderBottom: "1px solid #EEF1F6", background: "#FFFBFB" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 8, height: 8, borderRadius: 99, background: "#DC2626" }} />
            <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#A3170F", fontWeight: 700 }}>Critical findings</h2>
          </div>
          <span style={{ fontSize: 11.5, color: "#7F1D1D" }}>These are the three things costing you interviews</span>
        </div>
        {CRITICAL.map((f, i) => (
          <div key={i} style={{ padding: "13px 14px", borderBottom: "1px solid #F4F7FA" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontSize: 13.5, fontWeight: 620, color: "#0F172A", letterSpacing: "-.01em" }}>{f.title}</div>
                <div style={{ display: "grid", gap: 7, marginTop: 9 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "86px minmax(0,1fr)", gap: 10, alignItems: "start" }}>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: "#94A3B8", paddingTop: 2 }}>Why it matters</span>
                    <span style={{ fontSize: 12.5, color: "#334155", lineHeight: 1.5 }}>{f.why}</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "86px minmax(0,1fr)", gap: 10, alignItems: "start" }}>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: "#94A3B8", paddingTop: 2 }}>Evidence</span>
                    <span style={{ fontSize: 11.5, color: "#475569", lineHeight: 1.5, fontFamily: "var(--font-mono)" }}>{f.evidence}</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "86px minmax(0,1fr)", gap: 10, alignItems: "start" }}>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: "#94A3B8", paddingTop: 2 }}>Do this</span>
                    <span style={{ fontSize: 12.5, color: "#334155", lineHeight: 1.5, fontWeight: 520 }}>{f.action}</span>
                  </div>
                </div>
              </div>
              <div style={{ flex: "none", display: "grid", gap: 6, minWidth: 132 }}>
                <Link
                  href={f.href}
                  className="hover:bg-[#2449C4]"
                  style={{ textAlign: "center", fontSize: 12, fontWeight: 620, padding: "7px 12px", borderRadius: 7, border: "1px solid #2F5BEA", background: "#2F5BEA", color: "#fff", cursor: "pointer" }}
                >
                  Fix It
                </Link>
                <button
                  type="button"
                  className="hover:bg-[#F8FAFC]"
                  style={{ fontSize: 11.5, fontWeight: 560, padding: "6px 12px", borderRadius: 7, border: "1px solid #E3E8EF", background: "#fff", color: "#64748B", cursor: "pointer" }}
                >
                  Snooze 7 days
                </button>
                <span style={{ fontSize: 10.5, color: "#94A3B8", textAlign: "center" }}>Impact: {f.impact}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 14, alignItems: "start" }}>
        <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "11px 14px", borderBottom: "1px solid #EEF1F6", background: "#FFFCF7" }}>
            <span style={{ width: 8, height: 8, borderRadius: 99, background: "#D97706" }} />
            <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#9A4A08", fontWeight: 700 }}>Improve</h2>
          </div>
          {IMPROVE.map((i) => (
            <div key={i.skill} style={{ display: "flex", alignItems: "center", gap: 11, padding: "10px 14px", borderBottom: "1px solid #F4F7FA" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, fontWeight: 600, color: "#9A4A08", minWidth: 82 }}>{i.skill}</span>
              <span style={{ flex: 1, minWidth: 0, fontSize: 12, color: "#475569", lineHeight: 1.4 }}>{i.note}</span>
              <Link
                href="/skill-gaps"
                className="hover:bg-[#F8FAFC]"
                style={{ flex: "none", fontSize: 11.5, fontWeight: 600, padding: "4px 9px", borderRadius: 6, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
              >
                Plan
              </Link>
            </div>
          ))}
        </section>

        <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "11px 14px", borderBottom: "1px solid #EEF1F6", background: "#FAFEFB" }}>
            <span style={{ width: 8, height: 8, borderRadius: 99, background: "#12915C" }} />
            <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#0B6E45", fontWeight: 700 }}>Strong — lead with these</h2>
          </div>
          {STRONG.map((s) => (
            <div key={s.skill} style={{ display: "flex", alignItems: "center", gap: 11, padding: "10px 14px", borderBottom: "1px solid #F4F7FA" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, fontWeight: 600, color: "#0B6E45", minWidth: 82 }}>{s.skill}</span>
              <span style={{ flex: 1, minWidth: 0, fontSize: 12, color: "#475569", lineHeight: 1.4 }}>{s.note}</span>
              <span style={{ flex: "none", fontFamily: "var(--font-mono)", fontSize: 11, color: "#94A3B8" }}>{s.tag}</span>
            </div>
          ))}
          <div style={{ padding: "9px 14px", background: "#FCFDFE", fontSize: 11.5, color: "#64748B" }}>
            Your generated answers and bullets already lean on these four.
          </div>
        </section>
      </div>
    </div>
  );
}
