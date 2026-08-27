export interface Track {
  label: string;
  value: number;
}

export const TRACKS: Track[] = [
  { label: "Java core", value: 91 },
  { label: "Spring Boot", value: 86 },
  { label: "SQL", value: 82 },
  { label: "JPA / Hibernate", value: 74 },
  { label: "Security", value: 61 },
  { label: "Microservices", value: 59 },
  { label: "System design", value: 48 },
];

export type TodoTone = "hot" | "warm" | "cool";

const TODO_TONES: Record<TodoTone, { bg: string; bd: string; fg: string }> = {
  hot: { bg: "#FEF6F6", bd: "#FCA5A5", fg: "#A3170F" },
  warm: { bg: "#FFFCF7", bd: "#FDBA74", fg: "#9A4A08" },
  cool: { bg: "#F8FAFF", bd: "#C7D2FE", fg: "#2F5BEA" },
};

export function todoColors(tone: TodoTone) {
  return TODO_TONES[tone];
}

export interface TodoItem {
  time: string;
  label: string;
  tone: TodoTone;
}

export const TODO: TodoItem[] = [
  { time: "25 min", label: "Transaction propagation and rollback — round 1 asked, you hedged", tone: "hot" },
  { time: "30 min", label: "Design walkthrough of the Order Management API at 100× traffic", tone: "hot" },
  { time: "15 min", label: "Spring Security filter chain — basic auth to JWT", tone: "warm" },
  { time: "10 min", label: "Two questions to ask the panel about their service boundaries", tone: "cool" },
];

export interface Tab {
  label: string;
  n: string;
  on?: boolean;
}

export function tabColors(on?: boolean) {
  return {
    weight: on ? 620 : 520,
    bg: on ? "#0C1425" : "#fff",
    fg: on ? "#fff" : "#475569",
    bd: on ? "#0C1425" : "#E3E8EF",
  };
}

export const TABS: Tab[] = [
  { label: "Company research", n: "8" },
  { label: "Resume questions", n: "11" },
  { label: "Java", n: "62" },
  { label: "Spring Boot", n: "34", on: true },
  { label: "SQL", n: "28" },
  { label: "JPA / Hibernate", n: "22" },
  { label: "Security", n: "18" },
  { label: "Microservices", n: "20" },
  { label: "System design", n: "14" },
  { label: "Behavioral", n: "16" },
  { label: "My answers", n: "27" },
  { label: "Questions to ask", n: "9" },
];

export type QuestionState = "Practised" | "Drafted" | "Not started" | "Weak";

const QUESTION_STATE_TONES: Record<QuestionState, { bg: string; bd: string; fg: string }> = {
  Practised: { bg: "#ECFDF3", bd: "#A7E3C4", fg: "#0B6E45" },
  Drafted: { bg: "#EEF2FF", bd: "#C7D2FE", fg: "#2F5BEA" },
  "Not started": { bg: "#F1F5F9", bd: "#E3E8EF", fg: "#64748B" },
  Weak: { bg: "#FEF2F2", bd: "#FCA5A5", fg: "#A3170F" },
};

export function questionStateColors(state: QuestionState) {
  return QUESTION_STATE_TONES[state];
}

export interface QuestionItem {
  q: string;
  meta: string;
  state: QuestionState;
  likelihood: string;
}

export const QUESTIONS: QuestionItem[] = [
  { q: "Explain the Spring Boot auto-configuration mechanism", meta: "Asked in 4 of your 6 interviews", state: "Practised", likelihood: "92%" },
  { q: "How does @Transactional propagation work?", meta: "Round 1 flagged this as weak", state: "Weak", likelihood: "88%" },
  { q: "Difference between @Component, @Service and @Repository", meta: "Common opener", state: "Practised", likelihood: "84%" },
  { q: "How do you handle exceptions across a REST API?", meta: "Your Order API is direct evidence", state: "Practised", likelihood: "81%" },
  { q: "What is the Spring bean lifecycle?", meta: "Follow-up to auto-configuration", state: "Drafted", likelihood: "73%" },
  { q: "How would you add caching to an existing endpoint?", meta: "Redis gap — expect a probe", state: "Not started", likelihood: "66%" },
  { q: "Explain constructor vs field injection and why it matters", meta: "Panel is senior; likely", state: "Drafted", likelihood: "61%" },
  { q: "How do you profile a slow Spring Boot endpoint?", meta: "Observability gap", state: "Not started", likelihood: "54%" },
];

export interface UpcomingItem {
  company: string;
  role: string;
  when: string;
  ready: string;
  bg: string;
  bd: string;
  fg: string;
}

export const UPCOMING: UpcomingItem[] = [
  { company: "XYZ Technologies", role: "Java Backend Developer · Round 2", when: "Tomorrow 11:00", ready: "78% ready", bg: "#FEF2F2", bd: "#FCA5A5", fg: "#A3170F" },
  { company: "Infosys", role: "Systems Engineer · coding round", when: "Aug 28", ready: "71% ready", bg: "#FFF7ED", bd: "#FDBA74", fg: "#9A4A08" },
  { company: "Postman", role: "Backend · panel feedback pending", when: "Sep 04 (tbc)", ready: "64% ready", bg: "#F1F5F9", bd: "#E3E8EF", fg: "#475569" },
];
