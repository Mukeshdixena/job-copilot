export interface Version {
  name: string;
  meta: string;
  stat: string;
  master?: boolean;
  on?: boolean;
}

export const VERSIONS: Version[] = [
  { name: "master.pdf", meta: "All experience, all projects", stat: "used as source · updated Aug 24", master: true },
  { name: "backend-v3.pdf", meta: "Spring Boot + REST product roles", stat: "12 applications · 3 interviews", on: true },
  { name: "backend-v2.pdf", meta: "Superseded by v3", stat: "8 applications · 1 interview" },
  { name: "campus-v2.pdf", meta: "Single page, placement format", stat: "6 drives · 2 assessments" },
  { name: "microservices-v1.pdf", meta: "Draft, not sent", stat: "0 applications" },
];

export function versionColors(on?: boolean) {
  return {
    bg: on ? "#F8FAFF" : "#fff",
    rail: on ? "#2F5BEA" : "transparent",
    fg: on ? "#2F5BEA" : "#0F172A",
  };
}

export interface CoverageMetric {
  label: string;
  value: number;
  text: string;
}

export const COVERAGE: CoverageMetric[] = [
  { label: "Stated requirements covered", value: 79, text: "11 / 14" },
  { label: "Keyword alignment", value: 88, text: "88%" },
  { label: "Evidence density", value: 72, text: "72%" },
  { label: "Single-page fit", value: 100, text: "fits" },
];

export type SuggestionKind = "Strengthen" | "Quantify" | "Reorder";

const KIND_COLORS: Record<SuggestionKind, { bg: string; bd: string; fg: string }> = {
  Strengthen: { bg: "#EEF2FF", bd: "#C7D2FE", fg: "#2F5BEA" },
  Quantify: { bg: "#F5F3FF", bd: "#DDD6FE", fg: "#5B21B6" },
  Reorder: { bg: "#FFF7ED", bd: "#FDBA74", fg: "#9A4A08" },
};

export function suggestionKindColors(kind: SuggestionKind) {
  return KIND_COLORS[kind];
}

export type WhyTone = "ok" | "warn";

export interface WhyItem {
  tone: WhyTone;
  text: string;
}

const WHY_STYLES: Record<WhyTone, { icon: string; color: string }> = {
  ok: { icon: "✓", color: "#12915C" },
  warn: { icon: "⚠", color: "#D97706" },
};

export function whyStyle(tone: WhyTone) {
  return WHY_STYLES[tone];
}

function ok(text: string): WhyItem {
  return { tone: "ok", text };
}

function warn(text: string): WhyItem {
  return { tone: "warn", text };
}

export interface Suggestion {
  section: string;
  kind: SuggestionKind;
  trigger: string;
  original: string;
  suggested: string;
  why: WhyItem[];
}

export const SUGGESTIONS: Suggestion[] = [
  {
    section: "Experience — Nexlify Solutions",
    kind: "Quantify",
    trigger: "job: ABC Technologies",
    original: "Worked on the order service using Spring Boot and fixed bugs.",
    suggested:
      "Owned the order service in Spring Boot 3; introduced request-key idempotency that eliminated duplicate-order defects across 14 endpoints.",
    why: [
      ok("Matches 'service ownership' in the posting"),
      ok("Based on verified profile evidence: Nexlify internship, Order Management API"),
      warn("No new experience invented — numbers taken from your own project notes"),
    ],
  },
  {
    section: "Projects — Order Management API",
    kind: "Strengthen",
    trigger: "audit: testing evidence weak",
    original: "Built a REST API for order management with MySQL database.",
    suggested:
      "Built a 14-endpoint Spring Boot 3 REST API over MySQL with JPA/Hibernate, request validation, and integration tests on the ordering flow.",
    why: [
      ok("Adds JUnit signal the posting names explicitly"),
      ok("Every element traced to recorded evidence"),
      warn("Coverage figure omitted because it is not measured yet"),
    ],
  },
  {
    section: "Skills",
    kind: "Reorder",
    trigger: "audit: lead with strengths",
    original: "Java, HTML, CSS, MySQL, Spring Boot, Git, JavaScript, REST",
    suggested: "Java 17 · Spring Boot 3 · REST · JPA/Hibernate · MySQL · Docker · JUnit · Git",
    why: [
      ok("Puts the three skills recruiters scan for first"),
      ok("Drops frontend skills that dilute a backend application"),
      warn("Kafka and AWS deliberately left off — no evidence yet"),
    ],
  },
];

export interface PreviewSection {
  head: string;
  lines: string[];
}

export const PREVIEW: PreviewSection[] = [
  {
    head: "Summary",
    lines: [
      "Backend developer focused on Java and Spring Boot. Shipped REST services with JPA/Hibernate over MySQL; comfortable owning a service end to end.",
    ],
  },
  {
    head: "Skills",
    lines: ["Java 17 · Spring Boot 3 · REST · JPA/Hibernate · MySQL · Docker · JUnit · Git"],
  },
  {
    head: "Experience",
    lines: [
      "Backend Developer Intern — Nexlify Solutions · Jan–Jun 2025",
      "· Owned the order service in Spring Boot 3; introduced request-key idempotency.",
      "· Added pagination and exception mapping across 14 endpoints.",
    ],
  },
  {
    head: "Projects",
    lines: [
      "Order Management API — Spring Boot 3, JPA, MySQL, Docker",
      "Quotation System — Spring Boot, Hibernate, live with one client",
    ],
  },
];
