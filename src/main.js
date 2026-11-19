import './styles.css';

const days = [
  {
    day: '01', place: 'Sapporo', tag: 'Arrivée',
    title: 'Premiers pas sous la neige',
    text: 'Atterrissage, installation et première immersion dans la capitale. On prend le rythme doucement entre Odori Park illuminé et les petites rues de Susukino.',
    stay: 'The Knot Sapporo', stayNote: 'centre-ville · 1 nuit',
    taste: 'Soup curry', tasteNote: 'bouillon épicé & légumes rôtis',
    marker: { x: 33, y: 67 }
  },
  {
    day: '02', place: 'Otaru', tag: 'Mer & lumières',
    title: 'Canal, verreries et poissons frais',
    text: 'Train vers Otaru pour flâner le long du canal, visiter une verrerie et se perdre dans les boutiques de Sakaimachi-dori. Retour à Sapporo en soirée.',
    stay: 'The Knot Sapporo', stayNote: 'même adresse · 2e nuit',
    taste: 'Kaisendon', tasteNote: 'bol de sashimi du marché',
    marker: { x: 24, y: 52 }
  },
  {
    day: '03', place: 'Niseko', tag: 'Poudreuse',
    title: 'La route vers la poudreuse',
    text: 'Départ matinal pour Niseko. Après le check-in, on chausse les skis ou les raquettes avant un bain chaud avec vue sur les sommets.',
    stay: 'The Vale Niseko', stayNote: 'Hirafu · 2 nuits',
    taste: 'Niseko cheese tart', tasteNote: 'pause sucrée locale',
    marker: { x: 20, y: 77 }
  },
  {
    day: '04', place: 'Niseko', tag: 'Grand air',
    title: 'Une journée dans le blanc',
    text: 'Journée libre sur les pistes : cours pour débutants, descentes panoramiques et pause ramen. Le soir, izakaya tranquille ou onsen selon l’énergie.',
    stay: 'The Vale Niseko', stayNote: 'Hirafu · 2e nuit',
    taste: 'Miso ramen', tasteNote: 'avec maïs doux & beurre',
    marker: { x: 20, y: 77 }
  },
  {
    day: '05', place: 'Furano', tag: 'Campagne',
    title: 'De la montagne aux champs',
    text: 'Transfert vers Furano à travers les paysages enneigés. Promenade dans le village de Ningle Terrace puis soirée calme dans un ryokan.',
    stay: 'Furano Natulux', stayNote: 'gare de Furano · 1 nuit',
    taste: 'Furano omelette curry', tasteNote: 'œuf moelleux & curry doux',
    marker: { x: 58, y: 43 }
  },
  {
    day: '06', place: 'Asahikawa', tag: 'Animaux & ramen',
    title: 'La ville des histoires polaires',
    text: 'Route vers Asahikawa et visite du zoo Asahiyama, célèbre pour ses animaux nordiques. En ville, on teste la ramen village et ses bouillons fumants.',
    stay: 'OMO7 Asahikawa', stayNote: 'centre-ville · 1 nuit',
    taste: 'Asahikawa ramen', tasteNote: 'shoyu riche & nouilles fines',
    marker: { x: 61, y: 27 }
  },
  {
    day: '07', place: 'Sapporo', tag: 'Dernier tour',
    title: 'Retour en ville, dernier marché',
    text: 'Retour à Sapporo, dernier passage au marché de Nijo pour les souvenirs comestibles et un déjeuner d’adieu avant le départ.',
    stay: 'Sapporo Station', stayNote: 'fin du carnet',
    taste: 'Melon pan & lait Hokkaido', tasteNote: 'goûter de gare',
    marker: { x: 33, y: 67 }
  }
];

