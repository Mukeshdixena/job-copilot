export const PROJECT = {
  name: "Order Management API",
  stackLine: "Spring Boot 3 · JPA · MySQL · Docker · deployed manually",
  repo: "github.com/mukesh-k/order-api",
  health: 76,
  healthColor: "#9A4A08",
  achievable: 88,
};

export type CheckState = "ok" | "warn" | "bad";

const CHECK_STYLES: Record<CheckState, { icon: string; color: string; textColor: string }> = {
  ok: { icon: "✓", color: "#12915C", textColor: "#334155" },
  warn: { icon: "⚠", color: "#D97706", textColor: "#334155" },
  bad: { icon: "✕", color: "#DC2626", textColor: "#64748B" },
};

export function checkStyle(state: CheckState) {
  return CHECK_STYLES[state];
}

export interface HealthCheck {
  label: string;
  state: CheckState;
  note: string;
}

export const HEALTH_CHECKS: HealthCheck[] = [
  { label: "Backend fundamentals", state: "ok", note: "strong" },
  { label: "Spring Boot", state: "ok", note: "strong" },
  { label: "REST", state: "ok", note: "14 endpoints" },
  { label: "Database", state: "ok", note: "11 tables" },
  { label: "Testing", state: "warn", note: "1 test" },
  { label: "Redis", state: "warn", note: "none" },
  { label: "Docker", state: "warn", note: "compose only" },
  { label: "CI/CD", state: "bad", note: "missing" },
  { label: "Observability", state: "bad", note: "missing" },
];

export type PlanTone = "hot" | "warm" | "cool";

const PLAN_TONE_STYLES: Record<PlanTone, { numBg: string; numBd: string; numFg: string }> = {
  hot: { numBg: "#FEF2F2", numBd: "#FCA5A5", numFg: "#A3170F" },
  warm: { numBg: "#FFF7ED", numBd: "#FDBA74", numFg: "#9A4A08" },
  cool: { numBg: "#F1F5F9", numBd: "#E3E8EF", numFg: "#475569" },
};

export interface PlanStep {
  n: number;
  title: string;
  what: string;
  gain: string;
  effort: string;
  unblocks: string;
  tone: PlanTone;
}

export function planStyle(tone: PlanTone) {
  const t = PLAN_TONE_STYLES[tone];
  const primary = tone === "hot" || tone === "warm";
  return {
    numBg: t.numBg,
    numBd: t.numBd,
    numFg: t.numFg,
    cta: primary ? "Start" : "Queue",
    ctaBg: primary ? "#2F5BEA" : "#fff",
    ctaFg: primary ? "#fff" : "#334155",
    ctaBd: primary ? "#2F5BEA" : "#E3E8EF",
  };
}

export const IMPROVEMENT_PLAN: PlanStep[] = [
  {
    n: 1,
    title: "Add CI on every push",
    what: "GitHub Actions running build plus tests. Recruiters open the repo and see a green check; interviewers stop asking whether you have used CI.",
    gain: "+5 health",
    effort: "45 min",
    unblocks: "2 questions",
    tone: "hot",
  },
  {
    n: 2,
    title: "Service-layer unit tests with Mockito",
    what: "Cover the order and stock services. This is the single item the profile audit flagged as critical, and it is named in 39% of your matched postings.",
    gain: "+6 health",
    effort: "3 hours",
    unblocks: "audit critical #2",
    tone: "hot",
  },
  {
    n: 3,
    title: "Structured logging with correlation IDs",
    what: "Log JSON with a request ID threaded through the order flow. Gives you a real answer to 'how would you debug this in production'.",
    gain: "+4 health",
    effort: "2 hours",
    unblocks: "3 questions",
    tone: "warm",
  },
  {
    n: 4,
    title: "Actuator health and metrics endpoints",
    what: "Expose /health and /metrics. Small change, and it makes the deployment story credible.",
    gain: "+3 health",
    effort: "30 min",
    unblocks: "observability gap",
    tone: "warm",
  },
  {
    n: 5,
    title: "Redis cache on the product lookup",
    what: "Cache the hot read path with a TTL and an eviction note in the README. Closes the Redis gap with real evidence.",
    gain: "+4 health",
    effort: "4 hours",
    unblocks: "Redis gap",
    tone: "cool",
  },
  {
    n: 6,
    title: "Kafka consumer for stock decrement",
    what: "Move the stock decrement out of the request path onto a topic. This is the highest-value gap on your whole profile.",
    gain: "+8 health",
    effort: "2 weeks",
    unblocks: "Kafka gap · 49% of JDs",
    tone: "cool",
  },
];

export const PROVES: string[] = [
  "You can design a REST surface and keep it consistent across 14 endpoints.",
  "You understand transaction boundaries — the order flow is one unit of work.",
  "You have hit and solved a real correctness bug (duplicate orders under retry).",
  "You can containerise an application and its database together.",
];

export interface Signal {
  k: string;
  v: string;
  color: string;
}

export const SIGNALS: Signal[] = [
  { k: "Commits", v: "184", color: "#0B6E45" },
  { k: "Last commit", v: "6 days ago", color: "#0B6E45" },
  { k: "README quality", v: "good", color: "#0B6E45" },
  { k: "Test files", v: "1", color: "#9A4A08" },
  { k: "CI workflows", v: "0", color: "#A3170F" },
  { k: "Open issues", v: "3", color: "#475569" },
];

export const UNLOCKS: string[] = [
  "How do you make an endpoint idempotent?",
  "Walk me through a transaction boundary you designed.",
  "How would you debug a slow order lookup in production?",
  "What would you change if traffic grew 100×?",
];
