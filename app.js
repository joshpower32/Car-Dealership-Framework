/* =====================================================================
   Apex Auto — Car Dealership framework
   ---------------------------------------------------------------------
   Personalise for a client:
   • Brand/colours: :root tokens in styles.css + brand text in index.html.
   • Inventory: edit the VEHICLES array below.
   • Real photos: give a vehicle an `image:` path (e.g. "assets/civic.jpg")
     to override the Pexels placeholder — shoot the real cars on the lot.
   • Inquiry form: see inquiryForm handler — wire to email (Formspree) or
     Firebase. Finance calc is an estimate only.
   ===================================================================== */

const CONFIG = {
  heroQuery: "car dealership showroom",
  // === LEAD DELIVERY (set before selling) — free key at https://web3forms.com
  // Enter the client's email, paste the key here. Until set, the form opens the
  // visitor's email app as a fallback so no lead is lost.
  web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY",
  contactEmail: "sales@apexauto.example",
  businessName: "Apex Auto",
};

// id, year, make, model, body, price, km, fuel, trans, drivetrain, badge, query
const VEHICLES = [
  { id: "v1", year: 2021, make: "Toyota", model: "RAV4 XLE", body: "SUV", price: 32900, km: 41000, fuel: "Gas", trans: "Automatic", drive: "AWD", badge: "Certified", query: "toyota rav4 suv" },
  { id: "v2", year: 2019, make: "Honda", model: "Civic EX", body: "Sedan", price: 22500, km: 58000, fuel: "Gas", trans: "Automatic", drive: "FWD", query: "honda civic sedan" },
  { id: "v3", year: 2020, make: "Ford", model: "F-150 XLT", body: "Truck", price: 41800, km: 62000, fuel: "Gas", trans: "Automatic", drive: "4WD", query: "ford f150 truck" },
  { id: "v4", year: 2022, make: "Tesla", model: "Model 3", body: "Sedan", price: 44900, km: 18000, fuel: "Electric", trans: "Automatic", drive: "RWD", badge: "Low km", badgeAlt: true, query: "tesla model 3 car" },
  { id: "v5", year: 2018, make: "Jeep", model: "Wrangler Sport", body: "SUV", price: 34500, km: 71000, fuel: "Gas", trans: "Manual", drive: "4WD", query: "jeep wrangler" },
  { id: "v6", year: 2021, make: "Mazda", model: "CX-5 GS", body: "SUV", price: 29900, km: 39000, fuel: "Gas", trans: "Automatic", drive: "AWD", query: "mazda cx5 suv" },
  { id: "v7", year: 2020, make: "BMW", model: "330i xDrive", body: "Sedan", price: 36900, km: 44000, fuel: "Gas", trans: "Automatic", drive: "AWD", query: "bmw 3 series sedan" },
  { id: "v8", year: 2019, make: "Chevrolet", model: "Silverado LT", body: "Truck", price: 38200, km: 80000, fuel: "Gas", trans: "Automatic", drive: "4WD", query: "chevrolet silverado truck" },
  { id: "v9", year: 2023, make: "Hyundai", model: "Tucson Hybrid", body: "SUV", price: 33400, km: 12000, fuel: "Hybrid", trans: "Automatic", drive: "AWD", badge: "Low km", badgeAlt: true, query: "hyundai tucson suv" },
  { id: "v10", year: 2017, make: "Volkswagen", model: "Golf GTI", body: "Hatchback", price: 17900, km: 92000, fuel: "Gas", trans: "Manual", drive: "FWD", query: "volkswagen golf gti" },
  { id: "v11", year: 2022, make: "Audi", model: "Q5 Komfort", body: "SUV", price: 46500, km: 22000, fuel: "Gas", trans: "Automatic", drive: "AWD", query: "audi q5 suv" },
  { id: "v12", year: 2020, make: "Subaru", model: "Outback Touring", body: "Wagon", price: 31200, km: 55000, fuel: "Gas", trans: "Automatic", drive: "AWD", badge: "Sold", badgeSold: true, query: "subaru outback wagon" },
];

