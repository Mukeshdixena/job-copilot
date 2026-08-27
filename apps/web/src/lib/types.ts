export interface Job {
  title: string;
  company: string;
  location: string;
  exp: string;
  match: number;
  have: string[];
  missing: string[];
  posted: string;
  deadline: string | null;
  source: string;
  flag?: string;
}

export type Tone = "neutral" | "accent" | "success" | "warn" | "danger" | "violet";
