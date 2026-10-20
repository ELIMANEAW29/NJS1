# Vérification du portfolio personnalisé — 20 octobre 2026

## Réussi

- npm run typecheck : TypeScript strict validé.
- npm run build : build de production réussi avec Next.js 16.4.2.
- npm run check : contrôles HTTP sur le vrai serveur de production réussis.
- Routes /, /a-propos, /projets, /contact et /projets/edurecouv : 200 et contenu présent.
- Filtre Application : renvoie uniquement EduRecouv ; horodatages distincts entre deux requêtes et Cache-Control no-store confirmé.
- Catégorie inconnue : sélection complète ; pages inconnues : HTTP 404.
- Images locales de la galerie : HTTP 200.
- E-mail, téléphone, WhatsApp et lien CV présents sur la page Contact.
- Fichier PDF du CV servi correctement et identique octet pour octet à l’original récupéré.
- Fiche EduRecouv : technologies PHP/MySQL, présentation du projet personnel et galerie présentes.
- Toutes les classes CSS utilisées sont définies.
- Les trois visuels SVG ont été rendus en PNG pour inspection ; tableau de bord, élèves et paiements inspectés visuellement. Contraste du logo corrigé.

## Sources des informations

Coordonnées et parcours tirés du CV_Elimane_Aw.pdf (version 15), avec e-mail confirmé dans le message de l’utilisateur. Téléphone : +221 77 416 01 83. Ville : Dakar, Sénégal. Aucun profil LinkedIn ou GitHub personnel n’a été inventé.

Fonctionnalités et technologies EduRecouv reprises du CV. Le logo provient de l’aperçu EduRecouv 1.7. Les trois visuels du portfolio sont des reconstitutions illustratives avec données fictives ; ils ne sont pas présentés comme des captures de production.

## Limites

Aucune interaction de navigateur n’a été automatisée. Tester le menu mobile, le clavier, l’ouverture de la messagerie et les liens téléphone/WhatsApp sur les appareils cibles. Le formulaire ouvre un brouillon via mailto ; aucun message n’a été envoyé et aucun service d’envoi côté serveur n’est configuré.

Le lien https://edurecouv.devoagency.com reprend la dernière adresse explicitement communiquée ; il n’a pas pu être vérifié depuis cet environnement. L’ancienne variante devmoagency.com existe aussi dans les documents. Confirmer le domaine avant publication. Aucun site n’a été publié lors de cette mise à jour.
