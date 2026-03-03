const LOGO = "WhatsApp Image 2026-02-24 at 19.08.37.png";
const WA_NUMBER = '5491156680527';
const JUGADOR_EXTRA_CAMISETA = 5000;
const JUGADOR_EXTRA_SHORT    = 7000;

const products = [
  {
    id: "cam-arg-titular",
    name: 'Camiseta Argentina Retro Titular',
    club: 'Argentina',
    type: 'camiseta',
    tags: ['argentina', 'retro'],
    price: 40000,
    badge: 'Retro',
    badgeType: 'retro',
    img: 'camiseta.argentinaretroTitular.jpeg',
    stock:        { S: false, M: true,  L: false, XL: false },
    stockJugador: { S: true,  M: false, L: false, XL: false }
  },
  {
    id: "cam-arg-visitante",
    name: 'Camiseta Argentina Retro Visitante',
    club: 'Argentina',
    type: 'camiseta',
    tags: ['argentina', 'retro'],
    price: 40000,
    badge: 'Retro',
    badgeType: 'retro',
    img: 'camiseta-argentinaRetro.jpeg',
    stock:        { S: false, M: false, L: false, XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false }
  },
  {
    id: "cam-arg-mundial",
    name: 'Camiseta Argentina Mundial 2026',
    club: 'Argentina',
    type: 'camiseta',
    tags: ['argentina'],
    price: 40000,
    badge: 'new',
    badgeType: 'new',
    img: 'cam-argentinaMundial.jpeg',
    stock:        { S: true,  M: true,  L: true,  XL: true  },
    stockJugador: { S: false, M: false, L: false, XL: false }
  },
  {
    id: "cam-bayern",
    name: 'Camiseta Bayern Munchen',
    club: 'Bayern Munchen',
    type: 'camiseta',
    tags: ['Bayern Munchen'],
    price: 40000,
    badge: 'new',
    badgeType: 'new',
    img: 'camiseta-bayern.jpeg',
    stock:        { S: false, M: false, L: false, XL: true  },
    stockJugador: { S: false, M: false, L: false, XL: false }
  },
  {
    id: "cam-man-united-blanca",
    name: 'Camiseta Manchester united Visitante',
    club: 'Manchester united',
    type: 'camiseta',
    tags: ['Manchester united'],
    price: 40000,
    badge: 'new',
    badgeType: 'new',
    img: 'camiseta-manUblanca.jpeg',
    stock:        { S: false, M: false, L: false, XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false }
  },
  {
    id: "cam-chelsea",
    name: 'Camiseta chelsea alternativa',
    club: 'chelsea',
    type: 'camiseta',
    tags: ['chelsea'],
    price: 40000,
    badge: 'new',
    badgeType: 'new',
    img: 'cam-chelseaNegra.jpeg',
    stock:        { S: false, M: true,  L: false, XL: true  },
    stockJugador: { S: false, M: false, L: false, XL: false }
  },
  {
    id: "cam-PSG",
    name: 'Camiseta PSG',
    club: 'PARIS SG',
    type: 'camiseta',
    tags: ['PSG'],
    price: 40000,
    badge: 'new',
    badgeType: 'new',
    img: 'camiseta-psg.jpeg',
    stock:        { S: false, M: false, L: false, XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false }
  },
  {
    id: "cam-realMadrid-visitante",
    name: 'Camiseta Real Madrid Visitante',
    club: 'Real Madrid',
    type: 'camiseta',
    tags: ['Real Madrid'],
    price: 40000,
    badge: 'new',
    badgeType: 'new',
    img: 'camiseta-realMadridAzul.jpeg',
    stock:        { S: false, M: true,  L: false, XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false }
  },
  {
    id: "cam-barcelona",
    name: 'Camiseta barcelona',
    club: 'barcelona',
    type: 'camiseta',
    tags: ['barcelona'],
    price: 40000,
    badge: 'new',
    badgeType: 'new',
    img: 'cam-barsa.jpeg',
    stock:        { S: false, M: true,  L: false, XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false }
  },
  {
    id: "cam-atlMadrid",
    name: 'Camiseta Atletico Madrid',
    club: 'Atletico Madrid',
    type: 'camiseta',
    tags: ['Atletico Madrid'],
    price: 40000,
    badge: 'new',
    badgeType: 'new',
    img: 'cam-atlMadrid.jpeg',
    stock:        { S: false, M: false, L: true,  XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false }
  },
  {
    id: "cam-river-visitante",
    name: 'Camiseta river Visitante',
    club: 'river',
    type: 'camiseta',
    tags: ['river'],
    price: 40000,
    badge: 'new',
    badgeType: 'new',
    img: 'camiseta-riverAlternativa.jpeg',
    stock:        { S: false, M: false, L: false, XL: false, XXXL: true  },
    stockJugador: { S: false, M: false, L: false, XL: false, XXXL: false }
  },
  {
    id: "cam-roma-visitante",
    name: 'Camiseta roma Visitante',
    club: 'roma',
    type: 'camiseta',
    tags: ['roma'],
    price: 40000,
    badge: 'new',
    badgeType: 'new',
    img: 'camiseta-roma.jpeg',
    stock:        { S: false, M: false, L: true,  XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false }
  },
  {
    id: "cam-inter",
    name: 'Camiseta inter',
    club: 'inter',
    type: 'camiseta',
    tags: ['inter'],
    price: 40000,
    badge: 'new',
    badgeType: 'new',
    img: 'cam-inter.jpeg',
    stock:        { S: false, M: true,  L: true,  XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false }
  },
  {
    id: "cam-total90a",
    name: 'Camiseta total 90 azul',
    club: 'total 90',
    type: 'camiseta',
    tags: ['retro'],
    price: 40000,
    badge: 'Retro',
    badgeType: 'retro',
    img: 'camiseta-total90azul.jpeg',
    stock:        { S: true,  M: false, L: true,  XL: true  },
    stockJugador: { S: false, M: false, L: false, XL: false }
  },
  {
    id: "cam-total90n",
    name: 'Camiseta total 90 negra',
    club: 'total 90',
    type: 'camiseta',
    tags: ['retro'],
    price: 40000,
    badge: 'Retro',
    badgeType: 'retro',
    img: 'camiseta-total90negra.jpeg',
    stock:        { S: true,  M: false, L: true,  XL: true  },
    stockJugador: { S: false, M: false, L: false, XL: false }
  },
  {
    id: "short-arg-2026",
    name: 'Short Argentina 2026 Adidas',
    club: 'Argentina',
    type: 'short',
    tags: ['argentina'],
    price: 35000,
    badge: 'New',
    badgeType: 'new',
    img: 'short-argentina2026.jpeg',
    stock:        { S: false, M: false, L: false, XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false }
  },
  {
    id: "short-barca-negro",
    name: 'Short Barcelona Negro',
    club: 'FC Barcelona',
    type: 'short',
    tags: [],
    price: 35000,
    badge: 'new',
    badgeType: 'new',
    img: 'short-barcelona.jpeg',
    stock:        { S: false, M: true,  L: true,  XL: false, XXL: true  },
    stockJugador: { S: false, M: false, L: false, XL: false, XXL: false }
  },
  {
    id: "short-barca-azul",
    name: 'Short Barcelona Azul',
    club: 'FC Barcelona',
    type: 'short',
    tags: [],
    price: 35000,
    badge: 'new',
    badgeType: 'new',
    img: 'short-barcelonaAzul.jpeg',
    stock:        { S: false, M: false, L: true,  XL: true  },
    stockJugador: { S: false, M: false, L: false, XL: false }
  },
  {
    id: "short-bayern-crema",
    name: 'Short Bayern München Crema',
    club: 'Bayern München',
    type: 'short',
    tags: [],
    price: 35000,
    badge: 'new',
    badgeType: 'new',
    img: 'short-bayern.jpeg',
    stock:        { S: false, M: false, L: false, XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false }
  },
  {
    id: "short-chelsea-negro-cfc",
    name: 'Short Chelsea Negro CFC',
    club: 'Chelsea FC',
    type: 'short',
    tags: [],
    price: 35000,
    badge: 'new',
    badgeType: 'new',
    img: 'short-chelseaNegro.jpeg',
    stock:        { S: false, M: false, L: false, XL: true  },
    stockJugador: { S: false, M: false, L: false, XL: false }
  },
  {
    id: "short-chelsea-verde",
    name: 'Short Chelsea Verde / Rojo',
    club: 'Chelsea FC',
    type: 'short',
    tags: [],
    price: 35000,
    badge: 'New',
    badgeType: 'new',
    img: 'short-chelseaVerde.jpeg',
    stock:        { S: false, M: false, L: false, XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false }
  },
  {
    id: "short-chelsea-blanco",
    name: 'Short Chelsea Blanco Nike',
    club: 'Chelsea FC',
    type: 'short',
    tags: [],
    price: 35000,
    badge: 'new',
    badgeType: 'new',
    img: 'short-chelseaBlanco.jpeg',
    stock:        { S: false, M: false, L: false, XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false }
  },
  {
    id: "short-chelsea-azul-rojo",
    name: 'Short Chelsea Azul / Rojo',
    club: 'Chelsea FC',
    type: 'short',
    tags: [],
    price: 35000,
    badge: 'New',
    badgeType: 'new',
    img: 'short-chelseaAzul.jpeg',
    stock:        { S: false, M: false, L: false, XL: true,  XXL: true  },
    stockJugador: { S: false, M: false, L: false, XL: false, XXL: false }
  },
  {
    id: "short-inter-negro-oro",
    name: 'Short Inter Milán Negro/Oro',
    club: 'Inter de Milán',
    type: 'short',
    tags: [],
    price: 35000,
    badge: 'new',
    badgeType: 'new',
    img: 'short-inter.jpeg',
    stock:        { S: false, M: false, L: false, XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false }
  },
  {
    id: "short-juventus-azul",
    name: 'Short Juventus Azul Marino',
    club: 'Juventus FC',
    type: 'short',
    tags: [],
    price: 35000,
    badge: 'new',
    badgeType: 'new',
    img: 'short-juventus.jpeg',
    stock:        { S: false, M: false, L: false, XL: false, XXL: true  },
    stockJugador: { S: false, M: false, L: false, XL: false, XXL: false }
  },
  {
    id: "short-Bayern-rojo",
    name: 'Short Liverpool Rojo',
    club: 'Liverpool FC',
    type: 'short',
    tags: [],
    price: 35000,
    badge: 'new',
    badgeType: 'new',
    img: 'short-bayern.jpeg',
    stock:        { S: false, M: false, L: false, XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false }
  },
  {
    id: "short-manu-negro-amarillo",
    name: 'Short Manchester United Negro/Amarillo',
    club: 'Manchester United',
    type: 'short',
    tags: [],
    price: 35000,
    badge: 'new',
    badgeType: 'new',
    img: 'short-manU.jpeg',
    stock:        { S: false, M: false, L: false, XL: false, XXL: false },
    stockJugador: { S: false, M: false, L: false, XL: false, XXL: false }
  },
  {
    id: "short-manu-azul",
    name: 'Short Manchester United Azul',
    club: 'Manchester United',
    type: 'short',
    tags: [],
    price: 35000,
    badge: 'New',
    badgeType: 'new',
    img: 'short-manUazul.jpeg',
    stock:        { S: false, M: false, L: false, XL: false, XXL: true  },
    stockJugador: { S: false, M: false, L: false, XL: false, XXL: false }
  },
  {
    id: "short-psg-azul",
    name: 'Short PSG Azul Marino',
    club: 'Paris Saint-Germain',
    type: 'short',
    tags: [],
    price: 35000,
    badge: 'new',
    badgeType: 'new',
    img: 'short-psg.jpeg',
    stock:        { S: false, M: false, L: false, XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false }
  },
  {
    id: "short-psg-negro-rosa",
    name: 'Short PSG Negro/Rosa',
    club: 'Paris Saint-Germain',
    type: 'short',
    tags: [],
    price: 35000,
    badge: 'new',
    badgeType: 'new',
    img: 'short-psg-negro.jpeg',
    stock:        { S: false, M: false, L: false, XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false }
  },
  {
    id: "short-roma-granate",
    name: 'Short AS Roma Granate',
    club: 'AS Roma',
    type: 'short',
    tags: [],
    price: 35000,
    badge: 'new',
    badgeType: 'new',
    img: 'short-roma.jpeg',
    stock:        { S: false, M: false, L: false, XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false }
  },
  {
    id: "short-chelsea-negro-amarillo",
    name: 'Short Chelsea Negro/Amarillo',
    club: 'Chelsea FC',
    type: 'short',
    tags: [],
    price: 35000,
    badge: 'new',
    badgeType: 'new',
    img: 'short-chelsea-negroAmarillo.jpeg',
    stock:        { S: false, M: false, L: false, XL: true,  XXL: true  },
    stockJugador: { S: false, M: false, L: false, XL: false, XXL: false }
  },
  {
    id: "short-atleti",
    name: 'Short Atlético de Madrid',
    club: 'Atlético de Madrid',
    type: 'short',
    tags: [],
    price: 35000,
    badge: 'New',
    badgeType: 'new',
    img: 'short-atlMadrid.jpeg',
    stock:        { S: false, M: false, L: false, XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false }
  },
  {
    id: "short-astonVilla",
    name: 'Short Aston Villa',
    club: 'Aston Villa',
    type: 'short',
    tags: ["Aston Villa"],
    price: 35000,
    badge: 'New',
    badgeType: 'new',
    img: 'short-aston.jpeg',
    stock:        { S: false, M: false, L: false, XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false }
  },
  {
    id: "short-saoPaulo",
    name: 'Short sao paulo',
    club: 'sao paulo',
    type: 'short',
    tags: ["sao paulo"],
    price: 35000,
    badge: 'New',
    badgeType: 'new',
    img: 'short-saoPaulo.jpeg',
    stock:        { S: false, M: false, L: false, XL: false },
    stockJugador: { S: false, M: false, L: false, XL: false }
  }
];

