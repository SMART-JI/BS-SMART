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

// Edit button: false = sirf Deals ke cards par, true = har card par
const EDIT_ON_ALL_CARDS = false;

// ====== ANIMATION LEVEL (header ke 🐇 / ✨ / 🎆 button se bhi badal sakte hain) ======
// "fast"   = sab se tez, bhaari animations band
// "smooth" = halki animations, lag nahi (pasandida)
// "full"   = saari animations (kamzor computer par lag karti hain)
const ANIM_DEFAULT = "smooth";
let ANIM = ANIM_DEFAULT;
try {
    const v = JSON.parse(localStorage.getItem("bsAnim"));
    if (v === "fast" || v === "smooth" || v === "full") ANIM = v;
} catch (e) { }
document.documentElement.dataset.anim = ANIM;
const LITE_MODE = ANIM !== "full";

// ====== PRINT / SLIP SETTINGS ======
const PRINT_LOGO = true;                               // true = customer slip par logo
const LOGO_PRINT_FILE = "assets/img/logo-print.png";   // chhota black-white logo (200px). Na ho to khud bana liya jata hai
const KITCHEN_ONE_SLIP = false;                        // false = har category ki alag slip, true = saari items ek slip par

const PRINT_WIDTH_MM = 48;   // 58mm roll = 48, 80mm roll = 72
const PRINT_LEFT_MM = 0;     // slip left se kate to 2 ya 3 karein
const PRINT_FONT_PX = 13;    // font ka size
const PRINT_WEIGHT = 400;    // 400 normal, 700 bold

