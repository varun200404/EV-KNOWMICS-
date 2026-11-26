/* ==========================================================================
   EV KNOWMICS — HD Pixel-Art & Studio Fleet, Specs, Ratings, Promos & AI
   ========================================================================== */

let currentVisualMode = "pixel"; // "pixel" | "photo"

const EV_FLEET = [
  {
    id: "apex-gt",
    name: "Knowmics Apex GT",
    category: "sedan",
    badge: "Flagship Sedan",
    rating: "4.9",
    price: "$78,900",
    rangeKm: 820,
    accel: "1.98 s",
    charge: "12 min",
    battery: "120 kWh Solid-Core",
    power: "1,120 HP",
    drivetrain: "Tri-Motor AWD",
    image: "assets/pixel-apex-gt.jpg",
    photoImage: "assets/banner-apex-gt.jpg",
    desc: "Ultra-low 0.198 Cd aero performance sedan with 900V solid-core charging and torque vectoring.",
    bars: { range: 95, speed: 99, charge: 98, efficiency: 92 },
    groups: {
      "Powertrain": [
        ["Motors", "Tri-Motor Permanent Magnet"],
        ["Peak Output", "1,120 HP / 1,420 Nm"],
        ["0–100 km/h", "1.98 sec"],
        ["Top Speed", "322 km/h"]
      ],
      "Battery & Charging": [
        ["Pack Capacity", "120 kWh Solid-Core"],
        ["Architecture", "900V Silicon-Carbide"],
        ["10–80% DC", "12 min (350 kW peak)"],
        ["Home AC", "22 kW Onboard Charger"]
      ],
      "Aero & Chassis": [
        ["Drag Coefficient", "0.198 Cd Active Aero"],
        ["Suspension", "Dual-Chamber Air Ride"],
        ["Regen Braking", "320 kW One-Pedal"],
        ["Curb Weight", "2,110 kg"]
      ],
      "Safety & Cabin": [
        ["Autonomy", "L2+ 42 TOPS AI Core"],
        ["Glass Roof", "Electrochromic UV"],
        ["V2H Output", "9.6 kW Bidirectional"],
        ["Warranty", "8 Yr / 200,000 km"]
      ]
    }
  },
  {
    id: "terra-x",
    name: "Knowmics Terra X",
    category: "suv",
    badge: "Grand 7-Seat SUV",
    rating: "4.9",
    price: "$64,500",
    rangeKm: 740,
    accel: "3.1 s",
    charge: "15 min",
    battery: "118 kWh High-Density",
    power: "840 HP",
    drivetrain: "Dual-Motor AWD",
    image: "assets/pixel-terra-x.jpg",
    photoImage: "assets/banner-terra-x.jpg",
    desc: "Long-range electric SUV built for families, 3,500 kg towing, and 9.6 kW V2H home backup.",
    bars: { range: 86, speed: 88, charge: 92, efficiency: 85 },
    groups: {
      "Powertrain": [
        ["Motors", "Dual-Motor e-AWD"],
        ["Peak Output", "840 HP / 1,080 Nm"],
        ["0–100 km/h", "3.1 sec"],
        ["Towing Rating", "3,500 kg Braked"]
      ],
      "Battery & Charging": [
        ["Pack Capacity", "118 kWh NMC Thermal"],
        ["Architecture", "900V Fast Platform"],
        ["10–80% DC", "15 min (320 kW peak)"],
        ["Heat Pump", "Octagonal Cold-Weather"]
      ],
      "Space & Chassis": [
        ["Seating", "7 Adults (3-Row)"],
        ["Max Cargo", "2,180 Liters + 120L Frunk"],
        ["Clearance", "165–290 mm Air Lift"],
        ["Drag Coefficient", "0.220 Cd"]
      ],
      "Safety & Cabin": [
        ["Home Backup", "9.6 kW V2H / V2G"],
        ["Displays", "34-in Curved OLED"],
        ["Crash Rating", "5-Star Euro NCAP"],
        ["Warranty", "8 Yr / 200,000 km"]
      ]
    }
  },
  {
    id: "pulse-one",
    name: "Knowmics Pulse One",
    category: "compact",
    badge: "Urban Crossover",
    rating: "4.8",
    price: "$34,900",
    rangeKm: 560,
    accel: "5.4 s",
    charge: "18 min",
    battery: "76 kWh LFP",
    power: "310 HP",
    drivetrain: "RWD Efficiency",
    image: "assets/pixel-pulse-one.jpg",
    photoImage: "assets/banner-pulse-one.jpg",
    desc: "Smart daily commuter with $0.02/km energy cost, 3,000+ cycle LFP cells, and L2+ city co-pilot.",
    bars: { range: 70, speed: 74, charge: 84, efficiency: 99 },
    groups: {
      "Powertrain": [
        ["Motors", "High-Efficiency Rear Drive"],
        ["Peak Output", "310 HP / 440 Nm"],
        ["0–100 km/h", "5.4 sec"],
        ["Consumption", "12.8 kWh / 100 km"]
      ],
      "Battery & Charging": [
        ["Chemistry", "76 kWh Cobalt-Free LFP"],
        ["Daily Charge", "100% Recommended Daily"],
        ["10–80% DC", "18 min (220 kW peak)"],
        ["Cycle Life", "3,000+ Full Cycles"]
      ],
      "Urban Agility": [
        ["Turning Circle", "9.4 m Tight City Lock"],
        ["Length", "4,390 mm Compact"],
        ["Cargo Space", "510 L – 1,420 L"],
        ["Drag Coefficient", "0.235 Cd"]
      ],
      "Smart Features": [
        ["City Co-Pilot", "Auto-Park + Traffic Assist"],
        ["V2L Outlet", "3.6 kW Onboard AC"],
        ["Running Cost", "~$0.02 / km"],
        ["Warranty", "8 Yr / 200,000 km"]
      ]
    }
  },
  {
    id: "apex-gt-touring",
    name: "Apex GT Touring",
    category: "sedan",
    badge: "Executive GT",
    rating: "4.9",
    price: "$69,400",
    rangeKm: 860,
    accel: "2.8 s",
    charge: "13 min",
    battery: "120 kWh Aero Spec",
    power: "760 HP",
    drivetrain: "Dual-Motor AWD",
    image: "assets/pixel-promo-banner.jpg",
    photoImage: "assets/car-apex-touring.jpg",
    desc: "Maximum 860 km grand-touring endurance with acoustic laminated glass and adaptive air ride.",
    bars: { range: 100, speed: 90, charge: 96, efficiency: 96 },
    groups: {
      "Powertrain": [
        ["Motors", "Dual-Motor Touring AWD"],
        ["Peak Output", "760 HP / 920 Nm"],
        ["0–100 km/h", "2.8 sec"],
        ["WLTP Range", "860 km Best-in-Class"]
      ],
      "Battery & Charging": [
        ["Pack Capacity", "120 kWh Aero Tuned"],
        ["Architecture", "900V Ultra-Flat Curve"],
        ["10–80% DC", "13 min (350 kW peak)"],
        ["15-Min Gain", "+450 km Highway"]
      ],
      "Acoustic & Aero": [
        ["Drag Coefficient", "0.194 Cd Wind-Tuned"],
        ["Cabin Noise", "54 dBA @ 110 km/h"],
        ["Glass", "Dual-Pane Acoustic"],
        ["Rear Lounge", "Reclining Heated/Cooled"]
      ],
      "Safety & Tech": [
        ["Highway Assist", "Hands-On L2+ Cruise"],
        ["Audio", "22-Speaker Spatial"],
        ["V2H Output", "9.6 kW Bidirectional"],
        ["Warranty", "8 Yr / 200,000 km"]
      ]
    }
  },
  {
    id: "terra-x-overland",
    name: "Terra X Overland",
    category: "suv",
    badge: "Adventure Edition",
    rating: "4.9",
    price: "$71,200",
    rangeKm: 690,
    accel: "3.3 s",
    charge: "15 min",
    battery: "118 kWh Armored",
    power: "880 HP",
    drivetrain: "Quad-Torque AWD",
    image: "assets/pixel-terra-x.jpg",
    photoImage: "assets/promo-showroom-banner.jpg",
    desc: "310 mm active ground clearance, titanium skid protection, and 240V camp power outlets.",
    bars: { range: 82, speed: 86, charge: 90, efficiency: 81 },
    groups: {}
  },
  {
    id: "pulse-solar-edition",
    name: "Pulse One Solar+",
    category: "compact",
    badge: "Everyday Value",
    rating: "4.8",
    price: "$36,500",
    rangeKm: 585,
    accel: "5.2 s",
    charge: "18 min",
    battery: "76 kWh LFP + Roof",
    power: "310 HP",
    drivetrain: "RWD Smart",
    image: "assets/pixel-people-charging.jpg",
    photoImage: "assets/lifestyle-people-charging.jpg",
    desc: "Integrated solar glass canopy adds up to 25 km/day of free sun-harvested urban driving.",
    bars: { range: 74, speed: 75, charge: 84, efficiency: 100 },
    groups: {}
  }
];

