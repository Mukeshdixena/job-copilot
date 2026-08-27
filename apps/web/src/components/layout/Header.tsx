import Link from "next/link";

export function Header() {
  return (
    <header
      style={{
        flex: "none",
        height: 52,
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "0 18px",
        background: "#fff",
        borderBottom: "1px solid #E3E8EF",
      }}
    >
      <div
        className="hover:border-[#CBD5E1]"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          flex: "1 1 auto",
          minWidth: 0,
          maxWidth: 420,
          height: 31,
          padding: "0 10px",
          border: "1px solid #E3E8EF",
          borderRadius: 7,
          background: "#F8FAFC",
          color: "#94A3B8",
        }}
      >
        <span style={{ fontSize: 12, flex: "none" }}>⌕</span>
        <span style={{ fontSize: 12.5, flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          Search jobs, companies, contacts…
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            flex: "none",
            border: "1px solid #E3E8EF",
            background: "#fff",
            borderRadius: 4,
            padding: "1px 4px",
            color: "#64748B",
          }}
        >
          ⌘K
        </span>
      </div>
      <div style={{ flex: "1 1 0", minWidth: 0 }} />
      <Link
        href="/assistant"
        className="hover:bg-[#E0E7FF] hover:border-[#A5B4FC]"
        style={{
          flex: "none",
          display: "flex",
          alignItems: "center",
          gap: 6,
          whiteSpace: "nowrap",
          fontSize: 12,
          fontWeight: 600,
          padding: "6px 11px",
          borderRadius: 7,
          border: "1px solid #C7D2FE",
          background: "#EEF2FF",
          color: "#2F5BEA",
          cursor: "pointer",
        }}
      >
        ◈ What should I do today?
      </Link>
      <button
        type="button"
        className="hover:bg-[#F8FAFC]"
        style={{
          flex: "none",
          whiteSpace: "nowrap",
          fontSize: 12,
          fontWeight: 560,
          padding: "6px 10px",
          borderRadius: 7,
          border: "1px solid #E3E8EF",
          background: "#fff",
          color: "#334155",
          cursor: "pointer",
        }}
      >
        + Quick Add
      </button>
      <button
        type="button"
        className="hover:bg-[#F8FAFC]"
        style={{
          flex: "none",
          position: "relative",
          width: 31,
          height: 31,
          borderRadius: 7,
          border: "1px solid #E3E8EF",
          background: "#fff",
          color: "#475569",
          cursor: "pointer",
          fontSize: 13,
        }}
      >
        ◔
        <span
          style={{
            position: "absolute",
            top: 4,
            right: 4,
            width: 6,
            height: 6,
            borderRadius: 99,
            background: "#DC2626",
            border: "1.5px solid #fff",
          }}
        />
      </button>
    </header>
  );
}
