import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false },
};

/* TODO: mentions légales à rédiger avec le client (raison sociale, SIRET,
   hébergeur définitif, directeur de publication) — non fournies dans CONTENT.md. */
export default function MentionsLegalesPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24 md:px-10 md:py-32">
      <SectionLabel className="mb-6">Mentions légales</SectionLabel>
      <h1 className="font-serif text-3xl italic md:text-4xl">Mentions légales</h1>
      <p className="mt-8 font-sans text-sm leading-relaxed text-foreground-muted">
        Cette page sera complétée avec les informations légales de VEYA (raison sociale,
        SIRET, hébergeur, directeur de publication) avant la mise en ligne du site.
      </p>
    </section>
  );
}
