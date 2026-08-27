import type { Job } from "@/lib/types";

export interface PaletteSwatch {
  hex: string;
  name: string;
}

export const KIT_PALETTE: PaletteSwatch[] = [
  { hex: "#0C1425", name: "nav" },
  { hex: "#0F172A", name: "text" },
  { hex: "#475569", name: "text-2" },
  { hex: "#94A3B8", name: "text-3" },
  { hex: "#E3E8EF", name: "border" },
  { hex: "#F8FAFC", name: "canvas" },
  { hex: "#2F5BEA", name: "accent" },
  { hex: "#12915C", name: "success" },
  { hex: "#D97706", name: "warn" },
  { hex: "#DC2626", name: "danger" },
  { hex: "#7C3AED", name: "ai" },
];

export const KIT_JOB: Job = {
  title: "Java Spring Boot Developer",
  company: "ABC Technologies",
  location: "Bangalore",
  exp: "0–2 yrs",
  match: 94,
  have: ["Java", "Spring Boot", "REST", "JPA", "MySQL"],
  missing: ["Kafka", "AWS"],
  posted: "Posted 2h ago",
  deadline: "Closes in 6 days",
  source: "LinkedIn",
};

export interface TimelineEntry {
  date: string;
  label: string;
  dot: string;
  fg: string;
}

export const KIT_TIMELINE: TimelineEntry[] = [
  { date: "Aug 26", label: "Identified", dot: "#12915C", fg: "#334155" },
  { date: "Aug 28", label: "Connected", dot: "#12915C", fg: "#334155" },
  { date: "Aug 22", label: "Replied", dot: "#2F5BEA", fg: "#0F172A" },
  { date: "Sep 01", label: "Follow-up due", dot: "#DC2626", fg: "#A3170F" },
];

export interface KitState {
  name: string;
  bd: string;
  headBg: string;
  headFg: string;
  isSkeleton: boolean;
  isSpinner: boolean;
  isPlain: boolean;
  icon?: string;
  iconColor?: string;
  title?: string;
  body?: string;
  cta?: string;
}

type PlainTone = "hot" | "warm" | "cool" | "good" | "flat";

const PLAIN_TONE_COLORS: Record<PlainTone, [bd: string, headBg: string, headFg: string]> = {
  hot: ["#FCA5A5", "#FFFBFB", "#A3170F"],
  warm: ["#FDBA74", "#FFFCF7", "#9A4A08"],
  cool: ["#C7D2FE", "#F8FAFF", "#2F5BEA"],
  good: ["#A7E3C4", "#FAFEFB", "#0B6E45"],
  flat: ["#E3E8EF", "#FCFDFE", "#64748B"],
};

function plain(
  name: string,
  icon: string,
  iconColor: string,
  title: string,
  body: string,
  cta: string,
  tone: PlainTone
): KitState {
  const [bd, headBg, headFg] = PLAIN_TONE_COLORS[tone];
  return {
    name,
    icon,
    iconColor,
    title,
    body,
    cta,
    bd,
    headBg,
    headFg,
    isPlain: true,
    isSkeleton: false,
    isSpinner: false,
  };
}

export const KIT_STATES: KitState[] = [
  {
    name: "Loading",
    bd: "#E3E8EF",
    headBg: "#FCFDFE",
    headFg: "#64748B",
    isSkeleton: true,
    isSpinner: false,
    isPlain: false,
  },
  plain("Empty", "◌", "#CBD5E1", "No jobs saved yet", "Saved jobs appear here. Start from the Jobs page or the extension.", "Browse jobs", "flat"),
  plain("Error", "!", "#DC2626", "Could not reach Naukri", "The source timed out. Your other four sources loaded normally.", "Retry", "hot"),
  plain("Success", "✓", "#12915C", "Application submitted", "Tracked as applied with backend-v3. Follow-up scheduled for Sep 03.", "View application", "good"),
  plain("Partial data", "◐", "#D97706", "3 of 5 sources loaded", "LinkedIn and the placement feed are still syncing. Showing what we have.", "Refresh", "warm"),
  {
    name: "AI processing",
    bd: "#C7D2FE",
    headBg: "#F8FAFF",
    headFg: "#2F5BEA",
    isSpinner: true,
    isSkeleton: false,
    isPlain: false,
    body: "Scoring 12 new postings against your profile…",
  },
  plain("No match", "⊘", "#94A3B8", "Nothing above 75% today", "12 postings scanned, none cleared your threshold. Lower it or widen locations.", "Adjust filters", "flat"),
  plain("Deadline warning", "!", "#DC2626", "TCS drive closes in 4 hours", "Eligibility passes and your pack is ready. This is the last reminder.", "Review & apply", "hot"),
  plain("Completed", "✓", "#12915C", "Weekly review done", "5 priorities cleared. Next review Sunday evening.", "See summary", "good"),
];
