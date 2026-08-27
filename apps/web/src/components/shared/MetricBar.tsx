type MetricTone = "auto" | "success" | "accent" | "warn" | "danger" | "neutral" | "violet";

const FILLS: Record<Exclude<MetricTone, "auto">, string> = {
  success: "#12915C",
  accent: "#2F5BEA",
  warn: "#D97706",
  danger: "#DC2626",
  neutral: "#94A3B8",
  violet: "#7C3AED",
};

const TEXTS: Record<Exclude<MetricTone, "auto">, string> = {
  success: "#0B6E45",
  accent: "#2F5BEA",
  warn: "#9A4A08",
  danger: "#A3170F",
  neutral: "#475569",
  violet: "#5B21B6",
};

function autoTone(value: number): Exclude<MetricTone, "auto"> {
  if (value >= 80) return "success";
  if (value >= 60) return "accent";
  if (value >= 40) return "warn";
  return "danger";
}

export function MetricBar({
  label,
  value,
  valueText,
  tone = "auto",
  marker,
}: {
  label: string;
  value: number;
  valueText?: string;
  tone?: MetricTone;
  marker?: number;
}) {
  const key = tone === "auto" ? autoTone(value) : tone;
  const pct = Math.max(0, Math.min(100, value));

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: "4px 10px" }}>
      <span
        style={{
          fontSize: 12.5,
          color: "#334155",
          fontWeight: 520,
          minWidth: 0,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11.5,
          fontWeight: 600,
          color: TEXTS[key],
          letterSpacing: "-.01em",
        }}
      >
        {valueText ?? `${value}%`}
      </span>
      <div
        style={{
          gridColumn: "1 / -1",
          height: 5,
          borderRadius: 99,
          background: "#EDF1F6",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "0 auto 0 0",
            width: `${pct}%`,
            background: FILLS[key],
            borderRadius: 99,
          }}
        />
        {marker != null && (
          <div
            style={{
              position: "absolute",
              top: -2,
              bottom: -2,
              width: 1.5,
              left: `${marker}%`,
              background: "#94A3B8",
            }}
          />
        )}
      </div>
    </div>
  );
}
