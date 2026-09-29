export interface MaterialTableItem {
  component: string;
  material: string;
}

export interface SpecTableItem {
  parameter: string;
  details: string;
}

export interface ReferenceItem {
  endUser: string;
  application: string;
  logo?: string;
}

export interface ProductDetail {
  id: string;
  title: string;
  model: string;
  image: string;
  category: 'isolation' | 'control' | 'severe';
  categoryLabel: string;
  tagline: string;
  desc: string;
  longDesc?: string;
  keyHighlights: string[];
  leakage: string;
  temp: string;
  pressure: string;
  sizes: string;
  materials: string;
  actuation: string;
  standards: string;
  features: string[];
  applications: string[];
  // Brochure enriched fields
  taglineBrochure?: string;
  shapes?: string;
  endConnection?: string;
  rectangularSize?: string;
  technicalSpecs?: SpecTableItem[];
  mocTable?: MaterialTableItem[];
  automationOptions?: { name: string; desc?: string }[];
  optionalFeatures?: string[];
  inspectionTesting?: string[];
  majorReferences?: ReferenceItem[];
  galleryImages?: { title: string; subtitle?: string; image?: string }[];
  industriesServed?: { name: string; image?: string }[];
}

export const productsData: Record<string, ProductDetail> = {
  'butterfly-damper-valves': {
    id: 'butterfly-damper-valves',
    title: 'BE10 : BUTTERFLY DAMPER VALVES',
    model: 'BE10 SERIES',
    image: '/images/products/BE10-Motorized-Single-Flap-Butterfly-Damper-Valve.png',
    category: 'isolation',
    categoryLabel: 'Isolation & Flow Control',
    tagline: 'Engineered for reliable isolation and flow control of air, flue gases, and process media in industrial ducting systems.',
    desc: 'Bellator BE10 Series Butterfly Damper Valves are engineered for reliable isolation and flow control of air, flue gases, and process media in industrial ducting systems. Designed for low pressure drop, dependable sealing performance, and long operational life under demanding service conditions.',
    longDesc: 'Bellator BE10 Series Butterfly Damper Valves are engineered for reliable isolation and flow control of air, flue gases, and process media in industrial ducting systems. Designed for low pressure drop, dependable sealing performance, and long operational life, these dampers ensure reliable operation under demanding service conditions.\n\nManufactured with heavy-duty fabricated construction and application-oriented engineering, the BE10 Series offers smooth operation and reliable performance under continuous duty and elevated temperature conditions. The dampers are available in Round, Square, and Rectangular configurations with customized dimensions to suit project requirements.\n\nThe BE10 Series can be supplied with Manual, Pneumatic, Electric, or Hydraulic actuation systems along with complete automation accessories. Designed using advanced engineering tools including 3D modelling and FEA-based validation, Bellator dampers are optimized for thermal expansion, actuator sizing, and long-term operational reliability.',
    taglineBrochure: '“Engineered for Reliability • Built for Performance • Designed for Critical Applications”',
    keyHighlights: [
      'Low Pressure Drop Design & Heavy Duty Fabricated Construction',
      'Low Operating Torque & Maintenance Friendly Design',
      'Multiple Automation Options: Manual, Pneumatic, Electric, Hydraulic',
      'Custom Designed as per Application & Suitable for Corrosive & Dusty Media',
      '3D Modelling & FEA-based validation for thermal expansion and long life'
    ],
    leakage: 'Up to 99.95%',
    temp: '-25°C to 825°C',
    pressure: 'Up to 10197 mmWC',
    sizes: 'Ø40 mm to Ø7000 mm (Rectangular up to 12000 mm)',
    materials: 'Body: IS2062 / SA516 Gr-70 | Disc: SS304 / SS310S | Shaft: EN8D / SS410 / SS316',
    actuation: 'Manual / Pneumatic / Electric / Hydraulic',
    standards: 'API / ASME / ISO / Customer Specific',
    shapes: 'Round / Square / Rectangular',
    endConnection: 'Wafer / Flanged / Butt Weld',
    rectangularSize: 'Up to 12000 mm',
    technicalSpecs: [
      { parameter: 'Damper Valve Type', details: 'Butterfly' },
      { parameter: 'Size Range', details: 'Ø40 mm to Ø7000 mm' },
      { parameter: 'Rectangular Size', details: 'Up to 12000 mm' },
      { parameter: 'Design Temperature', details: '-25°C to 825°C' },
      { parameter: 'Pressure Rating', details: 'Up to 10197 mmWC' },
      { parameter: 'Leakage Performance', details: 'Up to 99.95%' },
      { parameter: 'Operation', details: 'Manual / Pneumatic / Electric / Hydraulic' },
      { parameter: 'End Connection', details: 'Wafer / Flanged / Butt Weld' },
      { parameter: 'Shapes', details: 'Round / Square / Rectangular' },
      { parameter: 'Design Standards', details: 'API / ASME / ISO / Customer Specific' },
      { parameter: 'Automation', details: 'Pneumatic / Electric / Hydraulic' }
    ],
    mocTable: [
      { component: 'Body', material: 'IS2062 / SA516 Gr-70 / Customer Specific' },
      { component: 'Disc', material: 'SS304 / SS310S / Customer Specific' },
      { component: 'Shaft', material: 'EN8D / SS410 / SS316 / Customer Specific' },
      { component: 'Seat', material: 'Metallic / Soft Seat / Customer Specific' },
      { component: 'Seal', material: 'Ceramic Fiber / Graphite / SS / Customer Specific' },
      { component: 'Bearings', material: 'Heavy Duty Self Lubricated / Customer Specific' }
    ],
    automationOptions: [
      { name: 'Pneumatic', desc: 'Heavy duty pneumatic actuator with positioners, solenoid valves & limit switches' },
      { name: 'Electric', desc: 'Motorized quarter-turn/multi-turn actuators for modulating & ON/OFF control' },
      { name: 'Hydraulic', desc: 'Electro-hydraulic power units with fast trip fail-safe accumulators' },
      { name: 'Manual', desc: 'Hand lever and precision bevel/worm gearboxes with position indicators' }
    ],
    features: [
      'Low Pressure Drop Design',
      'Heavy Duty Fabricated Construction',
      'Low Operating Torque',
      'Maintenance Friendly Design',
      'Multiple Automation Options',
      'Custom Designed as per Application',
      'Suitable for Corrosive & Dusty Media'
    ],
    optionalFeatures: [
      'Air Seal Arrangement',
      'Spark Proof Design',
      'Anti-Static Design',
      'Anti-Blowout Shaft Design',
      'Seismic Qualified Design',
      'High Temperature Design',
      'C5 / NORSOK Paint System',
      'Refractory Lining Option',
      'External Insulation Option'
    ],
    inspectionTesting: [
      'Inspection & Testing',
      'Leakage Testing',
      'Functional Testing',
      'Dimensional Inspection',
      'NDT Examination',
      'PMI Testing',
      'FAT Support',
      'Third Party Inspection',
      'QA Dossier Documentation',
      'Inspection by BV / TUV / SGS / DNV / Client TPI can be offered'
    ],
    applications: [
      'Boiler Air & Flue Gas Lines',
      'ID / FD Fan Isolation',
      'Hot Air Systems',
      'Exhaust Systems',
      'Dust Collection Systems',
      'HVAC Ventilation Systems',
      'Kiln & Furnace Systems'
    ],
    majorReferences: [
      { endUser: 'Saudi Aramco', application: 'Isolation of Combustion Air' },
      { endUser: 'Reliance Industries Limited', application: 'Process Gas System' },
      { endUser: 'Petroleum Development Oman (PDO)', application: 'Isolation of Combustion Air' },
      { endUser: 'Unilever', application: 'Incinerator Line' },
      { endUser: 'Asian Paints', application: 'Boiler Process Line' },
      { endUser: 'Welspun', application: 'Process Gas System' }
    ],
    galleryImages: [
      { title: 'PNEUMATIC BUTTERFLY DAMPER', subtitle: 'Dia 900 mm', image: '/images/gallery/be10/gallery-be10-pneumatic-dia-900.webp' },
      { title: 'MOTORISED BUTTERFLY DAMPER', subtitle: 'Dia 1200 mm', image: '/images/gallery/be10/gallery-be10-motorised-dia-1200.webp' },
      { title: 'PNEUMATIC BUTTERFLY DAMPER', subtitle: 'Dia 1250 mm', image: '/images/gallery/be10/gallery-be10-pneumatic-dia-1250.webp' },
      { title: 'PNEUMATIC BUTTERFLY DAMPER', subtitle: '1200X800 mm', image: '/images/gallery/be10/gallery-be10-pneumatic-1200x800.webp' },
      { title: 'PNEUMATIC BUTTERFLY DAMPER', subtitle: 'Dia 400mm & 300 mm', image: '/images/gallery/be10/gallery-be10-pneumatic-dia-400-300.webp' },
      { title: 'MOTORIZED BUTTERFLY DAMPER', subtitle: 'Dia 2000 mm', image: '/images/gallery/be10/gallery-be10-motorized-dia-2000.webp' },
      { title: 'PNEUMATIC BUTTERFLY DAMPER', subtitle: 'Dia 1500 mm', image: '/images/gallery/be10/gallery-be10-pneumatic-dia-1500.webp' }
    ],
    industriesServed: [
      { name: 'Power', image: '/images/industries/industry-power-gen.jpg' },
      { name: 'Steel', image: '/images/industries/industry-steel.jpg' },
      { name: 'Oil & Gas', image: '/images/industries/industry-oil-gas.jpg' },
      { name: 'Cement', image: '/images/industries/industry-cement.jpg' },
      { name: 'Pharma', image: '/images/industries/industry-pharma.jpg' },
      { name: 'Paper & Pulp', image: '/images/industries/industry-paper-pulp.jpg' }
    ]
  },
  'air-seal-damper-valves': {
    id: 'air-seal-damper-valves',
    title: 'BE50 : AIR SEAL DAMPER VALVES',
    model: 'BE50 SERIES',
    image: '/images/products/BE50-Electric-Air-Seal-Butterfly-Damper-Valve.png',
    category: 'isolation',
    categoryLabel: 'Zero-Leakage Barrier',
    tagline: '100% Man-Safe zero-leakage isolation damper with continuous pressurized seal air injection system.',
    desc: '100% sealing efficiency is achieved by injecting pressurized, preheated seal air into the gap maintained between the tandem flaps. The overpressure air barrier completely eliminates fugitive toxic or hazardous gas pass-through for 100% man-safe maintenance isolation.',
    longDesc: 'The BE-50 Series Air Seal Butterfly Damper provides absolute 100% gas-tight isolation for applications where human life safety is critical during continuous plant operations. By maintaining a seal air pressure chamber between double tandem discs at a higher pressure than the duct gas, any leakage that occurs consists strictly of clean seal air into the duct.',
    keyHighlights: [
      '100% True Zero Fugitive Gas Leakage Isolation',
      'Dedicated Seal Air Blower skid with electric heaters and redundant blowers',
      'Enables safe personnel entry into downstream ducts during live operation',
      'EN 1751 Class 4 tightest isolation certified'
    ],
    leakage: '100% Zero-Leakage (Continuous Pressurized Air Barrier)',
    temp: '-25°C to +825°C',
    pressure: 'Up to 10,197 mmWC',
    sizes: 'Ø300 mm to Ø7,000 mm Round / Rectangular up to 12,000 mm',
    materials: 'ASTM A36, IS2062, ASTM A240 Type 304L/316L/310S, ASTM A516 Gr-70',
    actuation: 'Electric Actuator / Pneumatic Cylinder with Dedicated Seal Air Blower Skid',
    standards: 'EN 1751 Class 4, AMCA 500-D, CE / SIL-3 Ready, Seismic Qualified',
    features: [
      'Tandem twin-blade configuration with internal pressurization chamber',
      'Automated seal air pressure regulation interlocked with plant DCS',
      'Heavy-duty shaft packing glands with lantern ring purge',
      'Seismic and high-vibration qualified robust structure'
    ],
    applications: [
      'Selective Catalytic Reduction (SCR) & DeNOx Isolation',
      'Flue Gas Desulfurization (FGD) Absorber Inlet/Outlet',
      'Toxic Chemical and Hazardous Exhaust Gas Systems',
      'Nuclear Ventilation & Dangerous Media Containment'
    ]
  },
  'double-offset-butterfly-damper-valves': {
    id: 'double-offset-butterfly-damper-valves',
    title: 'BE20 : DOUBLE OFFSET BUTTERFLY DAMPER VALVES',
    model: 'BE20 SERIES',
    image: '/images/products/BE20-Pneumatic-Double-Offset-Butterfly-Damper-Valve.png',
    category: 'isolation',
    categoryLabel: 'Double Cam Action',
    tagline: 'High Performance Double Offset Design specially engineered for reliable shut-off and flow control applications.',
    desc: 'Bellator BE20 Series Double Offset Butterfly Damper Valves are specially engineered for reliable shut-off and flow control applications requiring superior sealing performance, lower operating torque, and extended service life. The double offset disc geometry minimizes seat friction during operation, resulting in reduced wear, improved sealing reliability, and smooth operation under demanding service conditions.',
    longDesc: 'Manufactured with robust fabricated construction and precision-engineered sealing arrangements, the BE20 Series is designed to handle steam, gases, hot air, water, and various process media applications. The optimized offset design enhances sealing efficiency while reducing operational stress on seating components. The BE20 Series dampers are available in Manual, Pneumatic, Electric, and Hydraulic operated configurations with complete automation and control accessories. Designed using advanced engineering and validation practices, these dampers ensure reliable long-term performance and operational stability.',
    taglineBrochure: '“Engineered for Reliability • Built for Performance • Designed for Critical Applications”',
    keyHighlights: [
      'Double Offset Cam Action Design & Bubble Tight Shut-Off Performance',
      'Low Seat Wear & Frictionless Operation with Lower Operating Torque',
      'Suitable up to PN25 Pressure Rating with Heavy Duty Fabricated Construction',
      'Engineered Double Offset Construction minimizing seat stress',
      '100% Sealing Performance & Available in Sizes Ø150 mm to Ø4000 mm'
    ],
    leakage: '100% Sealing (Bubble Tight)',
    temp: '-25°C to 300°C',
    pressure: 'Up to PN25',
    sizes: 'Ø150 mm to Ø4000 mm',
    materials: 'Body: IS2062 / SA516 Gr-70 / WCB | Disc: SS304 / SS316 / CF8 / CF8M | Shaft: EN8D / SS410 / SS316',
    actuation: 'Manual / Pneumatic / Electric / Hydraulic',
    standards: 'API / ASME / ISO / Customer Specific',
    shapes: 'Round (Double Offset Geometry)',
    endConnection: 'Wafer / Flanged / Butt Weld',
    technicalSpecs: [
      { parameter: 'Damper Valve Type', details: 'Double Offset Butterfly' },
      { parameter: 'Operation', details: 'Manual / Pneumatic / Electric / Hydraulic' },
      { parameter: 'Size Range', details: 'Ø150 mm to Ø4000 mm' },
      { parameter: 'End Connection', details: 'Wafer / Flanged / Butt Weld' },
      { parameter: 'Design Temperature', details: '-25°C to 300°C' },
      { parameter: 'Design Type', details: 'Double Offset Geometry' },
      { parameter: 'Pressure Rating', details: 'Up to PN25' },
      { parameter: 'Standards', details: 'API / ASME / ISO' },
      { parameter: 'Leakage Performance', details: '100% Sealing' },
      { parameter: 'Automation', details: 'Pneumatic / Electric / Hydraulic' }
    ],
    mocTable: [
      { component: 'Body', material: 'IS2062 / SA516 Gr-70 / WCB / Customer Specific' },
      { component: 'Disc', material: 'SS304 / SS316 / CF8 / CF8M / Customer Specific' },
      { component: 'Shaft', material: 'EN8D / SS410 / SS316 / Customer Specific' },
      { component: 'Seat', material: 'EPDM / Viton / Silicon / Customer Specific' },
      { component: 'Seal', material: 'Soft Seat' },
      { component: 'Bearings', material: 'Heavy Duty Self Lubricated' }
    ],
    automationOptions: [
      { name: 'Pneumatic', desc: 'Pneumatic double offset actuator with positioners, limit switches & solenoids' },
      { name: 'Electric', desc: 'Motorized quarter-turn actuator packages for precision modulation and ON/OFF' },
      { name: 'Manual', desc: 'Precision heavy-duty manual gearbox with handwheel position indicator' },
      { name: 'Hydraulic', desc: 'Electro-hydraulic power unit for high-thrust, rapid fail-safe operation' }
    ],
    features: [
      'Double Offset Cam Action Design',
      'Bubble Tight Shut-Off Performance',
      'Low Seat Wear & Frictionless Operation',
      'Lower Operating Torque',
      'Suitable up to PN25 Pressure Rating',
      'Heavy Duty Fabricated Construction'
    ],
    optionalFeatures: [
      'Anti-Blowout Shaft Design',
      'Seismic Qualified Design',
      'High Pressure Design',
      'C5 / NORSOK Paint System',
      'Extended Shaft Arrangement',
      'Locking Arrangement'
    ],
    inspectionTesting: [
      'Leakage Testing (Hydro/Pne.)',
      'Functional Testing',
      'Dimensional Inspection',
      'NDT Examination',
      'PMI Testing',
      'FAT Support',
      'Third Party Inspection',
      'QA Dossier Documentation',
      'Inspection by BV / TUV / SGS / DNV / Client TPI can be offered'
    ],
    applications: [
      'Steam Lines',
      'Hot Air Systems',
      'Process Gas Isolation',
      'Water Treatment Systems',
      'Scrubber Systems',
      'RTO Systems',
      'HVAC Isolation',
      'Utility Process Lines',
      'Chemical Process Systems'
    ],
    majorReferences: [
      { endUser: 'TATA Steel', application: 'Hot gas Isolation' },
      { endUser: 'Adani Petrochemicals', application: 'Oxygen Enriched Air Isolation' },
      { endUser: 'Equinor', application: 'Flue Gas Recirculation' },
      { endUser: 'ORLEN', application: 'Combustion Air Isolation' }
    ],
    galleryImages: [
      { title: 'PNEUMATIC DOUBLE OFFSET DAMPER', subtitle: 'Dia 600 mm', image: '/images/gallery/be20/gallery-be20-pneumatic-dia-600.webp' },
      { title: 'PNEUMATIC DOUBLE OFFSET DAMPER', subtitle: 'Dia 864 mm', image: '/images/gallery/be20/gallery-be20-pneumatic-dia-864.webp' },
      { title: 'MOTORIZED DOUBLE OFFSET DAMPER', subtitle: 'Dia 800 mm', image: '/images/gallery/be20/gallery-be20-motorized-dia-800.webp' },
      { title: 'PNEUMATIC DOUBLE OFFSET DAMPER', subtitle: 'Dia 150 mm', image: '/images/gallery/be20/gallery-be20-pneumatic-dia-150.webp' },
      { title: 'MOTORIZED DOUBLE OFFSET DAMPER', subtitle: 'Dia 1600 mm', image: '/images/gallery/be20/BE20-Motorized-Double-Offset-Butterfly-Damper-Valve.png' },
      { title: 'MANUAL GEAR OPERATED DOUBLE OFFSET', subtitle: 'Dia 1250 mm', image: '/images/gallery/be20/Manual-Gear-Operated-Double-Offset-Butterfly-Damper-Valve.png' },
      { title: 'PNEUMATIC DOUBLE OFFSET DAMPER', subtitle: 'Dia 1000 mm', image: '/images/gallery/be20/BE20-Pneumatic-Double-Offset-Butterfly-Damper-Valve.png' }
    ],
    industriesServed: [
      { name: 'Steel', image: '/images/industries/industry-steel.jpg' },
      { name: 'Petrochemicals', image: '/images/industries/industry-oil-gas.jpg' },
      { name: 'Power', image: '/images/industries/industry-power-gen.jpg' },
      { name: 'Chemical', image: '/images/industries/industry-chemical.jpg' },
      { name: 'Water Treatment', image: '/images/industries/WATER.jpg' },
      { name: 'Process', image: '/images/industries/industry-process.jpg' }
    ]
  },
  'triple-offset-butterfly-damper-valves': {
    id: 'triple-offset-butterfly-damper-valves',
    title: 'BE30 : TRIPLE OFFSET BUTTERFLY DAMPER VALVES',
    model: 'BE30 SERIES',
    image: '/images/gallery/be30/BE30-Pneumatic-Triple-Offset-Dia-750.webp',
    category: 'isolation',
    categoryLabel: 'Advanced Triple Offset Sealing',
    tagline: 'Advanced Triple Offset Sealing Technology engineered for severe service isolation applications requiring reliable shut-off performance.',
    desc: 'Bellator BE30 Series Triple Offset Butterfly Damper Valves are engineered for severe service isolation applications requiring reliable shut-off performance under high temperature and demanding process conditions. The advanced triple offset geometry eliminates seat rubbing during operation, ensuring frictionless sealing, reduced wear, lower operating torque, and extended operational life.',
    longDesc: 'Designed for critical applications involving high temperature gases, steam, thermal cycling, and continuous operation, the BE30 Series delivers dependable sealing performance under demanding service conditions. The precision-engineered sealing arrangement provides improved operational reliability and consistent performance over long operating cycles.\n\nManufactured with heavy-duty fabricated construction and advanced engineering practices, the BE30 Series dampers are suitable for automated and manual operation with Pneumatic, Electric, Hydraulic, or Gear operated configurations available as per application requirements.',
    taglineBrochure: '“Engineered for Reliability • Built for Performance • Designed for Critical Applications”',
    keyHighlights: [
      'Advanced Triple Offset Geometry eliminating seat rubbing during operation',
      'Frictionless Sealing with Reduced Seat Wear & Lower Operating Torque',
      '100% Sealing Performance & Metal Seated High Temperature Construction up to 650°C',
      'Bi-Directional Sealing Capability & Stable Performance at Elevated Temperatures',
      'Suitable for Severe Service Applications & Minimal Pressure Loss Across Valve'
    ],
    leakage: '100% Sealing',
    temp: '-25°C to 650°C',
    pressure: 'Up to PN25',
    sizes: 'Ø150 mm to Ø1200 mm',
    materials: 'Body: IS2062 / SA516 Gr-70 / WCB | Disc: SS304 / SS316 / CF8 / CF8M | Shaft: EN8D / SS410 / SS316 | Seat: Metal Seated | Seal: SS + Graphite / Laminated Seal',
    actuation: 'Manual / Pneumatic / Electric / Hydraulic',
    standards: 'API / ASME / ISO / Customer Specific',
    shapes: 'Round (Triple Offset Geometry)',
    endConnection: 'Wafer / Flanged / Butt Weld',
    technicalSpecs: [
      { parameter: 'Damper Valve Type', details: 'Triple Offset Butterfly' },
      { parameter: 'Operation', details: 'Manual / Pneumatic / Electric / Hydraulic' },
      { parameter: 'Size Range', details: 'Ø150 mm to Ø1200 mm' },
      { parameter: 'End Connection', details: 'Wafer / Flanged / Butt Weld' },
      { parameter: 'Design Temperature', details: '-25°C to 650°C' },
      { parameter: 'Design Type', details: 'Triple Offset Geometry' },
      { parameter: 'Pressure Rating', details: 'Up to PN25' },
      { parameter: 'Standards', details: 'API / ASME / ISO' },
      { parameter: 'Leakage Performance', details: '100% Sealing' },
      { parameter: 'Automation', details: 'Pneumatic / Electric / Hydraulic' }
    ],
    mocTable: [
      { component: 'Body', material: 'IS2062 / SA516 Gr-70 / WCB / Customer Specific' },
      { component: 'Disc', material: 'SS304 / SS316 / CF8 / CF8M / Customer Specific' },
      { component: 'Shaft', material: 'EN8D / SS410 / SS316 / Customer Specific' },
      { component: 'Seat', material: 'Metal Seated' },
      { component: 'Seal', material: 'SS + Graphite / Laminated Seal' },
      { component: 'Bearings', material: 'Heavy Duty High Temperature Bearings' }
    ],
    automationOptions: [
      { name: 'Pneumatic', desc: 'Pneumatic cylinder / scotch yoke actuation with positioners, limit switches & fail-safe reservoirs' },
      { name: 'Electric', desc: 'Motorized quarter-turn actuator packages for precision modulation and ON/OFF shutoff' },
      { name: 'Manual', desc: 'Heavy-duty manual gearbox with handwheel & visual position indicator' },
      { name: 'Hydraulic', desc: 'Electro-hydraulic power unit for high-thrust, rapid fail-safe operation' }
    ],
    features: [
      'Frictionless sealing during operation',
      'Reduced seat wear',
      'Suitable for thermal cycling applications',
      'Bi-directional sealing capability',
      'Stable sealing performance at elevated temp.',
      'Reduced actuator sizing requirement',
      'Metal seated high temperature construction',
      'Suitable for severe service applications',
      'Minimal pressure loss across valve'
    ],
    optionalFeatures: [
      'Anti-Blowout Shaft Design',
      'Seismic Qualified Design',
      'High Pressure Design',
      'C5 / NORSOK Paint System',
      'Extended Shaft Arrangement',
      'Locking Arrangement'
    ],
    inspectionTesting: [
      'Leakage Testing (Hydro/Pne.)',
      'Functional Testing',
      'Dimensional Inspection',
      'NDT Examination',
      'PMI Testing',
      'FAT Support',
      'Third Party Inspection',
      'QA Dossier Documentation',
      'Inspection by BV / TUV / SGS / DNV / Client TPI can be offered'
    ],
    applications: [
      'Boiler isolation systems',
      'Hot blast furnace systems',
      'Process gas shut-off',
      'High temperature air systems',
      'Thermal oxidizer systems',
      'Incineration systems',
      'Flare gas systems'
    ],
    majorReferences: [
      { endUser: 'JSW', application: 'Blast Furnace Gas Isolation', logo: '/images/clients/jsw-logo.png' },
      { endUser: 'AM/NS INDIA', application: 'Process hot gas Isolation', logo: '/images/clients/amns-logo.png' },
      { endUser: 'TATA STEEL', application: 'Flue Gas Isolation', logo: '/images/clients/tata-steel-logo.png' },
      { endUser: 'IMFA', application: 'Submerged Arc furnace flue gas isolation', logo: '/images/clients/imfa-logo.png' }
    ],
    galleryImages: [
      { title: 'PNEUMATIC TRIPLE OFFSET DAMPER', subtitle: 'Dia 750 mm', image: '/images/gallery/be30/BE30-Pneumatic-Triple-Offset-Dia-750.webp' },
      { title: 'MOTORISED TRIPLE OFFSET DAMPER', subtitle: 'Dia 600 mm', image: '/images/gallery/be30/BE30-Motorised-Triple-Offset-Dia-600.webp' },
      { title: 'MANUAL TRIPLE OFFSET DAMPER', subtitle: 'Dia 615 mm', image: '/images/gallery/be30/BE30-Manual-Triple-Offset-Dia-615.webp' },
      { title: 'MANUAL TRIPLE OFFSET DAMPER', subtitle: 'Dia 650 mm', image: '/images/gallery/be30/BE30-Manual-Triple-Offset-Dia-650.webp' },
      { title: 'MOTORISED TRIPLE OFFSET DAMPER', subtitle: 'Dia 750 mm', image: '/images/gallery/be30/BE30-Motorised-Triple-Offset-Dia-750.webp' },
      { title: 'MOTORISED TRIPLE OFFSET DAMPER', subtitle: 'Dia 600 mm (Horizontal)', image: '/images/gallery/be30/BE30-Motorised-Triple-Offset-Dia-600-Horizontal.webp' },
      { title: 'MOTORISED TRIPLE OFFSET DAMPER', subtitle: 'Dia 800 mm', image: '/images/gallery/be30/BE30-Motorised-Triple-Offset-Dia-800.webp' },
      { title: 'ADVANCED TRIPLE OFFSET GEOMETRY', subtitle: 'Design & Construction Schematic', image: '/images/gallery/be30/BE30-Triple-Offset-Construction-Diagram.webp' }
    ],
    industriesServed: [
      { name: 'Steel', image: '/images/industries/industry-steel.jpg' },
      { name: 'Power Generation', image: '/images/industries/industry-power-gen.jpg' },
      { name: 'Petrochemicals', image: '/images/industries/industry-oil-gas.jpg' },
      { name: 'Chemical', image: '/images/industries/industry-chemical.jpg' },
      { name: 'Incineration & RTO', image: '/images/industries/industry-process.jpg' },
      { name: 'Cement', image: '/images/industries/industry-cement.jpg' }
    ]
  },
  'double-disc-gate-valves': {
    id: 'double-disc-gate-valves',
    title: 'BE100 : DOUBLE DISC GATE VALVES',
    model: 'BE100 SERIES',
    image: '/images/products/Motorized-Double-Disc-Gate-Valve-main-image.webp',
    category: 'isolation',
    categoryLabel: 'Dirty Gas Isolation',
    tagline: 'Robust dual disc wedging gate valve engineered for dirty, particulate-laden gas isolation with 100% full bore.',
    desc: 'Fabricated wedging gate valve engineered for dirty and particulate-laden gas isolation. Small mechanical wedge expands dual disc plates firmly against hard-faced body seats upon closing. In open position, disc assembly retracts completely providing 100% full bore with zero pressure loss.',
    longDesc: 'The DDGV Series Double Disc Gate Valve provides unobstructed full-bore gas passage when open, preventing accumulation of ash, dust, and heavy solids. Upon closure, an internal mechanical wedging mechanism pushes both discs outward against hardfaced body seats, ensuring reliable shutoff even in heavy particulate media.',
    keyHighlights: [
      '100% Unobstructed Full Bore with zero pressure drop',
      'Mechanical dual disc wedging action for high seating force',
      'Stellite hardfaced seats resilient against abrasive erosion',
      'Optional purge air connection for man-safe zero leakage'
    ],
    leakage: '100% Isolation with Seal Air / Class VI Metal-to-Metal',
    temp: '-20°C to +500°C',
    pressure: 'Differential Pressure up to 5,000 mmWC',
    sizes: 'DN200 to DN3,000',
    materials: 'Fabricated Carbon Steel IS2062, SS304L/316L, Stellite Hardfaced Seats',
    actuation: 'Electric Actuator with Bevel Gear, Pneumatic Cylinder, Manual Handwheel',
    standards: 'ASME Sec. VIII, AWS D1.1, EN 1751 Class 4',
    features: [
      'Dual disc floating construction with central spreading wedge',
      'Bottom dust purge ports and cleanout access covers',
      'Self-cleaning seating surfaces that scrape deposits away',
      'Heavy-duty exterior yoke and rising stem assembly'
    ],
    applications: [
      'Blast Furnace Gas & Coke Oven Gas Handling',
      'Sponge Iron DRI Plant De-dusting Systems',
      'Cement Clinker Cooler & Raw Meal Ducts',
      'Heavy Ash-Laden Boiler Flue Gas Ducts'
    ]
  },
  'three-lever-shut-off-damper-valves': {
    id: 'three-lever-shut-off-damper-valves',
    title: 'BE40 : THREE LEVER SHUT OFF DAMPER VALVES',
    model: 'BE40 SERIES',
    image: '/images/gallery/be40/BE40-Pneumatic-Lever-Type-Shutoff-Dia-500.webp',
    category: 'isolation',
    categoryLabel: 'Precision Shut-Off Technology',
    tagline: 'Precision Shut-Off Technology engineered for applications requiring reliable positive shut-off performance under demanding process conditions.',
    desc: 'Bellator BE40 Series Three Lever Shut-Off Damper Valves are specially engineered for applications requiring reliable positive shut-off performance under demanding process conditions. The advanced three lever mechanism combines rotational and linear seating movement to achieve frictionless sealing during closing operation, minimizing seat wear and improving sealing reliability.',
    longDesc: 'Designed for critical applications requiring dependable isolation and long-term operational performance, the BE40 Series ensures smooth operation and enhanced sealing efficiency under continuous duty conditions. The optimized seating arrangement significantly improves operational life compared to conventional damper designs.\n\nManufactured with robust fabricated construction and application-oriented engineering, the BE40 Series dampers are suitable for critical, hazardous, radioactive, and high reliability applications. The dampers are available in Pneumatic, Electric, Hydraulic, and Manual operated configurations with complete automation options.',
    taglineBrochure: '“Engineered for Reliability • Built for Performance • Designed for Critical Applications”',
    keyHighlights: [
      'Advanced Three Lever Shut-Off Mechanism combining rotational and linear seating movement',
      'Frictionless Final Sealing Arrangement minimizing seat wear and prolonging life',
      '100% Sealing & Positive Shut-Off Performance up to 650°C and PN10 Pressure Rating',
      'Engineered specifically for hazardous, radioactive, process safety, and high-reliability systems',
      'Lower Actuator Torque Requirement with Heavy Duty Fabricated Construction'
    ],
    leakage: '100% Sealing ; Positive Shut-Off',
    temp: '-25°C to 650°C',
    pressure: 'Up to PN10',
    sizes: 'Ø300 mm to Ø2500 mm',
    materials: 'Body: IS2062 / SA516 Gr-70 / WCB | Disc: SS304 / SS316 / CF8 / CF8M | Shaft: EN8D / SS410 / SS316 | Seat: Metallic / Soft Seat | Seal: Elastomer / Graphite / High Temperature Seal',
    actuation: 'Manual / Pneumatic / Electric / Hydraulic',
    standards: 'API / ASME / ISO / Customer Specific',
    shapes: 'Round (Three Lever Frictionless Seating)',
    endConnection: 'Wafer / Flanged / Butt Weld',
    technicalSpecs: [
      { parameter: 'Damper Type', details: 'Three Lever Shut-Off' },
      { parameter: 'Operation', details: 'Manual / Pneumatic / Electric / Hydraulic' },
      { parameter: 'Size Range', details: 'Ø300 mm to Ø2500 mm' },
      { parameter: 'End Connection', details: 'Wafer / Flanged / Butt Weld' },
      { parameter: 'Design Temperature', details: '-25°C to 650°C' },
      { parameter: 'Design Type', details: 'Three Lever Frictionless Seating' },
      { parameter: 'Pressure Rating', details: 'Up to PN10' },
      { parameter: 'Standards', details: 'API / ASME / ISO' },
      { parameter: 'Leakage Performance', details: '100% Sealing ; Positive Shut-Off' },
      { parameter: 'Automation', details: 'Pneumatic / Electric / Hydraulic' }
    ],
    mocTable: [
      { component: 'Body', material: 'IS2062 / SA516 Gr-70 / WCB / Customer Specific' },
      { component: 'Disc', material: 'SS304 / SS316 / CF8 / CF8M / Customer Specific' },
      { component: 'Shaft', material: 'EN8D / SS410 / SS316 / Customer Specific' },
      { component: 'Seat', material: 'Metallic / Soft Seat' },
      { component: 'Seal', material: 'Elastomer / Graphite / High Temperature Seal' },
      { component: 'Bearings', material: 'Heavy Duty Self Lubricated' }
    ],
    automationOptions: [
      { name: 'Pneumatic', desc: 'Heavy-duty pneumatic actuator with positioners, solenoids & fail-safe air volume tank' },
      { name: 'Electric', desc: 'Motorized electric drive for precise modulating or quick ON/OFF isolation' },
      { name: 'Manual', desc: 'High mechanical advantage manual gearbox with handwheel & position indicator' },
      { name: 'Hydraulic', desc: 'Electro-hydraulic power unit for high-thrust, rapid emergency trip shut-off' }
    ],
    features: [
      'Advanced Three Lever Shut-Off Mechanism',
      'Frictionless Final Seating Arrangement',
      'Positive Isolation Performance',
      'Lower Operating Torque',
      'Suitable for Hazardous Applications',
      'Heavy Duty Fabricated Construction',
      'High Reliability Shut-Off Design'
    ],
    optionalFeatures: [
      'Anti-Blowout Shaft Design',
      'Seismic Qualified Design',
      'High Pressure Design',
      'C5 / NORSOK Paint System',
      'Extended Shaft Arrangement',
      'Locking Arrangement'
    ],
    inspectionTesting: [
      'Leakage Testing',
      'Functional Testing',
      'Dimensional Inspection',
      'NDT Examination',
      'PMI Testing',
      'FAT Support',
      'Third Party Inspection',
      'QA Dossier Documentation',
      'Inspection by BV / TUV / SGS / DNV / Client TPI can be offered'
    ],
    applications: [
      'Radioactive Process Systems',
      'Air Separation Units',
      'Hazardous Gas Isolation',
      'Critical Shut-Off Applications',
      'Process Safety Isolation',
      'Furnace Isolation Systems',
      'High Reliability Utility Lines',
      'Hot Gas Process Systems',
      'Process Shutdown Isolation'
    ],
    majorReferences: [
      { endUser: 'JSW', application: 'Hot Gas Shut-Off', logo: '/images/clients/jsw-logo.png' },
      { endUser: 'TATA POWER', application: 'Process hot gas Isolation', logo: '/images/clients/tata-power-logo.png' },
      { endUser: 'vedanta', application: 'Flue Gas Isolation', logo: '/images/clients/vedanta-logo.png' },
      { endUser: 'adani', application: 'Process Safety Systems', logo: '/images/clients/adani-logo.png' }
    ],
    galleryImages: [
      { title: 'PNEUMATIC LEVER TYPE SHUT-OFF DAMPER', subtitle: 'Dia 500 mm', image: '/images/gallery/be40/BE40-Pneumatic-Lever-Type-Shutoff-Dia-500.webp' },
      { title: 'MOTORIZED LEVER TYPE SHUT-OFF DAMPER', subtitle: 'Dia 700 mm', image: '/images/gallery/be40/BE40-Motorized-Lever-Type-Shutoff-Dia-700.webp' },
      { title: 'MANUAL LEVER TYPE SHUT-OFF DAMPER', subtitle: 'Dia 400 mm', image: '/images/gallery/be40/BE40-Manual-Lever-Type-Shutoff-Dia-400.webp' },
      { title: 'MOTORIZED SHUT-OFF DAMPER VALVE', subtitle: 'Dia 700 mm', image: '/images/gallery/be40/BE40-Gallery-Motorized-Shutoff-Dia-700.webp' },
      { title: 'MOTORIZED SHUT-OFF DAMPER VALVE', subtitle: 'Dia 600 mm', image: '/images/gallery/be40/BE40-Gallery-Motorized-Shutoff-Dia-600.webp' },
      { title: 'PNEUMATIC SHUT-OFF DAMPER VALVE', subtitle: 'Dia 500 mm', image: '/images/gallery/be40/BE40-Gallery-Pneumatic-Shutoff-Dia-500.webp' },
      { title: 'MANUAL SHUT-OFF DAMPER VALVE', subtitle: 'Dia 400 mm', image: '/images/gallery/be40/BE40-Gallery-Manual-Shutoff-Dia-400.webp' }
    ],
    industriesServed: [
      { name: 'Nuclear & Radioactive', image: '/images/industries/industry-power-gen.jpg' },
      { name: 'Steel', image: '/images/industries/industry-steel.jpg' },
      { name: 'Petrochemicals', image: '/images/industries/industry-oil-gas.jpg' },
      { name: 'Power Generation', image: '/images/industries/industry-power-gen.jpg' },
      { name: 'Chemical', image: '/images/industries/industry-chemical.jpg' },
      { name: 'Air Separation & Gases', image: '/images/industries/industry-process.jpg' }
    ]
  },
  'guillotine-damper-valves': {
    id: 'guillotine-damper-valves',
    title: 'BE90 : GUILLOTINE DAMPER VALVES',
    model: 'BE90 SERIES',
    image: '/images/products/BE90-Motorized-Guillotine-Damper-Valve.png',
    category: 'isolation',
    categoryLabel: 'Sliding Blade Gate',
    tagline: 'Heavy-duty sliding blade gate damper engineered to slice through heavy ash sediment for 100% duct isolation.',
    desc: 'Heavy-duty sliding blade gate dampers providing complete full-duct isolation during plant turnarounds and boiler inspections. Features self-cleaning rack and pinion, screw, or chain drives designed to slice through heavy fly ash and dust sediment without binding.',
    longDesc: 'Bellator BE-90 Series Guillotine Dampers are designed for total duct shutoff in dirty, solid-laden flue gas streams. When open, the blade is 100% retracted from the gas flow, eliminating flow obstruction and erosion. The tapered blade edge cuts cleanly through dense ash build-up during closure.',
    keyHighlights: [
      'Custom sizes up to 6,000 x 6,000 mm in square/rectangular/round',
      'Zero duct flow obstruction and pressure drop in open position',
      '100% Man-Safe personnel protection when combined with seal air',
      'Self-cleaning drive systems resistant to heavy particulate binding'
    ],
    leakage: 'Up to 100% Man-Safe with Seal Air System',
    temp: 'Up to +750°C',
    pressure: 'Differential Pressure up to 6,000 mmWC',
    sizes: 'Custom Square & Rectangular up to 6,000 x 6,000 mm',
    materials: 'IS2062, ASTM A516 Gr-70, SS316L Blade, Inconel Flexible Perimeter Seals',
    actuation: 'Rack & Pinion with Electric Gearmotor, Chain Drive, Pneumatic Cylinder',
    standards: 'ASME Sec. VIII, AMCA 500-D, NFPA 85',
    features: [
      'Heavy structural steel framework with guide rollers and scraper blades',
      'Flexible metallic Inconel or stainless perimeter leaf seals',
      'External seal air pressurization plenum',
      'Motorized rack & pinion or heavy-duty twin lead screw actuation'
    ],
    applications: [
      'Thermal Power Plant Utility Boiler Outlets',
      'Electrostatic Precipitator (ESP) Inlet & Outlet Isolation',
      'Flue Gas Desulfurization (FGD) System Isolation',
      'Cement Raw Mill and Kiln Exhaust Ducts'
    ]
  },
  'multi-louver-damper-valves': {
    id: 'multi-louver-damper-valves',
    title: 'BE70 : MULTI-LOUVER DAMPER VALVES',
    model: 'BE70 SERIES',
    image: '/images/products/BE70-Pneumatic-Opposed-Blade-Multilouver-Damper-Valve.png',
    category: 'control',
    categoryLabel: 'Opposed / Parallel Blades',
    tagline: 'Multi-blade aerodynamic modulating damper delivering linear flow regulation and low operating torque.',
    desc: 'Engineered with multiple synchronized aerodynamic blades for high-precision flow regulation and low operating torque in large rectangular ducts. Opposed blade arrangement delivers linear airflow throttling, while parallel blade synchronization enables rapid gas cutoff.',
    longDesc: 'The BE-70 Series Multi-Louver Damper is the premier choice for precise flow control and pressure modulation in large duct systems. Multiple streamlined airfoil blades distribute operating torque across several shafts, allowing high-speed response with compact actuation.',
    keyHighlights: [
      'Opposed blade configuration for precise linear flow modulation',
      'Parallel blade configuration for rapid duct shut-off',
      'Aerodynamic hollow airfoil blades minimizing system pressure loss',
      'Modular multi-section design for ducts up to 6,000 x 6,000 mm'
    ],
    leakage: 'Up to 99.5% Tight Sealing with Stainless Flexible Edge Seals',
    temp: 'Up to +750°C',
    pressure: 'Up to 8,500 mmWC',
    sizes: 'Up to 6,000 x 6,000 mm Multi-Span Ducts',
    materials: 'IS2062, Corten Steel, ASTM A240 Type 304L/316L, SS310S',
    actuation: 'Pneumatic Positioner 4-20mA, Modulating Electric Actuator, Manual Lever',
    standards: 'AMCA 500-D, EN 1751, CE Marked',
    features: [
      'Precision external linkage mechanism with spherical rod end bearings',
      'Stainless steel flexible interlocking blade edge seals',
      'Outboard relubricable flange bearings isolated from duct heat',
      'Optional seal air system for zero-leakage isolation'
    ],
    applications: [
      'Forced Draft (FD) & Induced Draft (ID) Fan Modulation',
      'Gas Turbine Exhaust Tempering & Ventilation Control',
      'Industrial Boiler Combustion Air Balancing',
      'Steel Mill Baghouse Air Volume Regulation'
    ]
  },
  'three-way-diverter-damper-valves': {
    id: 'three-way-diverter-damper-valves',
    title: 'BE60 : THREE WAY DIVERTER DAMPER VALVES',
    model: 'BE60 SERIES',
    image: '/images/products/BE60-Motorized-Round-Diverter-Damper-Valve.png',
    category: 'control',
    categoryLabel: 'Flow Redirection',
    tagline: 'High-speed diverter valve engineered for gas turbine CCGT exhaust bypass and HRSG steam recovery.',
    desc: 'Designed for combined cycle gas turbine (CCGT) exhaust bypass and heat recovery steam generator (HRSG) applications. Fast pivoting flap redirects massive turbine exhaust gas flow between bypass stack and boiler with emergency fail-safe transition under 30 seconds.',
    longDesc: 'Bellator BE-60 Series Three-Way Diverter Dampers are mission-critical components in Combined Cycle Gas Turbine (CCGT) installations. The single pivot toggle flap safely modulates and redirects massive exhaust streams between the bypass stack (simple cycle) and the heat recovery steam generator (combined cycle).',
    keyHighlights: [
      'Emergency fast trip transition in under 30 seconds',
      'Continuous seal air barrier for 100% human-safe HRSG entry',
      'Internal ceramic blanket insulation protecting outer casing',
      'Electro-hydraulic power unit (HPU) with accumulator fail-safe'
    ],
    leakage: '100% Isolation on Non-Operating Port with Seal Air System',
    temp: 'Up to +650°C Exhaust Gas',
    pressure: 'Up to 5,000 mmWC',
    sizes: 'Round & Square Ducts up to DN4,000',
    materials: 'ASTM A516 Gr-70, Corten Steel, 304L/316L, Internal Ceramic Blanket Insulation',
    actuation: 'Electro-Hydraulic Power Unit (HPU) with Fast Trip, Electric Actuator',
    standards: 'ASME B31.1, NFPA 85, SIL-3 Certified Hydraulic System',
    features: [
      'Double toggle blade design preventing thermal distortion',
      'Metallic flexible perimeter seal leaves with continuous air purge',
      'Integrated cold casing insulation system',
      'Redundant hydraulic cylinders and SIL-3 safety control loop'
    ],
    applications: [
      'Combined Cycle Power Plants (CCGT Bypass Systems)',
      'Heat Recovery Steam Generator (HRSG) Inlets',
      'Waste Heat Recovery Boiler Switching Ducts',
      'Gas Turbine Fast Peaking Power Stations'
    ]
  },
  'poppet-damper-valves': {
    id: 'poppet-damper-valves',
    title: 'BE80 : POPPET DAMPER VALVES',
    model: 'BE80 SERIES',
    image: '/images/products/BE80-Pneumatic-Two-Way-Poppet-Damper-Valve-Verticle-Orientation.png',
    category: 'control',
    categoryLabel: 'Fast Pneumatic Stroke',
    tagline: 'High-speed directional and compartment isolation valve for baghouse pulse-jet cleaning systems.',
    desc: 'High-speed directional and isolation valves developed for fabric filter baghouses, electrostatic precipitators, and regenerative thermal oxidizers (RTO). Completes full open/close cycle in 3 to 5 seconds to isolate compartments during pulse-jet cleaning.',
    longDesc: 'The BE-80 Series Poppet Damper is engineered for rapid cycling in dust collection and pollution abatement systems. Its linear reciprocating action allows whole baghouse compartments to be isolated within 3 seconds, enabling online filter cleaning and maintenance without shutting down process production.',
    keyHighlights: [
      'Ultra-fast stroke time: 3 to 5 seconds per cycle',
      'High cycle life rated for millions of operations',
      'Available in 2-way and 3-way flow configurations',
      'Resilient Viton/PTFE or metal-to-metal seat options'
    ],
    leakage: 'Up to 99.9% / 100% with Pressurized Perimeter Purge',
    temp: '-20°C to +350°C',
    pressure: 'Differential Pressure up to 4,000 mmWC',
    sizes: 'DN400 to DN2,500',
    materials: 'Carbon Steel IS2062, Stainless Steel 304L / 316L, Viton/PTFE/Metal Seals',
    actuation: 'Heavy-Duty Pneumatic Cylinder with Fast Exhaust Valves & Solenoids',
    standards: 'AMCA 500-D, EN 1751',
    features: [
      'Direct-mounted high-speed pneumatic cylinder',
      'Self-aligning disc assembly ensuring uniform perimeter seating',
      'Robust guide bushings resistant to particulate fouling',
      'Integral quick exhaust valves and speed controls'
    ],
    applications: [
      'Fabric Filter Baghouse Compartment Isolation',
      'Regenerative Thermal Oxidizers (RTO) Switching',
      'Reverse Gas Baghouse Cleaning Cycles',
      'Electrostatic Precipitator Inlet/Outlet Headers'
    ]
  },
  'straight-pattern-inline-valves': {
    id: 'straight-pattern-inline-valves',
    title: 'Straight Pattern (Inline) Valves',
    model: 'BE-200 Series',
    image: '/images/products/BE200-Manual-Straight-Pattern-Inline-Valve.png',
    category: 'control',
    categoryLabel: 'Straight Pipeline Run',
    tagline: 'Coaxial in-line shutoff and flow balancing valve engineered for continuous gas and air pipelines.',
    desc: 'Coaxial in-line shutoff and balancing valves engineered for direct installation into continuous gas piping and ducting without directional deviations. Features full flow port, guided disc travel, and robust packing gland to prevent fugitive air ingress.',
    longDesc: 'The BE-200 Series Straight Pattern Inline Valve is designed for seamless integration into straight process piping runs. Its coaxial geometry maintains laminar gas flow, minimizing pressure drop while providing positive shut-off and fine manual or automated flow control.',
    keyHighlights: [
      'Coaxial straight-line installation without piping offsets',
      'Precision guided disc travel preventing stem deflection',
      'Heavy-duty gland packing preventing external fugitive emissions',
      'Sizes up to DN1,200 with standard flange drilling'
    ],
    leakage: 'Class IV / Class VI Shutoff',
    temp: 'Up to +450°C',
    pressure: 'Up to PN16',
    sizes: 'DN100 to DN1,200',
    materials: 'Fabricated IS2062, ASTM A216 WCB, ASTM A240 Type 304L / 316L',
    actuation: 'Manual Bevel Gearbox, Electric Multi-Turn Actuator, Pneumatic Cylinder',
    standards: 'ASME B16.34, EN 1751',
    features: [
      'Full flow internal bore with streamlined guide ribs',
      'Replaceable body seats and disc face rings',
      'Live-loaded stem packing gland with leak detection ports',
      'Available with handwheel, chainwheel, or motorized actuators'
    ],
    applications: [
      'Industrial Hot Air and Flue Gas Distribution Piping',
      'Combustion Air Supply to Burner Arrays',
      'Ventilation and Process Gas Headers',
      'Chemical Process Vapors and Steam Exhaust Lines'
    ]
  },
  'right-angle-valves': {
    id: 'right-angle-valves',
    title: 'Right Angle Valves',
    model: 'BE-190 Series',
    image: '/images/products/BE190-Manual-Right-Angle-Valve-manual.png',
    category: 'control',
    categoryLabel: 'Elbow Diversion',
    tagline: 'Space-saving 90-degree directional elbow valve combining piping turn and process gas isolation.',
    desc: 'Combines a 90-degree pipeline directional elbow with integral process gas shutoff in a single compact housing. Eliminates the footprint and welding costs of separate duct elbows and valves while reducing gas turbulence and pressure drop.',
    longDesc: 'The BE-190 Series Right Angle Valve integrates a 90-degree duct elbow and an isolation damper into a single fabricated unit. This compact solution eliminates multiple flanged joints, reduces overall structural weight, and provides smooth flow direction change with tight shutoff.',
    keyHighlights: [
      'Replaces 90° duct elbow and separate valve combination',
      'Saves substantial plant space and structural installation cost',
      'Smooth internal contours reducing turbulence and pressure drop',
      'High temperature capability up to +550°C'
    ],
    leakage: 'Class IV / VI (99.5% to 100%)',
    temp: 'Up to +550°C',
    pressure: 'Up to 6,000 mmWC',
    sizes: 'DN150 to DN1,400',
    materials: 'Fabricated Carbon Steel, ASTM A240 Type 304L / 316L / 310S',
    actuation: 'Manual Handwheel, Electric Actuator, Pneumatic Cylinder',
    standards: 'ASME Sec. VIII, EN 1751',
    features: [
      'Integral 90-degree fabricated elbow body',
      'Heavy-duty disc guide assembly ensuring precise perpendicular seating',
      'Outboard bearing design isolated from process heat',
      'Custom inlet and outlet flange dimensions'
    ],
    applications: [
      'Boiler Burner Secondary & Tertiary Air Ducts',
      'Corner Duct Transitions in Cement & Steel Plants',
      'Furnace Exhaust and Flue Gas Chimney Take-Offs',
      'Compact Industrial Skid Piping Systems'
    ]
  },
  'crystallizer-discharge-gate-valves': {
    id: 'crystallizer-discharge-gate-valves',
    title: 'Crystallizer Discharge Gate Valves',
    model: 'CDGV Series',
    image: '/images/products/Motorized-Crystallizer-Discharge-Gate-Valve.png',
    category: 'control',
    categoryLabel: 'Flush Bottom Seat',
    tagline: 'Sanitary pocketless flush-bottom discharge gate valve for sugar, ethanol, and slurry crystallization vessels.',
    desc: 'Purpose-built flush-bottom gate valves installed at the lowest discharge point of crystallization pans and vacuum cookers in sugar, ethanol, and chemical plants. Eliminates dead pocket slurry stagnation and ensures complete, rapid tank discharge.',
    longDesc: 'Bellator CDGV Crystallizer Discharge Gate Valves are custom-engineered for vacuum pans and crystallization cookers. The valve disc sits completely flush with the inside tank bottom, preventing slurry crystallization in stagnant dead pockets and allowing fast, unimpeded massecuite discharge.',
    keyHighlights: [
      'Zero dead-pocket flush tank bottom seating',
      'Wetted parts manufactured from sanitary SS304L / SS316L',
      'Vacuum-tight sealing under full negative pressure',
      'Fast automated opening with high-torque gearmotor'
    ],
    leakage: 'Tight Slurry & Liquor Isolation',
    temp: 'Ambient to +180°C',
    pressure: 'Full Vacuum to 4 bar',
    sizes: 'DN200 to DN800',
    materials: 'All Wetted Parts SS304L / SS316L, Carbon Steel Outer Yoke',
    actuation: 'Electric Gearmotor with Limit Switches, Pneumatic Cylinder, Manual Wheel',
    standards: 'Food & Sugar Processing Sanitary Hygiene Standards',
    features: [
      'Polished wetted stainless steel surfaces preventing sugar adhesion',
      'Heavy-duty knife or wedge gate with steam/hot water purge ports',
      'O-ring or PTFE resilient perimeter seals for vacuum tightness',
      'External rising spindle with protective boot cover'
    ],
    applications: [
      'Sugar Mill Vacuum Pan Massecuite Discharge',
      'Ethanol Fermentation Vessel Bottom Drainage',
      'Chemical & Fertilizer Slurry Crystallizers',
      'Pharmaceutical Evaporator & Thickener Tanks'
    ]
  },
  'ventilation-channel-closing-device': {
    id: 'ventilation-channel-closing-device',
    title: 'BE110 : VENTILATION CHANNEL CLOSING DEVICE',
    model: 'BE110 SERIES',
    image: '/images/products/BE110-Ventilation-Channel-Closing-Device-with-Adaptor.png',
    category: 'control',
    categoryLabel: 'Tunnel & Marine Duct',
    tagline: 'Instant emergency shutoff mechanism for underground tunnels, civil defense shelters, and naval ducts.',
    desc: 'Instant emergency shutoff mechanism installed in civil defense shelters, naval vessel compartments, underground tunnels, and toxic duct corridors. Triggered mechanically or pneumatically to snap closed within fractions of a second during blast or chemical events.',
    longDesc: 'The BE-110 Series Ventilation Channel Closing Device is a rapid-response life safety barrier designed to isolate critical air ducts instantly during hazardous gas releases, fires, or blast overpressures. Equipped with fast-release trigger latches and powerful mechanical spring return.',
    keyHighlights: [
      'Instant emergency trigger closing in under 1 second',
      'Blast overpressure resistant construction up to 2 bar',
      'Hermetic gas and smoke tight perimeter elastomeric seal',
      'Meets strict naval and civil defense blast protection codes'
    ],
    leakage: 'Hermetic Blast & Gas Tight Seal',
    temp: '-30°C to +150°C',
    pressure: 'Blast Overpressure Resistant up to 2 bar',
    sizes: 'Custom Sizing with Integral Duct Adaptors',
    materials: 'High-Tensile Fabricated Carbon Steel, Neoprene / Silicone Perimeter Gaskets',
    actuation: 'Spring-Return Rapid Release Trigger with Pneumatic/Electric Solenoid',
    standards: 'Naval & Civil Defense Blast Isolation Standards',
    features: [
      'Pre-tensioned mechanical heavy-duty spring pack',
      'Electromagnetic or pneumatic trigger release mechanism',
      'Manual mechanical cocking and emergency trip lever',
      'Duct adaptors tailored to round, oval, or rectangular profiles'
    ],
    applications: [
      'Metro Tunnel & Highway Underground Ventilation',
      'Naval Submarine and Warship Citadel Isolation',
      'Civil Defense Bunkers and Nuclear Shelters',
      'Hazardous Chemical Warehouse Air Intake Shutoff'
    ]
  },
  'refractory-lined-damper-valves': {
    id: 'refractory-lined-damper-valves',
    title: 'Refractory Lined Damper Valves',
    model: 'BE-140 Series',
    image: '/images/products/BE140-Pneumatic-Refractory-Lined-Damper-Valves.png',
    category: 'severe',
    categoryLabel: 'Severe Thermal Resilience',
    tagline: 'Ultra-high temperature refractory lined damper valve engineered for continuous service up to 1,200°C.',
    desc: 'Engineered for extreme thermal conditions up to 1,200°C in cement rotary kilns, blast furnaces, thermal oxidizers, and metallurgical smelters. Heavy steel casing and disc are lined with dense high-alumina refractory castable anchored by stainless V-studs.',
    longDesc: 'Bellator BE-140 Series Refractory Lined Damper Valves provide reliable gas control in the hottest industrial applications. The interior casing and blade are protected by a thick layer of dense refractory castable anchored with Inconel or stainless steel V-studs, keeping outer shell temperatures safe and preserving structural integrity.',
    keyHighlights: [
      'Continuous thermal operating temperature up to 1,200°C',
      'Dense high-alumina castable lining anchored with stainless V-studs',
      'Water-cooled shaft and packing gland cooling jacket options',
      'Resistant to severe thermal shock and abrasive particulate erosion'
    ],
    leakage: 'Class III / Class IV (Up to 99% Sealing)',
    temp: 'Up to +1,200°C Continuous Thermal Duty',
    pressure: 'Up to 6,000 mmWC',
    sizes: 'DN300 to DN3,500',
    materials: 'Heavy Carbon Steel Shell, High-Alumina Refractory Castable, Inconel / SS310 Anchors',
    actuation: 'Heavy-Duty Pneumatic Cylinder with Water-Cooled Shafts, Motorized Gearbox',
    standards: 'Severe Process Metallurgy Standards, ASME Sec. VIII',
    features: [
      'Engineered refractory anchor pattern with thermal expansion joints',
      'Hollow water-cooled drive shaft and purge-cooled stuffing boxes',
      'Heavy-duty outboard roller bearings on elevated stanchions',
      'Refractory step seat design delivering tight high-temperature sealing'
    ],
    applications: [
      'Cement Plant Rotary Kiln Exhaust & Preheater Tower',
      'Steel Mill Blast Furnace & Direct Reduced Iron (DRI) Plants',
      'Hazardous Waste Thermal Oxidizers & Incinerators',
      'Non-Ferrous Metallurgical Smelters & Roasters'
    ]
  },
  'double-flap-damper-valves': {
    id: 'double-flap-damper-valves',
    title: 'Double Flap Damper Valves',
    model: 'DFDV Series',
    image: '/images/products/Counter-Weight-Operated-Double-Flap-Valve.png',
    category: 'severe',
    categoryLabel: 'Hopper Dust Discharge',
    tagline: 'Dual-chamber mechanical airlock valve discharging heavy dust and ash while maintaining airtight vacuum seal.',
    desc: 'Dual-chamber mechanical airlock valve that continuously discharges fly ash, cement clinker dust, and heavy ores from baghouse hoppers and electrostatic precipitators without letting atmospheric air infiltrate into the vacuum system.',
    longDesc: 'The DFDV Series Double Flap Damper functions as a reliable mechanical airlock for bulk solids discharge. Two counter-weighted or motor-driven flaps alternate opening cycles, ensuring that one flap is always closed to maintain the airtight vacuum boundary in hoppers and cyclones.',
    keyHighlights: [
      'Continuous airtight pressure boundary during solids discharge',
      'Available with gravity counterweight arms or motorized cam drives',
      'Replaceable Hardox wear liners and Stellite hardfaced contact seats',
      'Resistant to bridging, clogging, and heavy thermal distortion'
    ],
    leakage: 'Airtight Vacuum Boundary Maintenance',
    temp: 'Up to +450°C',
    pressure: 'Vacuum to +2,000 mmWC',
    sizes: '200 x 200 mm to 1,200 x 1,200 mm Flange Opening',
    materials: 'IS2062 Steel, Hardox 400 Wear Liners, Stellite / Hardfaced Flap Contact Edges',
    actuation: 'Geared Electric Motor with Cam Mechanism or Gravity Counterweight Levers',
    standards: 'Dust Containment & Bulk Material Handling Codes',
    features: [
      'Two isolated chambers with precision machined flap seats',
      'Replaceable Hardox 400/500 abrasive wear plates',
      'Motorized camshaft mechanism ensuring positive sequential cycling',
      'Inspection access doors on both upper and lower chambers'
    ],
    applications: [
      'Electrostatic Precipitator (ESP) Ash Hopper Discharge',
      'Fabric Filter Baghouse Hopper Air Lock Isolation',
      'Cyclone Dust Collector Bottom Unloading',
      'Cement Clinker, Lime, and Coal Dust Feeder Chutes'
    ]
  },
  'back-draft-damper-valves': {
    id: 'back-draft-damper-valves',
    title: 'BE120 : BACK DRAFT DAMPER VALVES',
    model: 'BE120 SERIES',
    image: '/images/products/BE120-BackDraft-Damper-Valves.png',
    category: 'severe',
    categoryLabel: 'Reverse Flow Check',
    tagline: 'Self-actuating non-return gravity damper preventing reverse gas flow and protecting offline industrial fans.',
    desc: 'Automatic gravity and counterweight-actuated non-return dampers. Sensitive aerodynamic blade balancing allows forward gas flow with minimal pressure resistance, while instantly shutting tight when reverse air currents or fan shutdowns occur.',
    longDesc: 'Bellator BE-120 Series Back Draft Dampers are automatic non-return check valves for large air and gas systems. Featuring precision counterbalanced blades that swing open with low forward velocity and slam shut immediately upon flow reversal, protecting fans and blowers from reverse windmilling.',
    keyHighlights: [
      'Self-actuating gravity and counterweight operation with zero power required',
      'Protects redundant fans and blowers from reverse airflow damage',
      'Low opening pressure threshold with adjustable counterweight arms',
      'Custom duct profiles up to 4,000 x 4,000 mm'
    ],
    leakage: 'Automatic Reverse Flow Prevention',
    temp: 'Up to +350°C',
    pressure: 'Up to 3,500 mmWC',
    sizes: 'Custom Duct Dimensions to 4,000 x 4,000 mm',
    materials: 'Corten Steel, Low-Inertia Aluminum / SS304 Blades, Precision Bronze Bushings',
    actuation: 'Self-Actuating Gravity / Adjustable Counterweight Arm',
    standards: 'AMCA 500-D, EN 1751',
    features: [
      'Aerodynamically balanced low-inertia blade construction',
      'External adjustable counterweight levers for sensitivity tuning',
      'Oil-impregnated bronze or sealed stainless ball bearings',
      'Neoprene or stainless blade tip seals for tight reverse shutoff'
    ],
    applications: [
      'Parallel Fan Discharge Headers (FD/ID Fan Discharge)',
      'Building Ventilation and Exhaust Plenums',
      'Turbine Generator Ventilation Outlets',
      'Emergency Standby Blower Discharge Lines'
    ]
  },
  'fabricated-double-beat-valves': {
    id: 'fabricated-double-beat-valves',
    title: 'Fabricated Double Beat Valves',
    model: 'FDBV Series',
    image: '/images/products/Double-Beat-Valve.png',
    category: 'severe',
    categoryLabel: 'Balanced Equilibrium',
    tagline: 'Dual-seat pressure balanced throttle valve for large volumetric flow control of hot steam and process gas.',
    desc: 'Dual-seat equilibrium throttle valve engineered for handling large volumetric throughput of hot gases and steam. The balanced plug construction cancels line pressure forces, enabling smooth modulation with miniature actuator sizes and reduced power demand.',
    longDesc: 'The FDBV Series Fabricated Double Beat Valve utilizes two balanced seats on a common spindle. Because fluid pressure acts in opposite directions on the two seats, hydraulic forces are virtually neutralized, allowing massive steam or gas flows to be throttled with remarkable precision using compact actuators.',
    keyHighlights: [
      'Balanced dual-seat geometry cancels line pressure forces',
      'Enables high-precision modulation with low actuation power',
      'Fabricated carbon steel or stainless construction up to DN1,500',
      'Exceptional performance in pulsating high-temperature steam'
    ],
    leakage: 'Class IV Metal-to-Metal Throttling',
    temp: 'Up to +500°C',
    pressure: 'Up to PN16',
    sizes: 'DN200 to DN1,500',
    materials: 'Fabricated Carbon Steel IS2062, Stainless Steel 304L / 316L Internals',
    actuation: 'Pneumatic Diaphragm / Piston Actuator with Positioner, Motorized Multi-Turn',
    standards: 'ASME Sec. VIII, BS 5150',
    features: [
      'Fabricated streamline flow chamber reducing turbulence',
      'Dual plug and seat rings with hardfaced Stellite overlays',
      'Linear characteristic throttling profile across full stroke',
      'Live-loaded gland packing with lantern ring purge option'
    ],
    applications: [
      'Sugar Mill Steam Engine & Evaporator Exhaust Headers',
      'Paper Mill Black Liquor Gas and Steam Throttling',
      'Steel Mill Gas Mixing and Blast Furnace Gas Lines',
      'High-Volume Low-Pressure Steam Pressure Reduction'
    ]
  },
  'twin-seal-flap-damper-valves': {
    id: 'twin-seal-flap-damper-valves',
    title: 'Twin Seal Flap Damper Valves',
    model: 'TSFD Series',
    image: '/images/products/Twin-Seal-Flap-Damper-Valve.png',
    category: 'severe',
    categoryLabel: '100% Gas Tightness',
    tagline: 'Dual perimeter seal damper with intermediate seal air pressure chamber for 100% human-safe isolation.',
    desc: 'Equipped with a dual perimeter elastomeric or metallic sealing arrangement enclosing an intermediate seal air pressure cavity. Injects overpressure purge air to achieve absolute 100% human-safe gas isolation in thermal power plant FGD and SCR ducts.',
    longDesc: 'The TSFD Series Twin Seal Flap Damper delivers 100% absolute zero-leakage shutoff in a compact single-disc footprint. Two distinct perimeter seal leaves enclose an annular seal air channel that is pressurized with clean air above duct pressure, ensuring zero hazardous gas crossover.',
    keyHighlights: [
      '100% Absolute Zero Leakage in a single-shaft compact envelope',
      'Intermediate air pressurization cavity between dual seal rings',
      'Enables safe personnel access inside FGD and SCR chambers',
      'Sizes up to Ø5,000 mm in circular and rectangular designs'
    ],
    leakage: '100% Gas-Tight (Zero Fugitive Emission)',
    temp: '-20°C to +400°C',
    pressure: 'Up to 6,500 mmWC',
    sizes: 'Ø500 mm to Ø5,000 mm Round / Square',
    materials: 'ASTM A240 Type 316L, Corten Steel, Inconel Leaf Seals',
    actuation: 'Electric Actuator, Pneumatic Cylinder with Seal Air Skid Interlock',
    standards: 'EN 1751 Class 4, AMCA 500-D, SIL-2 Safety Loop',
    features: [
      'Dual concentric Inconel or stainless leaf seal arrangement',
      'Automatic seal air valve that activates upon damper closure',
      'External greaseable flange bearing blocks',
      'Emergency manual override with lockable handwheel'
    ],
    applications: [
      'Thermal Power FGD Absorber Bypass & Isolation',
      'DeNOx Selective Catalytic Reduction (SCR) Ducts',
      'Incineration Plants & Toxic Gas Thermal Oxidizers',
      'Smelter Acid Plant Scrubber & Blower Isolation'
    ]
  },
  'stack-damper-valves': {
    id: 'stack-damper-valves',
    title: 'Stack Damper Valves',
    model: 'BE-SD Series',
    image: '/images/products/Motorized-Stack-Damper-Valve.png',
    category: 'severe',
    categoryLabel: 'Chimney Heat Retention',
    tagline: 'Top-of-stack cap damper retaining boiler warmth and shielding chimneys against monsoon weather ingress.',
    desc: 'Mounted on the top terminations of industrial exhaust stacks and utility boiler chimneys. Keeps boilers warm during overnight outages by capping stack draft, and protects internal refractory linings against rain and atmospheric moisture ingress.',
    longDesc: 'Bellator BE-SD Series Stack Damper Valves are installed directly at the top discharge lip of industrial chimneys and utility stacks. When the boiler trips or shuts down overnight, the damper caps the stack, trapping residual heat to accelerate morning restarts while keeping out heavy rain and corrosive moisture.',
    keyHighlights: [
      'Accelerates hot boiler restart after overnight shutdowns',
      'Protects expensive stack refractory lining from rain and acidic moisture',
      'Equipped with rain hoods and internal condensate drain troughs',
      'Wind-load certified structural design for exposed high-altitude duty'
    ],
    leakage: 'Weather-Tight & Thermal Retention Shutoff',
    temp: 'Up to +450°C',
    pressure: 'Chimney Draft Termination',
    sizes: 'Ø500 mm to Ø6,000+ mm (Custom Stack Top Diameters)',
    materials: 'Corten Steel, ASTM A36 with Rain Hood & Condensate Drain Troughs',
    actuation: 'Heavy-Duty Weather-Proof Electric Actuator / Pneumatic with Manual Override',
    standards: 'Structural Wind Load & Seismic Verified',
    features: [
      'Integral rain deflector hood and stainless perimeter drip ring',
      'Internal condensate collection troughs with drain connections',
      'All-weather IP67/IP68 rated actuators with sun and rain canopies',
      'Heavy-duty pivots engineered to resist gale-force wind shears'
    ],
    applications: [
      'Thermal Utility Boiler Chimney Termination Tops',
      'Combined Cycle Bypass Stack Outlets',
      'Waste Heat Recovery Boiler (WHRB) Stack Tops',
      'Industrial Incinerator and Smelter Discharge Stacks'
    ]
  },
  'fire-damper-valves': {
    id: 'fire-damper-valves',
    title: 'Fire Damper Valves',
    model: 'BE-FD Series',
    image: '/images/products/Fire-Damper.png',
    category: 'severe',
    categoryLabel: 'Fire & Smoke Barrier',
    tagline: 'Certified life-safety fire damper with thermal fusible link release and spring-return barrier closure.',
    desc: 'Life-safety certified dampers engineered for marine vessel air distribution, offshore platforms, and hazardous industrial ventilation ducts. Rapid mechanical spring-closure triggered by thermal fusible link or electric fire alarm signal to compartmentalize smoke and fire.',
    longDesc: 'Bellator BE-FD Series Fire Dampers are certified passive fire protection barriers designed to prevent the spread of flames and lethal smoke through HVAC ducts. Upon detecting temperatures exceeding the fusible link rating (72°C/95°C) or receiving a central fire alarm signal, the spring-loaded mechanism instantly snaps the damper shut.',
    keyHighlights: [
      'Certified fire barrier integrity up to 120 / 180 minutes',
      'Thermal fusible link release options (72°C, 95°C, 140°C)',
      'Approved for marine vessels, offshore rigs, and industrial complexes',
      'Fail-safe mechanical spring return closure'
    ],
    leakage: 'Certified Fire & Smoke Barrier',
    temp: '72°C / 95°C / 140°C Fusible Link Trigger Options',
    pressure: 'HVAC Duct Working Pressure',
    sizes: 'Custom Square & Round Dimensions',
    materials: 'Heavy Galvanized Steel, SS304L, Marine Grade SS316L',
    actuation: 'Certified Thermal Fusible Link + Spring Return / Motorized Spring Return',
    standards: 'Tested to International Fire Integrity Standards, Marine Society Approved',
    features: [
      'Precision calibrated thermal fusible link mechanism',
      'Intumescent smoke perimeter seals that swell under heat',
      'Heavy-gauge galvanized or stainless steel sleeve frame',
      'Remote electric reset actuator option with status limit switches'
    ],
    applications: [
      'Marine Ships, Cruise Liners & Offshore Oil Platforms',
      'High-Rise Commercial & Industrial Ventilation Ducts',
      'Hazardous Chemical and Petrochemical Control Rooms',
      'Underground Tunnels & Metro Rail Substation HVAC'
    ]
  }
};