// --- Demo photos: pinned Pexels shots, keyed by each vehicle's `query` --
// Direct image URLs load with the page — no API call, no key, no pop-in.
// To change a photo: browse pexels.com, copy the image address, paste here.
const PEXELS_PHOTOS = {
  "toyota rav4 suv": { u: "https://images.pexels.com/photos/9598106/pexels-photo-9598106.jpeg", p: "Erik Mclean" },
  "honda civic sedan": { u: "https://images.pexels.com/photos/6794821/pexels-photo-6794821.jpeg", p: "Zachary Vessels" },
  "ford f150 truck": { u: "https://images.pexels.com/photos/33336584/pexels-photo-33336584.jpeg", p: "Charles Criscuolo" },
  "tesla model 3 car": { u: "https://images.pexels.com/photos/10029873/pexels-photo-10029873.jpeg", p: "I'm Zion" },
  "jeep wrangler": { u: "https://images.pexels.com/photos/17722340/pexels-photo-17722340.jpeg", p: "Vitali Adutskevich" },
  "mazda cx5 suv": { u: "https://images.pexels.com/photos/11157434/pexels-photo-11157434.jpeg", p: "Amar  Preciado" },
  "bmw 3 series sedan": { u: "https://images.pexels.com/photos/28522338/pexels-photo-28522338.jpeg", p: "HRK Gallery" },
  "chevrolet silverado truck": { u: "https://images.pexels.com/photos/9115472/pexels-photo-9115472.jpeg", p: "Jonathan Cooper" },
  "hyundai tucson suv": { u: "https://images.pexels.com/photos/19911371/pexels-photo-19911371.jpeg", p: "Hyundai Motor Group" },
  "volkswagen golf gti": { u: "https://images.pexels.com/photos/20809165/pexels-photo-20809165.jpeg", p: "FBO Media" },
  "audi q5 suv": { u: "https://images.pexels.com/photos/20220997/pexels-photo-20220997.jpeg", p: "Brandon Martinez" },
  "subaru outback wagon": { u: "https://images.pexels.com/photos/15928393/pexels-photo-15928393.jpeg", p: "Andrés  Chirrisco" },
  "car dealership showroom": { u: "https://images.pexels.com/photos/395537/pexels-photo-395537.jpeg", p: "David McBee" },
};
// Size an image via Pexels CDN params (w = target width in px)
const px = (u, w) => `${u}?auto=compress&cs=tinysrgb&w=${w}`;

const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const $ = (id) => document.getElementById(id);
const money = (n) => "$" + Math.round(n).toLocaleString("en-CA");
const kmFmt = (n) => n.toLocaleString("en-CA") + " km";
const title = (v) => `${v.year} ${v.make} ${v.model}`;

// --- SVG fallback (car silhouette) -------------------------------------
function carSVG(seed = 0) {
  const h = (seed * 41) % 360;
  return `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vehicle photo placeholder">
    <rect width="320" height="200" fill="hsl(${h},12%,88%)"/>
    <g fill="hsl(${h},10%,60%)">
      <path d="M40 130 q10 -38 46 -40 l70 -3 q30 0 52 26 l40 6 q22 4 22 22 v14 h-20 a22 22 0 0 0 -44 0 H128 a22 22 0 0 0 -44 0 H44 q-8 0 -8 -10 z"/>
    </g>
    <circle cx="106" cy="150" r="16" fill="hsl(${h},10%,35%)"/><circle cx="216" cy="150" r="16" fill="hsl(${h},10%,35%)"/>
  </svg>`;
}

// --- Vehicle imagery: real photo > pinned Pexels photo > SVG fallback ---
const vehImage = (v, w = 640) =>
  v.image || (PEXELS_PHOTOS[v.query] ? px(PEXELS_PHOTOS[v.query].u, w) : null);

