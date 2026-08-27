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

export const INTENT: string[] = [
  "Whether you understand that a transaction is a boundary, not a keyword you sprinkle on a method.",
  "Whether you have hit the self-invocation trap in real code — a @Transactional method called from inside the same class does nothing.",
  "Whether you can name a case where REQUIRES_NEW is the right answer, which separates reading about it from using it.",
];

export const ANSWER =
  "Propagation decides what happens when a transactional method is called from inside another transaction. REQUIRED is the default — it joins the caller's transaction if there is one, otherwise it starts its own, so a rollback anywhere rolls back everything. REQUIRES_NEW suspends the caller and opens an independent transaction, which is what you want for something that must survive the caller failing. In my Order Management API the order-creation flow is REQUIRED across validation, persistence and the stock decrement, so a failure at any step leaves no partial order. The audit-log write is REQUIRES_NEW, because I want the attempt recorded even when the order is rejected. The trap I hit early on was calling a @Transactional method from another method in the same class — the proxy is bypassed, so no transaction starts at all.";

export const MEMORY: string[] = [
  "Propagation = what happens when transactions nest",
  "REQUIRED (default) — join if present, else start; shared rollback",
  "REQUIRES_NEW — suspend caller, independent commit",
  "My example: order creation REQUIRED, audit log REQUIRES_NEW",
  "Self-invocation bypasses the proxy — no transaction at all",
  "Checked exceptions do not roll back unless you say so",
];

export type FollowUpState = "Practised" | "Drafted" | "Not started";

const FOLLOWUP_STATE_TONES: Record<FollowUpState, { bg: string; bd: string; fg: string }> = {
  Practised: { bg: "#ECFDF3", bd: "#A7E3C4", fg: "#0B6E45" },
  Drafted: { bg: "#EEF2FF", bd: "#C7D2FE", fg: "#2F5BEA" },
  "Not started": { bg: "#F1F5F9", bd: "#E3E8EF", fg: "#64748B" },
};

export function followUpColors(state: FollowUpState) {
  return FOLLOWUP_STATE_TONES[state];
}

export interface FollowUp {
  q: string;
  state: FollowUpState;
}

export const FOLLOWUPS: FollowUp[] = [
  { q: "Why doesn't a checked exception trigger a rollback by default?", state: "Drafted" },
  { q: "What isolation level does your database use, and did you change it?", state: "Not started" },
  { q: "How would you test that a rollback actually happened?", state: "Practised" },
  { q: "What breaks if you put @Transactional on a private method?", state: "Drafted" },
];

export interface Attempt {
  date: string;
  duration: string;
  note: string;
}

export const ATTEMPTS: Attempt[] = [
  { date: "Aug 24", duration: "1m 12s", note: "Covered REQUIRED and REQUIRES_NEW. Forgot the self-invocation trap." },
  { date: "Aug 21", duration: "0m 48s", note: "Too short. Defined propagation but gave no example from your own code." },
  { date: "Aug 18", duration: "2m 05s", note: "Rambled into isolation levels. The panel asked about propagation only." },
];