const OWNER_REVIEWS = [
  {
    name: "Elena & Marcus V.",
    model: "Terra X · 34,200 km driven",
    rating: "5.0 ★",
    image: "assets/pixel-people-charging.jpg",
    photoImage: "assets/lifestyle-people-charging.jpg",
    quote: "We took our Terra X from coastal highways into freezing alpine passes with two kids and gear. Even in -8°C snow, the heat pump kept cabin warmth effortless and 15-minute charging stops were faster than our coffee breaks.",
    meta: "Verified Owner · Clean Mobility Bonus Recipient"
  },
  {
    name: "Daniel K.",
    model: "Apex GT Touring · 21,800 km driven",
    rating: "4.9 ★",
    image: "assets/pixel-people-cockpit.jpg",
    photoImage: "assets/lifestyle-people-cockpit.jpg",
    quote: "The panoramic cockpit and 54 dBA cabin silence completely changed my 140 km daily commute. I charge once a week at home on off-peak electricity and saved over $3,100 in fuel my very first year.",
    meta: "Verified Owner · 0% APR Launch Customer"
  },
  {
    name: "Priya S.",
    model: "Pulse One · 18,450 km driven",
    rating: "4.9 ★",
    image: "assets/pixel-pulse-one.jpg",
    photoImage: "assets/banner-pulse-one.jpg",
    quote: "At $34,900 before incentives, Pulse One feels two classes above its price. Charging the LFP battery to 100% without worrying about degradation makes city apartment ownership stress-free.",
    meta: "Verified Owner · Urban Commuter"
  },
  {
    name: "Liam H.",
    model: "Apex GT · 14,900 km driven",
    rating: "5.0 ★",
    image: "assets/pixel-apex-gt.jpg",
    photoImage: "assets/car-apex-touring.jpg",
    quote: "12 minutes from 10% to 80% on a 350 kW station is real—not marketing fluff. Paired with 9.6 kW V2H, our Apex GT literally powered our house refrigerator and Wi-Fi through a 19-hour storm outage.",
    meta: "Verified Owner · V2H Home Energy User"
  }
];

function resolveImg(item) {
  return currentVisualMode === "pixel" ? item.image : (item.photoImage || item.image);
}

/* --------------------------------------------------------------------------
   1. HERO FULL-BLEED SLIDER
   -------------------------------------------------------------------------- */
