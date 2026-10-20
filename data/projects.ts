export type Category = 'Tous' | 'Application' | 'Site web' | 'Interface';
export type ProjectImage = { src: string; title: string; caption: string };
export type Project = { slug: string; name: string; category: Exclude<Category, 'Tous'>; summary: string; image: string; color: string; stack: string[]; challenge: string; approach: string; isDemo: boolean; role?: string; features?: string[]; gallery?: ProjectImage[]; liveUrl?: string };
export const categories: Category[] = ['Tous', 'Application', 'Site web', 'Interface'];
export const projects: Project[] = [
 { slug: 'edurecouv', name: 'EduRecouv', category: 'Application', summary: 'Mon application web de gestion scolaire : élèves, classes et suivi des frais de scolarité.', image: '/images/edurecouv-dashboard.svg', color: '#e0eee7', stack: ['PHP', 'MySQL', 'HTML', 'CSS'], isDemo: false, role: 'Projet personnel · développement web', liveUrl: 'https://edurecouv.devoagency.com',
 challenge: 'Centraliser les informations scolaires et donner aux établissements une vue claire sur les encaissements, les échéances et les impayés.',
 approach: 'Structurer les élèves et les classes, configurer les frais, suivre les paiements et organiser les accès aux données selon les rôles. Le tableau de bord facilite la lecture du recouvrement.',
 features: ['Gestion des élèves et des classes', 'Configuration des frais de scolarité', 'Suivi des encaissements et des échéances', 'Suivi des impayés et relances', 'Reçus de paiement', 'Tableau de bord et accès selon les rôles'],
 gallery: [
  { src: '/images/edurecouv-dashboard.svg', title: 'Tableau de bord', caption: 'Vue illustrative du suivi des encaissements et du recouvrement. Chiffres fictifs.' },
  { src: '/images/edurecouv-eleves.svg', title: 'Élèves et classes', caption: 'Vue illustrative de l’organisation des inscriptions et des classes. Aucune donnée réelle d’élève.' },
  { src: '/images/edurecouv-paiements.svg', title: 'Paiements et échéances', caption: 'Vue illustrative des encaissements et des échéances. Transactions de démonstration.' },
 ] },
 { slug: 'atelier', name: 'Atelier', category: 'Site web', summary: 'Une vitrine éditoriale pour un studio de création.', image: '/images/atelier.svg', color: '#eddfd0', stack: ['React', 'CSS', 'Design responsive'], isDemo: true, challenge: 'Présenter un univers créatif avec une navigation simple.', approach: 'Associer une typographie expressive, des aplats de couleur et une grille de projets aérée.' },
 { slug: 'horizon', name: 'Horizon', category: 'Interface', summary: 'Une exploration d’interface pour préparer son prochain voyage.', image: '/images/horizon.svg', color: '#dce8ee', stack: ['UI design', 'React', 'TypeScript'], isDemo: true, challenge: 'Aider le visiteur à comparer des idées de séjour.', approach: 'Mettre les destinations en valeur et garder les informations utiles au même niveau de lecture.' },
];
