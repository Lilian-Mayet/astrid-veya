import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez VEYA pour étudier les besoins de votre résidence et composer, avec un interlocuteur dédié, la Cure adaptée à votre bien.",
};

const reassurances = [
  "Réponse en moins de 24 h",
  "Devis personnalisé et transparent",
  "Confidentialité absolue",
];

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-16 md:px-10">
        <Reveal>
          <div className="relative aspect-[16/8] w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=75"
              alt="Loft avec escalier et verrières, lumière naturelle"
              fill
              sizes="90vw"
              priority
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10">
        <Reveal>
          <SectionLabel align="center" className="mb-6">
            Contact
          </SectionLabel>
          <h1 className="font-serif text-4xl italic leading-snug md:text-6xl">
            Votre projet d&apos;intendance
          </h1>
          <p className="mx-auto mt-8 max-w-xl font-sans text-base leading-relaxed text-foreground-muted">
            Notre équipe est à votre disposition pour étudier les besoins de vos espaces et
            composer une réponse sur-mesure.
          </p>
          <Link
            href="#formulaire"
            className="micro-label mt-10 inline-block border border-border-strong px-8 py-4 text-foreground transition-colors hover:border-foreground"
          >
            Initier l&apos;échange
          </Link>
        </Reveal>
      </section>

      <section id="formulaire" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-16 pb-32 md:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <Reveal>
            <p className="font-sans text-base leading-relaxed text-foreground-muted">
              Partagez-nous les caractéristiques de votre résidence et votre rythme
              d&apos;intervention souhaité. Un interlocuteur dédié vous répond sous 24 heures
              pour organiser une visite de courtoisie.
            </p>

            <ul className="mt-10 flex flex-col gap-4">
              {reassurances.map((item) => (
                <li key={item} className="micro-label">
                  {item}
                </li>
              ))}
              <li className="text-[0.7rem] font-light uppercase tracking-[0.28em] text-foreground-muted/70">
                Visite et audit offerts
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.05}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