function vehMedia(v, seed) {
  const url = vehImage(v);
  const credit = !v.image && PEXELS_PHOTOS[v.query]?.p;
  if (url) return `<img src="${esc(url)}" alt="${esc(title(v))}"${credit ? ` title="Photo: ${esc(credit)} / Pexels"` : ""} loading="lazy" onerror="this.outerHTML = carSVG(${seed})">`;
  return carSVG(seed);
}

// --- Hero background ----------------------------------------------------
function loadHero() {
  const ph = PEXELS_PHOTOS[CONFIG.heroQuery];
  if (ph) $("hero").style.backgroundImage = `url("${px(ph.u, 1600)}")`;
}

// --- Inventory: filter + sort + render ---------------------------------
const grid = $("vehicleGrid");
let activeBody = "All";
let sortMode = "featured";

function renderFilters() {
  const bodies = ["All", ...new Set(VEHICLES.map((v) => v.body))];
  const el = $("bodyFilters");
  el.innerHTML = bodies.map((b) => `<button class="filter-chip ${b === activeBody ? "active" : ""}" data-body="${b}">${esc(b)}</button>`).join("");
  el.querySelectorAll(".filter-chip").forEach((b) =>
    b.addEventListener("click", () => { activeBody = b.dataset.body; renderFilters(); renderGrid(); }));
}

function sortVehicles(list) {
  const s = [...list];
  if (sortMode === "price-asc") s.sort((a, b) => a.price - b.price);
  else if (sortMode === "price-desc") s.sort((a, b) => b.price - a.price);
  else if (sortMode === "km-asc") s.sort((a, b) => a.km - b.km);
  else if (sortMode === "year-desc") s.sort((a, b) => b.year - a.year);
  return s;
}

function renderGrid() {
  const list = sortVehicles(VEHICLES.filter((v) => activeBody === "All" || v.body === activeBody));
  grid.innerHTML = list.map((v, i) => {
    const badge = v.badge
      ? `<span class="v-badge ${v.badgeSold ? "sold" : v.badgeAlt ? "alt" : ""}">${esc(v.badge)}</span>` : "";
    return `
    <article class="vehicle-card" data-id="${v.id}" tabindex="0" role="button" aria-label="View ${esc(title(v))}">
      <div class="vehicle-media" data-id="${v.id}">${vehMedia(v, i + 1)}${badge}</div>
      <div class="vehicle-body">
        <h3 class="v-title">${esc(title(v))}</h3>
        <span class="v-price">${money(v.price)}</span>
        <div class="v-specs">
          <span>&#9201; ${kmFmt(v.km)}</span><span>&#9881; ${esc(v.trans)}</span>
          <span>&#9889; ${esc(v.fuel)}</span><span>&#128663; ${esc(v.drive)}</span>
        </div>
        <span class="btn btn-ghost btn-sm v-cta">View details</span>
      </div>
    </article>`;
  }).join("");
  grid.querySelectorAll(".vehicle-card").forEach((card) => {
    card.addEventListener("click", () => openVehicle(card.dataset.id));
    card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openVehicle(card.dataset.id); } });
  });
}

$("sortSelect").addEventListener("change", (e) => { sortMode = e.target.value; renderGrid(); });