(function initHeroSlider() {
  const slides = Array.from(document.querySelectorAll(".hero-slide"));
  const dots = Array.from(document.querySelectorAll(".hero-dot"));
  const prevBtn = document.getElementById("heroPrev");
  const nextBtn = document.getElementById("heroNext");
  const progressBar = document.getElementById("heroProgressBar");
  const heroSection = document.getElementById("hero");

  if (!slides.length) return;

  let currentIndex = 0;
  const DURATION = 6500;
  let elapsed = 0;
  let paused = false;
  let lastTick = performance.now();

  function goToSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, idx) => slide.classList.toggle("is-active", idx === currentIndex));
    dots.forEach((dot, idx) => {
      const active = idx === currentIndex;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-selected", String(active));
    });
    elapsed = 0;
    if (progressBar) progressBar.style.width = "0%";
  }

  prevBtn?.addEventListener("click", () => goToSlide(currentIndex - 1));
  nextBtn?.addEventListener("click", () => goToSlide(currentIndex + 1));
  dots.forEach((dot) => dot.addEventListener("click", () => goToSlide(Number(dot.dataset.slide))));

  heroSection?.addEventListener("mouseenter", () => { paused = true; });
  heroSection?.addEventListener("mouseleave", () => { paused = false; lastTick = performance.now(); });

  let touchStartX = 0;
  heroSection?.addEventListener("touchstart", (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
  heroSection?.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(dx) > 45) goToSlide(dx < 0 ? currentIndex + 1 : currentIndex - 1);
  }, { passive: true });

  document.addEventListener("keydown", (e) => {
    if (document.activeElement?.tagName === "INPUT") return;
    if (window.scrollY < 450) {
      if (e.key === "ArrowRight") goToSlide(currentIndex + 1);
      if (e.key === "ArrowLeft") goToSlide(currentIndex - 1);
    }
  });

  function tick(now) {
    const dt = now - lastTick;
    lastTick = now;
    if (!paused) {
      elapsed += dt;
      if (progressBar) progressBar.style.width = `${Math.min(100, (elapsed / DURATION) * 100)}%`;
      if (elapsed >= DURATION) goToSlide(currentIndex + 1);
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();

/* --------------------------------------------------------------------------
   2. LINEUP CAROUSEL SLIDER
   -------------------------------------------------------------------------- */
(function initLineupCarousel() {
  const track = document.getElementById("lineupTrack");
  const filterBtns = Array.from(document.querySelectorAll(".filter-tab"));
  const prevBtn = document.getElementById("lineupPrev");
  const nextBtn = document.getElementById("lineupNext");

  if (!track) return;

  let activeFilter = "all";
  let offset = 0;

  function visibleCount() {
    if (window.innerWidth <= 680) return 1;
    if (window.innerWidth <= 1080) return 2;
    return 3;
  }

  function updateTrackPosition() {
    const cards = track.children;
    if (!cards.length) return;
    const maxOffset = Math.max(0, cards.length - visibleCount());
    offset = Math.max(0, Math.min(offset, maxOffset));
    const cardWidth = cards[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${offset * (cardWidth + 21.6)}px)`;
  }

  function renderCards() {
    const items = activeFilter === "all" ? EV_FLEET : EV_FLEET.filter((m) => m.category === activeFilter);
    track.innerHTML = items.map((car) => `
      <article class="ev-card">
        <div class="ev-card-media">
          <img src="${resolveImg(car)}" alt="${car.name}" loading="lazy" />
          <span class="pill pill-cyan ev-card-tag">${car.badge}</span>
          <span class="ev-card-rating">&#9733; ${car.rating}</span>
        </div>
        <div class="ev-card-body">
          <div class="ev-card-top">
            <h3>${car.name}</h3>
            <span class="ev-price">${car.price}</span>
          </div>
          <p class="ev-card-desc">${car.desc}</p>
          <div class="ev-mini-specs">
            <div><span>Range</span><strong>${car.rangeKm} km</strong></div>
            <div><span>0–100</span><strong>${car.accel}</strong></div>
            <div><span>Charge</span><strong>${car.charge}</strong></div>
          </div>
          <div class="ev-card-actions">
            <button class="btn btn-primary btn-sm ask-model-btn" data-prompt="Tell me the full specs, battery, and ideal buyer profile for ${car.name}." type="button">Ask AI</button>
            <button class="btn btn-ghost btn-sm compare-trigger-btn" type="button">Compare</button>
          </div>
        </div>
      </article>
    `).join("");

    offset = 0;
    requestAnimationFrame(updateTrackPosition);
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.filter;
      filterBtns.forEach((b) => b.classList.toggle("is-active", b === btn));
      renderCards();
    });
  });

  prevBtn?.addEventListener("click", () => { offset = Math.max(0, offset - 1); updateTrackPosition(); });
  nextBtn?.addEventListener("click", () => {
    const maxOffset = Math.max(0, track.children.length - visibleCount());
    offset = offset >= maxOffset ? 0 : offset + 1;
    updateTrackPosition();
  });

  window.addEventListener("resize", updateTrackPosition);
  renderCards();
})();

/* --------------------------------------------------------------------------
   3. SPECIFICATIONS EXPLORER TABS
   -------------------------------------------------------------------------- */
(function initSpecStudio() {
  const panel = document.getElementById("specStudioPanel");
  const tabs = Array.from(document.querySelectorAll(".spec-tab"));
  if (!panel || !tabs.length) return;

  function renderSpecModel(modelId) {
    const car = EV_FLEET.find((m) => m.id === modelId) || EV_FLEET[0];
    const groupsHtml = Object.entries(car.groups).map(([title, rows]) => `
      <div class="spec-group-card">
        <h4>${title}</h4>
        <dl class="spec-dl">
          ${rows.map(([k, v]) => `<div class="spec-dl-row"><dt>${k}</dt><dd>${v}</dd></div>`).join("")}
        </dl>
      </div>
    `).join("");

    panel.innerHTML = `
      <div class="spec-visual-col">
        <div class="spec-hero-photo">
          <img src="${resolveImg(car)}" alt="${car.name} specifications view" />
        </div>
        <div class="spec-bars">
          <div class="spec-bar-item"><span>Touring Range</span><div class="spec-bar-track"><div class="spec-bar-fill" style="width:${car.bars.range}%"></div></div><strong>${car.rangeKm} km</strong></div>
          <div class="spec-bar-item"><span>Acceleration</span><div class="spec-bar-track"><div class="spec-bar-fill" style="width:${car.bars.speed}%"></div></div><strong>${car.accel}</strong></div>
          <div class="spec-bar-item"><span>Fast Charge</span><div class="spec-bar-track"><div class="spec-bar-fill" style="width:${car.bars.charge}%"></div></div><strong>${car.charge}</strong></div>
          <div class="spec-bar-item"><span>Efficiency</span><div class="spec-bar-track"><div class="spec-bar-fill" style="width:${car.bars.efficiency}%"></div></div><strong>${car.bars.efficiency}/100</strong></div>
        </div>
        <div class="hero-cta-row">
          <button class="btn btn-primary btn-sm ask-model-btn" data-prompt="Summarize all engineering highlights and ideal use cases for ${car.name}." type="button">Ask AI About ${car.name}</button>
          <button class="btn btn-outline btn-sm compare-trigger-btn" type="button">Full Compare Table</button>
        </div>
      </div>
      <div class="spec-groups-grid">${groupsHtml}</div>
    `;
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.toggle("is-active", t === tab));
      renderSpecModel(tab.dataset.specId);
    });
  });

  renderSpecModel("apex-gt");
})();

/* --------------------------------------------------------------------------
   4. PROMOTIONS COUNTDOWN TIMER
   -------------------------------------------------------------------------- */
(function initPromoCountdown() {
  const dEl = document.getElementById("cdDays");
  const hEl = document.getElementById("cdHours");
  const mEl = document.getElementById("cdMins");
  const sEl = document.getElementById("cdSecs");
  if (!dEl) return;

  let remainingSec = 14 * 86400 + 8 * 3600 + 42 * 60 + 19;
  setInterval(() => {
    remainingSec = remainingSec > 0 ? remainingSec - 1 : 14 * 86400;
    const days = Math.floor(remainingSec / 86400);
    const hrs = Math.floor((remainingSec % 86400) / 3600);
    const mins = Math.floor((remainingSec % 3600) / 60);
    const secs = remainingSec % 60;
    dEl.textContent = String(days).padStart(2, "0");
    hEl.textContent = String(hrs).padStart(2, "0");
    mEl.textContent = String(mins).padStart(2, "0");
    sEl.textContent = String(secs).padStart(2, "0");
  }, 1000);
})();

/* --------------------------------------------------------------------------
   5. OWNER RATINGS & REVIEWS SLIDER
   -------------------------------------------------------------------------- */
(function initReviewsSlider() {
  const track = document.getElementById("reviewsTrack");
  const prevBtn = document.getElementById("reviewPrev");
  const nextBtn = document.getElementById("reviewNext");
  if (!track) return;

  let idx = 0;

  track.innerHTML = OWNER_REVIEWS.map((rev) => `
    <article class="review-card">
      <div class="review-photo">
        <img src="${resolveImg(rev)}" alt="${rev.name} driving ${rev.model}" loading="lazy" />
      </div>
      <div class="review-body">
        <div class="review-head">
          <div class="review-author">
            <strong>${rev.name}</strong>
            <span>${rev.model}</span>
          </div>
          <span class="pill pill-gold">${rev.rating}</span>
        </div>
        <p class="review-quote">"${rev.quote}"</p>
        <div class="review-meta">${rev.meta}</div>
      </div>
    </article>
  `).join("");

  function visibleReviews() {
    return window.innerWidth <= 680 ? 1 : 2;
  }

  function update() {
    const cards = track.children;
    if (!cards.length) return;
    const max = Math.max(0, cards.length - visibleReviews());
    idx = Math.max(0, Math.min(idx, max));
    const cardW = cards[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${idx * (cardW + 20)}px)`;
  }

  prevBtn?.addEventListener("click", () => { idx = Math.max(0, idx - 1); update(); });
  nextBtn?.addEventListener("click", () => {
    const max = Math.max(0, track.children.length - visibleReviews());
    idx = idx >= max ? 0 : idx + 1;
    update();
  });

  window.addEventListener("resize", update);
  requestAnimationFrame(update);
})();

/* --------------------------------------------------------------------------
   6. INTERACTIVE ECONOMICS & RANGE SLIDERS
   -------------------------------------------------------------------------- */
(function initEconomicsSliders() {
  const dailyKmSlider = document.getElementById("dailyKmSlider");
  const elecRateSlider = document.getElementById("elecRateSlider");
  const gasPriceSlider = document.getElementById("gasPriceSlider");
  const modelPills = Array.from(document.querySelectorAll(".model-pill"));

  const dailyKmVal = document.getElementById("dailyKmVal");
  const elecRateVal = document.getElementById("elecRateVal");
  const gasPriceVal = document.getElementById("gasPriceVal");

  const fiveYearEl = document.getElementById("econFiveYearSavings");
  const annualSavingsEl = document.getElementById("econAnnualSavings");
  const costPer100El = document.getElementById("econCostPer100");
  const chargeFreqEl = document.getElementById("econChargeFreq");
  const co2SavedEl = document.getElementById("econCo2Saved");
  const summaryEl = document.getElementById("econSummaryText");
  const askAiSavingsBtn = document.getElementById("askAiSavingsBtn");

  let selectedKwhPer100 = 12.8;
  let selectedBattery = 76;
  let selectedModelName = "Pulse One";

  function recalculate() {
    const dailyKm = Number(dailyKmSlider.value);
    const elecRate = Number(elecRateSlider.value);
    const gasPrice = Number(gasPriceSlider.value);

    dailyKmVal.textContent = `${dailyKm} km/day`;
    elecRateVal.textContent = `$${elecRate.toFixed(2)} / kWh`;
    gasPriceVal.textContent = `$${gasPrice.toFixed(2)} / L`;

    const annualKm = dailyKm * 365;
    const evCostPer100 = selectedKwhPer100 * elecRate;
    const annualEvCost = (annualKm / 100) * evCostPer100;
    const annualGasCost = (annualKm / 100) * 8.2 * gasPrice;
    const annualFuelSaved = Math.max(0, annualGasCost - annualEvCost);
    const fiveYearTotal = Math.round((annualFuelSaved + 650) * 5);

    const usableDailyBattery = selectedBattery * 0.7;
    const rangeBetweenCharges = (usableDailyBattery / selectedKwhPer100) * 100;
    const daysPerCharge = Math.max(1, Math.round(rangeBetweenCharges / dailyKm));
    const co2Kg = Math.round(annualKm * 0.17);

    fiveYearEl.textContent = `$${fiveYearTotal.toLocaleString()}`;
    annualSavingsEl.textContent = `$${Math.round(annualFuelSaved).toLocaleString()}`;
    costPer100El.textContent = `$${evCostPer100.toFixed(2)}`;
    chargeFreqEl.textContent = daysPerCharge === 1 ? "Every day" : `Every ${daysPerCharge} days`;
    co2SavedEl.textContent = `${co2Kg.toLocaleString()} kg`;

    const fuelPctSaved = annualGasCost > 0 ? Math.round((annualFuelSaved / annualGasCost) * 100) : 0;
    summaryEl.textContent = `Driving ${annualKm.toLocaleString()} km/yr in the ${selectedModelName} cuts fuel bills by ~${fuelPctSaved}% and eliminates oil & timing maintenance.`;

    if (askAiSavingsBtn) {
      askAiSavingsBtn.dataset.prompt = `Explain my ${selectedModelName} savings if I drive ${dailyKm} km/day at $${elecRate.toFixed(2)}/kWh vs $${gasPrice.toFixed(2)}/L petrol.`;
    }
  }

  modelPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      modelPills.forEach((p) => p.classList.toggle("is-active", p === pill));
      selectedKwhPer100 = Number(pill.dataset.consumption);
      selectedBattery = Number(pill.dataset.battery);
      selectedModelName = pill.dataset.name;
      recalculate();
    });
  });

  [dailyKmSlider, elecRateSlider, gasPriceSlider].forEach((slider) => slider?.addEventListener("input", recalculate));
  recalculate();
})();

