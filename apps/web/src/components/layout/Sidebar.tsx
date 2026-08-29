"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth/AuthProvider";

interface NavItem {
  href: string;
  label: string;
  icon: string;
  count?: string;
  tone?: "accent" | "danger";
}

const NAV_MAIN: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: "▦" },
  { href: "/jobs", label: "Jobs", icon: "◧", count: "12", tone: "accent" },
  { href: "/applications", label: "Applications", icon: "▤", count: "8" },
  { href: "/drives", label: "Placement Drives", icon: "◈", count: "1", tone: "danger" },
  { href: "/profile", label: "Profile", icon: "◍" },
  { href: "/resume", label: "Resume", icon: "▧", count: "2" },
  { href: "/networking", label: "Networking", icon: "◎", count: "2" },
  { href: "/interviews", label: "Interviews", icon: "◐", count: "1", tone: "accent" },
  { href: "/skill-gaps", label: "Skill Gaps", icon: "◔" },
  { href: "/projects", label: "Projects", icon: "▥" },
  { href: "/analytics", label: "Analytics", icon: "◫" },
  { href: "/settings", label: "Settings", icon: "⚙" },
];

const NAV_TOOLS: NavItem[] = [
  { href: "/assistant", label: "AI Assistant", icon: "✦" },
  { href: "/extension", label: "Browser Extension", icon: "◱" },
  { href: "/kit", label: "Component Kit", icon: "◰" },
];

function countColors(tone: NavItem["tone"]) {
  if (tone === "danger") return { bg: "#3F1414", fg: "#FCA5A5" };
  if (tone === "accent") return { bg: "#1E2F5C", fg: "#A5B4FC" };
  return { bg: "#1B2842", fg: "#94A3B8" };
}

function NavRow({ item, active }: { item: NavItem; active: boolean }) {
  const c = countColors(item.tone);
  return (
    <Link
      href={item.href}
      className="hover:bg-[#16233C] hover:text-[#E2E8F0]"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 9,
        width: "100%",
        textAlign: "left",
        padding: "6px 9px",
        borderRadius: 6,
        fontSize: 12.5,
        fontWeight: active ? 620 : 500,
        cursor: "pointer",
        background: active ? "#1B2A47" : "transparent",
        color: active ? "#FFFFFF" : "#8FA0B8",
      }}
    >
      <span style={{ width: 15, flex: "none", textAlign: "center", fontFamily: "var(--font-mono)", fontSize: 11, opacity: 0.75 }}>
        {item.icon}
      </span>
      <span style={{ flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
        {item.label}
      </span>
      {item.count && (
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            fontWeight: 600,
            padding: "1px 5px",
            borderRadius: 4,
            background: c.bg,
            color: c.fg,
          }}
        >
          {item.count}
        </span>
      )}
    </Link>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  const initials = user?.email ? user.email.slice(0, 2).toUpperCase() : "--";

  const handleSignOut = () => {
    logout();
    router.push("/login");
  };

  return (
    <aside
      style={{
        width: 224,
        flex: "none",
        background: "#0C1425",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid #0C1425",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 9, padding: "15px 14px 14px" }}>
        <div
          style={{
            width: 26,
            height: 26,
            flex: "none",
            borderRadius: 7,
            background: "#2F5BEA",
            display: "grid",
            placeItems: "center",
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            fontWeight: 600,
            color: "#fff",
            letterSpacing: "-.03em",
          }}
        >
          Jj
        </div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 640, color: "#F1F5F9", letterSpacing: "-.01em", lineHeight: 1.2 }}>
            Java Job Agent
          </div>
          <div style={{ fontSize: 10, color: "#64748B", fontFamily: "var(--font-mono)", letterSpacing: ".02em" }}>
            spring-boot · backend
          </div>
        </div>
      </div>

      <nav className="jja-scroll" style={{ flex: 1, overflowY: "auto", padding: "4px 8px 12px", display: "flex", flexDirection: "column", gap: 1 }}>
        {NAV_MAIN.map((item) => (
          <NavRow key={item.href} item={item} active={isActive(item.href)} />
        ))}

        <div style={{ height: 1, background: "#1B2842", margin: "10px 9px 8px" }} />
        <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: ".11em", textTransform: "uppercase", color: "#475569", padding: "0 9px 5px" }}>
          Toolkit
        </div>
        {NAV_TOOLS.map((item) => (
          <NavRow key={item.href} item={item} active={isActive(item.href)} />
        ))}
      </nav>

      <div style={{ padding: 10, borderTop: "1px solid #1B2842" }}>
        <Link
          href="/assistant"
          className="hover:border-[#2F5BEA] hover:bg-[#132241]"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            width: "100%",
            textAlign: "left",
            padding: "8px 9px",
            borderRadius: 7,
            border: "1px solid #24365C",
            background: "#111D33",
            cursor: "pointer",
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: 99, background: "#4ADE80", flex: "none", animation: "jjaPulse 2.4s ease-in-out infinite" }} />
          <span style={{ flex: 1, minWidth: 0 }}>
            <span style={{ display: "block", fontSize: 11.5, fontWeight: 620, color: "#E2E8F0", lineHeight: 1.25 }}>
              What should I do today?
            </span>
            <span style={{ display: "block", fontSize: 10, color: "#64748B", fontFamily: "var(--font-mono)" }}>
              5 actions queued
            </span>
          </span>
        </Link>
        <button
          type="button"
          onClick={handleSignOut}
          title="Sign out"
          className="hover:bg-[#16233C]"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "9px 4px 2px",
            width: "100%",
            border: 0,
            background: "none",
            cursor: "pointer",
            textAlign: "left",
            borderRadius: 6,
          }}
        >
          <div
            style={{
              width: 24,
              height: 24,
              flex: "none",
              borderRadius: 99,
              background: "#1E293B",
              border: "1px solid #2A3A55",
              display: "grid",
              placeItems: "center",
              fontSize: 10.5,
              fontWeight: 640,
              color: "#94A3B8",
              fontFamily: "var(--font-mono)",
            }}
          >
            {initials}
          </div>
          <div style={{ minWidth: 0, flex: 1 }}>
            <div
              style={{
                fontSize: 11.5,
                fontWeight: 580,
                color: "#CBD5E1",
                lineHeight: 1.2,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {user?.email ?? "Loading…"}
            </div>
            <div style={{ fontSize: 10, color: "#475569" }}>Job search · Active</div>
          </div>
          <span style={{ color: "#475569", fontSize: 11 }}>⏻</span>
        </button>
      </div>
    </aside>
  );
}
