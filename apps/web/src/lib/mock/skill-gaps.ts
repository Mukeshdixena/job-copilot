export type SkillPriority = "High" | "Med" | "Low" | "Held";

export interface Skill {
  name: string;
  demand: string;
  you: string;
  demandPct: string;
  youPct: string;
  gap: string;
  gapColor: string;
  youColor: string;
  priority: SkillPriority;
  pBg: string;
  pBd: string;
  pFg: string;
}

type PlanTone = "hot" | "warm" | "cool";

export interface PlanStep {
  window: string;
  title: string;
  impact: string;
  why: string;
  steps: string[];
  evidence: string;
  unlocks: number;
  bg: string;
  bd: string;
  fg: string;
  cta: string;
  ctaBg: string;
  ctaFg: string;
  ctaBd: string;
}

export interface RejectionStat {
  label: string;
  n: number | string;
  color: string;
  note: string;
}

const PRIORITY_COLORS: Record<SkillPriority, [string, string, string]> = {
  High: ["#FEF2F2", "#FCA5A5", "#A3170F"],
  Med: ["#FFF7ED", "#FDBA74", "#9A4A08"],
  Low: ["#F1F5F9", "#E3E8EF", "#64748B"],
  Held: ["#ECFDF3", "#A7E3C4", "#0B6E45"],
};

function s(name: string, demand: number, you: number, priority: SkillPriority): Skill {
  const gap = you - demand;
  const p = PRIORITY_COLORS[priority];
  return {
    name,
    demand: demand + "%",
    you: you + "%",
    demandPct: demand + "%",
    youPct: you + "%",
    gap: (gap >= 0 ? "+" : "") + gap,
    gapColor: gap >= 0 ? "#0B6E45" : gap > -20 ? "#9A4A08" : "#A3170F",
    youColor: you >= demand ? "#12915C" : you >= demand - 20 ? "#2F5BEA" : "#DC2626",
    priority,
    pBg: p[0],
    pBd: p[1],
    pFg: p[2],
  };
}

const PLAN_TONE_COLORS: Record<PlanTone, [string, string, string]> = {
  hot: ["#FEF2F2", "#FCA5A5", "#A3170F"],
  warm: ["#FFF7ED", "#FDBA74", "#9A4A08"],
  cool: ["#EEF2FF", "#C7D2FE", "#2F5BEA"],
};

function step(
  window: string,
  title: string,
  impact: string,
  why: string,
  steps: string[],
  evidence: string,
  unlocks: number,
  tone: PlanTone
): PlanStep {
  const m = PLAN_TONE_COLORS[tone];
  const primary = tone !== "cool";
  return {
    window,
    title,
    impact,
    why,
    steps,
    evidence,
    unlocks,
    bg: m[0],
    bd: m[1],
    fg: m[2],
    cta: primary ? "Start now" : "Queue",
    ctaBg: primary ? "#2F5BEA" : "#fff",
    ctaFg: primary ? "#fff" : "#334155",
    ctaBd: primary ? "#2F5BEA" : "#E3E8EF",
  };
}

export const SKILLS: Skill[] = [
  s("Spring Boot", 91, 90, "Held"),
  s("REST", 88, 86, "Held"),
  s("SQL", 84, 82, "Held"),
  s("Microservices", 72, 58, "High"),
  s("Docker", 61, 64, "Held"),
  s("AWS", 57, 41, "High"),
  s("Kafka", 49, 32, "High"),
  s("Redis", 43, 51, "Low"),
  s("JUnit", 39, 47, "Med"),
];

export const LEARNING_PLAN: PlanStep[] = [
  step(
    "Week 1–2",
    "Kafka fundamentals, then a consumer in your own project",
    "Highest impact",
    "49% of your matched postings name it and two rejections cited it directly. It is the single biggest thing standing between you and the 90%+ matches.",
    [
      "Producer, consumer, topics, partitions, consumer groups — conceptual first, 4 hours",
      "Move the stock decrement in Order Management API onto a topic",
      "Write down what happens when the consumer is down, because that is the interview question",
    ],
    "a real consumer handling a real event in a service you built",
    34,
    "hot"
  ),
  step(
    "Week 2–3",
    "Service-layer tests with JUnit and Mockito",
    "Audit critical",
    "The profile audit flags this as critical and JUnit appears in 39% of postings. It is also the cheapest way to raise project health on two projects at once.",
    [
      "Unit-test the order and quotation services with mocked repositories",
      "One integration test per critical flow",
      "Record coverage on the profile — a number beats an adjective",
    ],
    "measured coverage on two shipped services",
    22,
    "hot"
  ),
  step(
    "Week 3–4",
    "One AWS deployment, end to end",
    "High demand",
    "57% demand and you have no cloud evidence at all. One real deployment is worth more than a certification with nothing behind it.",
    [
      "Containerise and deploy Order Management API to ECS or Elastic Beanstalk",
      "RDS for MySQL instead of a local container",
      "Note the cost and what you would change — interviewers ask",
    ],
    "a deployed URL and a deployment story",
    28,
    "warm"
  ),
  step(
    "Week 5–6",
    "Microservices depth: draw a boundary yourself",
    "Interview blocker",
    "You can describe the pattern but not a boundary you chose. Readiness is 58% and it is asked in every second round you have had.",
    [
      "Split the quotation system into two services with a clear contract",
      "Write one page on why the boundary sits where it does",
      "Prepare the failure-mode answer: what breaks when one side is down",
    ],
    "a design decision you made and can defend",
    19,
    "cool"
  ),
];

export const REJECTIONS: RejectionStat[] = [
  { label: "Rejections citing a skill", n: 4, color: "#A3170F", note: "Kafka twice, system design once, AWS once. All four are on the plan above." },
  { label: "Jobs unlocked by the plan", n: "+61", color: "#2F5BEA", note: "Postings currently below 75% match that would clear the bar." },
  { label: "Skills you already hold", n: 5, color: "#0B6E45", note: "Spring Boot, REST, SQL, Docker, Redis all meet or beat market demand." },
];
