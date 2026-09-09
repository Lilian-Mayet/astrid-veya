import { Reveal } from "./Reveal";

/**
 * Grille des "modalités d'intervention" (bloc 6 des pages Cure) : 4 cartes
 * égales, 2x2 desktop / empilées mobile. Numérotation discrète en haut de
 * chaque carte plutôt qu'une icône (décision par défaut #2, CLAUDE.md).
 */
export function ModaliteGrid({
  items,
}: {
  items: { title: string; text: React.ReactNode }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.05}>
          <div className="border-t border-border pt-6">
            <p className="micro-label">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-3 font-serif text-xl md:text-2xl">{item.title}</h3>
            <p className="mt-3 font-sans text-sm leading-relaxed text-foreground-muted">
              {item.text}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