const budget = [
  ['Transports', 42000, 22], ['Hébergements', 75000, 39], ['Repas', 31500, 16],
  ['Activités', 28000, 15], ['Onsen & entrées', 10000, 5], ['Marge météo', 5000, 3]
];
const checklist = [
  ['Passeport + copie hors ligne', 'documents'], ['Carte bancaire + un peu de yens', 'documents'], ['Assurance voyage', 'documents'],
  ['Veste imperméable et coupe-vent', 'froid'], ['Sous-couches thermiques x2', 'froid'], ['Chaussettes épaisses x4', 'froid'],
  ['Gants chauds compatibles smartphone', 'froid'], ['Bonnet + tour de cou', 'froid'], ['Chaussures antidérapantes', 'froid'],
  ['Maillot de bain pour les onsen', 'sur-place'], ['Batterie externe', 'sur-place'], ['Crème solaire + baume à lèvres', 'sur-place']
];
const phrases = [
  ['クリスマスマーケットはどこですか？', 'Kurismasu māketto wa doko desu ka?', 'Où est le marché de Noël ?'],
  ['これはいくらですか？', 'Kore wa ikura desu ka?', 'Combien cela coûte-t-il ?'],
  ['おすすめは何ですか？', 'Osusume wa nan desu ka?', 'Que recommandez-vous ?'],
  ['アレルギーがあります。', 'Arerugī ga arimasu.', 'J’ai une allergie.'],
  ['現金で払えますか？', 'Genkin de haraemasu ka?', 'Puis-je payer en espèces ?'],
  ['写真を撮ってもいいですか？', 'Shashin o totte mo ii desu ka?', 'Puis-je prendre une photo ?'],
  ['これはドイツのお菓子ですか？', 'Kore wa Doitsu no okashi desu ka?', 'Est-ce une pâtisserie allemande ?'],
  ['ありがとうございます！', 'Arigatō gozaimasu!', 'Merci beaucoup !']
];

const money = new Intl.NumberFormat('fr-FR');
const total = budget.reduce((sum, item) => sum + item[1], 0);
const mapLabels = {
  Sapporo: { x: 38, y: 73, anchor: 'start' }, Otaru: { x: 18, y: 49, anchor: 'end' },
  Niseko: { x: 24, y: 83, anchor: 'start' }, Furano: { x: 62, y: 39, anchor: 'start' },
  Asahikawa: { x: 65, y: 23, anchor: 'start' }
};
const markerMarkup = days.filter((day, index) => index !== 3 && index !== 6).map((item) => `
  <g class="map-node" data-day="${item.day}" tabindex="0" role="button" aria-label="Voir le jour ${item.day}, ${item.place}">
    <circle cx="${item.marker.x}%" cy="${item.marker.y}%" r="8"></circle>
    <text x="${mapLabels[item.place].x}%" y="${mapLabels[item.place].y}%" text-anchor="${mapLabels[item.place].anchor}">${item.place}</text>
  </g>`).join('');

