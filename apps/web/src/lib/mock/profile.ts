export interface ProfileLink {
  icon: string;
  label: string;
  color: string;
}

export const LINKS: ProfileLink[] = [
  { icon: "◈", label: "github.com/mukesh-k", color: "#0B6E45" },
  { icon: "◈", label: "linkedin.com/in/mukesh-k", color: "#0B6E45" },
  { icon: "◈", label: "mukesh.dev", color: "#0B6E45" },
  { icon: "○", label: "leetcode — not linked", color: "#9A4A08" },
];

export type SectionState = "good" | "warn" | "bad" | "active";

export interface ProfileSection {
  label: string;
  n: string;
  state: SectionState;
}

export const SECTIONS: ProfileSection[] = [
  { label: "Personal", n: "✓", state: "good" },
  { label: "Target role", n: "✓", state: "active" },
  { label: "Summary", n: "✓", state: "good" },
  { label: "Skills", n: "24", state: "good" },
  { label: "Experience", n: "2", state: "warn" },
  { label: "Projects", n: "4", state: "warn" },
  { label: "Education", n: "✓", state: "good" },
  { label: "Certifications", n: "1", state: "warn" },
  { label: "Links", n: "3", state: "good" },
  { label: "Achievements", n: "3", state: "good" },
  { label: "Preferences", n: "✓", state: "good" },
  { label: "Evidence", n: "18", state: "bad" },
];

export function sectionColors(state: SectionState) {
  const dot =
    state === "good" ? "#12915C" : state === "warn" ? "#D97706" : state === "bad" ? "#DC2626" : "#CBD5E1";
  const active = state === "active";
  return {
    dot,
    bg: active ? "#F8FAFF" : "#fff",
    fg: active ? "#2F5BEA" : "#334155",
    weight: active ? 620 : 520,
  };
}

export const TARGET_TITLES: string[] = [
  "Java Developer",
  "Java Backend Developer",
  "Spring Boot Developer",
  "Java Software Engineer",
  "Backend Software Engineer",
  "SDE — Backend",
];

export interface Pref {
  k: string;
  v: string;
}

export const PREFS: Pref[] = [
  { k: "Experience band", v: "0–2 years" },
  { k: "Locations", v: "Bangalore, Hyderabad, Pune" },
  { k: "Work mode", v: "Hybrid or remote" },
  { k: "Compensation", v: "₹6–9 LPA" },
];

export interface LegendItem {
  label: string;
  color: string;
}

export const LEGEND: LegendItem[] = [
  { label: "Verified", color: "#12915C" },
  { label: "User claimed", color: "#2F5BEA" },
  { label: "AI inferred", color: "#7C3AED" },
  { label: "Missing", color: "#DC2626" },
];

export type SkillTier = "Advanced" | "Intermediate" | "Beginner" | "None";
export type Provenance = "Verified" | "User claimed" | "AI inferred" | "Missing";
export type ReadyState = "Yes" | "Partial" | "No";

const TIER_COLORS: Record<SkillTier, { bg: string; bd: string; fg: string }> = {
  Advanced: { bg: "#ECFDF3", bd: "#A7E3C4", fg: "#0B6E45" },
  Intermediate: { bg: "#EEF2FF", bd: "#C7D2FE", fg: "#2F5BEA" },
  Beginner: { bg: "#FFF7ED", bd: "#FDBA74", fg: "#9A4A08" },
  None: { bg: "#F1F5F9", bd: "#E3E8EF", fg: "#64748B" },
};

const PROV_COLORS: Record<Provenance, { bg: string; bd: string; fg: string }> = {
  Verified: { bg: "#ECFDF3", bd: "#A7E3C4", fg: "#0B6E45" },
  "User claimed": { bg: "#EEF2FF", bd: "#C7D2FE", fg: "#2F5BEA" },
  "AI inferred": { bg: "#F5F3FF", bd: "#DDD6FE", fg: "#5B21B6" },
  Missing: { bg: "#FEF2F2", bd: "#FCA5A5", fg: "#A3170F" },
};

const READY_COLORS: Record<ReadyState, string> = {
  Yes: "#0B6E45",
  Partial: "#9A4A08",
  No: "#A3170F",
};

export interface Skill {
  name: string;
  tier: SkillTier;
  provenance: Provenance;
  evidence: string[];
  ready: ReadyState;
}

