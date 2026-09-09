/**
 * Micro-label en petites capitales avant un titre de section, ex. "— Résidence —".
 */
export function SectionLabel({
  children,
  align = "left",
  className = "",
}: {
  children: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <p
      className={`micro-label ${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      — {children} —
    </p>
  );
}