// Starting menu (can be changed later from Manage Menu).
// Items with category "Deals" only show in the Deals view.
// Har item ka id alag hona chahiye.
const DEFAULT_MENU = [
    // ---------- FastFood ----------
    { id: 1, cat: "FastFood", name: "Zinger Burger", desc: "Crispy chicken zinger burger", price: 300, img: "" },
    { id: 2, cat: "FastFood", name: "Zinger Burger Cheese", desc: "Zinger burger with cheese", price: 350, img: "" },
    { id: 3, cat: "FastFood", name: "Zinger Burger Jumbo", desc: "Jumbo crispy chicken zinger burger", price: 450, img: "" },
    { id: 4, cat: "FastFood", name: "Beef Burger", desc: "Juicy beef burger", price: 300, img: "" },
    { id: 5, cat: "FastFood", name: "Beef Burger Cheese", desc: "Beef burger with cheese", price: 350, img: "" },
    { id: 6, cat: "FastFood", name: "Club Sandwich", desc: "Fresh chicken club sandwich", price: 400, img: "" },
    { id: 7, cat: "FastFood", name: "Chicken Sandwich", desc: "Delicious chicken sandwich", price: 450, img: "" },
    { id: 8, cat: "FastFood", name: "BBQ Sandwich", desc: "Chicken sandwich with BBQ flavor", price: 450, img: "" },
    { id: 9, cat: "FastFood", name: "Plan Fries", desc: "Fries", price: 150, img: "" },
    { id: 10, cat: "FastFood", name: "Mayo Fries", desc: "Mayo Yammi Fries", price: 200, img: "" },
    { id: 11, cat: "FastFood", name: "Cheese Fries", desc: "Cheese Yammi Fries", price: 200, img: "" },

    // ---------- EXTRAS ----------
    { id: 12, cat: "EXTRAS", name: "Paratha (SMALL)", desc: "Yammi", price: 50, img: "" },
    { id: 13, cat: "EXTRAS", name: "Paratha (LARGE)", desc: "Yammi", price: 100, img: "" },
    { id: 14, cat: "EXTRAS", name: "Chapati", desc: "Yammi", price: 20, img: "" },

    // ---------- BBQ Rolls ----------
    { id: 15, cat: "BBQ", name: "Zinger Roll", desc: "Crispy chicken zinger roll", price: 150, img: "" },
    { id: 16, cat: "BBQ", name: "Zinger Jumbo Roll", desc: "Jumbo crispy chicken zinger roll", price: 250, img: "" },
    { id: 17, cat: "BBQ", name: "Boti Roll", desc: "Chicken boti roll", price: 150, img: "" },
    { id: 18, cat: "BBQ", name: "Kabab Roll", desc: "Chicken kabab roll", price: 150, img: "" },
    { id: 19, cat: "BBQ", name: "Chicken Roll", desc: "Chicken roll", price: 150, img: "" },
    { id: 20, cat: "BBQ", name: "Chicken Mayo Garlic Roll", desc: "Chicken roll with mayo garlic sauce", price: 150, img: "" },
    { id: 21, cat: "BBQ", name: "Chicken Malai Boti Roll", desc: "Creamy chicken malai boti roll", price: 150, img: "" },
    { id: 22, cat: "BBQ", name: "Chicken Crispy Roll", desc: "Crispy chicken roll", price: 150, img: "" },

    // ---------- Pizza ----------
    { id: 23, cat: "Pizza", name: "Chicken Fajita (SMALL)", desc: "Chicken fajita pizza", price: 300, img: "" },
    { id: 24, cat: "Pizza", name: "Chicken Fajita (MEDIUM)", desc: "Chicken fajita pizza", price: 500, img: "" },
    { id: 25, cat: "Pizza", name: "Chicken Fajita (LARGE)", desc: "Chicken fajita pizza", price: 700, img: "" },

    { id: 26, cat: "Pizza", name: "Chicken Tikka (SMALL)", desc: "Chicken tikka pizza", price: 300, img: "" },
    { id: 27, cat: "Pizza", name: "Chicken Tikka (MEDIUM)", desc: "Chicken tikka pizza", price: 500, img: "" },
    { id: 28, cat: "Pizza", name: "Chicken Tikka (LARGE)", desc: "Chicken tikka pizza", price: 700, img: "" },

    { id: 29, cat: "Pizza", name: "Chicken Malai (SMALL)", desc: "Chicken malai pizza", price: 300, img: "" },
    { id: 30, cat: "Pizza", name: "Chicken Malai (MEDIUM)", desc: "Chicken malai pizza", price: 500, img: "" },
    { id: 31, cat: "Pizza", name: "Chicken Malai (LARGE)", desc: "Chicken malai pizza", price: 700, img: "" },

    { id: 32, cat: "Pizza", name: "BBQ Chicken (SMALL)", desc: "BBQ chicken pizza", price: 300, img: "" },
    { id: 33, cat: "Pizza", name: "BBQ Chicken (MEDIUM)", desc: "BBQ chicken pizza", price: 500, img: "" },
    { id: 34, cat: "Pizza", name: "BBQ Chicken (LARGE)", desc: "BBQ chicken pizza", price: 700, img: "" },

    { id: 35, cat: "Pizza", name: "Chicken Supreme (SMALL)", desc: "Chicken supreme pizza", price: 300, img: "" },
    { id: 36, cat: "Pizza", name: "Chicken Supreme (MEDIUM)", desc: "Chicken supreme pizza", price: 500, img: "" },
    { id: 37, cat: "Pizza", name: "Chicken Supreme (LARGE)", desc: "Chicken supreme pizza", price: 700, img: "" },

    { id: 38, cat: "Pizza", name: "Chicken Shish (SMALL)", desc: "Chicken shish pizza", price: 300, img: "" },
    { id: 39, cat: "Pizza", name: "Chicken Shish (MEDIUM)", desc: "Chicken shish pizza", price: 500, img: "" },
    { id: 40, cat: "Pizza", name: "Chicken Shish (LARGE)", desc: "Chicken shish pizza", price: 700, img: "" },

    { id: 41, cat: "Pizza", name: "Chicken Cheese (SMALL)", desc: "Chicken cheese pizza", price: 300, img: "" },
    { id: 42, cat: "Pizza", name: "Chicken Cheese (MEDIUM)", desc: "Chicken cheese pizza", price: 500, img: "" },
    { id: 43, cat: "Pizza", name: "Chicken Cheese (LARGE)", desc: "Chicken cheese pizza", price: 700, img: "" },

    { id: 44, cat: "Pizza", name: "Vegetable (SMALL)", desc: "Fresh vegetable pizza", price: 300, img: "" },
    { id: 45, cat: "Pizza", name: "Vegetable (MEDIUM)", desc: "Fresh vegetable pizza", price: 500, img: "" },
    { id: 46, cat: "Pizza", name: "Vegetable (LARGE)", desc: "Fresh vegetable pizza", price: 700, img: "" },

    { id: 47, cat: "Pizza", name: "Special (BS Smart) (SMALL)", desc: "Special signature pizza", price: 400, img: "" },
    { id: 48, cat: "Pizza", name: "Special (BS Smart) (MEDIUM)", desc: "Special signature pizza", price: 700, img: "" },
    { id: 49, cat: "Pizza", name: "Special (BS Smart) (LARGE)", desc: "Special signature pizza", price: 1000, img: "" },

    // ---------- BBQ Plates & Seekh ----------
    { id: 50, cat: "BBQ", name: "Chicken Tikka (Chest)", desc: "Chicken tikka chest piece", price: 350, img: "" },
    { id: 51, cat: "BBQ", name: "Chicken Tikka (Leg)", desc: "Chicken tikka leg piece", price: 300, img: "" },
    { id: 52, cat: "BBQ", name: "Behari Tikka (Leg)", desc: "Behari style tikka", price: 350, img: "" },
    { id: 53, cat: "BBQ", name: "Behari Tikka (Chest)", desc: "Behari style tikka", price: 300, img: "" },
    { id: 54, cat: "BBQ", name: "Chicken Malai White Tikka (Plate)", desc: "Creamy white malai chicken tikka", price: 400, img: "" },
    { id: 55, cat: "BBQ", name: "Chicken Malai Boti (Plate)", desc: "Tender malai chicken boti", price: 400, img: "" },
    { id: 56, cat: "BBQ", name: "Behari Boti (Plate)", desc: "Behari style boti plate", price: 400, img: "" },
    { id: 57, cat: "BBQ", name: "Seekh Kabab (Plate)", desc: "Seekh kabab plate", price: 400, img: "" },
    { id: 58, cat: "BBQ", name: "Gola Kabab (Plate)", desc: "Gola kabab plate", price: 400, img: "" },
    { id: 59, cat: "BBQ", name: "Dhaga Kabab (Plate)", desc: "Dhaga kabab plate", price: 400, img: "" },
    { id: 60, cat: "BBQ", name: "Chicken Reshmi Kabab", desc: "Soft and juicy reshmi kabab", price: 400, img: "" },
    { id: 61, cat: "BBQ", name: "Turkish Kabab (Plate)", desc: "Turkish kabab plate", price: 400, img: "" },
    { id: 62, cat: "BBQ", name: "Chicken Boti (Plate)", desc: "Classic chicken boti plate", price: 400, img: "" },
    { id: 63, cat: "BBQ", name: "Chicken Balochi Boti (Plate)", desc: "Balochi style chicken boti plate", price: 400, img: "" },
    { id: 64, cat: "BBQ", name: "Chicken Malai Boti (Seekh)", desc: "Tender malai chicken boti seekh", price: 100, img: "" },
    { id: 65, cat: "BBQ", name: "Behari Boti (Seekh)", desc: "Behari style boti seekh", price: 100, img: "" },
    { id: 66, cat: "BBQ", name: "Seekh Kabab (Seekh)", desc: "Seekh kabab seekh", price: 100, img: "" },
    { id: 67, cat: "BBQ", name: "Chicken Boti (Seekh)", desc: "Classic chicken boti seekh", price: 100, img: "" },
    { id: 68, cat: "BBQ", name: "Chicken Balochi Boti (Seekh)", desc: "Balochi style chicken boti seekh", price: 100, img: "" },

    // ---------- BBQ Broast (NEW) ----------
    { id: 69, cat: "BBQ", name: "Broast (CHEST)", desc: "Crispy broast chest piece", price: 500, img: "" },
    { id: 70, cat: "BBQ", name: "Broast (LEG)", desc: "Crispy broast leg piece", price: 450, img: "" },

    // ---------- Deals ----------
    { id: 100, cat: "Deals", name: "Deal 1", desc: "4 Zinger Burger with Fries", price: 999, img: "" },
    { id: 101, cat: "Deals", name: "Deal 2", desc: "2 Zinger Burger with Fries, 2 x 300ml Coldrink", price: 699, img: "" },
    { id: 102, cat: "Deals", name: "Deal 3", desc: "2 Zinger Burger with Fries, 1 Medium Pizza", price: 999, img: "" },
    { id: 103, cat: "Deals", name: "Deal 4", desc: "2 Zinger Burger with Fries, 1 Broast Chest, 1 Medium Pizza, 1 Ltr Coldrink", price: 1499, img: "" },
    { id: 104, cat: "Deals", name: "Deal 5", desc: "2 Club Sandwich, 2 Zinger Burger, Fries, 1 Ltr Coldrink", price: 1399, img: "" },
    { id: 105, cat: "Deals", name: "Deal 6", desc: "1 Zinger Burger, 1 Club Sandwich, 1 Fries, 1 Small Pizza", price: 799, img: "" },
    { id: 106, cat: "Deals", name: "Deal 7", desc: "2 Medium Pizza, 1 Pizza Fries (Small), 1 Ltr Coldrink", price: 1299, img: "" },
    { id: 107, cat: "Deals", name: "Deal 8", desc: "1 Large Pizza, 1 Medium Pizza, 1 Small Pizza Fries", price: 1349, img: "" },

    // ---------- Biryani ----------
    { id: 75, cat: "Biryani", name: "Chicken Biryani (1 KG)", desc: "Chicken biryani 1 kg", price: 560, img: "" },
    { id: 76, cat: "Biryani", name: "Chicken Biryani (3 Pao)", desc: "Chicken biryani 3 pao", price: 420, img: "" },
    { id: 77, cat: "Biryani", name: "Chicken Biryani (Half KG)", desc: "Chicken biryani half kg", price: 280, img: "" },
    { id: 78, cat: "Biryani", name: "Chicken Biryani (1 Pao)", desc: "Chicken biryani 1 pao", price: 140, img: "" },
    { id: 79, cat: "Biryani", name: "Chicken Biryani (Plate)", desc: "Chicken biryani single plate", price: 210, img: "" },
    { id: 80, cat: "Biryani", name: "Sada Biryani / Sada Pulao (1 KG)", desc: "Plain biryani / pulao 1 kg", price: 400, img: "" },
    { id: 81, cat: "Biryani", name: "Sada Biryani / Sada Pulao (3 Pao)", desc: "Plain biryani / pulao 3 pao", price: 300, img: "" },
    { id: 82, cat: "Biryani", name: "Sada Biryani / Sada Pulao (Half KG)", desc: "Plain biryani / pulao half kg", price: 200, img: "" },
    { id: 83, cat: "Biryani", name: "Sada Biryani / Sada Pulao (1 Pao)", desc: "Plain biryani / pulao 1 pao", price: 100, img: "" },
    { id: 84, cat: "Biryani", name: "Beef Pulao (1 KG)", desc: "Beef pulao 1 kg", price: 760, img: "" },
    { id: 85, cat: "Biryani", name: "Beef Pulao (3 Pao)", desc: "Beef pulao 3 pao", price: 570, img: "" },
    { id: 86, cat: "Biryani", name: "Beef Pulao (Half KG)", desc: "Beef pulao half kg", price: 380, img: "" },
    { id: 87, cat: "Biryani", name: "Beef Pulao (1 Pao)", desc: "Beef pulao 1 pao", price: 190, img: "" },
    { id: 88, cat: "Biryani", name: "Beef Pulao (Plate)", desc: "Beef pulao single plate", price: 280, img: "" },

    // ---------- Drinks ----------
    { id: 89, cat: "Drinks", name: "REG Cold Drink", desc: "Regular cold drink", price: 70, img: "" },
    { id: 90, cat: "Drinks", name: "REG Cold Drink Sting", desc: "Regular Sting", price: 80, img: "" },
    { id: 91, cat: "Drinks", name: "300ml Coldrink", desc: "300ml cold drink", price: 90, img: "" },
    { id: 92, cat: "Drinks", name: "300ml Coldrink Sting", desc: "300ml Sting", price: 100, img: "" },
    { id: 93, cat: "Drinks", name: "500ml Coldrink", desc: "500ml cold drink", price: 120, img: "" },
    { id: 94, cat: "Drinks", name: "500ml Coldrink Sting", desc: "500ml Sting", price: 140, img: "" },
    { id: 95, cat: "Drinks", name: "1 ltr Coldrink", desc: "1 litre cold drink", price: 170, img: "" },
    { id: 96, cat: "Drinks", name: "1.5 ltr Coldrink", desc: "1.5 litre cold drink", price: 220, img: "" },
    { id: 97, cat: "Drinks", name: "Jumbo Coldrink", desc: "Jumbo size cold drink", price: 270, img: "" },
    { id: 98, cat: "Drinks", name: "Water 500ml", desc: "500ml mineral water", price: 60, img: "" },
    { id: 99, cat: "Drinks", name: "Water 1.5 Ltr", desc: "1.5 litre mineral water", price: 120, img: "" }
];

