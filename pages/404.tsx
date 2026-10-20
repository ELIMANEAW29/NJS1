import Link from 'next/link';
import Layout from '../components/Layout';
import s from '../styles/Portfolio.module.css';
export default function NotFound() { return <Layout title="Page introuvable"><section className={s.pageIntro}><p className={s.eyebrow}>ERREUR 404</p><h1>Un petit détour<span>.</span></h1><p>Cette page n’existe pas ou a changé d’adresse.</p><Link href="/" className={s.button}>Revenir à l’accueil →</Link></section></Layout>; }
