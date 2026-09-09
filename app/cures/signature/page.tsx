import type { Metadata } from "next";
import { SplitHero } from "@/components/ui/SplitHero";
import { Reveal } from "@/components/ui/Reveal";
import { CureBlock } from "@/components/ui/CureBlock";
import { GesteCard } from "@/components/ui/GesteCard";
import { QuoteOnImage } from "@/components/ui/QuoteOnImage";
import { ModaliteGrid } from "@/components/ui/ModaliteGrid";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Cure Signature",
  description:
    "La Cure Signature : la Haute Intendance au service de vos événements et réceptions VIP, pour un cadre immaculé dans la discrétion absolue.",
};

export default function SignaturePage() {
  return (
    <>
      <SplitHero
        eyebrow="signature"
        title={
          <>
            Événements & <em className="italic">Scénographie</em>
          </>
        }
        description="La Haute Intendance au service de vos instants d'exception. Pour vos événements et réceptions VIP, la Collection Signature déploie un protocole sur-mesure garantissant un cadre immaculé dans la discrétion absolue."
        cta={{ label: "Initier votre projet", href: "/contact" }}
        image={{
          src: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1600&q=75",
          alt: "Salle à manger dressée pour une réception, chandelier et table élégante",
        }}
      />

      <section className="mx-auto max-w-3xl px-6 pb-16 text-center md:px-10">
        <Reveal>
          <p className="font-sans text-lg leading-relaxed text-foreground-muted">
            La Collection Signature s&apos;adresse aux propriétaires de résidences
            d&apos;exception, aux organisateurs d&apos;événements de prestige et aux
            gestionnaires de fortune à la recherche d&apos;un partenaire d&apos;élite pour
            leurs moments les plus exclusifs.
          </p>
        </Reveal>
      </section>

      <CureBlock
        title="Une maison d'intendance qui prend soin de votre patrimoine"
        subtitle={<>La valorisation esthétique d&apos;un moment clé</>}
        texts={[
          <>
            Dédiée aux instants d&apos;exception, la Collection Signature incarne
            l&apos;excellence de la Haute Intendance. Nous façonnons un cadre immaculé pour
            vos réceptions d&apos;envergure et événements VIP, alliant rigueur absolue et
            discrétion totale. Une préparation scénographique minutieuse avant votre
            réception, suivie d&apos;une restitution globale et ultra-réactive.
          </>,
          <>
            Conçue pour les propriétaires d&apos;exception, family offices et agences de
            prestige, la Collection Signature prépare et restitue vos hôtels particuliers ou
            propriétés pour vos galas, lancements et célébrations privées, selon vos
            contraintes d&apos;agenda.
          </>,
        ]}
        largeImage={{
          src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=75",
          alt: "Loft avec escalier et verrières, prêt à accueillir",
        }}
        pairedImages={[
          {
            src: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1200&q=75",
            alt: "Salon avec cheminée en pierre",
          },
          {
            src: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=75",
            alt: "Salon chaleureux prêt à recevoir des invités",
          },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <Reveal>
          <h2 className="font-serif text-3xl italic leading-snug md:text-4xl">
            Quatre gestes millimétrés, au service de l&apos;instant
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2">
          <GesteCard
            number={1}
            title="Polissage & effet miroir"
            text="Lustrage des robinetteries, des chromes et des plans de travail en pierre — un effet miroir absolu sur toutes les surfaces réfléchissantes, indispensable pour magnifier la lumière naturelle."
            image={{
              src: "https://images.unsplash.com/photo-1600566752229-250ed79470f8?auto=format&fit=crop&w=1200&q=75",
              alt: "Cuisine en marbre blanc et façades noir mat, robinetterie polie",
            }}
          />
          <GesteCard
            number={2}
            title="Transparence absolue"
            text="Nettoyage des vitres à l'eau pure ou technique spécifique pour une luminosité maximale — indispensable pour les photos HDR et les visites de prestige où chaque détail doit être visible sans reflet parasite."
            image={{
              src: "https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?auto=format&fit=crop&w=1200&q=75",
              alt: "Grandes baies vitrées d'un salon contemporain",
            }}
            delay={0.05}
          />
          <GesteCard
            number={3}
            title="Staging textile"
            text="Alignement millimétré des rideaux, repassage vapeur vertical des linges de maison, organisation esthétique des dressings. Un staging discret qui ne masque pas — qui révèle la qualité du lieu."
            image={{
              src: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=1200&q=75",
              alt: "Coin fenêtre avec rideaux soigneusement drapés",
            }}
            delay={0.1}
          />
          <GesteCard
            number={4}
            title="Signature olfactive"
            text="Signature olfactive unique VEYA, composée avec un parfumeur grassois indépendant. Une note de fond personnalisable — cèdre, figuier, coton, ambre — qui devient la mémoire sensorielle du lieu."
            image={{
              src: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=1200&q=75",
              alt: "Composition florale et végétale évoquant une note olfactive",
            }}
            delay={0.15}
          />
        </div>
        {/* Note révisée : le doc source titrait deux gestes "Polissage & effet miroir" —
            le second a été renommé "Staging textile" pour cohérence (cf. CLAUDE.md, à
            valider avec le client). */}
      </section>

      <QuoteOnImage
        image={{
          src: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=2400&q=75",
          alt: "Salon chaleureux prêt à recevoir des invités",
        }}
        quote="Offrir à vos hôtes la perfection d'un lieu immaculé et l'assurance d'une image irréprochable, avant et après vos moments d'exception."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <h2 className="font-serif text-3xl italic leading-snug md:text-4xl">
            Modalités d&apos;intervention
          </h2>
        </Reveal>
        <div className="mt-14">
          <ModaliteGrid
            items={[
              {
                title: "Repérage & cahier des charges",
                text: "Analyse préalable des espaces sollicités, de l'affluence prévue et des surfaces sensibles pour définir le protocole de protection et de préparation adapté.",
              },
              {
                title: "Préparation de l'écrin (amont)",
                text: "Intervention de nos gouvernantes avant l'événement : dépoussiérage de haute précision, sublimation des sols et préparation minutieuse des espaces pour accueillir vos invités dans des conditions irréprochables.",
              },
              {
                title: "Remise en état immédiate (aval)",
                text: "Prise en charge du lieu dès la fin de la réception. Nos équipes effacent toute trace de l'événement, restaurent l'ordre initial et assurent un soin conservateur sur l'ensemble du mobilier et des matériaux.",
              },
              {
                title: "Coordination & discrétion",
                text: "Synchro fluide avec vos équipes ou prestataires (traiteurs, fleuristes, régie) sous la direction d'un chef de projet VEYA, garant de la sécurité de votre demeure et de la confidentialité totale des échanges.",
              },
            ]}
          />
        </div>
      </section>

      <CTASection
        title="Préparons votre événement"
        text="Une visite, un shooting, une réception ? Décrivez-nous le moment à venir — nous vous proposons une préparation à la hauteur de l'instant."
        cta={{ label: "Demander un audit privé", href: "/contact" }}
      />
    </>
  );
}
