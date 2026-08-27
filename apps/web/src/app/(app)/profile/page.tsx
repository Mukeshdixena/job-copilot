import Link from "next/link";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { MatchScore } from "@/components/shared/MatchScore";
import {
  LINKS,
  SECTIONS,
  sectionColors,
  TARGET_TITLES,
  PREFS,
  LEGEND,
  SKILLS,
  skillColors,
  EXPERIENCE,
  SMALL_SECTIONS,
} from "@/lib/mock/profile";

export default function ProfilePage() {
  return (
    <div style={{ padding: "20px 22px 44px", display: "grid", gap: 14, alignContent: "start" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 640, letterSpacing: "-.02em" }}>Profile</h1>
          <div style={{ fontSize: 12.5, color: "#475569", marginTop: 3 }}>
            Your single source of career truth. Everything the agent writes is traced back to what is recorded here.
          </div>
        </div>
        <div style={{ display: "flex", gap: 7 }}>
          <button
            type="button"
            className="hover:bg-[#F8FAFC]"
            style={{ fontSize: 12, fontWeight: 560, padding: "7px 11px", borderRadius: 7, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
          >
            Import from resume
          </button>
          <Link
            href="/profile/audit"
            className="hover:bg-[#2449C4]"
            style={{ fontSize: 12, fontWeight: 620, padding: "7px 13px", borderRadius: 7, border: "1px solid #2F5BEA", background: "#2F5BEA", color: "#fff", cursor: "pointer" }}
          >
            Run AI audit
          </Link>
        </div>
      </div>

      <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, padding: 14, display: "grid", gridTemplateColumns: "auto minmax(0,1fr) auto", gap: 16, alignItems: "center" }}>
        <div style={{ width: 52, height: 52, borderRadius: 99, background: "#0C1425", display: "grid", placeItems: "center", fontFamily: "var(--font-mono)", fontSize: 17, fontWeight: 600, color: "#fff" }}>
          MK
        </div>
        <div style={{ minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9, flexWrap: "wrap" }}>
            <span style={{ fontSize: 16, fontWeight: 640, color: "#0F172A", letterSpacing: "-.015em" }}>Mukesh K.</span>
            <StatusBadge text="Verified academics" tone="success" />
          </div>
          <div style={{ fontSize: 12.5, color: "#475569", marginTop: 3 }}>
            Java Spring Boot Backend Developer · 1.2 years · Bangalore · open to Hyderabad, Pune, Remote
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 7, flexWrap: "wrap", fontSize: 11.5, fontFamily: "var(--font-mono)" }}>
            {LINKS.map((l, i) => (
              <span key={i} style={{ color: l.color }}>
                {l.icon} {l.label}
              </span>
            ))}
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#94A3B8" }}>Completeness</div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 28, fontWeight: 600, letterSpacing: "-.04em", color: "#0F172A", lineHeight: 1.05 }}>86%</div>
          <div style={{ fontSize: 11, color: "#64748B" }}>4 sections need work</div>
        </div>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "196px minmax(0,1fr)", gap: 14, alignItems: "start" }}>
        <aside style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden", position: "sticky", top: 0 }}>
          {SECTIONS.map((s) => {
            const c = sectionColors(s.state);
            return (
              <div
                key={s.label}
                className="hover:bg-[#F8FAFC]"
                style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", borderBottom: "1px solid #F4F7FA", cursor: "pointer", background: c.bg }}
              >
                <span style={{ width: 6, height: 6, borderRadius: 99, flex: "none", background: c.dot }} />
                <span style={{ flex: 1, minWidth: 0, fontSize: 12, fontWeight: c.weight, color: c.fg, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {s.label}
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "#94A3B8" }}>{s.n}</span>
              </div>
            );
          })}
        </aside>

        <div style={{ display: "grid", gap: 14, minWidth: 0 }}>
          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
              <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Target role</h2>
              <button type="button" style={{ fontSize: 11.5, fontWeight: 600, border: 0, background: "none", color: "#2F5BEA", cursor: "pointer", padding: 0 }}>
                Edit
              </button>
            </div>
            <div style={{ padding: "12px 14px", display: "grid", gap: 10 }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {TARGET_TITLES.map((t) => (
                  <span key={t} style={{ fontSize: 11.5, fontWeight: 520, padding: "3px 8px", borderRadius: 5, border: "1px solid #C7D2FE", background: "#EEF2FF", color: "#2F5BEA" }}>
                    {t}
                  </span>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 9 }}>
                {PREFS.map((p) => (
                  <div key={p.k} style={{ border: "1px solid #EEF1F6", borderRadius: 7, padding: "8px 10px", background: "#FCFDFE" }}>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: "#94A3B8" }}>{p.k}</div>
                    <div style={{ fontSize: 12.5, fontWeight: 560, color: "#0F172A", marginTop: 3 }}>{p.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 11, padding: "11px 14px", borderBottom: "1px solid #EEF1F6", flexWrap: "wrap" }}>
              <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Skills &amp; evidence</h2>
              <div style={{ display: "flex", alignItems: "center", gap: 11, fontSize: 11 }}>
                {LEGEND.map((l) => (
                  <span key={l.label} style={{ display: "inline-flex", alignItems: "center", gap: 5, color: "#64748B" }}>
                    <span style={{ width: 8, height: 8, borderRadius: 2, background: l.color }} />
                    {l.label}
                  </span>
                ))}
              </div>
            </div>
            {SKILLS.map((s) => {
              const c = skillColors(s);
              return (
                <div
                  key={s.name}
                  style={{ padding: "11px 14px", borderBottom: "1px solid #F4F7FA", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: 11, alignItems: "start" }}
                >
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600, color: "#0F172A" }}>{s.name}</span>
                      <span style={{ fontSize: 10.5, fontWeight: 640, padding: "1px 6px", borderRadius: 4, border: `1px solid ${c.tierBd}`, background: c.tierBg, color: c.tierFg }}>
                        {s.tier}
                      </span>
                      <span style={{ fontSize: 10.5, fontWeight: 640, padding: "1px 6px", borderRadius: 4, border: `1px solid ${c.provBd}`, background: c.provBg, color: c.provFg }}>
                        {s.provenance}
                      </span>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 10px", marginTop: 6 }}>
                      {s.evidence.map((e, i) => (
                        <span key={i} style={{ fontSize: 11.5, color: "#475569", display: "inline-flex", alignItems: "center", gap: 5 }}>
                          <span style={{ color: "#12915C" }}>✓</span>
                          {e}
                        </span>
                      ))}
                      {c.noEvidence && (
                        <span style={{ fontSize: 11.5, color: "#9A4A08", display: "inline-flex", alignItems: "center", gap: 5 }}>
                          <span>○</span>No evidence recorded — the agent will not claim this on your behalf
                        </span>
                      )}
                    </div>
                  </div>
                  <div style={{ textAlign: "right", flex: "none" }}>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: "#94A3B8" }}>Interview ready</div>
                    <div style={{ fontSize: 12, fontWeight: 620, color: c.readyColor, marginTop: 2 }}>{s.ready}</div>
                  </div>
                </div>
              );
            })}
            <div style={{ padding: "9px 14px", background: "#FCFDFE", fontSize: 11.5, color: "#64748B" }}>
              A skill with no evidence never appears in a generated resume bullet or answer.
            </div>
          </section>

          <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
              <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Experience &amp; projects</h2>
              <Link href="/projects" style={{ fontSize: 11.5, fontWeight: 600, border: 0, background: "none", color: "#2F5BEA", cursor: "pointer", padding: 0 }}>
                Open project analyzer →
              </Link>
            </div>
            {EXPERIENCE.map((x, i) => (
              <div key={i} style={{ padding: "12px 14px", borderBottom: "1px solid #F4F7FA" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 11, flexWrap: "wrap" }}>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#0F172A" }}>{x.title}</div>
                    <div style={{ fontSize: 11.5, color: "#64748B", marginTop: 1 }}>
                      {x.org} · {x.dates}
                    </div>
                  </div>
                  {x.health != null && <MatchScore value={x.health} size="sm" label="health" />}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 8 }}>
                  {x.stack.map((t) => (
                    <span key={t} style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#475569", background: "#F5F8FB", border: "1px solid #E7EDF3", padding: "2px 6px", borderRadius: 4 }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ fontSize: 12, color: "#475569", marginTop: 8, lineHeight: 1.5 }}>{x.note}</div>
              </div>
            ))}
          </section>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 14 }}>
            {SMALL_SECTIONS.map((s) => (
              <section key={s.title} style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
                  <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>{s.title}</h2>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "#94A3B8" }}>{s.count}</span>
                </div>
                {s.rows.map((r, i) => (
                  <div key={i} style={{ padding: "9px 14px", borderBottom: "1px solid #F4F7FA" }}>
                    <div style={{ fontSize: 12.5, fontWeight: 540, color: "#0F172A" }}>{r.a}</div>
                    <div style={{ fontSize: 11.5, color: "#64748B", marginTop: 1 }}>{r.b}</div>
                  </div>
                ))}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
