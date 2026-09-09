export type CureSlug = "revelation" | "signature" | "residence";

export const cures: { slug: CureSlug; label: string; tagline: string }[] = [
  { slug: "revelation", label: "Révélation", tagline: "Du chantier au foyer" },
  {
    slug: "signature",
    label: "Signature",
    tagline: "Événements & Scénographie",
  },
  {
    slug: "residence",
    label: "Résidence",
    tagline: "La haute intendance au quotidien",
  },
];

export const primaryNav = [
  { label: "Cures", href: "/cures", children: cures },
  { label: "Philosophie", href: "/philosophie" },
  { label: "ADN", href: "/adn" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;

export const ctaBooking = { label: "Prendre rendez-vous", href: "/contact" };

export const pillars = [
  { slug: "serenite", label: "Sérénité" },
  { slug: "exigence", label: "Exigence" },
  { slug: "conservation", label: "Conservation" },
  { slug: "sur-mesure", label: "Sur-mesure" },
  { slug: "discretion", label: "Discrétion" },
] as const;

export const siteConfig = {
  name: "VEYA",
  office: "Notre bureau — France · Paris",
  email: "contact@veya-paris.fr",
  // TODO: liens réseaux réels à fournir par le client
  social: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Confidentialité", href: "/confidentialite" },
  ],
};
