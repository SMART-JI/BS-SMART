// =========================================================
//  SETTINGS (change your settings here)
// =========================================================
const RESTAURANT = {
  name: "BS Smart",
  sub: "Fast Food & Restaurant",
  address: "Sector 5-J, North Karachi, near Kala School",
  phone: "0345-2183819 / 0312-2029588"
};
const TAX_RATE = 0;          // use 0.13 for 13% tax
const CURRENCY = "Rs.";
const DEFAULT_STOCK = 50;    // starting stock of every item

// Starting menu (can be changed later from Manage Menu).
// Items with category "Deals" only show in the Deals view.
const DEFAULT_MENU = [
  { id: 101, cat: "Deals", name: "Solo Deal", desc: "Zinger Burger + Fries + Soft Drink", price: 850, img: "" },
  { id: 102, cat: "Deals", name: "Couple Deal", desc: "2 Zinger Burgers + Loaded Fries + 2 Soft Drinks", price: 1350, img: "" },
  { id: 103, cat: "Deals", name: "Pizza Deal", desc: "Medium Tikka Pizza + 8 Nuggets + 2 Soft Drinks", price: 1650, img: "" },
  { id: 104, cat: "Deals", name: "Family Deal", desc: "Medium Pizza + 2 Zinger Burgers + Loaded Fries + 4 Soft Drinks", price: 2650, img: "" },

  { id: 1, cat: "Burgers", name: "Zinger Burger", desc: "Crispy chicken fillet, mayo, lettuce", price: 450, img: "assets/img/menu/zinger.jpg" },
  { id: 2, cat: "Burgers", name: "Beef Smash Burger", desc: "Double patty, cheese, special sauce", price: 690, img: "assets/img/menu/smash-burger.jpg" },
  { id: 3, cat: "Burgers", name: "Chicken Club Sandwich", desc: "Grilled chicken, egg, cheese, fries", price: 520, img: "assets/img/menu/club-sandwich.jpg" },
  { id: 4, cat: "Pizza", name: "Chicken Tikka Pizza", desc: "Medium, tikka chunks and onion", price: 1250, img: "assets/img/menu/tikka-pizza.jpg" },
  { id: 5, cat: "Pizza", name: "Fajita Pizza", desc: "Medium, peppers, olives and cheese", price: 1250, img: "assets/img/menu/fajita-pizza.jpg" },
  { id: 6, cat: "Pizza", name: "Pepperoni Pizza", desc: "Medium, beef pepperoni, mozzarella", price: 1350, img: "assets/img/menu/pepperoni-pizza.jpg" },
  { id: 7, cat: "Snacks", name: "Loaded Fries", desc: "Fries with cheese sauce and chicken", price: 420, img: "assets/img/menu/loaded-fries.jpg" },
  { id: 8, cat: "Snacks", name: "Chicken Nuggets", desc: "8 pieces with dip", price: 380, img: "assets/img/menu/nuggets.jpg" },
  { id: 9, cat: "Snacks", name: "Crispy Wings", desc: "6 pieces, hot or BBQ", price: 450, img: "assets/img/menu/wings.jpg" },
  { id: 10, cat: "Desi", name: "Chicken Tikka", desc: "Charcoal-grilled, 2 pieces with chutney", price: 480, img: "assets/img/menu/chicken-tikka.jpg" },
  { id: 11, cat: "Desi", name: "Chicken Karahi (Half)", desc: "Tomato, ginger and green chilli", price: 1450, img: "assets/img/menu/karahi.jpg" },
  { id: 12, cat: "Desi", name: "Chicken Biryani", desc: "With raita", price: 520, img: "assets/img/menu/biryani.jpg" },
  { id: 13, cat: "Desi", name: "Roghni Naan", desc: "Tandoor-baked, sesame", price: 70, img: "assets/img/menu/naan.jpg" },
  { id: 14, cat: "Drinks", name: "Mint Margarita", desc: "Mint, lemon, soda", price: 250, img: "assets/img/menu/margarita.jpg" },
  { id: 15, cat: "Drinks", name: "Doodh Patti Chai", desc: "Kadak, made to order", price: 120, img: "assets/img/menu/chai.jpg" },
  { id: 16, cat: "Drinks", name: "Soft Drink (345ml)", desc: "Cola, lemon-lime or orange", price: 100, img: "assets/img/menu/soft-drink.jpg" },
  { id: 17, cat: "Drinks", name: "Chocolate Shake", desc: "Thick and cold", price: 350, img: "assets/img/menu/shake.jpg" },
  { id: 18, cat: "Burgers", name: "Chicken Mayo Roll", desc: "Crispy chicken fillet, mayo, lettuce", price: 200, img: "" }
];

// =========================================================
//  HELPERS
// =========================================================
const $ = id => document.getElementById(id);
const val = id => { const e = $(id); return e ? e.value : ""; };
const setVal = (id, v) => { const e = $(id); if (e) e.value = v; };
const fmt = n => CURRENCY + " " + Math.round(n).toLocaleString("en-PK");
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const lsGet = (k, fb) => { try { return JSON.parse(localStorage.getItem(k)) ?? fb; } catch (e) { return fb; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } };
const dayKey = d => new Date(d).toDateString();
const sumTotal = list => list.reduce((s, o) => s + o.total, 0);
const isDeal = m => m.cat === "Deals";
const reduceMotion = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
const canHover = window.matchMedia && matchMedia("(hover:hover)").matches;

// =========================================================
//  STATE
// =========================================================
const MENU = JSON.parse(JSON.stringify(DEFAULT_MENU));
const savedMenu = lsGet("bsMenu", null);
if (Array.isArray(savedMenu) && savedMenu.length) MENU.splice(0, MENU.length, ...savedMenu);

let orders = lsGet("bsOrders", []);
let stock = lsGet("bsStock", {});
let favs = lsGet("bsFavs", []);
let soundOn = lsGet("bsSound", true);
let cart = {};
let lastMeta = null;       // details of the last order (for slips)
let lastCustomer = "";     // customer slip HTML
let view = "menu";         // "menu" or "deals"
let cat = "All";
let q = "";
let prevIds = [], prevCount = 0, orderVisible = false;
let editId = null, formImg = "", curPanel = "";

function ensureStock() {
  MENU.forEach(m => { if (stock[m.id] === undefined) stock[m.id] = DEFAULT_STOCK; });
  lsSet("bsStock", stock);
}
ensureStock();

const catList = () => ["All", "__fav", ...new Set(MENU.filter(m => !isDeal(m)).map(m => m.cat))];
const catLabel = c => c === "__fav" ? "❤️ Favourites" : c;
const todayOrders = () => orders.filter(o => dayKey(o.t) === dayKey(Date.now()));
const cartCount = () => Object.values(cart).reduce((a, b) => a + b, 0);

// =========================================================
//  SOUND
// =========================================================
let actx;
function tone(f, t0, dur, type = "sine", vol = .12) {
  const o = actx.createOscillator(), g = actx.createGain(), t = actx.currentTime + t0;
  o.type = type;
  o.frequency.value = f;
  g.gain.setValueAtTime(vol, t);
  g.gain.exponentialRampToValueAtTime(.001, t + dur);
  o.connect(g);
  g.connect(actx.destination);
  o.start(t);
  o.stop(t + dur + .02);
}
function sfx(kind) {
  if (!soundOn) return;
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    if (actx.state === "suspended") actx.resume();
    if (kind === "add") { tone(660, 0, .09); tone(880, .07, .12); }
    if (kind === "fav") tone(988, 0, .12, "triangle");
    if (kind === "order") { tone(523, 0, .15); tone(659, .12, .15); tone(784, .24, .15); tone(1047, .36, .3); }
  } catch (e) { }
}
function paintSound() { const b = $("soundBtn"); if (b) b.textContent = soundOn ? "🔊" : "🔇"; }

// =========================================================
//  EFFECTS: toast, flying dot, confetti, sparks
// =========================================================
let toastTimer;
function toast(msg) {
  let t = $("toast");
  if (!t) { t = document.createElement("div"); t.id = "toast"; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 1700);
}