// --- Vehicle detail modal ----------------------------------------------
const modal = $("vehicleModal");
function openVehicle(id) {
  const v = VEHICLES.find((x) => x.id === id);
  if (!v) return;
  $("vehicleModalBody").innerHTML = `
    <div class="vm-media">${vehMedia(v, 1)}</div>
    <div class="vm-body">
      <div class="vm-head">
        <h3>${esc(title(v))}</h3>
        <span class="vm-price">${money(v.price)}</span>
      </div>
      <div class="vm-specs">
        <div class="vm-spec"><b>Body</b><span>${esc(v.body)}</span></div>
        <div class="vm-spec"><b>Mileage</b><span>${kmFmt(v.km)}</span></div>
        <div class="vm-spec"><b>Fuel</b><span>${esc(v.fuel)}</span></div>
        <div class="vm-spec"><b>Transmission</b><span>${esc(v.trans)}</span></div>
        <div class="vm-spec"><b>Drivetrain</b><span>${esc(v.drive)}</span></div>
        <div class="vm-spec"><b>Year</b><span>${v.year}</span></div>
      </div>
      <p class="vm-desc">This ${v.year} ${esc(v.make)} ${esc(v.model)} has passed our 150-point inspection and is certified ready to drive. Book a no-pressure test drive or estimate your monthly payments.</p>
      <div class="vm-actions">
        <button class="btn btn-primary" id="vmInquire">Book a test drive</button>
        <button class="btn btn-ghost" id="vmFinance">Estimate payments</button>
      </div>
    </div>`;
  $("vmInquire").addEventListener("click", () => { closeVehicle(); $("inquiryVehicle").value = title(v); $("contact").scrollIntoView({ behavior: "smooth" }); });
  $("vmFinance").addEventListener("click", () => { closeVehicle(); $("cPrice").value = v.price; updateCalc(); $("finance").scrollIntoView({ behavior: "smooth" }); });
  modal.classList.add("open"); modal.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden";
}
function closeVehicle() { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; }
$("vehicleClose").addEventListener("click", closeVehicle);
modal.addEventListener("click", (e) => { if (e.target === modal) closeVehicle(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeVehicle(); });

// --- "Why buy from Apex" detail modal (reuses the vehicle modal shell) ---
const WHY = [
  { icon: "&#128270;", title: "150-point inspection", lead: "Every vehicle is fully inspected and safety-certified before it ever reaches the lot — so you drive away with confidence.",
    points: ["Full mechanical and safety inspection by licensed technicians", "Brakes, tires, suspension, fluids, battery and electronics all checked", "Ontario Safety Standard Certificate included with every sale", "Any required repairs completed before the vehicle is listed", "Inspection report available on request"] },
  { icon: "&#128176;", title: "Transparent pricing", lead: "The price you see is a fair, market-based price — no games, no pressure, no back-and-forth.",
    points: ["Every price benchmarked against current market data", "No hidden fees — taxes and licensing shown up front", "Free CARFAX history report on every vehicle", "Price drops shown openly so you know you’re getting value"] },
  { icon: "&#128203;", title: "Flexible financing", lead: "We work with multiple lenders to find a payment that fits your budget — all credit situations welcome.",
    points: ["Multiple banks and lenders competing for your business", "Good credit, bad credit, or first-time buyer — all considered", "Quick pre-approval, often the same day", "Flexible terms and down-payment options", "Use the payment calculator on this page to estimate first"] },
  { icon: "&#128666;", title: "Trade-ins welcome", lead: "Put the value of your current vehicle straight toward your next one and lower what you finance.",
    points: ["Fair, transparent appraisal based on real market value", "Trade value applied directly to your purchase", "We handle the paperwork and any remaining loan on your trade", "Don’t want to sell privately? We make it easy"] },
];
function openWhy(i) {
  const w = WHY[i];
  if (!w) return;
  $("vehicleModalBody").innerHTML = `
    <div class="vm-body why-modal">
      <div class="why-modal-head"><span class="why-modal-icon" aria-hidden="true">${w.icon}</span><h3>${esc(w.title)}</h3></div>
      <p class="vm-desc">${esc(w.lead)}</p>
      <ul class="why-modal-list">${w.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
      <div class="vm-actions">
        <button class="btn btn-primary" id="whyContact">Talk to our team</button>
        <button class="btn btn-ghost" id="whyBrowse">Browse inventory</button>
      </div>
    </div>`;
  $("whyContact").addEventListener("click", () => { closeVehicle(); $("contact").scrollIntoView({ behavior: "smooth" }); });
  $("whyBrowse").addEventListener("click", () => { closeVehicle(); $("inventory").scrollIntoView({ behavior: "smooth" }); });
  modal.classList.add("open"); modal.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden";
}
document.querySelectorAll(".why-card[data-why]").forEach((c) => {
  const open = () => openWhy(+c.dataset.why);
  c.addEventListener("click", open);
  c.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
});

// --- Finance calculator -------------------------------------------------
function updateCalc() {
  const price = +$("cPrice").value || 0;
  const down = +$("cDown").value || 0;
  const term = +$("cTerm").value;
  const rate = +$("cRate").value;
  $("cTermLabel").textContent = `${term} months`;
  $("cRateLabel").textContent = `${rate.toFixed(1)}%`;
  const principal = Math.max(price - down, 0);
  const r = rate / 100 / 12;
  const monthly = r === 0 ? principal / term : (principal * r) / (1 - Math.pow(1 + r, -term));
  $("cMonthly").textContent = money(isFinite(monthly) ? monthly : 0);
}
["cPrice", "cDown", "cTerm", "cRate"].forEach((id) => {
  $(id).addEventListener("input", updateCalc);
});

// --- Inquiry form -------------------------------------------------------
const KEY_PLACEHOLDER = "YOUR_WEB3FORMS_ACCESS_KEY";
$("inquiryForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const fd = new FormData(form);
  const firstName = String(fd.get("name") || "there").split(" ")[0];
  const btn = form.querySelector('button[type="submit"]');

  if (!CONFIG.web3formsKey || CONFIG.web3formsKey === KEY_PLACEHOLDER) {
    const subject = encodeURIComponent(`New vehicle inquiry — ${fd.get("name") || ""}`);
    const body = encodeURIComponent([...fd.entries()].filter(([k]) => k !== "botcheck").map(([k, v]) => `${k}: ${v}`).join("\n"));
    window.location.href = `mailto:${CONFIG.contactEmail}?subject=${subject}&body=${body}`;
    toast("Opening your email app to send your inquiry…");
    return;
  }

  fd.append("access_key", CONFIG.web3formsKey);
  fd.append("subject", `🔔 NEW LEAD — Vehicle inquiry from ${fd.get("name") || "website"}`);
  fd.append("from_name", CONFIG.businessName);
  btn.disabled = true; const orig = btn.textContent; btn.textContent = "Sending…";
  try {
    const res = await fetch("https://api.web3forms.com/submit", { method: "POST", headers: { Accept: "application/json" }, body: fd });
    const data = await res.json();
    if (res.ok && data.success) {
      form.reset();
      toast(`Thanks ${firstName} — we’ll be in touch within 1 business day!`);
      $("inquiryNote").textContent = "Inquiry sent ✓ — we’ll reply by email shortly.";
    } else { throw new Error(data.message || "Send failed"); }
  } catch (_) {
    toast(`Couldn’t send — please email ${CONFIG.contactEmail}.`);
    $("inquiryNote").textContent = `Something went wrong. Please email ${CONFIG.contactEmail} directly.`;
  } finally { btn.disabled = false; btn.textContent = orig; }
});

// --- Mobile nav + misc --------------------------------------------------
const navToggle = $("navToggle"), navLinks = $("navLinks");
navToggle.addEventListener("click", () => { const o = navLinks.classList.toggle("open"); navToggle.setAttribute("aria-expanded", o); });
navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => navLinks.classList.remove("open")));

let toastTimer;
function toast(msg) {
  const t = $("toast"); t.textContent = msg; t.hidden = false;
  requestAnimationFrame(() => t.classList.add("show"));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.classList.remove("show"); setTimeout(() => (t.hidden = true), 250); }, 3200);
}
$("year").textContent = new Date().getFullYear();
$("heroCount").textContent = VEHICLES.filter((v) => !v.badgeSold).length;

// --- Init ---------------------------------------------------------------
renderFilters();
renderGrid();
updateCalc();
loadHero();

