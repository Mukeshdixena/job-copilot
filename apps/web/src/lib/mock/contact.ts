export interface TimelineEvent {
  date: string;
  title: string;
  detail: string | null;
  dotBg: string;
  dotBd: string;
  line: string;
  weight: number;
  fg: string;
}

type EventState = "done" | "current" | "due" | "future";

const EVENT_STYLES: Record<EventState, [string, string, string, number, string]> = {
  done: ["#12915C", "#D7F0E3", "#E3E8EF", 520, "#334155"],
  current: ["#2F5BEA", "#DBE3FF", "#E3E8EF", 620, "#0F172A"],
  due: ["#DC2626", "#FBDDDD", "#F1F5F9", 620, "#A3170F"],
  future: ["#fff", "#CBD5E1", "#F1F5F9", 500, "#94A3B8"],
};

function ev(date: string, title: string, detail: string | null, state: EventState): TimelineEvent {
  const [dotBg, dotBd, line, weight, fg] = EVENT_STYLES[state];
  return { date, title, detail, dotBg, dotBd, line, weight, fg };
}

export const TIMELINE: TimelineEvent[] = [
  ev("Aug 26", "Identified", "Surfaced as the recruiter on the TCS Java Developer drive.", "done"),
  ev("Aug 27", "Connection sent", "LinkedIn connection with a 280-character note.", "done"),
  ev("Aug 28", "Connected", "Accepted within 3 hours.", "done"),
  ev("Aug 28", "Message sent", "Introduced the Order Management API and asked about the drive timeline.", "done"),
  ev("Aug 22", "Replied", "Confirmed the drive closes Aug 26 and asked for the resume in PDF.", "current"),
  ev("Aug 22", "Resume sent", "backend-v3.pdf attached.", "done"),
  ev("Sep 01", "Follow-up due", "Draft ready below. 4 days overdue.", "due"),
];

export interface MessageType {
  label: string;
  weight: number;
  bg: string;
  fg: string;
  bd: string;
}

function typ(label: string, on = false): MessageType {
  return {
    label,
    weight: on ? 620 : 500,
    bg: on ? "#0C1425" : "#fff",
    fg: on ? "#fff" : "#64748B",
    bd: on ? "#0C1425" : "#E3E8EF",
  };
}

export const TYPES: MessageType[] = [
  typ("Cold email"),
  typ("Connection"),
  typ("Message"),
  typ("Referral"),
  typ("Follow-up", true),
  typ("Thank-you"),
];

export const DRAFT =
  "Hi Priya,\n\nFollowing up on the Java Developer drive — I submitted backend-v3.pdf on Aug 22 as requested. Since then I have added integration tests to the order service in the project I mentioned, so the testing side of the profile is stronger than what the resume shows.\n\nIf the shortlist has moved, I would appreciate knowing where things stand. Happy to take an assessment at short notice.\n\nThanks,\nMukesh";

export interface Check {
  icon: string;
  color: string;
  text: string;
}

export const CHECKS: Check[] = [
  { icon: "✓", color: "#12915C", text: "References only work you have actually done" },
  { icon: "✓", color: "#12915C", text: "One escalation, then the agent stops" },
  { icon: "⚠", color: "#D97706", text: "Sends from your account, after you press send" },
];

export interface DetailRow {
  k: string;
  v: string;
}

export const DETAILS: DetailRow[] = [
  { k: "Type", v: "Recruiter" },
  { k: "Company", v: "TCS" },
  { k: "Email", v: "priya.nair@tcs.example" },
  { k: "Source", v: "Placement drive listing" },
  { k: "First contact", v: "Aug 26 · 12 days ago" },
  { k: "Reply rate", v: "1 of 2 messages" },
];

export interface LinkedOpportunity {
  title: string;
  stage: string;
  match: number;
}

export const LINKED: LinkedOpportunity[] = [
  { title: "Java Developer — TCS drive", stage: "Assessment · closes tonight", match: 93 },
  { title: "Associate Java Developer — TCS Digital", stage: "Saved", match: 79 },
];

export interface Note {
  text: string;
  date: string;
}

export const NOTES: Note[] = [
  { text: "Prefers PDF over links. Asked twice for an attachment rather than a portfolio URL.", date: "Aug 22" },
  { text: "Mentioned the drive shortlist is decided by the panel, not by her — keep the tone informational.", date: "Aug 22" },
];
