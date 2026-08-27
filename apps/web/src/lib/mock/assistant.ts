type Tone = "hot" | "warm" | "cool";

const TONES: Record<Tone, { bg: string; bd: string; fg: string }> = {
  hot: { bg: "#FEF2F2", bd: "#FCA5A5", fg: "#A3170F" },
  warm: { bg: "#FFF7ED", bd: "#FDBA74", fg: "#9A4A08" },
  cool: { bg: "#EEF2FF", bd: "#C7D2FE", fg: "#2F5BEA" },
};

export type ActionKey = "appPrep" | "networking" | "question" | "analytics";

export interface AssistantAction {
  tag: string;
  label: string;
  cta: string;
  key: ActionKey;
  bg: string;
  bd: string;
  fg: string;
}

function action(tag: string, label: string, cta: string, key: ActionKey, tone: Tone): AssistantAction {
  const t = TONES[tone];
  return { tag, label, cta, key, bg: t.bg, bd: t.bd, fg: t.fg };
}

export const ACTIONS: AssistantAction[] = [
  action("11:59 PM", "TCS drive — application pack ready for review", "Review", "appPrep", "hot"),
  action("4d late", "Two follow-up drafts ready for Priya and Arjun", "Open", "networking", "warm"),
  action("Tomorrow", "Transaction propagation — weakest answer in your Spring Boot track", "Practise", "question", "cool"),
];

export const ACTION_HREFS: Record<ActionKey, string> = {
  appPrep: "/applications/prepare/1",
  networking: "/networking",
  question: "/interviews/questions/1",
  analytics: "/analytics",
};

export const PROMPTS: string[] = [
  "What should I do today?",
  "Find my highest-priority jobs.",
  "Improve my Spring Boot resume.",
  "Prepare me for tomorrow's interview.",
  "Why am I not getting interviews?",
  "What should I learn next?",
  "Improve this project.",
  "Prepare a recruiter message.",
];

export interface AssistantScope {
  icon: string;
  color: string;
  label: string;
  mode: string;
}

export const SCOPES: AssistantScope[] = [
  { icon: "✓", color: "#12915C", label: "Profile and evidence", mode: "read" },
  { icon: "✓", color: "#12915C", label: "Jobs, applications, drives", mode: "read" },
  { icon: "✓", color: "#12915C", label: "Resume versions", mode: "suggest" },
  { icon: "✓", color: "#12915C", label: "Contacts and timelines", mode: "read" },
  { icon: "✓", color: "#12915C", label: "Interview notes and answers", mode: "suggest" },
  { icon: "✕", color: "#DC2626", label: "Sending mail or messages", mode: "never" },
];
