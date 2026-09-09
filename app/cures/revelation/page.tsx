import type { Metadata } from "next";
import { SplitHero } from "@/components/ui/SplitHero";
import { Reveal } from "@/components/ui/Reveal";
import { CureBlock } from "@/components/ui/CureBlock";
import { GesteCard } from "@/components/ui/GesteCard";
import { QuoteOnImage } from "@/components/ui/QuoteOnImage";
import { ModaliteGrid } from "@/components/ui/ModaliteGrid";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Cure Révélation",
  description:
    "La Cure Révélation : le standard de soin post-chantier VEYA, conçu pour sublimer les livraisons des cabinets d'architecture et des résidences de prestige.",
};

export default function RevelationPage() {
  return (
    <>
      <SplitHero
        eyebrow="révélation"
        title={
          <>
            Du chantier <em className="italic">au foyer</em>
          </>
        }
        description="Le standard de soin post-chantier conçu pour sublimer les livraisons des cabinets d'architecture et des résidences de prestige."
        cta={{ label: "Parlons de votre chantier", href: "/contact" }}
        image={{
          src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=75",
          alt: "Salon lumineux après travaux, mur de cadres et grandes fenêtres",
        }}
      />

      <section className="mx-auto max-w-3xl px-6 pb-16 text-center md:px-10">
        <Reveal>
          <p className="font-sans text-lg leading-relaxed text-foreground-muted">
            La Cure Révélation s&apos;adresse aux propriétaires de résidences
            d&apos;exception, aux architectes d&apos;intérieur et aux maîtres d&apos;ouvrage
            exigeants à la recherche d&apos;un partenaire d&apos;élite pour concrétiser la
            livraison de leurs plus beaux projets.
          </p>
        </Reveal>
      </section>

      <CureBlock
        title="Une maison d'intendance qui prend soin de votre patrimoine"
        subtitle={
          <>
            Le passage critique
            <br />
            du chantier à la livraison
          </>
        }
        texts={[
          <>
            À l&apos;issue d&apos;une rénovation ou d&apos;une construction, la transition
            entre la fin des travaux et l&apos;investiture des lieux exige une attention
            extrême. La Cure Révélation a été conçue pour effacer les traces du chantier,
            libérer les espaces de toute poussière résiduelle et révéler la beauté
            originelle de votre demeure.
          </>,
          <>
            Orchestrée par nos gouvernantes et nos experts en soin des surfaces, cette
            intervention de haute précision traite chaque matériau avec la délicatesse
            qu&apos;il requiert — marbres, parquets anciens, boiseries ou textiles précieux.
            VEYA prépare ainsi votre résidence à accueillir vos premiers moments de vie dans
            une sérénité et une propreté absolues.
          </>,
        ]}
        largeImage={{
          src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=75",
          alt: "Séjour et cuisine ouverts en bois clair, finitions neuves",
        }}
        pairedImages={[
          {
            src: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=75",
            alt: "Salon épuré aux lignes nettes",
          },
          {
            src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=75",
            alt: "Entrée et coin repas ordonnés",
          },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <Reveal>
          <h2 className="font-serif text-3xl italic leading-snug md:text-4xl">
            Quatre gestes techniques, une seule promesse
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2">
          <GesteCard
            number={1}
            title="Aspiration cryogénique"
            text="Élimination totale des particules fines avant tout passage humide — pour ne jamais transformer la poussière en boue. Une étape déterminante pour la propreté finale."
            image={{
              src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=75",
              alt: "Salle de bain en marbre avec douche en verre, surfaces immaculées",
            }}
          />
          <GesteCard
            number={2}
            title="Dégraissage des menuiseries"
            text="Retrait des résidus de colle, silicone et étiquettes sans rayer les châssis — souvent en aluminium ou en bois précieux. Précision chirurgicale sur chaque arête."
            image={{
              src: "https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?auto=format&fit=crop&w=1200&q=75",
              alt: "Grandes baies vitrées et menuiseries d'un salon contemporain"
            }}
            delay={0.05}
          />
          <GesteCard
            number={3}
            title="Traitement des sols neufs"
            text="Cristallisation des marbres, huilage des parquets, décapage après-pose des carrelages — élimination du voile de ciment. Chaque essence reçoit le soin qui lui revient."
            image={{
              src: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=1200&q=75",
              alt: "Tapis roulé laissant apparaître le tissage et le sol",
            }}
            delay={0.1}
          />
          <GesteCard
            number={4}
            title="Vitrerie et matériaux nobles"
            text="Vitrage en grande hauteur sans trace, soin spécifique des pierres naturelles et parquets, assainissement complet des volumes avant remise des clés."
            image={{
              src: "https://images.unsplash.com/photo-1600566752229-250ed79470f8?auto=format&fit=crop&w=1200&q=75",
              alt: "Cuisine en marbre blanc et façades noir mat",
            }}
            delay={0.15}
          />
        </div>
      </section>

      <QuoteOnImage
        image={{
          src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=75",
          alt: "Façade nocturne d'une maison contemporaine, éclairage chaleureux",
        }}
        quote="L'effacement parfait du chantier pour ne laisser place qu'à l'émotion du lieu."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <h2 className="font-serif text-3xl italic leading-snug md:text-4xl">
            Modalités et cadre d&apos;intervention
          </h2>
        </Reveal>
        <div className="mt-14">
          <ModaliteGrid
            items={[
              {
                title: "Visite préalable & Audit technique",
                text: "Une inspection rigoureuse du site avec l'architecte ou le maître d'ouvrage pour identifier les matériaux (marbres, boiseries, verreries), évaluer la fin des travaux et établir un cahier des charges sur-mesure.",
              },
              {
                title: "Équipes dédiées & Matériel spécialisé",
                text: "Intervention de nos gouvernantes et spécialistes formés aux techniques de soin adapté. Utilisation exclusive de produits neutres, éco-responsables et d'équipements de pointe adaptés aux surfaces d'exception.",
              },
              {
                title: "Encadrement & Continuité",
                text: "Présence continue d'un chef de projet VEYA sur site pour orchestrer le déroulement des opérations, contrôler la conformité du protocole et servir d'interlocuteur unique.",
              },
              {
                title: "Confidentialité & Assurance",
                text: "Protocoles de sécurité stricts (gestion sécurisée des accès, accords de confidentialité pour nos équipes) et couverture d'assurance de haut niveau adaptée aux biens d'exception.",
              },
            ]}
          />
        </div>
      </section>

      <CTASection
        title="Parlons de votre chantier"
        cta={{ label: "Parlons de votre chantier", href: "/contact" }}
      />
    </>
  );
}
