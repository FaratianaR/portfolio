# Portfolio & blog de Faratiana Rahary

Site Astro statique inspiré du prototype https://faratiana-digital-app.lovable.app/ : palette crème / orange / corail, typographies Sora et Manrope, portrait, parcours, prestations et certifications. Les polices et le portrait optimisé sont locaux.

## Démarrer

Avec Node.js 22.12+ (ou Node.js 24) et npm installés :

```sh
npm install
npm run dev
```

Le site est accessible à http://localhost:4321. `npm run check` vérifie les types et les composants. `npm run build` génère `dist/`. `npm run preview` sert la version compilée.

Un verrou `pnpm-lock.yaml` est également fourni pour une installation reproductible avec pnpm : `pnpm install --frozen-lockfile`, puis `pnpm build`.

## Ajouter un article

1. Copier `templates/article.md` dans `src/content/blog/mon-article.md`.
2. Modifier le titre, la description, la date, la catégorie et les tags.
3. Écrire le contenu en Markdown.
4. Passer `draft: true` à `draft: false` pour publier.
5. Reconstruire le site ou pousser les modifications sur le dépôt relié à l’hébergement.

Le nom du fichier définit l’adresse : `mon-article.md` devient `/blog/mon-article/`. Les articles sont classés par date décroissante. Les brouillons ne sont générés ni listés, même en développement. Les dates futures ne programment pas une publication : utiliser `draft` tant que l’article ne doit pas paraître.

Les images vont dans `public/images/` et se référencent ainsi : `![Description](/images/photo.webp)`.

Les trois articles fournis sont des **textes de démonstration rédigés pour cette version**, à relire, remplacer ou passer en brouillon avant publication.

## Modifier le portfolio

- `src/data/site.ts` : prestations, chiffres, outils, navigation et e-mail.
- `src/data/certifications.ts` : certifications reprises du prototype.
- `src/pages/index.astro` : accueil.
- `src/pages/about.astro` : présentation.
- `src/styles/global.css` : identité visuelle et responsive.
- `src/layouts/Layout.astro` : navigation, pied de page et métadonnées SEO.

Les témoignages fictifs en lorem ipsum du prototype sont volontairement exclus. Le CV et le portfolio sont proposés sur demande ; aucun faux document ni lien de téléchargement n’est généré.

## Contact sans serveur

Le formulaire prépare un lien `mailto:` et ouvre la messagerie du visiteur. Il n’envoie rien automatiquement et n’enregistre pas les données. Un lien e-mail direct reste disponible. Un véritable envoi depuis le site nécessiterait plus tard un service de formulaire ou une fonction Cloudflare.

## Déployer sur Cloudflare Workers

Le fichier `wrangler.json` configure le Worker `faratiana-digital`, sa date de compatibilité et les fichiers statiques dans `dist/`.

Dans Cloudflare Workers Builds :

- Commande de compilation : `npm run build`
- Commande de déploiement : `npx wrangler deploy`

L’installation automatique utilise pnpm 10.11.1, fixé dans `package.json`. Définir `SITE_URL` avec l’URL publique définitive pour les URL canoniques. La page `404.html` générée par Astro sera utilisée pour les adresses inexistantes.

Pour publier manuellement depuis le terminal : `npm run build`, puis `npx wrangler deploy` (connexion Cloudflare requise).

## Alternative : Cloudflare Pages

1. Créer un dépôt Git et y pousser le projet.
2. Relier le dépôt à Cloudflare Pages.
3. Utiliser Node.js 24, `pnpm install --frozen-lockfile && pnpm build` comme commande de compilation et `dist` comme dossier de sortie.
4. Définir `SITE_URL` avec l’URL publique définitive (ex. `https://votre-domaine.fr`) pour activer les URL canoniques.

Si l’environnement ne fournit pas pnpm, utiliser npm pour installer et compiler, ou activer pnpm dans l’environnement de build. Ne pas mélanger les gestionnaires de paquets dans un même environnement.

Le dossier `dist/` contient uniquement des fichiers statiques et peut aussi être téléversé directement. Aucun adaptateur Cloudflare, serveur, base de données ni secret n’est nécessaire. Le projet n’a pas été publié.

### Certifications et liens de vérification

Ajouter une certification dans `src/data/certifications.ts` avec ses champs `year`, `title`, `issuer` et `category`. L’ordre du tableau détermine l’ordre d’affichage. La page affiche six cartes, puis six de plus à chaque clic. Changer de catégorie réinitialise l’affichage à six résultats.

Ajouter le champ facultatif `credentialUrl` avec l’URL officielle complète du certificat quand elle est disponible. Une URL HTTP(S) valide rend la carte cliquable, avec ouverture dans un nouvel onglet. En l’absence d’URL (ou si elle est invalide), aucun lien n’est affiché. Aucune URL fictive n’est fournie.
