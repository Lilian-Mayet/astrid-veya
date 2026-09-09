# VEYA — Site vitrine

Recode complet (Next.js 14+ App Router, TypeScript, Tailwind CSS, Framer Motion) du site vitrine de VEYA, maison privée de Haute Intendance. Voir [CLAUDE.md](./CLAUDE.md) pour le contexte projet et les décisions par défaut, et [content.md](./content.md) pour le contenu texte source.

## Installation

```bash
npm install
cp .env.example .env.local   # puis renseigner RESEND_API_KEY et CONTACT_EMAIL
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Variables d'environnement

| Variable | Rôle |
|---|---|
| `RESEND_API_KEY` | Clé API [Resend](https://resend.com/api-keys) utilisée par `app/api/contact/route.ts` pour l'envoi du formulaire. |
| `CONTACT_EMAIL` | Adresse qui reçoit les demandes du formulaire de contact. |

Sans domaine d'envoi vérifié sur Resend, l'API utilise l'adresse `onboarding@resend.dev` (mode test) — voir la [doc Resend](https://resend.com/docs/dashboard/domains/introduction) pour vérifier un domaine en production.

## Scripts

- `npm run dev` — serveur de développement.
- `npm run build` — build de production.
- `npm run start` — sert le build de production.
- `npm run lint` — ESLint.

## Déploiement

Le projet n'a pas de dépendance à une plateforme précise (pas d'API routes propriétaires Netlify) — il se déploie aussi bien sur **Vercel** (recommandé nativement pour Next.js) que sur **Netlify**. Penser à configurer `RESEND_API_KEY` et `CONTACT_EMAIL` dans les variables d'environnement de la plateforme choisie.

## Structure

```
app/                  Pages (App Router) + route API /api/contact
components/           Briques UI réutilisables (components/ui/) + composants de layout
lib/                  Config du site, validation partagée du formulaire
public/logo/          Logo VEYA (noir + variante blanche pour fond sombre)
public/images/{page}/ Visuels placeholder, un dossier par page
```
