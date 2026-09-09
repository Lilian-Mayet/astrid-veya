import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { IntroGate } from "@/components/IntroGate";
import { HomeHero } from "@/components/HomeHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Hairline } from "@/components/ui/Hairline";
import { Reveal } from "@/components/ui/Reveal";
import { CureBlock } from "@/components/ui/CureBlock";
import { CTASection } from "@/components/ui/CTASection";
import { pillars } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "VEYA, maison privée de Haute Intendance à Paris : préservation et soin des plus belles demeures de France, par cercle restreint d'experts et de gouvernantes.",
};

const heroSlides = [
  {
    src: "/images/veya-originals/salon-moulures-fenetre-haussmannienne.jpg",
    alt: "Salon haussmannien, moulures et fenêtres à la française",
  },
  {
    src: "/images/veya-originals/cuisine-marbre-carrare-boiseries.jpg",
    alt: "Cuisine en marbre de Carrare et boiseries d'époque",
  },
  {
    src: "/images/veya-originals/salon-rideaux-vue-toits-paris.jpg",
    alt: "Rideaux de lin devant une fenêtre avec vue sur les toits de Paris",
  },
];

export default function Home() {
  return (
    <>
      <IntroGate />

      <HomeHero
        slides={heroSlides}
        baseline={<>Vous avez l&apos;art de vivre, on a l&apos;art d&apos;en prendre soin.</>}
      />

      {/* Bloc 2 — Présentation VEYA */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10 md:py-32">
        <Reveal>
          <SectionLabel align="center" className="mb-8">
            Veya
          </SectionLabel>
          <div className="flex flex-col gap-6 font-sans text-base leading-relaxed text-foreground-muted md:text-lg">
            <p>
              VEYA est une maison privée de Haute Intendance dédiée à la préservation et au
              soin des plus belles demeures de France.
            </p>
            <p>
              S&apos;appuyant sur un cercle restreint d&apos;experts et de gouvernantes, les
              cures VEYA ont été pensées pour choyer votre demeure, grâce à des protocoles
              d&apos;intendance strictes et sur-mesure. Chacune d&apos;entre elles est
              élaborée pour s&apos;adapter parfaitement à votre réalité. Elles préparent,
              magnifient et pérennisent vos espaces à des instants qui comptent pour vous :
              la cure Révélation vous propose la remise en état d&apos;exception
              post-chantier, la cure Résidence vous offre un soin conservateur au quotidien,
              et la cure Signature vous réserve une sublimation ponctuelle de vos lieux pour
              des événements privés et/ou visites d&apos;exception.
            </p>
            <p>
              En tant que partenaire de confiance, VEYA offre un écosystème de soin conçu
              pour la préservation des lieux, le respect des matériaux d&apos;art et une
              sérénité absolue, dans la discrétion la plus totale.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 border-t border-border pt-10">
          <p className="font-serif text-xl italic leading-relaxed md:text-2xl">
            VEYA est le partenaire de confiance des propriétaires exigeants, des family
            offices, des architectes d&apos;intérieur et des agences événementielles pour
            l&apos;intendance, la préparation et la préservation de leurs plus belles
            demeures.
          </p>
        </Reveal>
      </section>

      {/* Bloc 3 — Piliers */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10">
        <Reveal className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {pillars.map((pillar) => (
            <Link
              key={pillar.slug}
              href={`/philosophie#pilier-${pillar.slug}`}
              className="font-serif text-2xl italic text-foreground transition-colors hover:text-foreground-muted md:text-3xl"
            >
              {pillar.label}
            </Link>
          ))}
        </Reveal>
      </section>

      {/* Bloc 4 — Présentation des 3 cures */}
      <section className="mx-auto max-w-7xl px-6 pt-16 md:px-10">
        <Reveal>
          <h2 className="max-w-3xl font-serif text-3xl italic leading-snug md:text-5xl">
            Une maison d&apos;intendance qui prend soin de votre patrimoine.
          </h2>
        </Reveal>
      </section>

      <CureBlock
        title="La Cure Révélation"
        subtitle={
          <>
            Le passage critique
            <br />
            du chantier à la livraison
          </>
        }
        texts={[
          <>
            La Cure Révélation s&apos;adresse aux propriétaires de résidences
            d&apos;exception, aux architectes d&apos;intérieur et aux maîtres d&apos;ouvrage
            exigeants à la recherche d&apos;un partenaire d&apos;élite pour concrétiser la
            livraison de leurs plus beaux projets.
          </>,
          <>
            À l&apos;issue d&apos;une rénovation ou d&apos;une construction, la Cure
            Révélation efface les traces du chantier, libère les espaces de toute poussière
            résiduelle et révèle la beauté originelle de votre demeure.
          </>,
        ]}
        largeImage={{
          src: "/images/veya-originals/cuisine-marbre-carrare-boiseries-2.jpg",
          alt: "Cuisine en marbre de Carrare et boiseries, après travaux",
        }}
        pairedImages={[
          {
            src: "/images/veya-originals/salon-fauteuil-bouclette-cheminee.jpg",
            alt: "Salon avec fauteuil bouclette et cheminée",
          },
          {
            src: "/images/veya-originals/bureau-carnet-suspensions-paris.jpg",
            alt: "Bureau avec carnet, suspensions et vue sur Paris",
          },
        ]}
      />
      <div className="mx-auto max-w-7xl px-6 pb-16 md:px-10">
        <Reveal>
          <Link href="/cures/revelation" className="micro-label border-b border-border-strong pb-1">
            Découvrir la Cure Révélation
          </Link>
        </Reveal>
      </div>

      <CureBlock
        title="La Cure Signature"
        subtitle={
          <>
            La valorisation esthétique
            <br />
            d&apos;un moment clé
          </>
        }
        texts={[
          <>
            La Collection Signature s&apos;adresse aux propriétaires de résidences
            d&apos;exception, aux organisateurs d&apos;événements de prestige et aux
            gestionnaires de fortune à la recherche d&apos;un partenaire d&apos;élite pour
            leurs moments les plus exclusifs.
          </>,
          <>
            Une préparation scénographique minutieuse avant votre réception, suivie
            d&apos;une restitution globale et ultra-réactive. Chaque trace s&apos;efface pour
            rendre au lieu son éclat d&apos;origine.
          </>,
        ]}
        largeImage={{
          src: "/images/veya-originals/salle-a-manger-suspensions-fauteuils.jpg",
          alt: "Salle à manger avec suspensions et fauteuils, prête pour une réception",
        }}
        pairedImages={[
          {
            src: "/images/veya-originals/console-marbre-carnet-cles.jpg",
            alt: "Console en marbre avec carnet, clés et café",
          },
          {
            src: "/images/veya-originals/chambre-linge-blanc-fleurs.jpg",
            alt: "Chambre au linge blanc et fleurs fraîches",
          },
        ]}
      />
      <div className="mx-auto max-w-7xl px-6 pb-16 md:px-10">
        <Reveal>
          <Link href="/cures/signature" className="micro-label border-b border-border-strong pb-1">
            Découvrir la Cure Signature
          </Link>
        </Reveal>
      </div>

      <CureBlock
        title="La Cure Résidence"
        subtitle={
          <>
            L&apos;intendance
            <br />
            au long cours
          </>
        }
        texts={[
          <>
            La Cure Résidence s&apos;adresse aux propriétaires d&apos;exception, aux family
            offices et aux gestionnaires de résidences secondaires en quête d&apos;un
            partenaire de confiance pour assurer le soin continu de leurs intérieurs au
            quotidien.
          </>,
          <>
            Nous orchestrons le quotidien de votre demeure pour que chaque retour chez vous
            soit une expérience fluide et sans contrainte, prête à vous accueillir.
          </>,
        ]}
        largeImage={{
          src: "/images/veya-originals/chambre-chevet-laiton-pivoines.jpg",
          alt: "Chambre avec chevet en laiton et pivoines"
        }}
        pairedImages={[
          {
            src: "/images/veya-originals/dressing-valet-chemise-linge.jpg",
            alt: "Dressing avec valet, chemise et linge plié",
          },
          {
            src: "/images/veya-originals/cave-charpente-bois-bouteilles.jpg",
            alt: "Cave à charpente en bois et bouteilles rangées",
          },
        ]}
      />
      <div className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <Reveal>
          <Link href="/cures/residence" className="micro-label border-b border-border-strong pb-1">
            Découvrir la Cure Résidence
          </Link>
        </Reveal>
      </div>

      {/* Bloc 5 — CTA */}
      <CTASection
        title="Confiez-nous votre projet."
        text="Chaque demeure est unique. Indiquez-nous vos besoins et vos contraintes — nous planifierons un échange dédié pour concevoir la Cure adaptée à votre bien."
        cta={{ label: "Échanger avec un chef de projet", href: "/contact" }}
      />

      {/* Bloc 6 — Photo pleine largeur + texte bas */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <Reveal>
          <div className="relative aspect-[16/7] w-full overflow-hidden">
            <Image
              src="/images/veya-originals/salle-de-bain-arche-travertin.jpg"
              alt="Arche menant à une salle de bain en travertin"
              fill
              sizes="90vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1} className="mx-auto mt-10 max-w-2xl text-center">
          <p className="font-serif text-2xl italic md:text-3xl">
            Un accompagnement sur-mesure au quotidien
          </p>
          <p className="mt-6 font-sans text-base leading-relaxed text-foreground-muted">
            En liant une organisation fluide à l&apos;excellence de nos gouvernantes, nous
            répondons à vos besoins avec une réactivité totale. Un suivi attentif, le sens
            du détail et la promesse d&apos;échanges simples et personnalisés.
          </p>
        </Reveal>
      </section>

      {/* Bloc 7 — Parcours d'adhésion */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-2">
        <Reveal>
          <SectionLabel className="mb-6">Adhésion</SectionLabel>
          <h2 className="font-serif text-3xl italic leading-snug md:text-4xl">
            Le parcours d&apos;adhésion
          </h2>
          <Hairline className="my-10" />
          <ol className="flex flex-col gap-8">
            {[
              {
                title: "Approche",
                text: "Premier contact discret et orientation vers la cure adaptée à votre résidence.",
              },
              {
                title: "Entretien",
                text: "Échange confidentiel pour appréhender vos habitudes de vie, vos contraintes et vos exigences.",
              },
              {
                title: "Audit",
                text: "Visite technique sur site et élaboration de votre protocole sur-mesure.",
              },
              {
                title: "Adhésion",
                text: "Validation de la feuille de route et officialisation de notre engagement.",
              },
              {
                title: "Orchestration",
                text: "Prise en charge de votre bien et déploiement de la cure sous le signe de la discrétion.",
              },
            ].map((step, i) => (
              <li key={step.title} className="flex gap-6">
                <span className="micro-label pt-1">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-serif text-xl italic md:text-2xl">{step.title}</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-foreground-muted">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <Link
            href="/contact"
            className="micro-label mt-12 inline-block border border-border-strong px-6 py-4 text-foreground transition-colors hover:border-foreground"
          >
            Faire une demande d&apos;adhésion
          </Link>
        </Reveal>
      </section>

      {/* Bloc 8 — Portfolio */}
      <section className="mx-auto max-w-7xl px-6 py-16 pb-32 md:px-10">
        <Reveal>
          <SectionLabel className="mb-6">Portfolio</SectionLabel>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            {
              src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=75",
              alt: "Salle de bain en marbre avec baignoire îlot",
            },
            {
              src: "https://images.unsplash.com/photo-1600566752229-250ed79470f8?auto=format&fit=crop&w=900&q=75",
              alt: "Cuisine en marbre blanc et façades noir mat",
            },
            {
              src: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=900&q=75",
              alt: "Tapis roulé laissant apparaître son tissage",
            },
            {
              src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=900&q=75",
              alt: "Chambre au lit dressé avec plaid zébré",
            },
          ].map((img) => (
            <Reveal key={img.src}>
              <Link href="/portfolio" className="relative block aspect-square w-full overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 22vw, 45vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
