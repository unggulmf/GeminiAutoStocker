/**
 * Gemini Stock Pro - Advanced Auto-Imager
 * Version: 4.3 (ENTERPRISE PROSEMIRROR FIX)
 */

// ==========================================
// 1. DATA: MASSIVE PROMPT ENGINE (V4)
// ==========================================
const DATA_ENGINE = {
    business: {
        subjects: [
            "Confident CEO", "Diverse Startup Team", "Data Analyst", "Project Manager", "Creative Director", "Financial Advisor", "Customer Support Agent", "Software Engineer", "Marketing Specialist", "Architect", "Business Consultant", "HR Manager", "Sales Executive", "Entrepreneur", "Board of Directors", "Intern", "Remote Worker", "Freelancer", "Executive Assistant", "Product Owner", "Logistics Manager", "Legal Counsel", "Medical Professional", "Teacher", "Engineer", "Real Estate Agent", "Stock Broker", "Bank Teller", "Supply Chain Coordinator", "Event Planner", "Public Relations Officer", "Journalist", "Recruiter", "Accountant", "Auditor", "Operations Manager", "Strategy Officer", "Venture Capitalist", "Angel Investor", "Blockchain Developer", "Cybersecurity Analyst", "Cloud Architect", "UX/UI Designer", "Scrum Master", "Agile Coach", "Sustainability Officer", "Diversity Officer", "Chief Technology Officer", "Chief Financial Officer"
        ],
        actions: [
            "brainstorming ideas with sticky notes", "presenting a quarterly report", "shaking hands after a deal", "analyzing complex data on screens", "leading a team meeting", "collaborating on a laptop", "having a serious discussion", "celebrating a success", "focused on coding", "making a phone call", "sketching a new design", "reviewing legal documents", "mentoring a junior employee", "networking at an event", "giving a keynote speech", "drinking coffee while working", "writing in a notebook", "gesturing at a whiteboard", "looking out of a window pensively", "walking through a modern office", "negotiating a contract", "signing a document", "exchanging business cards", "video conferencing with clients", "debugging code", "designing a blueprint", "inspecting a production line", "conducting an interview", "training a new hire", "giving feedback", "analyzing a spreadsheet", "creating a moodboard", "testing a prototype", "packaging a product", "delivering a presentation", "answering emails", "organizing files", "planning a schedule", "taking notes during a call", "adjusting a tie", "checking a smartwatch", "using a VR headset for work"
        ],
        settings: [
            "in a modern glass-walled office", "in a bustling coworking space", "in a high-tech conference room", "at a minimalist desk setup", "in a corporate lobby", "in a creative design studio", "on a rooftop terrace with city view", "in a busy coffee shop", "during a video conference call", "in an open-plan office", "at a startup accelerator", "in a luxury executive suite", "at a business lunch", "in a server room", "at a trade show booth", "in a waiting area", "in an elevator", "in a factory floor", "in a warehouse", "in a laboratory", "in a medical clinic", "in a classroom", "in a library", "in a home office", "in a podcast studio", "in a green energy facility", "at a construction site", "in a legal firm", "in a bank branch", "in a stock exchange floor", "in a media newsroom", "in a logistics center", "in an airport lounge", "in a hotel lobby", "in a taxi", "in a subway", "in a park connection", "at a networking mixer", "in a silent pod", "at a standing desk"
        ]
    },
    lifestyle: {
        subjects: [
            "Happy Family", "Elderly Couple", "Group of Friends", "Young Backpacker", "Yoga Instructor", "Chef", "Musician", "Artist", "Gardener", "Fitness Trainer", "Mother and Baby", "Father and Son", "Student", "Photographer", "Writer", "Dog Walker", "Cyclist", "Runner", "Surfer", "Hiker", "Volunteer", "Barista", "Florist", "Mechanic", "Carpenter", "Baker", "Dancer", "Swimmer", "Skater", "Guitarist", "Pianist", "Singer", "Potter", "Tailor", "Barber", "Makeup Artist", "Tattoo Artist", "Fisherman", "Farmer", "Winemaker", "Brewmaster", "Chocolatier", "Travel Blogger", "Influencer", "Gamer", "Book lover", "Pet owner", "Botanist"
        ],
        actions: [
            "laughing uncontrollably", "enjoying a sunset", "cooking a gourmet meal", "practicing mindfulness", "playing acoustic guitar", "painting on a canvas", "planting flowers", "doing stretching exercises", "reading a book in a hammock", "taking a selfie", "hiking up a mountain trail", "running on the beach", "cycling through a park", "meditating by a lake", "sharing a pizza", "toasting with wine glasses", "playing with a puppy", "shopping at a local market", "dancing at a party", "sleeping peacefully", "hugging tightly", "kissing romantically", "blowing bubbles", "flying a kite", "having a picnic", "playing board games", "watching a movie", "listening to music", "knitting a scarf", "baking cookies", "decorating a room", "wrapping a gift", "opening a present", "blowing out candles", "jumping for joy", "splashing in water", "building a sandcastle", "star gazing", "bird watching", "journaling"
        ],
        settings: [
            "in a cozy living room", "at a sunny park", "on a sandy beach", "in a rustic kitchen", "in a lush forest", "at a vibrant street festival", "in a modern gym", "in a home library", "at a rooftop bar", "in a blooming garden", "by a campfire", "in a snowy cabin", "at a swimming pool", "in a trendy cafe", "at a farmer's market", "in a bedroom", "in a bathroom spa", "on a balcony", "in a backyard", "in a garage workshop", "in a music studio", "in an art gallery", "in a museum", "at a concert", "at a stadium", "in a city square", "on a bridge", "in a mountain lodge", "by a waterfall", "in a desert dunes", "in a lavender field", "in a sunflower field", "in a vineyard", "in an orchard", "at a marina", "on a boat", "in a tent", "in a camper van", "in a treehouse", "in a greenhouse"
        ]
    },
    tech: {
        subjects: [
            "Virtual Reality User", "AI Researcher", "Cybersecurity Expert", "Robot Helper", "Drone Pilot", "Gamer", "Hacker", "Scientist", "Lab Technician", "Astronaut", "Smart Home User", "Esports Player", "Crypto Trader", "Biohacker", "Futurist", "Data Scientist", "Robotics Engineer", "Nanotechnologist", "Quantum Physicist", "Space Tourist", "Android", "Cyborg", "Hologram", "Start-up Founder", "Tech Reviewer", "Ethical Hacker", "Network Admin", "System Architect", "Game Developer", "3D Modeler", "VFX Artist"
        ],
        actions: [
            "interacting with a hologram", "wearing a VR headset", "typing rapid code", "soldering a circuit board", "flying a drone", "analyzing DNA samples", "commanding a robot", "viewing augmented reality", "creating digital art", "mining cryptocurrency", "conducting a chemistry experiment", "launching a rocket", "controlling a smart home panel", "streaming a game", "debugging a system", "scanning a fingerprint", "unlocking a retinal scanner", "accessing a mainframe", "visualizing big data", "navigating a virtual world", "building a PC", "installing server racks", "monitoring multiple screens", "wearing smart glasses", "teleporting (concept)", "floating in zero-g", "touching a floating interface", "collaborating with AI", "upgrading firmware"
        ],
        settings: [
            "in a neon-lit cyber city", "inside a futuristic laboratory", "in a server room with blue lights", "at a competitive gaming arena", "in a space station", "in a smart home living room", "in a dark hacker den", "at a tech expo", "in a clean room facility", "against a matrix code background", "surrounded by floating screens", "in a quantum computing lab", "on Mars colony", "in a cyberpunk alley", "in a futuristic vehicle", "in a cryo chamber", "in a simulation pod", "in a holographic control room", "inside a microchip (macro)", "in a fiber optic network", "in a digital void"
        ]
    },
    abstract: {
        subjects: [
            "Liquid Paint Swirl", "Geometric Shapes", "Plexus Network", "Bokeh Lights", "Crystal Prism", "Smoke Plumes", "Fabric Waves", "Metallic Texture", "Paper Layers", "Glass Spheres", "Ink in Water", "Oil and Water", "Fire Sparks", "Ice Crystals", "Feather Details", "Leaf Veins", "Cloud Formations", "Sand Dunes", "Wood Grain", "Marble Surface", "Soap Bubbles", "Fiber Optics", "Sound Waves", "DNA Helix", "Microscopic Cells"
        ],
        actions: [
            "floating in zero gravity", "exploding into particles", "melting slowly", "glowing in the dark", "reflecting prismatic colors", "intertwining complexly", "creating a gradient", "casting long shadows", "distorting light", "forming a pattern", "rippling outwards", "shattering into fragments", "condensing into drops", "evaporating into mist", "spiraling endlessly", "vibrating with energy", "morphing shapes", "crystallizing", "flowing smoothly", "erupting"
        ],
        settings: [
            "on a clean black background", "on a clean white background", "in a vaporwave grid", "under studio softbox lighting", "in a macro photography studio", "in a 3D render environment", "with cinematic spotlight", "with chromatic aberration", "with pastel color palette", "in a void", "underwater", "in deep space", "in a light box", "on a textured surface", "against a gradient backdrop", "in a kaleidoscope"
        ]
    }
};

