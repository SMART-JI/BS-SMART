const RESTAURANT = {
  name: "BS Smart",
  sub: "Fast Food & Restaurant",
  address: "Sector 5-J, North Karachi, near Kala School",
  phone: "0345-2183819 / 0312-2029588"
};
const TAX_RATE = 0; 
const CURRENCY = "Rs.";
 
const MENU = [
  {id:1,  cat:"Burgers", name:"Zinger Burger",         desc:"Crispy chicken fillet, mayo, lettuce",    price:450,  img:"assets/img/menu/zinger.jpg"},
  {id:2,  cat:"Burgers", name:"Beef Smash Burger",     desc:"Double patty, cheese, special sauce",     price:690,  img:"assets/img/menu/smash-burger.jpg"},
  {id:3,  cat:"Burgers", name:"Chicken Club Sandwich", desc:"Grilled chicken, egg, cheese, fries",     price:520,  img:"assets/img/menu/club-sandwich.jpg"},
  {id:4,  cat:"Pizza",   name:"Chicken Tikka Pizza",   desc:"Medium, tikka chunks and onion",          price:1250, img:"assets/img/menu/tikka-pizza.jpg"},
  {id:5,  cat:"Pizza",   name:"Fajita Pizza",          desc:"Medium, peppers, olives and cheese",      price:1250, img:"assets/img/menu/fajita-pizza.jpg"},
  {id:6,  cat:"Pizza",   name:"Pepperoni Pizza",       desc:"Medium, beef pepperoni, mozzarella",      price:1350, img:"assets/img/menu/pepperoni-pizza.jpg"},
  {id:7,  cat:"Snacks",  name:"Loaded Fries",          desc:"Fries with cheese sauce and chicken",     price:420,  img:"assets/img/menu/loaded-fries.jpg"},
  {id:8,  cat:"Snacks",  name:"Chicken Nuggets",       desc:"8 pieces with dip",                       price:380,  img:"assets/img/menu/nuggets.jpg"},
  {id:9,  cat:"Snacks",  name:"Crispy Wings",          desc:"6 pieces, hot or BBQ",                    price:450,  img:"assets/img/menu/wings.jpg"},
  {id:10, cat:"Desi",    name:"Chicken Tikka",         desc:"Charcoal-grilled, 2 pieces with chutney", price:480,  img:"assets/img/menu/chicken-tikka.jpg"},
  {id:11, cat:"Desi",    name:"Chicken Karahi (Half)", desc:"Tomato, ginger and green chilli",         price:1450, img:"assets/img/menu/karahi.jpg"},
  {id:12, cat:"Desi",    name:"Chicken Biryani",       desc:"With raita",                              price:520,  img:"assets/img/menu/biryani.jpg"},
  {id:13, cat:"Desi",    name:"Roghni Naan",           desc:"Tandoor-baked, sesame",                   price:70,   img:"assets/img/menu/naan.jpg"},
  {id:14, cat:"Drinks",  name:"Mint Margarita",        desc:"Mint, lemon, soda",                       price:250,  img:"assets/img/menu/margarita.jpg"},
  {id:15, cat:"Drinks",  name:"Doodh Patti Chai",      desc:"Kadak, made to order",                    price:120,  img:"assets/img/menu/chai.jpg"},
  {id:16, cat:"Drinks",  name:"Soft Drink (345ml)",    desc:"Cola, lemon-lime or orange",              price:100,  img:"assets/img/menu/soft-drink.jpg"},
  {id:17, cat:"Drinks",  name:"Chocolate Shake",       desc:"Thick and cold",                          price:350,  img:"assets/img/menu/shake.jpg"}
];
 
const $ = id => document.getElementById(id);
const val = id => { const e = $(id); return e ? e.value : ""; };
const setVal = (id, v) => { const e = $(id); if (e) e.value = v; };
const fmt = n => CURRENCY + " " + Math.round(n).toLocaleString("en-PK");
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 
let cart = {};
let cat = "All";
let q = "";
const cats = ["All", ...new Set(MENU.map(m => m.cat))];
 
