const LOGO = "img/WhatsApp_Image_2026-02-24_at_19.08.37-removebg-preview.png";
const WA_NUMBER = '5491156680527';
const JUGADOR_EXTRA_CAMISETA = 5000;
const JUGADOR_EXTRA_SHORT    = 7000;
const DORSAL_EXTRA           = 5000;

const products = [
  {
    id: "cam-arg-mundial",
    name: 'Camiseta Argentina Mundial 2026',
    club: 'Argentina',
    type: 'camiseta',
    tags: ['argentina'],
    price: 35000,
    badge: 'new',
    badgeType: 'new',
    img: 'img/cam-argentinaMundial.jpeg',
    stock:        { S: false, M: false, L: false, XL: false },
    stockJugador: { S: true,  M: true,  L: true,  XL: true  },
    dorsales: [
      { numero: 10, nombre: 'Messi' },
      { numero: 11, nombre: 'Di María' },
      { numero: 22, nombre: 'Lautaro' },
      { numero:  9, nombre: 'Julián' },
      { numero: 20, nombre: 'Mac Allister' }
    ]
  },
  {
    id: "cam-barcelona",
    name: 'Camiseta barcelona',
    club: 'barcelona',
    type: 'camiseta',
    tags: ['barcelona'],
    price: 35000,
    badge: 'new',
    badgeType: 'new',
    img: 'img/cam-barsa.jpeg',
    stock:        { S: false, M: false, L: true,  XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false },
    dorsales: [
      { numero: 27, nombre: 'Lamine Yamal' },
      { numero: 10, nombre: 'Deco' },
      { numero:  9, nombre: 'Lewandowski' },
      { numero:  8, nombre: 'Pedri' },
      { numero: 17, nombre: 'Raphinha' }
    ]
  },
  {
    id: "cam-realMadrid-visitante",
    name: 'Camiseta Real Madrid Visitante',
    club: 'Real Madrid',
    type: 'camiseta',
    tags: ['Real Madrid'],
    price: 35000,
    badge: 'new',
    badgeType: 'new',
    img: 'img/cam-realmadrdidAlternativa.jpeg',
    stock:        { S: false, M: false, L: true,  XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false },
    dorsales: [
      { numero:  9, nombre: 'Mbappé' },
      { numero: 10, nombre: 'Modric' },
      { numero: 20, nombre: 'Vinicius' },
      { numero: 11, nombre: 'Rodrygo' },
      { numero:  5, nombre: 'Bellingham' }
    ]
  },
  {
    id: "cam-atlMadrid",
    name: 'Camiseta Atletico Madrid',
    club: 'Atletico Madrid',
    type: 'camiseta',
    tags: ['Atletico Madrid'],
    price: 35000,
    badge: 'new',
    badgeType: 'new',
    img: 'img/cam-atlMadrid.jpeg',
    stock:        { S: false, M: false, L: true,  XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false },
    dorsales: [
      { numero:  7, nombre: 'Julián Álvarez' },
      { numero:  9, nombre: 'Morata' },
      { numero: 10, nombre: 'Griezmann' },
      { numero: 14, nombre: 'Marcos Llorente' }
    ]
  },
  {
    id: "cam-chelsea",
    name: 'Camiseta chelsea alternativa',
    club: 'chelsea',
    type: 'camiseta',
    tags: ['chelsea'],
    price: 35000,
    badge: 'new',
    badgeType: 'new',
    img: 'img/cam-chelseaNegra.jpeg',
    stock:        { S: false, M: true,  L: false, XL: true  },
    stockJugador: { S: false, M: false, L: false, XL: false },
    dorsales: [
      { numero: 20, nombre: 'Palmer' },
      { numero:  5, nombre: 'Enzo Fernández' },
      { numero: 10, nombre: 'Nkunku' },
      { numero:  9, nombre: 'Jackson' }
    ]
  },
  {
    id: "cam-man-united-blanca",
    name: 'Camiseta Manchester united Visitante',
    club: 'Manchester united',
    type: 'camiseta',
    tags: ['Manchester united'],
    price: 35000,
    badge: 'new',
    badgeType: 'new',
    img: 'img/camiseta-manUblanca.jpeg',
    stock:        { S: false, M: false, L: false, XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false },
    dorsales: []
  },
  {
    id: "cam-PSG",
    name: 'Camiseta PSG',
    club: 'PARIS SG',
    type: 'camiseta',
    tags: ['PSG'],
    price: 35000,
    badge: 'new',
    badgeType: 'new',
    img: 'img/camiseta-psg.jpeg',
    stock:        { S: false, M: false, L: true,  XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false },
    dorsales: [
      { numero: 10, nombre: 'Neymar' },
      { numero:  7, nombre: 'Dembélé' },
      { numero:  9, nombre: 'Ramos' },
      { numero: 11, nombre: 'Barcola' }
    ]
  },
  {
    id: "cam-bayern",
    name: 'Camiseta Bayern Munchen',
    club: 'Bayern Munchen',
    type: 'camiseta',
    tags: ['Bayern Munchen'],
    price: 35000,
    badge: 'new',
    badgeType: 'new',
    img: 'img/cam.bayern.jpeg',
    stock:        { S: false, M: false, L: false, XL: false },
    stockJugador: { S: false, M: false, L: false, XL: true  },
    dorsales: [
      { numero:  9, nombre: 'Kane' },
      { numero: 10, nombre: 'Musiala' },
      { numero: 25, nombre: 'Müller' },
      { numero: 42, nombre: 'Jamal Musiala' }
    ]
  },
  {
    id: "cam-inter",
    name: 'Camiseta inter',
    club: 'inter',
    type: 'camiseta',
    tags: ['inter'],
    price: 35000,
    badge: 'new',
    badgeType: 'new',
    img: 'img/cam-inter.jpeg',
    stock:        { S: false, M: true,  L: true,  XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false },
    dorsales: [
      { numero: 10, nombre: 'Lautaro' },
      { numero: 23, nombre: 'Barella' },
      { numero:  9, nombre: 'Thuram' },
      { numero: 77, nombre: 'Brozovic' }
    ]
  },
  {
    id: "cam-roma-visitante",
    name: 'Camiseta roma Visitante',
    club: 'roma',
    type: 'camiseta',
    tags: ['roma'],
    price: 35000,
    badge: 'new',
    badgeType: 'new',
    img: 'img/camiseta-roma.jpeg',
    stock:        { S: false, M: false, L: false, XL: false },
    stockJugador: { S: false, M: false, L: true,  XL: false },
    dorsales: [
      { numero: 21, nombre: 'Dybala' },
      { numero:  9, nombre: 'Abraham' },
      { numero: 42, nombre: 'Pellegrini' }
    ]
  },
  {
    id: "cam-river-visitante",
    name: 'Camiseta river Visitante',
    club: 'river',
    type: 'camiseta',
    tags: ['river'],
    price: 35000,
    badge: 'new',
    badgeType: 'new',
    img: 'img/camiseta-riverAlternativa.jpeg',
    stock:        { S: false, M: false, L: false, XL: false, XXXL: false },
    stockJugador: { S: false, M: false, L: false, XL: false, XXXL: true  },
    dorsales: [
      { numero: 10, nombre: 'Gallardo' },
      { numero:  9, nombre: 'Borré' },
      { numero: 27, nombre: 'Quintero' }
    ]
  },
  {
    id: "cam-arg-titular",
    name: 'Camiseta Argentina Retro Titular',
    club: 'Argentina',
    type: 'camiseta',
    tags: ['argentina', 'retro'],
    price: 35000,
    badge: 'Retro',
    badgeType: 'retro',
    img: 'img/camiseta.argentinaretroTitular.jpeg',
    stock:        { S: false, M: true,  L: false, XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false },
    dorsales: []
  },
  {
    id: "cam-arg-visitante",
    name: 'Camiseta Argentina Retro Visitante',
    club: 'Argentina',
    type: 'camiseta',
    tags: ['argentina', 'retro'],
    price: 35000,
    badge: 'Retro',
    badgeType: 'retro',
    img: 'img/cam-argentinaRetroAlter.jpeg',
    stock:        { S: false, M: false, L: false, XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false },
    dorsales: []
  },
  {
    id: "cam-total90a",
    name: 'Camiseta total 90 azul',
    club: 'total 90',
    type: 'camiseta',
    tags: ['retro'],
    price: 35000,
    badge: 'Retro',
    badgeType: 'retro',
    img: 'img/camiseta-total90azul.jpeg',
    stock:        { S: false, M: false, L: false, XL: true  },
    stockJugador: { S: false, M: false, L: false, XL: false },
    dorsales: []
  },
  {
    id: "cam-total90n",
    name: 'Camiseta total 90 negra',
    club: 'total 90',
    type: 'camiseta',
    tags: ['retro'],
    price: 35000,
    badge: 'Retro',
    badgeType: 'retro',
    img: 'img/camiseta-total90negra.jpeg',
    stock:        { S: true,  M: false, L: false, XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false },
    dorsales: []
  },
  {
    id: "short-arg-2026",
    name: 'Short Argentina 2026 Adidas',
    club: 'Argentina',
    type: 'short',
    tags: ['argentina'],
    price: 28000,
    badge: 'New',
    badgeType: 'new',
    img: 'img/short-argentina2026.jpeg',
    stock:        { S: false, M: false, L: false, XL: false },
    stockJugador: { S: false, M: false, L: false, XL: true  },
    dorsales: []
  },
  {
    id: "short-barca-negro",
    name: 'Short Barcelona Negro',
    club: 'FC Barcelona',
    type: 'short',
    tags: [],
    price: 28000,
    badge: 'new',
    badgeType: 'new',
    img: 'img/short-barcelona.jpeg',
    stock:        { S: false, M: false, L: false, XL: false, XXL: false },
    stockJugador: { S: false, M: false, L: true,  XL: false, XXL: false },
    dorsales: []
  },
  {
    id: "short-barca-azul",
    name: 'Short Barcelona Azul',
    club: 'FC Barcelona',
    type: 'short',
    tags: [],
    price: 28000,
    badge: 'new',
    badgeType: 'new',
    img: 'img/short-barcelonaAzul.jpeg',
    stock:        { S: false, M: false, L: false, XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false },
    dorsales: []
  },
  {
    id: "short-bayern-crema",
    name: 'Short Bayern München Crema',
    club: 'Bayern München',
    type: 'short',
    tags: [],
    price: 28000,
    badge: 'new',
    badgeType: 'new',
    img: 'img/short-bayern.jpeg',
    stock:        { S: false, M: false, L: false, XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false },
    dorsales: []
  },
  {
    id: "short-chelsea-negro-cfc",
    name: 'Short Chelsea Negro CFC',
    club: 'Chelsea FC',
    type: 'short',
    tags: [],
    price: 28000,
    badge: 'new',
    badgeType: 'new',
    img: 'img/short-chelseaNegro.jpeg',
    stock:        { S: false, M: false, L: true,  XL: true  },
    stockJugador: { S: false, M: false, L: false, XL: true,  XXL: true  },
    dorsales: []
  },
  {
    id: "short-chelsea-verde",
    name: 'Short Chelsea Verde / Rojo',
    club: 'Chelsea FC',
    type: 'short',
    tags: [],
    price: 28000,
    badge: 'New',
    badgeType: 'new',
    img: 'img/short-chelseaVerde.jpeg',
    stock:        { S: false, M: false, L: false, XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false },
    dorsales: []
  },
  {
    id: "short-chelsea-blanco",
    name: 'Short Chelsea Blanco Nike',
    club: 'Chelsea FC',
    type: 'short',
    tags: [],
    price: 28000,
    badge: 'new',
    badgeType: 'new',
    img: 'img/short-chelseaBlanco.jpeg',
    stock:        { S: false, M: false, L: true,  XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false },
    dorsales: []
  },
  {
    id: "short-chelsea-azul-rojo",
    name: 'Short Chelsea Azul / Rojo',
    club: 'Chelsea FC',
    type: 'short',
    tags: [],
    price: 28000,
    badge: 'New',
    badgeType: 'new',
    img: 'img/short-chelseaAzul.jpeg',
    stock:        { S: false, M: false, L: false, XL: false, XXL: false },
    stockJugador: { S: false, M: false, L: false, XL: true,  XXL: true  },
    dorsales: []
  },
  {
    id: "short-chelsea-negro-amarillo",
    name: 'Short Chelsea Negro/Amarillo',
    club: 'Chelsea FC',
    type: 'short',
    tags: [],
    price: 28000,
    badge: 'new',
    badgeType: 'new',
    img: 'img/short-chelsea-negroAmarillo.jpeg',
    stock:        { S: false, M: false, L: false, XL: false, XXL: false },
    stockJugador: { S: false, M: false, L: false, XL: true,  XXL: true  },
    dorsales: []
  },
  {
    id: "short-inter-negro-oro",
    name: 'Short Inter Milán Negro/Oro',
    club: 'Inter de Milán',
    type: 'short',
    tags: [],
    price: 28000,
    badge: 'new',
    badgeType: 'new',
    img: 'img/short-inter.jpeg',
    stock:        { S: false, M: false, L: false, XL: false },
    stockJugador: { S: false, M: false, L: true,  XL: false },
    dorsales: []
  },
  {
    id: "short-juventus-azul",
    name: 'Short Juventus Azul Marino',
    club: 'Juventus FC',
    type: 'short',
    tags: [],
    price: 28000,
    badge: 'new',
    badgeType: 'new',
    img: 'img/short-juventus.jpeg',
    stock:        { S: false, M: false, L: false, XL: false, XXL: false },
    stockJugador: { S: false, M: false, L: false, XL: false, XXL: true  },
    dorsales: []
  },
  {
    id: "short-manu-negro-amarillo",
    name: 'Short Manchester United Negro/Amarillo',
    club: 'Manchester United',
    type: 'short',
    tags: [],
    price: 28000,
    badge: 'new',
    badgeType: 'new',
    img: 'img/short-manU.jpeg',
    stock:        { S: false, M: false, L: false, XL: false, XXL: false },
    stockJugador: { S: false, M: false, L: false, XL: false, XXL: false },
    dorsales: []
  },
  {
    id: "short-manu-azul",
    name: 'Short Manchester United Azul',
    club: 'Manchester United',
    type: 'short',
    tags: [],
    price: 28000,
    badge: 'New',
    badgeType: 'new',
    img: 'img/short-manUazul.jpeg',
    stock:        { S: false, M: false, L: false, XL: false, XXL: false },
    stockJugador: { S: false, M: false, L: false, XL: false, XXL: false },
    dorsales: []
  },
  {
    id: "short-psg-azul",
    name: 'Short PSG Azul Marino',
    club: 'Paris Saint-Germain',
    type: 'short',
    tags: [],
    price: 28000,
    badge: 'new',
    badgeType: 'new',
    img: 'img/short-psg.jpeg',
    stock:        { S: false, M: false, L: false, XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false },
    dorsales: []
  },
  {
    id: "short-psg-negro-rosa",
    name: 'Short PSG Negro/Rosa',
    club: 'Paris Saint-Germain',
    type: 'short',
    tags: [],
    price: 28000,
    badge: 'new',
    badgeType: 'new',
    img: 'img/short-psg-negro.jpeg',
    stock:        { S: false, M: false, L: false, XL: false },
    stockJugador: { S: false, M: false, L: false, XL: true  },
    dorsales: []
  },
  {
    id: "short-roma-granate",
    name: 'Short AS Roma Granate',
    club: 'AS Roma',
    type: 'short',
    tags: [],
    price: 28000,
    badge: 'new',
    badgeType: 'new',
    img: 'img/short-roma.jpeg',
    stock:        { S: false, M: false, L: false, XL: false },
    stockJugador: { S: false, M: false, L: false, XL: true  },
    dorsales: []
  },
  {
    id: "short-atleti",
    name: 'Short Atlético de Madrid',
    club: 'Atlético de Madrid',
    type: 'short',
    tags: [],
    price: 28000,
    badge: 'New',
    badgeType: 'new',
    img: 'img/short-atlMadrid.jpeg',
    stock:        { S: false, M: false, L: false, XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false },
    dorsales: []
  },
  {
    id: "short-astonVilla",
    name: 'Short Aston Villa',
    club: 'Aston Villa',
    type: 'short',
    tags: ["Aston Villa"],
    price: 28000,
    badge: 'New',
    badgeType: 'new',
    img: 'img/short-aston.jpeg',
    stock:        { S: false, M: false, L: false, XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false },
    dorsales: []
  },
  {
    id: "short-saoPaulo",
    name: 'Short sao paulo',
    club: 'sao paulo',
    type: 'short',
    tags: ["sao paulo"],
    price: 28000,
    badge: 'New',
    badgeType: 'new',
    img: 'img/short-saoPaulo.jpeg',
    stock:        { S: false, M: false, L: false, XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false },
    dorsales: []
  }
];

