// =========================================================
//  SETTINGS (yahan se settings badlein)
// =========================================================
const RESTAURANT = {
    name: "BS Smart",
    sub: "Fast Food & Restaurant",
    address: "Sector 5-J, North Karachi, near Kala School",
    phone: "0345-2183819 / 0312-2029588"
};
const TAX_RATE = 0;              // 13% tax ke liye 0.13
const CURRENCY = "Rs.";
const DEFAULT_STOCK = 50;

const LITE_MODE = true;          // true = halka aur tez, false = saari animations
const PRINT_LOGO = true;         // slip par logo
const KITCHEN_ONE_SLIP = false;  // false = har category ki alag slip | true = sab ek slip par

// ====== PRINT SETTINGS ======
const PRINT_WIDTH_MM = 48;       // 58mm roll = 48, 80mm roll = 72
const PRINT_LEFT_MM = 0;
const PRINT_FONT_PX = 13;
const PRINT_WEIGHT = 400;        // 400 normal, 700 bold
const LOGO_THRESHOLD = 190;      // logo kala aaye to barhao, halka aaye to ghatao

// ====== BADA ORDER MEME ======
const BIG_ORDER_AMOUNT = 3000;   // is se zyada ke order par khaas meme (0 = band)
const BIG_ORDER_MEME = "Paisa He Paisa";

// Memes: name = jo toast mein dikhega, file = assets folder ki mp3
const MEMES = [
    { name: "Chin Tapak Dum Dum", file: "assets/chin_tapak_dum_dum.mp3" },
    { name: "Mujhay Anday Wala Burger", file: "assets/mujhay-anday-wala-burger.mp3" },
    { name: "Paisa He Paisa", file: "assets/paisa_he_paisa.mp3" },
    { name: "Ya Marhaba", file: "assets/ya_marhaba.mp3" }
];

// Starting menu (baad mein Manage Menu se badal sakte hain)
// Category "Deals" wale items sirf Deals view mein dikhte hain.
const DEFAULT_MENU = [
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

    { id: 12, cat: "EXTRAS", name: "Paratha (SMALL)", desc: "Yammi", price: 50, img: "" },
    { id: 13, cat: "EXTRAS", name: "Paratha (LARGE)", desc: "Yammi", price: 100, img: "" },
    { id: 14, cat: "EXTRAS", name: "Chapati", desc: "Yammi", price: 20, img: "" },

    { id: 15, cat: "BBQ", name: "Zinger Roll", desc: "Crispy chicken zinger roll", price: 150, img: "" },
    { id: 16, cat: "BBQ", name: "Zinger Jumbo Roll", desc: "Jumbo crispy chicken zinger roll", price: 250, img: "" },
    { id: 17, cat: "BBQ", name: "Boti Roll", desc: "Chicken boti roll", price: 150, img: "" },
    { id: 18, cat: "BBQ", name: "Kabab Roll", desc: "Chicken kabab roll", price: 150, img: "" },
    { id: 19, cat: "BBQ", name: "Chicken Roll", desc: "Chicken roll", price: 150, img: "" },
    { id: 20, cat: "BBQ", name: "Chicken Mayo Garlic Roll", desc: "Chicken roll with mayo garlic sauce", price: 150, img: "" },
    { id: 21, cat: "BBQ", name: "Chicken Malai Boti Roll", desc: "Creamy chicken malai boti roll", price: 150, img: "" },
    { id: 22, cat: "BBQ", name: "Chicken Crispy Roll", desc: "Crispy chicken roll", price: 150, img: "" },

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

    { id: 69, cat: "BBQ", name: "Broast (CHEST)", desc: "Crispy broast chest piece", price: 500, img: "" },
    { id: 70, cat: "BBQ", name: "Broast (LEG)", desc: "Crispy broast leg piece", price: 450, img: "" },

    { id: 71, cat: "Deals", name: "Deal 1", desc: "Half Kg Pulao (Sada), Leg Tikka, Bihari Boti (Half), Malai Boti (Half), Seekh Kabab (Half), Turkish Kabab (Half), 1 Ltr Drink, Raita", price: 1499, img: "" },
    { id: 72, cat: "Deals", name: "Deal 2", desc: "Bihari Boti (Half), Seekh Kabab (Half), Chicken Reshmi Kabab (Half), Chicken Tikka (Leg), 2 Paratha, 1 Ltr Drink, Raita", price: 1199, img: "" },
    { id: 73, cat: "Deals", name: "Deal 3", desc: "Afghani Boti (6 Seekh), Turkish Kabab (Half), 2 Paratha, 1 Ltr Drink, Raita", price: 850, img: "" },
    { id: 74, cat: "Deals", name: "Deal 4", desc: "Pulao (Half Kg), Tikka (Chest), 2 Drinks (300ml), Raita", price: 799, img: "" },

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
const isDeal = m => !!m && m.cat === "Deals";
const reduceMotion = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
const canHover = window.matchMedia && matchMedia("(hover:hover)").matches;
const FANCY = !LITE_MODE && !reduceMotion;   // sirf is mode mein bhari effects
document.body.classList.toggle("lite", LITE_MODE);

// =========================================================
//  STATE
// =========================================================
const MENU = JSON.parse(JSON.stringify(DEFAULT_MENU));
const savedMenu = lsGet("bsMenu", null);
if (Array.isArray(savedMenu) && savedMenu.length) MENU.splice(0, MENU.length, ...savedMenu);

const CUSTOM = {};               // sirf is order ki apni marzi ki items
let customSeq = Date.now();

let orders = lsGet("bsOrders", []);
let stock = lsGet("bsStock", {});
let favs = lsGet("bsFavs", []);
let soundOn = lsGet("bsSound", true);
let memeSel = lsGet("bsMemeSel", 0);      // number, "random" ya "off"
let cart = {};
let lastMeta = null;                       // last order (slips ke liye)
let view = "menu", cat = "All", q = "";
let prevIds = [];
let editId = null, formImg = "", curPanel = "", mq = "";
let orderTotalNow = 0, orderVisible = false;
let lastAdd = { id: null, t: 0 };

const itemById = id => CUSTOM[id] || MENU.find(m => m.id == id);
const stockOf = id => stock[id] ?? DEFAULT_STOCK;
const todayOrders = () => orders.filter(o => dayKey(o.t) === dayKey(Date.now()));
const cartCount = () => Object.values(cart).reduce((a, b) => a + b, 0);
const sumTotal = list => list.reduce((s, o) => s + o.total, 0);

function ensureStock() {
    MENU.forEach(m => { if (stock[m.id] === undefined) stock[m.id] = DEFAULT_STOCK; });
    lsSet("bsStock", stock);
}
ensureStock();

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
//  MEMES
// =========================================================
if (typeof memeSel === "number" && !MEMES[memeSel]) memeSel = 0;
let memeAudio = null;
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
function stopAllSound() {
    if (memeAudio) { try { memeAudio.pause(); memeAudio.currentTime = 0; } catch (e) { } }
    try { if ("speechSynthesis" in window) speechSynthesis.cancel(); } catch (e) { }
}
function playMeme() {
    if (!soundOn) return;
    let m = pickMeme();
    if (!m) return;
    if (BIG_ORDER_AMOUNT > 0 && orderTotalNow >= BIG_ORDER_AMOUNT) {
        const big = MEMES.find(x => x.name === BIG_ORDER_MEME);
        if (big) m = big;
    }
    stopAllSound();
    memeAudio = getMemeAudio(m.file);
    try { memeAudio.currentTime = 0; } catch (e) { }
    memeAudio.play().catch(err => console.log("Meme play nahi hui:", err));
}

// =========================================================
//  EFFECTS
// =========================================================
let toastTimer;
function toast(msg) {
    let t = $("toast");
    if (!t) { t = document.createElement("div"); t.id = "toast"; document.body.appendChild(t); }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 1500);
}