// =========================================================
//  HELPERS
// =========================================================
const $ = id => document.getElementById(id);
const on = (id, ev, fn) => { const e = $(id); if (e) e.addEventListener(ev, fn); };
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
// SMOOTH = halki animations (smooth + full). FANCY = bhaari mouse effects (sirf full)
const SMOOTH = ANIM !== "fast" && !reduceMotion;
const FANCY = ANIM === "full" && !reduceMotion;

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
    const n = ANIM === "full" ? 46 : ANIM === "smooth" ? 22 : 12;
    for (let i = 0; i < n; i++) {
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
    // Tabs ke aas-paas ka sticky bar (arrows wala) ho to poora wahi chhupta/dikhta hai
    const host = box.closest(".tabsbar") || box;
    host.style.display = view === "deals" ? "none" : "";
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

// Aaj ki special deal: poori box par click karne se add hoti hai
function renderSpecial() {
    const box = $("special");
    const deals = MENU.filter(m => isDeal(m) && (stock[m.id] ?? DEFAULT_STOCK) > 0);
    if (view !== "deals" || !deals.length || q) {
        box.className = "special"; box.innerHTML = ""; delete box.dataset.id; return;
    }
    const m = deals[Math.floor(Date.now() / 864e5) % deals.length];   // a different deal every day
    box.className = "special show";
    box.dataset.id = m.id;
    box.innerHTML = `
    <div class="sp-l"><small>⭐ TODAY'S SPECIAL DEAL</small><h3>${esc(m.name)}</h3><p>${esc(m.desc || "")}</p></div>
    <div class="sp-r"><span class="price">${fmt(m.price)}</span><span class="tapadd">Tap to add</span></div>`;
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
        const showEdit = isDeal(m) || EDIT_ON_ALL_CARDS;
        return `<article class="item${isDeal(m) ? " deal" : ""}${sold ? " sold" : ""}" data-id="${m.id}" tabindex="0" role="button" aria-label="${esc(m.name)} add karein" style="animation-delay:${Math.min(i, 14) * 45}ms">
      ${isDeal(m) ? "" : `<button class="fav${on ? " on" : ""}" data-id="${m.id}" aria-pressed="${on}" aria-label="Favourite">${on ? "♥" : "♡"}</button>`}
      ${showEdit ? `<button type="button" class="cedit" data-id="${m.id}" aria-label="Edit ${esc(m.name)}">✏️ Edit</button>` : ""}
      ${m.img ? `<img class="em" src="${esc(m.img)}" alt="" loading="lazy" onerror="this.style.display='none'">` : ""}
      <h3>${esc(m.name)}</h3>
      <p>${esc(m.desc || "")}</p>
      ${!sold && s <= 5 ? `<span class="lowtag">Only ${s} left</span>` : ""}
      <div class="row">
        <span class="price">${fmt(m.price)}</span>
        <span class="tapadd">${sold ? "Sold out" : "Tap to add"}</span>
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
    const isOn = i < 0;
    btn.classList.toggle("on", isOn);
    btn.textContent = isOn ? "♥" : "♡";
    btn.setAttribute("aria-pressed", String(isOn));
    if (isOn) sfx("fav");
}

// Edit: Manage Menu us item ke saath khul jata hai
function openEdit(id) {
    const m = MENU.find(x => x.id == id);
    if (!m) return;
    curPanel = "menu";
    editId = m.id;
    formImg = m.img || "";
    renderMenuEditor();
}

// Card par kahin bhi click = item add (heart aur edit button alag kaam karte hain)
function onItemClick(e) {
    const f = e.target.closest(".fav");
    if (f) { toggleFav(+f.dataset.id, f); return; }
    const ed = e.target.closest(".cedit");
    if (ed) { openEdit(+ed.dataset.id); return; }
    const card = e.target.closest(".item, .special.show");
    if (!card || card.classList.contains("sold")) return;
    const id = +card.dataset.id;
    if (id) change(id, 1, card);
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
        if (btn.classList.contains("item") || btn.classList.contains("special")) {
            // Card: andar ka text nahi badalna, sirf nishan
            btn.classList.add("added");
            setTimeout(() => btn.classList.remove("added"), 500);
        } else {
            const old = btn.textContent;
            btn.textContent = "✓ Added";
            btn.classList.add("added");
            setTimeout(() => { btn.textContent = old; btn.classList.remove("added"); }, 700);
        }
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
    const del = val("type") === "Delivery" ? Math.max(parseFloat(val("delFee")) || 0, 0) : 0;
    return { sub, disc, val: dv, isPct, tax, del, total: after + tax + del };
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

function renderChange() {
    const box = $("change");
    if (!box) return;
    const paid = parseFloat(val("paid")) || 0;
    if (!paid || !cartCount()) { box.className = ""; box.textContent = ""; return; }
    const diff = paid - totals().total;
    if (diff >= 0) {
        box.className = "show ok";
        box.textContent = "💵 Wapis dein: " + fmt(diff);
    } else {
        box.className = "show short";
        box.textContent = "⚠️ Abhi " + fmt(-diff) + " kam hain";
    }
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
    }).join("") : `<div class="empty">No items yet. Tap an item on the menu.</div>`;

    const t = totals();
    const showSub = t.disc > 0 || TAX_RATE > 0 || t.del > 0;
    $("totals").innerHTML = ids.length ? `
    ${showSub ? `<div class="tot"><span>Subtotal</span><span>${fmt(t.sub)}</span></div>` : ""}
    ${t.disc > 0 ? `<div class="tot off"><span>Discount${t.isPct ? " (" + t.val + "%)" : ""}</span><span>- ${fmt(t.disc)}</span></div>` : ""}
    ${TAX_RATE > 0 ? `<div class="tot"><span>Tax (${Math.round(TAX_RATE * 100)}%)</span><span>${fmt(t.tax)}</span></div>` : ""}
    ${t.del > 0 ? `<div class="tot"><span>Delivery charges</span><span>${fmt(t.del)}</span></div>` : ""}
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
    renderChange();
    updateCartbar(count);
}

function resetOrder() {
    cart = {};
    prevIds = [];
    setVal("disc", "");
    setVal("discType", "Rs");
    setVal("delFee", "");
    setVal("paid", "");
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

// Customer slip: (logo optional), every item, prices, total (proof of purchase)
function customerSlipHTML(snap, t, meta) {
    const rows = Object.entries(snap).map(([id, n]) => {
        const m = MENU.find(x => x.id == id);
        return `<div class="r"><span>${n} x ${esc(m.name)}</span><span>${fmt(m.price * n)}</span></div>`;
    }).join("");

    return `
    ${PRINT_LOGO ? `<img class="logo" src="assets/img/logo.jpeg" alt="">` : ""}
    <h2>${esc(RESTAURANT.name)}</h2>
    <div class="c">${esc(RESTAURANT.sub)}<br>${esc(RESTAURANT.address)}<br>Tel: ${esc(RESTAURANT.phone)}</div>
    <hr>
    <div class="r"><span>Order #</span><span>${meta.no}</span></div>
    <div class="r"><span>Date</span><span>${meta.dt}</span></div>
    <div class="r"><span>Time</span><span>${meta.tm}</span></div>
    <div class="r"><span>Type</span><span>${esc(meta.type)}</span></div>
    <hr>
    ${rows}
    <hr>
    ${(t.disc > 0 || TAX_RATE > 0 || t.del > 0) ? `<div class="r"><span>Subtotal</span><span>${fmt(t.sub)}</span></div>` : ""}
    ${t.disc > 0 ? `<div class="r"><span>Discount${t.isPct ? " (" + t.val + "%)" : ""}</span><span>- ${fmt(t.disc)}</span></div>` : ""}
    ${TAX_RATE > 0 ? `<div class="r"><span>Tax (${Math.round(TAX_RATE * 100)}%)</span><span>${fmt(t.tax)}</span></div>` : ""}
    ${t.del > 0 ? `<div class="r"><span>Delivery charges</span><span>${fmt(t.del)}</span></div>` : ""}
    <div class="r b"><span>TOTAL</span><span>${fmt(t.total)}</span></div>
    ${meta.paid > 0 ? `<div class="r"><span>Cash</span><span>${fmt(meta.paid)}</span></div>
    <div class="r"><span>Wapis (Change)</span><span>${fmt(Math.max(meta.paid - t.total, 0))}</span></div>` : ""}
    <hr>
    <div class="c">Good Food, Good Mood<br>Thank you! Please visit again.</div>
    <div class="c tag">--- Customer Copy ---</div>`;
}

// Deal ke har hisse ki category pehchano (description se).
// "4 Zinger Burger with Fries" -> [4 Zinger Burger (FastFood), Fries (FastFood)]
// "2 x 300ml Coldrink" -> 2 Coldrink (Drinks)
function dealParts(m) {
    const out = [];
    String(m.desc || "").split(",").forEach(chunk => {
        chunk.split(/\s+with\s+/i).forEach(s => {
            const text = s.trim();
            if (!text) return;
            const t = text.toLowerCase();
            let c = "Deals";
            if (/coldrink|cold drink|drink|ltr|litre|\d\s*ml|sting|water/.test(t)) c = "Drinks";
            else if (/pizza/.test(t)) c = "Pizza";
            else if (/pulao|biryani/.test(t)) c = "Biryani";
            else if (/paratha|chapati|naan|raita|salad|chutney/.test(t)) c = "EXTRAS";
            else if (/broast|tikka|boti|kabab|seekh|roll/.test(t)) c = "BBQ";
            else if (/burger|sandwich|fries/.test(t)) c = "FastFood";

            // shuru ka number alag karo (300ml jaise na toote, isliye space zaroori hai)
            const mm = text.match(/^(\d+)\s+(?:x\s+)?(.+)$/i);
            out.push({ cat: c, q: mm ? parseInt(mm[1]) : 1, name: mm ? mm[2] : text });
        });
    });
    return out;
}

// Kitchen slips: no logo, normal items ki price nahi. Custom item ki price aati hai.
// Deal ke hisse apni category ki slip par jate hain (quantity deals ki tadaad se multiply).
function kitchenSlipsHTML() {
    if (!lastMeta) return "";
    const groups = {};
    Object.entries(lastMeta.items).forEach(([id, n]) => {
        const m = MENU.find(x => x.id == id);
        if (!m) return;
        if (isDeal(m)) {
            dealParts(m).forEach(p => {
                (groups[p.cat] = groups[p.cat] || []).push({ m, n, part: p });
            });
            return;
        }
        (groups[m.cat] = groups[m.cat] || []).push({ m, n });
    });

    const line = ({ m, n, part }) => part
        ? `<div class="k-item">${part.q * n} x ${esc(part.name)}</div>` +
        `<div class="k-desc">(${esc(m.name)}${n > 1 ? " x" + n : ""})</div>`
        : m.custom
            ? `<div class="r k-item"><span>${n} x ${esc(m.name)}</span><span>${fmt(m.price * n)}</span></div>`
            : `<div class="k-item">${n} x ${esc(m.name)}</div>`;

    const head = `
      <div class="c big">Order # ${lastMeta.no}</div>
      <div class="c">${lastMeta.dt} · ${esc(lastMeta.type)}</div>
      <hr>`;

    if (KITCHEN_ONE_SLIP) {
        return `<div class="slip pg">${head}` +
            Object.keys(groups).map(c =>
                `<div class="c k-item">${esc(c.toUpperCase())}</div>${groups[c].map(line).join("")}<hr>`).join("") +
            `</div>`;
    }

    return Object.keys(groups).map(c => `<div class="slip pg">${head}
      <div class="c k-item">${esc(c.toUpperCase())}</div>
      <hr>
      ${groups[c].map(line).join("")}
    </div>`).join("");
}

// Customer slip first, then the kitchen slips
function itemSlipsHTML() {
    return `<div class="slip">${lastCustomer}</div>` + kitchenSlipsHTML();
}

function buildReceipt(snap, t, meta) {
    lastCustomer = customerSlipHTML(snap, t, meta);
    $("receipt").innerHTML = itemSlipsHTML();
}

// ----- Logo for print -----
// Page khulte hi logo chhota black-white bana kar data URL mein rakh liya jata hai,
// taake print ke waqt load ka intezar na ho.
// Pehle logo-print.png, na mile to logo.jpeg, dono na hon to logo print nahi hota.
const LOGO_THRESHOLD = 190;   // logo bahut kala aaye to barhao (200), bahut halka aaye to ghatao (150)
let logoData = "";            // "" = abhi tayyar nahi, "none" = logo nahi
if (PRINT_LOGO) (function () {
    function load(src, next) {
        const im = new Image();
        im.onload = () => {
            try {
                const w = 160, h = Math.round(im.naturalHeight * w / im.naturalWidth);
                const c = document.createElement("canvas");
                c.width = w; c.height = h;
                const x = c.getContext("2d");
                x.fillStyle = "#fff";
                x.fillRect(0, 0, w, h);
                x.drawImage(im, 0, 0, w, h);
                const img = x.getImageData(0, 0, w, h), p = img.data;
                for (let i = 0; i < p.length; i += 4) {
                    const g = p[i] * .3 + p[i + 1] * .59 + p[i + 2] * .11;
                    const v = g > LOGO_THRESHOLD ? 255 : 0;
                    p[i] = p[i + 1] = p[i + 2] = v;
                }
                x.putImageData(img, 0, 0);
                logoData = c.toDataURL("image/png");
            } catch (e) { logoData = src; }   // file:// par canvas rok de to seedha file use hogi
        };
        im.onerror = next;
        im.src = src;
    }
    load(LOGO_PRINT_FILE, () => load("assets/img/logo.jpeg", () => { logoData = "none"; }));
})();

// ----- Print engine: ek hi iframe pehle se tayyar rehta hai (tez) -----
function printCSS() {
    return `
    @page { size: ${PRINT_WIDTH_MM}mm auto; margin: 0; }
    html, body { margin: 0; padding: 0; background: #fff; }
    body { width: ${PRINT_WIDTH_MM}mm; padding-left: ${PRINT_LEFT_MM}mm; box-sizing: content-box;
           font-family: Arial, Helvetica, sans-serif; font-size: ${PRINT_FONT_PX}px;
           font-weight: ${PRINT_WEIGHT}; color: #000; }
    .slip { width: 100%; padding: 2mm 0; }
    .pg { page-break-before: always; break-before: page; }
    h2 { text-align: center; margin: 2px 0; font-size: 1.3em; }
    hr { border: 0; border-top: 1px dashed #000; margin: 4px 0; }
    .r { display: flex; justify-content: space-between; gap: 6px; }
    .r span:first-child, .r b:first-child { flex: 1; min-width: 0; overflow-wrap: anywhere; }
    .r span:last-child, .r b:last-child { white-space: nowrap; }
    .c { text-align: center; }
    .b { font-weight: 700; font-size: 1.15em; }
    .big { font-size: 1.4em; font-weight: 700; }
    .tag { font-size: .85em; margin-top: 4px; }
    .logo { display: block; margin: 0 auto 3px; width: 24mm; max-width: 100%; }
    .k-item { font-size: 1.2em; font-weight: 700; margin: 2px 0; }
    .k-desc { font-size: .85em; margin: 0 0 4px 8px; }`;
}

function getPrintFrame() {
    let f = document.getElementById("printFrame");
    if (!f) {
        f = document.createElement("iframe");
        f.id = "printFrame";
        f.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0;visibility:hidden";
        document.body.appendChild(f);
        const d = f.contentWindow.document;
        d.open();
        d.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><base href="${document.baseURI}"><title>Receipt</title><style>${printCSS()}</style></head><body></body></html>`);
        d.close();
    }
    return f;
}

function printHTMLDoc(body) {
    const f = getPrintFrame();
    const d = f.contentWindow.document;
    d.body.innerHTML = body;

    let fired = false;
    const go = () => {
        if (fired) return;
        fired = true;
        document.body.classList.add("printing");            // print ke dauran animations ruk jayen
        try { f.contentWindow.focus(); f.contentWindow.print(); } catch (e) { }
        setTimeout(() => document.body.classList.remove("printing"), 1500);
    };
    // Sirf tab intezar karo jab koi image abhi load ho rahi ho
    const pending = [...d.images].filter(im => !im.complete);
    if (!pending.length) { go(); return; }
    Promise.all(pending.map(im => new Promise(res => { im.onload = im.onerror = res; }))).then(go);
    setTimeout(go, 100);
}

// Page khulte hi iframe tayyar kar lo, taake pehli print bhi tez ho
getPrintFrame();

function printReceipt() {
    if (!lastCustomer) { toast("No order to print"); return; }
    let html = itemSlipsHTML();
    if (PRINT_LOGO) {
        if (logoData && logoData !== "none") {
            html = html.split('src="assets/img/logo.jpeg"').join('src="' + logoData + '"');
        } else {
            // logo tayyar nahi: bada logo print mein dene se behtar hai ke logo na ho
            html = html.replace(/<img class="logo"[^>]*>/g, "");
        }
    }
    printHTMLDoc(html);
}

// =========================================================
//  MEME AWAZ: speaker se band, aur apni marzi ka meme
// =========================================================

// Apne memes yahan likhein.
//   name = jo naam toast mein dikhega (kuch bhi rakh sakte hain)
//   file = assets folder mein mp3 ka naam
// Naya meme: ek line copy karke naam aur file badal dein. Hatana ho to line mita dein.
const MEMES = [
    { name: "Chin Tapak Dum Dum", file: "assets/chin_tapak_dum_dum.mp3" },
    { name: "Mujhay Anday Wala Burger", file: "assets/mujhay-anday-wala-burger.mp3" },
    { name: "Paisa He Paisa", file: "assets/paisa_he_paisa.mp3" },
    { name: "Ya Marhaba", file: "assets/ya_marhaba.mp3" }
];

// Bada order: is raqam ya us se upar ke order par ye khaas meme bajega (0 likhein to band)
const BIG_ORDER_AMOUNT = 3000;
const BIG_ORDER_MEME = "Paisa He Paisa";   // MEMES mein jo name likha hai bilkul wahi
let orderTotalNow = 0;                     // order ka total (khud set hota hai)

// Chuna hua meme: number (MEMES ka number), "random" ya "off"
let memeSel = lsGet("bsMemeSel", 0);
if (typeof memeSel === "number" && !MEMES[memeSel]) memeSel = 0;
let memeAudio = null;

// Memes pehle se load rehte hain taake order par der na lage
const memeCache = {};
function getMemeAudio(file) {
    if (!memeCache[file]) {
        const a = new Audio();
        a.preload = "auto";
        a.src = file;
        memeCache[file] = a;
    }
    return memeCache[file];
}
setTimeout(() => MEMES.forEach(m => getMemeAudio(m.file)), 2000);

function pickMeme() {
    if (memeSel === "off" || !MEMES.length) return null;
    if (memeSel === "random") return MEMES[Math.floor(Math.random() * MEMES.length)];
    return MEMES[memeSel] || MEMES[0];
}

// Chal rahi meme aur bolti awaz dono band
function stopAllSound() {
    if (memeAudio) { try { memeAudio.pause(); memeAudio.currentTime = 0; } catch (e) { } }
    try {
        if ("speechSynthesis" in window && (speechSynthesis.speaking || speechSynthesis.pending)) speechSynthesis.cancel();
    } catch (e) { }
}

// Speaker band ho to kuch nahi bajta
function playMeme() {
    if (!soundOn) return;
    let m = pickMeme();
    if (!m) return;
    // Bada order ho to khaas meme
    if (BIG_ORDER_AMOUNT > 0 && orderTotalNow >= BIG_ORDER_AMOUNT) {
        const big = MEMES.find(x => x.name === BIG_ORDER_MEME);
        if (big) m = big;
    }
    stopAllSound();
    memeAudio = getMemeAudio(m.file);
    try { memeAudio.currentTime = 0; } catch (e) { }
    memeAudio.play().catch(err => console.log("Meme play nahi hui:", err));
}

// Speaker button band karne par meme bhi band
(function () {
    const btn = $("soundBtn");
    if (!btn) return;
    const prev = btn.onclick;
    btn.onclick = function (e) {
        if (prev) prev.call(this, e);
        if (!soundOn) stopAllSound();
    };
})();

// Header mein 🎭 button: har click par agla meme (phir Random, phir Band)
(function () {
    const box = document.querySelector(".hb-in .social");
    if (!box) return;
    const b = document.createElement("button");
    b.type = "button";
    b.id = "memeBtn";
    b.title = "Meme badlein";
    b.setAttribute("aria-label", "Meme badlein");
    b.textContent = "🎭";

    const label = () =>
        memeSel === "off" ? "Meme band 🚫"
            : memeSel === "random" ? "Meme: Random 🎲"
                : "Meme: " + (MEMES[memeSel] || MEMES[0]).name;

    b.onclick = () => {
        const order = [...MEMES.map((_, i) => i), "random", "off"];
        const at = order.indexOf(memeSel);
        memeSel = order[(at + 1) % order.length];
        lsSet("bsMemeSel", memeSel);
        toast(label() + (soundOn ? "" : " (speaker band hai)"));
        playMeme();   // jhalak
    };
    box.insertBefore(b, box.firstChild);
})();

// =========================================================
//  ORDER PLACE
// =========================================================
function placeOrder() {
    if (!cartCount()) return;
    const snap = { ...cart }, t = totals(), no = nextOrderNo(), now = new Date();
    const dt = now.toLocaleDateString("en-GB");
    const tm = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });
    const type = val("type") || "Dine-in";

    lastMeta = { no, dt, tm, type, items: snap, paid: parseFloat(val("paid")) || 0 };
    buildReceipt(snap, t, lastMeta);

    orders.push({
        no, t: Date.now(), total: t.total, disc: t.disc, type,
        items: Object.entries(snap).map(([id, n]) => ({ id: +id, name: MENU.find(m => m.id == id).name, q: n }))
    });
    Object.entries(snap).forEach(([id, n]) => { stock[id] = Math.max(0, (stock[id] || 0) - n); });
    lsSet("bsOrders", orders);
    lsSet("bsStock", stock);

    orderTotalNow = t.total;         // bade order wali meme ke liye

    // 1) PRINT sab se pehle, seedha (bina setTimeout)
    printReceipt();
    // 2) Baaki sab kuch print ke baad
    setTimeout(() => $("overlay").classList.add("show"), 0);
    setTimeout(() => { sfx("order"); playMeme(); }, 60);
    setTimeout(updateStats, 100);
    setTimeout(confetti, 900);
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

        // Din ke hisaab se record (naya se purana)
        const days = {};
        orders.forEach(o => {
            const k = dayKey(o.t);
            if (!days[k]) days[k] = { t: o.t, n: 0, sum: 0 };
            days[k].n++;
            days[k].sum += o.total;
        });
        const dayRows = Object.values(days).sort((a, b) => b.t - a.t).map(d => {
            const dt = new Date(d.t);
            return `<tr>
        <td>${dt.getDate()}-${dt.getMonth() + 1}-${dt.getFullYear()}</td>
        <td class="num">${d.n}</td>
        <td class="num">${fmt(d.sum)}</td></tr>`;
        }).join("");

        html = `<div class="stats">
        <div class="stat"><span>Today's sales</span><strong>${fmt(sumTotal(to))}</strong></div>
        <div class="stat"><span>All-time sales</span><strong>${fmt(sumTotal(orders))}</strong></div>
        <div class="stat"><span>Today's discount</span><strong>${fmt(to.reduce((s, o) => s + o.disc, 0))}</strong></div>
      </div>
      <div class="tblwrap"><table class="ptable"><thead><tr><th>Order type</th><th class="num">Orders</th><th class="num">Amount</th></tr></thead><tbody>${types}</tbody></table></div>

      <h3 class="hist-t">📅 Daily Record</h3>
      ${dayRows
                ? `<div class="tblwrap"><table class="ptable"><thead><tr><th>Date</th><th class="num">Orders</th><th class="num">Amount</th></tr></thead><tbody>${dayRows}</tbody></table></div>`
                : `<p class="pnote">No record exists yet.</p>`}

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

let mq = "";   // Manage Menu ki search

function renderMenuList() {
    const list = MENU.filter(m =>
        (m.name + " " + m.cat + " " + (m.desc || "")).toLowerCase().includes(mq));

    const rows = list.map(m => `<tr>
      <td>${m.img ? `<img class="mthumb" src="${esc(m.img)}" alt="">` : ""}</td>
      <td><strong>${esc(m.name)}</strong><br><span class="pnote">${esc(m.cat)}</span></td>
      <td class="num">${fmt(m.price)}</td>
      <td class="macts">
        <button type="button" class="btn-edit" data-act="edit" data-id="${m.id}">Edit</button>
        <button type="button" class="btn-del" data-act="del" data-id="${m.id}">Delete</button>
      </td></tr>`).join("")
        || `<tr><td colspan="4" class="pnote">Koi item nahi mila. Doosra naam try karein.</td></tr>`;

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
    $("panelBody").innerHTML = `
    <div id="mFormBox"></div>
    <div class="msearch">
      <input id="mSearch" type="search" placeholder="Item search karein (naam ya category)" autocomplete="off" aria-label="Search menu items" value="${esc(mq)}">
    </div>
    <div id="mList"></div>`;
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
$("panelBody").addEventListener("input", e => {
    if (e.target.id !== "mSearch") return;
    mq = e.target.value.trim().toLowerCase();
    renderMenuList();
});

const closePanel = () => { mq = ""; $("panel").classList.remove("show"); };
$("panelClose").onclick = closePanel;
$("panel").onclick = e => { if (e.target === $("panel")) closePanel(); };
document.querySelectorAll("[data-panel]").forEach(b => b.onclick = () => openPanel(b.dataset.panel));

// =========================================================
//  BUTTONS AND EVENTS
// =========================================================
function syncDelivery() {
    const isDel = val("type") === "Delivery";
    const row = $("delRow");
    if (row) row.hidden = !isDel;
    if (!isDel) setVal("delFee", "");
    renderCart();
}
on("type", "change", syncDelivery);
on("delFee", "input", () => renderCart());
on("paid", "input", () => renderChange());

$("disc").oninput = () => renderCart();
$("discType").onchange = () => renderCart();

// Search: har key par nahi, thora ruk kar (hang se bachao)
let searchT;
$("search").oninput = () => {
    clearTimeout(searchT);
    searchT = setTimeout(() => { q = $("search").value.trim().toLowerCase(); renderMenu(); }, 130);
};

$("go").onclick = () => placeOrder();
$("print").onclick = () => printReceipt();
$("close").onclick = () => {
    $("overlay").classList.remove("show");
    resetOrder();
    renderMenu();
};
$("clear").onclick = resetOrder;

$("menu").addEventListener("click", onItemClick);
$("special").addEventListener("click", onItemClick);
// Keyboard: card par Enter / Space = add
$("menu").addEventListener("keydown", e => {
    if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("item")) {
        e.preventDefault();
        if (!e.target.classList.contains("sold")) change(+e.target.dataset.id, 1, e.target);
    }
});
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
    const b = e.target.closest(".go,.btn-gold,.btn-ghost,.nav-cta,.tab,.subnav button,.vs-btn");
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

// 3D tilt on menu cards (sirf FANCY mode mein)
(function () {
    if (!FANCY || !canHover) return;
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

// Hero: greeting, floating food (SMOOTH), spotlight/sparks/3D logo (FANCY)
(function () {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    const g = $("greet");
    if (g) {
        const h = new Date().getHours();
        g.textContent = h < 5 ? "Good night 🌙" : h < 12 ? "Good morning ☀️" : h < 16 ? "Lunch time 🍽️" : h < 19 ? "Good evening 🌇" : "Good night 🌙";
    }

    const fl = $("floaters");
    if (fl && SMOOTH) {
        const em = ["🍔", "🍕", "🍟", "🌭", "🥤", "🍗", "🌮", "🍩"];
        const count = FANCY ? 14 : 8;
        for (let i = 0; i < count; i++) {
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

    if (!FANCY || !canHover) return;

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
    setTimeout(() => { s.classList.add("hide"); setTimeout(() => s.remove(), 600); }, ANIM === "fast" ? 500 : 1000);
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

// Scroll handler: ek frame mein sirf ek baar chalta hai
let scrollTick = false;
function onScroll() {
    const y = window.scrollY, h = document.documentElement.scrollHeight - window.innerHeight;
    if (navEl) navEl.classList.toggle("scrolled", y > 10);
    toTop.classList.toggle("show", y > 500);
    if (prog) prog.style.width = (h > 0 ? y / h * 100 : 0) + "%";
}
window.addEventListener("scroll", () => {
    if (scrollTick) return;
    scrollTick = true;
    requestAnimationFrame(() => { scrollTick = false; onScroll(); });
}, { passive: true });

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
    if (document.hidden) return;
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
//  EXTRA ANIMATIONS: cursor trail, add burst, fireworks (sirf FANCY)
// =========================================================

// Food emoji trail behind the mouse
(function () {
    if (!FANCY || !canHover) return;
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

// Emoji burst when a card / chip is pressed
document.addEventListener("pointerdown", e => {
    if (!FANCY || !e.target.closest(".item:not(.sold),.chip") || e.target.closest(".fav,.cedit")) return;
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
    if (!FANCY) return;
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
        const n = cart[it.dataset.id] || 0;
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
    if (el && SMOOTH) countTo(el, shownTotal, to);
    shownTotal = to;
};

// Card and order box flash when an item is added
const _change = change;
change = function (id, d, btn) {
    const had = cart[id] || 0;
    _change(id, d, btn);
    if (d > 0 && (cart[id] || 0) > had) {
        const it = document.querySelector(`#menu .item[data-id="${id}"]`);
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

// Animation level button (🐇 fast / ✨ smooth / 🎆 full)
(function () {
    const box = document.querySelector(".hb-in .social");
    if (!box) return;
    const ICON = { fast: "🐇", smooth: "✨", full: "🎆" };
    const NAME = { fast: "Fast (sab se tez)", smooth: "Smooth (halki animations)", full: "Full (saari animations)" };
    const ORDER = ["fast", "smooth", "full"];
    const b = document.createElement("button");
    b.type = "button";
    b.id = "animBtn";
    b.title = "Animation level badlein";
    b.setAttribute("aria-label", "Animation level badlein");
    b.textContent = ICON[ANIM];
    b.onclick = () => {
        const next = ORDER[(ORDER.indexOf(ANIM) + 1) % ORDER.length];
        lsSet("bsAnim", next);
        toast(ICON[next] + " " + NAME[next]);
        setTimeout(() => location.reload(), 500);
    };
    box.insertBefore(b, box.firstChild);
})();

// =========================================================
//  REPORTS: print today's report and CSV download
// =========================================================
function printReport() {
    const to = todayOrders();
    const types = ["Dine-in", "Takeaway", "Delivery"].map(tp => {
        const l = to.filter(o => o.type === tp);
        return `<div class="r"><span>${tp} (${l.length})</span><span>${fmt(sumTotal(l))}</span></div>`;
    }).join("");
    const cnt = {};
    to.forEach(o => o.items.forEach(i => { cnt[i.name] = (cnt[i.name] || 0) + i.q; }));
    const items = Object.entries(cnt).sort((a, b) => b[1] - a[1])
        .map(([n, qty]) => `<div class="r"><span>${esc(n)}</span><span>x ${qty}</span></div>`).join("");
    printHTMLDoc(`<div class="slip">
    <h2>${esc(RESTAURANT.name)}</h2>
    <div class="c">TODAY'S REPORT<br>${new Date().toLocaleDateString("en-GB")}</div>
    <hr>
    <div class="r"><span>Total orders</span><span>${to.length}</span></div>
    <div class="r"><span>Discount</span><span>${fmt(to.reduce((s, o) => s + o.disc, 0))}</span></div>
    <div class="r"><b>TOTAL SALE</b><b>${fmt(sumTotal(to))}</b></div>
    <hr>${types}<hr>
    <div class="c">Items sold</div>
    ${items || '<div class="c">No orders yet</div>'}</div>`);
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
    if (navigator.vibrate && e.target.closest(".item:not(.sold),.chip") && !e.target.closest(".fav,.cedit")) navigator.vibrate(15);
});
// Footer year
const yr = $("yr");
if (yr) yr.textContent = new Date().getFullYear();

// =========================================================
//  ANIMATIONS EXTRA
// =========================================================

// 1) Logo ke gird ghoomte food emojis (SMOOTH + FULL)
(function () {
    const w = $("logoWrap");
    if (!w || !SMOOTH) return;
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

// 2) Delivery scooter hero mein (SMOOTH + FULL)
(function () {
    const hero = document.querySelector(".hero");
    if (!hero || !SMOOTH) return;
    const s = document.createElement("div");
    s.className = "scooter";
    s.innerHTML = "<i>🛵</i>";
    hero.appendChild(s);
})();

// 3) Mouse ke peeche sunehri roshni (FULL)
(function () {
    if (!FANCY || !canHover) return;
    const g = document.createElement("div");
    g.className = "cglow";
    document.body.appendChild(g);
    let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y, running = false;
    addEventListener("pointermove", e => {
        tx = e.clientX; ty = e.clientY; g.style.opacity = 1;
        if (!running) { running = true; requestAnimationFrame(f); }
    });
    document.addEventListener("mouseleave", () => { g.style.opacity = 0; });
    // Loop sirf tab chalta hai jab roshni ko hilna ho
    function f() {
        x += (tx - x) * .12;
        y += (ty - y) * .12;
        g.style.transform = `translate(${x}px,${y}px)`;
        if (Math.abs(tx - x) > .5 || Math.abs(ty - y) > .5) requestAnimationFrame(f);
        else running = false;
    }
})();

// 4) Search box mein khud type hota hua placeholder (SMOOTH + FULL)
(function () {
    const inp = $("search");
    if (!inp || !SMOOTH) return;
    const words = ["burger", "pizza", "biryani", "zinger", "chai", "fries"];
    let w = 0, c = 0, del = false;
    (function loop() {
        let d = 110;
        if (!document.hidden && view === "menu" && document.activeElement !== inp && !inp.value) {
            const word = words[w];
            c += del ? -1 : 1;
            inp.placeholder = "Search food: " + word.slice(0, c) + "|";
            if (!del && c === word.length) { del = true; d = 1200; }
            else if (del && c === 0) { del = false; w = (w + 1) % words.length; d = 300; }
        }
        setTimeout(loop, d);
    })();
})();

// 5) Header ke numbers ginti ki tarah chalte hain (Orders / Payment) (SMOOTH + FULL)
(function () {
    if (!SMOOTH) return;
    const _set = setStat;
    setStat = function (id, text) {
        const e = $(id);
        if (!e || id === "statStock" || e.textContent === text) return _set(id, text);
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

// 6) Panels: rows ek ek karke + stat numbers count-up (SMOOTH + FULL)
(function () {
    const _op = openPanel;
    openPanel = function (type) {
        _op(type);
        if (!SMOOTH) return;
        document.querySelectorAll("#panelBody .ptable tbody tr").forEach((r, i) => {
            r.style.animationDelay = Math.min(i, 12) * 40 + "ms";
        });
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

// 7) "Kyun BS Smart" cards mouse par 3D tilt (FULL)
(function () {
    if (!FANCY || !canHover) return;
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

// =========================================================
//  APNI MARZI KI ITEM + POORI ITEM HATANE KA BUTTON
// =========================================================

// Ye items sirf is order ke liye hoti hain, menu ya stock mein nahi jatin
const CUSTOM = {};
let customSeq = Date.now();
const isCustomId = id => Object.prototype.hasOwnProperty.call(CUSTOM, id);

// MENU.find ab custom items ko bhi dhoondh leta hai
const _findBase = Array.prototype.find;
MENU.find = function (fn, thisArg) {
    const r = _findBase.call(this, fn, thisArg);
    return r || _findBase.call(Object.values(CUSTOM), fn, thisArg);
};

function addCustom(name, price) {
    name = String(name || "").trim();
    if (!name) { toast("Please enter the item name"); return false; }
    if (!(price > 0)) { toast("Please enter a valid price"); return false; }

    // Wahi naam aur qeemat dobara likhi to quantity badh jaye
    const key = Object.keys(CUSTOM).find(k =>
        CUSTOM[k].name.toLowerCase() === name.toLowerCase() && CUSTOM[k].price === price);
    const id = key ? +key : ++customSeq;
    if (!key) CUSTOM[id] = { id, cat: "Special Order", name, desc: "", price, img: "", custom: true };

    cart[id] = (cart[id] || 0) + 1;
    renderCart();
    sfx("add");
    toast(name + " add ho gaya");
    return true;
}

// Custom item par +/- : stock ki koi hadd nahi, 0 hone par hat jaye
const _changeCustom = change;
change = function (id, d, btn) {
    if (isCustomId(id)) {
        cart[id] = (cart[id] || 0) + d;
        if (cart[id] <= 0) { delete cart[id]; delete CUSTOM[id]; }
        renderCart();
        return;
    }
    _changeCustom(id, d, btn);
};

// Order ke baad custom items ke stock ke nishan saaf karo
const _placeOrderCustom = placeOrder;
placeOrder = function () {
    _placeOrderCustom();
    Object.keys(CUSTOM).forEach(k => { delete stock[k]; });
    lsSet("bsStock", stock);
};

// Har line ke saath 🗑️ button
const _renderCartRm = renderCart;
renderCart = function () {
    _renderCartRm();
    document.querySelectorAll("#lines .line").forEach(line => {
        if (line.querySelector(".rm")) return;
        const first = line.querySelector(".qty button");
        if (!first) return;
        const b = document.createElement("button");
        b.type = "button";
        b.className = "rm";
        b.dataset.id = first.dataset.id;
        b.title = "Poori item hata dein";
        b.setAttribute("aria-label", "Remove item");
        b.textContent = "🗑️";
        line.appendChild(b);
    });
};

$("lines").addEventListener("click", e => {
    const b = e.target.closest(".rm");
    if (!b) return;
    const id = b.dataset.id;
    const m = MENU.find(x => x.id == id);
    delete cart[id];
    if (isCustomId(id)) delete CUSTOM[id];
    renderCart();
    toast(((m && m.name) || "Item") + " hata diya");
});

(function () {
    const box = document.createElement("details");
    box.className = "custom";
    box.innerHTML = `
    <summary>✍️ Add a custom item</summary>
    <p class="pnote">Add any special item to this order. Just type its name and price.</p>
    <div class="cust-row">
      <input id="cName" placeholder="Item name (e.g. Biryani)" autocomplete="off">
      <input id="cPrice" type="number" min="0" step="any" inputmode="decimal" placeholder="Rs.">
    </div>
    <button type="button" class="cbtn-warn" id="cAdd">➕ Add to order</button>`;
    $("upsell").after(box);

    const add = () => {
        if (addCustom($("cName").value, parseFloat($("cPrice").value))) {
            $("cName").value = "";
            $("cPrice").value = "";
            $("cName").focus();
        }
    };
    $("cAdd").onclick = add;
    [$("cName"), $("cPrice")].forEach(i => i.addEventListener("keydown", e => {
        if (e.key === "Enter" && !e.ctrlKey && !e.metaKey) { e.preventDefault(); add(); }
    }));
})();

// =========================================================
//  EK CLICK = EK ITEM (dobara judne se bachao)
// =========================================================
const GUARD_MS = 250;   // is waqt ke andar wahi item dobara add na ho
let lastAdd = { id: null, t: 0 };
const _changeGuard = change;
change = function (id, d, btn) {
    if (d > 0) {
        const now = performance.now();
        if (lastAdd.id == id && now - lastAdd.t < GUARD_MS) return;
        lastAdd = { id, t: now };
    }
    _changeGuard(id, d, btn);
};

// =========================================================
//  SPACE MODE: Dark mode mein stars, planets, black hole
//  (animation loop sirf dark mode mein chalta hai)
// =========================================================
(function () {
    const sp = document.createElement("div");
    sp.id = "space";
    sp.innerHTML = `
    <canvas></canvas>
    <div class="pl jupiter"></div>
    <div class="pl mars"></div>
    <div class="pl venus"></div>
    <div class="pl neptune"></div>
    <div class="pl saturn"></div>
    <div class="earthsys"><div class="earth"></div><div class="moonorb"><i></i></div></div>
    <div class="pl blackhole"></div>`;
    document.body.prepend(sp);

    const cv = sp.querySelector("canvas"), c = cv.getContext("2d");
    const isDark = () => document.body.classList.contains("dark");
    let W, H, stars = [], shoot = null, raf = 0;

    function size() {
        W = cv.width = innerWidth;
        H = cv.height = innerHeight;
        const n = Math.min(LITE_MODE ? 120 : 260, Math.round(W * H / 7000));
        stars = Array.from({ length: n }, () => ({
            x: Math.random() * W, y: Math.random() * H,
            r: Math.random() * 1.4 + .2,
            ph: Math.random() * 6.28, sp: .5 + Math.random() * 1.5
        }));
        if (reduceMotion) paint(0);
    }

    function paint(now) {
        c.clearRect(0, 0, W, H);
        c.fillStyle = "#fff";
        stars.forEach(s => {
            c.globalAlpha = reduceMotion ? .8 : .35 + .65 * Math.abs(Math.sin(now / 1000 * s.sp + s.ph));
            c.beginPath();
            c.arc(s.x, s.y, s.r, 0, 7);
            c.fill();
        });

        // Toota hua tara (shooting star)
        if (!reduceMotion) {
            if (!shoot && Math.random() < .004) {
                shoot = { x: Math.random() * W * .8, y: Math.random() * H * .4, vx: 9, vy: 4, l: 1 };
            }
            if (shoot) {
                c.globalAlpha = shoot.l;
                c.strokeStyle = "#fff";
                c.lineWidth = 2;
                c.beginPath();
                c.moveTo(shoot.x, shoot.y);
                c.lineTo(shoot.x - shoot.vx * 7, shoot.y - shoot.vy * 7);
                c.stroke();
                shoot.x += shoot.vx;
                shoot.y += shoot.vy;
                shoot.l -= .02;
                if (shoot.l <= 0) shoot = null;
            }
        }
        c.globalAlpha = 1;
    }

    function frame(now) {
        raf = 0;
        if (!isDark()) return;                       // light mode: loop band
        if (!document.hidden && !document.body.classList.contains("printing")) paint(now);
        if (!reduceMotion) raf = requestAnimationFrame(frame);
    }

    function sync() { if (isDark() && !raf) raf = requestAnimationFrame(frame); }

    size();
    addEventListener("resize", size);
    new MutationObserver(sync).observe(document.body, { attributes: true, attributeFilter: ["class"] });
    sync();
})();

// =========================================================
//  DAY SKY: badal, parinde, ghubbare (SMOOTH + FULL)
// =========================================================
(function () {
    if (!SMOOTH) return;
    const d = document.createElement("div");
    d.id = "daysky";

    let html = `<div class="sun"></div>`;

    // Clouds: top %, size, speed, start delay
    const clouds = [[8, 1.2, 80, -10], [20, .8, 55, -35], [34, 1.5, 100, -60], [13, .6, 45, -5], [48, 1, 70, -50]];
    (FANCY ? clouds : clouds.slice(0, 3)).forEach(([t, s, du, dl]) => {
        html += `<div class="cloud" style="top:${t}%;--s:${s};--d:${du}s;--dl:${dl}s"></div>`;
    });

    if (FANCY) {
        // Birds
        const bird = `<svg viewBox="0 0 40 20"><path d="M2 14 Q10 0 20 12 Q30 0 38 14"/></svg>`;
        [[16, 26, -4], [22, 32, -14], [11, 38, -22], [28, 30, -9]].forEach(([t, du, dl]) => {
            html += `<div class="bird" style="top:${t}%;--d:${du}s;--dl:${dl}s">${bird}</div>`;
        });

        // Balloons
        [["🎈", 8, 44, -6, 70, 40], ["🎈", 55, 55, -28, -80, 34], ["🎈", 85, 48, -16, 40, 46]]
            .forEach(([e, l, du, dl, sw, fs]) => {
                html += `<div class="balloon" style="left:${l}%;--d:${du}s;--dl:${dl}s;--sw:${sw}px;--fs:${fs}px"><i>${e}</i></div>`;
            });
    }

    d.innerHTML = html;
    document.body.prepend(d);
})();

// =========================================================
//  NIGHT EXTRAS: astronaut, rocket, UFO, comet (rocket/UFO sirf FULL)
// =========================================================
(function () {
    const sp = document.getElementById("space");
    if (!sp) return;

    const a = document.createElement("div");
    a.className = "astro";
    a.textContent = "🧑‍🚀";
    sp.appendChild(a);

    if (!FANCY) return;

    function fly(kind, emoji) {
        const e = document.createElement("div");
        e.className = "fly " + kind;
        e.textContent = emoji;
        if (kind === "comet") e.style.right = (Math.random() * 40 - 10) + "%";
        if (kind === "rocket") e.style.left = (Math.random() * 40 - 5) + "%";
        if (kind === "ufo") e.style.top = (10 + Math.random() * 40) + "%";
        sp.appendChild(e);
        e.addEventListener("animationend", () => e.remove());
    }

    const active = () => document.body.classList.contains("dark") && !document.hidden;

    setInterval(() => { if (active()) fly("rocket", "🚀"); }, 17000);
    setInterval(() => { if (active()) fly("ufo", "🛸"); }, 29000);
    setInterval(() => { if (active() && Math.random() < .7) fly("comet", "☄️"); }, 9000);

    // Dark mode on karte hi kuch dikhao
    const obs = new MutationObserver(() => {
        if (document.body.classList.contains("dark")) setTimeout(() => fly("comet", "☄️"), 800);
    });
    obs.observe(document.body, { attributes: true, attributeFilter: ["class"] });
})();

// =========================================================
//  WEATHER: Auto (asli mausam) ya apni marzi ka
// =========================================================
(function () {
    // Karachi (North Karachi) ki location, Auto mode ke liye
    const LAT = 24.98, LON = 67.06;

    const MODES = ["auto", "clear", "cloudy", "rain", "storm", "snow", "fog"];
    const ICON = { auto: "📡", clear: "☀️", cloudy: "☁️", rain: "🌧️", storm: "⛈️", snow: "❄️", fog: "🌫️" };
    const NAME = { auto: "Auto (asli mausam)", clear: "Saaf mausam", cloudy: "Badal", rain: "Baarish", storm: "Toofan", snow: "Barf", fog: "Dhund" };

    let mode = lsGet("bsWeather", "auto");
    if (!MODES.includes(mode)) mode = "auto";
    let live = "clear";

    const box = document.createElement("div");
    box.id = "weather";
    box.innerHTML = `<canvas></canvas><div class="fogl"></div><div class="flash"></div>`;
    document.body.appendChild(box);   // sab se aakhir mein, taake asmaan ke upar nazar aaye

    const cv = box.querySelector("canvas"), c = cv.getContext("2d");
    const flash = box.querySelector(".flash");
    let W = 0, H = 0, parts = [], running = false, boltT = null, raf = 0;
    const K = LITE_MODE ? .5 : 1;   // lite mode mein kam boondein / barf

    const eff = () => mode === "auto" ? live : mode;

    function size() {
        W = cv.width = innerWidth;
        H = cv.height = innerHeight;
        spawn();
    }

    function spawn() {
        const e = eff();
        parts = [];
        if (reduceMotion) return;
        if (e === "rain" || e === "storm") {
            const n = Math.round(Math.min(e === "storm" ? 420 : 240, Math.round(W * H / (e === "storm" ? 4500 : 8000))) * K);
            for (let i = 0; i < n; i++) parts.push({
                x: Math.random() * W, y: Math.random() * H,
                l: 10 + Math.random() * 14, v: 12 + Math.random() * 10
            });
        }
        if (e === "snow") {
            const n = Math.round(Math.min(180, Math.round(W * H / 11000)) * K);
            for (let i = 0; i < n; i++) parts.push({
                x: Math.random() * W, y: Math.random() * H,
                r: 1.5 + Math.random() * 3, v: .6 + Math.random() * 1.4,
                ph: Math.random() * 6.28, sw: .4 + Math.random() * .9
            });
        }
    }

    function draw(now) {
        if (!running) return;
        const e = eff(), dark = document.body.classList.contains("dark");
        c.clearRect(0, 0, W, H);
        const skip = document.hidden || document.body.classList.contains("printing");

        if ((e === "rain" || e === "storm") && !skip) {
            c.strokeStyle = dark ? "rgba(170,195,255,.55)" : "rgba(50,90,150,.55)";
            c.lineWidth = e === "storm" ? 1.6 : 1.2;
            c.beginPath();
            parts.forEach(p => {
                c.moveTo(p.x, p.y);
                c.lineTo(p.x - p.l * .2, p.y + p.l);
                p.y += p.v;
                p.x -= p.v * .2;
                if (p.y > H) { p.y = -20; p.x = Math.random() * (W + 120); }
                if (p.x < -20) p.x = W + 10;
            });
            c.stroke();
        }

        if (e === "snow" && !skip) {
            c.fillStyle = "#fff";
            parts.forEach(p => {
                p.y += p.v;
                p.x += Math.sin(now / 1000 * p.sw + p.ph) * .6;
                if (p.y > H + 6) { p.y = -8; p.x = Math.random() * W; }
                c.beginPath();
                c.arc(p.x, p.y, p.r, 0, 7);
                c.fill();
            });
        }
        raf = requestAnimationFrame(draw);
    }

    function lightning() {
        clearTimeout(boltT);
        if (eff() !== "storm" || reduceMotion) return;
        boltT = setTimeout(() => {
            if (!document.hidden) {
                flash.classList.remove("go");
                void flash.offsetWidth;
                flash.classList.add("go");
            }
            lightning();
        }, 3500 + Math.random() * 6000);
    }

    function apply() {
        const e = eff();
        document.body.dataset.weather = e;
        spawn();
        const needs = (e === "rain" || e === "storm" || e === "snow") && !reduceMotion;
        if (needs && !running) { running = true; raf = requestAnimationFrame(draw); }
        if (!needs) { running = false; cancelAnimationFrame(raf); c.clearRect(0, 0, W, H); }
        lightning();
        paint();
    }

    // Asli mausam (Open-Meteo, free)
    function getLive() {
        if (document.hidden) return;
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=weather_code&timezone=auto`)
            .then(r => r.json())
            .then(j => {
                const k = j.current.weather_code;
                live = k <= 1 ? "clear"
                    : k <= 3 ? "cloudy"
                        : (k === 45 || k === 48) ? "fog"
                            : (k >= 71 && k <= 77) || k === 85 || k === 86 ? "snow"
                                : k >= 95 ? "storm"
                                    : "rain";   // 51-67 aur 80-82 baarish
                if (mode === "auto") apply();
            })
            .catch(() => { });
    }

    // Header ka button
    const social = document.querySelector(".hb-in .social");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.id = "weatherBtn";
    btn.title = "Weather badlein";
    btn.setAttribute("aria-label", "Weather badlein");
    function paint() { btn.textContent = ICON[mode]; }
    btn.onclick = () => {
        mode = MODES[(MODES.indexOf(mode) + 1) % MODES.length];
        lsSet("bsWeather", mode);
        apply();
        toast(ICON[mode] + " " + NAME[mode] + (mode === "auto" ? ": " + NAME[live] : ""));
        sfx("fav");
    };
    if (social) social.insertBefore(btn, social.firstChild);

    size();
    addEventListener("resize", size);
    apply();
    getLive();
    setInterval(getLive, 30 * 60 * 1000);
})();

// Category tabs aur menu ek wrapper mein
(function () {
    if (document.querySelector(".menuwrap")) return;
    const wrap = document.createElement("div");
    wrap.className = "menuwrap";
    $("menu").before(wrap);
    wrap.append($("tabs"), $("menu"));
})();
// Active category bar ke andar nazar aaye (sirf bar scroll ho, poora page nahi)
$("tabs").addEventListener("click", () => {
    setTimeout(() => {
        const t = $("tabs");
        const a = t.querySelector(".tab[aria-pressed='true']");
        if (!a) return;
        const left = a.offsetLeft - (t.clientWidth - a.offsetWidth) / 2;
        t.scrollTo({ left, behavior: "smooth" });
    }, 0);
});

// Logo ghoomta hai: ek side logo, doosri side photo
(function () {
    // Photo in jagahon par dhoondi jati hai (pehli jo mile)
    const PHOTOS = [
        "assets/nabeel.jpeg",
        "assets/img/nabeel.jpeg",
        "assets/nabeel.jpg",
        "assets/img/nabeel.jpg"
    ];
    const wrap = $("logoWrap");
    if (!wrap) return;
    const logo = wrap.querySelector("img");
    if (!logo || wrap.querySelector(".flipper")) return;

    const flip = document.createElement("div");
    flip.className = "flipper";
    logo.before(flip);
    logo.classList.add("face", "front");
    flip.appendChild(logo);

    const back = document.createElement("img");
    back.className = "face back";
    back.alt = "";
    let ti = 0;
    back.onerror = () => {
        ti++;
        if (ti < PHOTOS.length) back.src = PHOTOS[ti];
        else {
            flip.classList.add("nophoto");   // photo na mile to sirf logo
            console.log("Photo nahi mili. Check karein: assets/nabeel.jpeg (naam ke chhote/bade letters bhi)");
        }
    };
    back.src = PHOTOS[0];
    flip.appendChild(back);

    // Dabane par: khud ghoomna ruk jata hai, phir har click par palatta hai
    wrap.addEventListener("click", () => {
        flip.classList.add("manual");
        flip.classList.toggle("flipped");
    });
})();

// Category bar: tabs + dono taraf arrow, sab ek hi sticky box ke andar
(function () {
    const wrap = document.querySelector(".menuwrap");
    const tabs = $("tabs");
    if (!wrap || !tabs || $("tabsbar")) return;

    const bar = document.createElement("div");
    bar.id = "tabsbar";
    bar.className = "tabsbar";
    tabs.before(bar);

    const mk = (cls, txt, label) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "tabarrow " + cls;
        b.textContent = txt;
        b.setAttribute("aria-label", label);
        return b;
    };
    const L = mk("tl", "‹", "Pichli categories");
    const R = mk("tr", "›", "Agli categories");
    bar.append(L, tabs, R);

    const step = () => Math.max(160, tabs.clientWidth * 0.6);
    L.onclick = () => tabs.scrollBy({ left: -step(), behavior: "smooth" });
    R.onclick = () => tabs.scrollBy({ left: step(), behavior: "smooth" });

    // Jahan scroll ki zarurat na ho wahan arrow dhundhle ho jayen
    function sync() {
        const max = tabs.scrollWidth - tabs.clientWidth;
        const none = max <= 2;
        L.classList.toggle("off", none || tabs.scrollLeft <= 2);
        R.classList.toggle("off", none || tabs.scrollLeft >= max - 2);
    }
    tabs.addEventListener("scroll", sync, { passive: true });
    addEventListener("resize", sync);
    new MutationObserver(sync).observe(tabs, { childList: true });
    sync();
    setTimeout(sync, 300);
    renderTabs();   // bar ab ban chuka hai, deals/menu ka chhupna sahi ho jaye
})();