// ── Estado ───────────────────────────────────────────────
const selectedSizes    = {};
const selectedVersions = {};
const selectedDorsal   = {}; // { productId: { key, numero, nombre } | null }
let cart = [];
let currentFilter = 'all';
let currentSort   = 'default';
let currentSearch = '';

// ── Helpers ──────────────────────────────────────────────
function formatPrice(p) {
  return '$' + p.toLocaleString('es-AR');
}
function getVersion(id) {
  return selectedVersions[id] || 'fan';
}
function getPrice(p, ver) {
  if (ver !== 'jugador') return p.price;
  var extra = p.type === 'short' ? JUGADOR_EXTRA_SHORT : JUGADOR_EXTRA_CAMISETA;
  return p.price + extra;
}
function getJugadorExtra(p) {
  return p.type === 'short' ? JUGADOR_EXTRA_SHORT : JUGADOR_EXTRA_CAMISETA;
}
function getStock(p, ver) {
  return ver === 'jugador' ? (p.stockJugador || {}) : (p.stock || {});
}
function getDorsal(id) {
  return selectedDorsal[id] || null;
}
function getDorsalPrice(id) {
  return selectedDorsal[id] ? DORSAL_EXTRA : 0;
}
function getCurrentFilter() {
  const t = document.querySelector('.filter-tab.active');
  if (!t) return 'all';
  const m = t.getAttribute('onclick').match(/'([^']+)'/);
  return m ? m[1] : 'all';
}
function mkCartIcon() {
  return '<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>';
}

