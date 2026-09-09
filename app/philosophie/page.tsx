import Link from "next/link";
import type { Metadata } from "next";
import { QuoteOnImage } from "@/components/ui/QuoteOnImage";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { pillars } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Philosophie",
  description:
    "La philosophie de VEYA : une maison d'intendance privée qui orchestre le soin des résidences d'exception, entre sérénité, exigence, conservation, sur-mesure et discrétion.",
};

const pillarContent: Record<string, string> = {
  serenite:
    "Notre promesse fondamentale : la sérénité. En prenant en charge l'ensemble des contraintes logistiques et techniques, nous vous offrons le luxe ultime : la tranquillité d'esprit et la liberté de profiter pleinement de vos lieux.",
  exigence:
    "Nous appliquons un niveau d'excellence constant dans chaque geste. Du contrôle qualité à la sélection de nos équipes, aucun détail n'est laissé au hasard pour maintenir vos espaces dans leur meilleur état.",
  conservation:
    "Chaque surface noble (marbres rares, boiseries, laques, textiles d'art) exige un soin spécifique. Nous déployons des protocoles adaptés pour protéger durablement votre patrimoine contre l'usure et le temps.",
  "sur-mesure":
    "Chaque demeure a son propre rythme et vous avez vos propres priorités. Qu'il s'agisse d'un suivi régulier, d'une livraison de chantier d'architecture ou de l'amont d'un événement, nous adaptons nos interventions à vos contraintes exactes.",
  discretion:
    "La discrétion est notre signature. Nous intervenons avec la plus stricte confidentialité et un sens aigu de la retenue pour préserver l'intimité de vos espaces et de votre quotidien.",
};

export default function PhilosophiePage() {
  return (
    <>
      <QuoteOnImage
        heightClassName="min-h-[90vh]"
        image={{
          src: "/images/veya-originals/salon-rideaux-vue-toits-paris.jpg",
          alt: "Rideaux de lin devant une fenêtre avec vue sur les toits de Paris",
        }}
        quote="Une résidence d'exception ne s'entretient pas, elle s'orchestre."
      />

      <section className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10">
        <Reveal>
          <p className="font-sans text-lg leading-relaxed text-foreground-muted">
            Bienvenue chez VEYA, une maison d&apos;intendance privée qui déploie, pour une
            clientèle exigeante et confidentielle, l&apos;excellence des plus hauts standards
            du soin de la demeure.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-8 pb-24 md:px-10">
        <Reveal className="flex flex-col gap-8 font-sans text-base leading-relaxed text-foreground-muted">
          <p>
            Chez VEYA, nous sommes convaincus que votre bien le plus précieux mérite
            d&apos;être choyé, tout autant que vous-même. Nous sommes une maison privée qui
            propose des services de conciergerie de luxe adaptés à vos besoins et votre
            réalité. Nous avons conscience qu&apos;une architecture d&apos;exception
            nécessite un entretien de qualité exceptionnelle.
          </p>
          <p>
            Les différentes cures offertes reposent sur la prise en compte de votre art de
            vivre. Une résidence d&apos;exception ne s&apos;entretient pas, elle
            s&apos;orchestre. Confiez-nous votre partition, et on s&apos;occupe de faire
            jouer la musique sans fausses notes. VEYA apporte aux résidences
            d&apos;exception un savoir-faire sur-mesure, combinant rigueur technique et
            respect absolu de l&apos;intimité des lieux.
          </p>
          <p>
            Les standards de l&apos;architecture et du design n&apos;ont jamais été aussi
            élevés, alors VEYA propose un service d&apos;intendance irréprochable et sur
            mesure. Nous avons imaginé un service calibré sur la valeur réelle des lieux que
            nous accompagnons, selon une méthode rigoureuse, moderne et structurée.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <Reveal>
          <SectionLabel align="center" className="mb-16 text-center">
            Les cinq piliers
          </SectionLabel>
        </Reveal>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-5">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.slug} delay={i * 0.05}>
              <div id={`pilier-${pillar.slug}`} className="scroll-mt-32 border-t border-border pt-6">
                <h2 className="font-serif text-2xl italic">{pillar.label}</h2>
                <p className="mt-4 font-sans text-sm leading-relaxed text-foreground-muted">
                  {pillarContent[pillar.slug]}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <QuoteOnImage
        heightClassName="min-h-[70vh]"
        image={{
          src: "/images/veya-originals/salle-a-manger-suspensions-fauteuils.jpg",
          alt: "Salle à manger et salon, vus en enfilade, prêts à recevoir",
        }}
        quote={
          <>
            En tant que <strong className="font-semibold not-italic">partenaire de confiance</strong>,
            VEYA s&apos;impose comme l&apos;allié invisible des propriétaires exigeants, des
            family offices, des architectes d&apos;intérieur et des agences événementielles
            de prestige. Nous veillons sur vos lieux pour ne vous laisser que le plaisir
            d&apos;y vivre, d&apos;y créer ou d&apos;y recevoir.
          </>
        }
      />

      <section className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10">
        <Reveal>
          <Link
            href="/contact"
            className="micro-label inline-block border border-border-strong px-8 py-4 text-foreground transition-colors hover:border-foreground"
          >
            Prendre rendez-vous
          </Link>
        </Reveal>
      </section>
    </>
  );
}