// Add button se cart icon tak chhota dot
function flyFrom(rect) {
    const target = $("navCount");
    if (reduceMotion || !rect || !target) return;
    const b = target.getBoundingClientRect();
    const dot = document.createElement("div");
    dot.className = "flydot";
    dot.style.cssText = `position:fixed;width:16px;height:16px;border-radius:50%;background:#f5b800;z-index:70;pointer-events:none;transition:transform .5s ease-in,opacity .5s;left:${rect.left + rect.width / 2 - 8}px;top:${rect.top + rect.height / 2 - 8}px`;
    document.body.appendChild(dot);
    requestAnimationFrame(() => requestAnimationFrame(() => {
        dot.style.transform = `translate(${b.left - rect.left}px, ${b.top - rect.top}px) scale(.3)`;
        dot.style.opacity = "0";
    }));
    setTimeout(() => dot.remove(), 600);
}

function confetti() {
    if (reduceMotion) return;
    const cols = ["#f5b800", "#0d0d0d", "#ffffff", "#1b7a2f", "#e5483b"];
    const n = LITE_MODE ? 16 : 40;
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
    if (FANCY) fireworks();
}

function fireworks() {
    const c = document.createElement("canvas");
    c.className = "fw";
    c.width = innerWidth;
    c.height = innerHeight;
    document.body.appendChild(c);
    const x = c.getContext("2d"), P = [];
    const boom = (bx, by) => {
        const col = `hsl(${Math.random() * 360},100%,60%)`;
        for (let i = 0; i < 60; i++) {
            const a = Math.PI * 2 * i / 60, v = 2 + Math.random() * 4;
            P.push({ x: bx, y: by, vx: Math.cos(a) * v, vy: Math.sin(a) * v, l: 1, col });
        }
    };
    [0, 350, 700].forEach(t => setTimeout(() => boom(c.width * (.2 + Math.random() * .6), c.height * (.15 + Math.random() * .35)), t));
    const end = performance.now() + 2400;
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

function setStat(id, text) {
    const e = $(id);
    if (!e || e.textContent === text) return;
    e.textContent = text;
    e.classList.remove("bump");
    void e.offsetWidth;
    e.classList.add("bump");
}

// =========================================================
//  MENU / DEALS
// =========================================================
const catList = () => ["All", "__fav", ...new Set(MENU.filter(m => !isDeal(m)).map(m => m.cat))];
const catLabel = c => c === "__fav" ? "❤️ Favourites" : c;
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

function renderTabs() {
    const box = $("tabs");
    box.style.display = view === "deals" ? "none" : "";
    const cats = catList();
    if (!cats.includes(cat)) cat = "All";
    box.innerHTML = cats.map(c =>
        `<button class="tab" aria-pressed="${c === cat}" data-c="${esc(c)}">${esc(catLabel(c))}</button>`).join("");
}

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

function cardHTML(m, i) {
    const s = stockOf(m.id), sold = s <= 0, fav = favs.includes(m.id), n = cart[m.id] || 0;
    return `<article class="item${isDeal(m) ? " deal" : ""}${sold ? " sold" : ""}" style="animation-delay:${Math.min(i, 14) * 40}ms">
      ${isDeal(m) ? "" : `<button class="fav${fav ? " on" : ""}" data-id="${m.id}" aria-pressed="${fav}" aria-label="Favourite">${fav ? "♥" : "♡"}</button>`}
      ${m.img ? `<img class="em" src="${esc(m.img)}" alt="" loading="lazy" onerror="this.style.display='none'">` : ""}
      <h3>${esc(m.name)}</h3>
      <p>${esc(m.desc || "")}</p>
      ${!sold && s <= 5 ? `<span class="lowtag">Only ${s} left</span>` : ""}
      <div class="row">
        <span class="price">${fmt(m.price)}</span>
        <button class="add" data-id="${m.id}"${sold ? " disabled" : ""}>${sold ? "Sold out" : "Add"}</button>
      </div>
      ${n ? `<span class="inbag">×${n}</span>` : ""}
    </article>`;
}

function renderSpecial() {
    const box = $("special");
    const deals = MENU.filter(m => isDeal(m) && stockOf(m.id) > 0);
    if (view !== "deals" || !deals.length || q) { box.className = "special"; box.innerHTML = ""; return; }
    const m = deals[Math.floor(Date.now() / 864e5) % deals.length];   // roz ek alag deal
    box.className = "special show";
    box.innerHTML = `
    <div class="sp-l"><small>⭐ TODAY'S SPECIAL DEAL</small><h3>${esc(m.name)}</h3><p>${esc(m.desc || "")}</p></div>
    <div class="sp-r"><span class="price">${fmt(m.price)}</span><button class="add" data-id="${m.id}">Add</button></div>`;
}

function renderBest() {
    const box = $("best");
    if (!box) return;
    const cnt = {};
    orders.forEach(o => o.items.forEach(i => { cnt[i.id] = (cnt[i.id] || 0) + i.q; }));
    const top = Object.entries(cnt).sort((a, b) => b[1] - a[1])
        .map(([id, n]) => ({ m: MENU.find(x => x.id == id), n }))
        .filter(x => x.m && !isDeal(x.m) && stockOf(x.m.id) > 0)
        .slice(0, 3);
    box.innerHTML = view === "menu" && !q && top.length
        ? `<p class="up-t">🏆 Best sellers</p><div class="chips">${top.map(({ m, n }) =>
            `<button type="button" class="chip" data-id="${m.id}">${esc(m.name)} <b>${n} sold</b></button>`).join("")}</div>`
        : "";
}

function renderMenu() {
    const list = visibleItems();
    const nDeals = MENU.filter(isDeal).length;
    $("cntMenu").textContent = MENU.length - nDeals;
    $("cntDeals").textContent = nDeals;

    const empty = view === "deals" && !nDeals ? "No deals right now."
        : view === "menu" && cat === "__fav" && !q ? "No favourites yet. Tap ❤️ on any item."
            : "No items found. Try another name.";

    $("menu").innerHTML = list.length
        ? list.map((m, i) => cardHTML(m, i)).join("")
        : `<div class="no-result">${empty}</div>`;
    renderSpecial();
    renderBest();
}

// Cart ke hisaab se cards par ×2 wale badge (poora grid dobara nahi banta)
function paintBags() {
    document.querySelectorAll("#menu .item .add[data-id]").forEach(b => {
        const it = b.closest(".item");
        const n = cart[b.dataset.id] || 0;
        let tag = it.querySelector(".inbag");
        if (!n) { if (tag) tag.remove(); return; }
        if (!tag) { tag = document.createElement("span"); tag.className = "inbag"; it.appendChild(tag); }
        tag.textContent = "×" + n;
    });
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

// =========================================================
//  CART
// =========================================================
function change(id, d, btn) {
    const m = itemById(id);
    if (!m) return;
    const custom = !!CUSTOM[id];
    const have = cart[id] || 0;

    if (d > 0) {
        // ek click = ek item (double click se bachao)
        const now = performance.now();
        if (lastAdd.id == id && now - lastAdd.t < 250) return;
        lastAdd = { id, t: now };
        if (!custom && have >= stockOf(id)) { toast(m.name + " sirf " + stockOf(id) + " bacha hai"); return; }
    }

    const rect = btn ? btn.getBoundingClientRect() : null;
    cart[id] = have + d;
    if (cart[id] <= 0) { delete cart[id]; if (custom) delete CUSTOM[id]; }
    renderCart();

    if (d > 0) {
        sfx("add");
        toast(m.name + " added");
        if (btn) {
            flyFrom(rect);
            btn.classList.add("added");
            const old = btn.textContent;
            btn.textContent = "✓";
            setTimeout(() => { btn.textContent = old; btn.classList.remove("added"); }, 600);
        }
        const o = $("order");
        o.classList.add("glow");
        setTimeout(() => o.classList.remove("glow"), 400);
    }
}

function totals() {
    const sub = Object.entries(cart).reduce((s, [id, n]) => s + ((itemById(id) || { price: 0 }).price * n), 0);
    const dv = Math.max(parseFloat(val("disc")) || 0, 0);
    const isPct = (val("discType") || "%") === "%";
    const disc = isPct ? sub * Math.min(dv, 100) / 100 : Math.min(dv, sub);
    const after = sub - disc;
    const tax = after * TAX_RATE;
    const del = val("type") === "Delivery" ? Math.max(parseFloat(val("delFee")) || 0, 0) : 0;
    return { sub, disc, val: dv, isPct, tax, del, total: after + tax + del };
}

function renderUpsell() {
    const box = $("upsell");
    if (!box) return;
    if (!cartCount()) { box.innerHTML = ""; return; }
    const hasCat = c => Object.keys(cart).some(id => (itemById(id) || {}).cat === c);
    const pool = [];
    ["Drinks", "EXTRAS"].filter(c => !hasCat(c)).forEach(c => {
        MENU.filter(m => m.cat === c && !cart[m.id] && stockOf(m.id) > 0)
            .slice(0, 2).forEach(m => pool.push(m));
    });
    const list = pool.slice(0, 3);
    box.innerHTML = list.length
        ? `<p class="up-t">😋 Add these too</p><div class="chips">${list.map(m =>
            `<button type="button" class="chip" data-id="${m.id}">+ ${esc(m.name)} <b>${fmt(m.price)}</b></button>`).join("")}</div>`
        : "";
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
        const m = itemById(id), n = cart[id];
        if (!m) return "";
        return `<div class="line${prevIds.includes(id) ? "" : " new"}">
      <span>${esc(m.name)}</span>
      <span class="qty">
        <button data-id="${id}" data-d="-1" aria-label="Decrease">−</button>${n}
        <button data-id="${id}" data-d="1" aria-label="Increase">+</button>
      </span>
      <span>${fmt(m.price * n)}</span>
      <button class="rm" data-id="${id}" title="Poori item hata dein" aria-label="Remove item">🗑️</button>
    </div>`;
    }).join("") : `<div class="empty">No items yet. Tap "Add" on the menu.</div>`;

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
        if (nc.textContent !== String(count)) {
            nc.textContent = count;
            nc.classList.remove("bump"); void nc.offsetWidth; nc.classList.add("bump");
        }
    }
    prevIds = ids;
    renderUpsell();
    renderChange();
    updateCartbar(count);
    paintBags();
}

