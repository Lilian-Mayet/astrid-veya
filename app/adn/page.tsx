import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "ADN",
  description:
    "L'ADN de VEYA : l'origine et la vocation d'une maison privée de Haute Intendance née du soin porté aux résidences d'exception.",
};

/* TODO: contenu ADN à valider client — voir CLAUDE.md décision par défaut #5.
   Cette page n'existait pas dans le doc source (CONTENT.md) : l'ébauche
   ci-dessous reprend le ton de la page Philosophie, en piochant sur
   l'origine et la vocation de VEYA. À ne pas considérer comme définitif. */
export default function AdnPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 md:px-10 md:py-32">
      {process.env.NODE_ENV !== "production" && (
        <div className="mb-16 border border-dashed border-border-strong px-4 py-3 text-center text-xs text-foreground-muted">
          Contenu provisoire — à valider avec le client avant mise en ligne (bandeau visible
          en développement uniquement).
        </div>
      )}

      <Reveal>
        <SectionLabel className="mb-6">ADN</SectionLabel>
        <h1 className="font-serif text-4xl italic leading-snug md:text-6xl">
          Née du soin, pensée pour durer
        </h1>
      </Reveal>

      <Reveal delay={0.05} className="mt-14 flex flex-col gap-8 font-sans text-base leading-relaxed text-foreground-muted">
        <p>
          VEYA est née d&apos;un constat simple : les plus belles demeures ne se contentent
          pas d&apos;être habitées, elles demandent à être veillées. Entre le gardien
          d&apos;autrefois et le chef de projet d&apos;aujourd&apos;hui, il manquait une
          maison capable de tenir ce rôle avec la rigueur d&apos;un cabinet et la discrétion
          d&apos;un service privé. C&apos;est cet espace que VEYA a choisi d&apos;occuper.
        </p>
        <p>
          Notre nom porte l&apos;idée de veille — cette attention continue, presque
          silencieuse, qui permet à un lieu d&apos;exception de rester à la hauteur de ce
          qu&apos;il est. Nous avons construit VEYA autour de ce principe : un cercle
          restreint de gouvernantes et d&apos;experts, formés aux matériaux les plus rares,
          engagés à une confidentialité totale.
        </p>
        <p>
          Nous ne nous adressons pas à un marché de masse. VEYA a été pensée pour les
          propriétaires, family offices, architectes d&apos;intérieur et agences qui
          n&apos;ont ni le temps ni l&apos;envie de déléguer le soin de leurs lieux à
          quelqu&apos;un qui n&apos;en comprendrait pas la valeur réelle. Chaque protocole
          que nous déployons part de cette exigence.
        </p>
        <p>
          Ce qui nous anime reste constant depuis les premiers jours : faire de
          l&apos;intendance un art discret, au service d&apos;un seul objectif — vous
          laisser le plein usage de vos lieux, sans jamais avoir à vous soucier de leur
          préservation.
        </p>
      </Reveal>
    </section>
  );
}