const VISUAL_STYLES = [
    "photorealistic", "8k resolution", "cinematic lighting", "highly detailed", "shot on Sony A7R IV", "depth of field", "commercial stock photography style", "vibrant colors", "neutral tones", "minimalist composition", "golden hour", "studio lighting", "wide angle lens", "macro shot", "telephoto lens", "bokeh effect", "high contrast", "low key lighting", "high key lighting", "natural light", "flash photography", "grainy film look", "vintage aesthetic", "modern aesthetic", "pastel palette", "neon palette", "monochrome", "sepia tone", "HDR", "long exposure", "motion blur", "soft focus", "sharp focus", "aerial view", "worm's eye view", "isometric view", "flat lay"
];

const MOOD_MODIFIERS = [
    "energetic", "peaceful", "melancholic", "romantic", "mysterious", "inspiring", "serious", "playful", "futuristic", "retro", "elegant", "gritty", "whimsical", "dramatic", "ethereal", "dreamy", "intense", "calm", "joyful", "contemplative", "chaotic", "organized", "warm", "cool", "luxurious", "rustic"
];

// ==========================================
// 2. CONFIGURATION & STATE
// ==========================================
const STATE = {
    isLooping: false,
    currentNiche: "business",
    customPromptRef: "",
    loopTimeout: null,
    stats: { generated: 0, downloaded: 0 }
};

