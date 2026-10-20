import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '../data/projects';
import s from '../styles/Portfolio.module.css';
export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
 return <article className={s.projectCard}><Link href={`/projets/${project.slug}`} className={s.projectImage} style={{ background: project.color }} aria-label={`Découvrir ${project.name}`}><Image src={project.image} width={960} height={680} alt={project.isDemo ? `Maquette illustrative du projet ${project.name}` : `Présentation illustrative du tableau de bord ${project.name}`} sizes="(max-width: 700px) 100vw, 50vw" /><span className={s.roundArrow} aria-hidden="true">↗</span></Link><div className={s.projectMeta}><span>0{index + 1} / {project.category}</span><span>{project.isDemo ? 'Concept de démonstration' : 'Mon projet personnel'}</span></div><h3><Link href={`/projets/${project.slug}`}>{project.name}</Link></h3><p>{project.summary}</p></article>;
}
