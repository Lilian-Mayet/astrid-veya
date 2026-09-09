import { IntroGate } from "@/components/IntroGate";
import { SplitHero } from "@/components/ui/SplitHero";
import { CTASection } from "@/components/ui/CTASection";

/**
 * Page d'accueil temporaire — sert uniquement à valider le setup (étape 1)
 * et les composants de base (étape 2) avant la construction du contenu
 * réel de CONTENT.md (étape 3).
 */
export default function Home() {
  return (
    <>
      <IntroGate />
      <SplitHero
        eyebrow="Veya"
        title={
          <>
            Vous avez l&apos;art de vivre,
            <br />
            <em className="italic">on a l&apos;art d&apos;en prendre soin.</em>
          </>
        }
        description="VEYA est une maison privée de Haute Intendance dédiée à la préservation et au soin des plus belles demeures de France."
        cta={{ label: "Prendre rendez-vous", href: "/contact" }}
        image={{
          src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
          alt: "Salon haussmannien avec moulures et cheminée en marbre",
        }}
      />
      <CTASection
        title="Confiez-nous votre projet."
        text="Chaque demeure est unique. Indiquez-nous vos besoins et vos contraintes — nous planifierons un échange dédié pour concevoir la Cure adaptée à votre bien."
        cta={{ label: "Échanger avec un chef de projet", href: "/contact" }}
      />
    </>
  );
}
