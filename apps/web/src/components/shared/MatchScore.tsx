type Size = "sm" | "md" | "lg";

const SIZES: Record<Size, { pad: string; num: string; lab: string }> = {
  lg: { pad: "7px 11px", num: "26px", lab: "10px" },
  md: { pad: "4px 8px", num: "16px", lab: "9px" },
  sm: { pad: "2px 6px", num: "12px", lab: "9px" },
};

function tone(value: number) {
  if (value >= 90) return { bg: "#ECFDF3", bd: "#A7E3C4", fg: "#0B6E45" };
  if (value >= 75) return { bg: "#EEF2FF", bd: "#C7D2FE", fg: "#2F5BEA" };
  if (value >= 60) return { bg: "#FFF7ED", bd: "#FDBA74", fg: "#9A4A08" };
  return { bg: "#F1F5F9", bd: "#E3E8EF", fg: "#475569" };
}

export function MatchScore({
  value,
  size = "md",
  label = "match",
}: {
  value: number;
  size?: Size;
  label?: string;
}) {
  const t = tone(value);
  const s = SIZES[size];
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "baseline",
        gap: 5,
        padding: s.pad,
        borderRadius: 6,
        border: `1px solid ${t.bd}`,
        background: t.bg,
        color: t.fg,
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: s.num,
          fontWeight: 600,
          letterSpacing: "-.02em",
          lineHeight: 1,
        }}
      >
        {value}%
      </span>
      <span
        style={{
          fontSize: s.lab,
          fontWeight: 650,
          letterSpacing: ".08em",
          textTransform: "uppercase",
          opacity: 0.78,
          lineHeight: 1,
        }}
      >
        {label}
      </span>
    </div>
  );
}