function flyFrom(a) {
  const target = $("navCount");
  if (reduceMotion || !a || !target) return;
  const b = target.getBoundingClientRect();
  const dot = document.createElement("div");
  dot.className = "fly";
  dot.style.left = (a.left + a.width / 2 - 9) + "px";
  dot.style.top = (a.top + a.height / 2 - 9) + "px";
  document.body.appendChild(dot);
  requestAnimationFrame(() => requestAnimationFrame(() => {
    dot.style.transform = `translate(${b.left + b.width / 2 - (a.left + a.width / 2)}px, ${b.top + b.height / 2 - (a.top + a.height / 2)}px) scale(.3)`;
    dot.style.opacity = ".2";
  }));
  setTimeout(() => dot.remove(), 700);
}

function confetti() {
  if (reduceMotion) return;
  const cols = ["#f5b800", "#0d0d0d", "#ffffff", "#1b7a2f", "#e5483b"];
  for (let i = 0; i < 46; i++) {
    const c = document.createElement("i");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = cols[i % cols.length];
    c.style.animationDuration = (1.2 + Math.random() * 1.2) + "s";
    c.style.animationDelay = Math.random() * .3 + "s";
    c.style.setProperty("--dx", (Math.random() * 160 - 80) + "px");
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 2800);
  }
}

function spark(host, x, y) {
  const s = document.createElement("i");
  s.className = "spark";
  s.style.left = x + "px";
  s.style.top = y + "px";
  s.style.setProperty("--sx", (Math.random() * 40 - 20) + "px");
  s.style.setProperty("--sy", (Math.random() * 40 + 10) + "px");
  host.appendChild(s);
  setTimeout(() => s.remove(), 700);
}

function setStat(id, text) {
  const e = $(id);
  if (!e || e.textContent === text) return;
  e.textContent = text;
  e.classList.remove("bump");
  void e.offsetWidth;
  e.classList.add("bump");
}

// =========================================================
//  MENU / DEALS: switch, tabs, cards
// =========================================================
function setView(v, scroll) {
  view = v;
  const vs = $("vswitch");
  vs.dataset.view = v;
  vs.querySelectorAll(".vs-btn").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.view === v)));
  $("secTitle").textContent = v === "deals" ? "🔥 Hot Deals" : "Our menu";
  $("search").placeholder = v === "deals" ? "Search deals" : "Search food (e.g. burger, pizza, biryani)";
  renderTabs();
  renderMenu();
  if (scroll) $("menuSec").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
}

function renderTabs() {
  const box = $("tabs");
  box.style.display = view === "deals" ? "none" : "";
  const cats = catList();
  if (!cats.includes(cat)) cat = "All";
  box.innerHTML = cats.map(c =>
    `<button class="tab" aria-pressed="${c === cat}" data-c="${esc(c)}">${esc(catLabel(c))}</button>`).join("");
}

const matchQ = m => (m.name + " " + (m.desc || "") + " " + m.cat).toLowerCase().includes(q);

function visibleItems() {
  return MENU.filter(m => {
    if (!matchQ(m)) return false;
    if (view === "deals") return isDeal(m);
    if (isDeal(m)) return false;
    if (cat === "__fav") return favs.includes(m.id);
    return cat === "All" || m.cat === cat;
  });
}

function renderSpecial() {
  const box = $("special");
  const deals = MENU.filter(m => isDeal(m) && (stock[m.id] ?? DEFAULT_STOCK) > 0);
  if (view !== "deals" || !deals.length || q) { box.className = "special"; box.innerHTML = ""; return; }
  const m = deals[Math.floor(Date.now() / 864e5) % deals.length];   // a different deal every day
  box.className = "special show";
  box.innerHTML = `
    <div class="sp-l"><small>⭐ TODAY'S SPECIAL DEAL</small><h3>${esc(m.name)}</h3><p>${esc(m.desc || "")}</p></div>
    <div class="sp-r"><span class="price">${fmt(m.price)}</span><button class="add" data-id="${m.id}">Add</button></div>`;
}

function renderMenu() {
  const list = visibleItems();
  const nDeals = MENU.filter(isDeal).length;
  $("cntMenu").textContent = MENU.length - nDeals;
  $("cntDeals").textContent = nDeals;

  const empty = view === "deals" && !nDeals ? "No deals right now."
    : view === "menu" && cat === "__fav" && !q ? "No favourites yet. Tap ❤️ on any item."
      : "No items found. Try another name.";

  $("menu").innerHTML = list.length ? list.map((m, i) => {
    const s = stock[m.id] ?? DEFAULT_STOCK, sold = s <= 0, on = favs.includes(m.id);
    return `<article class="item${isDeal(m) ? " deal" : ""}${sold ? " sold" : ""}" style="animation-delay:${Math.min(i, 14) * 45}ms">
      ${isDeal(m) ? "" : `<button class="fav${on ? " on" : ""}" data-id="${m.id}" aria-pressed="${on}" aria-label="Favourite">${on ? "♥" : "♡"}</button>`}
      ${m.img ? `<img class="em" src="${esc(m.img)}" alt="" loading="lazy" onerror="this.style.display='none'">` : ""}
      <h3>${esc(m.name)}</h3>
      <p>${esc(m.desc || "")}</p>
      ${!sold && s <= 5 ? `<span class="lowtag">Only ${s} left</span>` : ""}
      <div class="row">
        <span class="price">${fmt(m.price)}</span>
        <button class="add" data-id="${m.id}"${sold ? " disabled" : ""}>${sold ? "Sold out" : "Add"}</button>
      </div>
    </article>`;
  }).join("") : `<div class="no-result">${empty}</div>`;

  renderSpecial();
}

function toggleFav(id, btn) {
  const i = favs.indexOf(id);
  if (i >= 0) favs.splice(i, 1); else favs.push(id);
  lsSet("bsFavs", favs);
  if (view === "menu" && cat === "__fav") { renderMenu(); return; }
  const on = i < 0;
  btn.classList.toggle("on", on);
  btn.textContent = on ? "♥" : "♡";
  btn.setAttribute("aria-pressed", String(on));
  if (on) sfx("fav");
}

function onItemClick(e) {
  const f = e.target.closest(".fav");
  if (f) { toggleFav(+f.dataset.id, f); return; }
  const a = e.target.closest(".add");
  if (a && !a.disabled) change(+a.dataset.id, 1, a);
}

// =========================================================
//  CART
// =========================================================
function change(id, d, btn) {
  const m = MENU.find(x => x.id == id);
  if (!m) return;
  const have = cart[id] || 0;
  if (d > 0 && have >= (stock[id] ?? DEFAULT_STOCK)) {
    toast(m.name + " has only " + (stock[id] || 0) + " left in stock");
    return;
  }
  const rect = btn ? btn.getBoundingClientRect() : null;
  cart[id] = have + d;
  if (cart[id] <= 0) delete cart[id];
  renderCart();

  if (d > 0 && btn) {
    flyFrom(rect);
    sfx("add");
    toast(m.name + " added");
    const old = btn.textContent;
    btn.textContent = "✓ Added";
    btn.classList.add("added");
    setTimeout(() => { btn.textContent = old; btn.classList.remove("added"); }, 700);
  }
}

function totals() {
  const sub = Object.entries(cart).reduce(
    (s, [id, n]) => s + ((MENU.find(m => m.id == id) || { price: 0 }).price) * n, 0);
  const dv = Math.max(parseFloat(val("disc")) || 0, 0);
  const isPct = (val("discType") || "%") === "%";
  const disc = isPct ? sub * Math.min(dv, 100) / 100 : Math.min(dv, sub);
  const after = sub - disc;
  const tax = after * TAX_RATE;
  return { sub, disc, val: dv, isPct, tax, total: after + tax };
}

