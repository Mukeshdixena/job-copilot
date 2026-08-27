import type { Tone } from "@/lib/types";

export interface Stage {
  label: string;
  n: number;
  bd: string;
  fg: string;
}

function stage(label: string, n: number, hot?: boolean): Stage {
  return { label, n, bd: hot ? "#C7D2FE" : "#E3E8EF", fg: hot ? "#2F5BEA" : "#0F172A" };
}

export const STAGES: Stage[] = [
  stage("Saved", 34),
  stage("Ready to apply", 9, true),
  stage("Applied", 22),
  stage("Assessment", 5),
  stage("Screening", 4),
  stage("Interview", 3, true),
  stage("Offer", 0),
  stage("Rejected", 7),
];

export interface PipelineTab {
  label: string;
  weight: number;
  bg: string;
  fg: string;
  bd: string;
}

function tab(label: string, on: boolean): PipelineTab {
  return {
    label,
    weight: on ? 620 : 520,
    bg: on ? "#0C1425" : "#fff",
    fg: on ? "#fff" : "#475569",
    bd: on ? "#0C1425" : "#E3E8EF",
  };
}

export const TABS: PipelineTab[] = [
  tab("All", true),
  tab("Needs action", false),
  tab("Active", false),
  tab("Closed", false),
  tab("Drives", false),
];

export const COLS = ["Role", "Stage", "Applied", "Resume", "Next action", ""];

export type Urgency = "hot" | "warm" | "cool";

export function actionColors(urgency: Urgency) {
  if (urgency === "hot") return { dot: "#DC2626", color: "#A3170F" };
  if (urgency === "warm") return { dot: "#D97706", color: "#9A4A08" };
  return { dot: "#CBD5E1", color: "#64748B" };
}

export interface ApplicationRow {
  title: string;
  company: string;
  source: string;
  stage: string;
  tone: Tone;
  applied: string;
  resume: string;
  action: string;
  urgency: Urgency;
  href: string;
}

export const ROWS: ApplicationRow[] = [
  { title: "Java Backend Developer", company: "XYZ Technologies", source: "LinkedIn", stage: "Interview", tone: "accent", applied: "Aug 14", resume: "backend-v3", action: "Round 2 tomorrow, 11:00 AM", urgency: "hot", href: "/interviews" },
  { title: "Java Developer", company: "TCS", source: "Campus", stage: "Assessment", tone: "violet", applied: "Aug 20", resume: "campus-v2", action: "Aptitude test closes tonight", urgency: "hot", href: "/drives" },
  { title: "Spring Boot Engineer", company: "Zeta Suite", source: "Naukri", stage: "Screening", tone: "warn", applied: "Aug 18", resume: "backend-v3", action: "Recruiter silent 4 days — follow up", urgency: "warm", href: "/networking/1" },
  { title: "Backend Engineer", company: "Freshworks", source: "Company site", stage: "Applied", tone: "neutral", applied: "Aug 22", resume: "backend-v3", action: "Waiting — 4 days elapsed", urgency: "cool", href: "/jobs/1" },
  { title: "Java Developer (Microservices)", company: "Infosys", source: "Campus", stage: "Assessment", tone: "violet", applied: "Aug 19", resume: "campus-v2", action: "Coding round Aug 28", urgency: "warm", href: "/drives" },
  { title: "Associate Software Engineer", company: "Mindtree", source: "Naukri", stage: "Applied", tone: "neutral", applied: "Aug 23", resume: "backend-v2", action: "Waiting", urgency: "cool", href: "/jobs/1" },
  { title: "Backend Developer — Java 17", company: "Razorpay", source: "LinkedIn", stage: "Screening", tone: "warn", applied: "Aug 12", resume: "backend-v3", action: "Referral intro requested", urgency: "warm", href: "/networking/1" },
  { title: "Java Software Engineer", company: "Wipro", source: "Campus", stage: "Rejected", tone: "danger", applied: "Aug 05", resume: "campus-v1", action: "Reason: Kafka experience", urgency: "cool", href: "/skill-gaps" },
  { title: "Backend Intern → FTE", company: "Postman", source: "Referral", stage: "Interview", tone: "accent", applied: "Aug 08", resume: "backend-v3", action: "Waiting on panel feedback", urgency: "cool", href: "/interviews" },
];
