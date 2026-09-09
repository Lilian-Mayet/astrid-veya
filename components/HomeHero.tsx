"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Slide = { src: string; alt: string };

/**
 * Hero plein écran de l'accueil : rotation de photos en fond avec léger
 * effet Ken Burns, baseline centrée. Prévu pour accepter une vidéo courte en
 * boucle à la place des photos plus tard (cf. CLAUDE.md règle #7) — il
 * suffirait de remplacer le carrousel d'<Image> par une balise <video>
 * gardant la même superposition de dégradé + texte.
 */
export function HomeHero({ slides, baseline }: { slides: Slide[]; baseline: React.ReactNode }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 7000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: 7, ease: "linear" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[index].src}
              alt={slides[index].alt}
              fill
              sizes="100vw"
              priority={index === 0}
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div aria-hidden className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl font-serif text-3xl italic leading-snug text-white md:text-5xl"
        >
          {baseline}
        </motion.p>
      </div>
    </section>
  );
}
