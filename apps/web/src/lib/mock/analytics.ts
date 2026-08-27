export interface Insight {
  finding: string;
  detail: string;
  cta: string;
  href: string;
}

export const INSIGHTS: Insight[] = [
  {
    finding: "Referral applications produce 3.2× more interviews than generic applications",
    detail:
      "4 referral applications gave 3 interviews. 37 cold applications gave 3. The cheapest change to your funnel is asking for referrals before applying.",
    cta: "Increase networking",
    href: "/networking",
  },
  {
    finding: "Every rejection with a stated reason names an infrastructure skill",
    detail: "Kafka twice, AWS once, system design once. Nothing was about Java or Spring Boot — your core is not the problem.",
    cta: "Open skill plan",
    href: "/skill-gaps",
  },
  {
    finding: "backend-v3 outperforms every other resume version by a wide margin",
    detail:
      "12 applications, 3 interviews (25%). campus-v2 sits at 6 applications and 0 interviews. Stop sending campus-v2 outside drives.",
    cta: "Open resume workspace",
    href: "/resume",
  },
];

export interface Kpi {
  label: string;
  value: string | number;
  delta: string;
  deltaColor: string;
  note: string;
}

export const KPIS: Kpi[] = [
  { label: "Applications", value: 41, delta: "+6", deltaColor: "#0B6E45", note: "this week · 5.9 per week average" },
  { label: "Response rate", value: "32%", delta: "+4pt", deltaColor: "#0B6E45", note: "13 of 41 got any reply" },
  { label: "Interview rate", value: "15%", delta: "+2pt", deltaColor: "#0B6E45", note: "6 interviews from 41" },
  { label: "Offer rate", value: "0%", delta: "—", deltaColor: "#94A3B8", note: "3 still in progress" },
  { label: "Apply → interview", value: "9 days", delta: "−2", deltaColor: "#0B6E45", note: "median across 6 interviews" },
  { label: "Drive conversion", value: "44%", delta: "+11pt", deltaColor: "#0B6E45", note: "4 of 9 eligible drives applied" },
];

export interface Week {
  label: string;
  total: number;
  appliedH: string;
  interviewH: string;
}

function wk(label: string, applied: number, interviews: number): Week {
  const max = 14;
  return {
    label,
    total: applied + interviews,
    appliedH: Math.round((applied / max) * 118) + "px",
    interviewH: Math.round((interviews / max) * 118) + "px",
  };
}

export const WEEKS: Week[] = [
  wk("W1", 3, 0),
  wk("W2", 5, 0),
  wk("W3", 6, 1),
  wk("W4", 7, 1),
  wk("W5", 8, 1),
  wk("W6", 6, 2),
  wk("W7", 6, 1),
];

export type SourceTone = "success" | "accent" | "warn" | "danger";

export interface ConversionSource {
  label: string;
  value: number;
  text: string;
  tone: SourceTone;
}

export const SOURCES: ConversionSource[] = [
  { label: "Referral", value: 75, text: "3 / 4", tone: "success" },
  { label: "Campus / placement", value: 22, text: "2 / 9", tone: "accent" },
  { label: "LinkedIn", value: 11, text: "1 / 9", tone: "warn" },
  { label: "Company site", value: 0, text: "0 / 6", tone: "danger" },
  { label: "Naukri", value: 0, text: "0 / 13", tone: "danger" },
];

export interface TableRow {
  k: string;
  v: string;
  color: string;
}

export interface AnalyticsTable {
  title: string;
  note: string;
  rows: TableRow[];
}

export const TABLES: AnalyticsTable[] = [
  {
    title: "Best-performing resume",
    note: "interviews / applications",
    rows: [
      { k: "backend-v3.pdf", v: "3 / 12", color: "#0B6E45" },
      { k: "backend-v2.pdf", v: "1 / 8", color: "#9A4A08" },
      { k: "campus-v2.pdf", v: "0 / 6", color: "#A3170F" },
      { k: "master.pdf", v: "2 / 15", color: "#9A4A08" },
    ],
  },
  {
    title: "Jobs by source",
    note: "applications sent",
    rows: [
      { k: "Naukri", v: "13", color: "#475569" },
      { k: "LinkedIn", v: "9", color: "#475569" },
      { k: "Campus / placement", v: "9", color: "#475569" },
      { k: "Company site", v: "6", color: "#475569" },
      { k: "Referral", v: "4", color: "#0B6E45" },
    ],
  },
  {
    title: "Rejection reasons",
    note: "7 rejections",
    rows: [
      { k: "Kafka / event-driven experience", v: "2", color: "#A3170F" },
      { k: "System design depth", v: "1", color: "#A3170F" },
      { k: "AWS / cloud experience", v: "1", color: "#A3170F" },
      { k: "CGPA cut-off", v: "1", color: "#475569" },
      { k: "No reason given", v: "2", color: "#94A3B8" },
    ],
  },
  {
    title: "Networking conversion",
    note: "last 7 weeks",
    rows: [
      { k: "Messages sent", v: "31", color: "#475569" },
      { k: "Replies", v: "19", color: "#475569" },
      { k: "Referrals secured", v: "4", color: "#0B6E45" },
      { k: "Referrals → interview", v: "3", color: "#0B6E45" },
      { k: "Follow-ups overdue", v: "2", color: "#A3170F" },
    ],
  },
];
