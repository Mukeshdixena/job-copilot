import type { Tone } from "@/lib/types";

export interface NetworkingStat {
  label: string;
  n: number | string;
  note: string;
  fg: string;
  bd: string;
}

export const STATS: NetworkingStat[] = [
  { label: "Contacts", n: 48, note: "across 22 companies", fg: "#0F172A", bd: "#E3E8EF" },
  { label: "Replied", n: 19, note: "40% reply rate", fg: "#0F172A", bd: "#E3E8EF" },
  { label: "Referrals", n: 4, note: "3 turned into interviews", fg: "#0B6E45", bd: "#A7E3C4" },
  { label: "Follow-ups due", n: 2, note: "both overdue by 4 days", fg: "#9A4A08", bd: "#FDBA74" },
  { label: "Conversion", n: "3.2×", note: "referral vs cold", fg: "#2F5BEA", bd: "#C7D2FE" },
];

export interface Followup {
  initials: string;
  name: string;
  context: string;
  due: string;
  dueColor: string;
}

export const FOLLOWUPS: Followup[] = [
  { initials: "PN", name: "Priya Nair", context: "Recruiter · TCS — replied Aug 22, no movement since", due: "4 days late", dueColor: "#A3170F" },
  { initials: "AR", name: "Arjun Rao", context: "Engineering Manager · Zeta Suite — referral requested", due: "4 days late", dueColor: "#A3170F" },
  { initials: "SM", name: "Sneha Menon", context: "Alumni · Freshworks — thank-you after intro call", due: "due today", dueColor: "#9A4A08" },
];

export interface ContactView {
  label: string;
  n: number;
  weight: number;
  bg: string;
  fg: string;
  bd: string;
}

function view(label: string, n: number, on = false): ContactView {
  return {
    label,
    n,
    weight: on ? 620 : 520,
    bg: on ? "#0C1425" : "#fff",
    fg: on ? "#fff" : "#475569",
    bd: on ? "#0C1425" : "#E3E8EF",
  };
}

export const VIEWS: ContactView[] = [
  view("All", 48, true),
  view("Recruiters", 14),
  view("Hiring managers", 9),
  view("Employees", 11),
  view("Alumni", 12),
  view("Follow-ups", 2),
];

export const COLS = ["Contact", "Role", "Stage", "Last touch", "Next action", ""];

export interface Contact {
  initials: string;
  name: string;
  type: string;
  role: string;
  company: string;
  stage: string;
  tone: Tone;
  last: string;
  next: string;
  dot: string;
  nextColor: string;
}

type Urgency = "hot" | "warm" | "cool";

function c(
  initials: string,
  name: string,
  type: string,
  role: string,
  company: string,
  stage: string,
  tone: Tone,
  last: string,
  next: string,
  urgency: Urgency
): Contact {
  return {
    initials,
    name,
    type,
    role,
    company,
    stage,
    tone,
    last,
    next,
    dot: urgency === "hot" ? "#DC2626" : urgency === "warm" ? "#D97706" : "#CBD5E1",
    nextColor: urgency === "hot" ? "#A3170F" : urgency === "warm" ? "#9A4A08" : "#64748B",
  };
}

export const CONTACTS: Contact[] = [
  c("PN", "Priya Nair", "Recruiter", "Technical Recruiter", "TCS", "Replied", "success", "Aug 22", "Follow-up overdue", "hot"),
  c("AR", "Arjun Rao", "Hiring manager", "Engineering Manager, Backend", "Zeta Suite", "Awaiting reply", "warn", "Aug 22", "Referral nudge overdue", "hot"),
  c("SM", "Sneha Menon", "Alumni", "SDE II", "Freshworks", "Connected", "accent", "Aug 24", "Send thank-you", "warm"),
  c("RS", "Rahul Shetty", "Hiring manager", "EM, Platform", "ABC Technologies", "Identified", "neutral", "—", "Draft first message", "warm"),
  c("KV", "Kavya Iyer", "Employee", "Backend Engineer", "Razorpay", "Replied", "success", "Aug 19", "Ask about referral process", "cool"),
  c("DN", "Deepak Nair", "Recruiter", "Talent Partner", "Postman", "Connected", "accent", "Aug 15", "Waiting on panel feedback", "cool"),
  c("AV", "Anita Verma", "Alumni", "SDE I", "ABC Technologies", "Identified", "neutral", "—", "Same college, 2022 batch", "cool"),
  c("MS", "Manish Suri", "Recruiter", "Staffing Lead", "Infosys", "No reply", "danger", "Aug 08", "Closed — 3 attempts", "cool"),
];

export interface MessageTemplate {
  name: string;
  note: string;
  stat: string;
}

export const TEMPLATES: MessageTemplate[] = [
  { name: "Cold email", note: "First contact with a recruiter or manager you have no link to.", stat: "22% reply rate" },
  { name: "LinkedIn connection", note: "Short note attached to a connection request. 300 characters.", stat: "61% accept rate" },
  { name: "LinkedIn message", note: "Follow-up once the connection is accepted.", stat: "38% reply rate" },
  { name: "Referral request", note: "Asks an employee to refer you for a specific opening.", stat: "4 sent · 3 interviews" },
  { name: "Follow-up", note: "Polite nudge after silence. Escalates once, then stops.", stat: "29% reply rate" },
  { name: "Thank-you", note: "After an interview or an intro call. Sent within 24 hours.", stat: "sent 6 times" },
];
