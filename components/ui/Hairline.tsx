/** Trait fin pleine largeur, séparateur de section. */
export function Hairline({ className = "" }: { className?: string }) {
  return <hr className={`hairline border-t ${className}`} />;
}
