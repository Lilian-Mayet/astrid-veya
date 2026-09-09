import Image from "next/image";
import { Reveal } from "./Reveal";

/**
 * Citation centrée en bas d'une image de fond. Le dégradé assure un
 * contraste AA sur le texte quelle que soit l'image utilisée.
 * `heightClassName` permet à la page d'ajuster le gabarit (hero pleine page
 * vs. bloc contenu dans la largeur du site, cf. CLAUDE.md).
 */
export function QuoteOnImage({
  image,
  quote,
  heightClassName = "min-h-[70vh]",
}: {
  image: { src: string; alt: string };
  quote: React.ReactNode;
  heightClassName?: string;
}) {
  return (
    <div className={`relative w-full overflow-hidden ${heightClassName}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"
      />
      <Reveal className="absolute inset-x-0 bottom-0 px-6 pb-16 md:px-10 md:pb-20">
        <p className="mx-auto max-w-3xl text-center font-serif text-2xl italic leading-snug text-white md:text-4xl">
          {quote}
        </p>
      </Reveal>
    </div>
  );
}
