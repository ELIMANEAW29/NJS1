# Portfolio Next.js — Elimane Aw

Projet de point de contrôle, configuré manuellement avec Next.js, React et TypeScript. Le routage utilise le **Pages Router**, comme demandé. EduRecouv est le projet personnel d’Elimane Aw, documenté dans son CV. Les deux autres projets sont des concepts pédagogiques. Les trois images EduRecouv sont des reconstitutions vectorielles de présentation avec données fictives, inspirées de l’aperçu 1.7 ; ce ne sont pas des captures de production.

## Démarrer

Prérequis : Node.js 22 LTS ou plus récent et npm.

```bash
npm ci
npm run dev
```

Ouvrir http://localhost:3000. Ne pas ouvrir les fichiers TSX directement dans le navigateur.

## Commandes

```bash
npm run typecheck
npm run build
npm start
```

Pour vérifier automatiquement les routes de production après le build : `npm run check`. Ce script démarre puis arrête lui-même un serveur sur le port 3187.

## Structure

- pages/index.tsx : accueil.
- pages/a-propos.tsx : présentation et compétences.
- pages/projets/index.tsx : catalogue avec filtres et rendu côté serveur.
- pages/projets/[slug].tsx : fiches projet avec routes dynamiques pré-générées.
- pages/contact.tsx : coordonnées et préparation du message.
- pages/404.tsx : page introuvable.
- pages/_app.tsx et _document.tsx : styles globaux et document français.
- components/ : structure commune et carte projet.
- styles/ : CSS global et module CSS partagé.
- data/ : profil et projets personnalisables.
- public/images/ : illustrations SVG locales utilisées avec next/image.

## Correspondance avec les consignes

1. Configuration Next.js manuelle, scripts npm et TypeScript strict.
2. Mise en forme responsive avec CSS Modules ; images locales avec next/image, texte alternatif et dimensions explicites.
3. Navigation avec next/link, routes basées sur les fichiers et indication de la page active.
4. SSR : getServerSideProps dans pages/projets/index.tsx filtre les projets et fournit un horodatage à chaque requête. La navigation de filtre conserve la logique serveur. Les autres pages et les fiches projet peuvent être pré-générées.
5. Projet déployable avec un serveur Node.js ou Vercel. Aucun déploiement n’est inclus dans ce ZIP.

L’horodatage visible sur Projets est une démonstration pédagogique du SSR. Pour un portfolio réel dont les données changent rarement, le pré-rendu statique est généralement suffisant.

## Personnalisation avant publication

1. Modifier data/profile.ts : nom, rôle, ville.
2. Modifier les compétences et textes pour refléter votre parcours réel.
3. EduRecouv est déjà mis en avant. Ajouter si souhaité d’autres réalisations réelles et remplacer les reconstitutions par des captures autorisées du produit. Atelier et Horizon restent des concepts de démonstration.
4. L’adresse awelimane29@gmail.com est intégrée par défaut. Pour la remplacer, copier .env.example en .env.local et adapter NEXT_PUBLIC_CONTACT_EMAIL. C’est une adresse publique, pas un secret. Relancer le serveur de développement et reconstruire après modification ; sur Vercel, configurer aussi la variable dans les paramètres puis redéployer.
5. Les titres de pages et le nom de marque dans components/Layout.tsx sont également personnalisables.

## Contact : comportement exact

Le formulaire valide les champs avec HTML et vérifie les valeurs vides côté client. Le bouton ouvre un brouillon adressé à awelimane29@gmail.com via mailto:. Un chemin de copie est aussi conservé dans le code pour une adaptation sans adresse. L’utilisateur doit envoyer le message depuis sa messagerie. Aucun service e-mail, aucune base de données ni collecte côté serveur n’est configuré. Aucun envoi n’est simulé.

## Déploiement

### Vercel

Créer un dépôt Git avec les sources, l’importer dans Vercel, conserver le framework Next.js, ajouter si souhaité NEXT_PUBLIC_CONTACT_EMAIL, puis lancer le déploiement. Le dépôt n’a pas besoin de node_modules ni de .next.

### Hébergement compatible Node.js

Transférer les sources et package-lock.json, installer Node.js 22+, puis exécuter :

```bash
npm ci
npm run build
npm start
```

Configurer le domaine, HTTPS et le proxy du fournisseur vers le port du processus Node. Le port peut être défini via la variable PORT du fournisseur. Conserver le processus avec le gestionnaire fourni par l’hébergement.

Un hébergement uniquement PHP/Apache sans processus Node.js ne peut pas exécuter ce SSR. Un export HTML statique demanderait de retirer getServerSideProps et de modifier le mode de déploiement : il ne satisfait plus la démonstration SSR actuelle.

## Vérifications

Voir VERIFICATION.md pour les résultats réellement exécutés. Aucune installation d’extension ni vérification visuelle dans votre navigateur n’est revendiquée. Tester aussi sur téléphone, au clavier et avec sa messagerie avant publication.

## Sources officielles

- https://nextjs.org/docs/pages/getting-started
- https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props
- https://nextjs.org/docs/pages/api-reference/components/image
- https://nextjs.org/docs/pages/getting-started/deploying

## Coordonnées et accès recruteurs

- Elimane Aw · Développeur web junior · Dakar, Sénégal.
- E-mail : awelimane29@gmail.com.
- Téléphone : +221 77 416 01 83 (lien tel:).
- WhatsApp : même numéro (lien wa.me ; aucun message envoyé automatiquement).
- CV original : public/documents/CV_Elimane_Aw.pdf, téléchargeable depuis l’accueil, le pied de page et le contact.
- Aucun profil LinkedIn ou GitHub n’a été inventé. Ajouter les URL personnelles après communication par Elimane.

## Lien EduRecouv

Le bouton utilise https://edurecouv.devoagency.com, dernière adresse explicitement communiquée dans les échanges sur le produit. Une ancienne adresse figure aussi dans l’aperçu (edurecouv.devmoagency.com). L’accès externe n’a pas pu être vérifié dans cet environnement : confirmer le domaine effectivement relié à l’hébergement avant publication et modifier liveUrl dans data/projects.ts si nécessaire.
