"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth/AuthProvider";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/login");
    }
  }, [isLoading, user, router]);

  if (isLoading || !user) {
    return (
      <div style={{ display: "grid", placeItems: "center", height: "100vh", background: "#F8FAFC" }}>
        <span style={{ fontSize: 12.5, color: "#64748B" }}>Loading…</span>
      </div>
    );
  }

  return <>{children}</>;
}
