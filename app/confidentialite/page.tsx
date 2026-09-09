import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Confidentialité",
  robots: { index: false },
};

/* TODO: politique de confidentialité à rédiger avec le client (base légale du
   traitement du formulaire de contact, durée de conservation, droits RGPD) —
   non fournie dans CONTENT.md. */
export default function ConfidentialitePage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24 md:px-10 md:py-32">
      <SectionLabel className="mb-6">Confidentialité</SectionLabel>
      <h1 className="font-serif text-3xl italic md:text-4xl">Politique de confidentialité</h1>
      <p className="mt-8 font-sans text-sm leading-relaxed text-foreground-muted">
        Cette page sera complétée avec la politique de confidentialité de VEYA (données
        collectées via le formulaire de contact, durée de conservation, droits RGPD) avant
        la mise en ligne du site.
      </p>
    </section>
  );
}