const app = document.querySelector('#app');
app.innerHTML = `
  <div class="site-shell">
    <header class="topbar">
      <div class="container topbar-inner">
        <a class="brand" href="#top" aria-label="Retour en haut">
          <span class="brand-mark">北</span><span>carnet / HOKKAIDO</span>
        </a>
        <nav class="nav" id="nav" aria-label="Navigation principale">
          <a href="#route">La route</a><a href="#programme">Les 7 jours</a><a href="#pratique">Pratique</a><a href="#europe">Europe</a><a href="#phrases">Phrases</a>
        </nav>
        <div>
          <button class="share-btn" id="shareBtn" type="button">Partager le carnet ↗</button>
          <button class="menu-btn" id="menuBtn" type="button" aria-expanded="false" aria-controls="nav">Menu</button>
        </div>
      </div>
    </header>

    <main id="top">
      <section class="hero">
        <div class="container hero-grid">
          <div>
            <div class="eyebrow mono">Hiver 2027 · 7 jours · 5 étapes</div>
            <h1>Neige, <em>onsen</em><br>& grands bols.</h1>
            <p class="hero-copy">Le carnet partagé de notre boucle blanche à Hokkaido. Une semaine pour relier les villes, manger tout ce qui fume et laisser la neige ralentir le tempo.</p>
            <div class="hero-actions"><a class="primary-btn" href="#programme">Voir l’itinéraire <span>↓</span></a><a class="text-link" href="#pratique">Préparer son sac</a></div>
          </div>
          <aside class="trip-ticket" aria-label="Résumé du voyage">
            <div class="ticket-top"><div><div class="mono" style="color:#b9cbd1; margin-bottom:7px;">Carnet de voyage no. 07</div><div class="ticket-title">Hokkaido / hiver</div></div><div class="ticket-stamp">SNOW<br>BOUND</div></div>
            <div class="ticket-route"><div class="ticket-stop"><b></b>Sapporo</div><i class="ticket-line"></i><div class="ticket-stop"><b></b>Otaru</div><i class="ticket-line"></i><div class="ticket-stop"><b></b>Niseko</div><i class="ticket-line"></i><div class="ticket-stop"><b></b>Furano</div><i class="ticket-line"></i><div class="ticket-stop"><b></b>Asahikawa</div><i class="ticket-line"></i><div class="ticket-stop"><b></b>Sapporo</div></div>
            <div class="ticket-bottom"><span class="mono">Température attendue</span><strong>-8° / -1° C</strong><span class="mono">JPY · ¥¥</span></div>
          </aside>
        </div>
      </section>

      <section class="section" id="route">
        <div class="container">
          <div class="section-head"><div><div class="section-kicker mono">01 — la grande boucle</div><h2>Une ligne,<br>cinq ambiances.</h2></div><p class="section-intro">La carte sert de boussole : cliquez sur une ville pour rejoindre directement la journée correspondante.</p></div>
          <div class="map-wrap"><div class="map-card"><div class="map-grid"></div><svg class="map-svg" viewBox="0 0 100 100" role="img" aria-label="Carte stylisée de l'itinéraire à Hokkaido" preserveAspectRatio="none"><path class="map-sea" d="M0,0 H100 V100 H0 Z"></path><path class="map-land" d="M31 8 C45 3 64 7 79 18 C91 27 93 43 87 58 C82 72 70 89 56 95 C43 99 29 91 21 80 C14 70 11 53 15 39 C18 26 22 13 31 8Z"></path><path class="map-route" d="M33 67 L24 52 L20 77 L58 43 L61 27 L33 67"></path>${markerMarkup}</svg><div class="map-legend"><span><i class="legend-dot"></i> étape</span><span><i class="legend-line"></i> trajet</span><span>cliquez pour explorer</span></div></div></div>
        </div>
      </section>

      <section class="section itinerary-section" id="programme">
        <div class="container"><div class="section-head"><div><div class="section-kicker mono">02 — le programme</div><h2>Sept jours<br>bien remplis.</h2></div><p class="section-intro">Pas de course contre la montre : chaque journée garde une place pour une découverte imprévue, un arrêt ramen ou un bain chaud.</p></div>
          <div class="days-list">${days.map((item) => `<article class="day-card" id="day-${item.day}"><div class="day-number">${item.day}</div><div class="day-main"><div class="day-meta"><strong>${item.place}</strong><span class="badge">${item.tag}</span></div><p><b>${item.title}</b><br>${item.text}</p></div><div class="day-side"><div><div class="detail-label mono">On dort</div><div class="detail-value">${item.stay}<br><span>${item.stayNote}</span></div></div><div><div class="detail-label mono">À goûter</div><div class="detail-value">${item.taste}<br><span>${item.tasteNote}</span></div></div></div></article>`).join('')}</div>
        </div>
      </section>

      <section class="section pale-section" id="pratique">
        <div class="container"><div class="section-head"><div><div class="section-kicker mono">03 — le côté pratique</div><h2>Moins de calculs,<br>plus de flocons.</h2></div><p class="section-intro">Une estimation simple pour se repérer, et une checklist qui reste dans votre navigateur quand le réseau décide de faire une pause.</p></div>
          <div class="tools-grid">
            <div class="tool-card"><h3>Budget doux</h3><p>Estimation par personne, hors vols et shopping. Les activités peuvent varier selon la météo et le niveau de ski.</p><div class="budget-total"><div><div class="mono" style="color:var(--blue); margin-bottom:6px;">Total estimé</div><div class="total-number">¥${money.format(total)}</div></div><div class="total-note">pour 7 jours<br>par personne</div></div><div class="budget-list">${budget.map(([label, value, percent]) => `<div class="budget-row"><span>${label}</span><div class="budget-bar"><i style="width:${percent}%"></i></div><strong>¥${money.format(value)}</strong></div>`).join('')}</div></div>
            <div class="tool-card"><h3>À mettre dans le sac</h3><p>Cochez au fil des préparatifs. Votre progression est enregistrée localement sur cet appareil.</p><div class="checklist-progress"><div class="progress-track"><i id="progressBar" style="width:0%"></i></div><span class="progress-count" id="progressCount">0 / ${checklist.length}</span></div><div class="check-items">${checklist.map(([label, group], index) => `<label class="check-item"><input type="checkbox" data-check="${index}" data-group="${group}"><span>${label}</span></label>`).join('')}</div><div class="check-controls"><button class="small-btn" id="checkAll" type="button">Tout cocher</button><button class="small-btn" id="resetChecks" type="button">Réinitialiser</button></div></div>
          </div>
          <div class="europe-links" id="europe">
            <div class="europe-heading"><div><div class="section-kicker mono">Repères Europe</div><h3>Trois lectures utiles<br>avant de réserver.</h3></div><p>Des liens à garder sous la main pour mieux situer les prix, la visibilité des restaurants auprès d’une clientèle chinoise et les évolutions des plateformes de réservation.</p></div>
            <div class="europe-grid">
              <a class="europe-link" href="https://www.klarr.net/blog/ticket-moyen-restaurant" target="_blank" rel="noopener noreferrer"><span class="europe-index">01</span><span><strong>Ticket moyen d’un restaurant en Europe</strong><small>Repères 2026, calcul midi / soir et restauration traditionnelle ou rapide.</small></span><b>↗</b></a>
              <a class="europe-link" href="https://www.klarr.net/blog/clientele-chinoise-restaurant-deepseek-doubao" target="_blank" rel="noopener noreferrer"><span class="europe-index">02</span><span><strong>DeepSeek, Doubao et clientèle chinoise</strong><small>À savoir : ces assistants ne s’appuient pas toujours sur les mêmes sources que les outils occidentaux.</small></span><b>↗</b></a>
              <a class="europe-link europe-warning" href="https://www.klarr.net/actualites/thefork-rachat-american-express" target="_blank" rel="noopener noreferrer"><span class="europe-index">03</span><span><strong>Point de vigilance : TheFork / American Express</strong><small>Le rachat annoncé n’est pas présenté comme finalisé : vérifiez les commissions, les contrats et la propriété des données avant toute décision.</small></span><b>↗</b></a>
            </div>
          </div>
        </div>
      </section>

      <section class="section phrases-section" id="phrases">
        <div class="container"><div class="section-head"><div><div class="section-kicker mono" style="color:var(--saffron);">04 — petit lexique</div><h2>Le marché de Noël,<br>en japonais.</h2></div><p class="section-intro">À garder sous la main pour parler des marchés de Noël à visiter en Allemagne — ou simplement impressionner la tablée autour d’un vin chaud.</p></div><div class="phrase-layout"><aside class="phrase-note"><strong>Un mot à retenir</strong><p><b>クリスマスマーケット</b><br>Kurismasu māketto<br><br>“Marché de Noël”. Le mot est directement emprunté à l’anglais, donc assez facile à reconnaître.</p><span class="micro mono">Conseil : en Allemagne, les mots “danke” (merci) et “bitte” (s’il vous plaît) feront aussi toujours plaisir.</span></aside><div class="phrase-list">${phrases.map(([jp, romaji, fr]) => `<div class="phrase"><span class="phrase-jp">${jp}</span><span class="phrase-romaji">${romaji}</span><span class="phrase-fr">${fr}</span></div>`).join('')}</div></div></div>
      </section>
    </main>

    <footer class="footer"><div class="container footer-inner"><div><div class="footer-mark">またね — mata ne</div><p>À bientôt, Hokkaido. Préparé pour notre bande de voyageurs.</p></div><p class="mono">HOKKAIDO / WINTER ROUTE / 2027</p></div></footer>
    <div class="toast" id="toast" role="status" aria-live="polite"></div>
  </div>
`;

