import { MatchScore } from "@/components/shared/MatchScore";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { MetricBar } from "@/components/shared/MetricBar";
import { JobCard } from "@/components/shared/JobCard";
import { KIT_PALETTE, KIT_JOB, KIT_TIMELINE, KIT_STATES } from "@/lib/mock/kit";

export default function KitPage() {
  return (
    <div style={{ padding: "20px 22px 44px", display: "grid", gap: 14, alignContent: "start", maxWidth: 1340 }}>
      <div>
        <h1 style={{ margin: 0, fontSize: 20, fontWeight: 640, letterSpacing: "-.02em" }}>Component kit</h1>
        <div style={{ fontSize: 12.5, color: "#475569", marginTop: 3 }}>
          The reusable pieces every screen is built from, plus the nine states each major screen has to handle.
        </div>
      </div>

      <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
        <div style={{ padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
          <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>
            Foundations
          </h2>
        </div>
        <div style={{ padding: "13px 14px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 16 }}>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#94A3B8", marginBottom: 8 }}>
              Palette
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(58px,1fr))", gap: 6 }}>
              {KIT_PALETTE.map((p) => (
                <div key={p.name}>
                  <div style={{ height: 30, borderRadius: 5, border: "1px solid rgba(15,23,42,.09)", background: p.hex }} />
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "#64748B", marginTop: 3 }}>{p.hex}</div>
                  <div style={{ fontSize: 9, color: "#94A3B8" }}>{p.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#94A3B8", marginBottom: 8 }}>
              Type
            </div>
            <div style={{ display: "grid", gap: 7 }}>
              <div style={{ fontSize: 20, fontWeight: 640, letterSpacing: "-.02em", color: "#0F172A" }}>Page title · 20/640</div>
              <div style={{ fontSize: 14.5, fontWeight: 640, letterSpacing: "-.012em", color: "#0F172A" }}>Card title · 14.5/640</div>
              <div style={{ fontSize: 12.5, color: "#334155" }}>Body · 12.5/400 Instrument Sans</div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B" }}>
                Section label · 11/700
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, fontWeight: 600, color: "#0F172A" }}>
                Numerals · IBM Plex Mono 600
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(310px,1fr))", gap: 14 }}>
        <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
          <div style={{ padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
            <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>
              Match score
            </h2>
          </div>
          <div style={{ padding: "13px 14px", display: "flex", alignItems: "center", gap: 9, flexWrap: "wrap" }}>
            <MatchScore value={94} size="lg" />
            <MatchScore value={81} size="md" />
            <MatchScore value={66} size="md" />
            <MatchScore value={48} size="sm" />
          </div>
        </section>

        <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
          <div style={{ padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
            <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>
              Status badge
            </h2>
          </div>
          <div style={{ padding: "13px 14px", display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
            <StatusBadge text="Saved" tone="neutral" />
            <StatusBadge text="Applied" tone="accent" />
            <StatusBadge text="Eligible" tone="success" />
            <StatusBadge text="Assessment" tone="violet" />
            <StatusBadge text="Follow-up due" tone="warn" />
            <StatusBadge text="Rejected" tone="danger" />
          </div>
        </section>

        <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
          <div style={{ padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
            <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>
              Skill badge
            </h2>
          </div>
          <div style={{ padding: "13px 14px", display: "flex", alignItems: "center", gap: 5, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "#0B6E45", background: "#F3FBF6", border: "1px solid #C9EBD9", padding: "2px 6px", borderRadius: 4 }}>
              ✓ Spring Boot
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "#9A4A08", background: "#FFFBF4", border: "1px dashed #F0B67A", padding: "2px 6px", borderRadius: 4 }}>
              △ Kafka
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#475569", background: "#F5F8FB", border: "1px solid #E7EDF3", padding: "2px 6px", borderRadius: 4 }}>
              MySQL
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#2F5BEA", background: "#EEF2FF", border: "1px solid #C7D2FE", padding: "2px 6px", borderRadius: 4 }}>
              ✓ Java
            </span>
          </div>
        </section>

        <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
          <div style={{ padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
            <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>
              Deadline badge
            </h2>
          </div>
          <div style={{ padding: "13px 14px", display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
            <span style={{ fontSize: 11, fontWeight: 640, padding: "2px 7px", borderRadius: 4, border: "1px solid #FCA5A5", background: "#FEF2F2", color: "#A3170F" }}>
              Today — 11:59 PM
            </span>
            <span style={{ fontSize: 11, fontWeight: 640, padding: "2px 7px", borderRadius: 4, border: "1px solid #FDBA74", background: "#FFF7ED", color: "#9A4A08" }}>
              Tomorrow
            </span>
            <span style={{ fontSize: 11, fontWeight: 640, padding: "2px 7px", borderRadius: 4, border: "1px solid #C7D2FE", background: "#EEF2FF", color: "#2F5BEA" }}>
              6 days
            </span>
            <span style={{ fontSize: 11, fontWeight: 640, padding: "2px 7px", borderRadius: 4, border: "1px solid #E3E8EF", background: "#F1F5F9", color: "#475569" }}>
              No deadline
            </span>
          </div>
        </section>

        <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
          <div style={{ padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
            <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>
              Progress bar / metric
            </h2>
          </div>
          <div style={{ padding: "13px 14px", display: "grid", gap: 10 }}>
            <MetricBar label="Java core" value={91} />
            <MetricBar label="Spring Boot" value={72} />
            <MetricBar label="System design" value={48} marker={66} />
          </div>
        </section>

        <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
          <div style={{ padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
            <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>
              Quick action button
            </h2>
          </div>
          <div style={{ padding: "13px 14px", display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
            <button
              type="button"
              className="hover:bg-[#2449C4]"
              style={{ fontSize: 12, fontWeight: 620, padding: "6px 12px", borderRadius: 7, border: "1px solid #2F5BEA", background: "#2F5BEA", color: "#fff", cursor: "pointer" }}
            >
              Primary
            </button>
            <button
              type="button"
              className="hover:bg-[#F8FAFC]"
              style={{ fontSize: 12, fontWeight: 560, padding: "6px 11px", borderRadius: 7, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
            >
              Secondary
            </button>
            <button
              type="button"
              className="hover:bg-[#911A12]"
              style={{ fontSize: 12, fontWeight: 620, padding: "6px 12px", borderRadius: 7, border: "1px solid #B42318", background: "#B42318", color: "#fff", cursor: "pointer" }}
            >
              Urgent
            </button>
            <button
              type="button"
              className="hover:bg-[#E0E7FF]"
              style={{ fontSize: 12, fontWeight: 600, padding: "6px 11px", borderRadius: 7, border: "1px solid #C7D2FE", background: "#EEF2FF", color: "#2F5BEA", cursor: "pointer" }}
            >
              ◈ Ask AI
            </button>
            <button
              type="button"
              style={{ fontSize: 12, fontWeight: 600, padding: 0, border: 0, background: "none", color: "#2F5BEA", cursor: "pointer" }}
            >
              Text action →
            </button>
          </div>
        </section>
      </div>

      <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
        <div style={{ padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
          <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>
            Job card
          </h2>
        </div>
        <div style={{ padding: "13px 14px" }}>
          <JobCard job={KIT_JOB} />
        </div>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 14 }}>
        <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
          <div style={{ padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
            <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>
              AI suggestion card / diff viewer
            </h2>
          </div>
          <div style={{ padding: "13px 14px", display: "grid", gap: 9 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 12, fontWeight: 620, color: "#0F172A" }}>Skills</span>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "#5B21B6", background: "#F5F3FF", border: "1px solid #DDD6FE", padding: "1px 5px", borderRadius: 4 }}>
                AI drafted
              </span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <div style={{ border: "1px solid #F1D9D9", borderRadius: 7, overflow: "hidden", background: "#FFFCFC" }}>
                <div style={{ padding: "4px 8px", background: "#FEF6F6", borderBottom: "1px solid #F7E4E4", fontSize: 9.5, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#A3170F" }}>
                  Original
                </div>
                <div style={{ padding: 8, fontSize: 12, lineHeight: 1.5, color: "#5B4444" }}>Java, HTML, CSS, MySQL, Spring Boot</div>
              </div>
              <div style={{ border: "1px solid #C9EBD9", borderRadius: 7, overflow: "hidden", background: "#FCFEFD" }}>
                <div style={{ padding: "4px 8px", background: "#F3FBF6", borderBottom: "1px solid #DBF0E5", fontSize: 9.5, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#0B6E45" }}>
                  Suggested
                </div>
                <div style={{ padding: 8, fontSize: 12, lineHeight: 1.5, color: "#26443A" }}>Java 17 · Spring Boot 3 · REST · JPA · MySQL</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
              <button type="button" style={{ fontSize: 11.5, fontWeight: 600, padding: "4px 10px", borderRadius: 6, border: "1px solid #A7E3C4", background: "#F3FBF6", color: "#0B6E45", cursor: "pointer" }}>
                Accept
              </button>
              <button type="button" style={{ fontSize: 11.5, fontWeight: 560, padding: "4px 10px", borderRadius: 6, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}>
                Edit
              </button>
              <button type="button" style={{ fontSize: 11.5, fontWeight: 560, padding: "4px 10px", borderRadius: 6, border: "1px solid #E3E8EF", background: "#fff", color: "#64748B", cursor: "pointer" }}>
                Reject
              </button>
            </div>
          </div>
        </section>

        <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
          <div style={{ padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
            <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>
              Timeline
            </h2>
          </div>
          <div style={{ padding: "13px 14px 4px" }}>
            {KIT_TIMELINE.map((t, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "48px 14px minmax(0,1fr)", gap: 10, alignItems: "start" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#94A3B8", textAlign: "right", paddingTop: 1 }}>{t.date}</span>
                <div style={{ display: "grid", justifyItems: "center", height: "100%" }}>
                  <span style={{ width: 8, height: 8, borderRadius: 99, background: t.dot, marginTop: 3 }} />
                  <span style={{ width: 1.5, flex: 1, background: "#E3E8EF", minHeight: 12 }} />
                </div>
                <div style={{ fontSize: 12, color: t.fg, paddingBottom: 11, minWidth: 0 }}>{t.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
          <div style={{ padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
            <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>
              Confirmation modal
            </h2>
          </div>
          <div style={{ padding: 16, background: "#F1F5F9", display: "grid", placeItems: "center" }}>
            <div style={{ width: "100%", maxWidth: 330, background: "#fff", border: "1px solid #D3DBE6", borderRadius: 10, boxShadow: "0 10px 28px rgba(15,23,42,.14)", overflow: "hidden" }}>
              <div style={{ padding: "13px 14px 11px" }}>
                <div style={{ fontSize: 14, fontWeight: 640, color: "#0F172A", letterSpacing: "-.012em" }}>Send this message from your account?</div>
                <div style={{ fontSize: 12, color: "#475569", marginTop: 5, lineHeight: 1.5 }}>
                  The follow-up to Priya Nair will be sent as you, right now. This is the only step the agent cannot take for you.
                </div>
              </div>
              <div style={{ display: "flex", gap: 6, justifyContent: "flex-end", padding: "11px 14px", background: "#FCFDFE", borderTop: "1px solid #EEF1F6" }}>
                <button type="button" style={{ fontSize: 12, fontWeight: 560, padding: "6px 12px", borderRadius: 7, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}>
                  Cancel
                </button>
                <button type="button" style={{ fontSize: 12, fontWeight: 620, padding: "6px 13px", borderRadius: 7, border: "1px solid #2F5BEA", background: "#2F5BEA", color: "#fff", cursor: "pointer" }}>
                  Send it
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 14px", borderBottom: "1px solid #EEF1F6" }}>
          <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>
            The nine states
          </h2>
          <span style={{ fontSize: 11.5, color: "#94A3B8" }}>Every major screen ships all nine</span>
        </div>
        <div style={{ padding: "13px 14px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(238px,1fr))", gap: 11 }}>
          {KIT_STATES.map((s) => (
            <div key={s.name} style={{ border: `1px solid ${s.bd}`, borderRadius: 9, overflow: "hidden", background: "#fff" }}>
              <div style={{ padding: "7px 11px", borderBottom: "1px solid #F1F5F9", background: s.headBg }}>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: s.headFg }}>
                  {s.name}
                </span>
              </div>
              <div style={{ padding: "13px 11px", minHeight: 104, display: "grid", placeItems: "center" }}>
                {s.isSkeleton && (
                  <div style={{ width: "100%", display: "grid", gap: 6 }}>
                    <div
                      style={{
                        height: 9,
                        borderRadius: 4,
                        width: "64%",
                        background: "linear-gradient(90deg,#EDF1F6 0%,#F8FAFC 50%,#EDF1F6 100%)",
                        backgroundSize: "280px 100%",
                        animation: "jjaShimmer 1.3s linear infinite",
                      }}
                    />
                    <div
                      style={{
                        height: 9,
                        borderRadius: 4,
                        width: "88%",
                        background: "linear-gradient(90deg,#EDF1F6 0%,#F8FAFC 50%,#EDF1F6 100%)",
                        backgroundSize: "280px 100%",
                        animation: "jjaShimmer 1.3s linear infinite",
                      }}
                    />
                    <div
                      style={{
                        height: 9,
                        borderRadius: 4,
                        width: "42%",
                        background: "linear-gradient(90deg,#EDF1F6 0%,#F8FAFC 50%,#EDF1F6 100%)",
                        backgroundSize: "280px 100%",
                        animation: "jjaShimmer 1.3s linear infinite",
                      }}
                    />
                  </div>
                )}
                {s.isSpinner && (
                  <div style={{ display: "grid", gap: 8, justifyItems: "center", textAlign: "center" }}>
                    <span
                      style={{
                        width: 16,
                        height: 16,
                        border: "2px solid #E3E8EF",
                        borderTopColor: "#2F5BEA",
                        borderRadius: 99,
                        animation: "jjaSpin .8s linear infinite",
                      }}
                    />
                    <div style={{ fontSize: 12, color: "#475569", lineHeight: 1.4 }}>{s.body}</div>
                  </div>
                )}
                {s.isPlain && (
                  <div style={{ display: "grid", gap: 7, justifyItems: "center", textAlign: "center" }}>
                    <span style={{ fontSize: 16, color: s.iconColor }}>{s.icon}</span>
                    <div style={{ fontSize: 12.5, fontWeight: 580, color: "#0F172A" }}>{s.title}</div>
                    <div style={{ fontSize: 11.5, color: "#64748B", lineHeight: 1.45 }}>{s.body}</div>
                    {s.cta && (
                      <span style={{ fontSize: 11.5, fontWeight: 620, color: "#2F5BEA", marginTop: 2 }}>{s.cta}</span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