function resetOrder() {
    cart = {};
    prevIds = [];
    Object.keys(CUSTOM).forEach(k => delete CUSTOM[k]);
    setVal("disc", "");
    setVal("discType", "Rs");
    setVal("delFee", "");
    setVal("paid", "");
    renderCart();
}

// =========================================================
//  RECEIPT / SLIPS
// =========================================================
function nextOrderNo() {
    let n;
    try {
        n = (parseInt(localStorage.getItem("bsOrderNo")) || 0) + 1;
        localStorage.setItem("bsOrderNo", n);
    } catch (e) {
        n = Date.now() % 100000;
    }
    return String(n).padStart(4, "0");
}

// Customer slip: sab items, total (rasid)
function customerSlip(meta, logo) {
    const t = meta.t;
    const rows = meta.lines.map(l =>
        `<div class="r"><span>${l.n} x ${esc(l.m.name)}</span><span>${fmt(l.m.price * l.n)}</span></div>`).join("");
    return `${logo ? `<img class="logo" src="${logo}" alt="">` : ""}
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

// Kitchen slips: har category ki alag slip (ya KITCHEN_ONE_SLIP true ho to ek hi)
function kitchenSlips(meta) {
    const groups = {}, order = [];
    meta.lines.forEach(l => {
        const c = l.m.cat;
        if (!groups[c]) { groups[c] = []; order.push(c); }
        groups[c].push(l);
    });

    const head = `<div class="c big">Order # ${meta.no}</div>
      <div class="c">${meta.dt} · ${meta.tm}</div>
      <div class="c">${esc(meta.type)}</div>
      <hr>`;

    const lineHTML = l => l.m.custom
        ? `<div class="r k-item"><span>${l.n} x ${esc(l.m.name)}</span><span>${fmt(l.m.price * l.n)}</span></div>`
        : `<div class="k-item">${l.n} x ${esc(l.m.name)}</div>${isDeal(l.m) && l.m.desc ? `<div class="k-desc">${esc(l.m.desc)}</div>` : ""}`;

    if (KITCHEN_ONE_SLIP) {
        return [head + order.map(c =>
            `<div class="c k-cat">${esc(c.toUpperCase())}</div>${groups[c].map(lineHTML).join("")}<hr>`).join("")];
    }
    return order.map(c =>
        head + `<div class="c k-cat">${esc(c.toUpperCase())}</div><hr>${groups[c].map(lineHTML).join("")}`);
}

function buildSlips(meta, logo) {
    return [customerSlip(meta, logo), ...kitchenSlips(meta)];
}

// Logo ko chhota aur black & white bana kar rakh lete hain (ek hi baar)
let logoData = "";
function prepareLogo() {
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
        } catch (e) { }
    };
    im.src = "assets/img/logo.jpeg";
}
if (PRINT_LOGO) prepareLogo();

function printCSS() {
    return `
    @page { size: ${PRINT_WIDTH_MM}mm auto; margin: 0; }
    html, body { margin: 0; padding: 0; background: #fff; }
    body { width: ${PRINT_WIDTH_MM}mm; padding-left: ${PRINT_LEFT_MM}mm; font-family: Arial, Helvetica, sans-serif;
           font-size: ${PRINT_FONT_PX}px; font-weight: ${PRINT_WEIGHT}; color: #000; }
    .slip { width: 100%; padding: 2mm 0; page-break-after: always; break-after: page; }
    .slip:last-child { page-break-after: auto; break-after: auto; }
    h2 { text-align: center; margin: 2px 0; font-size: 1.3em; }
    hr { border: 0; border-top: 1px dashed #000; margin: 4px 0; }
    .r { display: flex; justify-content: space-between; gap: 6px; }
    .r span:first-child { flex: 1; min-width: 0; overflow-wrap: anywhere; }
    .r span:last-child { white-space: nowrap; }
    .c { text-align: center; }
    .b { font-weight: 700; font-size: 1.15em; }
    .big { font-size: 1.4em; font-weight: 700; }
    .tag { font-size: .85em; margin-top: 4px; }
    .logo { display: block; margin: 0 auto 3px; width: 24mm; max-width: 100%; border-radius: 50%; }
    .k-cat { font-size: 1.1em; font-weight: 800; margin: 4px 0; }
    .k-item { font-size: 1.2em; font-weight: 700; margin: 3px 0; }
    .k-desc { font-size: .85em; margin: 0 0 4px 8px; }`;
}

function getPrintFrame() {
    let f = document.getElementById("printFrame");
    if (!f) {
        f = document.createElement("iframe");
        f.id = "printFrame";
        f.style.cssText = "position:fixed;left:0;top:0;width:1px;height:1px;border:0;opacity:0;pointer-events:none";
        document.body.appendChild(f);
    }
    return f;
}

// Har slip alag page par print hoti hai (thermal printer par alag tukda)
function printSlips(slips) {
    const f = getPrintFrame();
    const d = f.contentWindow.document;
    d.open();
    d.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Receipt</title><style>${printCSS()}</style></head><body>${slips.map(s => `<div class="slip">${s}</div>`).join("")}</body></html>`);
    d.close();
    setTimeout(() => {
        try { f.contentWindow.focus(); f.contentWindow.print(); }
        catch (e) { toast("Print nahi hua, dobara try karein"); }
    }, 120);
}

function printReceipt() {
    if (!lastMeta) { toast("No order to print"); return; }
    printSlips(buildSlips(lastMeta, PRINT_LOGO ? logoData : ""));
}

// =========================================================
//  ORDER PLACE
// =========================================================
function placeOrder() {
    if (!cartCount()) return;
    const snap = { ...cart }, t = totals(), no = nextOrderNo(), now = new Date();
    const dt = now.toLocaleDateString("en-GB");
    const tm = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
    const type = val("type") || "Dine-in";

    lastMeta = {
        no, dt, tm, type, t,
        paid: parseFloat(val("paid")) || 0,
        lines: Object.entries(snap).map(([id, n]) => ({ id, n, m: { ...itemById(id) } })),
        items: Object.entries(snap).map(([id, n]) => ({ id: +id, name: itemById(id).name, q: n }))
    };

    orders.push({ no, t: Date.now(), total: t.total, disc: t.disc, type, items: lastMeta.items });
    lastMeta.lines.forEach(l => {
        if (!CUSTOM[l.id]) stock[l.id] = Math.max(0, stockOf(l.id) - l.n);
    });
    lsSet("bsOrders", orders);
    lsSet("bsStock", stock);

    $("receipt").innerHTML = buildSlips(lastMeta, PRINT_LOGO ? "assets/img/logo.jpeg" : "")
        .map(s => `<div class="slip">${s}</div>`).join("");
    $("overlay").classList.add("show");
    orderTotalNow = t.total;

    setTimeout(printReceipt, 0);                                  // pehle print
    setTimeout(() => { sfx("order"); playMeme(); }, 30);          // phir awaz
    updateStats();
    confetti();
}

// =========================================================
//  STATS
// =========================================================
function updateStats() {
    const to = todayOrders();
    setStat("statOrders", String(to.length));
    setStat("statPay", fmt(sumTotal(to)));
    const low = MENU.filter(m => stockOf(m.id) <= 5).length;
    const s = $("statStock");
    if (s) {
        setStat("statStock", low ? low + " low" : "OK");
        s.className = low ? "warn" : "";
    }
}

// =========================================================
//  REPORTS
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
    printSlips([`
    <h2>${esc(RESTAURANT.name)}</h2>
    <div class="c">TODAY'S REPORT<br>${new Date().toLocaleDateString("en-GB")}</div>
    <hr>
    <div class="r"><span>Total orders</span><span>${to.length}</span></div>
    <div class="r"><span>Discount</span><span>${fmt(to.reduce((s, o) => s + o.disc, 0))}</span></div>
    <div class="r b"><span>TOTAL SALE</span><span>${fmt(sumTotal(to))}</span></div>
    <hr>${types}<hr>
    <div class="c">Items sold</div>
    ${items || '<div class="c">No orders yet</div>'}`]);
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

// =========================================================
//  PANELS: Orders / Payment / Stock / Manage Menu
// =========================================================
function openPanel(type) {
    curPanel = type;
    if (type === "menu") { renderMenuEditor(); return; }

    const to = todayOrders();
    const clearBtns = `
      <div class="clear-box">
        <button type="button" class="btn-lite" data-act="printReport">🖨️ Print today's report</button>
        <button type="button" class="btn-lite" data-act="csv">📥 Excel (CSV) download</button>
        <button type="button" class="cbtn-warn" data-act="clearToday">Clear today's records</button>
        <button type="button" class="cbtn-danger" data-act="clearAll">Clear everything</button>
      </div>`;
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
      ${clearBtns}`;
    }

    if (type === "payment") {
        title = "Total Payment";
        const types = ["Dine-in", "Takeaway", "Delivery"].map(tp => {
            const l = to.filter(o => o.type === tp);
            return `<tr><td>${tp}</td><td class="num">${l.length}</td><td class="num">${fmt(sumTotal(l))}</td></tr>`;
        }).join("");
        const days = {};
        orders.forEach(o => {
            const k = dayKey(o.t);
            if (!days[k]) days[k] = { t: o.t, n: 0, sum: 0 };
            days[k].n++;
            days[k].sum += o.total;
        });
        const dayRows = Object.values(days).sort((a, b) => b.t - a.t).map(d => {
            const dt = new Date(d.t);
            return `<tr><td>${dt.getDate()}-${dt.getMonth() + 1}-${dt.getFullYear()}</td>
        <td class="num">${d.n}</td><td class="num">${fmt(d.sum)}</td></tr>`;
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
      ${clearBtns}`;
    }

    if (type === "stock") {
        title = "Stock";
        const rows = MENU.map(m => `<tr class="${stockOf(m.id) <= 5 ? "low" : ""}">
      <td>${esc(m.name)}</td><td>${esc(m.cat)}</td>
      <td class="num"><input type="number" min="0" data-sid="${m.id}" value="${stockOf(m.id)}" aria-label="${esc(m.name)} stock"></td></tr>`).join("");
        html = `<p class="pnote">Stock har order par khud kam hota hai. Naya maal aaye to number badal dein. 5 ya kam wale laal dikhte hain.</p>
      <div class="tblwrap"><table class="ptable"><thead><tr><th>Item</th><th>Category</th><th class="num">Stock</th></tr></thead><tbody>${rows}</tbody></table></div>
      <div class="clear-box">
        <button type="button" class="cbtn-warn" data-act="resetStock">Reset stock (every item ${DEFAULT_STOCK})</button>
      </div>`;
    }

    $("panelTitle").textContent = title;
    $("panelBody").innerHTML = html;
    $("panel").classList.add("show");
    $("panel").scrollTop = 0;
}

// ----- Menu editor -----
function saveMenu() {
    const ok = lsSet("bsMenu", MENU);
    if (!ok) alert("Menu save nahi ho saka (storage full). Chhoti photos use karein.");
    return ok;
}

function refreshMenuUI() {
    ensureStock();
    favs = favs.filter(id => MENU.find(m => m.id == id));
    lsSet("bsFavs", favs);
    Object.keys(cart).forEach(id => { if (!itemById(id)) delete cart[id]; });
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
        im.onerror = () => alert("Ye photo khul nahi saki. Doosri chunein.");
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
      <p class="pnote">Deal banane ke liye category mein <strong>Deals</strong> likhein.</p>
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
          <input id="mStock" type="number" min="0" value="${it ? stockOf(it.id) : DEFAULT_STOCK}">
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
    const list = MENU.filter(m => (m.name + " " + m.cat + " " + (m.desc || "")).toLowerCase().includes(mq));
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

    if (!name) { alert("Item ka naam likhein."); return; }
    if (!(price > 0)) { alert("Sahi price likhein."); return; }

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
    renderMenuEditor(wasEdit ? "Item save ho gaya." : "Naya item add ho gaya.");
}

function deleteItem(id) {
    const i = MENU.findIndex(m => m.id == id);
    if (i < 0) return;
    if (!confirm('"' + MENU[i].name + '" menu se hata diya jayega. Jari rakhein?')) return;
    MENU.splice(i, 1);
    delete cart[id];
    delete stock[id];
    lsSet("bsStock", stock);
    saveMenu();
    if (editId == id) { editId = null; formImg = ""; }
    refreshMenuUI();
    renderMenuEditor();
}

// Panel ke buttons (event delegation: ek hi listener)
$("panelBody").addEventListener("click", e => {
    const b = e.target.closest("[data-act]");
    if (!b) return;
    const act = b.dataset.act, id = b.dataset.id;

    if (act === "printReport") return printReport();
    if (act === "csv") return downloadCSV();
    if (act === "clearToday") {
        if (!confirm("Aaj ke sab orders aur payments clear ho jayenge. Pakka?")) return;
        orders = orders.filter(o => dayKey(o.t) !== dayKey(Date.now()));
        lsSet("bsOrders", orders); updateStats(); openPanel(curPanel); return;
    }
    if (act === "clearAll") {
        if (!confirm("Tamam records (orders aur payments) hamesha ke liye clear ho jayenge. Pakka?")) return;
        orders = [];
        try { localStorage.setItem("bsOrderNo", "0"); } catch (err) { }
        lsSet("bsOrders", orders); updateStats(); openPanel(curPanel); return;
    }
    if (act === "resetStock") {
        if (!confirm("Har item ka stock " + DEFAULT_STOCK + " ho jayega. Pakka?")) return;
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
        if (!confirm("Menu original par wapas aa jayega, aur aap ke add kiye items hat jayenge. Pakka?")) return;
        MENU.splice(0, MENU.length, ...JSON.parse(JSON.stringify(DEFAULT_MENU)));
        try { localStorage.removeItem("bsMenu"); } catch (err) { }
        editId = null;
        formImg = "";
        refreshMenuUI();
        renderMenuEditor("Menu original par reset ho gaya.");
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
document.addEventListener("click", e => {
    const b = e.target.closest("[data-panel]");
    if (b) openPanel(b.dataset.panel);
});

// =========================================================
//  EVENTS
// =========================================================
function syncDelivery() {
    const row = $("delRow");
    const isDel = val("type") === "Delivery";
    if (row) row.hidden = !isDel;
    if (!isDel) setVal("delFee", "");
    renderCart();
}
on("type", "change", syncDelivery);
on("delFee", "input", renderCart);
on("paid", "input", renderChange);
on("disc", "input", renderCart);
on("discType", "change", renderCart);

let searchT;
on("search", "input", () => {
    clearTimeout(searchT);
    searchT = setTimeout(() => { q = $("search").value.trim().toLowerCase(); renderMenu(); }, 150);
});

on("go", "click", placeOrder);
on("print", "click", printReceipt);
on("close", "click", () => {
    $("overlay").classList.remove("show");
    resetOrder();
    renderMenu();
});
on("clear", "click", resetOrder);

$("menu").addEventListener("click", e => {
    const f = e.target.closest(".fav");
    if (f) { toggleFav(+f.dataset.id, f); return; }
    const a = e.target.closest(".add");
    if (a && !a.disabled) change(+a.dataset.id, 1, a);
});
$("special").addEventListener("click", e => {
    const a = e.target.closest(".add");
    if (a) change(+a.dataset.id, 1, a);
});
$("best").addEventListener("click", e => {
    const c = e.target.closest(".chip");
    if (c) change(+c.dataset.id, 1, c);
});
$("upsell").addEventListener("click", e => {
    const c = e.target.closest(".chip");
    if (c) change(+c.dataset.id, 1, c);
});
$("lines").addEventListener("click", e => {
    const rm = e.target.closest(".rm");
    if (rm) {
        const id = rm.dataset.id;
        const m = itemById(id);
        delete cart[id];
        if (CUSTOM[id]) delete CUSTOM[id];
        renderCart();
        toast(((m && m.name) || "Item") + " hata diya");
        return;
    }
    const b = e.target.closest(".qty button");
    if (b) change(+b.dataset.id, +b.dataset.d);
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
on("menuBtn", "click", () => setView("menu", true));
on("dealsBtn", "click", () => setView("deals", true));

on("soundBtn", "click", () => {
    soundOn = !soundOn;
    lsSet("bsSound", soundOn);
    paintSound();
    if (!soundOn) stopAllSound();
    sfx("add");
    toast(soundOn ? "Sound on 🔊" : "Sound off 🔇");
});
paintSound();

// Apni marzi ki item (custom)
(function () {
    const box = document.createElement("details");
    box.className = "custom";
    box.innerHTML = `
    <summary>✍️ Apni marzi ki item</summary>
    <p class="pnote">Koi bhi special item is order mein add karein. Naam aur price likhein.</p>
    <div class="cust-row">
      <input id="cName" placeholder="Item ka naam (e.g. Biryani)" autocomplete="off">
      <input id="cPrice" type="number" min="0" step="any" inputmode="decimal" placeholder="Rs.">
    </div>
    <button type="button" class="cbtn-warn" id="cAdd">➕ Order mein add karein</button>`;
    $("upsell").after(box);

    const addCustom = () => {
        const name = $("cName").value.trim();
        const price = parseFloat($("cPrice").value);
        if (!name) { toast("Item ka naam likhein"); return; }
        if (!(price > 0)) { toast("Sahi price likhein"); return; }
        const key = Object.keys(CUSTOM).find(k =>
            CUSTOM[k].name.toLowerCase() === name.toLowerCase() && CUSTOM[k].price === price);
        const id = key ? +key : ++customSeq;
        if (!key) CUSTOM[id] = { id, cat: "Special Order", name, desc: "", price, img: "", custom: true };
        cart[id] = (cart[id] || 0) + 1;
        renderCart();
        sfx("add");
        toast(name + " add ho gaya");
        $("cName").value = "";
        $("cPrice").value = "";
        $("cName").focus();
    };
    $("cAdd").onclick = addCustom;
    [$("cName"), $("cPrice")].forEach(i => i.addEventListener("keydown", e => {
        if (e.key === "Enter") { e.preventDefault(); addCustom(); }
    }));
})();

// "Repeat last order" button
(function () {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "clear";
    b.textContent = "🔁 Repeat last order";
    b.onclick = () => {
        if (!lastMeta) { toast("Abhi koi pichla order nahi"); return; }
        lastMeta.lines.forEach(l => {
            if (CUSTOM[l.id] || !itemById(l.id)) return;
            cart[l.id] = Math.min((cart[l.id] || 0) + l.n, stockOf(l.id));
        });
        renderCart();
        sfx("add");
        toast("Pichla order wapas add ho gaya 🔁");
    };
    $("clear").after(b);
})();

// Best sellers box, tab, cart bar aur order box
const bestBox = $("best");
if (bestBox) bestBox.style.margin = "0 0 12px";

// =========================================================
//  HEADER BUTTONS: dark mode, meme, weather
// =========================================================
const socialBox = document.querySelector(".hb-in .social");

// Dark mode
(function () {
    document.body.classList.toggle("dark", !!lsGet("bsDark", false));
    if (!socialBox) return;
    const b = document.createElement("button");
    b.type = "button";
    b.id = "darkBtn";
    b.title = "Dark mode";
    b.setAttribute("aria-label", "Dark mode");
    const paint = () => { b.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙"; };
    b.onclick = () => {
        document.body.classList.toggle("dark");
        lsSet("bsDark", document.body.classList.contains("dark"));
        paint();
        sfx("fav");
    };
    paint();
    socialBox.insertBefore(b, socialBox.firstChild);
})();

// Meme button: har click par agla meme, phir Random, phir Band
(function () {
    if (!socialBox) return;
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
        memeSel = order[(order.indexOf(memeSel) + 1) % order.length];
        lsSet("bsMemeSel", memeSel);
        toast(label() + (soundOn ? "" : " (speaker band hai)"));
        playMeme();
    };
    socialBox.insertBefore(b, socialBox.firstChild);
})();

// Weather: Auto (asli mausam) ya apni marzi ka
(function () {
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
    document.body.appendChild(box);

    const cv = box.querySelector("canvas"), c = cv.getContext("2d");
    const flash = box.querySelector(".flash");
    let W = 0, H = 0, parts = [], running = false, boltT = null, raf = 0;
    const K = LITE_MODE ? .4 : 1;
    const eff = () => mode === "auto" ? live : mode;

    function spawn() {
        const e = eff();
        parts = [];
        if (reduceMotion) return;
        if (e === "rain" || e === "storm") {
            const n = Math.round(Math.min(e === "storm" ? 300 : 200, W * H / (e === "storm" ? 5000 : 8000)) * K);
            for (let i = 0; i < n; i++) parts.push({ x: Math.random() * W, y: Math.random() * H, l: 10 + Math.random() * 12, v: 12 + Math.random() * 8 });
        }
        if (e === "snow") {
            const n = Math.round(Math.min(160, W * H / 11000) * K);
            for (let i = 0; i < n; i++) parts.push({ x: Math.random() * W, y: Math.random() * H, r: 1.5 + Math.random() * 3, v: .6 + Math.random() * 1.2, ph: Math.random() * 6.28, sw: .4 + Math.random() * .8 });
        }
    }

    function draw(now) {
        if (!running) return;
        const e = eff(), dark = document.body.classList.contains("dark");
        c.clearRect(0, 0, W, H);
        if (e === "rain" || e === "storm") {
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
        if (e === "snow") {
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
        }, 4000 + Math.random() * 6000);
    }

    function apply() {
        const e = eff();
        document.body.dataset.weather = e;
        spawn();
        const needs = (e === "rain" || e === "storm" || e === "snow") && !reduceMotion;
        if (needs && !running) { running = true; raf = requestAnimationFrame(draw); }
        if (!needs) { running = false; cancelAnimationFrame(raf); c.clearRect(0, 0, W, H); }
        lightning();
        btn.textContent = ICON[mode];
    }

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
                                    : "rain";
                if (mode === "auto") apply();
            })
            .catch(() => { });
    }

    const btn = document.createElement("button");
    btn.type = "button";
    btn.id = "weatherBtn";
    btn.title = "Weather badlein";
    btn.setAttribute("aria-label", "Weather badlein");
    btn.onclick = () => {
        mode = MODES[(MODES.indexOf(mode) + 1) % MODES.length];
        lsSet("bsWeather", mode);
        apply();
        toast(ICON[mode] + " " + NAME[mode] + (mode === "auto" ? ": " + NAME[live] : ""));
        sfx("fav");
    };
    if (socialBox) socialBox.insertBefore(btn, socialBox.firstChild);

    function size() { W = cv.width = innerWidth; H = cv.height = innerHeight; spawn(); }
    size();
    addEventListener("resize", size);
    apply();
    getLive();
    setInterval(getLive, 30 * 60 * 1000);
})();

// =========================================================
//  SPACE (dark mode): stars, planets, astronaut
//  Lite mode mein ek hi baar draw hota hai (loop nahi)
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
    <div class="pl blackhole"></div>
    <div class="astro">🧑‍🚀</div>`;
    document.body.prepend(sp);

    const cv = sp.querySelector("canvas"), c = cv.getContext("2d");
    const isDark = () => document.body.classList.contains("dark");
    let W = 0, H = 0, stars = [], shoot = null, raf = 0;

    function size() {
        W = cv.width = innerWidth;
        H = cv.height = innerHeight;
        const n = Math.min(LITE_MODE ? 100 : 240, Math.round(W * H / 8000));
        stars = Array.from({ length: n }, () => ({
            x: Math.random() * W, y: Math.random() * H,
            r: Math.random() * 1.4 + .2, ph: Math.random() * 6.28, sp: .5 + Math.random() * 1.5
        }));
        paint(0);
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
        if (FANCY && shoot) {
            c.globalAlpha = shoot.l;
            c.strokeStyle = "#fff";
            c.lineWidth = 2;
            c.beginPath();
            c.moveTo(shoot.x, shoot.y);
            c.lineTo(shoot.x - shoot.vx * 7, shoot.y - shoot.vy * 7);
            c.stroke();
            shoot.x += shoot.vx; shoot.y += shoot.vy; shoot.l -= .02;
            if (shoot.l <= 0) shoot = null;
        }
        c.globalAlpha = 1;
    }

    function frame(now) {
        raf = 0;
        if (!isDark()) return;
        paint(now);
        if (FANCY && !document.hidden) raf = requestAnimationFrame(frame);
    }

    function sync() {
        if (!isDark()) return;
        if (FANCY) { if (!raf) raf = requestAnimationFrame(frame); }
        else paint(0);
    }

    size();
    addEventListener("resize", size);
    new MutationObserver(sync).observe(document.body, { attributes: true, attributeFilter: ["class"] });
    sync();

    if (FANCY) {
        const fly = (kind, emoji) => {
            const e = document.createElement("div");
            e.className = "fly " + kind;
            e.textContent = emoji;
            if (kind === "comet") e.style.right = (Math.random() * 40 - 10) + "%";
            if (kind === "ufo") e.style.top = (10 + Math.random() * 40) + "%";
            sp.appendChild(e);
            e.addEventListener("animationend", () => e.remove());
        };
        setInterval(() => { if (isDark() && !document.hidden) fly("rocket", "🚀"); }, 17000);
        setInterval(() => { if (isDark() && !document.hidden) fly("ufo", "🛸"); }, 29000);
        setInterval(() => { if (isDark() && !document.hidden && Math.random() < .6) fly("comet", "☄️"); }, 9000);
    }
})();

// =========================================================
//  HERO, TICKER, SPLASH, SCROLL, REVEAL, CLOCK
// =========================================================
(function () {
    const g = $("greet");
    if (g) {
        const h = new Date().getHours();
        g.textContent = h < 5 ? "Good night 🌙" : h < 12 ? "Good morning ☀️" : h < 16 ? "Lunch time 🍽️" : h < 19 ? "Good evening 🌇" : "Good night 🌙";
    }

    // Logo par 5 baar jaldi tap: surprise
    const wrap = $("logoWrap");
    let taps = 0, tapT;
    if (wrap) wrap.addEventListener("click", () => {
        taps++;
        clearTimeout(tapT);
        tapT = setTimeout(() => { taps = 0; }, 1500);
        if (taps >= 5) { taps = 0; confetti(); sfx("order"); toast("Good Food, Good Mood 😄"); }
    });

    const fl = $("floaters");
    if (fl && FANCY) {
        const em = ["🍔", "🍕", "🍟", "🌭", "🥤", "🍗", "🌮", "🍩"];
        for (let i = 0; i < 12; i++) {
            const s = document.createElement("span");
            s.textContent = em[i % em.length];
            s.style.left = (Math.random() * 96) + "%";
            s.style.fontSize = (18 + Math.random() * 22) + "px";
            s.style.animationDuration = (9 + Math.random() * 9) + "s";
            s.style.animationDelay = (-Math.random() * 14) + "s";
            fl.appendChild(s);
        }
    }

    const t = $("tickerTrack");
    if (t) {
        const items = ["🔥 Hot deals running now", "🍔 Fresh & piping hot", "🛵 Dine-in · Takeaway · Delivery", "⭐ Good Food, Good Mood"];
        const half = [].concat(items, items, items).map(s => `<span>${s}</span>`).join("");
        t.innerHTML = half + half;
    }

    const s = $("splash");
    if (s) {
        let seen = false;
        try { seen = sessionStorage.getItem("bsSplash") === "1"; sessionStorage.setItem("bsSplash", "1"); } catch (e) { }
        if (seen) s.remove();
        else setTimeout(() => { s.classList.add("hide"); setTimeout(() => s.remove(), 500); }, LITE_MODE ? 500 : 1200);
    }

    // Scroll progress, navbar shadow, back-to-top (ek frame mein ek baar)
    const navEl = document.querySelector(".nav");
    const prog = $("progress");
    const toTop = document.createElement("button");
    toTop.id = "toTop";
    toTop.type = "button";
    toTop.setAttribute("aria-label", "Upar jayein");
    toTop.textContent = "↑";
    toTop.onclick = () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    document.body.appendChild(toTop);

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
    onScroll();

    const rev = document.querySelectorAll(".sec-title,.vswitch,.search,.tabs,.foot-info,.foot-bottom");
    rev.forEach(el => el.classList.add("reveal"));
    const feats = $("features");
    const all = feats ? [...rev, feats] : [...rev];
    if (!("IntersectionObserver" in window)) all.forEach(el => el.classList.add("in"));
    else {
        const io = new IntersectionObserver(es => es.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        }), { threshold: .12 });
        all.forEach(el => io.observe(el));
        new IntersectionObserver(es => {
            orderVisible = es[0].isIntersecting;
            updateCartbar(cartCount());
        }, { threshold: .15 }).observe($("order"));
    }

    function tickClock() {
        if (document.hidden) return;
        const n = new Date();
        const ct = $("clockTime"), cd = $("clockDate");
        if (ct) ct.textContent = n.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });
        if (cd) cd.textContent = n.toLocaleDateString("en-GB", { weekday: "short", day: "2-digit", month: "short", year: "numeric" });
    }
    tickClock();
    setInterval(tickClock, 1000);
})();

// =========================================================
//  KEYBOARD, TITLE, FOOTER, FANCY EXTRAS
// =========================================================
document.addEventListener("keydown", e => {
    if (e.key === "Escape") closePanel();
    if (e.key === "/" && !/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) {
        e.preventDefault();
        $("search").focus();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter" && !$("go").disabled && !$("overlay").classList.contains("show")) placeOrder();
});

const baseTitle = document.title;
document.addEventListener("visibilitychange", () => {
    document.title = document.hidden ? "Come back 🍔 BS Smart" : baseTitle;
});

document.addEventListener("pointerdown", e => {
    if (navigator.vibrate && e.target.closest(".add:not(:disabled),.chip")) navigator.vibrate(15);
});

const yr = $("yr");
if (yr) yr.textContent = new Date().getFullYear();

// Sirf FANCY mode mein: mouse ke peeche emoji trail
if (FANCY && canHover) {
    const em = ["✨", "🍔", "🍕", "🍟", "⭐"];
    let last = 0;
    document.addEventListener("pointermove", e => {
        if (e.pointerType !== "mouse") return;
        const n = performance.now();
        if (n - last < 90) return;
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
}

// =========================================================
//  INITIAL RENDER
// =========================================================
setView("menu", false);
renderCart();
updateStats();
EOF_END_OF_SCRIPT_PLACEHOLDER_REMOVE_ME
