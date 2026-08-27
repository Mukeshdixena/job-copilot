import Link from "next/link";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { STAGES, TABS, COLS, ROWS, actionColors } from "@/lib/mock/applications";

const ROW_COLS = "minmax(180px,2.1fr) 108px 92px 108px minmax(150px,1.5fr) 74px";

export default function ApplicationsPage() {
  return (
    <div style={{ padding: "20px 22px 44px", display: "grid", gap: 14, alignContent: "start" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 640, letterSpacing: "-.02em" }}>Applications</h1>
          <div style={{ fontSize: 12.5, color: "#475569", marginTop: 3 }}>
            41 tracked · 3 need action today · median 6 days from apply to first response
          </div>
        </div>
        <div style={{ display: "flex", gap: 7 }}>
          <button
            type="button"
            className="hover:bg-[#F8FAFC]"
            style={{ fontSize: 12, fontWeight: 560, padding: "6px 11px", borderRadius: 7, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
          >
            Export CSV
          </button>
          <Link
            href="/applications/prepare/1"
            className="hover:bg-[#2449C4]"
            style={{ fontSize: 12, fontWeight: 620, padding: "6px 12px", borderRadius: 7, border: "1px solid #2F5BEA", background: "#2F5BEA", color: "#fff", cursor: "pointer" }}
          >
            New application
          </Link>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(112px,1fr))", gap: 9 }}>
        {STAGES.map((s) => (
          <div key={s.label} style={{ background: "#fff", border: `1px solid ${s.bd}`, borderRadius: 9, padding: "9px 11px" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 20, fontWeight: 600, letterSpacing: "-.03em", color: s.fg, lineHeight: 1 }}>
              {s.n}
            </div>
            <div style={{ fontSize: 11, fontWeight: 560, color: "#64748B", marginTop: 4, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9, padding: "10px 14px", borderBottom: "1px solid #EEF1F6", flexWrap: "wrap" }}>
          <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Pipeline</h2>
          <span style={{ flex: 1 }} />
          {TABS.map((t) => (
            <button
              key={t.label}
              type="button"
              style={{ fontSize: 11.5, fontWeight: t.weight, padding: "3px 9px", borderRadius: 6, border: `1px solid ${t.bd}`, background: t.bg, color: t.fg, cursor: "pointer" }}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: ROW_COLS, gap: 10, padding: "8px 14px", borderBottom: "1px solid #EEF1F6", background: "#FCFDFE" }}>
          {COLS.map((c, i) => (
            <div key={i} style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: "#94A3B8", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {c}
            </div>
          ))}
        </div>

        {ROWS.map((r, i) => {
          const ac = actionColors(r.urgency);
          return (
            <div
              key={i}
              className="hover:bg-[#FCFDFE]"
              style={{ display: "grid", gridTemplateColumns: ROW_COLS, gap: 10, padding: "10px 14px", borderBottom: "1px solid #F4F7FA", alignItems: "center" }}
            >
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 12.5, fontWeight: 560, color: "#0F172A", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {r.title}
                </div>
                <div style={{ fontSize: 11, color: "#64748B", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {r.company} · {r.source}
                </div>
              </div>
              <StatusBadge text={r.stage} tone={r.tone} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "#475569" }}>{r.applied}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "#475569", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {r.resume}
              </span>
              <div style={{ minWidth: 0, display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 5, height: 5, borderRadius: 99, flex: "none", background: ac.dot }} />
                <span style={{ fontSize: 12, color: ac.color, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.action}</span>
              </div>
              <Link
                href={r.href}
                className="hover:bg-[#F8FAFC]"
                style={{ fontSize: 11.5, fontWeight: 600, padding: "4px 9px", borderRadius: 6, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer", justifySelf: "start" }}
              >
                Open
              </Link>
            </div>
          );
        })}
      </section>

      <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, padding: 18, display: "grid", placeItems: "center", textAlign: "center", gap: 9 }}>
        <span style={{ fontSize: 18, color: "#CBD5E1" }}>▤</span>
        <div style={{ fontSize: 13, fontWeight: 580, color: "#0F172A" }}>No offers yet</div>
        <div style={{ fontSize: 12, color: "#64748B", maxWidth: 380, lineHeight: 1.5 }}>
          Three applications are in interview stage. The strongest signal in your data: referral applications convert 3.2× better than cold ones.
        </div>
        <Link
          href="/networking"
          className="hover:bg-[#2449C4]"
          style={{ fontSize: 12, fontWeight: 620, padding: "6px 13px", borderRadius: 7, border: "1px solid #2F5BEA", background: "#2F5BEA", color: "#fff", cursor: "pointer", marginTop: 2 }}
        >
          Increase networking
        </Link>
      </section>
    </div>
  );
}