// ── Image Modal ──────────────────────────────────────────
function openImageModal(imgSrc, productName) {
  let modal = document.getElementById('imgModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'imgModal';
    modal.className = 'img-modal';
    modal.innerHTML = ''
      + '<div class="img-modal-backdrop"></div>'
      + '<div class="img-modal-content">'
      + '<button class="img-modal-close" id="imgModalClose">✕</button>'
      + '<img id="imgModalImg" src="" alt="">'
      + '<div id="imgModalName" class="img-modal-name"></div>'
      + '</div>';
    document.body.appendChild(modal);
    modal.querySelector('.img-modal-backdrop').addEventListener('click', closeImageModal);
    modal.querySelector('#imgModalClose').addEventListener('click', closeImageModal);
  }
  document.getElementById('imgModalImg').src = imgSrc;
  document.getElementById('imgModalName').textContent = productName;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeImageModal() {
  var m = document.getElementById('imgModal');
  if (m) m.classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeImageModal(); });

// ── WhatsApp ─────────────────────────────────────────────
function openWhatsApp(customMsg) {
  var msg = customMsg || '¡Hola! Vi los productos en LK Indumentaria y quería hacer una consulta 👋';
  window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg), '_blank');
}
function buildCartWhatsAppMsg() {
  if (!cart.length) return '';
  var fecha = new Date().toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  var msg = '🛍️ *NUEVO PEDIDO — LK Indumentaria*\n';
  msg += '📅 Fecha: ' + fecha + '\n';
  msg += '─────────────────────\n\n';
  cart.forEach(function(i, idx) {
    var ver = i.version === 'jugador' ? 'Versión Jugador' : 'Versión Fan';
    msg += (idx + 1) + '. *' + i.name + '*\n';
    msg += '   • ' + ver + ' · Talle ' + i.size + ' · Cant. ' + i.qty + '\n';
    if (i.dorsal) {
      msg += '   • 🎽 Dorsal: Nº ' + i.dorsal.numero + ' — ' + i.dorsal.nombre + '\n';
    }
    msg += '   • Subtotal: ' + formatPrice(i.price * i.qty) + '\n\n';
  });
  msg += '─────────────────────\n';
  msg += '💰 *TOTAL: ' + formatPrice(cart.reduce(function(s, i) { return s + i.price * i.qty; }, 0)) + ' ARS*\n\n';
  msg += 'Quedo a la espera de confirmación de stock y forma de pago. ¡Muchas gracias!';
  return msg;
}

