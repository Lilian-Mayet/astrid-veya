import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Hairline } from "@/components/ui/Hairline";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Cures",
  description:
    "Les trois Cures VEYA : Révélation (post-chantier), Signature (événements & scénographie) et Résidence (intendance au quotidien).",
};

const cureCards = [
  {
    slug: "revelation",
    name: "La Cure Révélation",
    tagline: "Le passage critique du chantier à la livraison",
    text: "La Cure Révélation s'adresse aux propriétaires de résidences d'exception, aux architectes d'intérieur et aux maîtres d'ouvrage exigeants à la recherche d'un partenaire d'élite pour concrétiser la livraison de leurs plus beaux projets.",
    image: {
      src: "/images/veya-originals/cuisine-marbre-carrare-boiseries-2.jpg",
      alt: "Cuisine en marbre de Carrare et boiseries, après travaux",
    },
  },
  {
    slug: "signature",
    name: "La Cure Signature",
    tagline: "La valorisation esthétique d'un moment clé",
    text: "La Collection Signature s'adresse aux propriétaires de résidences d'exception, aux organisateurs d'événements de prestige et aux gestionnaires de fortune à la recherche d'un partenaire d'élite pour leurs moments les plus exclusifs.",
    image: {
      src: "/images/veya-originals/salle-a-manger-suspensions-fauteuils.jpg",
      alt: "Salle à manger avec suspensions et fauteuils, prête pour une réception",
    },
  },
  {
    slug: "residence",
    name: "La Cure Résidence",
    tagline: "L'intendance au long cours",
    text: "La Cure Résidence s'adresse aux propriétaires d'exception, aux family offices et aux gestionnaires de résidences secondaires en quête d'un partenaire de confiance pour assurer le soin continu de leurs intérieurs au quotidien.",
    image: {
      src: "/images/veya-originals/chambre-chevet-laiton-pivoines.jpg",
      alt: "Chambre avec chevet en laiton et pivoines",
    },
  },
];

export default function CuresIndexPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <Reveal>
        <SectionLabel className="mb-6">Cures</SectionLabel>
        <h1 className="max-w-2xl font-serif text-4xl italic leading-snug md:text-6xl">
          Une maison d&apos;intendance qui prend soin de votre patrimoine.
        </h1>
      </Reveal>

      <div className="mt-20 flex flex-col gap-24">
        {cureCards.map((cure, i) => (
          <Reveal key={cure.slug} delay={i * 0.05}>
            <Link href={`/cures/${cure.slug}`} className="group grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:gap-16">
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <p className="font-serif text-xl italic text-foreground-muted">{cure.tagline}</p>
                <h2 className="mt-4 font-serif text-3xl md:text-4xl">{cure.name}</h2>
                <Hairline className="my-6" />
                <p className="max-w-md font-sans text-sm leading-relaxed text-foreground-muted">
                  {cure.text}
                </p>
                <span className="micro-label mt-6 inline-block border-b border-border-strong pb-1 transition-colors group-hover:border-foreground">
                  Découvrir la cure
                </span>
              </div>
              <div className={`relative aspect-[4/3] w-full overflow-hidden ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <Image
                  src={cure.image.src}
                  alt={cure.image.alt}
                  fill
                  sizes="(min-width: 768px) 45vw, 90vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
