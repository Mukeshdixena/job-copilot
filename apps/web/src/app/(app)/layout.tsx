import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { AuthGuard } from "@/components/auth/AuthGuard";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <div style={{ display: "flex", height: "100vh", minHeight: 640, overflow: "hidden", background: "#F8FAFC", fontSize: 14 }}>
        <Sidebar />
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
          <Header />
          <main className="jja-scroll" style={{ flex: 1, minWidth: 0, overflowY: "auto", overflowX: "auto" }}>
            {children}
          </main>
        </div>
      </div>
    </AuthGuard>
  );
}
