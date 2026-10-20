import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import RecruiterLinks from '../components/RecruiterLinks';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { profile, skills } from '../data/profile';
import s from '../styles/Portfolio.module.css';
export default function Home() {
 return <Layout title="Portfolio"><section className={s.hero}><div><p className={s.eyebrow}><span className={s.dot} /> DÉVELOPPEMENT WEB & CRÉATION DIGITALE</p><h1>Du code.<br />Du sens.<br /><span>De l’impact.</span></h1><p className={s.heroIntro}>Moi, c’est Elimane. Développeur web junior à Dakar, je me forme chez GoMyCode et je développe des projets concrets, dont EduRecouv.</p><div className={s.actions}><Link className={s.button} href="/projets">Explorer mes projets <span>↗</span></Link><Link className={s.textLink} href="/a-propos">Un peu plus sur moi →</Link></div><RecruiterLinks /></div><div className={s.heroVisual}><div className={s.visualTop}><span>DE L’IDÉE À L’ÉCRAN</span><span>01 — 03</span></div><Image src="/images/hero.svg" width={720} height={750} alt="Composition graphique illustrant une interface web et du code" loading="eager" className={s.heroArtwork} /><div className={s.visualBottom}><span>Penser. Concevoir. Développer.</span><span className={s.visualMark}>✳</span></div></div></section>
 <div className={s.strip}><span>{profile.location}</span><span>React / PHP / MySQL</span><span>Du détail à l’ensemble ↘</span></div>
 <section className={s.section}><div className={s.sectionHead}><div><p className={s.eyebrow}>UNE SÉLECTION À EXPLORER</p><h2>Des idées qui<br />prennent forme.</h2></div><Link className={s.textLink} href="/projets">Tous les projets ↗</Link></div><div className={s.projectGrid}>{projects.slice(0, 2).map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div></section>
 <section className={s.skillsSection}><div><p className={s.eyebrow}>MON TERRAIN DE JEU</p><h2>La technique,<br />avec du regard.</h2><Link className={s.textLink} href="/a-propos">Découvrir mon approche ↗</Link></div><div>{skills.map((skill, i) => <div key={skill.title} className={s.skillRow}><span>0{i + 1}</span><div><h3>{skill.title}</h3><p>{skill.description}</p></div><span aria-hidden="true">↗</span></div>)}</div></section>
 <section className={s.cta}><p className={s.eyebrow}>RECRUTEMENT & OPPORTUNITÉS</p><h2>À la recherche d’un<br />développeur junior ?</h2><Link href="/contact" className={s.lightButton}>Contactez-moi <span>↗</span></Link></section></Layout>;
}
