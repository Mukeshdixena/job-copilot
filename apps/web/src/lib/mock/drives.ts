import type { Tone } from "@/lib/types";

export interface DriveTab {
  label: string;
  n: string;
  weight: number;
  bg: string;
  fg: string;
  bd: string;
}

export const DRIVE_TABS: DriveTab[] = [
  { label: "Closing soon", n: "2", weight: 620, bg: "#0C1425", fg: "#fff", bd: "#0C1425" },
  { label: "Upcoming", n: "6", weight: 520, bg: "#fff", fg: "#475569", bd: "#E3E8EF" },
  { label: "Eligible", n: "9", weight: 520, bg: "#fff", fg: "#475569", bd: "#E3E8EF" },
  { label: "Applied", n: "4", weight: 520, bg: "#fff", fg: "#475569", bd: "#E3E8EF" },
  { label: "Not eligible", n: "3", weight: 520, bg: "#fff", fg: "#475569", bd: "#E3E8EF" },
  { label: "Missed", n: "1", weight: 520, bg: "#fff", fg: "#475569", bd: "#E3E8EF" },
];

export interface Criterion {
  label: string;
  icon: string;
  color: string;
}

const ok = (label: string): Criterion => ({ label, icon: "✓", color: "#0B6E45" });
const no = (label: string): Criterion => ({ label, icon: "✕", color: "#A3170F" });
const wait = (label: string): Criterion => ({ label, icon: "◌", color: "#94A3B8" });

export type Urgency = "hot" | "warm" | "cool";

export interface DriveInput {
  company: string;
  role: string;
  package: string;
  match: number;
  urgency: Urgency;
  status: string;
  statusTone: Tone;
  deadline: string;
  cta: string;
  criteria: Criterion[];
  primary?: boolean;
}

export interface Drive extends DriveInput {
  cardBd: string;
  headBg: string;
  deadlineColor: string;
  ctaBg: string;
  ctaFg: string;
  ctaBd: string;
}

function drive(o: DriveInput): Drive {
  return {
    ...o,
    cardBd: o.urgency === "hot" ? "#FCA5A5" : "#E3E8EF",
    headBg: o.urgency === "hot" ? "#FFFBFB" : "#fff",
    deadlineColor: o.urgency === "hot" ? "#A3170F" : o.urgency === "warm" ? "#9A4A08" : "#334155",
    ctaBg: o.urgency === "hot" ? "#B42318" : o.primary ? "#2F5BEA" : "#fff",
    ctaFg: o.urgency === "hot" || o.primary ? "#fff" : "#334155",
    ctaBd: o.urgency === "hot" ? "#B42318" : o.primary ? "#2F5BEA" : "#E3E8EF",
  };
}

export const DRIVES: Drive[] = [
  drive({
    company: "TCS",
    role: "Java Developer",
    package: "₹7.0 LPA",
    match: 93,
    urgency: "hot",
    status: "Eligible",
    statusTone: "success",
    deadline: "TODAY — 11:59 PM",
    cta: "Prepare Application",
    criteria: [ok("Graduation year 2025"), ok("B.E. / B.Tech"), ok("CSE / IT branch"), ok("CGPA 7.8 ≥ 6.5"), ok("No active backlogs")],
  }),
  drive({
    company: "Infosys",
    role: "Systems Engineer — Java",
    package: "₹6.5 LPA",
    match: 88,
    urgency: "warm",
    status: "Assessment due",
    statusTone: "violet",
    deadline: "Aug 28 — coding round",
    cta: "Practice",
    primary: true,
    criteria: [ok("Graduation year 2025"), ok("B.E. / B.Tech"), ok("CSE / IT branch"), ok("CGPA 7.8 ≥ 6.0"), ok("No active backlogs")],
  }),
  drive({
    company: "Accenture",
    role: "Application Developer",
    package: "₹6.5 LPA",
    match: 81,
    urgency: "cool",
    status: "Opens Sep 02",
    statusTone: "neutral",
    deadline: "Sep 02 — registration opens",
    cta: "Set reminder",
    criteria: [ok("Graduation year 2025"), ok("B.E. / B.Tech"), ok("Any branch"), ok("CGPA 7.8 ≥ 6.0"), wait("Backlog check pending")],
  }),
  drive({
    company: "Cognizant",
    role: "Programmer Analyst (Java)",
    package: "₹5.5 LPA",
    match: 76,
    urgency: "cool",
    status: "Applied",
    statusTone: "accent",
    deadline: "Aug 21 — submitted",
    cta: "View status",
    criteria: [ok("Graduation year 2025"), ok("B.E. / B.Tech"), ok("CSE / IT branch"), ok("CGPA 7.8 ≥ 6.0"), ok("No active backlogs")],
  }),
  drive({
    company: "Capgemini",
    role: "Analyst — Java Backend",
    package: "₹4.25 LPA",
    match: 72,
    urgency: "cool",
    status: "Eligible",
    statusTone: "success",
    deadline: "Sep 05 — 10 days left",
    cta: "Prepare Application",
    primary: true,
    criteria: [ok("Graduation year 2025"), ok("B.E. / B.Tech"), ok("Any branch"), ok("CGPA 7.8 ≥ 6.0"), ok("No active backlogs")],
  }),
  drive({
    company: "Deloitte",
    role: "Analyst — Backend Engineering",
    package: "₹8.0 LPA",
    match: 69,
    urgency: "cool",
    status: "Not eligible",
    statusTone: "danger",
    deadline: "Sep 08 — 13 days left",
    cta: "See why",
    criteria: [ok("Graduation year 2025"), ok("B.E. / B.Tech"), ok("CSE / IT branch"), no("CGPA 7.8 < 8.0"), ok("No active backlogs")],
  }),
];

export interface BlockedDrive {
  company: string;
  reason: string;
  tag: string;
  tone: Tone;
}

export const BLOCKED_DRIVES: BlockedDrive[] = [
  { company: "Goldman Sachs", reason: "CGPA cut-off 8.5 — your record shows 7.8", tag: "Not eligible", tone: "danger" },
  { company: "Morgan Stanley", reason: "Registration closed Aug 18 while notifications were muted", tag: "Missed", tone: "warn" },
  { company: "Oracle", reason: "Restricted to 2024 graduates", tag: "Not eligible", tone: "neutral" },
];

/** CTAs on drive cards that represent a real navigation action into the prep flow. */
export const DRIVE_NAV_CTAS = new Set(["Prepare Application", "Practice"]);