// ==========================================
// 3. UI GENERATION
// ==========================================
function createPanel() {
    const existing = document.getElementById('gsp-panel');
    if (existing) existing.remove();

    const panel = document.createElement('div');
    panel.id = 'gsp-panel';
    panel.style.cssText = `
        position: fixed; top: 20px; right: 20px; width: 340px;
        background: rgba(15, 23, 42, 0.95); color: #f8fafc;
        border: 1px solid #334155; border-radius: 12px;
        padding: 16px; font-family: 'Inter', system-ui, sans-serif;
        z-index: 99999; box-shadow: 0 10px 25px rgba(0,0,0,0.5);
        backdrop-filter: blur(10px); transition: width 0.3s ease;
    `;

    panel.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:10px; border-bottom:1px solid #334155;">
            <span style="font-weight:700; font-size:16px;">Gemini Stock Pro <span style="font-size:10px; color:#ffffff; background:#dc2626; padding:2px 6px; border-radius:4px;">V4.3</span></span>
            <button id="gsp-minimize" style="background:none; border:none; color:#ffffff; cursor:pointer; font-size:18px; font-weight:bold; width:30px;">−</button>
        </div>
        
        <div id="gsp-controls" style="display: flex; flex-direction: column; gap: 12px; margin-top: 10px;">
            <!-- Niche Selector -->
            <div>
                <label style="font-size:12px; color:#94a3b8; display:block; margin-bottom:4px;">Generation Engine (1M+)</label>
                <select id="gsp-niche" style="width:100%; padding:8px; background:#1e293b; border:1px solid #334155; color:white; border-radius:6px; cursor:pointer;">
                    <option value="business">Business & Corporate</option>
                    <option value="lifestyle">Lifestyle & People</option>
                    <option value="tech">Technology & AI</option>
                    <option value="abstract">Abstract & Backgrounds</option>
                    <option value="random">🔀 Chaos Mode (Mix All)</option>
                </select>
            </div>

            <div>
                 <label style="font-size:12px; color:#94a3b8; display:block; margin-bottom:4px;">Custom Style Injection</label>
                 <input type="text" id="gsp-modifier" placeholder="e.g. 'cyberpunk, bluetones'" style="width:100%; padding:8px; background:#1e293b; border:1px solid #334155; color:white; border-radius:6px;">
            </div>

            <div style="font-size:11px; color:#94a3b8; font-style:italic;">
                * Running in Instant Mode (No Delays)
            </div>

            <button id="gsp-toggle" style="width:100%; padding:12px; background:#3b82f6; color:white; border:none; border-radius:6px; font-weight:bold; cursor:pointer; margin-top:5px; transition:background 0.2s;">
                START ENGINE
            </button>

            <div style="font-size:11px; color:#64748b; margin-top:5px; display:flex; justify-content:space-between;">
                 <span id="gsp-status">Status: Idle</span>
                 <span>G: <span id="gsp-count-gen">0</span> | D: <span id="gsp-count-dl">0</span></span>
            </div>
        </div>
    `;

    document.body.appendChild(panel);

    const toggleBtn = document.getElementById('gsp-toggle');
    const nicheSel = document.getElementById('gsp-niche');
    const minBtn = document.getElementById('gsp-minimize');
    const controls = document.getElementById('gsp-controls');

    toggleBtn.onclick = () => {
        STATE.isLooping = !STATE.isLooping;
        updateUIState(toggleBtn);
        if (STATE.isLooping) runCycle();
        else clearTimeout(STATE.loopTimeout);
    };

    minBtn.onclick = () => {
        if (controls.style.display === 'none') {
            controls.style.display = 'flex';
            minBtn.innerText = '−';
        } else {
            controls.style.display = 'none';
            minBtn.innerText = '+';
        }
    };

    nicheSel.value = STATE.currentNiche;
    nicheSel.onchange = (e) => STATE.currentNiche = e.target.value;
    document.getElementById('gsp-modifier').value = STATE.customPromptRef;
    document.getElementById('gsp-modifier').oninput = (e) => STATE.customPromptRef = e.target.value;
}

function updateUIState(btn) {
    const status = document.getElementById('gsp-status');
    if (STATE.isLooping) {
        btn.innerText = "STOP ENGINE";
        btn.style.background = "#ef4444";
        status.innerText = "Status: Running...";
        status.style.color = "#4ade80";
    } else {
        btn.innerText = "START ENGINE";
        btn.style.background = "#3b82f6";
        status.innerText = "Status: Idle";
        status.style.color = "#64748b";
    }
}

// ==========================================
// 4. LOGIC: PROMPT CONSTRUCTION
// ==========================================
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateSuperPrompt() {
    let category = STATE.currentNiche;
    if (category === 'random') {
        const keys = Object.keys(DATA_ENGINE);
        category = keys[Math.floor(Math.random() * keys.length)];
    }

    const db = DATA_ENGINE[category];
    const subject = getRandom(db.subjects);
    const action = getRandom(db.actions);
    const setting = getRandom(db.settings);
    const style1 = getRandom(VISUAL_STYLES);
    const style2 = getRandom(VISUAL_STYLES);
    const mood = getRandom(MOOD_MODIFIERS);
    const userMod = STATE.customPromptRef;

    return `Generate a high-quality stock photo of a ${subject} ${action} ${setting}. Mood: ${mood}. Style: ${style1}, ${style2}. ${userMod} Aspect ratio 16:9. Professional composition, highly detailed, commercial use quality.`;
}

// ==========================================
// 5. AUTOMATION CORE (DEEP SHADOW DOM SUPPORT)
// ==========================================

function findDeep(selector, root = document.body) {
    let found = Array.from(root.querySelectorAll(selector));
    const divWalker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node) => {
            return node.shadowRoot ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
    });

    let currentNode;
    while (currentNode = divWalker.nextNode()) {
        if (currentNode.shadowRoot) {
            found = found.concat(findDeep(selector, currentNode.shadowRoot));
        }
    }

    return found;
}

function findInput() {
    let standardInput = document.querySelector('.ProseMirror');
    if (standardInput && standardInput.isContentEditable) return standardInput;

    const deepProse = findDeep('.ProseMirror');
    for (const el of deepProse) {
        if (el.isContentEditable || el.getAttribute('contenteditable') === 'true') {
            return el;
        }
    }

    const deepEditables = findDeep('div[contenteditable="true"], [role="textbox"]');
    const candidates = deepEditables.filter(el => {
        return el.offsetWidth > 0 && el.offsetHeight > 0;
    });

    if (candidates.length > 0) {
        return candidates[candidates.length - 1];
    }

    return null;
}

function findSendButton() {
    const standardBtns = Array.from(document.querySelectorAll('button, div[role="button"], span[role="button"]'));
    let candidates = standardBtns;

    if (candidates.length < 50) {
        candidates = candidates.concat(findDeep('button'));
        candidates = candidates.concat(findDeep('div[role="button"]'));
        candidates = candidates.concat(findDeep('span[role="button"]'));
    }

    const sendPathFragment = "M2.01 21L23 12";

    for (const b of candidates) {
        if (b.disabled) continue;
        const html = (b.outerHTML || "").toLowerCase();
        const aria = (b.ariaLabel || "").toLowerCase();

        if (aria.includes('send') || aria.includes('kirim') || aria.includes('submit')) return b;
        if (html.includes(sendPathFragment.toLowerCase())) return b;
        if (html.includes('send')) return b;
    }

    return null;
}

function getDownloadCandidates() {
    const allButtons = findDeep('button');
    const allAnchors = findDeep('a'); // Add anchors if needed, but often buttons

    return [...allButtons, ...allAnchors].filter(el => {
        const html = (el.outerHTML || "").toLowerCase();
        if (el.tagName === 'A' && el.hasAttribute('download')) return true;
        if (html.includes('download') || html.includes('unduh')) return true;
        if (html.includes('m19 9h-4v3h9v6h5l7 7 7-7z')) return true;
        return false;
    });
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function runCycle() {
    if (!STATE.isLooping) return;
    await delay(500); // Breathe

    // ==========================================
    // STEP 1: PREPARE & TYPE
    // ==========================================
    const inputEl = findDeepInput();
    if (!inputEl) {
        setStatus("Err: Input Missing", "orange");
        await delay(2000);
        return runCycle();
    }

    setStatus("Typing Prompt...", "#4ade80");

    // SNAPSHOT: How many images exist BEFORE we send?
    const baselineCount = getDownloadCandidates().length;
    console.log(`[GSP] Baseline Images: ${baselineCount}`);

    const prompt = generateSuperPrompt();
    inputEl.focus();
    await delay(300);

    // Robust Entry
    try {
        inputEl.innerHTML = "";
        const p = document.createElement('p');
        p.innerText = prompt;
        inputEl.appendChild(p);
    } catch (e) {
        inputEl.innerText = prompt;
    }

    ['input', 'change', 'textInput'].forEach(evt => {
        inputEl.dispatchEvent(new Event(evt, { bubbles: true, composed: true }));
    });

    STATE.stats.generated++;
    document.getElementById('gsp-count-gen').innerText = STATE.stats.generated;

    await delay(1000);

    // ==========================================
    // STEP 2: SEND (TRIPLE CHECK)
    // ==========================================
    setStatus("Sending...", "#60a5fa");

    let isSent = false;
    for (let i = 1; i <= 3; i++) {
        if (!STATE.isLooping) return;

        // Action
        const sendBtn = findSendButton();
        if (sendBtn) {
            sendBtn.click();
        } else {
            inputEl.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', which: 13, keyCode: 13, bubbles: true, cancelable: true, composed: true }));
        }

        // Wait
        await delay(3000); // 3s wait for backend processing

        // Validate
        const currentText = inputEl.innerText.trim();
        if (currentText.length === 0 || currentText === "\n") {
            isSent = true;
            break; // Success
        } else {
            setStatus(`Retry Send (${i}/3)...`, "orange");
        }
    }

    if (!isSent) {
        // FAILSAFE: Force clear and restart input phase
        inputEl.innerHTML = "";
        setStatus("Send Error. Resetting...", "red");
        await delay(2000);
        return runCycle();
    }

    // ==========================================
    // STEP 3: WAIT FOR *NEW* IMAGE (COUNT BASED)
    // ==========================================
    setStatus("Waiting for Generation...", "#facc15");
    const newButton = await waitForNewDownloadButton(baselineCount);

    if (!newButton || !STATE.isLooping) {
        if (STATE.isLooping) {
            console.warn("GSP: Timeout waiting for new image.");
            setStatus("Timeout. Retrying...", "orange");
            await delay(2000);
            runCycle();
        }
        return;
    }

    // ==========================================
    // STEP 4: DOWNLOAD & VALIDATE (TRIPLE)
    // ==========================================
    setStatus("Downloading...", "#4ade80");

    // 1. SCROLL & PREPARE
    newButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
    await delay(1000);

    // 2. EXECUTE CLICK
    newButton.dataset.gspClicked = "true";
    newButton.click();

    // 3. CONFIRM (Triple Validation Delay)
    setStatus("Validating 1/3 (Click)...", "#4ade80");
    await delay(2000);

    setStatus("Validating 2/3 (Cooldown)...", "#4ade80");
    await delay(3000);

    setStatus("Validating 3/3 (Ready)...", "#4ade80");
    STATE.stats.downloaded++;
    document.getElementById('gsp-count-dl').innerText = STATE.stats.downloaded;
    await delay(1000);

    // ==========================================
    // RESTART
    // ==========================================
    setStatus("Next Cycle...", "#94a3b8");
    await delay(500);
    runCycle();
}

function findDeepInput() {
    return findInput();
}

function setStatus(text, color) {
    const el = document.getElementById('gsp-status');
    if (el) {
        el.innerText = text;
        if (color) el.style.color = color;
    }
}

function waitForNewDownloadButton(baselineCount) {
    return new Promise((resolve) => {
        let attempts = 0;
        const maxAttempts = 150; // Increased to 5 mins

        const interval = setInterval(() => {
            if (!STATE.isLooping) {
                clearInterval(interval);
                resolve(null);
                return;
            }

            attempts++;

            // Check if count increased
            const candidates = getDownloadCandidates();
            const currentCount = candidates.length;

            if (currentCount > baselineCount) {
                // Found a new entry!
                const newBtn = candidates[candidates.length - 1];

                // Double check it's not one we already clicked
                if (newBtn && newBtn.dataset.gspClicked !== "true") {
                    clearInterval(interval);
                    resolve(newBtn);
                    return;
                }
            }

            if (attempts >= maxAttempts) {
                clearInterval(interval);
                resolve(null);
            }

            if (attempts % 5 === 0) setStatus(`Generating (${attempts})...`, "#facc15");

        }, 2000);
    });
}

setTimeout(createPanel, 1500);