// ── Render catálogo ──────────────────────────────────────
function renderProducts(filter, search, sort) {
  if (filter !== undefined) currentFilter = filter;
  if (search  !== undefined) currentSearch  = search;
  if (sort    !== undefined) currentSort    = sort;

  var catalog = document.getElementById('catalog');

  // 1. Filtro por categoría
  var filtered = products;
  if      (currentFilter === 'camiseta')  filtered = products.filter(function(p) { return p.type === 'camiseta'; });
  else if (currentFilter === 'short')     filtered = products.filter(function(p) { return p.type === 'short'; });
  else if (currentFilter === 'argentina') filtered = products.filter(function(p) { return p.tags.indexOf('argentina') >= 0; });
  else if (currentFilter === 'retro')     filtered = products.filter(function(p) { return p.tags.indexOf('retro') >= 0; });

  // 2. Búsqueda
  if (currentSearch.trim()) {
    var q = currentSearch.trim().toLowerCase();
    filtered = filtered.filter(function(p) {
      return p.name.toLowerCase().indexOf(q) >= 0
          || p.club.toLowerCase().indexOf(q) >= 0
          || p.type.toLowerCase().indexOf(q) >= 0
          || p.tags.join(' ').toLowerCase().indexOf(q) >= 0;
    });
  }

  // 3. Ordenamiento
  filtered = filtered.slice(); // copia para no mutar
  if (currentSort === 'price-asc')  filtered.sort(function(a,b) { return a.price - b.price; });
  if (currentSort === 'price-desc') filtered.sort(function(a,b) { return b.price - a.price; });
  if (currentSort === 'name-asc')   filtered.sort(function(a,b) { return a.name.localeCompare(b.name, 'es'); });
  if (currentSort === 'name-desc')  filtered.sort(function(a,b) { return b.name.localeCompare(a.name, 'es'); });

  // Sin resultados
  if (!filtered.length) {
    catalog.innerHTML = '<div class="no-results">'
      + '<div class="no-results-icon">🔍</div>'
      + '<p>No encontramos productos para <strong>"' + currentSearch + '"</strong></p>'
      + '<button onclick="clearSearch()">Ver todos los productos</button>'
      + '</div>';
    return;
  }

  catalog.innerHTML = filtered.map(function(p) {
    var ver    = getVersion(p.id);
    var isRetro = p.tags.indexOf('retro') >= 0;
    // Retro: siempre fan, precio base, sin toggle de versión
    var ver    = isRetro ? 'fan' : getVersion(p.id);
    var stock  = getStock(p, ver);
    var sel    = selectedSizes[p.id] || null;
    var price  = isRetro ? p.price : getPrice(p, ver);
    var isFan  = ver === 'fan';

    // Talles: retro solo usa stock fan; otros usan unión de ambas versiones
    var sizesSet = {};
    if (isRetro) {
      Object.keys(p.stock).forEach(function(k) { sizesSet[k] = true; });
    } else {
      Object.keys(p.stock).forEach(function(k) { sizesSet[k] = true; });
      Object.keys(p.stockJugador || {}).forEach(function(k) { sizesSet[k] = true; });
    }
    var allSizes = Object.keys(sizesSet);

    var canAdd = sel && (stock[sel] === true);

    var sizeBtns = allSizes.map(function(sz) {
      var avail = stock[sz] === true;
      return '<button'
        + ' class="size-btn' + (avail ? '' : ' out-of-stock') + (sel === sz ? ' selected' : '') + '"'
        + ' data-action="size" data-id="' + p.id + '" data-sz="' + sz + '"'
        + (avail ? '' : ' disabled')
        + ' title="' + (avail ? sz : sz + ' — Agotado') + '"'
        + '>' + sz + '</button>';
    }).join('');

    var badgeHtml = p.badge ? '<div class="product-badge ' + (p.badgeType || '') + '">' + p.badge + '</div>' : '';
    var infoTagHtml = '';
    var versionToggleHtml = isRetro ? '' :
        '<div class="version-toggle">'
      + '<button class="ver-btn' + (isFan ? ' active' : '') + '" data-action="version" data-id="' + p.id + '" data-ver="fan">'
      + '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
      + ' Fan</button>'
      + '<button class="ver-btn jugador' + (!isFan ? ' active' : '') + '" data-action="version" data-id="' + p.id + '" data-ver="jugador">'
      + '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'
      + ' Jugador</button>'
      + '</div>';

    // ── Dorsal: indicador compacto en la card ──
    var dorsalSeleccionado = selectedDorsal[p.id] || null;
    var hasDorsales = p.dorsales && p.dorsales.length > 0;
    var dorsalHtml = '';
    if (hasDorsales) {
      var dorsalCost = dorsalSeleccionado ? DORSAL_EXTRA : 0;
      var dorsalLabel = dorsalSeleccionado
        ? '<span class="dorsal-indicator-val">' + dorsalSeleccionado.numero + ' — ' + dorsalSeleccionado.nombre + '</span>'
        : '<span class="dorsal-indicator-none">Sin dorsal</span>';
      dorsalHtml = '<div class="dorsal-indicator' + (sel ? '' : ' dorsal-hidden') + '" id="dorsal-section-' + p.id + '">'
        + '<div class="dorsal-indicator-row">'
        + '<span class="dorsal-indicator-label">🎽 Dorsal</span>'
        + dorsalLabel
        + '<button class="dorsal-edit-btn" data-action="dorsal-open" data-id="' + p.id + '">Elegir</button>'
        + '</div>'
        + (dorsalSeleccionado ? '<span class="dorsal-price-tag">+' + formatPrice(DORSAL_EXTRA) + '</span>' : '')
        + '</div>';
    }

    var dorsalCost = hasDorsales && dorsalSeleccionado ? DORSAL_EXTRA : 0;
    var totalPrice = price + dorsalCost;

    return '<div class="product-card" id="card-' + p.id + '">'
      + '<div class="product-img-wrap" data-action="zoom" data-img="' + p.img + '" data-name="' + p.name.replace(/"/g, '&quot;') + '" title="Ver imagen ampliada">'
      + '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy" onerror="this.style.display=\'none\'">'
      + badgeHtml
      + '<div class="img-zoom-hint">🔍</div>'
      + '</div>'
      + '<div class="product-info">'
      + '<div class="product-club">' + p.club + '</div>'
      + '<div class="product-name">' + p.name + '</div>'
      + versionToggleHtml
      + infoTagHtml
      + '<div class="product-price" id="price-' + p.id + '">' + formatPrice(totalPrice) + ' <small>ARS</small></div>'
      + '<div class="size-label">Talle:</div>'
      + '<div class="size-grid">' + sizeBtns + '</div>'
      + dorsalHtml
      + '<button class="add-btn" data-action="add" data-id="' + p.id + '"' + (!canAdd ? ' disabled' : '') + '>'
      + mkCartIcon() + ' ' + (canAdd ? 'Agregar al Carrito' : 'Seleccioná un talle')
      + '</button>'
      + '</div>'
      + '</div>';
  }).join('');
}

// ── Cambiar versión ──────────────────────────────────────
function setVersion(productId, version) {
  var p = products.find(function(x) { return x.id === productId; });
  if (!p || p.tags.indexOf('retro') >= 0) return;
  selectedVersions[productId] = version;
  var stock = getStock(p, version);
  var sz    = selectedSizes[productId];
  if (sz && stock[sz] !== true) delete selectedSizes[productId];

  var card  = document.getElementById('card-' + productId);
  if (!card) return;
  var isFan  = version === 'fan';
  var selNow = selectedSizes[productId] || null;

  var sizesSet = {};
  Object.keys(p.stock).forEach(function(k) { sizesSet[k] = true; });
  Object.keys(p.stockJugador || {}).forEach(function(k) { sizesSet[k] = true; });
  var allSizes = Object.keys(sizesSet);

  // Botones versión
  card.querySelectorAll('[data-action="version"]').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.ver === version);
  });

  // Precio
  card.querySelector('.product-price').innerHTML = formatPrice(getPrice(p, version)) + ' <small>ARS</small>';

  // Talles
  card.querySelector('.size-grid').innerHTML = allSizes.map(function(sz) {
    var avail = stock[sz] === true;
    return '<button'
      + ' class="size-btn' + (avail ? '' : ' out-of-stock') + (selNow === sz ? ' selected' : '') + '"'
      + ' data-action="size" data-id="' + productId + '" data-sz="' + sz + '"'
      + (avail ? '' : ' disabled')
      + ' title="' + (avail ? sz : sz + ' — Agotado') + '"'
      + '>' + sz + '</button>';
  }).join('');

  // Botón agregar
  var canAdd = selNow && (stock[selNow] === true);
  var addBtn = card.querySelector('[data-action="add"]');
  addBtn.disabled = !canAdd;
  addBtn.innerHTML = mkCartIcon() + ' ' + (canAdd ? 'Agregar al Carrito' : 'Seleccioná un talle');
  // Mostrar/ocultar dorsal según si hay talle seleccionado
  var dorsalSection = document.getElementById('dorsal-section-' + productId);
  if (dorsalSection) dorsalSection.classList.toggle('dorsal-hidden', !selNow);
}