// "Add these too": suggest a drink or snack if the cart has none
function renderUpsell() {
  const box = $("upsell");
  if (!box) return;
  if (!cartCount()) { box.innerHTML = ""; return; }
  const hasCat = c => Object.keys(cart).some(id => (MENU.find(m => m.id == id) || {}).cat === c);
  const pool = [];
  ["Drinks", "Snacks"].filter(c => !hasCat(c)).forEach(c => {
    MENU.filter(m => m.cat === c && !cart[m.id] && (stock[m.id] ?? DEFAULT_STOCK) > 0)
      .slice(0, 2).forEach(m => pool.push(m));
  });
  const list = pool.slice(0, 3);
  box.innerHTML = list.length
    ? `<p class="up-t">😋 Add these too</p><div class="chips">${list.map(m =>
      `<button type="button" class="chip" data-id="${m.id}">+ ${esc(m.name)} <b>${fmt(m.price)}</b></button>`).join("")}</div>`
    : "";
}

function updateCartbar(count) {
  let bar = $("cartbar");
  if (!bar) {
    bar = document.createElement("a");
    bar.id = "cartbar";
    bar.className = "cartbar";
    bar.href = "#order";
    document.body.appendChild(bar);
  }
  bar.innerHTML = `<span>🛒 ${count} item${count === 1 ? "" : "s"}</span><span>${fmt(totals().total)}</span><span>View order →</span>`;
  bar.classList.toggle("show", count > 0 && !orderVisible);
}

function renderCart() {
  const ids = Object.keys(cart);

  $("lines").innerHTML = ids.length ? ids.map(id => {
    const m = MENU.find(x => x.id == id), n = cart[id];
    if (!m) return "";
    return `<div class="line${prevIds.includes(id) ? "" : " new"}">
      <span>${esc(m.name)}</span>
      <span class="qty">
        <button data-id="${id}" data-d="-1" aria-label="Decrease">−</button>${n}
        <button data-id="${id}" data-d="1" aria-label="Increase">+</button>
      </span>
      <span>${fmt(m.price * n)}</span>
    </div>`;
  }).join("") : `<div class="empty">No items yet. Tap "Add" on the menu.</div>`;

  const t = totals();
  const showSub = t.disc > 0 || TAX_RATE > 0;
  $("totals").innerHTML = ids.length ? `
    ${showSub ? `<div class="tot"><span>Subtotal</span><span>${fmt(t.sub)}</span></div>` : ""}
    ${t.disc > 0 ? `<div class="tot off"><span>Discount${t.isPct ? " (" + t.val + "%)" : ""}</span><span>- ${fmt(t.disc)}</span></div>` : ""}
    ${TAX_RATE > 0 ? `<div class="tot"><span>Tax (${Math.round(TAX_RATE * 100)}%)</span><span>${fmt(t.tax)}</span></div>` : ""}
    <div class="tot big"><span>Total</span><span>${fmt(t.total)}</span></div>` : "";

  $("go").disabled = !ids.length;

  const count = cartCount(), nc = $("navCount");
  if (nc) {
    nc.textContent = count;
    if (count !== prevCount) { nc.classList.remove("bump"); void nc.offsetWidth; nc.classList.add("bump"); }
  }
  prevCount = count;
  prevIds = ids;
  renderUpsell();
  updateCartbar(count);
}

function resetOrder() {
  cart = {};
  prevIds = [];
  setVal("disc", "");
  renderCart();
}

// =========================================================
//  ORDER, RECEIPT, PRINT
// =========================================================
function nextOrderNo() {
  let n = 1;
  try {
    n = (parseInt(localStorage.getItem("bsOrderNo")) || 0) + 1;
    localStorage.setItem("bsOrderNo", n);
  } catch (e) {
    n = Date.now() % 100000;
  }
  return String(n).padStart(4, "0");
}

// Customer slip: logo, every item, prices, total (proof of purchase)
function customerSlipHTML(snap, t, meta) {
  const rows = Object.entries(snap).map(([id, n]) => {
    const m = MENU.find(x => x.id == id);
    return `<div class="r"><span>${n} x ${esc(m.name)}</span><span>${fmt(m.price * n)}</span></div>`;
  }).join("");

  return `
    <img class="logo" src="assets/img/logo.jpeg" alt="">
    <h2>${esc(RESTAURANT.name)}</h2>
    <div class="c">${esc(RESTAURANT.sub)}<br>${esc(RESTAURANT.address)}<br>Tel: ${esc(RESTAURANT.phone)}</div>
    <hr>
    <div class="r"><span>Order #</span><span>${meta.no}</span></div>
    <div class="r"><span>Date</span><span>${meta.dt}</span></div>
    <div class="r"><span>Type</span><span>${esc(meta.type)}</span></div>
    <hr>
    ${rows}
    <hr>
    ${(t.disc > 0 || TAX_RATE > 0) ? `<div class="r"><span>Subtotal</span><span>${fmt(t.sub)}</span></div>` : ""}
    ${t.disc > 0 ? `<div class="r"><span>Discount${t.isPct ? " (" + t.val + "%)" : ""}</span><span>- ${fmt(t.disc)}</span></div>` : ""}
    ${TAX_RATE > 0 ? `<div class="r"><span>Tax (${Math.round(TAX_RATE * 100)}%)</span><span>${fmt(t.tax)}</span></div>` : ""}
    <div class="r b"><span>TOTAL</span><span>${fmt(t.total)}</span></div>
    <hr>
    <div class="c">Good Food, Good Mood<br>Thank you! Please visit again.</div>
    <div class="c tag">--- Customer Copy ---</div>`;
}

// Kitchen slips: one per category, no logo and no prices
function kitchenSlipsHTML() {
  if (!lastMeta) return "";
  const groups = {};
  Object.entries(lastMeta.items).forEach(([id, n]) => {
    const m = MENU.find(x => x.id == id);
    if (!m) return;
    (groups[m.cat] = groups[m.cat] || []).push({ m, n });
  });
  return Object.keys(groups).map(c => {
    const rows = groups[c].map(({ m, n }) =>
      `<div class="k-item">${n} x ${esc(m.name)}</div>` +
      (isDeal(m) ? `<div class="k-desc">${esc(m.desc || "")}</div>` : "")
    ).join("");
    return `<div class="slip pg">
      <div class="c big">Order # ${lastMeta.no}</div>
      <div class="c">${lastMeta.dt} · ${esc(lastMeta.type)}</div>
      <hr>
      <div class="c k-item">${esc(c.toUpperCase())}</div>
      <hr>
      ${rows}
    </div>`;
  }).join("");
}

// Customer slip first, then the kitchen slips
function itemSlipsHTML() {
  return `<div class="slip">${lastCustomer}</div>` + kitchenSlipsHTML();
}

function buildReceipt(snap, t, meta) {
  lastCustomer = customerSlipHTML(snap, t, meta);
  $("receipt").innerHTML = itemSlipsHTML();
}

function printReceipt() {
  const f = document.createElement("iframe");
  f.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0";
  document.body.appendChild(f);

  const d = f.contentWindow.document;
  d.open();
  d.write(`<html><head><title>Receipt</title><style>
    @page{margin:2mm}
    *{-webkit-print-color-adjust:exact;print-color-adjust:exact}
    body{margin:0;padding:0 3mm;box-sizing:border-box;width:72mm;font:bold 14px/1.5 'Courier New',monospace;color:#000;-webkit-text-stroke:.35px #000}
    h2{text-align:center;font-size:20px;margin:4px 0}
    .c{text-align:center}
    .big{font-size:18px;font-weight:800}
    hr{border:0;border-top:2px dashed #000;margin:8px 0}
    .r{display:flex;justify-content:space-between;gap:8px}
    .r span:first-child{flex:1;min-width:0}
    .r span:last-child{white-space:nowrap}
    .b{font-size:17px}
    .logo{display:block;width:70px;height:70px;border-radius:50%;margin:0 auto 6px;filter:grayscale(1) contrast(1.4)}
    .k-item{font-size:18px;font-weight:800;margin-top:6px}
    .k-desc{font-size:13px;margin:0 0 4px 12px}
    .tag{margin-top:6px;font-size:12px}
    .pg{break-before:page;page-break-before:always}
  </style></head><body>${itemSlipsHTML()}</body></html>`);
  d.close();

  const doPrint = () => {
    f.contentWindow.focus();
    f.contentWindow.print();
    setTimeout(() => f.remove(), 2000);
  };
  const img = d.querySelector("img.logo");
  if (img && !img.complete) { img.onload = doPrint; img.onerror = doPrint; }
  else { doPrint(); }
}

