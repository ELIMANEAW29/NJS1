import { useState, type ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import RecruiterLinks from './RecruiterLinks';
import { profile } from '../data/profile';
import s from '../styles/Portfolio.module.css';
const links = [['/', 'Accueil'], ['/a-propos', 'À propos'], ['/projets', 'Projets'], ['/contact', 'Contact']];
export default function Layout({ children, title, description = 'Elimane Aw, développeur web junior à Dakar. Découvrez EduRecouv, mes compétences et mes coordonnées pour me recruter.' }: { children: ReactNode; title: string; description?: string }) {
 const router = useRouter();
 const [open, setOpen] = useState(false);
 return <><Head><title>{title} — {profile.shortName}</title><meta name="description" content={description} /><meta name="viewport" content="width=device-width, initial-scale=1" /><meta name="theme-color" content="#153e35" /><link rel="icon" href="/favicon.svg" /></Head>
 <a className={s.skip} href="#contenu">Aller au contenu</a>
 <header className={s.header}><Link href="/" className={s.brand} onClick={() => setOpen(false)} aria-label="Elimane Aw, accueil"><span className={s.logo}>ea<span>.</span></span><span>ELIMANE AW<span className={s.brandSub}>DÉVELOPPEUR WEB JUNIOR</span></span></Link>
 <button className={s.menuButton} aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? 'Fermer ×' : 'Menu +'}</button>
 <nav id="navigation" aria-label="Navigation principale" className={`${s.nav} ${open ? s.navOpen : ''}`}>{links.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={(href === '/' ? router.pathname === '/' : router.pathname.startsWith(href)) ? 'page' : undefined}>{label}</Link>)}</nav></header>
 <main id="contenu" className={s.main}>{children}</main>
 <footer className={s.footer}><Link href="/" className={s.footerName}>{profile.shortName}<span>Développement & création digitale</span></Link><p>Conçu avec soin.<br />{profile.location}</p><div><RecruiterLinks /></div></footer></>;
}
