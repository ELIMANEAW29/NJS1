import type { GetServerSideProps } from 'next';
import Link from 'next/link';
import Layout from '../../components/Layout';
import ProjectCard from '../../components/ProjectCard';
import { categories, projects, type Category, type Project } from '../../data/projects';
import s from '../../styles/Portfolio.module.css';
type Props = { selection: Project[]; active: Category; generatedAt: string };
// Exécuté sur le serveur à chaque requête, y compris après un clic de filtre.
// Seules des données publiques sérialisables sont envoyées au navigateur.
export const getServerSideProps: GetServerSideProps<Props> = async ({ query, res }) => {
 const raw = typeof query.categorie === 'string' ? query.categorie : 'Tous';
 const active = categories.includes(raw as Category) ? raw as Category : 'Tous';
 const selection = active === 'Tous' ? projects : projects.filter(project => project.category === active);
 res.setHeader('Cache-Control', 'private, no-store');
 return { props: { selection, active, generatedAt: new Date().toISOString() } };
};
export default function Projects({ selection, active, generatedAt }: Props) {
 return <Layout title="Projets"><section className={s.pageIntro}><p className={s.eyebrow}>02 / PROJETS</p><h1>Une idée.<br /><span>Une nouvelle perspective.</span></h1><p>Découvrez EduRecouv, mon projet personnel de gestion scolaire, ainsi que deux explorations d’interface clairement identifiées comme démonstrations.</p></section><nav aria-label="Filtrer les projets" className={s.filters}>{categories.map(category => <Link key={category} href={category === 'Tous' ? '/projets' : { pathname: '/projets', query: { categorie: category } }} aria-current={active === category ? 'true' : undefined}>{category}{category === 'Tous' && <span> {projects.length.toString().padStart(2, '0')}</span>}</Link>)}</nav><div className={s.projectGrid}>{selection.map(project => <ProjectCard key={project.slug} project={project} index={projects.findIndex(p => p.slug === project.slug)} />)}</div><aside className={s.serverNote}><span className={s.dot} /><p>Cette sélection est préparée côté serveur à chaque visite.<br /><time dateTime={generatedAt}>Rendu : {generatedAt.replace('T', ' ').slice(0, 19)} UTC</time></p></aside></Layout>;
}
