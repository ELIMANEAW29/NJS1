// À lancer après npm run build. Vérifie le vrai serveur de production, sans navigateur.
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
const port = 3187;
const server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '-H', '127.0.0.1', '-p', String(port)], { stdio: ['ignore', 'pipe', 'pipe'], env: { ...process.env, NEXT_TELEMETRY_DISABLED: '1' } });
let logs = ''; server.stdout.on('data', x => logs += x); server.stderr.on('data', x => logs += x);
const base = `http://127.0.0.1:${port}`;
try {
 let ready = false;
 for(let i=0;i<120;i++){ try { if((await fetch(base, { signal: AbortSignal.timeout(1000) })).ok){ready=true;break;} } catch {} await delay(250); }
 assert(ready, `Démarrage impossible : ${logs}`);
 const routes = [['/', 'Du code.'], ['/a-propos', 'Curieux par nature.'], ['/projets', 'EduRecouv'], ['/contact', 'conversation.'], ['/projets/edurecouv', 'Le défi.']];
 for (const [path, expected] of routes) { const r=await fetch(base+path); const html=await r.text(); assert.equal(r.status,200,path); assert(html.includes(expected),path); assert(html.includes('lang="fr"')); console.log('OK',path); }
 const first=await (await fetch(base+'/projets')).text(); const firstData=JSON.parse(first.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/)[1]);
 await delay(30);
 const secondResponse=await fetch(base+'/projets?categorie=Application'); const second=await secondResponse.text(); const data=JSON.parse(second.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/)[1]);
 assert.equal(data.props.pageProps.active,'Application'); assert.equal(data.props.pageProps.selection.length,1); assert.equal(data.props.pageProps.selection[0].name,'EduRecouv'); assert.notEqual(data.props.pageProps.generatedAt,firstData.props.pageProps.generatedAt); assert(secondResponse.headers.get('cache-control').includes('no-store')); console.log('OK filtre serveur et horodatage par requête');
 const invalid=await fetch(base+'/projets?categorie=inconnue'); const invalidHtml=await invalid.text(); assert(invalidHtml.includes('EduRecouv')&&invalidHtml.includes('Atelier')); console.log('OK filtre invalide');
 for(const path of ['/absent','/projets/inconnu']) assert.equal((await fetch(base+path)).status,404,path); console.log('OK pages 404');
 for(const path of ['/images/hero.svg','/images/edurecouv-dashboard.svg','/images/edurecouv-eleves.svg','/images/edurecouv-paiements.svg','/images/atelier.svg','/images/horizon.svg']) assert.equal((await fetch(base+path)).status,200,path); console.log('OK images locales');
 const c=await (await fetch(base+'/contact')).text(); assert(c.includes('Préparer mon e-mail')); assert(c.includes('awelimane29@gmail.com')); assert(c.includes('tel:+221774160183')); assert(c.includes('https://wa.me/221774160183')); assert(c.includes('/documents/CV_Elimane_Aw.pdf')); assert(!c.includes('Envoyer le message')); console.log('OK formulaire sans fausse promesse d’envoi');
 const cvResponse=await fetch(base+'/documents/CV_Elimane_Aw.pdf'); assert.equal(cvResponse.status,200); const cv=Buffer.from(await cvResponse.arrayBuffer()); assert.equal(cv.subarray(0,5).toString(),'%PDF-'); console.log('OK CV PDF téléchargeable');
 const projectHtml=await (await fetch(base+'/projets/edurecouv')).text(); assert(projectHtml.includes('PHP')); assert(projectHtml.includes('MySQL')); assert(projectHtml.includes('edurecouv-eleves.svg')); assert(projectHtml.includes('edurecouv-paiements.svg')); assert(projectHtml.includes('Mon projet personnel')||projectHtml.includes('MON PROJET PERSONNEL')); assert(!c.includes('Salif')); console.log('OK fiche EduRecouv, galerie et identité');
 console.log('Toutes les vérifications HTTP ont réussi.');
} finally { server.kill('SIGTERM'); }
