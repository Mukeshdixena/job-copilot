export const EXTENSION_MATCH = 91;

export const EXTENSION_STRONG_SKILLS: string[] = ["Java", "Spring Boot", "REST", "JPA", "MySQL"];

export const EXTENSION_WEAK_SKILLS: string[] = ["Kafka", "AWS"];

export const EXTENSION_SKELETON: string[] = ["94%", "88%", "96%", "72%", "91%", "84%", "60%", "89%", "78%", "45%"];

export interface ExtensionState {
  name: string;
  icon: string;
  iconColor: string;
  title: string;
  body: string;
  cta: string | null;
}

export const EXTENSION_STATES: ExtensionState[] = [
  {
    name: "AI processing",
    icon: "◍",
    iconColor: "#2F5BEA",
    title: "Analysing this posting",
    body: "Extracting requirements and scoring them against your profile.",
    cta: "about 4 seconds",
  },
  {
    name: "Unsupported page",
    icon: "◌",
    iconColor: "#94A3B8",
    title: "No job posting found",
    body: "This page has no recognisable job description. Paste the text instead.",
    cta: "Paste job description",
  },
  {
    name: "No match",
    icon: "⊘",
    iconColor: "#94A3B8",
    title: "Not a Java role",
    body: "This looks like a frontend position. It falls outside your target role.",
    cta: "Save anyway",
  },
  {
    name: "Already tracked",
    icon: "✓",
    iconColor: "#12915C",
    title: "Saved on Aug 21",
    body: "Applied Aug 22 with Backend-v3. Currently in screening.",
    cta: "Open application",
  },
];
