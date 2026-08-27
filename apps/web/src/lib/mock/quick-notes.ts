export type IndexState = "active" | "ready" | "draft" | "warn";

export interface IndexItem {
  label: string;
  state: IndexState;
}

export function indexStyle(state: IndexState) {
  return {
    dot: state === "ready" ? "#12915C" : state === "draft" ? "#2F5BEA" : state === "warn" ? "#D97706" : "#CBD5E1",
    bg: state === "active" ? "#F8FAFF" : "#fff",
    fg: state === "active" ? "#2F5BEA" : "#334155",
    weight: state === "active" ? 620 : 500,
  };
}

export const INDEX: IndexItem[] = [
  { label: "Tell me about yourself", state: "active" },
  { label: "Walk me through your best project", state: "ready" },
  { label: "Why backend / why Java?", state: "ready" },
  { label: "Your biggest technical challenge", state: "draft" },
  { label: "A time you were wrong", state: "warn" },
  { label: "Where do you see yourself in 3 years?", state: "draft" },
  { label: "Why should we hire you?", state: "warn" },
  { label: "Your weakness", state: "warn" },
  { label: "Why are you leaving / available now?", state: "ready" },
  { label: "Questions for us", state: "ready" },
];

export interface LengthToggle {
  label: string;
  on?: boolean;
}

export function lengthStyle(on?: boolean) {
  return {
    weight: on ? 620 : 520,
    bg: on ? "#0C1425" : "#fff",
    fg: on ? "#fff" : "#475569",
    bd: on ? "#0C1425" : "#E3E8EF",
  };
}

export const LENGTHS: LengthToggle[] = [{ label: "30 sec" }, { label: "60 sec", on: true }, { label: "2 min" }];

export const ANSWER =
  "I am a backend developer focused on Java and Spring Boot. Most of what I know I learned by shipping two services: an Order Management API with fourteen REST endpoints on Spring Boot 3 and JPA over MySQL, and a quotation system that is live with one client. During my internship at Nexlify I owned the order service and introduced request-key idempotency, which removed a whole class of duplicate-order bugs. I care about the parts that show up after launch — validation, error handling, and tests that catch things before review does. What I want next is a team where the backend is the product, so I can learn distributed patterns properly rather than from a side project. Right now the gap I am closing is event-driven work, specifically Kafka.";

export const MEMORY: string[] = [
  "Backend-focused Java developer",
  "Spring Boot 3 — two shipped services, one with a real client",
  "REST + database work: 14 endpoints, 11-table schema",
  "Production-oriented: idempotency, validation, error handling",
  "Wants scalable backend systems; closing the Kafka gap",
];

export interface CardChip {
  label: string;
  done: boolean;
}

export function chipStyle(done: boolean) {
  return done ? { bg: "#F3FBF6", bd: "#C9EBD9", fg: "#0B6E45" } : { bg: "#fff", bd: "#E3E8EF", fg: "#94A3B8" };
}

export type CardState = "Ready" | "Draft" | "Needs work";

const CARD_STATE_TONES: Record<CardState, { bg: string; bd: string; fg: string }> = {
  Ready: { bg: "#ECFDF3", bd: "#A7E3C4", fg: "#0B6E45" },
  Draft: { bg: "#EEF2FF", bd: "#C7D2FE", fg: "#2F5BEA" },
  "Needs work": { bg: "#FFF7ED", bd: "#FDBA74", fg: "#9A4A08" },
};

export function cardStateColors(state: CardState) {
  return CARD_STATE_TONES[state];
}

export interface NoteCard {
  q: string;
  state: CardState;
  lengths: CardChip[];
  points: string[];
}

export const CARDS: NoteCard[] = [
  {
    q: "Walk me through your best project",
    state: "Ready",
    lengths: [
      { label: "30s", done: true },
      { label: "60s", done: true },
      { label: "2m", done: true },
    ],
    points: [
      "Order Management API — 14 endpoints, Spring Boot 3, JPA, MySQL",
      "Hardest part: idempotent creation under retries",
      "What I would change: move stock decrement to an event",
      "Honest limit: no CI/CD or observability yet",
    ],
  },
  {
    q: "Why backend / why Java?",
    state: "Ready",
    lengths: [
      { label: "30s", done: true },
      { label: "60s", done: true },
      { label: "2m", done: false },
    ],
    points: [
      "Liked the data and correctness side more than the UI side",
      "Java: strong typing caught my mistakes while learning",
      "Spring Boot: conventions let one person ship a real service",
      "Avoid saying 'Java is popular' — say what it does for you",
    ],
  },
  {
    q: "A time you were wrong",
    state: "Needs work",
    lengths: [
      { label: "30s", done: false },
      { label: "60s", done: true },
      { label: "2m", done: false },
    ],
    points: [
      "Story: assumed @Transactional worked on self-invoked methods",
      "Found it through a rollback that silently did nothing",
      "Fix: moved the call out of the class, added a test",
      "Needs a cleaner ending — currently trails off",
    ],
  },
  {
    q: "Your weakness",
    state: "Needs work",
    lengths: [
      { label: "30s", done: false },
      { label: "60s", done: true },
      { label: "2m", done: false },
    ],
    points: [
      "Real answer: distributed systems depth, not a fake weakness",
      "Evidence you are working on it: Kafka track started Aug 18",
      "Do not use 'I work too hard' — panels discount it instantly",
      "Keep it to 40 seconds, then stop talking",
    ],
  },
];
