import { productsData, ProductDetail } from '../data/products/index';
import Fuse from 'fuse.js';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  card?: {
    title: string;
    model?: string;
    image?: string;
    desc?: string;
    highlights?: string[];
    specs?: { label: string; value: string }[];
    link?: string;
    linkText?: string;
  };
  suggestions?: string[];
}

// Company Knowledge Base
export const COMPANY_INFO = {
  name: 'Bellator Engineers India Private Limited',
  tagline: 'Precision Damper Valves & Flow Control Engineering Specialists',
  location: 'Plot No 207, J Block, MIDC Bhosari, Pune - 411026, Maharashtra, India',
  phone: '+91 90282 19202 / +91 95118 76925',
  whatsapp: '+919028219202',
  email: 'sales@bellatorengineers.com',
  mdEmail: 'vijay@bellatorengineers.com',
  leadership: 'Vijay Datta Ghute (Founder & Chairman), Sambhaji Datta Ghute (Co-Founder & Director)',
  certifications: ['ASNT Level-II NDT', 'ASME Section IX Certified Welders', 'ISO 9001 Compliant', 'SIL Rated Safety Systems', 'CE Marking Support', '3D CAD / FEA / CFD Stress & Flow Analysis', 'DFMEA / PFMEA Process Quality Control'],
  industries: [
    'Thermal & Combined Cycle Power Plants',
    'Steel & Metallurgical Smelting Plants',
    'Cement, Lime & Mineral Processing Kilns',
    'Oil, Gas, Petrochemical & Refineries',
    'Chemical & Fertilizer Complex Plants',
    'Nuclear Power Generation Systems',
    'Marine & Naval Propulsion Exhaust',
    'Waste-to-Energy & Biomass Incinerators',
    'Glass & Ceramic High-Temp Furnaces',
    'Air Pollution Control (FGD, ESP, Baghouse & SCR/SNCR Systems)'
  ]
};