function placeOrder() {
  if (!cartCount()) return;
  const snap = { ...cart }, t = totals(), no = nextOrderNo(), now = new Date();
  const dt = now.toLocaleDateString("en-GB") + " " + now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
  const type = val("type") || "Dine-in";

  lastMeta = { no, dt, type, items: snap };
  buildReceipt(snap, t, lastMeta);

  orders.push({
    no, t: Date.now(), total: t.total, disc: t.disc, type,
    items: Object.entries(snap).map(([id, n]) => ({ id: +id, name: MENU.find(m => m.id == id).name, q: n }))
  });
  Object.entries(snap).forEach(([id, n]) => { stock[id] = Math.max(0, (stock[id] || 0) - n); });
  lsSet("bsOrders", orders);
  lsSet("bsStock", stock);
  updateStats();

  $("overlay").classList.add("show");
  confetti();
  sfx("order");
  setTimeout(printReceipt, 400);
}

// =========================================================
//  STATS (numbers in the header bar)
// =========================================================
function updateStats() {
  const to = todayOrders();
  setStat("statOrders", String(to.length));
  setStat("statPay", fmt(sumTotal(to)));
  const low = MENU.filter(m => (stock[m.id] ?? 0) <= 5).length;
  const s = $("statStock");
  if (s) {
    setStat("statStock", low ? low + " low" : "OK");
    s.className = low ? "warn" : "";
  }
}

// =========================================================
//  PANELS: Orders / Payment / Stock / Manage Menu
// =========================================================
function openPanel(type) {
  curPanel = type;
  if (type === "menu") { renderMenuEditor(); return; }

  const to = todayOrders();
  let title = "", html = "";

  if (type === "orders") {
    title = "Total Orders";
    const rows = [...to].reverse().map(o => `<tr>
      <td>#${o.no}</td>
      <td>${new Date(o.t).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}</td>
      <td>${o.items.map(i => i.q + " x " + esc(i.name)).join(", ")}</td>
      <td class="num">${fmt(o.total)}</td></tr>`).join("");
    html = `<div class="stats">
        <div class="stat"><span>Today's orders</span><strong>${to.length}</strong></div>
        <div class="stat"><span>All-time orders</span><strong>${orders.length}</strong></div>
      </div>
      ${rows ? `<div class="tblwrap"><table class="ptable"><thead><tr><th>Order</th><th>Time</th><th>Items</th><th class="num">Total</th></tr></thead><tbody>${rows}</tbody></table></div>`
        : `<p class="pnote">No orders yet today.</p>`}
      <div class="clear-box">
        <button type="button" class="cbtn-warn" data-act="clearToday">Clear today's records</button>
        <button type="button" class="cbtn-danger" data-act="clearAll">Clear everything</button>
      </div>`;
  }

  if (type === "payment") {
    title = "Total Payment";
    const types = ["Dine-in", "Takeaway", "Delivery"].map(tp => {
      const l = to.filter(o => o.type === tp);
      return `<tr><td>${tp}</td><td class="num">${l.length}</td><td class="num">${fmt(sumTotal(l))}</td></tr>`;
    }).join("");
    html = `<div class="stats">
        <div class="stat"><span>Today's sales</span><strong>${fmt(sumTotal(to))}</strong></div>
        <div class="stat"><span>All-time sales</span><strong>${fmt(sumTotal(orders))}</strong></div>
        <div class="stat"><span>Today's discount</span><strong>${fmt(to.reduce((s, o) => s + o.disc, 0))}</strong></div>
      </div>
      <div class="tblwrap"><table class="ptable"><thead><tr><th>Order type</th><th class="num">Orders</th><th class="num">Amount</th></tr></thead><tbody>${types}</tbody></table></div>
      <div class="clear-box">
        <button type="button" class="cbtn-warn" data-act="clearToday">Clear today's records</button>
        <button type="button" class="cbtn-danger" data-act="clearAll">Clear everything</button>
      </div>`;
  }

  if (type === "stock") {
    title = "Stock";
    const rows = MENU.map(m => `<tr class="${(stock[m.id] ?? 0) <= 5 ? "low" : ""}">
      <td>${esc(m.name)}</td><td>${esc(m.cat)}</td>
      <td class="num"><input type="number" min="0" data-sid="${m.id}" value="${stock[m.id] ?? 0}" aria-label="${esc(m.name)} stock"></td></tr>`).join("");
    html = `<p class="pnote">Stock decreases automatically with each order. Update the number when new stock arrives. Items with 5 or fewer are marked red.</p>
      <div class="tblwrap"><table class="ptable"><thead><tr><th>Item</th><th>Category</th><th class="num">Stock</th></tr></thead><tbody>${rows}</tbody></table></div>
      <div class="clear-box">
        <button type="button" class="cbtn-warn" data-act="resetStock">Reset stock (every item ${DEFAULT_STOCK})</button>
      </div>`;
  }

  $("panelTitle").textContent = title;
  $("panelBody").innerHTML = html;
  $("panel").classList.add("show");
}

// ----- Menu editor -----
function saveMenu() {
  const ok = lsSet("bsMenu", MENU);
  if (!ok) alert("Could not save the menu (storage full). Use fewer or smaller photos.");
  return ok;
}

function refreshMenuUI() {
  ensureStock();
  favs = favs.filter(id => MENU.find(m => m.id == id));
  lsSet("bsFavs", favs);
  Object.keys(cart).forEach(id => { if (!MENU.find(m => m.id == id)) delete cart[id]; });
  renderTabs();
  renderMenu();
  renderCart();
  updateStats();
}

function readPhoto(file, cb) {
  const fr = new FileReader();
  fr.onload = () => {
    const im = new Image();
    im.onload = () => {
      const r = Math.min(1, 500 / Math.max(im.width, im.height));
      const c = document.createElement("canvas");
      c.width = Math.round(im.width * r);
      c.height = Math.round(im.height * r);
      const ctx = c.getContext("2d");
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.drawImage(im, 0, 0, c.width, c.height);
      cb(c.toDataURL("image/jpeg", 0.8));
    };
    im.onerror = () => alert("This photo could not be opened. Please choose another.");
    im.src = fr.result;
  };
  fr.readAsDataURL(file);
}

function renderMenuForm(msg) {
  const it = editId ? MENU.find(m => m.id == editId) : null;
  const catOpts = [...new Set(MENU.map(m => m.cat))].map(c => `<option value="${esc(c)}">`).join("");
  $("mFormBox").innerHTML = `
    <div class="mform">
      <h3>${it ? "Edit item" : "Add new item"}</h3>
      ${msg ? `<p class="mmsg">${esc(msg)}</p>` : ""}
      <p class="pnote">To make a deal, type <strong>Deals</strong> as the category.</p>
      <div class="mgrid">
        <div class="full">
          <label for="mName">Item name</label>
          <input id="mName" value="${it ? esc(it.name) : ""}" placeholder="e.g. Zinger Burger">
        </div>
        <div>
          <label for="mCat">Category</label>
          <input id="mCat" list="mCats" value="${it ? esc(it.cat) : ""}" placeholder="e.g. Burgers">
          <datalist id="mCats">${catOpts}</datalist>
        </div>
        <div>
          <label for="mPrice">Price (Rs.)</label>
          <input id="mPrice" type="number" min="0" step="any" value="${it ? it.price : ""}" placeholder="450">
        </div>
        <div class="full">
          <label for="mDesc">Description (optional)</label>
          <input id="mDesc" value="${it ? esc(it.desc || "") : ""}" placeholder="e.g. Crispy chicken, mayo, lettuce">
        </div>
        <div>
          <label for="mStock">Stock</label>
          <input id="mStock" type="number" min="0" value="${it ? (stock[it.id] ?? DEFAULT_STOCK) : DEFAULT_STOCK}">
        </div>
        <div>
          <label>Photo (optional)</label>
          <div class="mphoto">
            <img id="mPrev" class="mprev" ${formImg ? `src="${esc(formImg)}"` : `style="display:none"`} alt="">
            <label class="mfile">📷 Choose photo<input id="mFile" type="file" accept="image/*" hidden></label>
            <button type="button" class="btn-lite" data-act="noimg">Remove</button>
          </div>
        </div>
      </div>
      <div class="mbtns">
        <button type="button" class="cbtn-warn" data-act="save">${it ? "Save" : "Add item"}</button>
        ${it ? `<button type="button" class="btn-lite" data-act="cancel">Cancel edit</button>` : ""}
      </div>
    </div>`;
}