/* --------------------------------------------------------------------------
   7. KNOBOT — COMPREHENSIVE EV AI CHATBOT ENGINE
   -------------------------------------------------------------------------- */
const KnoBotEngine = (() => {
  let lastContextModel = null;

  const knowledgeTopics = [
    {
      keywords: ["promo", "promotion", "deal", "offer", "apr", "financing", "bonus", "discount", "wallbox", "free charging"],
      reply: () => ({
        text: `Our **Seasonal Showroom Event** combines up to **$8,500+ in value**:\n\n• **0% APR for 36 Months** for qualified buyers\n• **$5,000 Clean Mobility Launch Bonus** applied at checkout\n• **3 Years Free HyperCharge** across 140+ 350 kW solar hubs\n• **Free 11 kW Home Wallbox** + up to $1,500 installation credit`,
        specs: [
          ["APR Financing", "0% for 36 Months"],
          ["Launch Bonus", "$5,000 Off MSRP"],
          ["DC Charging", "3 Years Free (350 kW)"],
          ["Home Wallbox", "Included + $1,500 Credit"]
        ],
        followups: ["Compare Apex GT vs Terra X", "Calculate 5-year EV savings", "Book a Test Drive"]
      })
    },
    {
      keywords: ["rating", "ratings", "review", "reviews", "owner", "satisfaction", "feedback", "reliable"],
      reply: () => ({
        text: `Across **12,480+ verified EV Knowmics owners**, our fleet holds a **4.9 / 5.0** overall rating:\n\n• **98.4% Real-World Range Accuracy** (thanks to heat-pump thermal routing)\n• **4.9★ Fast Charging Reliability** (12–18 min 10–80% curves)\n• **5.0★ 5-Year Economics** ($0.02/km urban cost on Pulse One)`,
        specs: [
          ["Overall Rating", "4.9 / 5.0 Stars"],
          ["Verified Owners", "12,480+ Reviews"],
          ["Range Accuracy", "98.4% Real-World"],
          ["Economy Score", "5.0 / 5.0"]
        ],
        followups: ["Tell me about Terra X family SUV", "Compare Pulse One vs petrol car", "What promotions are active?"]
      })
    },
    {
      keywords: ["about", "company", "knowmics", "mission", "test drive", "book", "reserve", "showroom", "warranty"],
      reply: () => ({
        text: `**EV KNOWMICS** builds software-defined electric vehicles centered on real-world range transparency and ownership economics. Every vehicle includes an **8-year / 200,000 km battery & powertrain warranty**, over-the-air AI updates, and access to 140+ solar HyperCharge lounges. You can reserve online or schedule a private cockpit test drive with any of our 4 models.`,
        specs: [
          ["Active Fleet", "48,500+ Drivers"],
          ["Solar Hubs", "140+ Locations"],
          ["Warranty", "8 Years / 200,000 km"],
          ["Lineup", "Apex GT · Terra X · Pulse One"]
        ],
        followups: ["What promotions are active?", "Compare Apex GT vs Terra X", "4.9/5 Owner Ratings Summary"]
      })
    },
    {
      keywords: ["touring", "860", "executive", "54 dba"],
      model: "Apex GT Touring",
      reply: () => ({
        text: `The **Apex GT Touring** ($69,400) is our longest-range grand tourer at **860 km WLTP**. Built with a record **0.194 Cd** drag coefficient, dual-pane acoustic glass (54 dBA), and 760 HP Dual-Motor AWD, it adds +450 km of highway range in 15 minutes.`,
        specs: [
          ["Max Range", "860 km WLTP"],
          ["0–100 km/h", "2.8 sec (760 HP)"],
          ["Cabin Silence", "54 dBA Acoustic"],
          ["Starting Price", "$69,400"]
        ],
        followups: ["Compare Apex GT vs GT Touring", "What promotions are active?", "How fast does 900V charge?"]
      })
    },
    {
      keywords: ["apex", "gt", "sedan", "fastest", "1120", "820", "0-100", "1.98"],
      model: "Apex GT",
      reply: () => ({
        text: `The **Knowmics Apex GT** ($78,900) is our flagship 900V electric performance sedan. With 1,120 HP tri-motor torque vectoring and 0.198 Cd aerodynamics, it sprints 0–100 km/h in **1.98 sec** while achieving **820 km WLTP range**.`,
        specs: [
          ["Range (WLTP)", "820 km"],
          ["0–100 km/h", "1.98 sec (1,120 HP)"],
          ["Fast Charge", "12 min (10–80% @ 350 kW)"],
          ["Starting Price", "$78,900"]
        ],
        followups: ["Compare Apex GT vs Terra X", "How fast does Apex GT charge?", "Apex GT winter range?"]
      })
    },
    {
      keywords: ["terra", "suv", "family", "7-seat", "seven", "tow", "towing", "off-road", "overland"],
      model: "Terra X",
      reply: () => ({
        text: `The **Knowmics Terra X** ($64,500) is a 7-seat all-terrain electric SUV with **740 km range**, **3,500 kg towing**, and a **9.6 kW V2H home backup inverter** that keeps a house powered for up to 4 days during outages.`,
        specs: [
          ["Range (WLTP)", "740 km"],
          ["Powertrain", "840 HP Dual-Motor AWD"],
          ["Towing / Cargo", "3,500 kg / 2,180 L max"],
          ["Starting Price", "$64,500"]
        ],
        followups: ["How does V2H home backup work?", "Terra X winter range?", "Compare Terra X vs Pulse One"]
      })
    },
    {
      keywords: ["pulse", "city", "urban", "cheap", "budget", "affordable", "40k", "35k", "commute", "compact"],
      model: "Pulse One",
      reply: () => ({
        text: `The **Knowmics Pulse One** ($34,900) is engineered for daily city economics. Its 76 kWh LFP battery handles daily 100% charging for **3,000+ cycles** and costs roughly **$0.02 per km** to drive.`,
        specs: [
          ["City Range", "560 km WLTP"],
          ["Efficiency", "12.8 kWh / 100 km"],
          ["Fast Charge", "18 min (10–80% @ 220 kW)"],
          ["Starting Price", "$34,900"]
        ],
        followups: ["Why is LFP battery great for daily use?", "Calculate my 5-year Pulse One savings", "What promotions are active?"]
      })
    },
    {
      keywords: ["compare", "difference", "vs", "versus", "which one", "choose", "best ev"],
      reply: () => ({
        text: `Here is how the **EV KNOWMICS** lineup compares:\n\n• **Pulse One ($34,900):** Best urban value & lowest cost (560 km, LFP longevity).\n• **Terra X ($64,500):** Best 7-seat family SUV (740 km, 3,500 kg tow, 9.6 kW V2H).\n• **Apex GT Touring ($69,400):** Longest highway range (860 km, 54 dBA).\n• **Apex GT ($78,900):** Ultimate performance (820 km, 1.98s, 12-min charge).`,
        specs: [
          ["Max Range", "GT Touring (860 km)"],
          ["Fastest", "Apex GT (1.98 s)"],
          ["Most Utility", "Terra X (7 Seats / 3.5t)"],
          ["Best Value", "Pulse One ($34,900)"]
        ],
        followups: ["What promotions are active?", "EV vs Petrol 5-year TCO", "Tell me about Solid-State vs LFP"]
      })
    },
    {
      keywords: ["winter", "cold", "snow", "freezing", "heat pump", "temperature", "weather"],
      reply: () => ({
        text: `Cold weather typically reduces EV range by **15–25%** in sub-zero conditions. Every EV Knowmics vehicle minimizes winter loss using our **octagonal heat pump (+12% winter range)**, scheduled cabin pre-conditioning on shore power, and automatic battery warming before fast chargers.`,
        specs: [
          ["Heat Pump Gain", "+12% Winter Range"],
          ["Pre-Conditioning", "Auto-Scheduled App"],
          ["AWD Traction", "1,000 Hz Torque Vectoring"],
          ["Cabin Warmup", "90 sec Rapid Loop"]
        ],
        followups: ["Tell me about Terra X AWD", "How long do EV batteries last?", "What promotions are active?"]
      })
    },
    {
      keywords: ["lfp", "nmc", "solid", "chemistry", "degradation", "lifespan", "battery life", "cycles"],
      reply: () => ({
        text: `• **LFP (Pulse One):** Cobalt-free, daily 100% charging safe, **3,000+ cycles** (>1.2M km).\n• **High-Density NMC (Terra X):** High energy density for 7-seat SUV range & towing.\n• **Solid-Core 900V (Apex GT):** Ultra-low resistance for 12-minute 350 kW charging.\n\nAll packs retain ~88–92% capacity after 200,000 km and carry an **8-year / 200,000 km** warranty.`,
        specs: [
          ["LFP Cycle Life", "3,000+ Full Cycles"],
          ["Warranty", "8 Years / 200,000 km"],
          ["Avg Degradation", "~1.5% per year"],
          ["Recyclability", "95%+ Recovery"]
        ],
        followups: ["How fast does 900V charge?", "Compare Pulse One vs Terra X", "4.9/5 Owner Ratings Summary"]
      })
    },
    {
      keywords: ["charge", "charging", "900v", "350 kw", "level 2", "home charger", "fast", "nacs", "ccs"],
      reply: (q) => {
        const kwhMatch = q.match(/(\d+(?:\.\d+)?)\s*kwh/i);
        const rateMatch = q.match(/\$\s*(\d+(?:\.\d+)?)/);
        if (kwhMatch && rateMatch) {
          const kwh = parseFloat(kwhMatch[1]);
          const rate = parseFloat(rateMatch[1]);
          const total = (kwh * rate).toFixed(2);
          return {
            text: `Charging **${kwh} kWh** at **$${rate.toFixed(2)}/kWh** costs **$${total}** for a full charge (roughly **${Math.round(kwh * 6.5)} km** of driving). On an 11 kW home wallbox, that takes ~${(kwh / 11).toFixed(1)} hours overnight.`,
            specs: [
              ["Energy Added", `${kwh} kWh`],
              ["Electricity Rate", `$${rate.toFixed(2)} / kWh`],
              ["Total Cost", `$${total}`],
              ["11 kW Home Time", `~${(kwh / 11).toFixed(1)} hrs`]
            ],
            followups: ["What promotions are active?", "What is V2H home backup?", "EV vs Petrol 5-year TCO"]
          };
        }

        const prefix = lastContextModel ? `For the **${lastContextModel}**, ` : "Across our lineup, ";
        return {
          text: `${prefix}home Level 2 AC (11–22 kW) handles overnight charging effortlessly, while **900V DC Fast Charging (up to 350 kW)** delivers 10–80% in **12–18 minutes** on NACS & CCS2 stations.`,
          specs: [
            ["900V Peak Power", "350 kW (Apex GT)"],
            ["10–80% Time", "12 – 18 minutes"],
            ["Home Wallbox", "Free 11 kW Promo"],
            ["Connector Support", "NACS + CCS2 Native"]
          ],
          followups: ["Calculate cost for 80 kWh at $0.15", "What promotions are active?", "What is V2H home backup?"]
        };
      }
    },
    {
      keywords: ["v2h", "v2g", "v2l", "bidirectional", "blackout", "outage", "house", "solar", "power home"],
      reply: () => ({
        text: `**Bidirectional Charging (V2H / V2G / V2L)** turns your EV into a backup power station. Terra X & Apex GT output **9.6 kW**, running essential household circuits for **up to 4 days** during outages.`,
        specs: [
          ["Peak Output", "9.6 kW Continuous"],
          ["Backup Duration", "3–4 Days Avg Home"],
          ["Pack Capacity", "Up to 120 kWh"],
          ["Solar Sync", "Time-of-Use Ready"]
        ],
        followups: ["Tell me about Terra X", "EV vs Petrol 5-year TCO", "What promotions are active?"]
      })
    },
    {
      keywords: ["aero", "drag", "cd", "regen", "regenerative", "braking", "efficiency"],
      reply: () => ({
        text: `Low **0.194–0.198 Cd** aerodynamics reduce highway wind drag, while **320 kW regenerative braking** recovers up to 70% of urban braking energy back into the battery—extending brake pad life past 150,000 km.`,
        specs: [
          ["Best Drag", "0.194 Cd (GT Touring)"],
          ["Peak Regen", "320 kW"],
          ["Brake Pad Life", "150,000+ km"],
          ["Inverter Eff.", "94.2%"]
        ],
        followups: ["Tell me about Apex GT", "EV vs Petrol 5-year TCO", "Winter range & heat pumps"]
      })
    },
    {
      keywords: ["tax", "credit", "incentive", "rebate", "tco", "petrol", "gas", "maintenance", "savings", "cheaper"],
      reply: () => ({
        text: `Over 5 years, EVs save **$12,000–$18,000+** over comparable petrol cars: ~75–85% lower fuel costs per km, zero oil/belt maintenance (~$650/yr saved), plus our **$5,000 Clean Mobility Launch Bonus** and **0% APR** financing.`,
        specs: [
          ["5-Yr Savings", "$12,000 – $18,000+"],
          ["Energy Cost", "From $0.02 / km"],
          ["Oil Changes", "0 Required"],
          ["Launch Promo", "$5,000 Bonus + 0% APR"]
        ],
        followups: ["What promotions are active?", "Calculate cost for 76 kWh at $0.14", "4.9/5 Owner Ratings Summary"]
      })
    }
  ];

  function answer(rawQuery) {
    const query = rawQuery.trim();
    const lower = query.toLowerCase();

    if (lower.includes("touring")) lastContextModel = "Apex GT Touring";
    else if (lower.includes("apex")) lastContextModel = "Apex GT";
    else if (lower.includes("terra")) lastContextModel = "Terra X";
    else if (lower.includes("pulse")) lastContextModel = "Pulse One";

    let bestMatch = null;
    let bestScore = 0;

    for (const topic of knowledgeTopics) {
      let score = 0;
      for (const kw of topic.keywords) {
        if (lower.includes(kw)) score += kw.length > 4 ? 2 : 1;
      }
      if (score > bestScore) {
        bestScore = score;
        bestMatch = topic;
      }
    }

    if (bestMatch && bestScore > 0) {
      if (bestMatch.model) lastContextModel = bestMatch.model;
      return bestMatch.reply(query);
    }

    return {
      text: `Great question about **"${query}"**! Across the **EV KNOWMICS** lineup (**Apex GT**, **GT Touring**, **Terra X**, and **Pulse One**), you get 560–860 km WLTP range, 12–18 min fast charging, a 4.9/5 owner rating, and active 0% APR + $5,000 launch promotions.`,
      specs: [
        ["Lineup Range", "560 – 860 km WLTP"],
        ["Charge Speed", "12 – 18 min (10–80%)"],
        ["Owner Rating", "4.9 / 5.0 Verified"],
        ["Active Offer", "0% APR + $5,000 Bonus"]
      ],
      followups: ["Compare Apex GT vs Terra X", "What promotions are active?", "4.9/5 Owner Ratings Summary"]
    };
  }

  return { answer };
})();

