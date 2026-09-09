# TODO — VEYA

État au 2026-09-09. Étapes 1 (setup), 2 (composants de base) et 3 (toutes les pages) sont faites et commitées. Reste à faire avant livraison :

## Étape 4 — Responsive & accessibilité

- [ ] Vérification systématique à 375px, 768px, 1024px, 1440px sur les 9 pages (fait au fil de l'eau pendant le build, pas encore passé en revue page par page à chaque breakpoint).
- [ ] Navigation clavier : tester le parcours Tab sur le header (nav, sous-menu Cures, CTA), le menu mobile plein écran, le formulaire de contact, et l'IntroGate (focus piégé sur le bouton "Cliquez pour entrer" tant qu'il est affiché ?).
- [ ] Contraste AA sur les textes posés sur image (`QuoteOnImage`, hero) — le dégradé est en place mais pas mesuré formellement (ex. avec l'audit Lighthouse/axe).

## Étape 7 — SEO & performance

- [ ] `sitemap.xml` et `robots.txt` (pas encore générés).
- [ ] Images Open Graph / Twitter Card dédiées (les balises OG/Twitter existent via `metadata` mais sans image `og:image` par page).
- [ ] Audit Lighthouse mobile (perf/SEO/accessibilité ≥ 90) — pas encore passé.
- [ ] Vérifier que l'IntroGate n'affecte pas l'indexation (conçu pour ça — contenu SSR toujours présent — mais pas vérifié avec un outil d'audit SEO réel).

## Étape 8 — Livraison

- [ ] État des lieux final formel à remettre au client (liste des décisions par défaut appliquées + placeholders à remplacer) — une première version est dans ce fichier ci-dessous, à formaliser/envoyer.
- [ ] Test d'envoi réel du formulaire de contact avec une vraie clé Resend (actuellement testé uniquement en mode dev, sans clé configurée).

## Contenu à valider avec le client

- [ ] Page **ADN** : contenu provisoire rédigé par défaut (ton Philosophie), marqué TODO + bandeau dev — à valider ou remplacer.
- [ ] Geste 3 de la Cure Signature : renommé "Staging textile" (doublon dans le doc source) — à confirmer.
- [ ] **Mentions légales** et **Confidentialité** : pages stub (raison sociale, SIRET, hébergeur, politique RGPD du formulaire) — contenu non fourni dans `content.md`, à rédiger avec le client avant mise en ligne.
- [ ] Liens Instagram / LinkedIn dans le footer : actuellement `href="#"` (pas d'URL fournie).

## Assets

- [x] **Photos récupérées du site actuel** (`public/images/veya-originals/`) : 13 visuels haussmanniens/marbre/dressing/cave repris de https://sprightly-pie-e7abb5.netlify.app/ et réutilisés sur les blocs principaux (hero, CureBlock, QuoteOnImage, SplitHero, cartes Cures, header Contact, 2 catégories Portfolio). Une 14e image du site actuel (`ombre-porte.jpg`) a été écartée : c'est en réalité une façade contemporaine avec une personne et un chien, hors-charte (style non-haussmannien + personne identifiable).
- [ ] Il reste des placeholders Unsplash génériques sur : la grille dense "macro" du Portfolio (catégorie 1) et la catégorie "Le geste conservateur" (avant/après), les gestes techniques 1-3 de Révélation et 2/4 de Signature, et la mini-grille portfolio en bas de l'accueil — le stock de photos du site actuel (13 images) ne suffit pas à couvrir ces grilles qui demandent beaucoup de visuels distincts. À remplacer par les vraies photos du client quand elles seront disponibles.
- [ ] Logo : la variante blanche (`public/logo/veya-logo-white.png`) est une inversion CSS/ImageMagick du PNG noir fourni, pas un export natif — un vrai SVG blanc du client serait plus propre.

## Décisions par défaut appliquées (rappel, cf. CLAUDE.md)

Toutes les décisions par défaut listées dans CLAUDE.md (§ "Décisions par défaut") ont été appliquées telles que spécifiées : image en bloc 1 des pages Révélation/Résidence/Contact, grille 2×2 numérotée pour les modalités, "Visite et audit offerts" minimisée visuellement sur Contact, 3 blocs bas de page Contact supprimés (remplacés par la mention footer), IntroGate conservé (SEO-safe), hero home en carrousel image + Ken Burns (pas de vidéo pour l'instant).