function renderMenuList() {
  const rows = MENU.map(m => `<tr>
      <td>${m.img ? `<img class="mthumb" src="${esc(m.img)}" alt="">` : ""}</td>
      <td><strong>${esc(m.name)}</strong><br><span class="pnote">${esc(m.cat)}</span></td>
      <td class="num">${fmt(m.price)}</td>
      <td class="macts">
        <button type="button" class="btn-edit" data-act="edit" data-id="${m.id}">Edit</button>
        <button type="button" class="btn-del" data-act="del" data-id="${m.id}">Delete</button>
      </td></tr>`).join("");
  $("mList").innerHTML = `
    <div class="tblwrap"><table class="ptable">
      <thead><tr><th></th><th>Item</th><th class="num">Price</th><th></th></tr></thead>
      <tbody>${rows}</tbody>
    </table></div>
    <div class="clear-box">
      <button type="button" class="cbtn-danger" data-act="resetmenu">Reset menu (original)</button>
    </div>`;
}

function renderMenuEditor(msg) {
  $("panelTitle").textContent = "Manage Menu";
  $("panelBody").innerHTML = `<div id="mFormBox"></div><div id="mList"></div>`;
  renderMenuForm(msg);
  renderMenuList();
  $("panel").classList.add("show");
  $("panel").scrollTop = 0;
}

function saveMenuItem() {
  const name = $("mName").value.trim();
  const catv = $("mCat").value.trim() || "Others";
  const price = parseFloat($("mPrice").value);
  const desc = $("mDesc").value.trim();
  const st = parseInt($("mStock").value);

  if (!name) { alert("Please enter the item name."); return; }
  if (!(price > 0)) { alert("Please enter a valid price."); return; }

  let id = editId;
  if (editId) {
    Object.assign(MENU.find(x => x.id == editId), { name, cat: catv, price, desc, img: formImg });
  } else {
    id = MENU.reduce((mx, m) => Math.max(mx, m.id), 0) + 1;
    MENU.push({ id, cat: catv, name, desc, price, img: formImg });
  }
  stock[id] = isNaN(st) ? DEFAULT_STOCK : Math.max(0, st);
  lsSet("bsStock", stock);
  saveMenu();

  const wasEdit = !!editId;
  editId = null;
  formImg = "";
  refreshMenuUI();
  renderMenuEditor(wasEdit ? "Item saved." : "New item added.");
}

function deleteItem(id) {
  const i = MENU.findIndex(m => m.id == id);
  if (i < 0) return;
  if (!confirm('"' + MENU[i].name + '" will be removed from the menu. Continue?')) return;
  MENU.splice(i, 1);
  delete cart[id];
  delete stock[id];
  lsSet("bsStock", stock);
  saveMenu();
  if (editId == id) { editId = null; formImg = ""; renderMenuForm(); }
  refreshMenuUI();
  renderMenuList();
}

// ----- All buttons inside the panel -----
$("panelBody").addEventListener("click", e => {
  const b = e.target.closest("[data-act]");
  if (!b) return;
  const act = b.dataset.act, id = b.dataset.id;

  if (act === "clearToday") {
    if (!confirm("All of today's orders and payments will be cleared. Are you sure?")) return;
    orders = orders.filter(o => dayKey(o.t) !== dayKey(Date.now()));
    lsSet("bsOrders", orders); updateStats(); openPanel(curPanel); return;
  }
  if (act === "clearAll") {
    if (!confirm("All records (orders and payments) will be permanently cleared. Are you sure?")) return;
    orders = [];
    try { localStorage.setItem("bsOrderNo", "0"); } catch (err) { }
    lsSet("bsOrders", orders); updateStats(); openPanel(curPanel); return;
  }
  if (act === "resetStock") {
    if (!confirm("Every item's stock will go back to " + DEFAULT_STOCK + ". Are you sure?")) return;
    MENU.forEach(m => { stock[m.id] = DEFAULT_STOCK; });
    lsSet("bsStock", stock); updateStats(); renderMenu(); openPanel(curPanel); return;
  }

  if (act === "save") saveMenuItem();
  if (act === "cancel") { editId = null; formImg = ""; renderMenuForm(); }
  if (act === "noimg") {
    formImg = "";
    const p = $("mPrev");
    if (p) { p.removeAttribute("src"); p.style.display = "none"; }
  }
  if (act === "edit") {
    const m = MENU.find(x => x.id == id);
    if (!m) return;
    editId = m.id;
    formImg = m.img || "";
    renderMenuForm();
    $("panel").scrollTop = 0;
  }
  if (act === "del") deleteItem(id);
  if (act === "resetmenu") {
    if (!confirm("The menu will go back to the original, and items you added will be removed. Are you sure?")) return;
    MENU.splice(0, MENU.length, ...JSON.parse(JSON.stringify(DEFAULT_MENU)));
    try { localStorage.removeItem("bsMenu"); } catch (err) { }
    editId = null;
    formImg = "";
    refreshMenuUI();
    renderMenuEditor("Menu has been reset to the original.");
  }
});

$("panelBody").addEventListener("change", e => {
  const inp = e.target.closest("input[data-sid]");
  if (inp) {
    const v = Math.max(0, parseInt(inp.value) || 0);
    stock[inp.dataset.sid] = v;
    inp.value = v;
    lsSet("bsStock", stock);
    inp.closest("tr").classList.toggle("low", v <= 5);
    updateStats();
    renderMenu();
    return;
  }
  if (e.target.id === "mFile") {
    const f = e.target.files[0];
    if (!f) return;
    readPhoto(f, data => {
      formImg = data;
      const p = $("mPrev");
      if (p) { p.src = data; p.style.display = "block"; }
    });
  }
});

const closePanel = () => $("panel").classList.remove("show");
$("panelClose").onclick = closePanel;
$("panel").onclick = e => { if (e.target === $("panel")) closePanel(); };
document.querySelectorAll("[data-panel]").forEach(b => b.onclick = () => openPanel(b.dataset.panel));

// =========================================================
//  BUTTONS AND EVENTS
// =========================================================
$("disc").oninput = renderCart;
$("discType").onchange = renderCart;
$("search").oninput = () => { q = $("search").value.trim().toLowerCase(); renderMenu(); };
$("go").onclick = placeOrder;
$("print").onclick = printReceipt;
$("close").onclick = () => {
  $("overlay").classList.remove("show");
  resetOrder();
  renderMenu();
};
$("clear").onclick = resetOrder;

$("menu").addEventListener("click", onItemClick);
$("special").addEventListener("click", onItemClick);
$("lines").addEventListener("click", e => {
  const b = e.target.closest(".qty button");
  if (b) change(+b.dataset.id, +b.dataset.d);
});
$("upsell").addEventListener("click", e => {
  const c = e.target.closest(".chip");
  if (c) change(+c.dataset.id, 1, c);
});
$("tabs").addEventListener("click", e => {
  const b = e.target.closest(".tab");
  if (!b) return;
  cat = b.dataset.c;
  renderTabs();
  renderMenu();
});
$("vswitch").addEventListener("click", e => {
  const b = e.target.closest(".vs-btn");
  if (b) setView(b.dataset.view);
});
$("menuBtn").onclick = () => setView("menu", true);
$("dealsBtn").onclick = () => setView("deals", true);

$("soundBtn").onclick = () => {
  soundOn = !soundOn;
  lsSet("bsSound", soundOn);
  paintSound();
  sfx("add");
  toast(soundOn ? "Sound on 🔊" : "Sound off 🔇");
};
paintSound();

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closePanel();
  if (e.key === "/" && !/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) {
    e.preventDefault();
    $("search").focus();
  }
});

