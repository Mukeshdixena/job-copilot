import Link from "next/link";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { MatchScore } from "@/components/shared/MatchScore";
import { DRIVE_TABS, DRIVES, BLOCKED_DRIVES, DRIVE_NAV_CTAS } from "@/lib/mock/drives";

export default function DrivesPage() {
  return (
    <div style={{ padding: "20px 22px 44px", display: "grid", gap: 14, alignContent: "start" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 640, letterSpacing: "-.02em" }}>Placement Drives</h1>
          <div style={{ fontSize: 12.5, color: "#475569", marginTop: 3 }}>
            Sorted by urgency. Eligibility is checked against your verified academic record.
          </div>
        </div>
        <div style={{ display: "flex", gap: 7 }}>
          <button
            type="button"
            className="hover:bg-[#F8FAFC]"
            style={{ fontSize: 12, fontWeight: 560, padding: "6px 11px", borderRadius: 7, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
          >
            Sync placement cell
          </button>
          <button
            type="button"
            className="hover:bg-[#F8FAFC]"
            style={{ fontSize: 12, fontWeight: 560, padding: "6px 11px", borderRadius: 7, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
          >
            Add drive
          </button>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 13, padding: "11px 14px", borderRadius: 10, border: "1px solid #FCA5A5", background: "#FEF6F6" }}>
        <span style={{ width: 30, height: 30, flex: "none", borderRadius: 8, background: "#FEE9E9", border: "1px solid #FCA5A5", display: "grid", placeItems: "center", color: "#A3170F", fontSize: 14 }}>
          !
        </span>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 620, color: "#A3170F" }}>TCS Java Developer closes tonight at 11:59 PM</div>
          <div style={{ fontSize: 12, color: "#7F1D1D", marginTop: 1 }}>
            All five eligibility criteria pass. Your application pack is prepared and waiting for review.
          </div>
        </div>
        <Link
          href="/applications/prepare/1"
          className="hover:bg-[#911A12]"
          style={{ flex: "none", fontSize: 12, fontWeight: 620, padding: "7px 13px", borderRadius: 7, border: "1px solid #B42318", background: "#B42318", color: "#fff", cursor: "pointer" }}
        >
          Review &amp; apply
        </Link>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 7, flexWrap: "wrap" }}>
        {DRIVE_TABS.map((t) => (
          <button
            key={t.label}
            type="button"
            style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: t.weight, padding: "5px 11px", borderRadius: 7, border: `1px solid ${t.bd}`, background: t.bg, color: t.fg, cursor: "pointer" }}
          >
            {t.label}
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, opacity: 0.7 }}>{t.n}</span>
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 12 }}>
        {DRIVES.map((d) => (
          <article key={d.company} style={{ background: "#fff", border: `1px solid ${d.cardBd}`, borderRadius: 10, overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 11, padding: "12px 13px", borderBottom: "1px solid #F1F5F9", background: d.headBg }}>
              <div style={{ minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <span style={{ fontSize: 15, fontWeight: 660, color: "#0F172A", letterSpacing: "-.015em" }}>{d.company}</span>
                  <StatusBadge text={d.status} tone={d.statusTone} />
                </div>
                <div style={{ fontSize: 12.5, color: "#475569", marginTop: 2 }}>
                  {d.role} · {d.package}
                </div>
              </div>
              <MatchScore value={d.match} size="md" />
            </div>

            <div style={{ padding: "11px 13px", borderBottom: "1px solid #F4F7FA" }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#94A3B8", marginBottom: 7 }}>
                Eligibility
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px 12px" }}>
                {d.criteria.map((c, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11.5, color: c.color }}>
                    <span style={{ flex: "none", width: 11, textAlign: "center" }}>{c.icon}</span>
                    <span style={{ minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 11, padding: "11px 13px" }}>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#94A3B8" }}>Deadline</div>
                <div style={{ fontSize: 12.5, fontWeight: 620, color: d.deadlineColor, marginTop: 2 }}>{d.deadline}</div>
              </div>
              <div style={{ display: "flex", gap: 6, flex: "none" }}>
                <Link
                  href="/jobs/1"
                  className="hover:bg-[#F8FAFC]"
                  style={{ fontSize: 11.5, fontWeight: 560, padding: "5px 10px", borderRadius: 6, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
                >
                  View Details
                </Link>
                {DRIVE_NAV_CTAS.has(d.cta) ? (
                  <Link
                    href="/applications/prepare/1"
                    className="hover:brightness-95"
                    style={{ fontSize: 11.5, fontWeight: 620, padding: "5px 10px", borderRadius: 6, border: `1px solid ${d.ctaBd}`, background: d.ctaBg, color: d.ctaFg, cursor: "pointer" }}
                  >
                    {d.cta}
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="hover:brightness-95"
                    style={{ fontSize: 11.5, fontWeight: 620, padding: "5px 10px", borderRadius: 6, border: `1px solid ${d.ctaBd}`, background: d.ctaBg, color: d.ctaFg, cursor: "pointer" }}
                  >
                    {d.cta}
                  </button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
        <div style={{ padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
          <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>
            Not eligible &amp; missed
          </h2>
        </div>
        {BLOCKED_DRIVES.map((b) => (
          <div key={b.company} style={{ display: "flex", alignItems: "center", gap: 11, padding: "10px 14px", borderBottom: "1px solid #F4F7FA" }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#94A3B8", minWidth: 120 }}>{b.company}</span>
            <span style={{ fontSize: 12, color: "#64748B", flex: 1, minWidth: 0 }}>{b.reason}</span>
            <StatusBadge text={b.tag} tone={b.tone} />
          </div>
        ))}
      </section>
    </div>
  );
}
