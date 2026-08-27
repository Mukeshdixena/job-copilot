export type StepState = "done" | "review" | "todo";

export interface PrepStep {
  label: string;
  icon: string;
  color: string;
  bg: string;
  bd: string;
  text: string;
}

const STEP_STYLES: Record<StepState, [icon: string, color: string, bg: string, bd: string, text: string]> = {
  done: ["✓", "#12915C", "#F3FBF6", "#C9EBD9", "#0F172A"],
  review: ["◔", "#2F5BEA", "#F8FAFF", "#C7D2FE", "#0F172A"],
  todo: ["○", "#CBD5E1", "#fff", "#E3E8EF", "#94A3B8"],
};

function step(label: string, state: StepState): PrepStep {
  const [icon, color, bg, bd, text] = STEP_STYLES[state];
  return { label, icon, color, bg, bd, text };
}

export const STEPS: PrepStep[] = [
  step("Best resume selected", "done"),
  step("Job analysis complete", "done"),
  step("Application answers prepared", "done"),
  step("Cover letter prepared", "review"),
  step("Recruiter identified", "done"),
  step("Outreach message prepared", "todo"),
];

export interface PrepResume {
  name: string;
  note: string;
  coverage: string;
  score: number;
  bg: string;
  radioBd: string;
  radioBg: string;
  radioDot: string;
}

function resume(name: string, note: string, coverage: string, score: number, on: boolean): PrepResume {
  return {
    name,
    note,
    coverage,
    score,
    bg: on ? "#F8FAFF" : "#fff",
    radioBd: on ? "5px solid #2F5BEA" : "1.5px solid #CBD5E1",
    radioBg: on ? "#2F5BEA" : "#fff",
    radioDot: on ? "#2F5BEA" : "transparent",
  };
}

export const RESUMES: PrepResume[] = [
  resume("backend-v3.pdf", "Tailored for Spring Boot + REST roles · updated 2 days ago", "11 / 14", 94, true),
  resume("master.pdf", "Full history, all projects · source of truth", "9 / 14", 81, false),
  resume("campus-v2.pdf", "Placement-drive format, single page", "8 / 14", 74, false),
];

export interface PrepAnswer {
  q: string;
  a: string;
  source: string;
}

export const ANSWERS: PrepAnswer[] = [
  {
    q: "Why do you want to work at ABC Technologies?",
    a: "Your backend runs on Java 17 and Spring Boot 3, which is exactly the stack I have built production services in. The posting mentions moving batch jobs to an event-driven pipeline — that is the next thing I want to learn properly, and I would rather learn it on a real system than a side project.",
    source: "Drawn from: target-role preferences, Order Management API",
  },
  {
    q: "Describe your experience with Spring Boot.",
    a: "I built and shipped the Order Management API — 14 REST endpoints on Spring Boot 3 with JPA/Hibernate over MySQL, containerised with Docker Compose. I handled request validation, exception mapping, and pagination, and wrote integration tests for the ordering flow.",
    source: "Verified evidence: 2 projects, production usage",
  },
  {
    q: "What is your notice period / availability?",
    a: "Immediately available. I am in my final semester with coursework complete, and I can start full time from the first week of September.",
    source: "Drawn from: profile preferences",
  },
  {
    q: "Expected compensation",
    a: "₹6–9 LPA, in line with the posted range. I am flexible if the role has strong backend mentorship.",
    source: "Drawn from: profile preferences, posted range",
  },
];

export const LETTER = "Dear Hiring Team,\n\nI am applying for the Java Spring Boot Developer role. My production experience is in exactly the layer you describe: I built the Order Management API on Spring Boot 3 with JPA/Hibernate over MySQL — 14 endpoints, request validation, exception mapping, and integration tests for the ordering flow — and shipped it in Docker.\n\nYour posting mentions moving batch jobs onto an event-driven pipeline. I have not worked with Kafka in production and I am not going to claim otherwise; I have started the Confluent fundamentals track and can speak to consumer groups and partitioning conceptually. What I can bring on day one is service-layer Java, careful persistence work, and the habit of writing tests before the review asks for them.\n\nI would welcome the chance to talk about the order and billing domain.\n\nMukesh K.";

export const OUTREACH = "Hi Priya — I applied for the Java Spring Boot Developer role today. My last project was a Spring Boot 3 + JPA order service, so the order and billing domain in the posting lines up closely with what I have built. Happy to share the repo if it is useful.";

export interface PrepCheck {
  icon: string;
  color: string;
  text: string;
}

export const CHECKS: PrepCheck[] = [
  { icon: "✓", color: "#12915C", text: "Every AI-written line is visible above. Nothing is hidden or auto-submitted." },
  { icon: "✓", color: "#12915C", text: "Kafka and AWS gaps are stated honestly in the cover letter rather than glossed over." },
  { icon: "⚠", color: "#D97706", text: "The cover letter still needs your read-through before it is attached." },
  { icon: "⚠", color: "#D97706", text: "Outreach message has not been sent. Send it after you submit, not before." },
];
