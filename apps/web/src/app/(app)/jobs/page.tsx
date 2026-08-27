import { JobCard } from "@/components/shared/JobCard";
import { JOBS_LIST, STACK_CHIPS, FILTER_GROUPS, ACTIVE_FILTERS } from "@/lib/mock/jobs";

export default function JobsPage() {
  return (
    <div style={{ padding: "20px 22px 44px", display: "grid", gap: 14, alignContent: "start" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 640, letterSpacing: "-.02em" }}>Jobs</h1>
          <div style={{ fontSize: 12.5, color: "#475569", marginTop: 3 }}>
            <strong style={{ fontFamily: "var(--font-mono)", fontWeight: 600, color: "#0F172A" }}>128</strong> matched ·{" "}
            <strong style={{ fontFamily: "var(--font-mono)", fontWeight: 600, color: "#0F172A" }}>12</strong> new since yesterday · scoped to
            Java / Spring Boot backend roles
          </div>
        </div>
        <div style={{ display: "flex", gap: 7, alignItems: "center" }}>
          <div style={{ display: "flex", border: "1px solid #E3E8EF", borderRadius: 7, overflow: "hidden", background: "#fff" }}>
            <button type="button" style={{ fontSize: 12, fontWeight: 620, padding: "6px 11px", border: 0, background: "#0C1425", color: "#fff", cursor: "pointer" }}>
              Cards
            </button>
            <button type="button" className="hover:bg-[#F8FAFC]" style={{ fontSize: 12, fontWeight: 560, padding: "6px 11px", border: 0, background: "#fff", color: "#475569", cursor: "pointer" }}>
              Table
            </button>
          </div>
          <button type="button" className="hover:bg-[#F8FAFC]" style={{ fontSize: 12, fontWeight: 560, padding: "6px 11px", borderRadius: 7, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}>
            Sort: Match ⌄
          </button>
          <button type="button" className="hover:bg-[#2449C4]" style={{ fontSize: 12, fontWeight: 620, padding: "6px 12px", borderRadius: 7, border: "1px solid #2F5BEA", background: "#2F5BEA", color: "#fff", cursor: "pointer" }}>
            ✦ Bulk analyze
          </button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "224px minmax(0,1fr)", gap: 14, alignItems: "start" }}>
        <aside style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, position: "sticky", top: 0 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 12px", borderBottom: "1px solid #EEF1F6" }}>
            <h2 style={{ margin: 0, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>Filters</h2>
            <button type="button" style={{ fontSize: 11, fontWeight: 600, border: 0, background: "none", color: "#2F5BEA", cursor: "pointer", padding: 0 }}>
              Reset
            </button>
          </div>

          <div style={{ padding: "11px 12px", borderBottom: "1px solid #F4F7FA" }}>
            <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: "#94A3B8", marginBottom: 7 }}>Core stack</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
              {STACK_CHIPS.map((s) => (
                <span
                  key={s.name}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    fontWeight: 500,
                    padding: "2px 7px",
                    borderRadius: 5,
                    cursor: "pointer",
                    border: `1px solid ${s.on ? "#C7D2FE" : "#E3E8EF"}`,
                    background: s.on ? "#EEF2FF" : "#fff",
                    color: s.on ? "#2F5BEA" : "#64748B",
                  }}
                >
                  {s.on ? "✓ " : ""}
                  {s.name}
                </span>
              ))}
            </div>
          </div>

          <div style={{ padding: "11px 12px", borderBottom: "1px solid #F4F7FA" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
              <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: "#94A3B8" }}>Match score</div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600, color: "#2F5BEA" }}>≥ 75%</span>
            </div>
            <div style={{ height: 4, borderRadius: 99, background: "#EDF1F6", position: "relative" }}>
              <div style={{ position: "absolute", left: 0, right: "25%", top: 0, bottom: 0, background: "#2F5BEA", borderRadius: 99 }} />
              <div style={{ position: "absolute", right: "25%", top: -4, width: 12, height: 12, borderRadius: 99, background: "#fff", border: "2px solid #2F5BEA", transform: "translateX(50%)" }} />
            </div>
          </div>

          {FILTER_GROUPS.map((g) => (
            <div key={g.title} style={{ padding: "10px 12px", borderBottom: "1px solid #F4F7FA" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}>
                <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: "#94A3B8" }}>{g.title}</div>
                <span style={{ fontSize: 10, color: "#CBD5E1" }}>{g.open ? "▴" : "▾"}</span>
              </div>
              {g.open && (
                <div style={{ display: "grid", gap: 5, marginTop: 7 }}>
                  {g.options.map((o) => (
                    <label key={o.label} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, color: "#334155", cursor: "pointer" }}>
                      <span
                        style={{
                          width: 13,
                          height: 13,
                          flex: "none",
                          borderRadius: 3.5,
                          border: `1px solid ${o.on ? "#2F5BEA" : "#CBD5E1"}`,
                          background: o.on ? "#2F5BEA" : "#fff",
                          display: "grid",
                          placeItems: "center",
                          fontSize: 9,
                          color: "#fff",
                          lineHeight: 1,
                        }}
                      >
                        {o.on ? "✓" : ""}
                      </span>
                      <span style={{ flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{o.label}</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "#94A3B8" }}>{o.n}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div style={{ padding: "10px 12px" }}>
            <button
              type="button"
              className="hover:bg-[#EEF2FF]"
              style={{ width: "100%", fontSize: 11.5, fontWeight: 600, padding: 7, borderRadius: 6, border: "1px dashed #C7D2FE", background: "#F8FAFF", color: "#2F5BEA", cursor: "pointer" }}
            >
              Save this search
            </button>
          </div>
        </aside>

        <div style={{ display: "grid", gap: 11, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, flexWrap: "wrap", fontSize: 11.5 }}>
            <span style={{ color: "#64748B" }}>Active:</span>
            {ACTIVE_FILTERS.map((a) => (
              <span
                key={a}
                style={{ display: "inline-flex", alignItems: "center", gap: 5, fontWeight: 560, padding: "2px 6px 2px 8px", borderRadius: 5, border: "1px solid #C7D2FE", background: "#EEF2FF", color: "#2F5BEA" }}
              >
                {a} <span style={{ color: "#94A3B8", cursor: "pointer", fontSize: 12 }}>×</span>
              </span>
            ))}
            <span style={{ flex: 1 }} />
            <span style={{ color: "#94A3B8" }}>Showing 1–6 of 128</span>
          </div>

          {JOBS_LIST.map((j, i) => (
            <JobCard key={j.title} job={j} analyzeHref={`/jobs/${i + 1}`} prepareHref={`/applications/prepare/${i + 1}`} />
          ))}

          <div style={{ border: "1px dashed #CBD5E1", borderRadius: 9, background: "#fff", padding: 18, textAlign: "center" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 12.5, color: "#475569" }}>
              <span style={{ width: 13, height: 13, border: "2px solid #E3E8EF", borderTopColor: "#2F5BEA", borderRadius: 99, display: "inline-block", animation: "jjaSpin .8s linear infinite" }} />
              Scanning 4 more sources for Java / Spring Boot roles…
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