const toast = (message) => {
  const el = document.querySelector('#toast'); el.textContent = message; el.classList.add('show');
  window.clearTimeout(window.__toastTimer); window.__toastTimer = window.setTimeout(() => el.classList.remove('show'), 2600);
};

document.querySelector('#menuBtn').addEventListener('click', (event) => {
  const button = event.currentTarget; const nav = document.querySelector('#nav'); const open = nav.classList.toggle('open');
  button.setAttribute('aria-expanded', String(open)); button.textContent = open ? 'Fermer' : 'Menu';
});
document.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', () => { document.querySelector('#nav').classList.remove('open'); document.querySelector('#menuBtn').textContent = 'Menu'; document.querySelector('#menuBtn').setAttribute('aria-expanded', 'false'); }));

document.querySelector('#shareBtn').addEventListener('click', async () => {
  const shareData = { title: 'Hokkaido — carnet d’hiver', text: 'Notre carnet partagé pour 7 jours à Hokkaido', url: window.location.href };
  try { if (navigator.share) await navigator.share(shareData); else { await navigator.clipboard.writeText(window.location.href); toast('Lien du carnet copié'); } } catch (error) { if (error.name !== 'AbortError') toast('Copie impossible — partagez l’URL du navigateur'); }
});

document.querySelectorAll('.map-node').forEach((node) => {
  const goToDay = () => { const target = document.querySelector(`#day-${node.dataset.day}`); document.querySelectorAll('.map-node').forEach((item) => item.classList.remove('active')); node.classList.add('active'); target?.scrollIntoView({ behavior: 'smooth', block: 'center' }); };
  node.addEventListener('click', goToDay); node.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); goToDay(); } });
});

const savedChecks = JSON.parse(localStorage.getItem('hokkaido-checklist') || '{}');
const updateProgress = () => {
  const inputs = [...document.querySelectorAll('[data-check]')]; const done = inputs.filter((input) => input.checked).length; const percent = Math.round(done / inputs.length * 100);
  document.querySelector('#progressBar').style.width = `${percent}%`; document.querySelector('#progressCount').textContent = `${done} / ${inputs.length}`;
  localStorage.setItem('hokkaido-checklist', JSON.stringify(Object.fromEntries(inputs.map((input) => [input.dataset.check, input.checked]))));
};
document.querySelectorAll('[data-check]').forEach((input) => { input.checked = Boolean(savedChecks[input.dataset.check]); input.addEventListener('change', updateProgress); });
updateProgress();
document.querySelector('#checkAll').addEventListener('click', () => { document.querySelectorAll('[data-check]').forEach((input) => { input.checked = true; }); updateProgress(); toast('Checklist complète — bon départ !'); });
document.querySelector('#resetChecks').addEventListener('click', () => { document.querySelectorAll('[data-check]').forEach((input) => { input.checked = false; }); updateProgress(); toast('Checklist réinitialisée'); });