function renderTabs(){
  $("tabs").innerHTML = cats.map(c =>
    `<button class="tab" aria-pressed="${c === cat}" data-c="${c}">${c}</button>`).join("");
  $("tabs").querySelectorAll(".tab").forEach(b => b.onclick = () => {
    cat = b.dataset.c;
    renderTabs();
    renderMenu();
  });
}
 
function renderMenu(){
  const list = MENU.filter(m =>
    (cat === "All" || m.cat === cat) &&
    (m.name + " " + m.desc + " " + m.cat).toLowerCase().includes(q)
  );
 
  $("menu").innerHTML = list.length ? list.map(m => `
    <article class="item">
      ${m.img ? `<img class="em" src="${esc(m.img)}" alt="" onerror="this.style.display='none'">` : ""}
      <h3>${esc(m.name)}</h3>
      <p>${esc(m.desc)}</p>
      <div class="row">
        <span class="price">${fmt(m.price)}</span>
        <button class="add" data-id="${m.id}">Add</button>
      </div>
    </article>`).join("") : `<div class="no-result">Koi item nahi mila. Koi aur naam try karein.</div>`;
 
  $("menu").querySelectorAll(".add").forEach(b => b.onclick = () => change(+b.dataset.id, 1));
}
 
function change(id, d){
  cart[id] = (cart[id] || 0) + d;
  if (cart[id] <= 0) delete cart[id];
  renderCart();
}
 
function totals(){
  const sub = Object.entries(cart).reduce(
    (s, [id, q]) => s + MENU.find(m => m.id == id).price * q, 0);
  const dv = Math.max(parseFloat(val("disc")) || 0, 0);
  const isPct = (val("discType") || "%") === "%";
  const disc = isPct ? sub * Math.min(dv, 100) / 100 : Math.min(dv, sub);
  const after = sub - disc;
  const tax = after * TAX_RATE;
  return {sub, disc, val: dv, isPct, tax, total: after + tax};
}
 
function renderCart(){
  const ids = Object.keys(cart);
 
  $("lines").innerHTML = ids.length ? ids.map(id => {
    const m = MENU.find(x => x.id == id), q = cart[id];
    return `<div class="line">
      <span>${esc(m.name)}</span>
      <span class="qty">
        <button data-id="${id}" data-d="-1" aria-label="Kam karein">−</button>${q}
        <button data-id="${id}" data-d="1" aria-label="Zyada karein">+</button>
      </span>
      <span>${fmt(m.price * q)}</span>
    </div>`;
  }).join("") : `<div class="empty">Abhi koi item nahi. Menu se "Add" dabayein.</div>`;
 
  $("lines").querySelectorAll(".qty button").forEach(b =>
    b.onclick = () => change(+b.dataset.id, +b.dataset.d));
 
  const t = totals();
  const showSub = t.disc > 0 || TAX_RATE > 0;
  $("totals").innerHTML = ids.length ? `
    ${showSub ? `<div class="tot"><span>Subtotal</span><span>${fmt(t.sub)}</span></div>` : ""}
    ${t.disc > 0 ? `<div class="tot off"><span>Discount${t.isPct ? " (" + t.val + "%)" : ""}</span><span>- ${fmt(t.disc)}</span></div>` : ""}
    ${TAX_RATE > 0 ? `<div class="tot"><span>Tax (${Math.round(TAX_RATE * 100)}%)</span><span>${fmt(t.tax)}</span></div>` : ""}
    <div class="tot big"><span>Total</span><span>${fmt(t.total)}</span></div>` : "";
 
  $("go").disabled = !ids.length;
  const nc = $("navCount");
  if (nc) nc.textContent = Object.values(cart).reduce((a, b) => a + b, 0);
}
 
function nextOrderNo(){
  let n = 1;
  try {
    n = (parseInt(localStorage.getItem("bsOrderNo")) || 0) + 1;
    localStorage.setItem("bsOrderNo", n);
  } catch (e) {
    n = Date.now() % 100000;
  }
  return String(n).padStart(4, "0");
}
 
