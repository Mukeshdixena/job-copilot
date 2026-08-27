import type { Job } from "@/lib/types";

type Tone = "hot" | "warm" | "cool" | "flat";

const TONES: Record<Tone, { bg: string; bd: string; fg: string }> = {
  hot: { bg: "#FEF2F2", bd: "#FCA5A5", fg: "#A3170F" },
  warm: { bg: "#FFF7ED", bd: "#FDBA74", fg: "#9A4A08" },
  cool: { bg: "#EEF2FF", bd: "#C7D2FE", fg: "#2F5BEA" },
  flat: { bg: "#F1F5F9", bd: "#E3E8EF", fg: "#475569" },
};

export interface Priority {
  n: number;
  title: string;
  detail: string;
  cta: string;
  href: string;
  tone: Tone;
  primary?: boolean;
}

export const PRIORITIES: Priority[] = [
  { n: 1, title: "3 high-match jobs need review", detail: "94%, 91% and 88% match · 2 close within 4 days", cta: "Review jobs", href: "/jobs", tone: "cool", primary: true },
  { n: 2, title: "2 recruiter follow-ups are due", detail: "Priya Nair (TCS) · Arjun Rao (Zeta) — both 4 days silent", cta: "Open follow-ups", href: "/networking", tone: "warm" },
  { n: 3, title: "1 placement drive closes tonight", detail: "TCS Java Developer · eligibility confirmed · 11:59 PM", cta: "Apply now", href: "/drives", tone: "hot", primary: true },
  { n: 4, title: "Resume has 2 improvement opportunities", detail: "Spring Boot bullets lack production depth; no testing evidence", cta: "See suggestions", href: "/resume", tone: "warm" },
  { n: 5, title: "Interview preparation is 68% complete", detail: "System Design and Microservices are your weakest tracks", cta: "Continue prep", href: "/interviews", tone: "flat" },
];

export function priorityColors(tone: Tone, primary?: boolean) {
  const t = TONES[tone];
  return {
    numBg: t.bg,
    numBd: t.bd,
    numFg: t.fg,
    ctaBg: primary ? "#2F5BEA" : "#fff",
    ctaFg: primary ? "#fff" : "#334155",
    ctaBd: primary ? "#2F5BEA" : "#E3E8EF",
  };
}

export interface Deadline {
  mon: string;
  day: string;
  title: string;
  meta: string;
  urgency: string;
  cta: string;
  href: string;
  tone: Tone;
}

export const DEADLINES: Deadline[] = [
  { mon: "Aug", day: "26", title: "TCS Java Developer drive", meta: "Placement drive · applications close 11:59 PM", urgency: "Today", cta: "Prepare", href: "/drives", tone: "hot" },
  { mon: "Aug", day: "27", title: "XYZ Technologies interview", meta: "Round 2 · Java Backend · 11:00 AM", urgency: "Tomorrow", cta: "Prep now", href: "/interviews", tone: "warm" },
  { mon: "Aug", day: "28", title: "Infosys online assessment", meta: "Aptitude + Java coding · 90 min window", urgency: "2 days", cta: "Practice", href: "/drives", tone: "warm" },
  { mon: "Sep", day: "01", title: "Follow-up: Priya Nair", meta: "Recruiter at TCS · last contact Aug 28", urgency: "6 days", cta: "Draft message", href: "/networking/priya-nair", tone: "cool" },
  { mon: "Sep", day: "03", title: "Zeta Suite application", meta: "Spring Boot Engineer · posting expires", urgency: "8 days", cta: "Prepare", href: "/applications/prepare/zeta-suite", tone: "flat" },
];

export function deadlineColors(tone: Tone) {
  const t = TONES[tone];
  return { chipBg: t.bg, chipBd: t.bd, chipFg: t.fg };
}

export interface FunnelStage {
  label: string;
  n: number;
  href: string;
  active?: boolean;
}

export const FUNNEL: FunnelStage[] = [
  { label: "Saved", n: 34, href: "/jobs" },
  { label: "Ready to apply", n: 9, href: "/jobs", active: true },
  { label: "Applied", n: 22, href: "/applications" },
  { label: "Assessment", n: 5, href: "/applications" },
  { label: "Screening", n: 4, href: "/applications" },
  { label: "Interview", n: 3, href: "/interviews", active: true },
  { label: "Offer", n: 0, href: "/applications" },
  { label: "Rejected", n: 7, href: "/applications" },
];

export const DASHBOARD_JOBS: Job[] = [
  { title: "Java Spring Boot Developer", company: "ABC Technologies", location: "Bangalore", exp: "0–2 yrs", match: 94, have: ["Java", "Spring Boot", "REST", "JPA", "MySQL", "Docker"], missing: ["Kafka", "AWS"], posted: "Posted 2h ago", deadline: null, source: "LinkedIn" },
  { title: "Backend Engineer — Java", company: "Zeta Suite", location: "Bangalore · Hybrid", exp: "1–3 yrs", match: 91, have: ["Java", "Spring Boot", "REST", "SQL"], missing: ["Kafka", "Redis", "AWS"], posted: "Posted 6h ago", deadline: "Closes in 8 days", source: "Naukri", flag: "Referral path" },
  { title: "Java Developer (Microservices)", company: "Infosys", location: "Pune · Onsite", exp: "0–2 yrs", match: 88, have: ["Java", "Spring Boot", "JPA", "MySQL"], missing: ["Microservices depth", "Kubernetes"], posted: "Posted 1d ago", deadline: "Closes tonight", source: "Campus" },
];

export const PROFILE_HEALTH = [
  { label: "Resume", value: 88 },
  { label: "GitHub", value: 72 },
  { label: "Projects", value: 76 },
  { label: "LinkedIn", value: 79 },
  { label: "Interview readiness", value: 68 },
];

export const SKILL_GAP_SNAPSHOT = [
  { skill: "Kafka", priority: "High", reason: "Appears in 49% of matched Java JDs; no evidence on profile", demand: "49% demand" },
  { skill: "Spring Security", priority: "High", reason: "Named in 6 of your 9 ready-to-apply jobs", demand: "58% demand" },
  { skill: "System Design", priority: "High", reason: "Blocking 3 interview tracks · readiness 48%", demand: "41% demand" },
];
