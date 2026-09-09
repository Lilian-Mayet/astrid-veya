import Image from "next/image";
import { Reveal } from "./Reveal";

/**
 * Carte image + titre + texte pour les "4 gestes" de chaque cure (bloc 4).
 * Utilisée en grille 2x2 par les pages Cure.
 */
export function GesteCard({
  number,
  title,
  text,
  image,
  delay = 0,
}: {
  number: number;
  title: string;
  text: React.ReactNode;
  image: { src: string; alt: string };
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <article>
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover"
          />
        </div>
        <p className="micro-label mt-6">{String(number).padStart(2, "0")}</p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl">{title}</h3>
        <p className="mt-3 font-sans text-sm leading-relaxed text-foreground-muted">{text}</p>
      </article>
    </Reveal>
  );
}
