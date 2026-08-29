export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#F8FAFC",
        padding: 20,
      }}
    >
      <div style={{ width: "100%", maxWidth: 380, display: "grid", gap: 22 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9, justifyContent: "center" }}>
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: 8,
              background: "#2F5BEA",
              display: "grid",
              placeItems: "center",
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              fontWeight: 600,
              color: "#fff",
              letterSpacing: "-.03em",
            }}
          >
            Jj
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 640, color: "#0F172A", letterSpacing: "-.01em", lineHeight: 1.2 }}>
              Java Job Agent
            </div>
            <div style={{ fontSize: 10, color: "#64748B", fontFamily: "var(--font-mono)", letterSpacing: ".02em" }}>
              spring-boot · backend
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
