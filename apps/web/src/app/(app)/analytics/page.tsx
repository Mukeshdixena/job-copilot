import Link from "next/link";
import { MetricBar } from "@/components/shared/MetricBar";
import { INSIGHTS, KPIS, WEEKS, SOURCES, TABLES } from "@/lib/mock/analytics";

export default function AnalyticsPage() {
  return (
    <div style={{ padding: "20px 22px 44px", display: "grid", gap: 14, alignContent: "start" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 640, letterSpacing: "-.02em" }}>Analytics</h1>
          <div style={{ fontSize: 12.5, color: "#475569", marginTop: 3 }}>
            Seven weeks of search data. Every number below has a recommendation attached to it.
          </div>
        </div>
        <div style={{ display: "flex", border: "1px solid #E3E8EF", borderRadius: 7, overflow: "hidden", background: "#fff" }}>
          <button
            type="button"
            className="hover:bg-[#F8FAFC]"
            style={{ fontSize: 12, fontWeight: 560, padding: "6px 11px", border: 0, background: "#fff", color: "#475569", cursor: "pointer" }}
          >
            4 weeks
          </button>
          <button
            type="button"
            style={{ fontSize: 12, fontWeight: 620, padding: "6px 11px", border: 0, background: "#0C1425", color: "#fff", cursor: "pointer" }}
          >
            All time
          </button>
        </div>
      </div>

      <section style={{ background: "#fff", border: "1px solid #C7D2FE", borderRadius: 10, overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", borderBottom: "1px solid #E4E9FB", background: "#F8FAFF" }}>
          <span style={{ color: "#2F5BEA", fontSize: 13 }}>◈</span>
          <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#2F5BEA", fontWeight: 700 }}>
            What the data says to do
          </h2>
        </div>
        {INSIGHTS.map((i, idx) => (
          <div
            key={idx}
            style={{ display: "flex", alignItems: "center", gap: 13, padding: "12px 14px", borderBottom: "1px solid #F4F7FA", flexWrap: "wrap" }}
          >
            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: "#0F172A", letterSpacing: "-.01em" }}>{i.finding}</div>
              <div style={{ fontSize: 12, color: "#475569", marginTop: 2, lineHeight: 1.45 }}>{i.detail}</div>
            </div>
            <Link
              href={i.href}
              className="hover:bg-[#2449C4]"
              style={{
                flex: "none",
                fontSize: 12,
                fontWeight: 620,
                padding: "7px 13px",
                borderRadius: 7,
                border: "1px solid #2F5BEA",
                background: "#2F5BEA",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              {i.cta}
            </Link>
          </div>
        ))}
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 9 }}>
        {KPIS.map((k) => (
          <div key={k.label} style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 9, padding: "11px 12px" }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: "#94A3B8" }}>{k.label}</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 7, marginTop: 5 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 23, fontWeight: 600, letterSpacing: "-.035em", color: "#0F172A", lineHeight: 1 }}>
                {k.value}
              </span>
              <span style={{ fontSize: 11, fontWeight: 620, color: k.deltaColor }}>{k.delta}</span>
            </div>
            <div style={{ fontSize: 11, color: "#64748B", marginTop: 4, lineHeight: 1.35 }}>{k.note}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.4fr) minmax(0,1fr)", gap: 14, alignItems: "start" }}>
        <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
            <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>
              Applications per week
            </h2>
            <span style={{ fontSize: 11.5, color: "#94A3B8" }}>Interviews shown in blue</span>
          </div>
          <div style={{ padding: 14, display: "flex", alignItems: "flex-end", gap: 9, height: 172 }}>
            {WEEKS.map((w) => (
              <div key={w.label} style={{ flex: 1, display: "grid", gap: 5, justifyItems: "center", height: "100%", alignContent: "end" }}>
                <div style={{ width: "100%", display: "grid", gap: 2, alignContent: "end", height: "100%" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#94A3B8", textAlign: "center" }}>{w.total}</span>
                  <div style={{ width: "100%", borderRadius: "3px 3px 0 0", background: "#2F5BEA", height: w.interviewH }} />
                  <div style={{ width: "100%", borderRadius: "0 0 3px 3px", background: "#DDE3EC", height: w.appliedH }} />
                </div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#94A3B8" }}>{w.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
          <div style={{ padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
            <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>
              Conversion by source
            </h2>
          </div>
          <div style={{ padding: "13px 14px", display: "grid", gap: 11 }}>
            {SOURCES.map((s) => (
              <MetricBar key={s.label} label={s.label} value={s.value} valueText={s.text} tone={s.tone} />
            ))}
          </div>
          <div style={{ padding: "9px 14px", background: "#FCFDFE", fontSize: 11.5, color: "#64748B" }}>
            Referrals are 4 applications out of 41 and 3 of your 6 interviews.
          </div>
        </section>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 14 }}>
        {TABLES.map((t) => (
          <section key={t.title} style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
              <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>
                {t.title}
              </h2>
              <span style={{ fontSize: 11, color: "#94A3B8" }}>{t.note}</span>
            </div>
            {t.rows.map((r, i) => (
              <div
                key={i}
                style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: 11, padding: "9px 14px", borderBottom: "1px solid #F4F7FA", alignItems: "center" }}
              >
                <span style={{ fontSize: 12.5, color: "#334155", minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {r.k}
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600, color: r.color, whiteSpace: "nowrap" }}>{r.v}</span>
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
