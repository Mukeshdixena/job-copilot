import type { Tone } from "@/lib/types";

export type CheckState = "ok" | "warn" | "bad";

const CHECK_STYLES: Record<CheckState, { icon: string; color: string }> = {
  ok: { icon: "✓", color: "#0B6E45" },
  warn: { icon: "⚠", color: "#9A4A08" },
  bad: { icon: "✕", color: "#A3170F" },
};

export function checkStyle(state: CheckState) {
  return CHECK_STYLES[state];
}

export interface ProjectCheck {
  label: string;
  state: CheckState;
}

export interface Project {
  name: string;
  health: number;
  status: string;
  tone: Tone;
  meta: string;
  stack: string[];
  checks: ProjectCheck[];
  next: string;
}

export const PROJECTS: Project[] = [
  {
    name: "Order Management API",
    health: 76,
    status: "Deployed",
    tone: "success",
    meta: "Personal · 2024–present · 14 endpoints · 1.2k lines",
    stack: ["Spring Boot 3", "JPA", "MySQL", "Docker", "Swagger"],
    checks: [
      { label: "Backend fundamentals", state: "ok" },
      { label: "Spring Boot", state: "ok" },
      { label: "REST", state: "ok" },
      { label: "Database", state: "ok" },
      { label: "Testing", state: "warn" },
      { label: "Redis", state: "warn" },
      { label: "Docker depth", state: "warn" },
      { label: "CI/CD", state: "bad" },
    ],
    next: "Next: CI on push, structured logging, actuator health endpoint",
  },
  {
    name: "Quotation System",
    health: 68,
    status: "Live · 1 client",
    tone: "accent",
    meta: "Freelance · 2024 · quote generation and PDF export",
    stack: ["Spring Boot", "Hibernate", "MySQL", "Thymeleaf"],
    checks: [
      { label: "Backend fundamentals", state: "ok" },
      { label: "Spring Boot", state: "ok" },
      { label: "REST", state: "warn" },
      { label: "Database", state: "ok" },
      { label: "Testing", state: "bad" },
      { label: "Redis", state: "bad" },
      { label: "Docker", state: "bad" },
      { label: "CI/CD", state: "bad" },
    ],
    next: "Next: replace session auth with Spring Security + JWT",
  },
  {
    name: "Campus Placement Tracker",
    health: 54,
    status: "Archived",
    tone: "neutral",
    meta: "Coursework · 2023 · CRUD over student records",
    stack: ["Spring Boot", "JPA", "H2"],
    checks: [
      { label: "Backend fundamentals", state: "ok" },
      { label: "Spring Boot", state: "warn" },
      { label: "REST", state: "warn" },
      { label: "Database", state: "warn" },
      { label: "Testing", state: "bad" },
      { label: "Redis", state: "bad" },
      { label: "Docker", state: "bad" },
      { label: "CI/CD", state: "bad" },
    ],
    next: "Consider retiring this from the resume — it dilutes the stronger two",
  },
  {
    name: "URL Shortener",
    health: 47,
    status: "Unfinished",
    tone: "warn",
    meta: "Personal · 2023 · no deployment, no README",
    stack: ["Java", "Servlets", "MySQL"],
    checks: [
      { label: "Backend fundamentals", state: "warn" },
      { label: "Spring Boot", state: "bad" },
      { label: "REST", state: "warn" },
      { label: "Database", state: "ok" },
      { label: "Testing", state: "bad" },
      { label: "Redis", state: "bad" },
      { label: "Docker", state: "bad" },
      { label: "CI/CD", state: "bad" },
    ],
    next: "Either finish with Spring Boot + Redis caching, or remove it",
  },
];
