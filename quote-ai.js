(() => {
  "use strict";

  /* ============================================================
     LOS BROS LANDSCAPING — JUAN QUOTE ASSISTANT
     Free, browser-based, rule-driven assistant for GitHub Pages.
     No paid API or server required.
     ============================================================ */

  const CONFIG = {
    phone: "2566385396",
    phoneDisplay: "(256) 638-5396",
    business: "Los Bros Landscaping",
    assistantName: "Juan",
    logo: "image-removebg-preview.png",
    storageKey: "losBrosJuanQuoteV7",
    serviceAreas: [
      "Gadsden",
      "Rainbow City",
      "Glencoe",
      "Hokes Bluff",
      "Southside",
      "Attalla"
    ]
  };

  const SERVICES = {
    mowing: {
      name: "Lawn mowing",
      icon: "🌱",
      questions: [
        ["frequency", "Is this a first-time cut, one-time service, weekly service, or every two weeks?", ["First-time cut", "One-time", "Weekly", "Every two weeks"]],
        ["size", "Would you call the yard small, medium, large, or one acre or more?", ["Small", "Medium", "Large", "One acre or more"]],
        ["growth", "How grown out is the grass?", ["Normal", "A little overgrown", "Very overgrown"]],
        ["slope", "Is the property mostly flat, somewhat sloped, or steep?", ["Mostly flat", "Some slopes", "Steep"]],
        ["access", "Is the backyard easy to enter with lawn equipment?", ["Yes", "No", "I don't know"]],
        ["obstacles", "Are there many fences, trees, tight gates, toys, or other obstacles?", ["Very few", "Some", "A lot", "I don't know"]],
        ["extras", "Do you need anything besides mowing, edging, weed eating, and blowing?", ["No extras", "Bagging grass", "Light leaf cleanup", "Other"]]
      ]
    },
    weeds: {
      name: "Weed pulling",
      icon: "🌿",
      questions: [
        ["where", "Where are the weeds located?", ["Flower beds", "Around trees", "Fence line", "Across the yard", "Several areas"]],
        ["count", "About how many separate areas need work?"],
        ["dimensions", "About how long and wide are the areas? A rough guess is okay."],
        ["density", "How thick are the weeds?", ["Light", "Moderate", "Thick", "Completely covering the area"]],
        ["kind", "Are they mostly small weeds, tall weeds, vines, deep-rooted growth, or mixed?", ["Small weeds", "Tall weeds", "Vines", "Deep-rooted", "Mixed", "I don't know"]],
        ["digging", "Will roots, old plants, or buried growth need to be dug out?", ["Yes", "No", "I don't know"]],
        ["hauling", "Would you like us to haul the pulled weeds away?", ["Yes", "No"]],
        ["access", "Is the work area easy to reach and carry debris out of?", ["Yes", "No", "I don't know"]]
      ]
    },
    hedge: {
      name: "Hedge trimming",
      icon: "✂️",
      questions: [
        ["count", "How many bushes or hedge sections need trimming?"],
        ["size", "Are they mostly small, medium, large, or mixed?", ["Small", "Medium", "Large", "Mixed"]],
        ["length", "About how long is the hedge or the combined sections?"],
        ["height", "About how tall are they?"],
        ["cut", "Do you want light shaping, a moderate trim, or a heavy cutback?", ["Light shaping", "Moderate trim", "Heavy cutback"]],
        ["high", "Are any sections too high to reach safely from the ground?", ["Yes", "No", "I don't know"]],
        ["hauling", "Would you like the clippings hauled away?", ["Yes", "No"]],
        ["obstacle", "Are the bushes against a fence, wall, power line, or another obstacle?", ["Yes", "No", "I don't know"]]
      ]
    },
    control: {
      name: "Weed control",
      icon: "🧴",
      questions: [
        ["where", "Where do you need weed control?", ["Lawn", "Flower beds", "Driveway", "Fence line", "Several areas"]],
        ["area", "About how large is the treatment area? A rough estimate is okay."],
        ["density", "How much of the area is covered by weeds?", ["Scattered", "About one-quarter", "About half", "Most of it"]],
        ["weed", "Do you know what kind of weeds they are?"],
        ["grass", "Do you know the grass type?", ["Bermuda", "Zoysia", "Fescue", "Centipede", "St. Augustine", "I don't know"]],
        ["recent", "Has anything been sprayed there recently?", ["Yes", "No", "I don't know"]],
        ["plants", "Are flowers, garden plants, or shrubs close to the treatment area?", ["Yes", "No", "I don't know"]],
        ["repeat", "Are you looking for one treatment or ongoing weed control?", ["One treatment", "Ongoing service", "I don't know"]]
      ]
    },
    mulch: {
      name: "Mulch installation",
      icon: "🪵",
      questions: [
        ["ready", "Are the beds already prepared for mulch?", ["Yes", "No", "Partly", "I don't know"]],
        ["old", "Does old mulch need to be removed?", ["Yes", "No", "I don't know"]],
        ["weeds", "Do weeds or unwanted plants need to be removed first?", ["Yes", "No", "I don't know"]],
        ["beds", "How many beds need mulch?"],
        ["dimensions", "What are the approximate dimensions of the beds?"],
        ["depth", "How deep would you like the mulch?", ["About 2 inches", "About 3 inches", "I don't know"]],
        ["supply", "Who will supply the mulch?", ["Customer supplies it", "Los Bros supplies it", "I don't know"]],
        ["delivery", "Will delivery be needed?", ["Yes", "No", "I don't know"]],
        ["edge", "Do the bed edges need to be cleaned up or reshaped?", ["Yes", "No", "I don't know"]],
        ["fabric", "Do you want landscape fabric installed?", ["Yes", "No", "I don't know"]],
        ["access", "Can mulch be unloaded close to the beds?", ["Yes", "No", "I don't know"]]
      ]
    },
    bed: {
      name: "New landscape bed + mulch",
      icon: "🏡",
      questions: [
        ["new", "Is this a completely new bed or an existing bed that needs rebuilding?", ["Completely new", "Existing bed needs rebuilding"]],
        ["beds", "How many beds are involved?"],
        ["dimensions", "What are the approximate dimensions?"],
        ["grass", "Does grass or sod need to be removed?", ["Yes", "No", "I don't know"]],
        ["weeds", "Are weeds, roots, or old plants present?", ["Yes", "No", "I don't know"]],
        ["edge", "Do you want a clean natural edge or installed edging?", ["Natural edge", "Installed edging", "I don't know"]],
        ["plants", "Will plants be installed too?", ["Yes", "No", "I don't know"]],
        ["soil", "Will topsoil or planting soil be needed?", ["Yes", "No", "I don't know"]],
        ["supply", "Who will supply the mulch and materials?", ["Customer supplies them", "Los Bros supplies them", "I don't know"]],
        ["access", "Can materials be unloaded close to the work area?", ["Yes", "No", "I don't know"]]
      ]
    },
    cleanup: {
      name: "Yard cleanup",
      icon: "🧹",
      questions: [
        ["items", "What needs to be cleaned up? You can list everything you see."],
        ["area", "How large is the cleanup area?", ["Small section", "Medium yard", "Large yard", "Several areas", "I don't know"]],
        ["severity", "How heavy is the cleanup?", ["Light", "Moderate", "Heavy", "Very heavy"]],
        ["vines", "Are there vines, briars, or thick overgrowth?", ["Yes", "No", "I don't know"]],
        ["digging", "Does anything need to be dug out or removed by the roots?", ["Yes", "No", "I don't know"]],
        ["heavy", "Are there heavy branches, logs, rocks, furniture, or other bulky items?", ["Yes", "No", "I don't know"]],
        ["hauling", "Would you like all debris hauled away?", ["Yes", "No"]],
        ["access", "Can a vehicle or trailer get close to the cleanup area?", ["Yes", "No", "I don't know"]]
      ]
    },
    plants: {
      name: "Plant installation",
      icon: "🌸",
      questions: [
        ["count", "How many plants do you want installed?"],
        ["size", "Are the plants small, medium, large, or mixed?", ["Small", "Medium", "Large", "Mixed", "I don't know"]],
        ["remove", "Do old plants, roots, or stumps need to be removed first?", ["Yes", "No", "I don't know"]],
        ["soil", "How is the soil?", ["Soft/easy to dig", "Normal", "Hard or rocky", "I don't know"]],
        ["products", "Will soil, compost, fertilizer, or mulch be added?", ["Yes", "No", "I don't know"]],
        ["supply", "Who will supply the plants?", ["Customer supplies them", "Los Bros supplies them", "I don't know"]],
        ["delivery", "Will plant delivery be needed?", ["Yes", "No", "I don't know"]],
        ["prep", "Does the planting area need weed removal or bed preparation?", ["Yes", "No", "I don't know"]]
      ]
    },
    irrigation: {
      name: "Irrigation service",
      icon: "💧",
      questions: [
        ["type", "Do you need diagnosis, repair, a new zone, or a new installation?", ["Diagnosis", "Repair", "New zone", "New installation", "I don't know"]],
        ["problem", "What problem are you noticing?"],
        ["heads", "About how many sprinkler heads or areas are affected?"],
        ["leak", "Is there a visible leak, pooling water, or unusually high water use?", ["Yes", "No", "I don't know"]],
        ["underground", "Does the issue appear to involve underground pipe or wiring?", ["Yes", "No", "I don't know"]],
        ["valve", "Do you know where the valves are located?", ["Yes", "No", "I don't know"]],
        ["controller", "What controller or timer brand do you have, if known?"],
        ["test", "Can the system be turned on for testing?", ["Yes", "No", "I don't know"]]
      ]
    },
    lighting: {
      name: "Landscape lighting",
      icon: "💡",
      questions: [
        ["type", "Is this a repair, an addition to an existing system, or a new installation?", ["Repair", "Add to existing system", "New installation"]],
        ["count", "About how many lights are involved?"],
        ["fixture", "What type of lighting do you want?", ["Path lights", "Uplights", "Accent lights", "Mixed", "I don't know"]],
        ["transformer", "Is there already a working transformer?", ["Yes", "No", "I don't know"]],
        ["power", "Is outdoor power available near the area?", ["Yes", "No", "I don't know"]],
        ["route", "Will wire run through lawn, beds, hard soil, or several areas?", ["Lawn", "Beds", "Hard soil", "Several areas", "I don't know"]],
        ["crossing", "Will wiring need to cross a driveway, walkway, or other hard surface?", ["Yes", "No", "I don't know"]],
        ["supply", "Who will supply the fixtures?", ["Customer supplies them", "Los Bros supplies them", "I don't know"]]
      ]
    }
  };

  const CONTACT_QUESTIONS = [
    ["name", "What name should we put on the request?"],
    ["city", "What city is the property in?"],
    ["address", "What is the property address? You can type “I don't know” if you prefer to send it later."],
    ["timing", "When would you like the work done?", ["As soon as possible", "Within one week", "Within two weeks", "This month", "Just comparing prices"]],
    ["contact", "What is the best phone number for the quote?"],
    ["notes", "Anything else you want Juan and the Los Bros team to know?"]
  ];

  const state = loadState();
  let currentPrompt = null;
  let typingTimer = null;

  function defaultState() {
    return {
      version: 7,
      service: "",
      answers: {},
      contact: {},
      serviceStep: 0,
      contactStep: 0,
      phase: "welcome",
      estimate: null,
      openedBefore: false,
      transcript: [],
      recommendationsShown: false,
      welcomeSeen: false,
      welcomeDismissedUntil: 0,
      leadStarted: false,
      pagePath: window.location.pathname,
      leadSource: "website welcome"
    };
  }

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(CONFIG.storageKey));
      return saved && saved.version === 7 ? { ...defaultState(), ...saved } : defaultState();
    } catch {
      return defaultState();
    }
  }

  function saveState() {
    try {
      localStorage.setItem(CONFIG.storageKey, JSON.stringify(state));
    } catch {}
  }

  function resetState() {
    const fresh = defaultState();
    Object.keys(state).forEach(k => delete state[k]);
    Object.assign(state, fresh);
    saveState();
    messages.innerHTML = "";
    progress.style.width = "0%";
    startConversation();
  }

  const root = document.createElement("div");
  root.id = "lb-juan-root";
  root.innerHTML = `
    <div class="lb-lead-overlay" aria-hidden="true">
      <div class="lb-lead-backdrop"></div>
      <section class="lb-lead-modal" role="dialog" aria-modal="true" aria-label="Start a free landscaping estimate">
        <button class="lb-lead-close" type="button" aria-label="Close">×</button>

        <div class="lb-lead-brand">
          <span class="lb-lead-logo"><img src="${CONFIG.logo}" alt=""></span>
          <span>
            <b>${CONFIG.business}</b>
            <small>Free Estimate Assistant</small>
          </span>
        </div>

        <div class="lb-lead-grid">
          <div class="lb-lead-copy">
            <span class="lb-lead-kicker">FREE • FAST • NO OBLIGATION</span>
            <h2>See what your landscaping project may start at.</h2>
            <p>Tell Juan a few details and get a fair starting estimate in about one minute.</p>

            <div class="lb-lead-benefits">
              <span>✓ Honest starting prices</span>
              <span>✓ No phone call required</span>
              <span>✓ Your information is used only for your quote</span>
            </div>

            <div class="lb-lead-trust">
              <b>Serving Gadsden and nearby areas</b>
              <small>Mowing • Cleanups • Weeds • Mulch • Hedges • Irrigation • Lighting</small>
            </div>
          </div>

          <form class="lb-lead-form">
            <div class="lb-lead-form-head">
              <b>Start my free estimate</b>
              <span>Step 1 of your quote</span>
            </div>

            <label>
              <span>First name</span>
              <input name="name" type="text" autocomplete="given-name" maxlength="60" required placeholder="Your first name">
            </label>

            <label>
              <span>Phone number</span>
              <input name="phone" type="tel" autocomplete="tel" maxlength="30" required placeholder="Best number for your quote">
            </label>

            <label>
              <span>City</span>
              <input name="city" type="text" autocomplete="address-level2" maxlength="80" required placeholder="Example: Gadsden">
            </label>

            <label>
              <span>What service do you need?</span>
              <select name="service" required>
                <option value="">Choose a service</option>
                ${Object.entries(SERVICES).map(([key, value]) => `<option value="${key}">${value.name}</option>`).join("")}
                <option value="unsure">I'm not sure yet</option>
              </select>
            </label>

            <button class="lb-lead-start" type="submit">
              Start My Free Estimate
              <small>Takes about 60 seconds</small>
            </button>

            <button class="lb-lead-later" type="button">Maybe later</button>
            <small class="lb-lead-privacy">No spam. Los Bros Landscaping uses this information only to respond to your quote request.</small>
          </form>
        </div>
      </section>
    </div>

    <button class="lb-launcher" aria-label="Open Juan quote assistant">
      <span class="lb-launcher-dot"></span>
      <img src="${CONFIG.logo}" alt="">
      <span><b>Ask Juan</b><small>Free starting estimate</small></span>
    </button>

    <section class="lb-window" aria-label="Los Bros Landscaping quote assistant" aria-hidden="true">
      <header class="lb-header">
        <div class="lb-agent">
          <span class="lb-avatar"><img src="${CONFIG.logo}" alt=""></span>
          <span>
            <b>Juan</b>
            <small><i></i> Los Bros Landscaping assistant</small>
          </span>
        </div>
        <div class="lb-header-actions">
          <button class="lb-icon-btn lb-restart" title="Start over" aria-label="Start over">↻</button>
          <button class="lb-icon-btn lb-close" title="Close" aria-label="Close">×</button>
        </div>
      </header>

      <div class="lb-progress"><span></span></div>

      <div class="lb-quickbar">
        <button data-quick="services">Services</button>
        <button data-quick="prices">Starting prices</button>
        <button data-quick="areas">Service areas</button>
        <button data-quick="referral">10% referral offer</button>
      </div>

      <main class="lb-messages" aria-live="polite"></main>

      <div class="lb-composer">
        <div class="lb-chips"></div>
        <form>
          <input type="text" maxlength="500" autocomplete="off" placeholder="Type an answer or ask Juan a question…">
          <button type="submit" aria-label="Send">➜</button>
        </form>
        <small>Ask a question anytime • Type “I don't know” to skip</small>
      </div>
    </section>
  `;
  document.body.appendChild(root);

  const leadOverlay = root.querySelector(".lb-lead-overlay");
  const leadForm = root.querySelector(".lb-lead-form");
  const leadClose = root.querySelector(".lb-lead-close");
  const leadLater = root.querySelector(".lb-lead-later");
  const launcher = root.querySelector(".lb-launcher");
  const windowEl = root.querySelector(".lb-window");
  const closeBtn = root.querySelector(".lb-close");
  const restartBtn = root.querySelector(".lb-restart");
  const messages = root.querySelector(".lb-messages");
  const chips = root.querySelector(".lb-chips");
  const form = root.querySelector(".lb-composer form");
  const input = root.querySelector(".lb-composer input");
  const progress = root.querySelector(".lb-progress span");

  leadForm.addEventListener("submit", startLeadFromOverlay);
  leadClose.addEventListener("click", dismissLeadOverlay);
  leadLater.addEventListener("click", dismissLeadOverlay);
  leadOverlay.querySelector(".lb-lead-backdrop").addEventListener("click", dismissLeadOverlay);

  launcher.addEventListener("click", openAssistant);
  closeBtn.addEventListener("click", closeAssistant);
  restartBtn.addEventListener("click", () => {
    if (confirm("Start a new quote and erase the current answers?")) resetState();
  });

  root.querySelectorAll("[data-quick]").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.quick;
      const questionMap = {
        services: "What services do you offer?",
        prices: "What are your starting prices?",
        areas: "What areas do you serve?",
        referral: "How does the 10% referral offer work?"
      };
      handleUserMessage(questionMap[key]);
    });
  });

  form.addEventListener("submit", e => {
    e.preventDefault();
    const value = input.value.trim();
    if (!value) return;
    input.value = "";
    handleUserMessage(value);
  });


  function isHomePage() {
    const path = (window.location.pathname || "/").toLowerCase();
    return path === "/" || path.endsWith("/index.html") || path.endsWith("/");
  }

  function getPageContext() {
    const path = `${window.location.pathname} ${document.title}`.toLowerCase();

    if (path.includes("gallery")) {
      return {
        label: "Gallery",
        message: "Looking through our work? Tell me which project looks closest to yours and I can help build a starting estimate."
      };
    }

    if (path.includes("service")) {
      return {
        label: "Services",
        message: "Need help choosing the right service? Describe what you want changed and I’ll guide you."
      };
    }

    if (path.includes("review")) {
      return {
        label: "Reviews",
        message: "Checking our reviews? I can also answer questions and prepare a free starting estimate."
      };
    }

    if (path.includes("contact")) {
      return {
        label: "Contact",
        message: "Before you contact us, I can organize your project details so your quote request is quicker."
      };
    }

    return {
      label: "Home",
      message: "Welcome to Los Bros Landscaping. I can answer questions or prepare a free starting estimate."
    };
  }

  function shouldShowLeadOverlay() {
    const now = Date.now();
    return isHomePage() &&
      !state.leadStarted &&
      Number(state.welcomeDismissedUntil || 0) < now;
  }

  function showLeadOverlay() {
    if (!shouldShowLeadOverlay()) return;
    leadOverlay.classList.add("is-visible");
    leadOverlay.setAttribute("aria-hidden", "false");
    document.documentElement.classList.add("lb-modal-open");
    state.welcomeSeen = true;
    saveState();
    setTimeout(() => leadForm.querySelector('[name="name"]')?.focus(), 400);
  }

  function hideLeadOverlay() {
    leadOverlay.classList.remove("is-visible");
    leadOverlay.setAttribute("aria-hidden", "true");
    document.documentElement.classList.remove("lb-modal-open");
  }

  function dismissLeadOverlay() {
    hideLeadOverlay();
    state.welcomeDismissedUntil = Date.now() + (7 * 24 * 60 * 60 * 1000);
    saveState();
  }

  function startLeadFromOverlay(event) {
    event.preventDefault();

    const data = new FormData(leadForm);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const city = String(data.get("city") || "").trim();
    const service = String(data.get("service") || "").trim();

    if (!name || !phone || !city || !service) return;

    state.contact.name = name;
    state.contact.contact = phone;
    state.contact.city = city;
    state.leadStarted = true;
    state.welcomeDismissedUntil = 0;
    state.pagePath = window.location.pathname;
    saveState();

    hideLeadOverlay();
    openAssistant();

    if (!messages.children.length) {
      bot(`Thanks, ${name}! I saved your contact details so you won't have to type them again.`);
      bot("I'll ask only the questions needed to prepare a fair starting estimate.");
    }

    if (service === "unsure") {
      bot("Tell me what the property looks like or what you want changed, and I'll help choose the right service.");
      currentPrompt = { type: "describe-service" };
      return;
    }

    chooseService(service, true);
  }

  function openAssistant() {
    windowEl.classList.add("is-open");
    windowEl.setAttribute("aria-hidden", "false");
    launcher.classList.add("is-hidden");
    state.openedBefore = true;
    saveState();
    if (!messages.children.length) restoreOrStart();
    setTimeout(() => input.focus(), 250);
  }

  function closeAssistant() {
    windowEl.classList.remove("is-open");
    windowEl.setAttribute("aria-hidden", "true");
    launcher.classList.remove("is-hidden");
  }

  function restoreOrStart() {
    if (state.transcript.length) {
      state.transcript.forEach(item => addBubble(item.role, item.text, false));
      renderCurrentStep();
      return;
    }
    startConversation();
  }

  function startConversation() {
    state.phase = "welcome";
    const context = getPageContext();
    const returningName = state.contact?.name && state.contact.name !== "Skipped"
      ? `, ${state.contact.name}`
      : "";

    bot(`Hey${returningName}! I'm ${CONFIG.assistantName}, the ${CONFIG.business} website assistant.`);
    bot(context.message);
    bot("I can answer questions, explain starting prices, and prepare your quote request without a long phone call.");
    bot("What service do you need help with today?");
    showServiceChoices();
  }

  function showServiceChoices() {
    currentPrompt = { type: "service" };
    chips.innerHTML = "";
    Object.entries(SERVICES).forEach(([key, service]) => {
      addChip(`${service.icon} ${service.name}`, () => chooseService(key));
    });
    addChip("I'm not sure", () => {
      bot("No problem. Tell me what the property looks like or what you want changed, and I'll point you toward the right service.");
      currentPrompt = { type: "describe-service" };
    });
  }

  function chooseService(key, fromOverlay = false) {
    state.service = key;
    state.answers = {};
    state.serviceStep = 0;
    state.contact = state.contact || {};
    state.contactStep = 0;
    state.phase = "service";
    state.estimate = null;
    state.recommendationsShown = false;
    saveState();

    if (!fromOverlay) user(SERVICES[key].name);

    const customerName = state.contact?.name && state.contact.name !== "Skipped"
      ? `, ${state.contact.name}`
      : "";

    bot(`Great${customerName} — let's build a starting estimate for ${SERVICES[key].name.toLowerCase()}.`);
    askServiceQuestion();
  }

  function askServiceQuestion() {
    const service = SERVICES[state.service];
    if (!service) return startConversation();
    const q = service.questions[state.serviceStep];

    if (!q) {
      state.estimate = calculateEstimate(state.service, state.answers);
      state.phase = "contact";
      saveState();
      showEstimatePreview();
      return;
    }

    currentPrompt = { type: "service-question", id: q[0] };
    updateProgress();
    bot(q[1]);
    renderOptions(q[2]);
  }

  function askContactQuestion() {
    let q = CONTACT_QUESTIONS[state.contactStep];

    while (q && state.contact[q[0]] && state.contact[q[0]] !== "Skipped") {
      state.contactStep += 1;
      q = CONTACT_QUESTIONS[state.contactStep];
    }

    if (!q) {
      state.phase = "final";
      saveState();
      showFinalCard();
      return;
    }

    currentPrompt = { type: "contact-question", id: q[0] };
    updateProgress();
    bot(q[1]);
    renderOptions(q[2]);
  }

  function showEstimatePreview() {
    currentPrompt = { type: "estimate-preview" };
    updateProgress();
    const amount = state.estimate;
    bot(`Based on what you told me, a fair starting estimate is about $${amount}.`);
    bot("That is not a guaranteed final price. Pictures, exact measurements, access, materials, and hidden conditions can change it after the team reviews your request.");
    showRecommendation();
    bot("Would you like to send the details for a free review?");
    chips.innerHTML = "";
    addChip("Yes, finish my quote", () => {
      user("Yes, finish my quote");
      askContactQuestion();
    });
    addChip("Review my answers", () => reviewAnswers());
    addChip("Choose another service", () => {
      user("Choose another service");
      showServiceChoices();
    });
  }

  function showRecommendation() {
    if (state.recommendationsShown) return;
    const a = state.answers;
    let message = "";

    if (state.service === "cleanup" && includesAny(a.items, ["weed", "bed", "overgrown", "vine"])) {
      message = "Helpful idea: after the cleanup, weed control or fresh mulch may help the area stay cleaner longer. We can price those separately so you only add them if they make sense.";
    } else if (state.service === "weeds" && includesAny(a.where, ["flower", "tree"])) {
      message = "Helpful idea: adding mulch after the weeds are removed can improve the finished look and slow down new weeds. It would be a separate optional service.";
    } else if (state.service === "hedge" && yes(a.hauling)) {
      message = "Since you selected hauling, the estimate includes a reasonable cleanup allowance. Very large piles or extra dump trips would be confirmed before work begins.";
    } else if (state.service === "mowing" && includesAny(a.frequency, ["weekly", "two weeks"])) {
      message = "Recurring mowing is usually the best value because the grass stays manageable and each visit is more predictable.";
    } else if (state.service === "mulch" && yes(a.weeds)) {
      message = "For the cleanest result, weed removal should happen before mulch is installed. The estimate includes a basic allowance, but heavy roots or thick overgrowth may need review.";
    } else if (state.service === "control") {
      message = "Weed control may require more than one treatment. Weather, weed type, grass type, and growth stage affect results, so no responsible company should promise every weed disappears after one visit.";
    }

    if (message) {
      state.recommendationsShown = true;
      saveState();
      bot(message);
    }
  }

  function showFinalCard() {
    currentPrompt = null;
    chips.innerHTML = "";
    progress.style.width = "100%";
    bot("You're all set. Press the button below to open a text message with the full request already written.");
    bot("Attach clear pictures before sending whenever possible. That helps Los Bros Landscaping confirm the most accurate price.");

    const card = document.createElement("article");
    card.className = "lb-estimate-card";
    card.innerHTML = `
      <span class="lb-eyebrow">FAIR STARTING ESTIMATE</span>
      <strong class="lb-estimate-price">$${state.estimate}</strong>
      <p>This is based on the information provided. Los Bros Landscaping will review the details and pictures before confirming the final price and scheduling.</p>

      <div class="lb-lead-summary">
        <span><b>Name</b>${escapeHtml(state.contact?.name || "Not provided")}</span>
        <span><b>City</b>${escapeHtml(state.contact?.city || "Not provided")}</span>
        <span><b>Phone</b>${escapeHtml(state.contact?.contact || "Not provided")}</span>
        <span><b>Service</b>${escapeHtml(SERVICES[state.service]?.name || "Not selected")}</span>
      </div>

      <div class="lb-referral-box">
        <b>Save 10% with a successful referral</b>
        <span>Receive 10% off labor on one service after a new customer you refer books and pays for their first job. Mention their name in your text. Cannot be combined with another offer. Final eligibility is confirmed by Los Bros Landscaping.</span>
      </div>

      <button class="lb-send-quote">Send My Free Quote</button>
      <button class="lb-review-link">Review My Answers</button>
    `;
    messages.appendChild(card);
    card.querySelector(".lb-send-quote").onclick = sendQuoteText;
    card.querySelector(".lb-review-link").onclick = reviewAnswers;
    scrollBottom();
  }

  function reviewAnswers() {
    const service = SERVICES[state.service];
    const lines = [`Service: ${service ? service.name : "Not selected"}`];

    if (service) {
      service.questions.forEach(q => {
        if (state.answers[q[0]] !== undefined) lines.push(`${q[1]} — ${state.answers[q[0]]}`);
      });
    }

    CONTACT_QUESTIONS.forEach(q => {
      if (state.contact[q[0]] !== undefined) lines.push(`${q[1]} — ${state.contact[q[0]]}`);
    });

    bot(lines.join("\n"));
    if (state.phase === "final") {
      bot("To change something, type “change” followed by the topic, such as “change yard size” or “change city.”");
    }
  }

  function handleUserMessage(raw) {
    const text = String(raw || "").trim();
    if (!text) return;

    const command = normalize(text);

    if (isRestart(command)) {
      user(text);
      resetState();
      return;
    }

    if (isBack(command)) {
      user(text);
      goBack();
      return;
    }

    if (isReview(command)) {
      user(text);
      reviewAnswers();
      repeatPrompt();
      return;
    }

    if (command.startsWith("change ")) {
      user(text);
      handleChange(command.slice(7));
      return;
    }

    const smart = smartReply(text);
    if (smart) {
      user(text);
      bot(smart);
      repeatPrompt();
      return;
    }

    if (currentPrompt?.type === "describe-service") {
      user(text);
      const recommendation = detectService(text);
      if (recommendation) {
        bot(`That sounds most like ${SERVICES[recommendation].name.toLowerCase()}.`);
        chips.innerHTML = "";
        addChip(`Start ${SERVICES[recommendation].name} quote`, () => chooseService(recommendation));
        addChip("Show all services", showServiceChoices);
      } else {
        bot("I may need a little more detail. Are you mainly trying to cut grass, remove weeds, trim bushes, clean up debris, install mulch or plants, repair irrigation, or add lighting?");
        showServiceChoices();
      }
      return;
    }

    if (currentPrompt?.type === "service-question") {
      const q = SERVICES[state.service].questions[state.serviceStep];
      user(text);
      state.answers[q[0]] = isUnknown(text) ? "Skipped" : text;
      state.serviceStep += 1;
      saveState();
      askServiceQuestion();
      return;
    }

    if (currentPrompt?.type === "contact-question") {
      const q = CONTACT_QUESTIONS[state.contactStep];
      user(text);
      state.contact[q[0]] = isUnknown(text) ? "Skipped" : text;
      state.contactStep += 1;
      saveState();
      askContactQuestion();
      return;
    }

    if (currentPrompt?.type === "service") {
      user(text);
      const detected = detectService(text);
      if (detected) chooseService(detected);
      else {
        bot("I couldn't confidently match that to a service. Choose one below or describe the work in a little more detail.");
        showServiceChoices();
      }
      return;
    }

    if (currentPrompt?.type === "estimate-preview") {
      user(text);
      if (includesAny(text, ["yes", "finish", "send", "quote"])) askContactQuestion();
      else {
        bot("No problem. You can review the answers, choose another service, or ask me a question.");
        repeatPrompt();
      }
      return;
    }

    user(text);
    bot("I can help with services, pricing, service areas, scheduling, quote questions, pictures, hauling, and the referral offer. Tell me what kind of landscaping work you need.");
    showServiceChoices();
  }

  function smartReply(raw) {
    const q = normalize(raw);
    const isQuestion = raw.includes("?") || /^(how|what|when|where|why|can|could|do|does|is|are|will|would|should|who)\b/.test(q);
    if (!isQuestion && !matchesFAQKeyword(q)) return "";

    if (includesAny(q, ["emergency", "gas leak", "power line", "electrical wire", "downed line"])) {
      return "For a gas leak, damaged utility line, or downed power line, keep everyone away and contact the proper utility or emergency service first. Los Bros Landscaping should only evaluate the landscaping work after the area is safe.";
    }

    if (includesAny(q, ["tree cutting", "cut tree", "remove tree", "tree removal", "large tree", "stump grinding"])) {
      return "Los Bros Landscaping does not offer full tree removal, large tree cutting, or stump grinding. We can sometimes clean up small fallen branches or light brush, depending on the job.";
    }

    if (includesAny(q, ["poison ivy", "poison oak", "toxic plant"])) {
      return "We may be able to help with some unwanted plants, but poison ivy or similar plants must be disclosed before scheduling. Send clear pictures so the team can decide whether the job can be handled safely.";
    }

    if (includesAny(q, ["licensed", "insured", "insurance"])) {
      return `For current licensing or insurance details, please text ${CONFIG.business} directly at ${CONFIG.phoneDisplay} so you receive a precise and current answer.`;
    }

    if (includesAny(q, ["human", "real person", "talk to someone", "owner", "call you", "phone number", "contact"])) {
      return `Yes. Text ${CONFIG.business} directly at ${CONFIG.phoneDisplay}. I can also finish your quote request and prepare the text for you.`;
    }

    if (includesAny(q, ["free quote", "free estimate", "estimate free", "quote cost"])) {
      return "The quote request is free. The website provides a starting estimate, and Los Bros Landscaping confirms the final price after reviewing the exact details and pictures.";
    }

    if (includesAny(q, ["service area", "areas do you serve", "where do you work", "do you serve", "location"])) {
      return `We mainly serve ${CONFIG.serviceAreas.join(", ")} and nearby areas. Jobs farther away depend on the size of the work and current route.`;
    }

    if (includesAny(q, ["rain", "weather", "wet grass", "raining"])) {
      return "Weather can affect mowing, spraying, mulch work, and scheduling. Los Bros Landscaping will confirm whether conditions are suitable before the job. Chemical treatments especially may need a dry window.";
    }

    if (includesAny(q, ["sunday", "saturday", "weekend", "hours", "open", "availability", "available", "how soon", "when can"])) {
      return "Availability changes with current jobs, weather, and route planning. Finish the quote request and include your preferred timing; the team will confirm the closest available date.";
    }

    if (includesAny(q, ["payment", "pay", "cash", "card", "check", "venmo", "cash app", "zelle"])) {
      return "Payment options should be confirmed directly with Los Bros Landscaping before the work begins. Your quote text makes it easy to ask.";
    }

    if (includesAny(q, ["photo", "picture", "image", "upload"])) {
      return "At the end, press “Send My Free Quote.” Your text-message app will open with the request filled in. Attach wide pictures and close-up pictures before sending for a more accurate final price.";
    }

    if (includesAny(q, ["10 percent", "10%", "ten percent", "referral", "refer", "new client", "discount"])) {
      return "Referral offer: receive 10% off labor on one service after the new customer you refer books and pays for their first job. Mention the person's name in your text. It cannot be combined with another offer, and Los Bros Landscaping confirms eligibility.";
    }

    if (includesAny(q, ["guarantee", "guaranteed", "promise"])) {
      return "Los Bros Landscaping can guarantee clear communication about the agreed work, but outdoor results can depend on weather, plant health, soil, weeds, and hidden conditions. Weed-control results and plant survival should never be promised without seeing the property.";
    }

    if (includesAny(q, ["deposit", "upfront", "before work"])) {
      return "Small labor-only jobs may not need a deposit, while material-heavy jobs may require money for materials before scheduling. The exact arrangement is confirmed in writing for each job.";
    }

    if (includesAny(q, ["cancel", "cancellation", "reschedule"])) {
      return "Please give as much notice as possible if you need to cancel or reschedule. Weather-related changes are handled by contacting the customer and finding the next suitable time.";
    }

    if (includesAny(q, ["haul", "hauling", "take away", "debris", "dump"])) {
      return "Hauling is available for many services. The estimate asks about it because debris volume, weight, dump fees, and how far it must be carried can affect the price.";
    }

    if (includesAny(q, ["materials", "supply mulch", "buy mulch", "supply plants", "provide plants"])) {
      return "The customer may supply materials, or Los Bros Landscaping may be able to purchase and deliver them. Material cost and delivery are separate from labor unless the written quote says otherwise.";
    }

    if (includesAny(q, ["exact price", "final price", "why estimate", "starting estimate", "price change"])) {
      return "The website amount is a fair starting estimate, not a trick price and not a guaranteed final total. Photos can miss measurements, roots, slopes, access problems, buried debris, material quantities, and disposal volume. The final price is confirmed before work begins.";
    }

    if (includesAny(q, ["cheap", "cheapest", "lower price", "budget", "afford"])) {
      return "Tell us your budget honestly. Los Bros Landscaping can sometimes reduce the scope, let you supply materials, separate the work into phases, or remove hauling to lower the price without hiding costs.";
    }

    if (includesAny(q, ["what services", "services offer", "what do you do", "work do you do"])) {
      return "We offer lawn mowing, edging, weed eating, blowing, weed pulling, weed control, hedge trimming, mulch and landscape-bed installation, yard cleanups, plant installation, irrigation service, and landscape lighting. We do not offer full tree removal.";
    }

    if (isPriceQuestion(q, ["mow", "mowing", "grass", "lawn"])) {
      return "Typical mowing starts around $50 for a small yard, about $70–$75 for a medium yard, and around $90 or more for a large yard. Edging, weed eating, and blowing are included. Heavy overgrowth, steep slopes, poor access, bagging, or many obstacles can increase the final price.";
    }

    if (isPriceQuestion(q, ["hedge", "bush", "trim"])) {
      return "Basic trimming often starts around $20 for a small bush, $30–$35 for a medium bush, and $45–$50 for a large bush. Tall work, heavy cutbacks, long hedges, difficult access, cleanup, and hauling can change the total.";
    }

    if (isPriceQuestion(q, ["weed pulling", "pull weeds", "weeding"])) {
      return "Small weed-pulling jobs may start around $50–$60. The final amount depends on area size, weed thickness, roots, vines, digging, access, and hauling.";
    }

    if (isPriceQuestion(q, ["weed control", "spray", "chemical"])) {
      return "Small weed-control treatments may start around $60, plus any special product cost when needed. Large lawns, difficult weeds, several products, or follow-up visits cost more. Treatment results also depend on weed and grass type.";
    }

    if (isPriceQuestion(q, ["cleanup", "yard clean"])) {
      return "Light yard cleanups may start around $60. Moderate or heavy cleanups cost more based on the area, overgrowth, digging, bulky debris, hauling, and dump volume.";
    }

    if (isPriceQuestion(q, ["mulch"])) {
      return "Small prepared mulch beds may start around $70 for labor. Weed removal, old mulch removal, bed reshaping, fabric, materials, delivery, and long carrying distance are separate when needed.";
    }

    if (isPriceQuestion(q, ["plant", "planting"])) {
      return "Small plant-installation jobs may start around $60. Plant size, quantity, hard soil, root removal, bed preparation, delivery, and materials determine the final price.";
    }

    if (isPriceQuestion(q, ["irrigation", "sprinkler"])) {
      return "Small irrigation diagnosis or repair work may start around $60–$150. Underground leaks, valves, wiring, multiple broken parts, new zones, and complete installations require inspection and a custom price.";
    }

    if (isPriceQuestion(q, ["lighting", "landscape light"])) {
      return "Small landscape-lighting work may start around $120. Fixture count, transformer needs, wiring route, hard-surface crossings, repairs, and materials determine the final price.";
    }

    if (includesAny(q, ["weekly", "every two weeks", "biweekly", "recurring"])) {
      return "Recurring service usually gives the most consistent appearance and makes pricing more predictable. Weekly is best during fast growth; every two weeks may work when growth is slower, but overgrowth can change the price.";
    }

    if (includesAny(q, ["bag grass", "bagging", "clippings"])) {
      return "Normal mowing includes blowing clippings from hard surfaces. Full grass bagging is extra because it takes longer and creates disposal volume.";
    }

    if (includesAny(q, ["landscape fabric", "weed fabric"])) {
      return "Landscape fabric can help in some decorative beds, but it does not permanently stop weeds and can complicate future planting. Proper weed removal, mulch depth, and maintenance still matter.";
    }

    if (includesAny(q, ["mulch depth", "how much mulch", "2 inches", "3 inches"])) {
      return "Around 2–3 inches is common for many mulch beds. Too little may not cover well, while too much against trunks or plant stems can cause problems. Keep mulch pulled slightly away from trunks and foundations.";
    }

    if (includesAny(q, ["spray safe", "pet", "dog", "cat", "children", "kids"])) {
      return "Tell the team about pets, children, gardens, wells, ponds, and sensitive plants before any treatment. Follow the product label and the instructions provided for re-entry. Never let anyone enter a treated area before it is considered safe under the label.";
    }

    if (includesAny(q, ["remove grass", "kill grass", "grass coming back"])) {
      return "For a new bed or slope, removing existing growth and choosing the right covering method matters. Mulch alone may not stop established grass. The best approach depends on slope, drainage, erosion risk, and what will be planted.";
    }

    if (includesAny(q, ["wisteria", "vine removal", "vines"])) {
      return "Vine removal can involve heavy growth, hidden fencing, thick trunks, roots, and repeated regrowth. Clear pictures are important. Cutting vines down does not always kill the root system, so follow-up control may be needed.";
    }

    if (includesAny(q, ["do you speak spanish", "spanish", "español", "habla español"])) {
      return "Sí. Puede escribir en español y Juan intentará ayudarle con las preguntas básicas y preparar la solicitud de cotización.";
    }

    return "";
  }

  function repeatPrompt() {
    if (!currentPrompt) return;
    if (currentPrompt.type === "service-question") {
      const q = SERVICES[state.service]?.questions[state.serviceStep];
      if (q) {
        bot(`To continue your estimate: ${q[1]}`);
        renderOptions(q[2]);
      }
    } else if (currentPrompt.type === "contact-question") {
      const q = CONTACT_QUESTIONS[state.contactStep];
      if (q) {
        bot(`To continue: ${q[1]}`);
        renderOptions(q[2]);
      }
    } else if (currentPrompt.type === "service") {
      bot("Choose a service below to begin.");
      showServiceChoices();
    }
  }

  function goBack() {
    if (state.phase === "service" && state.serviceStep > 0) {
      state.serviceStep -= 1;
      const q = SERVICES[state.service].questions[state.serviceStep];
      delete state.answers[q[0]];
      saveState();
      bot("No problem — let's go back one question.");
      askServiceQuestion();
      return;
    }

    if ((state.phase === "contact" || state.phase === "final") && state.contactStep > 0) {
      state.phase = "contact";
      state.contactStep -= 1;
      const q = CONTACT_QUESTIONS[state.contactStep];
      delete state.contact[q[0]];
      saveState();
      bot("No problem — let's go back one question.");
      askContactQuestion();
      return;
    }

    bot("You're already at the first step. You can type “restart” to begin a completely new quote.");
    repeatPrompt();
  }

  function handleChange(topic) {
    const service = SERVICES[state.service];
    if (!service) {
      bot("Start a service quote first, then I can help change an answer.");
      showServiceChoices();
      return;
    }

    const all = [
      ...service.questions.map((q, index) => ({ section: "service", index, key: q[0], label: q[1] })),
      ...CONTACT_QUESTIONS.map((q, index) => ({ section: "contact", index, key: q[0], label: q[1] }))
    ];

    const match = all.find(item => {
      const hay = normalize(`${item.key} ${item.label}`);
      return topic.split(" ").some(word => word.length > 3 && hay.includes(word));
    });

    if (!match) {
      bot("I couldn't tell which answer you want to change. Try something like “change yard size,” “change hauling,” “change city,” or “change phone number.”");
      return;
    }

    if (match.section === "service") {
      state.phase = "service";
      state.serviceStep = match.index;
      delete state.answers[match.key];
      state.estimate = null;
      saveState();
      bot("Got it — I'll update that answer.");
      askServiceQuestion();
    } else {
      state.phase = "contact";
      state.contactStep = match.index;
      delete state.contact[match.key];
      saveState();
      bot("Got it — I'll update that answer.");
      askContactQuestion();
    }
  }

  function calculateEstimate(service, a) {
    const round5 = n => Math.max(0, Math.round(n / 5) * 5);
    let p = 0;

    switch (service) {
      case "mowing": {
        p = has(a.size, "small") ? 50 : has(a.size, "medium") ? 70 : has(a.size, "acre") ? 155 : 90;
        if (has(a.growth, "little")) p += 5;
        if (has(a.growth, "very")) p += 20;
        if (has(a.slope, "some")) p += 5;
        if (has(a.slope, "steep")) p += 10;
        if (no(a.access)) p += 5;
        if (has(a.obstacles, "some")) p += 5;
        if (has(a.obstacles, "a lot")) p += 10;
        if (has(a.extras, "bag")) p += 15;
        if (has(a.extras, "leaf")) p += 10;
        if (has(a.frequency, "weekly") && !has(a.growth, "very")) p -= 5;
        return round5(Math.max(50, p));
      }

      case "weeds": {
        let hours = 1;
        if (has(a.density, "moderate")) hours += 0.75;
        if (has(a.density, "thick")) hours += 1.5;
        if (has(a.density, "completely")) hours += 2.5;
        if (includesAny(a.where, ["several", "yard", "fence"])) hours += 0.75;
        if (includesAny(a.kind, ["vine", "deep", "mixed"])) hours += 0.75;
        if (yes(a.digging)) hours += 0.75;
        if (no(a.access)) hours += 0.5;
        const count = parseNumber(a.count);
        if (count > 3) hours += Math.min(2, (count - 3) * 0.25);
        p = hours * (yes(a.hauling) ? 55 : 48);
        return round5(Math.max(50, p));
      }

      case "hedge": {
        const count = Math.max(1, parseNumber(a.count) || 1);
        const base = has(a.size, "small") ? 20 : has(a.size, "medium") ? 32 : has(a.size, "large") ? 48 : 35;
        p = count * base;
        if (has(a.cut, "moderate")) p *= 1.12;
        if (has(a.cut, "heavy")) p *= 1.35;
        if (yes(a.high)) p += 25;
        if (yes(a.hauling)) p += Math.max(15, count * 5);
        if (yes(a.obstacle)) p += 10;
        return round5(Math.max(40, p));
      }

      case "control": {
        let hours = 1;
        if (has(a.density, "quarter")) hours += 0.25;
        if (has(a.density, "half")) hours += 0.5;
        if (has(a.density, "most")) hours += 1;
        if (includesAny(a.where, ["several", "lawn"])) hours += 0.4;
        if (yes(a.plants)) hours += 0.25;
        let product = 15;
        if (has(a.density, "most")) product += 15;
        if (includesAny(a.weed, ["dallis", "nutsedge", "crabgrass", "vine"])) product += 10;
        p = hours * 55 + product;
        return round5(Math.max(60, p));
      }

      case "mulch": {
        let labor = 70;
        const beds = Math.max(1, parseNumber(a.beds) || 1);
        labor += Math.max(0, beds - 1) * 20;
        if (no(a.ready) || has(a.ready, "partly")) labor += 25;
        if (yes(a.old)) labor += 35;
        if (yes(a.weeds)) labor += 30;
        if (yes(a.edge)) labor += 20;
        if (yes(a.fabric)) labor += 30;
        if (no(a.access)) labor += 25;
        if (has(a.supply, "los bros")) labor += 85;
        if (yes(a.delivery)) labor += 35;
        return round5(Math.max(70, labor));
      }

      case "bed": {
        let labor = 90;
        const beds = Math.max(1, parseNumber(a.beds) || 1);
        labor += Math.max(0, beds - 1) * 35;
        if (has(a.new, "completely")) labor += 40;
        if (yes(a.grass)) labor += 50;
        if (yes(a.weeds)) labor += 30;
        if (has(a.edge, "installed")) labor += 45;
        if (yes(a.plants)) labor += 40;
        if (yes(a.soil)) labor += 35;
        if (has(a.supply, "los bros")) labor += 110;
        if (no(a.access)) labor += 25;
        return round5(Math.max(90, labor));
      }

      case "cleanup": {
        let hours = has(a.severity, "light") ? 1 : has(a.severity, "moderate") ? 2 : has(a.severity, "very heavy") ? 5 : 3.5;
        if (has(a.area, "medium")) hours += 0.5;
        if (has(a.area, "large") || has(a.area, "several")) hours += 1.5;
        if (yes(a.vines)) hours += 1;
        if (yes(a.digging)) hours += 1;
        if (yes(a.heavy)) hours += 1;
        if (no(a.access)) hours += 0.75;
        p = hours * (yes(a.hauling) ? 55 : 48);
        if (yes(a.heavy) && yes(a.hauling)) p += 30;
        return round5(Math.max(60, p));
      }

      case "plants": {
        const count = Math.max(1, parseNumber(a.count) || 1);
        const each = has(a.size, "small") ? 20 : has(a.size, "medium") ? 36 : has(a.size, "large") ? 68 : 38;
        p = Math.max(60, count * each);
        if (yes(a.remove)) p += 35;
        if (has(a.soil, "hard") || has(a.soil, "rocky")) p += 30;
        if (yes(a.products)) p += 20;
        if (has(a.supply, "los bros")) p += 110;
        if (yes(a.delivery)) p += 30;
        if (yes(a.prep)) p += 35;
        return round5(p);
      }

      case "irrigation": {
        const count = Math.max(1, parseNumber(a.heads) || 1);
        if (has(a.type, "new zone")) return 700;
        if (has(a.type, "new installation")) return 900;
        p = has(a.type, "diagnosis") ? 60 : 80;
        if (has(a.type, "repair")) p = 90 + Math.max(0, count - 1) * 18;
        if (yes(a.leak)) p += 20;
        if (yes(a.underground)) p += 50;
        if (no(a.valve)) p += 20;
        if (no(a.test)) p += 15;
        return round5(Math.max(60, p));
      }

      case "lighting": {
        const count = Math.max(1, parseNumber(a.count) || 1);
        p = has(a.type, "repair") ? 120 : 90 + count * 32;
        if (no(a.transformer)) p += 110;
        if (no(a.power)) p += 45;
        if (has(a.route, "hard") || has(a.route, "several")) p += 35;
        if (yes(a.crossing)) p += 60;
        if (has(a.supply, "los bros")) p += 125;
        return round5(Math.max(120, p));
      }

      default:
        return 75;
    }
  }

  function sendQuoteText() {
    const service = SERVICES[state.service];
    const lines = [
      `Hello Los Bros Landscaping! I completed a quote request with Juan on the website.`,
      "",
      `SERVICE: ${service?.name || "Not selected"}`,
      `STARTING ESTIMATE SHOWN: $${state.estimate}`,
      ""
    ];

    if (service) {
      service.questions.forEach(q => {
        const value = state.answers[q[0]];
        if (value !== undefined) lines.push(`${shortLabel(q[1])}: ${value}`);
      });
    }

    lines.push("", "CUSTOMER INFORMATION:");
    CONTACT_QUESTIONS.forEach(q => {
      const value = state.contact[q[0]];
      if (value !== undefined) lines.push(`${shortLabel(q[1])}: ${value}`);
    });

    lines.push(
      "",
      "I understand this is a starting estimate and not a guaranteed final price. Please review my details and pictures before confirming the price.",
      "",
      "Referral offer: 10% off labor on one service after a new customer I refer books and pays for their first job. Cannot be combined with another offer and must be confirmed by Los Bros Landscaping.",
      "",
      "I will attach pictures to this message if available."
    );

    window.location.href = `sms:${CONFIG.phone}?&body=${encodeURIComponent(lines.join("\n"))}`;
  }

  function updateProgress() {
    const serviceTotal = state.service ? SERVICES[state.service].questions.length : 0;
    const total = serviceTotal + CONTACT_QUESTIONS.length;
    const done = state.serviceStep + state.contactStep;
    const percentage = total ? Math.min(96, Math.round((done / total) * 100)) : 0;
    progress.style.width = `${percentage}%`;
  }

  function renderCurrentStep() {
    if (state.phase === "service" && state.service) askServiceQuestion();
    else if (state.phase === "contact") askContactQuestion();
    else if (state.phase === "final") showFinalCard();
    else if (state.phase === "welcome") showServiceChoices();
    else startConversation();
  }

  function renderOptions(options) {
    chips.innerHTML = "";
    if (!options?.length) return;
    options.forEach(option => addChip(option, () => handleUserMessage(option)));
  }

  function addChip(label, handler) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", handler);
    chips.appendChild(button);
  }

  function bot(text) {
    showTyping(() => {
      addBubble("bot", text, true);
      scrollBottom();
    });
  }

  function user(text) {
    addBubble("user", text, true);
    chips.innerHTML = "";
    scrollBottom();
  }

  function addBubble(role, text, record) {
    const row = document.createElement("div");
    row.className = `lb-row ${role === "user" ? "is-user" : "is-bot"}`;

    if (role === "bot") {
      const avatar = document.createElement("span");
      avatar.className = "lb-mini-avatar";
      avatar.textContent = "J";
      row.appendChild(avatar);
    }

    const bubble = document.createElement("div");
    bubble.className = "lb-bubble";
    bubble.textContent = text;
    row.appendChild(bubble);
    messages.appendChild(row);

    if (record) {
      state.transcript.push({ role, text });
      if (state.transcript.length > 120) state.transcript = state.transcript.slice(-120);
      saveState();
    }
  }

  function showTyping(callback) {
    clearTimeout(typingTimer);
    const typing = document.createElement("div");
    typing.className = "lb-row is-bot lb-typing-row";
    typing.innerHTML = `<span class="lb-mini-avatar">J</span><div class="lb-bubble lb-typing"><i></i><i></i><i></i></div>`;
    messages.appendChild(typing);
    scrollBottom();

    typingTimer = setTimeout(() => {
      typing.remove();
      callback();
    }, 260);
  }

  function scrollBottom() {
    requestAnimationFrame(() => {
      messages.scrollTop = messages.scrollHeight;
    });
  }

  function detectService(text) {
    const q = normalize(text);
    const scores = {
      mowing: score(q, ["mow", "grass", "lawn", "edging", "weed eating", "cut yard"]),
      weeds: score(q, ["pull weed", "weeding", "flower bed weed", "remove weeds by hand"]),
      hedge: score(q, ["hedge", "bush", "shrub", "trim"]),
      control: score(q, ["weed killer", "weed control", "spray weeds", "chemical", "herbicide"]),
      mulch: score(q, ["mulch", "pine straw", "wood chips"]),
      bed: score(q, ["new bed", "flower bed install", "landscape bed", "remove grass for bed"]),
      cleanup: score(q, ["cleanup", "clean up", "leaves", "branches", "brush", "debris", "overgrown yard"]),
      plants: score(q, ["plant installation", "plant flowers", "plant shrubs", "install plants"]),
      irrigation: score(q, ["irrigation", "sprinkler", "water line", "sprinkler head", "controller"]),
      lighting: score(q, ["landscape lighting", "outdoor lights", "path lights", "uplights"])
    };
    const best = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
    return best && best[1] > 0 ? best[0] : "";
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function shortLabel(question) {
    return question
      .replace(/\?$/, "")
      .replace(/^What is /i, "")
      .replace(/^What are /i, "")
      .replace(/^What /i, "")
      .replace(/^How /i, "How ")
      .replace(/^Is /i, "")
      .replace(/^Are /i, "");
  }

  function normalize(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/[’]/g, "'")
      .replace(/[^a-z0-9%'\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function includesAny(value, terms) {
    const v = normalize(value);
    return terms.some(term => v.includes(normalize(term)));
  }

  function has(value, term) {
    return normalize(value).includes(normalize(term));
  }

  function yes(value) {
    return /^(yes|yeah|yep|true)\b/.test(normalize(value));
  }

  function no(value) {
    return /^(no|nope|false)\b/.test(normalize(value));
  }

  function isUnknown(value) {
    return /^(i )?(don't|do not|dont) know$|^not sure$|^unsure$|^skip$/i.test(String(value).trim());
  }

  function parseNumber(value) {
    const match = String(value || "").match(/\d+(\.\d+)?/);
    return match ? Number(match[0]) : 0;
  }

  function score(text, terms) {
    return terms.reduce((total, term) => total + (text.includes(normalize(term)) ? normalize(term).split(" ").length : 0), 0);
  }

  function isPriceQuestion(q, serviceTerms) {
    return includesAny(q, ["price", "cost", "charge", "how much", "starting"]) && includesAny(q, serviceTerms);
  }

  function matchesFAQKeyword(q) {
    return includesAny(q, [
      "price", "cost", "service", "area", "schedule", "photo", "picture",
      "referral", "discount", "haul", "payment", "licensed", "insured",
      "weather", "rain", "guarantee", "material", "mulch", "mow", "weed",
      "hedge", "cleanup", "irrigation", "lighting", "plant", "spanish"
    ]);
  }

  function isRestart(q) {
    return ["restart", "start over", "new quote", "reset"].includes(q);
  }

  function isBack(q) {
    return ["back", "go back", "previous", "last question"].includes(q);
  }

  function isReview(q) {
    return ["review", "review answers", "show answers", "my answers"].includes(q);
  }

  /* Home page: full-screen lead welcome. Other pages: keep Juan available
     without blocking the visitor. */
  if (shouldShowLeadOverlay()) {
    setTimeout(showLeadOverlay, 1300);
  } else if (!state.openedBefore && !isHomePage()) {
    setTimeout(() => {
      launcher.classList.add("lb-attention");
      setTimeout(() => launcher.classList.remove("lb-attention"), 5000);
    }, 1800);
  }
})();