// FAQ Matrix - Comprehensive Multi-Pattern Engineering & Business Knowledge
const FAQ_LIST: Array<{ patterns: RegExp[]; answer: (query: string) => ChatMessage }> = [
  // 1. Greetings / Welcome
  {
    patterns: [/^(hi|hello|hey|hola|namaste|namaskar|good\s*(morning|afternoon|evening)|howdy|greetings|hii+|heyy+|sup|yo|kay re|kasa ahes)\b/i],
    answer: () => ({
      id: generateId(),
      sender: 'bot',
      text: `Hello! 👋 Welcome to **Bellator Engineers India Private Limited**.\n\nI am your **AI Technical Assistant**. How can I assist you with your industrial flow control, damper valve sizing, or technical RFQ today?`,
      timestamp: getCurrentTime(),
      card: {
        title: 'Quick Engineering Assistance',
        desc: `You can ask me about:\n• **Damper Valve Models:** Guillotine, Butterfly, Multi-Louver, Diverters, Air Seal\n• **Technical Specs:** High Temperatures (-50°C to 1200°C), Zero Leakage & Actuation\n• **Direct RFQ & Quotations:** Connect directly with our Pune engineering facility`,
        link: '/products.html',
        linkText: 'Explore Damper Valve Catalog'
      },
      suggestions: [
        'Explore Zero-Leakage Solutions',
        'High-Temp Dampers up to 1200°C',
        'Request Technical RFQ',
        'Contact & Head Office Location'
      ]
    })
  },

  // 2. Zero Leakage / Tight Isolation
  {
    patterns: [/zero[- ]?leakage|tight shut[- ]?off|100%|man[- ]?safe|seal air|bubble tight|class vi|zero leak/i],
    answer: () => ({
      id: generateId(),
      sender: 'bot',
      text: `Bellator offers **100% Zero-Leakage Man-Safe Isolation** damper valve solutions engineered with seal-air pressurization and flexible metallic seat systems:`,
      timestamp: getCurrentTime(),
      card: {
        title: 'Zero-Leakage Damper Valve Solutions',
        desc: `• **Air Seal Dampers (BE80 / BE85 Series):** Uses seal air blowers delivering 100% man-safe flue gas isolation with zero downstream leakage.\n• **Double Flap Dampers:** Dual sealing discs creating an air pressurized buffer chamber.\n• **Twin Seal Louver Dampers:** Aerodynamic multi-blades with pressurized perimeter air chamber.\n• **Compliance:** Tight shut-off Class VI / ISO 5208 rate A / EN 12266.`,
        link: '/products.html#air-seal-family',
        linkText: 'Explore Zero-Leakage Damper Systems'
      },
      suggestions: ['Air Seal Damper Valves', 'Guillotine Dampers', 'Request Technical Quote']
    })
  },

  // 3. High Temperature / Severe Refractory
  {
    patterns: [/high[- ]?temp|temperature|refractory|1200|1000|800|825|900|heat|furnace|kiln|thermal|hot gas|flue gas temp/i],
    answer: () => ({
      id: generateId(),
      sender: 'bot',
      text: `Bellator Engineers specializes in **Severe High-Temperature Dampers** engineered for extreme continuous duty up to **1200°C**:`,
      timestamp: getCurrentTime(),
      card: {
        title: 'Severe High-Temperature Damper Technology',
        desc: `• **Refractory Lined Dampers (BE-REF Series):** Rated up to **1200°C** for cement kilns, smelting, incinerators & reheat furnaces.\n• **Advanced Metallurgy:** Inconel 625, Hastelloy C-276, Super Duplex SS, RA 330, and SS310S.\n• **External Heavy Duty Bearing Blocks:** Heat-dissipating cooling fins prevent thermal seizure.\n• **FEA Thermal Stress Validation:** Simulated under transient thermal shock cycles.`,
        link: '/products.html#severe-family',
        linkText: 'View Refractory Lined 1200°C Dampers'
      },
      suggestions: ['Refractory Lined Damper Specs', 'Butterfly Dampers', 'Material Selection Guide']
    })
  },

  // 4. Actuation / Automation (Pneumatic, Electric, Hydraulic, Manual)
  {
    patterns: [/actuat(ion|or)|pneumatic|cylinder|electric|motorized|hydraulic|rotork|auma|gearbox|manual|solenoid|limit switch|fail[- ]?safe/i],
    answer: () => ({
      id: generateId(),
      sender: 'bot',
      text: `Bellator damper valves are engineered with a complete array of **precision actuation and automation systems**:`,
      timestamp: getCurrentTime(),
      card: {
        title: 'Actuation & Automation Capabilities',
        desc: `• **Pneumatic Actuation:** Double-acting & Spring-return pneumatic cylinders with quick-exhaust valves & positioners (4-20mA).\n• **Electric Actuation:** Multi-turn / Quarter-turn intelligent motorized actuators (AUMA, Rotork, Emerson, Bernard) with Modbus / Profibus.\n• **Hydraulic Power Units:** High-torque proportional hydraulic power packs with accumulator emergency fail-safe shutoff.\n• **Manual Operation:** Precision bevel & worm gearboxes with handwheel and chain-wheel options.`,
        link: '/about-us.html',
        linkText: 'View Automation Capabilities'
      },
      suggestions: ['Motorized Dampers', 'Pneumatic Sizing RFQ', 'Zero Leakage Dampers']
    })
  },

  // 5. Materials of Construction (MOC) & Metallurgy
  {
    patterns: [/material|moc|metallurgy|stainless steel|ss304|ss316|ss310|inconel|hastelloy|corten|sa516|is2062|duplex/i],
    answer: () => ({
      id: generateId(),
      sender: 'bot',
      text: `Bellator manufactures damper valves using heavy-duty fabricated industrial alloys tailored to your process media corrosiveness and temperature:`,
      timestamp: getCurrentTime(),
      card: {
        title: 'Materials of Construction (MOC) Matrix',
        desc: `• **Carbon Steel & Boiler Quality:** IS 2062 Gr.B, ASTM A36, SA 516 Gr.70 (Standard industrial flue gas)\n• **Weathering & Acid Resistant:** Corten-A / Corten-B (Sulfur flue gases, FGD)\n• **Stainless Steels:** SS304, SS304L, SS316, SS316L, SS321 (Corrosive chemical & marine atmospheres)\n• **High-Temp Heat Resistant:** SS310S, RA330, 253MA (Up to 1050°C)\n• **Super Alloys & Nickel Base:** Inconel 625, Incoloy 800H, Hastelloy C-276 (Severe acid dew point & high-temp smelting)`,
        link: '/products.html',
        linkText: 'Explore Engineered Products'
      },
      suggestions: ['Refractory Lined Dampers', 'Guillotine Damper Valves', 'Request MOC Consultation']
    })
  },

  // 6. Sizes, Shapes & Dimensions
  {
    patterns: [/size|dimension|diameter|round|circular|rectangular|square|dn100|dn5000|5000mm|duct/i],
    answer: () => ({
      id: generateId(),
      sender: 'bot',
      text: `Bellator provides custom fabricated sizing from compact ducts up to mega utility ducts:`,
      timestamp: getCurrentTime(),
      card: {
        title: 'Duct Sizing & Geometry Matrix',
        desc: `• **Circular / Round Duct:** Ø100 mm (4") up to Ø5000 mm (200")\n• **Rectangular / Square Duct:** 200 mm × 200 mm up to 5000 mm × 5000 mm (Single & Multi-blade)\n• **End Connections:** Flanged to match customer duct, Companion flanges, or Butt Weld bevel ends.\n• **Mounting:** Horizontal, Vertical, or Inclined flue gas ducts.`,
        link: '/products.html',
        linkText: 'View Valve Catalog'
      },
      suggestions: ['Multi-Louver Dampers', 'Guillotine Dampers', 'Submit Duct Dimensions RFQ']
    })
  },

  // 7. Testing, Quality & Certifications
  {
    patterns: [/certification|standard|quality|asme|asnt|sil|iso|fea|cfd|testing|inspection|ndt|radiography|dp test|hydro/i],
    answer: () => ({
      id: generateId(),
      sender: 'bot',
      text: `Bellator products undergo 100% rigorous in-house quality inspection and non-destructive testing:`,
      timestamp: getCurrentTime(),
      card: {
        title: 'Quality Assurance & International Standards',
        desc: `✓ **Global Standards:** ASME, API, EN, ISO 9001:2015, DIN, BS, AMCA\n✓ **NDT Inspection:** ASNT Level-II Certified (UT, MPT, DPT, Radiography, Hydrostatic & Pneumatic Seat Leakage Test)\n✓ **Welding Qualifications:** ASME Section IX qualified welders with validated WPS & PQR\n✓ **Computer Aided Engineering:** 3D CAD, in-house FEA static/thermal stress analysis & CFD flow turbulence modeling\n✓ **Safety Integrity:** SIL Rated & CE compliant options`,
        link: '/about-us.html#quality-assurance',
        linkText: 'View Quality Architecture'
      },
      suggestions: ['View High Temp Valves', 'View Zero Leakage Dampers', 'Download Brochure']
    })
  },

  // 8. Lead Time, Delivery & Manufacturing Timeline
  {
    patterns: [/lead time|delivery|delivery time|dispatch|how long|manufacturing time|timeline|shipping/i],
    answer: () => ({
      id: generateId(),
      sender: 'bot',
      text: `Standard manufacturing and dispatch lead times at Bellator Engineers (MIDC Bhosari facility):`,
      timestamp: getCurrentTime(),
      card: {
        title: 'Delivery & Project Timeline',
        desc: `⏱️ **Standard Industrial Dampers:** 4 to 8 Weeks (depending on size & actuation)\n⏱️ **Severe Duty / Refractory / Mega Duct (>3000mm):** 8 to 14 Weeks\n⚡ **Fast-Track / Shutdown Emergency Replacements:** Available upon request with expedited engineering and procurement.`,
        link: '/contact-us.html#connect-desk',
        linkText: 'Check Current Lead Time for your Project'
      },
      suggestions: ['Request Urgent RFQ', 'WhatsApp Sales Desk', 'Head Office Contacts']
    })
  },

  // 9. CAD Drawings, 3D Models & Datasheets
  {
    patterns: [/cad|3d model|drawing|ga drawing|datasheet|catalog|brochure|pdf|spec sheet/i],
    answer: () => ({
      id: generateId(),
      sender: 'bot',
      text: `We provide General Arrangement (GA) Drawings, 3D CAD models (STEP/IGES), and comprehensive engineering datasheets for all projects:`,
      timestamp: getCurrentTime(),
      card: {
        title: 'Technical Drawings & Documentation Support',
        desc: `• **Pre-Order:** Customized General Arrangement (GA) Outline Drawings & preliminary torque sizing.\n• **Post-Order:** Complete 3D CAD Assembly Models, QAP (Quality Assurance Plan), MTC (Material Test Certificates), and O&M Manuals.`,
        link: '/products.html',
        linkText: 'Browse Product Datasheets'
      },
      suggestions: ['Download Valve Brochure', 'Request GA Drawing', 'Submit RFQ']
    })
  },

  // 10. Careers / Jobs / Hiring
  {
    patterns: [/career|job|hiring|vacancy|opening|interview|work at bellator|resume|cv|apply/i],
    answer: () => ({
      id: generateId(),
      sender: 'bot',
      text: `Join the engineering team at Bellator Engineers in Pune! We are continuously hiring passionate engineers, CAD designers, welders, and sales specialists:`,
      timestamp: getCurrentTime(),
      card: {
        title: 'Careers at Bellator Engineers',
        desc: `📍 **Location:** MIDC Bhosari, Pune, Maharashtra\n💼 **Departments:** Design Engineering (3D CAD/FEA), Production & Fabrication, Quality & ASNT Level-II NDT, Technical Sales & RFQ\n✉️ **Direct HR Application:** careers@bellatorengineers.com / sales@bellatorengineers.com`,
        link: '/careers.html',
        linkText: 'Explore Open Positions & Apply'
      },
      suggestions: ['View Job Openings', 'Company Profile', 'Head Office Address']
    })
  },

  // 11. Contact, Address & Directions
  {
    patterns: [/contact|phone|call|mobile|number|email|reach|address|location|office|where are you|pune|midc|bhosari|google map|direction/i],
    answer: () => ({
      id: generateId(),
      sender: 'bot',
      text: `Here is the official contact & facility information for **Bellator Engineers India Private Limited**:`,
      timestamp: getCurrentTime(),
      card: {
        title: 'Bellator Engineers India Pvt. Ltd.',
        desc: `📍 **Works & Head Office:** Plot No 207, J Block, MIDC Bhosari, Pune - 411026, Maharashtra, India\n\n📞 **Direct Line:** +91 90282 19202 / +91 95118 76925\n✉️ **Sales & RFQ:** sales@bellatorengineers.com\n👤 **Managing Director:** vijay@bellatorengineers.com`,
        link: '/contact-us.html#connect-desk',
        linkText: 'Open Contact & RFQ Desk'
      },
      suggestions: ['Request a Quote / RFQ', 'Explore Damper Valves', 'WhatsApp Support']
    })
  },

  // 12. About Company & Leadership
  {
    patterns: [/who are you|about bellator|about company|founder|director|chairman|history|established|vijay|sambhaji/i],
    answer: () => ({
      id: generateId(),
      sender: 'bot',
      text: `**Bellator Engineers India Private Limited** is a premier engineering and manufacturing pioneer headquartered in MIDC Bhosari, Pune, India.\n\nFounded by **Mr. Vijay Datta Ghute** (Founder & Chairman) and **Mr. Sambhaji Datta Ghute** (Co-Founder & Director), Bellator specializes in custom-engineered industrial Damper Valves, Flow Diverters, Gate Isolation Valves, and Flue Gas Handling Systems for critical process industries globally.`,
      timestamp: getCurrentTime(),
      card: {
        title: 'Engineering & Manufacturing Excellence',
        desc: `• Complete in-house 3D CAD, FEA (Finite Element Analysis) & CFD (Fluid Dynamics)\n• ASNT Level-II NDT & ASME Section IX Certified Welding\n• Temperatures from -50°C up to 1200°C (Refractory Lined)\n• Leakage classes up to 100% Zero-Leakage with Air Seal systems`,
        link: '/about-us.html',
        linkText: 'Read Full Company Profile'
      },
      suggestions: ['View Product Catalog', 'Quality & Certifications', 'Contact Sales']
    })
  },

  // 13. RFQ, Quote, Pricing & Inquiries
  {
    patterns: [/rfq|quote|price|cost|inquiry|enquiry|order|buy|costing|budget/i],
    answer: () => ({
      id: generateId(),
      sender: 'bot',
      text: `We provide custom technical quotes for all damper valves based on your duct sizing, media conditions, temperature, and actuation needs:`,
      timestamp: getCurrentTime(),
      card: {
        title: 'Request Technical Quotation (RFQ)',
        desc: `Please provide:\n1. Duct size / shape (Round Ø / Rectangular W×H)\n2. Operating Temperature & Pressure\n3. Medium (Flue gas, air, abrasive dust, corrosive gas)\n4. Required Leakage Class (98%, 99.9% or 100% Zero-Leak)\n5. Actuation (Pneumatic / Electric / Hydraulic / Manual)`,
        link: '/contact-us.html#connect-desk',
        linkText: 'Submit Technical RFQ'
      },
      suggestions: ['Chat on WhatsApp (+91 90282 19202)', 'View Product Range', 'Contact Details']
    })
  },

  // 14. Industries Served
  {
    patterns: [/industry|industries|application|sector|cement|power|steel|marine|nuclear|refinery|furnace|fgd|boiler|hrsg/i],
    answer: () => ({
      id: generateId(),
      sender: 'bot',
      text: `Bellator damper valves are deployed in high-stress, critical flow control systems across diverse heavy industries:`,
      timestamp: getCurrentTime(),
      card: {
        title: 'Industries & Core Applications',
        desc: `• **Thermal Power & WHRB:** Boiler flue gas isolation, bypass & ID/FD fans\n• **Cement & Minerals:** Raw mill, preheater, kiln exhaust & clinker cooler\n• **Steel & Metallurgy:** Blast furnace, converter gas & sinter plants\n• **Nuclear & Marine:** Extreme safety ventilation & naval exhaust diverters\n• **Pollution Control:** Baghouse, ESP, FGD & SCR/SNCR desulfurization systems`,
        link: '/products.html',
        linkText: 'Explore Industrial Solutions'
      },
      suggestions: ['Guillotine Damper Valves', 'Refractory Lined 1200°C', 'Multi-Louver Dampers']
    })
  },

  // 15. WhatsApp & Live Person
  {
    patterns: [/whatsapp|chat|direct call|talk to human|live person|help|urgent/i],
    answer: () => ({
      id: generateId(),
      sender: 'bot',
      text: `You can connect immediately with Bellator's lead engineering & sales desk on WhatsApp or direct call:`,
      timestamp: getCurrentTime(),
      card: {
        title: 'Instant Support & Engineering Desk',
        desc: `💬 **WhatsApp:** +91 90282 19202\n📞 **Phone:** +91 90282 19202 / +91 95118 76925\n✉️ **Email:** sales@bellatorengineers.com\n⏱️ Available Monday to Saturday, 9:00 AM – 7:00 PM IST`,
        link: 'https://wa.me/919028219202?text=Hello%20Bellator%20Engineers%2C%20I%20have%20an%20engineering%20inquiry',
        linkText: 'Open WhatsApp Chat Now'
      },
      suggestions: ['Request RFQ Quote', 'Explore Products', 'Head Office Address']
    })
  }
];

