import { useState, type FormEvent } from 'react';
import Layout from '../components/Layout';
import RecruiterLinks from '../components/RecruiterLinks';
import { profile } from '../data/profile';
import s from '../styles/Portfolio.module.css';
export default function Contact() {
 const [status, setStatus] = useState('');
 const [fallback, setFallback] = useState('');
 const [busy, setBusy] = useState(false);
 async function prepareMessage(event: FormEvent<HTMLFormElement>) {
  event.preventDefault(); setBusy(true); setStatus(''); setFallback('');
  const form = new FormData(event.currentTarget);
  const name = String(form.get('name') ?? '').trim();
  const email = String(form.get('email') ?? '').trim();
  const message = String(form.get('message') ?? '').trim();
  if (!name || !message) { setStatus('Merci de renseigner votre nom et votre message.'); setBusy(false); return; }
  const body = `Bonjour Elimane,\n\n${message}\n\n${name}\n${email}`;
  if (profile.email) {
   window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Prise de contact — ' + name)}&body=${encodeURIComponent(body)}`;
   setStatus('Votre application de messagerie va s’ouvrir. Le message sera envoyé uniquement après votre validation dans cette application.');
  } else {
   try { await navigator.clipboard.writeText(body); setStatus('Message copié. Vous pouvez le coller dans votre messagerie. Aucun message n’a été envoyé.'); }
   catch { setFallback(body); setStatus('Copie automatique indisponible. Sélectionnez et copiez le texte ci-dessous.'); }
  }
  setBusy(false);
 }
 return <Layout title="Contact"><section className={s.pageIntro}><p className={s.eyebrow}>03 / CONTACT</p><h1>Tout commence<br /><span>par une conversation.</span></h1><p>Vous recrutez un développeur web junior ? Contactez-moi par e-mail, téléphone ou WhatsApp. Vous pouvez aussi télécharger mon CV.</p></section><div className={s.contactGrid}><aside className={s.contactAside}><span className={s.largeStar}>✳</span><h2>Construisons<br />quelque chose<br />qui compte.</h2><dl><dt>Basé à</dt><dd>{profile.location}</dd><dt>Téléphone</dt><dd><a href={profile.phoneHref}>{profile.phone}</a></dd><dt>E-mail</dt><dd>{profile.email ? <a href={`mailto:${profile.email}`}>{profile.email}</a> : 'Coordonnée à compléter'}</dd></dl><RecruiterLinks /></aside><form className={s.form} onSubmit={prepareMessage}><label htmlFor="name">Votre nom</label><input id="name" name="name" autoComplete="name" required maxLength={100} placeholder="Comment vous appelez-vous ?" /><label htmlFor="email">Votre adresse e-mail</label><input id="email" type="email" name="email" autoComplete="email" required maxLength={254} placeholder="vous@exemple.com" /><label htmlFor="message">Votre idée en quelques mots</label><textarea id="message" name="message" required rows={6} maxLength={3000} placeholder="Parlez-moi de votre projet…" /><p className={s.note}>Ces champs servent uniquement à préparer votre message. Le site ne stocke pas vos informations.</p><button className={s.button} type="submit" disabled={busy}>{busy ? 'Préparation…' : profile.email ? 'Préparer mon e-mail ↗' : 'Copier mon message ↗'}</button><p role="status" aria-live="polite" className={s.formStatus}>{status}</p>{fallback && <><label htmlFor="copy">Message à copier</label><textarea id="copy" readOnly rows={8} value={fallback} onFocus={e => e.target.select()} /></>}</form></div></Layout>;
}