const baseTitle = document.title;
document.addEventListener("visibilitychange", () => {
  document.title = document.hidden ? "Come back 🍔 BS Smart" : baseTitle;
});

// =========================================================
//  WOW EFFECTS: ripple, 3D cards, hero, logo
// =========================================================

// Ripple on buttons
document.addEventListener("pointerdown", e => {
  const b = e.target.closest(".add,.go,.btn-gold,.btn-ghost,.nav-cta,.tab,.subnav button,.vs-btn");
  if (!b || b.disabled || reduceMotion) return;
  const r = b.getBoundingClientRect(), d = Math.max(r.width, r.height);
  const s = document.createElement("span");
  s.className = "ripple";
  s.style.width = s.style.height = d + "px";
  s.style.left = (e.clientX - r.left - d / 2) + "px";
  s.style.top = (e.clientY - r.top - d / 2) + "px";
  b.appendChild(s);
  setTimeout(() => s.remove(), 600);
});

// 3D tilt on menu cards
(function () {
  if (reduceMotion || !canHover) return;
  const grid = $("menu");
  let cur = null;
  const reset = c => { c.style.removeProperty("--rx"); c.style.removeProperty("--ry"); };
  grid.addEventListener("pointermove", e => {
    if (e.pointerType !== "mouse") return;
    const c = e.target.closest(".item");
    if (cur && cur !== c) reset(cur);
    cur = c;
    if (!c) return;
    const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    c.style.setProperty("--ry", ((x - .5) * 10).toFixed(2) + "deg");
    c.style.setProperty("--rx", ((.5 - y) * 10).toFixed(2) + "deg");
    c.style.setProperty("--mx", (x * 100) + "%");
    c.style.setProperty("--my", (y * 100) + "%");
  });
  grid.addEventListener("pointerleave", () => { if (cur) reset(cur); cur = null; });
})();