function buildReceipt(){
  const t = totals(), now = new Date(), no = nextOrderNo();
  const rows = Object.entries(cart).map(([id, q]) => {
    const m = MENU.find(x => x.id == id);
    return `<div class="r"><span>${q} x ${esc(m.name)}</span><span>${fmt(m.price * q)}</span></div>`;
  }).join("");
 
  const date = now.toLocaleDateString("en-GB");
  const time = now.toLocaleTimeString("en-GB", {hour: "2-digit", minute: "2-digit"});
 
  $("receipt").innerHTML = `
    <img class="logo" src="logo.jpeg" alt="">
    <h2>${esc(RESTAURANT.name)}</h2>
    <div class="c">${esc(RESTAURANT.sub)}<br>${esc(RESTAURANT.address)}<br>Tel: ${esc(RESTAURANT.phone)}</div>
    <hr>
    <div class="r"><span>Order #</span><span>${no}</span></div>
    <div class="r"><span>Date</span><span>${date} ${time}</span></div>
    <div class="r"><span>Type</span><span>${esc(val("type") || "Dine-in")}</span></div>
    <hr>
    ${rows}
    <hr>
    ${(t.disc > 0 || TAX_RATE > 0) ? `<div class="r"><span>Subtotal</span><span>${fmt(t.sub)}</span></div>` : ""}
    ${t.disc > 0 ? `<div class="r"><span>Discount${t.isPct ? " (" + t.val + "%)" : ""}</span><span>- ${fmt(t.disc)}</span></div>` : ""}
    ${TAX_RATE > 0 ? `<div class="r"><span>Tax (${Math.round(TAX_RATE * 100)}%)</span><span>${fmt(t.tax)}</span></div>` : ""}
    <div class="r b"><span>TOTAL</span><span>${fmt(t.total)}</span></div>
    <hr>
    <div class="c">Good Food, Good Mood<br>Shukriya! Dobara tashreef layein.</div>`;
}
 
function printReceipt(){
  const html = $("receipt").innerHTML;
  const f = document.createElement("iframe");
  f.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0";
  document.body.appendChild(f);
 
  const d = f.contentWindow.document;
  d.open();
  d.write(`<html><head><title>Receipt</title><style>
    @page{margin:4mm}
    body{margin:0;width:72mm;font:13px/1.45 'Courier New',monospace;color:#000}
    h2{text-align:center;font-size:18px;margin:4px 0}
    .c{text-align:center}
    hr{border:0;border-top:1px dashed #000;margin:8px 0}
    .r{display:flex;justify-content:space-between;gap:8px}
    .b{font-weight:700;font-size:15px}
    .logo{display:block;width:70px;height:70px;border-radius:50%;margin:0 auto 6px;filter:grayscale(1)}
  </style></head><body>${html}</body></html>`);
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
 
function resetOrder(){
  cart = {};
  setVal("disc", "");
  renderCart();
}
 
// ====== Buttons ======
if ($("disc")) $("disc").oninput = renderCart;
if ($("discType")) $("discType").onchange = renderCart;
 
// ====== Search ======
if ($("search")) $("search").oninput = () => {
  q = $("search").value.trim().toLowerCase();
  renderMenu();
};
 
// Order dabate hi receipt dikhegi aur print dialog khulega
$("go").onclick = () => {
  buildReceipt();
  $("overlay").classList.add("show");
  setTimeout(printReceipt, 400);
};
 
$("print").onclick = printReceipt;
 
$("close").onclick = () => {
  $("overlay").classList.remove("show");
  resetOrder();
};
 
$("clear").onclick = resetOrder;
 
renderTabs();
renderMenu();
renderCart();
 
// ====== Live clock (navbar) ======
function tickClock(){
  const n = new Date();
  const t = $("clockTime"), d = $("clockDate");
  if (t) t.textContent = n.toLocaleTimeString("en-US", {hour:"2-digit", minute:"2-digit", second:"2-digit", hour12:true});
  if (d) d.textContent = n.toLocaleDateString("en-GB", {weekday:"short", day:"2-digit", month:"short", year:"numeric"});
}
tickClock();
setInterval(tickClock, 1000);
 