/* --------------------------------------------------------------------------
   8. CHAT UI CONTROLLER (Synchronized Inline + Floating Drawers)
   -------------------------------------------------------------------------- */
(function initChatUI() {
  const inlineMessages = document.getElementById("inlineChatMessages");
  const inlineForm = document.getElementById("inlineChatForm");
  const inlineInput = document.getElementById("inlineChatInput");
  const clearInlineBtn = document.getElementById("clearInlineChatBtn");

  const floatingPanel = document.getElementById("floatingChatPanel");
  const floatingFab = document.getElementById("floatingChatFab");
  const closeFloatingBtn = document.getElementById("closeFloatingChatBtn");
  const floatingMessages = document.getElementById("floatingChatMessages");
  const floatingForm = document.getElementById("floatingChatForm");
  const floatingInput = document.getElementById("floatingChatInput");
  const navOpenChatBtn = document.getElementById("navOpenChatBtn");

  function formatMarkdownBold(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br>");
  }

  function createBotBubble(result) {
    const div = document.createElement("div");
    div.className = "msg msg-bot";
    let html = `<div>${formatMarkdownBold(result.text)}</div>`;
    if (result.specs && result.specs.length) {
      html += `<div class="chat-spec-card">${result.specs.map(([k, v]) => `<div><span>${k}</span><strong>${v}</strong></div>`).join("")}</div>`;
    }
    if (result.followups && result.followups.length) {
      html += `<div class="chat-followup-row">${result.followups.map((f) => `<button class="followup-btn" type="button" data-prompt="${f}">${f}</button>`).join("")}</div>`;
    }
    div.innerHTML = html;
    return div;
  }

  function createUserBubble(text) {
    const div = document.createElement("div");
    div.className = "msg msg-user";
    div.textContent = text;
    return div;
  }

  function appendToBoth(userText, botResult) {
    [inlineMessages, floatingMessages].forEach((container) => {
      if (!container) return;
      container.appendChild(createUserBubble(userText));
      container.appendChild(createBotBubble(botResult));
      container.scrollTop = container.scrollHeight;
    });
  }

  function seedWelcome() {
    const welcome = {
      text: `Welcome to **EV KNOWMICS**! I'm **KnoBot**, your AI EV advisor. Ask me anything about specs, our **0% APR + $5,000 launch promo**, **4.9★ owner ratings**, charging costs, or winter range.`,
      specs: [
        ["Lineup", "Apex GT · GT Touring · Terra X · Pulse One"],
        ["Launch Offer", "0% APR + $5,000 Bonus"]
      ],
      followups: ["What promotions are active?", "Compare Apex GT vs Terra X", "4.9/5 Owner Ratings Summary"]
    };
    [inlineMessages, floatingMessages].forEach((container) => {
      if (!container) return;
      container.innerHTML = "";
      container.appendChild(createBotBubble(welcome));
    });
  }

  function handleUserQuestion(questionText, openFloating = false) {
    const clean = questionText.trim();
    if (!clean) return;
    const response = KnoBotEngine.answer(clean);
    appendToBoth(clean, response);
    if (openFloating && floatingPanel) floatingPanel.hidden = false;
  }

  inlineForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    handleUserQuestion(inlineInput.value, false);
    inlineInput.value = "";
  });

  floatingForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    handleUserQuestion(floatingInput.value, true);
    floatingInput.value = "";
  });

  clearInlineBtn?.addEventListener("click", seedWelcome);

  function toggleFloating(forceOpen) {
    if (!floatingPanel) return;
    floatingPanel.hidden = forceOpen !== undefined ? !forceOpen : !floatingPanel.hidden;
    if (!floatingPanel.hidden) floatingInput?.focus();
  }

  floatingFab?.addEventListener("click", () => toggleFloating());
  closeFloatingBtn?.addEventListener("click", () => toggleFloating(false));
  navOpenChatBtn?.addEventListener("click", () => toggleFloating(true));

  document.addEventListener("click", (e) => {
    const promptBtn = e.target.closest("[data-prompt]");
    if (!promptBtn) return;
    const isInsideInline = Boolean(promptBtn.closest("#ai-advisor"));
    handleUserQuestion(promptBtn.dataset.prompt, !isInsideInline);
  });

  seedWelcome();
})();