// Hero: greeting, floating food, spotlight, sparks, 3D logo
(function () {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  const g = $("greet");
  if (g) {
    const h = new Date().getHours();
    g.textContent = h < 5 ? "Good night 🌙" : h < 12 ? "Good morning ☀️" : h < 16 ? "Lunch time 🍽️" : h < 19 ? "Good evening 🌇" : "Good night 🌙";
  }

  const fl = $("floaters");
  if (fl && !reduceMotion) {
    const em = ["🍔", "🍕", "🍟", "🌭", "🥤", "🍗", "🌮", "🍩"];
    for (let i = 0; i < 14; i++) {
      const s = document.createElement("span");
      s.textContent = em[i % em.length];
      s.style.left = (Math.random() * 96) + "%";
      s.style.fontSize = (18 + Math.random() * 26) + "px";
      s.style.animationDuration = (9 + Math.random() * 9) + "s";
      s.style.animationDelay = (-Math.random() * 14) + "s";
      fl.appendChild(s);
    }
  }

  // Hidden surprise: tap the logo 5 times quickly
  const wrap = $("logoWrap");
  let taps = 0, tapT;
  if (wrap) wrap.addEventListener("click", () => {
    taps++;
    clearTimeout(tapT);
    tapT = setTimeout(() => { taps = 0; }, 1500);
    if (taps >= 5) { taps = 0; confetti(); sfx("order"); toast("Good Food, Good Mood 😄"); }
  });

  if (reduceMotion || !canHover) return;

  let last = 0;
  hero.addEventListener("pointermove", e => {
    const r = hero.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
    hero.style.setProperty("--hx", x + "px");
    hero.style.setProperty("--hy", y + "px");
    if (wrap) {
      const w = wrap.getBoundingClientRect();
      const dx = (e.clientX - (w.left + w.width / 2)) / r.width;
      const dy = (e.clientY - (w.top + w.height / 2)) / r.height;
      wrap.style.transform = `perspective(800px) rotateY(${(dx * 18).toFixed(2)}deg) rotateX(${(-dy * 18).toFixed(2)}deg)`;
    }
    const now = performance.now();
    if (now - last > 45) { last = now; spark(hero, x, y); }
  });
  hero.addEventListener("pointerleave", () => { if (wrap) wrap.style.transform = ""; });

  // Hero buttons are pulled toward the mouse
  hero.querySelectorAll(".magnetic").forEach(b => {
    b.addEventListener("pointermove", e => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${((e.clientX - r.left - r.width / 2) * .2).toFixed(1)}px, ${((e.clientY - r.top - r.height / 2) * .3).toFixed(1)}px)`;
    });
    b.addEventListener("pointerleave", () => { b.style.transform = ""; });
  });
})();

// =========================================================
//  PAGE ANIMATIONS: ticker, splash, scroll, reveal
// =========================================================
(function () {
  const t = $("tickerTrack");
  if (!t) return;
  const items = ["🔥 Hot deals running now", "🍔 Fresh & piping hot", "🛵 Dine-in · Takeaway · Delivery", "⭐ Good Food, Good Mood"];
  const half = [].concat(items, items, items).map(s => `<span>${s}</span>`).join("");
  t.innerHTML = half + half;
})();

(function () {
  const s = $("splash");
  if (!s) return;
  let seen = false;
  try { seen = sessionStorage.getItem("bsSplash") === "1"; sessionStorage.setItem("bsSplash", "1"); } catch (e) { }
  if (seen) { s.remove(); return; }
  setTimeout(() => { s.classList.add("hide"); setTimeout(() => s.remove(), 600); }, 1200);
})();

const navEl = document.querySelector(".nav");
const prog = $("progress");
const toTop = document.createElement("button");
toTop.id = "toTop";
toTop.type = "button";
toTop.setAttribute("aria-label", "Back to top");
toTop.textContent = "↑";
toTop.onclick = () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
document.body.appendChild(toTop);

function onScroll() {
  const y = window.scrollY, h = document.documentElement.scrollHeight - window.innerHeight;
  if (navEl) navEl.classList.toggle("scrolled", y > 10);
  toTop.classList.toggle("show", y > 500);
  if (prog) prog.style.width = (h > 0 ? y / h * 100 : 0) + "%";
}
window.addEventListener("scroll", onScroll, { passive: true });

(function () {
  const rev = document.querySelectorAll(".sec-title,.vswitch,.search,.tabs,.foot-info,.foot-bottom");
  rev.forEach(el => el.classList.add("reveal"));
  const feats = $("features");
  const all = feats ? [...rev, feats] : [...rev];
  if (!("IntersectionObserver" in window)) { all.forEach(el => el.classList.add("in")); return; }
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: .12 });
  all.forEach(el => io.observe(el));
})();

// Hide the mobile cart bar when the order box is in view
if ("IntersectionObserver" in window) {
  new IntersectionObserver(es => {
    orderVisible = es[0].isIntersecting;
    updateCartbar(cartCount());
  }, { threshold: .15 }).observe($("order"));
}

// =========================================================
//  CLOCK
// =========================================================
function tickClock() {
  const n = new Date();
  const t = $("clockTime"), d = $("clockDate");
  if (t) t.textContent = n.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });
  if (d) d.textContent = n.toLocaleDateString("en-GB", { weekday: "short", day: "2-digit", month: "short", year: "numeric" });
}

// =========================================================
//  START
// =========================================================
setView("menu", false);
renderCart();
updateStats();
tickClock();
setInterval(tickClock, 1000);
onScroll();

// =========================================================
//  EXTRA ANIMATIONS: cursor trail, add burst, fireworks
// =========================================================

// Food emoji trail behind the mouse
(function () {
  if (reduceMotion || !canHover) return;
  const em = ["✨", "🍔", "🍕", "🍟", "⭐"];
  let last = 0;
  document.addEventListener("pointermove", e => {
    if (e.pointerType !== "mouse") return;
    const n = performance.now();
    if (n - last < 70) return;
    last = n;
    const s = document.createElement("i");
    s.className = "trail";
    s.textContent = em[Math.random() * em.length | 0];
    s.style.left = e.clientX + "px";
    s.style.top = e.clientY + "px";
    s.style.setProperty("--tx", (Math.random() * 60 - 30) + "px");
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 900);
  });
})();

// Emoji burst when Add / chip is pressed
document.addEventListener("pointerdown", e => {
  if (reduceMotion || !e.target.closest(".add:not(:disabled),.chip")) return;
  const em = ["🍔", "🍟", "🍕", "⭐", "✨", "🔥"];
  for (let i = 0; i < 10; i++) {
    const s = document.createElement("i");
    s.className = "pb";
    s.textContent = em[i % em.length];
    const a = Math.PI * 2 * i / 10, d = 50 + Math.random() * 50;
    s.style.left = e.clientX + "px";
    s.style.top = e.clientY + "px";
    s.style.setProperty("--bx", Math.cos(a) * d + "px");
    s.style.setProperty("--by", Math.sin(a) * d + "px");
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 850);
  }
});

// Fireworks when an order is placed
function fireworks() {
  if (reduceMotion) return;
  const c = document.createElement("canvas");
  c.className = "fw";
  c.width = innerWidth;
  c.height = innerHeight;
  document.body.appendChild(c);
  const x = c.getContext("2d"), P = [];
  const boom = (bx, by) => {
    const col = `hsl(${Math.random() * 360},100%,60%)`;
    for (let i = 0; i < 70; i++) {
      const a = Math.PI * 2 * i / 70, v = 2 + Math.random() * 4;
      P.push({ x: bx, y: by, vx: Math.cos(a) * v, vy: Math.sin(a) * v, l: 1, col });
    }
  };
  [0, 350, 700, 1050].forEach(t => setTimeout(
    () => boom(c.width * (.2 + Math.random() * .6), c.height * (.15 + Math.random() * .35)), t));
  const end = performance.now() + 2600;
  (function f() {
    x.clearRect(0, 0, c.width, c.height);
    P.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.vy += .05; p.vx *= .985; p.l -= .012;
      x.globalAlpha = Math.max(p.l, 0);
      x.fillStyle = p.col;
      x.beginPath(); x.arc(p.x, p.y, 2.5, 0, 7); x.fill();
    });
    if (performance.now() < end) requestAnimationFrame(f); else c.remove();
  })();
}
const _oldConfetti = confetti;
confetti = function () { _oldConfetti(); fireworks(); };

// =========================================================
//  EXTRAS: dark mode, cart badge, counter, repeat order
// =========================================================

// Grid animation when switching Menu/Deals or category
function swap() {
  const g = $("menu");
  g.classList.remove("swap");
  void g.offsetWidth;
  g.classList.add("swap");
}
const _setView = setView;
setView = function (v, s) { _setView(v, s); swap(); };
$("tabs").addEventListener("click", swap);

// "x2" badge on cards that are in the cart
function paintBags() {
  document.querySelectorAll("#menu .item").forEach(it => {
    const b = it.querySelector(".add");
    if (!b) return;
    const n = cart[b.dataset.id] || 0;
    let tag = it.querySelector(".inbag");
    if (!n) { if (tag) tag.remove(); return; }
    if (!tag) { tag = document.createElement("span"); tag.className = "inbag"; it.appendChild(tag); }
    const t = "×" + n;
    if (tag.textContent !== t) {
      tag.textContent = t;
      tag.style.animation = "none";
      void tag.offsetWidth;
      tag.style.animation = "";
    }
  });
}

// Best sellers (top 3 from real orders)
function renderBest() {
  const box = $("best");
  if (!box) return;
  const cnt = {};
  orders.forEach(o => o.items.forEach(i => { cnt[i.id] = (cnt[i.id] || 0) + i.q; }));
  const top = Object.entries(cnt).sort((a, b) => b[1] - a[1])
    .map(([id, n]) => ({ m: MENU.find(x => x.id == id), n }))
    .filter(x => x.m && !isDeal(x.m) && (stock[x.m.id] ?? 0) > 0)
    .slice(0, 3);
  box.innerHTML = view === "menu" && !q && top.length
    ? `<p class="up-t">🏆 Best sellers</p><div class="chips">${top.map(({ m, n }) =>
      `<button type="button" class="chip" data-id="${m.id}">${esc(m.name)} <b>${n} sold</b></button>`).join("")}</div>`
    : "";
}
const bestBox = $("best");
if (bestBox) bestBox.addEventListener("click", e => {
  const c = e.target.closest(".chip");
  if (c) change(+c.dataset.id, 1, c);
});

const _renderMenu = renderMenu;
renderMenu = function () { _renderMenu(); paintBags(); renderBest(); };
renderBest();

// Total counts up smoothly
let shownTotal = 0;
function countTo(el, a, b) {
  const t0 = performance.now(), dur = 450;
  (function f(now) {
    const p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3);
    el.textContent = fmt(a + (b - a) * e);
    if (p < 1) requestAnimationFrame(f);
  })(t0);
}
const _renderCart = renderCart;
renderCart = function () {
  _renderCart();
  paintBags();
  const to = totals().total;
  const el = document.querySelector("#totals .tot.big span:last-child");
  if (el && !reduceMotion) countTo(el, shownTotal, to);
  shownTotal = to;
};
$("disc").oninput = renderCart;
$("discType").onchange = renderCart;

// Card and order box flash when an item is added
const _change = change;
change = function (id, d, btn) {
  const had = cart[id] || 0;
  _change(id, d, btn);
  if (d > 0 && (cart[id] || 0) > had) {
    const a = document.querySelector(`#menu .add[data-id="${id}"]`);
    const it = a && a.closest(".item");
    if (it) { it.classList.add("flash"); setTimeout(() => it.classList.remove("flash"), 450); }
    const o = $("order");
    o.classList.add("glow");
    setTimeout(() => o.classList.remove("glow"), 450);
  }
};

// "Repeat last order" button
(function () {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "clear";
  b.textContent = "🔁 Repeat last order";
  b.onclick = () => {
    if (!lastMeta) { toast("No previous order yet"); return; }
    Object.entries(lastMeta.items).forEach(([id, n]) => {
      const k = Math.min(n, stock[id] ?? 0);
      if (MENU.find(m => m.id == id) && k > 0) cart[id] = k;
    });
    renderCart();
    sfx("add");
    toast("Last order added back 🔁");
  };
  $("clear").after(b);
})();

// Dark mode button
(function () {
  document.body.classList.toggle("dark", !!lsGet("bsDark", false));
  const box = document.querySelector(".hb-in .social");
  if (!box) return;
  const b = document.createElement("button");
  b.type = "button";
  b.id = "darkBtn";
  b.title = "Dark mode";
  b.setAttribute("aria-label", "Toggle dark mode");
  const paint = () => { b.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙"; };
  b.onclick = () => {
    document.body.classList.toggle("dark");
    lsSet("bsDark", document.body.classList.contains("dark"));
    paint();
    sfx("fav");
  };
  paint();
  box.insertBefore(b, box.firstChild);
})();

// =========================================================
//  REPORTS: print today's report and CSV download
// =========================================================
function printHTML(body) {
  const f = document.createElement("iframe");
  f.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0";
  document.body.appendChild(f);
  const d = f.contentWindow.document;
  d.open();
  d.write(`<html><head><title>Report</title><style>
    @page{margin:2mm}
    body{margin:0;padding:0 3mm;box-sizing:border-box;width:72mm;font:bold 14px/1.5 'Courier New',monospace;color:#000}
    h2{text-align:center;margin:4px 0}
    .c{text-align:center}
    hr{border:0;border-top:2px dashed #000;margin:8px 0}
    .r{display:flex;justify-content:space-between;gap:8px}
  </style></head><body>${body}</body></html>`);
  d.close();
  setTimeout(() => {
    f.contentWindow.focus();
    f.contentWindow.print();
    setTimeout(() => f.remove(), 2000);
  }, 300);
}

function printReport() {
  const to = todayOrders();
  const types = ["Dine-in", "Takeaway", "Delivery"].map(tp => {
    const l = to.filter(o => o.type === tp);
    return `<div class="r"><span>${tp} (${l.length})</span><span>${fmt(sumTotal(l))}</span></div>`;
  }).join("");
  const cnt = {};
  to.forEach(o => o.items.forEach(i => { cnt[i.name] = (cnt[i.name] || 0) + i.q; }));
  const items = Object.entries(cnt).sort((a, b) => b[1] - a[1])
    .map(([n, q]) => `<div class="r"><span>${esc(n)}</span><span>x ${q}</span></div>`).join("");
  printHTML(`
    <h2>${esc(RESTAURANT.name)}</h2>
    <div class="c">TODAY'S REPORT<br>${new Date().toLocaleDateString("en-GB")}</div>
    <hr>
    <div class="r"><span>Total orders</span><span>${to.length}</span></div>
    <div class="r"><span>Discount</span><span>${fmt(to.reduce((s, o) => s + o.disc, 0))}</span></div>
    <div class="r"><b>TOTAL SALE</b><b>${fmt(sumTotal(to))}</b></div>
    <hr>${types}<hr>
    <div class="c">Items sold</div>
    ${items || '<div class="c">No orders yet</div>'}`);
}

function downloadCSV() {
  const rows = [["Order", "Date", "Type", "Items", "Discount", "Total"]];
  orders.forEach(o => rows.push([
    o.no, new Date(o.t).toLocaleString("en-GB"), o.type,
    o.items.map(i => i.q + " x " + i.name).join(" | "),
    Math.round(o.disc), Math.round(o.total)
  ]));
  const csv = "\uFEFF" + rows.map(r => r.map(c => '"' + String(c).replace(/"/g, '""') + '"').join(",")).join("\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
  a.download = "bs-smart-report-" + new Date().toISOString().slice(0, 10) + ".csv";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

const _openPanel = openPanel;
openPanel = function (type) {
  _openPanel(type);
  if (type !== "orders" && type !== "payment") return;
  const box = document.querySelector("#panelBody .clear-box");
  if (!box) return;
  const p = document.createElement("button");
  p.type = "button"; p.className = "btn-lite"; p.textContent = "🖨️ Print today's report"; p.onclick = printReport;
  const c = document.createElement("button");
  c.type = "button"; c.className = "btn-lite"; c.textContent = "📥 Excel (CSV) download"; c.onclick = downloadCSV;
  box.prepend(p, c);
};

// =========================================================
//  SMALL EXTRAS
// =========================================================
// Ctrl+Enter places the order
document.addEventListener("keydown", e => {
  if ((e.ctrlKey || e.metaKey) && e.key === "Enter" && !$("go").disabled && !$("overlay").classList.contains("show")) placeOrder();
});
// Light vibration on phones when adding
document.addEventListener("pointerdown", e => {
  if (navigator.vibrate && e.target.closest(".add:not(:disabled),.chip")) navigator.vibrate(15);
});
// Footer year
const yr = $("yr");
if (yr) yr.textContent = new Date().getFullYear();

// =========================================================
//  ANIMATIONS EXTRA
// =========================================================

// 1) Logo ke gird ghoomte food emojis
(function () {
  const w = $("logoWrap");
  if (!w || reduceMotion) return;
  const o = document.createElement("div");
  o.className = "orbit";
  const list = ["🍔", "🍕", "🍟", "🍗", "🥤", "🌮"];
  list.forEach((e, i) => {
    const s = document.createElement("span"), a = Math.PI * 2 * i / list.length;
    s.style.left = (50 + 50 * Math.cos(a)) + "%";
    s.style.top = (50 + 50 * Math.sin(a)) + "%";
    s.innerHTML = "<i>" + e + "</i>";
    o.appendChild(s);
  });
  w.appendChild(o);
})();

// 2) Delivery scooter hero mein
(function () {
  const hero = document.querySelector(".hero");
  if (!hero || reduceMotion) return;
  const s = document.createElement("div");
  s.className = "scooter";
  s.innerHTML = "<i>🛵</i>";
  hero.appendChild(s);
})();

// 3) Mouse ke peeche sunehri roshni
(function () {
  if (reduceMotion || !canHover) return;
  const g = document.createElement("div");
  g.className = "cglow";
  document.body.appendChild(g);
  let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y;
  addEventListener("pointermove", e => { tx = e.clientX; ty = e.clientY; g.style.opacity = 1; });
  document.addEventListener("mouseleave", () => { g.style.opacity = 0; });
  (function f() {
    x += (tx - x) * .12;
    y += (ty - y) * .12;
    g.style.transform = `translate(${x}px,${y}px)`;
    requestAnimationFrame(f);
  })();
})();

// 4) Search box mein khud type hota hua placeholder
(function () {
  const inp = $("search");
  if (!inp || reduceMotion) return;
  const words = ["burger", "pizza", "biryani", "zinger", "chai", "fries"];
  let w = 0, c = 0, del = false;
  (function loop() {
    let d = 110;
    if (view === "menu" && document.activeElement !== inp && !inp.value) {
      const word = words[w];
      c += del ? -1 : 1;
      inp.placeholder = "Search food: " + word.slice(0, c) + "|";
      if (!del && c === word.length) { del = true; d = 1200; }
      else if (del && c === 0) { del = false; w = (w + 1) % words.length; d = 300; }
    }
    setTimeout(loop, d);
  })();
})();

// 5) Header ke numbers ginti ki tarah chalte hain (Orders / Payment)
(function () {
  const _set = setStat;
  setStat = function (id, text) {
    const e = $(id);
    if (!e || reduceMotion || id === "statStock" || e.textContent === text) return _set(id, text);
    const from = parseInt(e.textContent.replace(/\D/g, "")) || 0;
    const to = parseInt(text.replace(/\D/g, "")) || 0;
    _set(id, text);
    const t0 = performance.now(), dur = 600;
    (function f(now) {
      const p = Math.min(1, (now - t0) / dur), v = Math.round(from + (to - from) * (1 - Math.pow(1 - p, 3)));
      e.textContent = p < 1 ? (id === "statPay" ? fmt(v) : String(v)) : text;
      if (p < 1) requestAnimationFrame(f);
    })(t0);
  };
})();

// 6) Panels: stat numbers count-up + rows ek ek karke
(function () {
  const _op = openPanel;
  openPanel = function (type) {
    _op(type);
    document.querySelectorAll("#panelBody .ptable tbody tr").forEach((r, i) => {
      r.style.animationDelay = Math.min(i, 12) * 40 + "ms";
    });
    if (reduceMotion) return;
    document.querySelectorAll("#panelBody .stat strong").forEach(el => {
      const text = el.textContent, n = parseInt(text.replace(/\D/g, "")) || 0;
      if (!n) return;
      const money = text.indexOf(CURRENCY) === 0, t0 = performance.now(), dur = 700;
      (function f(now) {
        const p = Math.min(1, (now - t0) / dur), v = Math.round(n * (1 - Math.pow(1 - p, 3)));
        el.textContent = p < 1 ? (money ? fmt(v) : String(v)) : text;
        if (p < 1) requestAnimationFrame(f);
      })(t0);
    });
  };
})();

// 7) "Kyun BS Smart" cards mouse par 3D tilt
(function () {
  if (reduceMotion || !canHover) return;
  document.querySelectorAll(".feat").forEach(c => {
    c.addEventListener("pointermove", e => {
      const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      c.style.setProperty("--ry", ((x - .5) * 14).toFixed(2) + "deg");
      c.style.setProperty("--rx", ((.5 - y) * 14).toFixed(2) + "deg");
    });
    c.addEventListener("pointerleave", () => { c.style.removeProperty("--rx"); c.style.removeProperty("--ry"); });
  });
})();

// 8) Item add hone par cart bar aur My order button hilte hain
(function () {
  const _c = change;
  change = function (id, d, btn) {
    const had = cart[id] || 0;
    _c(id, d, btn);
    if (d > 0 && (cart[id] || 0) > had) {
      [$("cartbar"), document.querySelector(".nav-cta")].forEach(el => {
        if (!el) return;
        el.classList.remove("wig");
        void el.offsetWidth;
        el.classList.add("wig");
      });
    }
  };
})();
