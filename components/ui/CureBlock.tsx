import Image from "next/image";
import { Hairline } from "./Hairline";
import { Reveal } from "./Reveal";

type Img = { src: string; alt: string };

/**
 * Bloc répété sur les 3 pages Cure (bloc 3 de CONTENT.md) :
 * titre + trait fin + sous-titre 2 lignes + 2 textes côte à côte + 1 image
 * large + 2 images partagées. Jamais plein écran — le fond de page reste
 * visible autour (largeur contrainte au conteneur, cf. CLAUDE.md).
 */
export function CureBlock({
  title,
  subtitle,
  texts,
  largeImage,
  pairedImages,
}: {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  texts: [React.ReactNode, React.ReactNode];
  largeImage: Img;
  pairedImages: [Img, Img];
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <Reveal>
        <h2 className="font-serif text-3xl md:text-4xl">{title}</h2>
      </Reveal>

      <Hairline className="my-10" />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-16">
        <Reveal className="md:col-span-1">
          <p className="font-serif text-2xl italic leading-snug md:text-3xl">{subtitle}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:col-span-2">
          <Reveal delay={0.05}>
            <p className="font-sans text-base leading-relaxed text-foreground-muted">{texts[0]}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-sans text-base leading-relaxed text-foreground-muted">{texts[1]}</p>
          </Reveal>
        </div>
      </div>

      <Reveal className="mt-16">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={largeImage.src}
            alt={largeImage.alt}
            fill
            sizes="(min-width: 768px) 80vw, 90vw"
            className="object-cover"
          />
        </div>
      </Reveal>

      <Reveal className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {pairedImages.map((img, i) => (
          <div key={i} className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        ))}
      </Reveal>
    </section>
  );
}
