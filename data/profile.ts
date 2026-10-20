// Coordonnées professionnelles confirmées dans le CV et par l’utilisateur.
export const profile = {
 name: 'Elimane Aw', shortName: 'Elimane Aw', role: 'Développeur web junior',
 location: 'Dakar, Sénégal',
 email: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || 'awelimane29@gmail.com',
 phone: '+221 77 416 01 83', phoneHref: 'tel:+221774160183',
 whatsapp: 'https://wa.me/221774160183?text=Bonjour%20Elimane%2C%20je%20vous%20contacte%20au%20sujet%20de%20votre%20portfolio.',
 cv: '/documents/CV_Elimane_Aw.pdf',
};
export const skills = [
 { title: 'Interfaces web', description: 'Construire des interfaces lisibles et adaptées à chaque écran.', tools: ['HTML', 'CSS', 'React', 'Next.js · en pratique'] },
 { title: 'Développement serveur', description: 'Organiser les données et développer la logique d’une application web.', tools: ['PHP', 'MySQL', 'TypeScript · en pratique'] },
 { title: 'Outils & suivi web', description: 'Versionner le code et assurer le suivi des sites après leur mise en ligne.', tools: ['Git', 'GitHub', 'VS Code', 'Gestion de sites web'] },
];
