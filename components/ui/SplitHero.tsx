"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

/**
 * Bloc texte à gauche / image ou vide à droite — header de page Cure/Contact.
 * Quand `image` est omis, la colonne de droite reste vide : le fond de la
 * page demeure visible (cf. CLAUDE.md — jamais de bloc plein d'un fond uni).
 */
export function SplitHero({
  eyebrow,
  title,
  description,
  cta,
  image,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  cta?: { label: string; href: string };
  image?: { src: string; alt: string };
}) {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-2 lg:gap-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {eyebrow && <SectionLabel className="mb-6">{eyebrow}</SectionLabel>}
        <h1 className="font-serif text-4xl leading-[1.1] md:text-6xl">{title}</h1>
        {description && (
          <p className="mt-8 max-w-md font-sans text-base leading-relaxed text-foreground-muted">
            {description}
          </p>
        )}
        {cta && (
          <Link
            href={cta.href}
            className="micro-label mt-10 inline-block border border-border-strong px-6 py-4 text-foreground transition-colors hover:border-foreground"
          >
            {cta.label}
          </Link>
        )}
      </motion.div>

      {image && (
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] w-full overflow-hidden"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
            priority
          />
        </motion.div>
      )}
    </section>
  );
}