/* --------------------------------------------------------------------------
   9. MODAL & MOBILE NAVIGATION
   -------------------------------------------------------------------------- */
(function initModalsAndNav() {
  const modal = document.getElementById("compareModal");
  const openBtn = document.getElementById("openCompareBtn");
  const closeBtn = document.getElementById("closeCompareBtn");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileNav = document.getElementById("mobileNav");

  const openModal = () => { if (modal) modal.hidden = false; };
  const closeModal = () => { if (modal) modal.hidden = true; };

  openBtn?.addEventListener("click", openModal);
  closeBtn?.addEventListener("click", closeModal);
  modal?.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

  document.addEventListener("click", (e) => {
    if (e.target.closest(".compare-trigger-btn")) openModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && !modal.hidden) closeModal();
  });

  mobileMenuBtn?.addEventListener("click", () => {
    const expanded = mobileMenuBtn.getAttribute("aria-expanded") === "true";
    mobileMenuBtn.setAttribute("aria-expanded", String(!expanded));
    if (mobileNav) mobileNav.hidden = expanded;
  });

  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.hidden = true;
      mobileMenuBtn?.setAttribute("aria-expanded", "false");
    });
  });

  // Visual Mode Switcher: HD Pixel Art <-> Studio Photography
  const modeToggleBtn = document.getElementById("visualModeToggle");
  modeToggleBtn?.addEventListener("click", () => {
    currentVisualMode = currentVisualMode === "pixel" ? "photo" : "pixel";
    modeToggleBtn.textContent = currentVisualMode === "pixel" ? "Style: HD Pixel Art" : "Style: Studio Photo";

    document.querySelectorAll("[data-pixel-bg]").forEach((el) => {
      const target = currentVisualMode === "pixel" ? el.dataset.pixelBg : el.dataset.photoBg;
      if (el.classList.contains("hero-slide")) el.style.setProperty("--bg-img", `url('${target}')`);
      else el.style.backgroundImage = `url('${target}')`;
    });

    document.querySelectorAll("[data-pixel-src]").forEach((img) => {
      img.src = currentVisualMode === "pixel" ? img.dataset.pixelSrc : img.dataset.photoSrc;
    });

    // Re-trigger active filter/spec tabs to refresh dynamic cards
    document.querySelector(".filter-tab.is-active")?.click();
    document.querySelector(".spec-tab.is-active")?.click();
    const reviewTrack = document.getElementById("reviewsTrack");
    if (reviewTrack) {
      reviewTrack.querySelectorAll(".review-card").forEach((card, i) => {
        const img = card.querySelector("img");
        if (img && OWNER_REVIEWS[i]) img.src = resolveImg(OWNER_REVIEWS[i]);
      });
    }
  });
})();