export const SKILLS: Skill[] = [
  { name: "Java", tier: "Advanced", provenance: "Verified", evidence: ["Project: Order Management API", "Project: Quotation System", "Coursework + 340 problems solved"], ready: "Yes" },
  { name: "Spring Boot", tier: "Intermediate", provenance: "Verified", evidence: ["Project: Order Management API", "Project: Quotation System", "Production usage"], ready: "Yes" },
  { name: "REST APIs", tier: "Intermediate", provenance: "Verified", evidence: ["14 endpoints shipped", "OpenAPI documented"], ready: "Yes" },
  { name: "JPA / Hibernate", tier: "Intermediate", provenance: "Verified", evidence: ["Schema of 11 tables", "Custom JPQL queries"], ready: "Partial" },
  { name: "MySQL", tier: "Intermediate", provenance: "Verified", evidence: ["Both projects", "Index tuning on order lookup"], ready: "Yes" },
  { name: "JUnit / Mockito", tier: "Beginner", provenance: "User claimed", evidence: ["Integration tests on ordering flow"], ready: "Partial" },
  { name: "Kafka", tier: "None", provenance: "Missing", evidence: [], ready: "No" },
  { name: "AWS", tier: "None", provenance: "Missing", evidence: [], ready: "No" },
];

export function skillColors(s: Skill) {
  const t = TIER_COLORS[s.tier];
  const p = PROV_COLORS[s.provenance];
  return {
    tierBg: t.bg,
    tierBd: t.bd,
    tierFg: t.fg,
    provBg: p.bg,
    provBd: p.bd,
    provFg: p.fg,
    readyColor: READY_COLORS[s.ready],
    noEvidence: s.evidence.length === 0,
  };
}

export interface Experience {
  title: string;
  org: string;
  dates: string;
  stack: string[];
  note: string;
  health?: number;
}

export const EXPERIENCE: Experience[] = [
  {
    title: "Backend Developer Intern",
    org: "Nexlify Solutions",
    dates: "Jan 2025 – Jun 2025",
    stack: ["Java 17", "Spring Boot 3", "MySQL", "Docker"],
    note: "Owned the order service. Added pagination and idempotent order creation; cut a duplicate-order bug class by moving to request keys.",
  },
  {
    title: "Order Management API",
    org: "Personal project · deployed",
    dates: "2024 – present",
    health: 76,
    stack: ["Spring Boot 3", "JPA", "MySQL", "Docker Compose", "Swagger"],
    note: "14 REST endpoints with validation, exception mapping, and integration tests on the ordering flow. No CI/CD or observability yet.",
  },
  {
    title: "Quotation System",
    org: "Freelance · 1 client",
    dates: "2024",
    health: 68,
    stack: ["Spring Boot", "Hibernate", "MySQL", "Thymeleaf"],
    note: "Quote generation and PDF export for a small manufacturer. Live with one customer; auth is basic session-based.",
  },
  {
    title: "B.E. Computer Science",
    org: "Visvesvaraya Technological University",
    dates: "2021 – 2025",
    stack: ["CGPA 7.8", "No backlogs", "2025 batch"],
    note: "Academic record verified against the placement cell export on Aug 12.",
  },
];

export interface SmallSectionRow {
  a: string;
  b: string;
}

export interface SmallSection {
  title: string;
  count: string;
  rows: SmallSectionRow[];
}

export const SMALL_SECTIONS: SmallSection[] = [
  {
    title: "Certifications",
    count: "1",
    rows: [
      { a: "Oracle Certified Associate, Java SE 8", b: "Issued Mar 2024 · verified" },
      { a: "Spring Professional — not started", b: "Recommended for Spring Security gap" },
    ],
  },
  {
    title: "Achievements",
    count: "3",
    rows: [
      { a: "Runner-up, university hackathon", b: "2024 · built the backend for a logistics tracker" },
      { a: "340 problems solved", b: "Arrays, strings, trees strongest; DP weakest" },
      { a: "Open-source: 3 merged PRs", b: "Documentation and a null-check fix" },
    ],
  },
  {
    title: "Preferences",
    count: "✓",
    rows: [
      { a: "Immediate joiner", b: "Available from first week of September" },
      { a: "Product companies preferred", b: "Service companies acceptable for first role" },
    ],
  },
  {
    title: "Evidence health",
    count: "18",
    rows: [
      { a: "6 skills lack evidence", b: "Kafka, AWS, Redis, Kubernetes, CI/CD, observability" },
      { a: "2 claims need a link", b: "Hackathon placement, open-source PRs" },
    ],
  },
];
