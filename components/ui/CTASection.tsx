import Link from "next/link";
import { Reveal } from "./Reveal";

/** Bloc titre + texte + bouton, réutilisé sur plusieurs pages. */
export function CTASection({
  title,
  text,
  cta,
}: {
  title: React.ReactNode;
  text?: React.ReactNode;
  cta: { label: string; href: string };
}) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10 md:py-32">
      <Reveal>
        <h2 className="font-serif text-3xl italic leading-snug md:text-5xl">{title}</h2>
        {text && (
          <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-foreground-muted">
            {text}
          </p>
        )}
        <Link
          href={cta.href}
          className="micro-label mt-10 inline-block border border-border-strong px-6 py-4 text-foreground transition-colors hover:border-foreground"
        >
          {cta.label}
        </Link>
      </Reveal>
    </section>
  );
}
