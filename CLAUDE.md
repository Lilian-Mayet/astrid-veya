# CLAUDE.md — Projet VEYA (site vitrine, recode complet)

Ce fichier donne à Claude Code le contexte permanent du projet. Le lire intégralement avant toute modification. Les décisions listées ici priment sur les hypothèses par défaut.

## Contexte

VEYA est une maison privée de Haute Intendance (conciergerie de luxe pour résidences d'exception) basée à Paris. Le site actuel (Netlify, lien : https://sprightly-pie-e7abb5.netlify.app/) est recodé **de zéro**, pas migré. Inspiration produit/direction artistique : https://www.arthurmajordome.com/ (grosse typo romain+italique mêlée, micro-labels en petites capitales avant chaque titre de section, générosité des blancs, alternance image/texte, parcours en étapes numérotées).

Le contenu texte final (source de vérité, à citer tel quel, ne jamais paraphraser) est dans `CONTENT.md`. Le brief complet de build est dans `PROMPT_CLAUDE_CODE.md`.

## Stack imposée

- **Next.js 14+ (App Router), TypeScript.**
- **Tailwind CSS** pour le style (design tokens en variables CSS, voir section Design System).
- **Framer Motion** pour les animations/transitions (scroll reveal, hover, transitions de page).
- **Resend** (ou équivalent API email simple) pour l'envoi du formulaire de contact — pas de Netlify Forms.
- Hébergement : pas encore tranché entre Netlify et Vercel — **coder sans dépendance à une plateforme précise** (pas d'API routes propriétaires Netlify). Privilégier des choix compatibles avec les deux (Vercel recommandé nativement pour Next.js, mais garder Netlify possible).
- Images : `next/image`, optimisation automatique, lazy loading natif.

## Arborescence des pages (validée, à respecter strictement)

```
/                       Accueil
/cures                  Index des 3 cures (page "Collections" renommée)
/cures/revelation
/cures/signature
/cures/residence
/philosophie
/adn                    Nouvelle page
/portfolio
/contact
```

**Aucune page "Expertises" ni "Modules & options" ne doit exister.** Si le nav actuel du site live en contient, elles sont volontairement abandonnées dans le recode.

## Wording obligatoire

- "Collections" → **"Cures"** partout, y compris dans le formulaire de contact et les URLs (`/cures/...`, pas `/collections/...`).
- Bouton formulaire : "Confier mon projet" (jamais "Envoyer ma demande").
- Case de consentement RGPD : "Autoriser VEYA à me recontacter afin d'échanger sur les besoins de ma résidence."

## Décisions par défaut sur les points laissés ouverts par le client

Le client a explicitement laissé plusieurs choix à l'appréciation de l'exécution. Voici la position par défaut — appliquer ces choix sauf instruction contraire au moment du prompt :

1. **Blocs "image à droite ou rien"** (pages Révélation, Résidence, Contact — bloc 1) : mettre une image. Un hero asymétrique texte/image est plus proche de l'inspiration Arthur Majordome qu'un bloc de texte seul sur fond uni.
2. **Disposition des "modalités d'intervention"** (bloc 6 de chaque page Cure) : grille de 4 cartes égales (2x2 desktop, empilées mobile), avec un trait fin ou une numérotation discrète en haut de chaque carte plutôt qu'une icône (cohérent avec le style épuré du site).
3. **"Visite et audit offerts"** (page Contact) : conserver la mention mais la présenter en dernier de la liste des 4 réassurances et dans une graisse plus légère que les 3 autres, pour ne pas la sur-exposer (le client craint d'attirer les curieux — on ne la supprime pas mais on la minimise visuellement).
4. **3 blocs bas de page Contact jugés "cheap"** : supprimés, remplacés par une simple ligne "Notre bureau — France · Paris" dans le footer.
5. **Page ADN** : contenu non fourni par le client. Rédiger une ébauche courte (3-4 paragraphes) dans le même ton que la page Philosophie, en piochant sur l'origine/la vocation de VEYA, et la signaler clairement comme **contenu provisoire à valider par le client** (commentaire JSX `{/* TODO: contenu ADN à valider client */}` + éventuellement bandeau discret en dev uniquement).
6. **Écran d'intro "Cliquez pour entrer"** : à conserver (décision client confirmée). Le garder léger (pas de vidéo lourde), avec un skip/fade rapide, et ne jamais bloquer l'indexation SEO (le contenu de la home doit rester crawlable même avec ce gate — ne pas le faire dépendre uniquement du JS pour le SEO, ou prévoir un fallback SSR).
7. **Hero vidéo** : laissé à l'appréciation technique. Recommandation : prévoir le composant hero pour accepter soit une image (Ken Burns léger en CSS/Framer Motion), soit une vidéo courte en boucle (mp4 + poster), avec un flag simple pour basculer facilement plus tard sans refactor.
8. **Geste 3 de la Cure Signature** : le doc source a un titre en doublon ("Polissage & effet miroir" x2). `CONTENT.md` renomme le second en "Staging textile" pour cohérence avec le texte associé — signaler ce point au client en review, ne pas le considérer comme définitif à 100%.

## Assets

- **Photos** : le client n'a pas encore fourni les visuels finaux. Utiliser des **placeholders réalistes** (Unsplash/Pexels, thématiques : intérieurs haussmanniens, marbre, cuisine haut de gamme, linge de maison, dressing, réception privée, hôtel particulier parisien). Organiser les images dans `/public/images/{page}/{bloc}.jpg` avec des noms explicites pour faciliter le remplacement ultérieur par les vraies photos, sans jamais faire dépendre le layout d'un ratio d'image spécifique à un placeholder (prévoir `object-fit: cover` partout).
- **Logo** : fichier final fourni par le client séparément (vectoriel/PNG) — prévoir `/public/logo/veya-logo.svg` (+ variante blanche pour fond sombre) et laisser un logo texte simple en fallback tant que le fichier n'est pas intégré au repo.

## Design system (à formaliser en tokens Tailwind/CSS)

- Thème sombre dominant (`#0a0a0a` proche de l'existant), typographie double :
  - **Titres** : serif élégante, avec emphase en italique sur les mots-clés (mélange romain/italique dans une même phrase, comme dans le contenu fourni — respecter les `*mots en italique*` du `CONTENT.md`).
  - **Corps de texte / labels** : sans-serif fine, tracking large sur les petites capitales de type micro-label (ex. "— Résidence —").
- Traits fins pleine largeur comme séparateurs de section (mentionnés explicitement dans le brief pour les pages Cure).
- Beaucoup d'espace négatif, sections en alternance image/texte, jamais d'image en plein écran hors hero (le client insiste : "on voit toujours le fond du site en dessous, garder la largeur du bloc").
- Micro-interactions : fade/slide au scroll (Framer Motion `whileInView`), transitions douces entre pages.

## Ce qu'il ne faut PAS faire

- Ne pas migrer/porter le code actuel : recode complet from scratch.
- Ne pas conserver "Expertises" ni "Modules & options" dans la nav ou le routing.
- Ne pas utiliser Netlify Forms pour le formulaire de contact.
- Ne pas inventer de chiffres, labels RSE, certifications ou partenariats non mentionnés dans `CONTENT.md`.
- Ne pas paraphraser les textes en italique de `CONTENT.md` — ce sont des textes validés par le client, à reproduire exactement.

## Qualité / check avant livraison

- Lighthouse mobile ≥ 90 (perf/SEO/accessibilité).
- Formulaire de contact testé en envoi réel (Resend en mode test acceptable).
- Vérifier que chaque page de `CONTENT.md` a bien tous ses blocs représentés (checklist bloc par bloc).
- Responsive vérifié sur mobile (375px), tablette (768px), desktop (1440px).