// ── Seleccionar talle ────────────────────────────────────
function selectSize(productId, size) {
  var p = products.find(function(x) { return x.id === productId; });
  if (!p) return;
  var ver   = getVersion(productId);
  var stock = getStock(p, ver);
  if (stock[size] !== true) return;
  selectedSizes[productId] = size;
  var card = document.getElementById('card-' + productId);
  if (!card) return;
  card.querySelectorAll('[data-action="size"]').forEach(function(btn) {
    btn.classList.toggle('selected', btn.dataset.sz === size);
  });
  var addBtn = card.querySelector('[data-action="add"]');
  addBtn.disabled = false;
  addBtn.innerHTML = mkCartIcon() + ' Agregar al Carrito';
  // Mostrar indicador dorsal
  var dorsalSection = document.getElementById('dorsal-section-' + productId);
  if (dorsalSection) dorsalSection.classList.remove('dorsal-hidden');
  // Abrir modal dorsal si tiene opciones
  if (p.dorsales && p.dorsales.length > 0) {
    openDorsalModal(productId);
  }
}

// ── Dorsal Modal ─────────────────────────────────────────
function openDorsalModal(productId) {
  var p = products.find(function(x) { return x.id === productId; });
  if (!p || !p.dorsales || !p.dorsales.length) return;

  var modal = document.getElementById('dorsalModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'dorsalModal';
    modal.innerHTML =
      '<div class="dorsal-modal-backdrop" id="dorsalModalBackdrop"></div>'
      + '<div class="dorsal-modal-box">'
      + '<div class="dorsal-modal-header">'
      + '<span class="dorsal-modal-title" id="dorsalModalTitle">Elegí el dorsal</span>'
      + '<button class="dorsal-modal-close" id="dorsalModalClose">✕</button>'
      + '</div>'
      + '<div class="dorsal-modal-subtitle">+' + formatPrice(DORSAL_EXTRA) + ' · Opcional</div>'
      + '<div class="dorsal-modal-list" id="dorsalModalList"></div>'
      + '</div>';
    document.body.appendChild(modal);
    document.getElementById('dorsalModalBackdrop').addEventListener('click', closeDorsalModal);
    document.getElementById('dorsalModalClose').addEventListener('click', closeDorsalModal);
  }

  // Título
  document.getElementById('dorsalModalTitle').textContent = p.name;

  // Opciones
  var sel = selectedDorsal[productId];
  var listHtml = '<button class="dorsal-modal-item' + (!sel ? ' active' : '') + '" data-pid="' + productId + '" data-dkey="">'
    + '<span class="dorsal-modal-num">—</span>'
    + '<span class="dorsal-modal-name">Sin dorsal</span>'
    + (!sel ? '<span class="dorsal-modal-check">✓</span>' : '')
    + '</button>';
  listHtml += p.dorsales.map(function(d) {
    var key = d.numero + '|' + d.nombre;
    var isActive = sel && sel.key === key;
    return '<button class="dorsal-modal-item' + (isActive ? ' active' : '') + '" data-pid="' + productId + '" data-dkey="' + key + '" data-dnum="' + d.numero + '" data-dnom="' + d.nombre.replace(/"/g,'&quot;') + '">'
      + '<span class="dorsal-modal-num">' + d.numero + '</span>'
      + '<span class="dorsal-modal-name">' + d.nombre + '</span>'
      + (isActive ? '<span class="dorsal-modal-check">✓</span>' : '')
      + '</button>';
  }).join('');

  document.getElementById('dorsalModalList').innerHTML = listHtml;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDorsalModal() {
  var modal = document.getElementById('dorsalModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function selectDorsal(productId, key, numero, nombre) {
  selectedDorsal[productId] = key ? { key: key, numero: numero, nombre: nombre } : null;

  // Actualizar indicador en la card
  var indicator = document.getElementById('dorsal-section-' + productId);
  if (indicator) {
    var valEl = indicator.querySelector('.dorsal-indicator-val, .dorsal-indicator-none');
    var priceTag = indicator.querySelector('.dorsal-price-tag');
    if (valEl) {
      if (key) {
        valEl.className = 'dorsal-indicator-val';
        valEl.textContent = numero + ' — ' + nombre;
      } else {
        valEl.className = 'dorsal-indicator-none';
        valEl.textContent = 'Sin dorsal';
      }
    }
    if (key && !priceTag) {
      var row = indicator.querySelector('.dorsal-indicator-row');
      var tag = document.createElement('span');
      tag.className = 'dorsal-price-tag';
      tag.textContent = '+' + formatPrice(DORSAL_EXTRA);
      indicator.appendChild(tag);
    } else if (!key && priceTag) {
      priceTag.remove();
    }
  }

  updateDorsalPrice(productId);
  closeDorsalModal();
}

function updateDorsalPrice(productId) {
  var p = products.find(function(x) { return x.id === productId; });
  if (!p) return;
  var ver   = p.tags.indexOf('retro') >= 0 ? 'fan' : getVersion(productId);
  var base  = p.tags.indexOf('retro') >= 0 ? p.price : getPrice(p, ver);
  var extra = getDorsalPrice(productId);
  var priceEl = document.getElementById('price-' + productId);
  if (priceEl) priceEl.innerHTML = formatPrice(base + extra) + ' <small>ARS</small>';
}


function addToCart(productId) {
  var p       = products.find(function(x) { return x.id === productId; });
  var size    = selectedSizes[productId];
  var version = getVersion(productId);
  var stock   = getStock(p, version);
  if (!size)                { showToast('Seleccioná un talle primero', 'error'); return; }
  if (stock[size] !== true) { showToast('Talle agotado', 'error'); return; }

  var dorsal     = getDorsal(productId);
  var basePrice  = getPrice(p, version);
  var dorsalCost = dorsal ? DORSAL_EXTRA : 0;
  var price      = basePrice + dorsalCost;
  var key        = productId + '-' + size + '-' + version + (dorsal ? '-d' + dorsal.numero : '');
  var ex         = cart.find(function(i) { return i.key === key; });
  if (ex) { ex.qty++; } else {
    cart.push({
      key: key, productId: productId, size: size, qty: 1,
      version: version, name: p.name, price: price, img: p.img,
      dorsal: dorsal ? { nombre: dorsal.nombre, numero: dorsal.numero } : null
    });
  }
  updateCartUI();
  wiggleCart();
  var dorsalInfo = dorsal ? ' · #' + dorsal.numero + ' ' + dorsal.nombre : '';
  showToast({
    name:    p.name,
    size:    size,
    version: version === 'jugador' ? 'Jugador' : 'Fan',
    dorsal:  dorsalInfo,
    price:   formatPrice(price)
  }, 'success');
}

function removeFromCart(key) {
  cart = cart.filter(function(i) { return i.key !== key; });
  updateCartUI();
}

function changeQty(key, delta) {
  var item = cart.find(function(i) { return i.key === key; });
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(function(i) { return i.key !== key; });
  updateCartUI();
}

function updateCartUI() {
  var total    = cart.reduce(function(s, i) { return s + i.price * i.qty; }, 0);
  var totalQty = cart.reduce(function(s, i) { return s + i.qty; }, 0);
  document.getElementById('cartCount').textContent = totalQty;
  document.getElementById('cartItemCount').textContent = totalQty
    ? '(' + totalQty + ' ítem' + (totalQty !== 1 ? 's' : '') + ')' : '';
  document.getElementById('cartTotal').textContent = formatPrice(total);
  document.getElementById('cartFooter').style.display = cart.length ? 'block' : 'none';

  var itemsEl = document.getElementById('cartItems');
  if (!cart.length) {
    itemsEl.innerHTML = '<div class="cart-empty"><div class="cart-empty-icon">🛒</div><p>Tu carrito está vacío.<br>¡Agregá productos para continuar!</p></div>';
    return;
  }
  itemsEl.innerHTML = cart.map(function(item) {
    var vl = item.version === 'jugador'
      ? '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> Jugador'
      : '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> Fan';
    return '<div class="cart-item">'
      + '<div class="cart-item-img"><img src="' + item.img + '" alt="' + item.name + '" onerror="this.style.display=\'none\'"></div>'
      + '<div class="cart-item-info">'
      + '<div class="cart-item-name">' + item.name + '</div>'
      + '<div class="cart-item-size">Talle: ' + item.size + ' · <span class="cart-version-tag">' + vl + '</span></div>'
      + (item.dorsal ? '<div class="cart-item-dorsal">🎽 Dorsal: <strong>' + item.dorsal.numero + ' — ' + item.dorsal.nombre + '</strong></div>' : '')
      + '<div class="cart-item-controls">'
      + '<button class="qty-btn" data-cart-action="dec" data-key="' + item.key + '">−</button>'
      + '<span class="qty-num">' + item.qty + '</span>'
      + '<button class="qty-btn" data-cart-action="inc" data-key="' + item.key + '">+</button>'
      + '</div></div>'
      + '<div class="cart-item-price">'
      + '<span>' + formatPrice(item.price * item.qty) + '</span>'
      + '<button class="remove-item" data-cart-action="remove" data-key="' + item.key + '" title="Eliminar">✕</button>'
      + '</div></div>';
  }).join('');
}

// ── UI ───────────────────────────────────────────────────
function toggleCart() {
  var s = document.getElementById('cartSidebar');
  var o = document.getElementById('cartOverlay');
  var open = s.classList.toggle('open');
  o.classList.toggle('open', open);
}

function selectFilter(filter, btn) {
  currentFilter = filter;
  // Actualizar opciones del dropdown
  document.querySelectorAll('.filter-option').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  // Chip activo
  var chip = document.getElementById('activeFilterChip');
  var label = document.getElementById('activeFilterLabel');
  if (filter !== 'all') {
    var names = { camiseta: 'Camisetas', short: 'Shorts', argentina: 'Argentina', retro: 'Retro' };
    label.textContent = names[filter] || filter;
    chip.style.display = 'flex';
  } else {
    chip.style.display = 'none';
  }
  closeFilterMenu();
  renderProducts();
}

function handleSearch(val) {
  currentSearch = val;
  var clearBtn = document.getElementById('searchClear');
  if (clearBtn) clearBtn.style.display = val ? 'flex' : 'none';
  renderProducts();
}

function clearSearch() {
  currentSearch = '';
  var inp = document.getElementById('searchInput');
  if (inp) inp.value = '';
  var clearBtn = document.getElementById('searchClear');
  if (clearBtn) clearBtn.style.display = 'none';
  renderProducts();
}

function handleSort(val) {
  currentSort = val;
  renderProducts();
}

function toggleFilterMenu() {
  var wrap = document.getElementById('filterMenuWrap');
  wrap.classList.toggle('open');
}

function closeFilterMenu() {
  var wrap = document.getElementById('filterMenuWrap');
  if (wrap) wrap.classList.remove('open');
}

// Cerrar menú al hacer click fuera
document.addEventListener('click', function(e) {
  var wrap = document.getElementById('filterMenuWrap');
  if (wrap && !wrap.contains(e.target)) closeFilterMenu();
});

// Compatibilidad con nav links viejos
function filterProducts(filter, btn) { selectFilter(filter, document.querySelector('.filter-option[data-filter="' + filter + '"]')); }
function filterFromNav(filter)        { selectFilter(filter, document.querySelector('.filter-option[data-filter="' + filter + '"]')); }

function showToast(data, type) {
  var c = document.getElementById('toastContainer');
  var t = document.createElement('div');
  t.className = 'toast ' + (type || '');

  var checkIcon = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
  var alertIcon = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>';
  var arrowIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>';

  if (type === 'success') {
    var d = data;
    var sub = '<strong>' + d.size + '</strong> · ' + d.version + (d.dorsal ? ' · <strong>' + d.dorsal + '</strong>' : '') + ' · ' + d.price;
    t.innerHTML =
      '<div class="toast-inner">'
      + '<div class="toast-icon">' + checkIcon + '</div>'
      + '<div class="toast-body">'
      + '<div class="toast-title">' + d.name + '</div>'
      + '<div class="toast-msg">' + sub + '</div>'
      + '</div>'
      + '<div class="toast-arrow">' + arrowIcon + '<span class="toast-arrow-label">Carrito</span></div>'
      + '</div>';
  } else if (type === 'error') {
    var msg = typeof data === 'string' ? data : (data.msg || '');
    t.innerHTML =
      '<div class="toast-inner">'
      + '<div class="toast-icon">' + alertIcon + '</div>'
      + '<div class="toast-body">'
      + '<div class="toast-title">Atención</div>'
      + '<div class="toast-msg">' + msg + '</div>'
      + '</div>'
      + '</div>';
  } else {
    var msg2 = typeof data === 'string' ? data : '';
    t.innerHTML = '<div class="toast-inner"><div class="toast-body"><div class="toast-msg">' + msg2 + '</div></div></div>';
  }

  c.appendChild(t);
  setTimeout(function() {
    t.classList.add('toast-hiding');
    setTimeout(function() { t.remove(); }, 350);
  }, 3500);
}

function wiggleCart() {
  var btn = document.querySelector('.cart-btn');
  if (!btn) return;
  btn.classList.remove('cart-wiggle');
  // forzar reflow para reiniciar animación
  void btn.offsetWidth;
  btn.classList.add('cart-wiggle');
  setTimeout(function() { btn.classList.remove('cart-wiggle'); }, 700);
}

function injectLogos() {
  document.querySelectorAll('[data-logo]').forEach(function(el) { el.src = LOGO; });
}

// ── Init ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  injectLogos();
  renderProducts();
  updateCartUI();
  // Ocultar botón clear al inicio
  var clearBtn = document.getElementById('searchClear');
  if (clearBtn) clearBtn.style.display = 'none';

  // Un solo listener para todo el catálogo
  document.getElementById('catalog').addEventListener('click', function(e) {
    var el = e.target.closest('[data-action]');
    if (!el) return;
    var action = el.dataset.action;
    var id     = el.dataset.id;
    if (action === 'zoom')        { openImageModal(el.dataset.img, el.dataset.name); return; }
    if (action === 'dorsal-open') { openDorsalModal(id); return; }
    if (!id) return;
    if (action === 'version') setVersion(id, el.dataset.ver);
    if (action === 'size')    selectSize(id, el.dataset.sz);
    if (action === 'add')     addToCart(id);
  });

  // Listener del modal dorsal (delegado en body)
  document.body.addEventListener('click', function(e) {
    var el = e.target.closest('.dorsal-modal-item');
    if (!el) return;
    var pid  = el.dataset.pid;
    var key  = el.dataset.dkey;
    var num  = el.dataset.dnum;
    var nom  = el.dataset.dnom;
    selectDorsal(pid, key, num, nom);
  });

  // Un solo listener para el carrito
  document.getElementById('cartItems').addEventListener('click', function(e) {
    var el = e.target.closest('[data-cart-action]');
    if (!el) return;
    var action = el.dataset.cartAction;
    var key    = el.dataset.key;
    if (action === 'inc')    changeQty(key, 1);
    if (action === 'dec')    changeQty(key, -1);
    if (action === 'remove') removeFromCart(key);
  });

  document.querySelector('.checkout-btn').addEventListener('click', function() {
    if (cart.length) openWhatsApp(buildCartWhatsAppMsg());
  });
});










 