// ── Estado ───────────────────────────────────────────────
const selectedSizes    = {};
const selectedVersions = {};
let cart = [];

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
  var msg = '¡Hola! Quiero hacer el siguiente pedido en LK Indumentaria:\n\n';
  cart.forEach(function(i) {
    var ver = i.version === 'jugador' ? ' (Versión Jugador)' : ' (Versión Fan)';
    msg += '• ' + i.name + ver + ' — Talle ' + i.size + ' x' + i.qty + ' → ' + formatPrice(i.price * i.qty) + '\n';
  });
  msg += '\n*Total: ' + formatPrice(cart.reduce(function(s, i) { return s + i.price * i.qty; }, 0)) + '*';
  msg += '\n\n¿Me podés confirmar disponibilidad y forma de pago?';
  return msg;
}

// ── Render catálogo ──────────────────────────────────────
function renderProducts(filter) {
  var catalog = document.getElementById('catalog');
  var filtered = products;
  if      (filter === 'camiseta')  filtered = products.filter(function(p) { return p.type === 'camiseta'; });
  else if (filter === 'short')     filtered = products.filter(function(p) { return p.type === 'short'; });
  else if (filter === 'argentina') filtered = products.filter(function(p) { return p.tags.indexOf('argentina') >= 0; });
  else if (filter === 'retro')     filtered = products.filter(function(p) { return p.tags.indexOf('retro') >= 0; });

  catalog.innerHTML = filtered.map(function(p) {
    var ver    = getVersion(p.id);
    var stock  = getStock(p, ver);
    var sel    = selectedSizes[p.id] || null;
    var price  = getPrice(p, ver);
    var isFan  = ver === 'fan';

    // Unión de talles de ambas versiones
    var sizesSet = {};
    Object.keys(p.stock).forEach(function(k) { sizesSet[k] = true; });
    Object.keys(p.stockJugador || {}).forEach(function(k) { sizesSet[k] = true; });
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
    var infoTagHtml = !isFan ? '<div class="version-info-tag">Versión Jugador · calidad premium · +' + formatPrice(getJugadorExtra(p)) + '</div>' : '';

    return '<div class="product-card" id="card-' + p.id + '">'
      + '<div class="product-img-wrap" data-action="zoom" data-img="' + p.img + '" data-name="' + p.name.replace(/"/g, '&quot;') + '" title="Ver imagen ampliada">'
      + '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy" onerror="this.style.display=\'none\'">'
      + badgeHtml
      + '<div class="img-zoom-hint">🔍</div>'
      + '</div>'
      + '<div class="product-info">'
      + '<div class="product-club">' + p.club + '</div>'
      + '<div class="product-name">' + p.name + '</div>'
      + '<div class="version-toggle">'
      + '<button class="ver-btn' + (isFan ? ' active' : '') + '" data-action="version" data-id="' + p.id + '" data-ver="fan">⭐ Fan</button>'
      + '<button class="ver-btn jugador' + (!isFan ? ' active' : '') + '" data-action="version" data-id="' + p.id + '" data-ver="jugador">🥇 Jugador</button>'
      + '</div>'
      + infoTagHtml
      + '<div class="product-price">' + formatPrice(price) + ' <small>ARS</small></div>'
      + '<div class="size-label">Talle:</div>'
      + '<div class="size-grid">' + sizeBtns + '</div>'
      + '<button class="add-btn" data-action="add" data-id="' + p.id + '"' + (!canAdd ? ' disabled' : '') + '>'
      + mkCartIcon() + ' ' + (canAdd ? 'Agregar al Carrito' : 'Seleccioná un talle')
      + '</button>'
      + '</div>'
      + '</div>';
  }).join('');
}

// ── Cambiar versión ──────────────────────────────────────
function setVersion(productId, version) {
  selectedVersions[productId] = version;
  var p     = products.find(function(x) { return x.id === productId; });
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

  // Tag jugador
  var tag = card.querySelector('.version-info-tag');
  if (!isFan) {
    if (!tag) {
      tag = document.createElement('div');
      tag.className = 'version-info-tag';
      card.querySelector('.version-toggle').after(tag);
    }
    
    if (tag) tag.remove();
  }

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
}

// ── Seleccionar talle ────────────────────────────────────
function selectSize(productId, size) {
  var p     = products.find(function(x) { return x.id === productId; });
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
}

// ── Carrito ──────────────────────────────────────────────
function addToCart(productId) {
  var p       = products.find(function(x) { return x.id === productId; });
  var size    = selectedSizes[productId];
  var version = getVersion(productId);
  var stock   = getStock(p, version);
  if (!size)              { showToast('Seleccioná un talle primero', 'error'); return; }
  if (stock[size] !== true) { showToast('Talle agotado', 'error'); return; }
  var price = getPrice(p, version);
  var key   = productId + '-' + size + '-' + version;
  var ex    = cart.find(function(i) { return i.key === key; });
  if (ex) { ex.qty++; } else {
    cart.push({ key: key, productId: productId, size: size, qty: 1, version: version, name: p.name, price: price, img: p.img });
  }
  updateCartUI();
  showToast('✓ ' + p.name + ' (' + size + ' · ' + (version === 'jugador' ? 'Jugador' : 'Fan') + ') agregado', 'success');
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
    var vl = item.version === 'jugador' ? '🥇 Jugador' : '⭐ Fan';
    return '<div class="cart-item">'
      + '<div class="cart-item-img"><img src="' + item.img + '" alt="' + item.name + '" onerror="this.style.display=\'none\'"></div>'
      + '<div class="cart-item-info">'
      + '<div class="cart-item-name">' + item.name + '</div>'
      + '<div class="cart-item-size">Talle: ' + item.size + ' · <span class="cart-version-tag">' + vl + '</span></div>'
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

function filterProducts(filter, btn) {
  document.querySelectorAll('.filter-tab').forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');
  renderProducts(filter);
}

function filterFromNav(filter) {
  renderProducts(filter);
  document.querySelectorAll('.filter-tab').forEach(function(b) { b.classList.remove('active'); });
  var t = document.querySelector('.filter-tab[onclick*="' + filter + '"]');
  if (t) t.classList.add('active');
}

function showToast(msg, type) {
  var c = document.getElementById('toastContainer');
  var t = document.createElement('div');
  t.className = 'toast ' + (type || '');
  t.textContent = msg;
  c.appendChild(t);
  setTimeout(function() { t.remove(); }, 2600);
}

function injectLogos() {
  document.querySelectorAll('[data-logo]').forEach(function(el) { el.src = LOGO; });
}

// ── Init ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  injectLogos();
  renderProducts('all');
  updateCartUI();

  // Un solo listener para todo el catálogo
  document.getElementById('catalog').addEventListener('click', function(e) {
    var el = e.target.closest('[data-action]');
    if (!el) return;
    var action = el.dataset.action;
    var id     = el.dataset.id;
    if (action === 'version') setVersion(id, el.dataset.ver);
    if (action === 'size')    selectSize(id, el.dataset.sz);
    if (action === 'add')     addToCart(id);
    if (action === 'zoom')    openImageModal(el.dataset.img, el.dataset.name);
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