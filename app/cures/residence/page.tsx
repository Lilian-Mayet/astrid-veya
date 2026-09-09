import type { Metadata } from "next";
import { SplitHero } from "@/components/ui/SplitHero";
import { Reveal } from "@/components/ui/Reveal";
import { CureBlock } from "@/components/ui/CureBlock";
import { QuoteOnImage } from "@/components/ui/QuoteOnImage";
import { ModaliteGrid } from "@/components/ui/ModaliteGrid";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Cure Résidence",
  description:
    "La Cure Résidence : un soin régulier et continu pour maintenir la haute tenue de votre demeure au quotidien.",
};

export default function ResidencePage() {
  return (
    <>
      <SplitHero
        eyebrow="résidence"
        title={
          <>
            La haute intendance <em className="italic">au quotidien</em>
          </>
        }
        description="Un soin régulier et continu pour maintenir la haute tenue de votre demeure au quotidien."
        cta={{ label: "Demander un audit privé", href: "/contact" }}
        image={{
          src: "/images/veya-originals/chambre-chevet-laiton-pivoines.jpg",
          alt: "Chambre avec chevet en laiton et pivoines",
        }}
      />

      <section className="mx-auto max-w-3xl px-6 pb-16 text-center md:px-10">
        <Reveal>
          <p className="font-sans text-lg leading-relaxed text-foreground-muted">
            La Cure Résidence s&apos;adresse aux propriétaires d&apos;exception, aux family
            offices et aux gestionnaires de résidences secondaires en quête d&apos;un
            partenaire de confiance pour assurer le soin continu, la tenue irréprochable et
            la préservation de leurs intérieurs au quotidien.
          </p>
        </Reveal>
      </section>

      <CureBlock
        title="Une maison d'intendance qui prend soin de votre patrimoine"
        subtitle={<>La préservation de vos biens à travers 3 piliers</>}
        texts={[
          <>
            Au-delà de l&apos;entretien visible, nos équipes assurent une veille rigoureuse
            sur l&apos;état général de votre résidence. Inspection des installations,
            contrôle des accès et détection préventive des moindres désordres techniques :
            nous veillons au bon fonctionnement de votre lieu pour prévenir l&apos;usure,
            éviter les imprévus et garantir la pérennité de vos équipements en toute
            discrétion.
          </>,
          <>
            Chaque surface noble — marbres, parquets d&apos;époque, boiseries rares ou
            textiles délicats — exige un savoir-faire spécifique. Nos gouvernantes
            appliquent des protocoles de soin sur-mesure, fondés sur des gestes précis et des
            produits neutres à haute technicité. Nous préservons la matière, ravivons
            l&apos;éclat d&apos;origine et protégeons votre patrimoine mobilier et immobilier
            contre les effets du temps.
          </>,
          <>
            Nous orchestrons le quotidien de votre demeure pour que chaque retour chez vous
            soit une expérience fluide et sans contrainte. De la préparation personnalisée
            de vos espaces selon vos habitudes de vie à la gestion harmonieuse des détails
            invisibles, VEYA crée une atmosphère sur-mesure où tout est parfaitement
            orchestré, prêt à vous accueillir.
          </>,
        ]}
        largeImage={{
          src: "/images/veya-originals/salon-fauteuil-bouclette-cheminee.jpg",
          alt: "Salon avec fauteuil bouclette et cheminée",
        }}
        pairedImages={[
          {
            src: "/images/veya-originals/chambre-linge-blanc-fleurs.jpg",
            alt: "Chambre au linge blanc et fleurs fraîches",
          },
          {
            src: "/images/veya-originals/dressing-valet-chemise-linge.jpg",
            alt: "Dressing avec valet, chemise et linge plié",
          },
        ]}
      />

      <section className="mx-auto max-w-4xl px-6 py-16 md:px-10">
        <Reveal>
          <h2 className="font-serif text-3xl italic leading-snug md:text-4xl">
            Trois engagements indissociables, une promesse de constance
          </h2>
        </Reveal>

        <ol className="mt-14 flex flex-col gap-14">
          <Reveal>
            <li>
              <div className="flex items-baseline gap-4">
                <span className="micro-label">01</span>
                <h3 className="font-serif text-2xl italic">Adhésion et veille</h3>
              </div>
              <p className="mt-4 font-sans text-base leading-relaxed text-foreground-muted">
                Au-delà du soin apporté à vos espaces, votre adhésion structure et sécurise
                la gestion globale de votre résidence. Elle inclut l&apos;audit initial, la
                gestion sécurisée des accès, la coordination de vos tiers et une vigilance
                technique permanente. Grâce à notre reporting digital post-intervention et
                une priorité absolue sur nos plannings — même en haute saison —, vous
                bénéficiez d&apos;une maîtrise totale et d&apos;une réactivité sans faille.
              </p>
            </li>
          </Reveal>

          <Reveal delay={0.05}>
            <li>
              <div className="flex items-baseline gap-4">
                <span className="micro-label">02</span>
                <h3 className="font-serif text-2xl italic">Socle d&apos;entretien</h3>
              </div>
              <p className="mt-4 font-sans text-base leading-relaxed text-foreground-muted">
                Assurée sur une base minimale de deux interventions mensuelles selon les
                standards VEYA, la Cure Résidence déploie un savoir-faire d&apos;exception
                axé sur :
              </p>
              <ul className="mt-4 flex flex-col gap-3 border-l border-border pl-6 font-sans text-sm leading-relaxed text-foreground-muted">
                <li>
                  <span className="text-foreground">Protocole Sanitaire & Confort</span> —
                  assainissement discret, soin du linge et dressage des lits selon les
                  règles de la haute hôtellerie.
                </li>
                <li>
                  <span className="text-foreground">Soin Conservateur des Surfaces</span> —
                  utilisation exclusive de produits neutres et éco-responsables, adaptés aux
                  matériaux les plus précieux.
                </li>
                <li>
                  <span className="text-foreground">Audit de Début de Séjour</span> —
                  vérification méticuleuse des équipements (éclairage, connectivité Wi-Fi,
                  installations) avant chacune de vos arrivées.
                </li>
              </ul>
              <p className="mt-4 font-serif italic text-foreground-muted">
                Ce socle d&apos;interventions garantit la tenue irréprochable et la
                perfection constante de votre demeure au fil des saisons.
              </p>
            </li>
          </Reveal>

          <Reveal delay={0.1}>
            <li>
              <div className="flex items-baseline gap-4">
                <span className="micro-label">03</span>
                <h3 className="font-serif text-2xl italic">Grand soin saisonnier</h3>
              </div>
              <p className="mt-4 font-sans text-base leading-relaxed text-foreground-muted">
                Deux fois par an, en avril et en octobre, cette intervention d&apos;exception
                vient se substituer à un passage classique pour offrir à votre demeure une
                régénération en profondeur. Nos spécialistes réalisent alors un travail de
                haute technicité : cristallisation conservatrice des marbres, lustrage
                traditionnel des parquets, et soin nourrissant des cuirs et boiseries rares.
              </p>
              <p className="mt-4 font-serif italic text-foreground-muted">
                Ce rendez-vous bi-annuel est la clé pour traverser les saisons et assurer la
                pérennité de vos matériaux précieux.
              </p>
            </li>
          </Reveal>
        </ol>
      </section>

      <QuoteOnImage
        image={{
          src: "/images/veya-originals/salon-moulures-fenetre-haussmannienne.jpg",
          alt: "Salon haussmannien, moulures et fenêtres à la française",
        }}
        quote="Vous offrir la sérénité d'un lieu d'exception toujours irréprochable et le confort absolu d'une demeure prête à vous accueillir, jour après jour."
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
                title: "Audit initial & Protocole sur-mesure",
                text: "Un état des lieux technique approfondi pour cartographier vos matériaux nobles, vos équipements et vos habitudes de vie, permettant d'établir votre carnet de santé immobilier et le calendrier d'intervention.",
              },
              {
                title: "Gestion sécurisée des accès & Confidentialité",
                text: "Protocole de garde des clés sous scellé, accès chiffrés et engagement de discrétion absolue pour l'ensemble de nos gouvernantes et chefs de projet.",
              },
              {
                title: "Planification rigoureuse & Flexibilité",
                text: "Interventions programmées à jours fixes pour installer une routine fluide, avec ajustement prioritaire sous 24 à 48 heures en cas d'arrivée imprévue ou de besoin spécifique.",
              },
              {
                title: "Traçabilité & Suivi digital",
                text: "Transmission automatique d'un compte-rendu détaillé après chaque passage (points de contrôle validés, interventions effectuées, alertes techniques éventuelles) pour une transparence totale à distance.",
              },
            ]}
          />
        </div>
      </section>

      <CTASection
        title="Une étude sur-mesure pour votre demeure"
        text="Chaque résidence est unique. Décrivez-nous la vôtre — nous composerons une prise en charge à la mesure de ses matières, de son rythme et de vos exigences."
        cta={{ label: "Demander un audit privé", href: "/contact" }}
      />
    </>
  );
}
