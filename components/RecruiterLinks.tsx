import { profile } from '../data/profile';
import s from '../styles/Portfolio.module.css';
export default function RecruiterLinks() {
 return <div className={s.recruiterLinks} aria-label="Contacter Elimane Aw ou télécharger son CV">
 <a href={`mailto:${profile.email}`}>E-mail ↗</a><a href={profile.phoneHref}>Appeler ↗</a>
 <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>
 <a href={profile.cv} download="CV_Elimane_Aw.pdf">Télécharger mon CV ↓</a></div>;
}
