import type { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { projects, type Project } from '../../data/projects';
import s from '../../styles/Portfolio.module.css';
export const getStaticPaths: GetStaticPaths = async () => ({ paths: projects.map(project => ({ params: { slug: project.slug } })), fallback: false });
export const getStaticProps: GetStaticProps<{ project: Project }> = async ({ params }) => {
 const project = projects.find(item => item.slug === params?.slug);
 return project ? { props: { project } } : { notFound: true };
};
export default function ProjectDetail({ project }: { project: Project }) {
 return <Layout title={project.name} description={project.summary}><section className={s.pageIntro}><Link href="/projets" className={s.textLink}>← Tous les projets</Link>
 <p className={s.eyebrow}>{project.category} / {project.isDemo ? 'CONCEPT DE DÉMONSTRATION' : 'MON PROJET PERSONNEL'}</p><h1>{project.name}<span>.</span></h1><p>{project.summary}</p><div className={s.tags}>{project.stack.map(tool => <span key={tool}>{tool}</span>)}</div>
 {project.liveUrl && <a className={s.textLink} href={project.liveUrl} target="_blank" rel="noopener noreferrer">Visiter EduRecouv ↗</a>}</section>
 <Image className={s.detailImage} src={project.image} alt={`Présentation illustrative de ${project.name}`} width={1440} height={1020} loading="eager" sizes="(max-width: 1200px) 100vw, 1120px" />
 <section className={s.detailText}><div><p className={s.eyebrow}>LE POINT DE DÉPART</p><h2>Le défi.</h2><p>{project.challenge}</p></div><div><p className={s.eyebrow}>{project.role || 'L’INTENTION'}</p><h2>La démarche.</h2><p>{project.approach}</p></div></section>
 {project.features && <section className={s.featureSection}><p className={s.eyebrow}>FONCTIONNALITÉS PRINCIPALES</p><h2>Un suivi scolaire centralisé.</h2><ul>{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul></section>}
 {project.gallery && <section className={s.gallery}><p className={s.eyebrow}>L’APPLICATION EN IMAGES</p><h2>Un aperçu de ses espaces.</h2>{project.gallery.slice(1).map(item => <figure key={item.src}><Image src={item.src} alt={item.title} width={1440} height={1020} sizes="(max-width: 1200px) 100vw, 1120px" /><figcaption><strong>{item.title}</strong><span>{item.caption}</span></figcaption></figure>)}</section>}
 <p className={s.note}>{project.isDemo ? 'Étude illustrative créée pour ce portfolio pédagogique. Elle ne correspond pas à une réalisation client publiée.' : 'Visuels de présentation reconstitués à partir de l’aperçu EduRecouv, avec des données fictives. Ils ne sont pas des captures du site en production.'}</p><Link href="/contact" className={s.button}>{project.isDemo ? 'Échanger sur un projet' : 'Me contacter pour en discuter'} ↗</Link></Layout>;
}