function generateId(): string {
  return 'msg_' + Math.random().toString(36).substring(2, 9);
}

function getCurrentTime(): string {
  const d = new Date();
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export class BellatorChatbot {
  private modal: HTMLElement | null = null;
  private triggerBtn: HTMLElement | null = null;
  private messagesContainer: HTMLElement | null = null;
  private inputField: HTMLInputElement | null = null;
  private closeBtn: HTMLElement | null = null;
  private messages: ChatMessage[] = [];
  private isOpen: boolean = false;
  private isTyping: boolean = false;

  constructor() {
    this.initDOM();
    this.bindEvents();
    this.addWelcomeMessage();
  }

  private initDOM() {
    // Check if floating widget already exists, else create it
    let botRoot = document.getElementById('bellator-ai-chatbot-root');
    if (!botRoot) {
      botRoot = document.createElement('div');
      botRoot.id = 'bellator-ai-chatbot-root';
      document.body.appendChild(botRoot);
    }

    botRoot.innerHTML = `
      <!-- Floating Chat Launcher Button -->
      <div id="bellator-chat-launcher" class="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <!-- Floating Prompt Bubble (Desktop) -->
        <div id="bellator-chat-badge" class="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0B1220]/95 backdrop-blur-md border border-orange-500/30 text-white shadow-xl cursor-pointer hover:border-orange-500 transition-all duration-300 animate-bounce">
          <span class="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
          <span class="text-xs font-semibold tracking-wide">Ask Bellator AI Expert</span>
        </div>

        <button id="bellator-chat-trigger" type="button" aria-label="Open Bellator AI Chatbot"
          class="group relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#EE6226] via-[#f37743] to-[#EE6226] p-0.5 shadow-[0_10px_35px_rgba(238,98,38,0.5)] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center focus:outline-none">
          <span class="absolute inset-0 rounded-full bg-[#EE6226] animate-ping opacity-25 pointer-events-none"></span>
          <div class="w-full h-full rounded-full bg-[#0B1220] flex items-center justify-center relative overflow-hidden">
            <!-- Normal Chat Icon -->
            <svg id="bellator-chat-icon-open" class="w-7 h-7 text-white transition-all duration-300 group-hover:scale-110" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <!-- Close Icon (Hidden by default) -->
            <svg id="bellator-chat-icon-close" class="w-6 h-6 text-white hidden transition-all duration-300" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </button>
      </div>

      <!-- Chat Modal Window -->
      <div id="bellator-chat-modal" class="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] md:w-[460px] h-[580px] max-h-[calc(100vh-7.5rem)] bg-white/95 backdrop-blur-2xl rounded-3xl border border-slate-200/90 shadow-[0_25px_70px_rgba(15,23,42,0.25),0_0_0_1px_rgba(238,98,38,0.15)] flex flex-col overflow-hidden transition-all duration-300 transform scale-90 opacity-0 pointer-events-none origin-bottom-right">
        
        <!-- Header -->
        <div class="bg-gradient-to-r from-[#0B1220] via-[#111C30] to-[#0B1220] px-5 py-4 flex items-center justify-between border-b border-white/10 text-white select-none">
          <div class="flex items-center gap-3">
            <div class="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-[#EE6226] to-[#f9824f] p-0.5 flex-shrink-0 shadow-md">
              <div class="w-full h-full bg-[#0B1220] rounded-[10px] flex items-center justify-center overflow-hidden p-1">
                <img src="/cropped-fav-32x32.png" alt="Bellator" class="w-full h-full object-contain" />
              </div>
              <span class="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#25D366] border-2 border-[#0B1220]"></span>
            </div>
            <div>
              <div class="flex items-center gap-1.5">
                <h3 class="font-bold text-sm text-white tracking-wide">Bellator Engineering AI</h3>
                <span class="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-[#EE6226]/20 border border-[#EE6226]/40 text-[#EE6226] font-semibold">24/7 Live</span>
              </div>
              <p class="text-[11px] text-slate-300">Damper Valves & Technical Support Desk</p>
            </div>
          </div>
          
          <div class="flex items-center gap-1">
            <button id="bellator-chat-refresh" type="button" aria-label="Clear chat" title="Reset Conversation" class="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
            <button id="bellator-chat-close" type="button" aria-label="Close chat" class="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- System Alert / WhatsApp Quick Banner -->
        <div class="bg-gradient-to-r from-orange-50 to-orange-100/60 px-4 py-2 border-b border-orange-200/50 flex items-center justify-between text-xs text-slate-700">
          <div class="flex items-center gap-1.5 font-medium">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>Need immediate human engineer RFQ?</span>
          </div>
          <a href="https://wa.me/919028219202?text=Hello%20Bellator%20Engineers%2C%20I%20have%20an%20urgent%20inquiry" target="_blank" rel="noopener noreferrer" class="font-bold text-[#EE6226] hover:text-[#d8551d] inline-flex items-center gap-0.5">
            WhatsApp &rarr;
          </a>
        </div>

        <!-- Messages Body -->
        <div id="bellator-chat-messages" class="flex-1 p-4 overflow-y-auto space-y-3.5 scroll-smooth text-sm">
          <!-- Messages will be rendered here dynamically -->
        </div>

        <!-- Quick Prompts Row -->
        <div id="bellator-chat-quick-suggestions" class="px-4 py-2 border-t border-slate-100 bg-slate-50/70 flex items-center gap-1.5 overflow-x-auto no-scrollbar select-none text-xs">
          <!-- Quick action chips -->
        </div>

        <!-- Input Box -->
        <div class="p-3 bg-white border-t border-slate-200/80">
          <form id="bellator-chat-form" class="flex items-center gap-2">
            <div class="relative flex-1">
              <input id="bellator-chat-input" type="text" placeholder="Ask about Damper Valves, specs, leakage..." 
                autocomplete="off"
                class="w-full pl-3.5 pr-10 py-2.5 rounded-full bg-slate-100/90 border border-slate-200/80 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#EE6226] focus:bg-white focus:ring-2 focus:ring-orange-500/20 transition-all" />
              <button type="button" id="bellator-chat-mic" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#EE6226] transition-colors" title="Voice Search">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </button>
            </div>

            <button id="bellator-chat-send" type="submit" aria-label="Send Message"
              class="w-10 h-10 rounded-full bg-[#EE6226] hover:bg-[#d8551d] text-white flex items-center justify-center shadow-md shadow-orange-500/30 transition-all duration-200 hover:scale-105 active:scale-95 flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed">
              <svg class="w-4 h-4 translate-x-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3 3l18 9-18 9 3-9zm0 0h9" />
              </svg>
            </button>
          </form>
          <div class="mt-1.5 flex items-center justify-between text-[10px] text-slate-400 px-1">
            <span>⚡ Instant answers from Bellator Technical Database</span>
            <span>MIDC Bhosari, Pune</span>
          </div>
        </div>

      </div>
    `;

    this.modal = document.getElementById('bellator-chat-modal');
    this.triggerBtn = document.getElementById('bellator-chat-trigger');
    this.messagesContainer = document.getElementById('bellator-chat-messages');
    this.inputField = document.getElementById('bellator-chat-input') as HTMLInputElement;
    this.closeBtn = document.getElementById('bellator-chat-close');
  }

  private bindEvents() {
    // Open/Close toggle
    const badge = document.getElementById('bellator-chat-badge');
    const refreshBtn = document.getElementById('bellator-chat-refresh');
    const form = document.getElementById('bellator-chat-form');
    const micBtn = document.getElementById('bellator-chat-mic');

    const toggleChat = () => {
      this.isOpen = !this.isOpen;
      this.updateModalState();
    };

    if (this.triggerBtn) this.triggerBtn.addEventListener('click', toggleChat);
    if (badge) badge.addEventListener('click', toggleChat);
    if (this.closeBtn) this.closeBtn.addEventListener('click', () => {
      this.isOpen = false;
      this.updateModalState();
    });

    if (refreshBtn) {
      refreshBtn.addEventListener('click', () => {
        this.messages = [];
        if (this.messagesContainer) this.messagesContainer.innerHTML = '';
        this.addWelcomeMessage();
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleUserSubmit();
      });
    }

    if (micBtn && this.inputField) {
      micBtn.addEventListener('click', () => {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
          this.inputField!.placeholder = 'Listening not supported in browser. Type here...';
          setTimeout(() => {
            this.inputField!.placeholder = 'Ask about Damper Valves, specs, leakage...';
          }, 3000);
          return;
        }

        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        this.inputField!.placeholder = '🎙️ Listening... Speak your question';
        micBtn.classList.add('text-[#EE6226]', 'animate-pulse');

        recognition.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          if (this.inputField) {
            this.inputField.value = transcript;
            this.handleUserSubmit();
          }
        };

        recognition.onerror = () => {
          if (this.inputField) this.inputField.placeholder = 'Ask about Damper Valves, specs, leakage...';
          micBtn.classList.remove('text-[#EE6226]', 'animate-pulse');
        };

        recognition.onend = () => {
          micBtn.classList.remove('text-[#EE6226]', 'animate-pulse');
          if (this.inputField && !this.inputField.value) {
            this.inputField.placeholder = 'Ask about Damper Valves, specs, leakage...';
          }
        };

        recognition.start();
      });
    }

    // Note: Home search bar now displays answers directly inline inside #ai-response-box.
    // Floating chatbot stays independent and does not pop up automatically.
  }

  private updateModalState() {
    const iconOpen = document.getElementById('bellator-chat-icon-open');
    const iconClose = document.getElementById('bellator-chat-icon-close');
    const badge = document.getElementById('bellator-chat-badge');

    if (!this.modal) return;

    if (this.isOpen) {
      this.modal.classList.remove('scale-90', 'opacity-0', 'pointer-events-none');
      this.modal.classList.add('scale-100', 'opacity-100', 'pointer-events-auto');
      if (iconOpen) iconOpen.classList.add('hidden');
      if (iconClose) iconClose.classList.remove('hidden');
      if (badge) badge.classList.add('hidden');
      setTimeout(() => {
        if (this.inputField) this.inputField.focus();
        this.scrollToBottom();
      }, 150);
    } else {
      this.modal.classList.add('scale-90', 'opacity-0', 'pointer-events-none');
      this.modal.classList.remove('scale-100', 'opacity-100', 'pointer-events-auto');
      if (iconOpen) iconOpen.classList.remove('hidden');
      if (iconClose) iconClose.classList.add('hidden');
      if (badge) badge.classList.remove('hidden');
    }
  }

  private addWelcomeMessage() {
    const welcomeMsg: ChatMessage = {
      id: generateId(),
      sender: 'bot',
      text: `Hello! 👋 Welcome to **Bellator Engineers India Private Limited**.\n\nI am your **AI Technical Assistant**. I can answer any questions about our **Damper Valve product models, technical specifications (temperatures up to 1200°C, zero-leakage air seal, FEA/CFD engineering), industrial applications, or direct RFQs**.`,
      timestamp: getCurrentTime(),
      suggestions: [
        'Guillotine Damper Valves',
        'Butterfly Damper Valves',
        'Multi-Louver Damper Valves',
        'High Temp Refractory Valves',
        'Request Technical RFQ',
        'Company Address & Contacts'
      ]
    };

    this.renderMessage(welcomeMsg);
  }

  private handleUserSubmit() {
    if (!this.inputField) return;
    const text = this.inputField.value.trim();
    if (!text || this.isTyping) return;

    this.inputField.value = '';
    this.addUserMessage(text);
    this.processQuery(text);
  }

  public addUserMessage(text: string) {
    const userMsg: ChatMessage = {
      id: generateId(),
      sender: 'user',
      text: text,
      timestamp: getCurrentTime()
    };
    this.messages.push(userMsg);
    this.renderMessage(userMsg);
  }

  private renderMessage(msg: ChatMessage) {
    if (!this.messagesContainer) return;

    const isBot = msg.sender === 'bot';
    const msgEl = document.createElement('div');
    msgEl.className = `flex flex-col ${isBot ? 'items-start' : 'items-end'} animate-fade-in`;

    // Format rich markdown text using marked and sanitize with DOMPurify
    const rawHtml = marked.parse(msg.text, { async: false }) as string;
    const formattedText = DOMPurify.sanitize(rawHtml);

    let cardHtml = '';
    if (msg.card) {
      cardHtml = `
        <div class="mt-2.5 w-full bg-white rounded-2xl border border-orange-500/20 shadow-sm overflow-hidden text-xs">
          ${msg.card.image ? `
            <div class="w-full h-32 bg-slate-100 relative overflow-hidden flex items-center justify-center p-2">
              <img src="${msg.card.image}" alt="${msg.card.title}" class="h-full w-auto object-contain transition-transform duration-300 hover:scale-105" onerror="this.style.display='none'" />
            </div>
          ` : ''}
          <div class="p-3.5 space-y-2">
            ${msg.card.model ? `<span class="inline-block px-2 py-0.5 rounded bg-orange-100 text-[#EE6226] font-mono font-bold text-[10px]">${msg.card.model}</span>` : ''}
            <h4 class="font-bold text-slate-900 text-sm">${msg.card.title}</h4>
            ${msg.card.desc ? `<p class="text-slate-600 leading-relaxed text-[11px] whitespace-pre-line">${msg.card.desc.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>` : ''}
            
            ${msg.card.specs && msg.card.specs.length ? `
              <div class="grid grid-cols-2 gap-1.5 pt-1.5 border-t border-slate-100 text-[11px]">
                ${msg.card.specs.map(s => `
                  <div class="bg-slate-50 p-1.5 rounded border border-slate-100">
                    <span class="text-slate-400 block text-[9px] uppercase font-semibold">${s.label}</span>
                    <span class="text-slate-800 font-medium">${s.value}</span>
                  </div>
                `).join('')}
              </div>
            ` : ''}

            ${msg.card.highlights && msg.card.highlights.length ? `
              <ul class="space-y-1 pt-1.5 border-t border-slate-100 text-[11px] text-slate-700">
                ${msg.card.highlights.slice(0, 3).map(h => `<li class="flex items-start gap-1"><span class="text-[#EE6226] font-bold">✓</span> <span>${h}</span></li>`).join('')}
              </ul>
            ` : ''}

            ${msg.card.link ? `
              <div class="pt-2">
                <a href="${msg.card.link}" class="inline-flex items-center justify-center w-full gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-[#EE6226] to-[#d8551d] text-white font-semibold text-xs transition-all hover:shadow-md hover:shadow-orange-500/20 active:scale-95">
                  <span>${msg.card.linkText || 'View Product Datasheet'}</span>
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }

    msgEl.innerHTML = `
      <div class="flex items-start gap-2 max-w-[88%] ${isBot ? '' : 'flex-row-reverse'}">
        ${isBot ? `
          <div class="w-7 h-7 rounded-lg bg-[#0B1220] border border-orange-500/40 p-1 flex items-center justify-center flex-shrink-0 mt-0.5">
            <img src="/cropped-fav-32x32.png" alt="Bellator AI" class="w-full h-full object-contain" />
          </div>
        ` : `
          <div class="w-7 h-7 rounded-lg bg-[#EE6226] flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
            You
          </div>
        `}
        <div class="flex flex-col">
          <div class="px-4 py-2.5 rounded-2xl ${
            isBot 
              ? 'bg-slate-100/90 border border-slate-200 text-slate-800 rounded-tl-sm' 
              : 'bg-gradient-to-r from-[#EE6226] to-[#d8551d] text-white rounded-tr-sm shadow-sm'
          } leading-relaxed">
            ${formattedText}
            ${cardHtml}
          </div>
          <span class="text-[10px] text-slate-400 mt-1 px-1 ${isBot ? 'text-left' : 'text-right'}">${msg.timestamp}</span>
        </div>
      </div>
    `;

    this.messagesContainer.appendChild(msgEl);
    this.renderSuggestions(msg.suggestions || []);
    this.scrollToBottom();
  }

  private renderSuggestions(suggestions: string[]) {
    const container = document.getElementById('bellator-chat-quick-suggestions');
    if (!container) return;

    if (!suggestions || !suggestions.length) {
      container.classList.add('hidden');
      return;
    }

    container.classList.remove('hidden');
    container.innerHTML = suggestions.map((s) => `
      <button type="button" class="chat-chip flex-shrink-0 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-[#EE6226] hover:text-[#EE6226] hover:bg-orange-50 font-medium transition-all duration-200 shadow-xs">
        ${s}
      </button>
    `).join('');

    container.querySelectorAll('.chat-chip').forEach((btn) => {
      btn.addEventListener('click', () => {
        const query = btn.textContent?.trim() || '';
        this.addUserMessage(query);
        this.processQuery(query);
      });
    });
  }

  private showTypingIndicator() {
    if (!this.messagesContainer) return;
    this.isTyping = true;
    const typingEl = document.createElement('div');
    typingEl.id = 'chat-typing-indicator';
    typingEl.className = 'flex items-center gap-2 text-slate-400 text-xs py-1 animate-fade-in';
    typingEl.innerHTML = `
      <div class="w-6 h-6 rounded-lg bg-[#0B1220] p-1 flex items-center justify-center flex-shrink-0">
        <img src="/cropped-fav-32x32.png" alt="Bellator" class="w-full h-full object-contain" />
      </div>
      <div class="flex items-center gap-1 bg-slate-100 px-3 py-2 rounded-2xl rounded-tl-sm border border-slate-200">
        <span class="w-1.5 h-1.5 rounded-full bg-[#EE6226] animate-bounce" style="animation-delay: 0ms"></span>
        <span class="w-1.5 h-1.5 rounded-full bg-[#EE6226] animate-bounce" style="animation-delay: 150ms"></span>
        <span class="w-1.5 h-1.5 rounded-full bg-[#EE6226] animate-bounce" style="animation-delay: 300ms"></span>
      </div>
    `;
    this.messagesContainer.appendChild(typingEl);
    this.scrollToBottom();
  }

  private removeTypingIndicator() {
    this.isTyping = false;
    const typingEl = document.getElementById('chat-typing-indicator');
    if (typingEl) typingEl.remove();
  }

  private scrollToBottom() {
    if (this.messagesContainer) {
      this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
  }

  // Comprehensive Query Processing with Knowledge Base & Products Matching
  private processQuery(rawQuery: string) {
    this.showTypingIndicator();

    setTimeout(() => {
      this.removeTypingIndicator();
      const botResponse = getAiBotResponse(rawQuery);
      this.renderMessage(botResponse);
    }, 450);
  }
}

// Comprehensive Indexing of All 23+ JSON Products Data from src/data/products/*.json
const productList = Object.values(productsData);

// Flatten and enrich product data for Deep AI Search & Retrieval
interface EnrichedProductSearchDoc {
  product: ProductDetail;
  searchableContent: string;
  title: string;
  model: string;
  categoryLabel: string;
  materials: string;
  temp: string;
  pressure: string;
  leakage: string;
  sizes: string;
  actuation: string;
  standards: string;
  applications: string[];
  features: string[];
  keyHighlights: string[];
  technicalSpecsText: string;
  mocText: string;
  automationText: string;
}

const enrichedProductDocs: EnrichedProductSearchDoc[] = productList.map((p) => {
  const techSpecs = (p.technicalSpecs || []).map(s => `${s.parameter}: ${s.details}`).join(' ');
  const moc = (p.mocTable || []).map(m => `${m.component}: ${m.material}`).join(' ');
  const auto = (p.automationOptions || []).map(a => `${a.name} ${a.desc || ''}`).join(' ');
  const apps = (p.applications || []).join(' ');
  const feats = (p.features || []).join(' ');
  const highlights = (p.keyHighlights || []).join(' ');
  const indus = (p.industriesServed || []).map(i => i.name).join(' ');

  const searchableContent = `
    ${p.title} ${p.model} ${p.id} ${p.categoryLabel} ${p.tagline || ''} ${p.desc || ''} ${p.longDesc || ''}
    ${p.temp || ''} ${p.leakage || ''} ${p.pressure || ''} ${p.sizes || ''} ${p.materials || ''}
    ${p.actuation || ''} ${p.standards || ''} ${p.shapes || ''} ${p.endConnection || ''}
    ${techSpecs} ${moc} ${auto} ${apps} ${feats} ${highlights} ${indus}
  `.toLowerCase();

  return {
    product: p,
    searchableContent,
    title: p.title,
    model: p.model,
    categoryLabel: p.categoryLabel,
    materials: p.materials,
    temp: p.temp,
    pressure: p.pressure,
    leakage: p.leakage,
    sizes: p.sizes,
    actuation: p.actuation,
    standards: p.standards,
    applications: p.applications || [],
    features: p.features || [],
    keyHighlights: p.keyHighlights || [],
    technicalSpecsText: techSpecs,
    mocText: moc,
    automationText: auto
  };
});

const productFuse = new Fuse(enrichedProductDocs, {
  keys: [
    { name: 'title', weight: 0.35 },
    { name: 'model', weight: 0.3 },
    { name: 'searchableContent', weight: 0.25 },
    { name: 'categoryLabel', weight: 0.2 },
    { name: 'materials', weight: 0.15 },
    { name: 'applications', weight: 0.15 },
    { name: 'keyHighlights', weight: 0.15 },
    { name: 'technicalSpecsText', weight: 0.15 },
    { name: 'mocText', weight: 0.1 }
  ],
  threshold: 0.45,
  ignoreLocation: true,
  includeScore: true
});

export function getAiBotResponse(rawQuery: string): ChatMessage {
  const q = rawQuery.trim().toLowerCase();

  // 1. Check FAQ matrix for exact company / process / general questions
  for (const faq of FAQ_LIST) {
    for (const pattern of faq.patterns) {
      if (pattern.test(q)) {
        return faq.answer(rawQuery);
      }
    }
  }

  // 2. Search entire `src/data/products/*.json` data with Fuse.js
  const searchResults = productFuse.search(rawQuery);
  const bestResult = searchResults.length > 0 ? searchResults[0].item.product : null;

  // If match found in products database
  if (bestResult) {
    // Generate enriched technical specs list from JSON
    const specsList: { label: string; value: string }[] = [];
    if (bestResult.temp) specsList.push({ label: 'Temperature', value: bestResult.temp });
    if (bestResult.leakage) specsList.push({ label: 'Leakage Class', value: bestResult.leakage });
    if (bestResult.sizes) specsList.push({ label: 'Size Range', value: bestResult.sizes });
    if (bestResult.pressure) specsList.push({ label: 'Pressure Rating', value: bestResult.pressure });
    if (bestResult.actuation) specsList.push({ label: 'Actuation', value: bestResult.actuation });
    if (bestResult.standards) specsList.push({ label: 'Standards', value: bestResult.standards });

    // Enriched description highlighting materials & features from JSON
    let descText = bestResult.desc || bestResult.tagline || '';
    if (bestResult.materials) {
      descText += `\n\n⚙️ **Materials of Construction (MOC):** ${bestResult.materials}`;
    }

    return {
      id: generateId(),
      sender: 'bot',
      text: `Here is the verified technical datasheet for **${bestResult.title}** from Bellator's product catalog:`,
      timestamp: getCurrentTime(),
      card: {
        title: bestResult.title,
        model: bestResult.model,
        image: bestResult.image,
        desc: descText,
        highlights: bestResult.keyHighlights && bestResult.keyHighlights.length ? bestResult.keyHighlights : bestResult.features,
        specs: specsList.slice(0, 4),
        link: `/product-detail.html?id=${bestResult.id}`,
        linkText: `Open Full 3D CAD & Engineering Datasheet`
      },
      suggestions: [
        `Request RFQ for ${bestResult.model || 'this Valve'}`,
        'Explore Materials & Standards',
        'Compare Other Damper Models',
        'Chat on WhatsApp (+91 90282 19202)'
      ]
    };
  }

  // 3. Fallback / General Guidance referencing products catalogue
  return {
    id: generateId(),
    sender: 'bot',
    text: `Bellator Engineers designs and fabricates **custom industrial damper valves** across 23+ specialized product lines in MIDC Bhosari, Pune.\n\nCould you please specify your **duct dimensions (Round Ø / Rectangular)**, **operating temperature**, or **target valve series**?`,
    timestamp: getCurrentTime(),
    card: {
      title: 'Damper Valve Solution Matrix (23+ Product Series)',
      desc: `• **Guillotine Dampers (BE90 Series):** Positive tight isolation in abrasive/dusty flue gases\n• **Butterfly Dampers (BE10/BE20/BE30 Series):** Rapid shut-off & flow modulation up to 1000°C\n• **Multi-Louver Dampers (BE50 Series):** Aerodynamic precision flow regulation & bypass\n• **Three-Way Diverters (BE70 Series):** Combined cycle HRSG & gas turbine diverters\n• **Air Seal Dampers (BE80/BE85 Series):** 100% Man-Safe zero leakage isolation\n• **Refractory Lined Dampers (BE-REF Series):** Extreme severe duty up to 1200°C`,
      link: '/products.html',
      linkText: 'Browse Complete 23+ Product Lines'
    },
    suggestions: [
      'Guillotine Damper Valves',
      'Butterfly Damper Valves',
      'Multi-Louver Damper Valves',
      'Refractory Lined 1200°C',
      'Air Seal Zero-Leakage',
      'Direct Contact & RFQ'
    ]
  };
}

// Global initialization
let botInstance: BellatorChatbot | null = null;
export function initChatbot() {
  if (!botInstance) {
    botInstance = new BellatorChatbot();
  }
  return botInstance;
}
