import type { Tone } from "@/lib/types";

const TONES: Record<Tone, { bg: string; bd: string; fg: string; dot: string }> = {
  neutral: { bg: "#F1F5F9", bd: "#E3E8EF", fg: "#475569", dot: "#94A3B8" },
  accent: { bg: "#EEF2FF", bd: "#C7D2FE", fg: "#2F5BEA", dot: "#2F5BEA" },
  success: { bg: "#ECFDF3", bd: "#A7E3C4", fg: "#0B6E45", dot: "#12915C" },
  warn: { bg: "#FFF7ED", bd: "#FDBA74", fg: "#9A4A08", dot: "#D97706" },
  danger: { bg: "#FEF2F2", bd: "#FCA5A5", fg: "#A3170F", dot: "#DC2626" },
  violet: { bg: "#F5F3FF", bd: "#DDD6FE", fg: "#5B21B6", dot: "#7C3AED" },
};

export function StatusBadge({ text, tone = "neutral" }: { text: string; tone?: Tone }) {
  const t = TONES[tone];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        padding: "2px 7px 2px 6px",
        borderRadius: 5,
        border: `1px solid ${t.bd}`,
        background: t.bg,
        color: t.fg,
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: ".01em",
        whiteSpace: "nowrap",
      }}
    >
      <span style={{ width: 5, height: 5, borderRadius: 99, background: t.dot, flex: "none" }} />
      {text}
    </span>
  );
}
