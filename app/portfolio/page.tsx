import Image from "next/image";
import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Hairline } from "@/components/ui/Hairline";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Portfolio VEYA — une immersion dans le soin accordé aux lieux d'exception, sans dévoiler d'intérieurs identifiables : la précision de nos gestes conservateurs.",
};

const macroImages = [
  {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=75",
    alt: "Gros plan sur un plan de travail en marbre veiné",
  },
  {
    src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=75",
    alt: "Détail d'une baignoire et vasque en marbre",
  },
  {
    src: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=900&q=75",
    alt: "Gros plan sur le tissage d'un tapis en fibres naturelles",
  },
  {
    src: "https://images.unsplash.com/photo-1600566752229-250ed79470f8?auto=format&fit=crop&w=900&q=75",
    alt: "Détail d'un plan de travail en marbre blanc et façades noir mat",
  },
  {
    src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=900&q=75",
    alt: "Gros plan sur un plaid zébré et du linge de lit",
  },
  {
    src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=75",
    alt: "Détail d'une salle de bain sombre et baignoire îlot",
  },
  {
    src: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=900&q=75",
    alt: "Composition végétale en gros plan",
  },
  {
    src: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=900&q=75",
    alt: "Détail de façades de cuisine et rangements",
  },
];

const categories = [
  {
    title: "Haute gouvernance & L'art d'habiter",
    text: "Mises en scène feutrées du quotidien : lit dressé « au carré », linge de maison parfait, art de la table préparé pour un événement privé.",
    images: [
      {
        src: "/images/veya-originals/chambre-linge-blanc-fleurs.jpg",
        alt: "Chambre au linge blanc et fleurs fraîches",
      },
      {
        src: "/images/veya-originals/salle-a-manger-suspensions-fauteuils.jpg",
        alt: "Table dressée pour une réception, suspensions et fauteuils",
      },
    ],
  },
  {
    title: "La maintenance invisible",
    text: "Alignement d'un dressing d'exception, carnet de santé immobilier digital, baie domotique et technique organisée.",
    images: [
      {
        src: "/images/veya-originals/dressing-valet-chemise-linge.jpg",
        alt: "Dressing avec valet, chemise et linge plié",
      },
      {
        src: "/images/veya-originals/cave-charpente-bois-bouteilles.jpg",
        alt: "Cave à charpente en bois, rangement organisé",
      },
    ],
  },
  {
    title: "Le geste conservateur",
    text: "Régénération d'une surface usée par le temps : pierre naturelle ravivée, parquet matifié redevenu brillant — l'avant et l'après d'un geste technique.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=75",
        alt: "Façade nocturne d'une maison rénovée, éclairage soigné",
      },
      {
        src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=75",
        alt: "Séjour aux finitions neuves après régénération",
      },
    ],
  },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32">
        <Reveal>
          <SectionLabel className="mb-6">Portfolio</SectionLabel>
          <h1 className="font-serif text-4xl italic leading-snug md:text-6xl">
            Préservation & Matières
          </h1>
        </Reveal>
        <Reveal delay={0.05} className="flex md:items-end md:justify-end">
          <p className="max-w-sm text-right font-sans text-base leading-relaxed text-foreground-muted">
            Une immersion dans le soin accordé aux lieux d&apos;exception. Par respect pour
            la confidentialité de nos clients, nous ne dévoilons pas d&apos;intérieurs
            identifiables, mais la précision de nos gestes conservateurs.
          </p>
        </Reveal>
      </section>

      {/* Catégorie 1 — macro-photographie, grille dense */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10">
        <Reveal>
          <h2 className="font-serif text-2xl italic md:text-3xl">Soin des matériaux nobles</h2>
          <p className="mt-3 max-w-xl font-sans text-sm leading-relaxed text-foreground-muted">
            Gros plans sur les matières restaurées et entretenues — veine de marbre de
            Carrare cristallisé, fil d&apos;un parquet Versailles lustré, grain d&apos;un
            cuir nourri, dorures dépoussiérées.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-3 gap-2 sm:grid-cols-4">
          {macroImages.map((img, i) => (
            <Reveal key={img.src + i} delay={i * 0.03} className="relative aspect-square w-full overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 22vw, 30vw"
                className="object-cover"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Catégories 2-4 — alternance image/texte */}
      <div className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <Hairline />
      </div>

      <div className="flex flex-col gap-24 pb-32">
        {categories.map((cat, i) => (
          <section key={cat.title} className="mx-auto max-w-7xl px-6 md:px-10">
            <Reveal className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:gap-16">
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <h2 className="font-serif text-2xl italic md:text-3xl">{cat.title}</h2>
                <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-foreground-muted">
                  {cat.text}
                </p>
              </div>
              <div className={`grid grid-cols-2 gap-4 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                {cat.images.map((img) => (
                  <div key={img.src} className="relative aspect-[3/4] w-full overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 768px) 22vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </section>
        ))}
      </div>
    </>
  );
}
