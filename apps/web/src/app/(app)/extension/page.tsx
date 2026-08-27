import Link from "next/link";
import { MatchScore } from "@/components/shared/MatchScore";
import {
  EXTENSION_MATCH,
  EXTENSION_STRONG_SKILLS,
  EXTENSION_WEAK_SKILLS,
  EXTENSION_SKELETON,
  EXTENSION_STATES,
} from "@/lib/mock/extension";

export default function ExtensionPage() {
  return (
    <div style={{ padding: "20px 22px 44px", display: "grid", gap: 14, alignContent: "start" }}>
      <div>
        <h1 style={{ margin: 0, fontSize: 20, fontWeight: 640, letterSpacing: "-.02em" }}>Browser Extension</h1>
        <div style={{ fontSize: 12.5, color: "#475569", marginTop: 3 }}>
          A compact companion that extracts and analyses the job page you are on, then hands the work back to the web
          app. It never sends a message or submits an application on its own.
        </div>
      </div>

      <div style={{ border: "1px solid #E3E8EF", borderRadius: 11, overflow: "hidden", background: "#E9EDF3" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9, padding: "8px 11px", background: "#DFE4EC", borderBottom: "1px solid #D3DBE6" }}>
          <div style={{ display: "flex", gap: 5, flex: "none" }}>
            <span style={{ width: 9, height: 9, borderRadius: 99, background: "#F0736A" }} />
            <span style={{ width: 9, height: 9, borderRadius: 99, background: "#F2BE4C" }} />
            <span style={{ width: 9, height: 9, borderRadius: 99, background: "#61C554" }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "3px 9px", borderRadius: "6px 6px 0 0", background: "#F8FAFC", fontSize: 11.5, color: "#334155", maxWidth: 230 }}>
            <span style={{ width: 11, height: 11, borderRadius: 3, background: "#0A66C2", flex: "none" }} />
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              Java Spring Boot Developer — XYZ
            </span>
          </div>
          <div style={{ flex: 1 }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 9, padding: "7px 11px", background: "#F1F4F8", borderBottom: "1px solid #D3DBE6" }}>
          <span style={{ color: "#94A3B8", fontSize: 11 }}>←  →  ⟳</span>
          <div style={{ flex: 1, minWidth: 0, height: 24, borderRadius: 99, background: "#fff", border: "1px solid #E3E8EF", display: "flex", alignItems: "center", gap: 6, padding: "0 10px", fontFamily: "var(--font-mono)", fontSize: 11, color: "#64748B" }}>
            <span style={{ color: "#12915C" }}>⚿</span>
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              jobs.example.com/xyz-technologies/java-spring-boot-developer
            </span>
          </div>
          <div style={{ flex: "none", width: 22, height: 22, borderRadius: 6, background: "#2F5BEA", display: "grid", placeItems: "center", fontFamily: "var(--font-mono)", fontSize: 9.5, fontWeight: 600, color: "#fff" }}>
            Jj
          </div>
        </div>

        <div style={{ position: "relative", height: 576, background: "#F8FAFC", overflow: "hidden" }}>
          <div style={{ padding: "22px 26px", display: "grid", gap: 11, maxWidth: 560, opacity: 0.55 }}>
            <div style={{ height: 13, width: "62%", borderRadius: 4, background: "#D8DFE9" }} />
            <div style={{ height: 9, width: "38%", borderRadius: 4, background: "#E3E8EF" }} />
            <div style={{ height: 1, background: "#E3E8EF", margin: "5px 0" }} />
            {EXTENSION_SKELETON.map((w, i) => (
              <div key={i} style={{ height: 8, borderRadius: 4, background: "#E7ECF2", width: w }} />
            ))}
          </div>

          <div style={{ position: "absolute", top: 10, right: 14, width: 352, background: "#fff", border: "1px solid #D3DBE6", borderRadius: 11, boxShadow: "0 12px 32px rgba(15,23,42,.16)", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", background: "#0C1425" }}>
              <div style={{ width: 20, height: 20, borderRadius: 5, background: "#2F5BEA", display: "grid", placeItems: "center", fontFamily: "var(--font-mono)", fontSize: 9.5, fontWeight: 600, color: "#fff", flex: "none" }}>
                Jj
              </div>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#E2E8F0", flex: 1 }}>
                Java Job Copilot
              </span>
              <span style={{ fontSize: 9.5, fontFamily: "var(--font-mono)", color: "#4ADE80", background: "#132A1F", border: "1px solid #1E4634", padding: "1px 5px", borderRadius: 4 }}>
                page detected
              </span>
            </div>

            <div style={{ padding: "11px 12px", borderBottom: "1px solid #EEF1F6" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 }}>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 620, color: "#0F172A", letterSpacing: "-.01em" }}>
                    Java Spring Boot Developer
                  </div>
                  <div style={{ fontSize: 11.5, color: "#64748B", marginTop: 2 }}>
                    XYZ Technologies · Hyderabad · 1–3 yrs
                  </div>
                </div>
                <MatchScore value={EXTENSION_MATCH} size="md" />
              </div>
            </div>

            <div style={{ padding: "11px 12px", borderBottom: "1px solid #EEF1F6", display: "grid", gap: 9 }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".09em", textTransform: "uppercase", color: "#12915C", marginBottom: 6 }}>
                  Strong
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {EXTENSION_STRONG_SKILLS.map((s) => (
                    <span
                      key={s}
                      style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#0B6E45", background: "#F3FBF6", border: "1px solid #C9EBD9", padding: "2px 6px", borderRadius: 4 }}
                    >
                      ✓ {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".09em", textTransform: "uppercase", color: "#D97706", marginBottom: 6 }}>
                  Weak
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {EXTENSION_WEAK_SKILLS.map((s) => (
                    <span
                      key={s}
                      style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#9A4A08", background: "#FFFBF4", border: "1px dashed #F0B67A", padding: "2px 6px", borderRadius: 4 }}
                    >
                      ⚠ {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ padding: "10px 12px", display: "grid", gap: 6 }}>
              <Link
                href="/jobs/1"
                className="hover:bg-[#2449C4]"
                style={{ width: "100%", textAlign: "center", fontSize: 12.5, fontWeight: 620, padding: 8, borderRadius: 7, border: "1px solid #2F5BEA", background: "#2F5BEA", color: "#fff", cursor: "pointer" }}
              >
                Analyze Job
              </Link>
              <Link
                href="/jobs"
                className="hover:bg-[#F8FAFC]"
                style={{ width: "100%", textAlign: "center", fontSize: 12.5, fontWeight: 560, padding: 8, borderRadius: 7, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
              >
                Save Job
              </Link>
              <Link
                href="/applications/prepare/1"
                className="hover:bg-[#F8FAFC]"
                style={{ width: "100%", textAlign: "center", fontSize: 12.5, fontWeight: 560, padding: 8, borderRadius: 7, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
              >
                Prepare Application
              </Link>
              <Link
                href="/networking/1"
                className="hover:bg-[#F8FAFC]"
                style={{ width: "100%", textAlign: "center", fontSize: 12.5, fontWeight: 560, padding: 8, borderRadius: 7, border: "1px solid #E3E8EF", background: "#fff", color: "#334155", cursor: "pointer" }}
              >
                Prepare Recruiter Message
              </Link>
            </div>

            <div style={{ padding: "8px 12px", background: "#FCFDFE", borderTop: "1px solid #EEF1F6", display: "flex", alignItems: "center", gap: 7 }}>
              <span style={{ color: "#94A3B8", fontSize: 11 }}>⚿</span>
              <span style={{ fontSize: 10.5, color: "#64748B", lineHeight: 1.4 }}>
                Reads the page you are on. Sends nothing, applies to nothing, messages no one.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 12 }}>
        {EXTENSION_STATES.map((st) => (
          <section key={st.name} style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "9px 12px", borderBottom: "1px solid #EEF1F6" }}>
              <h3 style={{ margin: 0, fontSize: 10.5, letterSpacing: ".09em", textTransform: "uppercase", color: "#64748B", fontWeight: 700 }}>
                {st.name}
              </h3>
            </div>
            <div style={{ padding: "14px 12px", minHeight: 118, display: "grid", placeItems: "center", textAlign: "center", gap: 8 }}>
              <div style={{ display: "grid", gap: 7, justifyItems: "center" }}>
                <span style={{ fontSize: 16, color: st.iconColor }}>{st.icon}</span>
                <div style={{ fontSize: 12.5, fontWeight: 580, color: "#0F172A" }}>{st.title}</div>
                <div style={{ fontSize: 11.5, color: "#64748B", lineHeight: 1.45, maxWidth: 230 }}>{st.body}</div>
                {st.cta && (
                  <span style={{ fontSize: 11.5, fontWeight: 600, color: "#2F5BEA", marginTop: 2 }}>{st.cta}</span>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
