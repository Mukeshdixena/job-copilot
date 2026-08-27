import Link from "next/link";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { STATS, FOLLOWUPS, VIEWS, COLS, CONTACTS, TEMPLATES } from "@/lib/mock/networking";

export default function NetworkingPage() {
  return (
    <div style={{ padding: "20px 22px 44px", display: "grid", gap: 14, alignContent: "start" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 640, letterSpacing: "-.02em" }}>Networking</h1>
          <div style={{ fontSize: 12.5, color: "#475569", marginTop: 3 }}>
            Referral applications convert 3.2× better than cold ones. 2 follow-ups are due today.
          </div>
        </div>
        <div style={{ display: "flex", gap: 7 }}>
          <button
            type="button"
            className="hover:bg-[#F8FAFC]"
            style={{ fontSize: 12, fontWeight: 560, padding: "7px 11px", borderRadius: 7, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
          >
            Import contacts
          </button>
          <Link
            href="/networking/1"
            className="hover:bg-[#2449C4]"
            style={{ fontSize: 12, fontWeight: 620, padding: "7px 13px", borderRadius: 7, border: "1px solid #2F5BEA", background: "#2F5BEA", color: "#fff", cursor: "pointer" }}
          >
            Add contact
          </Link>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 9 }}>
        {STATS.map((s) => (
          <div key={s.label} style={{ background: "#fff", border: `1px solid ${s.bd}`, borderRadius: 9, padding: "10px 12px" }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: "#94A3B8" }}>{s.label}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 21, fontWeight: 600, letterSpacing: "-.03em", color: s.fg, marginTop: 4, lineHeight: 1 }}>
              {s.n}
            </div>
            <div style={{ fontSize: 11, color: "#64748B", marginTop: 3 }}>{s.note}</div>
          </div>
        ))}
      </div>

      <section style={{ background: "#fff", border: "1px solid #FDBA74", borderRadius: 10, overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 14px", borderBottom: "1px solid #F7E9D8", background: "#FFFCF7" }}>
          <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#9A4A08", fontWeight: 700 }}>Follow-ups due</h2>
          <span style={{ fontSize: 11.5, color: "#9A4A08" }}>Drafts are ready. You review and send.</span>
        </div>
        {FOLLOWUPS.map((f, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 11, padding: "11px 14px", borderBottom: "1px solid #F4F7FA" }}>
            <div
              style={{
                width: 29,
                height: 29,
                flex: "none",
                borderRadius: 99,
                background: "#F1F5F9",
                border: "1px solid #E3E8EF",
                display: "grid",
                placeItems: "center",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                fontWeight: 640,
                color: "#475569",
              }}
            >
              {f.initials}
            </div>
            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={{ fontSize: 12.5, fontWeight: 580, color: "#0F172A" }}>{f.name}</div>
              <div style={{ fontSize: 11.5, color: "#64748B" }}>{f.context}</div>
            </div>
            <span style={{ flex: "none", fontSize: 11.5, fontWeight: 620, color: f.dueColor, minWidth: 74, textAlign: "right" }}>{f.due}</span>
            <Link
              href="/networking/1"
              className="hover:bg-[#2449C4]"
              style={{ flex: "none", fontSize: 11.5, fontWeight: 600, padding: "5px 11px", borderRadius: 6, border: "1px solid #2F5BEA", background: "#2F5BEA", color: "#fff", cursor: "pointer" }}
            >
              Review draft
            </Link>
          </div>
        ))}
      </section>

      <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9, padding: "10px 14px", borderBottom: "1px solid #EEF1F6", flexWrap: "wrap" }}>
          <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Contacts</h2>
          <span style={{ flex: 1 }} />
          {VIEWS.map((v) => (
            <button
              key={v.label}
              type="button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                fontSize: 11.5,
                fontWeight: v.weight,
                padding: "3px 9px",
                borderRadius: 6,
                border: `1px solid ${v.bd}`,
                background: v.bg,
                color: v.fg,
                cursor: "pointer",
              }}
            >
              {v.label}
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, opacity: 0.7 }}>{v.n}</span>
            </button>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(150px,1.6fr) minmax(130px,1.5fr) 100px 110px minmax(120px,1.3fr) 72px",
            gap: 10,
            padding: "8px 14px",
            borderBottom: "1px solid #EEF1F6",
            background: "#FCFDFE",
          }}
        >
          {COLS.map((c, i) => (
            <div key={i} style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: "#94A3B8", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {c}
            </div>
          ))}
        </div>

        {CONTACTS.map((c, i) => (
          <div
            key={i}
            className="hover:bg-[#FCFDFE]"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(150px,1.6fr) minmax(130px,1.5fr) 100px 110px minmax(120px,1.3fr) 72px",
              gap: 10,
              padding: "10px 14px",
              borderBottom: "1px solid #F4F7FA",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 9, minWidth: 0 }}>
              <div
                style={{
                  width: 25,
                  height: 25,
                  flex: "none",
                  borderRadius: 99,
                  background: "#F1F5F9",
                  border: "1px solid #E3E8EF",
                  display: "grid",
                  placeItems: "center",
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  fontWeight: 640,
                  color: "#475569",
                }}
              >
                {c.initials}
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 12.5, fontWeight: 560, color: "#0F172A", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.name}</div>
                <div style={{ fontSize: 10.5, color: "#94A3B8", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.type}</div>
              </div>
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 12, color: "#334155", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.role}</div>
              <div style={{ fontSize: 10.5, color: "#94A3B8", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.company}</div>
            </div>
            <StatusBadge text={c.stage} tone={c.tone} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "#475569" }}>{c.last}</span>
            <div style={{ minWidth: 0, display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 5, height: 5, borderRadius: 99, flex: "none", background: c.dot }} />
              <span style={{ fontSize: 11.5, color: c.nextColor, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.next}</span>
            </div>
            <Link
              href="/networking/1"
              className="hover:bg-[#F8FAFC]"
              style={{ fontSize: 11.5, fontWeight: 600, padding: "4px 9px", borderRadius: 6, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer", justifySelf: "start" }}
            >
              Open
            </Link>
          </div>
        ))}
      </section>

      <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
          <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Message generator</h2>
          <span style={{ fontSize: 11.5, color: "#94A3B8" }}>Generate → Review → Copy / Send</span>
        </div>
        <div style={{ padding: "12px 14px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(178px,1fr))", gap: 9 }}>
          {TEMPLATES.map((t) => (
            <Link
              key={t.name}
              href="/networking/1"
              className="hover:border-[#C7D2FE] hover:bg-[#FCFDFF]"
              style={{ textAlign: "left", border: "1px solid #E3E8EF", borderRadius: 8, padding: "10px 11px", background: "#fff", cursor: "pointer", display: "block" }}
            >
              <div style={{ fontSize: 12.5, fontWeight: 580, color: "#0F172A" }}>{t.name}</div>
              <div style={{ fontSize: 11, color: "#64748B", marginTop: 3, lineHeight: 1.4 }}>{t.note}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "#2F5BEA", marginTop: 6 }}>{t.stat}</div>
            </Link>
          ))}
        </div>
        <div style={{ padding: "9px 14px", background: "#FCFDFE", fontSize: 11.5, color: "#64748B" }}>
          No message is ever sent automatically, and there is no bulk outreach. You copy or send each one yourself.
        </div>
      </section>
    </div>
  );
}
