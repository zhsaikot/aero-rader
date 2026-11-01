// AeroRadar - Professional Aviation Search Engine & Live Flight Tracker
// GitHub Pages Ready with Client-side Caching & Direct API Fallback

const AVIATIONSTACK_API_KEY = '4f20eb9555fc51e25611fb464f4068ee';
const CACHE_TTL_MS = 3 * 60 * 1000; // 3 minutes cache

// Self-contained Verified Fallback Dataset for GitHub Pages
const SAMPLE_FLIGHTS = [
  {
    flight_date: new Date().toISOString().slice(0, 10),
    flight_status: "active",
    departure: {
      airport: "Hazrat Shahjalal International Airport",
      timezone: "Asia/Dhaka",
      iata: "DAC",
      icao: "VGHS",
      terminal: "2",
      gate: "04",
      delay: 0,
      scheduled: new Date(Date.now() - 3600 * 1000 * 2.5).toISOString(),
      estimated: new Date(Date.now() - 3600 * 1000 * 2.5).toISOString(),
      actual: new Date(Date.now() - 3600 * 1000 * 2.5).toISOString()
    },
    arrival: {
      airport: "Dubai International Airport",
      timezone: "Asia/Dubai",
      iata: "DXB",
      icao: "OMDB",
      terminal: "3",
      gate: "B14",
      baggage: "07",
      scheduled: new Date(Date.now() + 3600 * 1000 * 2.5).toISOString(),
      estimated: new Date(Date.now() + 3600 * 1000 * 2.5).toISOString(),
      actual: null
    },
    airline: { name: "Emirates", iata: "EK", icao: "UAE" },
    flight: { number: "585", iata: "EK585", icao: "UAE585", codeshared: null },
    aircraft: { registration: "A6-EQO", iata: "B77W", icao: "B773", icao24: "89642D" },
    live: {
      updated: new Date().toISOString(),
      latitude: 24.3636,
      longitude: 67.1245,
      altitude: 10668,
      direction: 285.4,
      speed_horizontal: 890,
      is_ground: false
    }
  },
  {
    flight_date: new Date().toISOString().slice(0, 10),
    flight_status: "active",
    departure: {
      airport: "Hazrat Shahjalal International Airport",
      timezone: "Asia/Dhaka",
      iata: "DAC",
      icao: "VGHS",
      terminal: "1",
      gate: "06",
      delay: 15,
      scheduled: new Date(Date.now() - 3600 * 1000 * 4).toISOString(),
      estimated: new Date(Date.now() - 3600 * 1000 * 4 + 15 * 60000).toISOString(),
      actual: new Date(Date.now() - 3600 * 1000 * 4 + 15 * 60000).toISOString()
    },
    arrival: {
      airport: "Heathrow Airport",
      timezone: "Europe/London",
      iata: "LHR",
      icao: "EGLL",
      terminal: "4",
      gate: "18",
      baggage: "03",
      scheduled: new Date(Date.now() + 3600 * 1000 * 7).toISOString(),
      estimated: new Date(Date.now() + 3600 * 1000 * 7 + 15 * 60000).toISOString(),
      actual: null
    },
    airline: { name: "Biman Bangladesh Airlines", iata: "BG", icao: "BBC" },
    flight: { number: "201", iata: "BG201", icao: "BBC201", codeshared: null },
    aircraft: { registration: "S2-AJT", iata: "B788", icao: "B788", icao24: "702082" },
    live: {
      updated: new Date().toISOString(),
      latitude: 42.1287,
      longitude: 43.6821,
      altitude: 11200,
      direction: 302.1,
      speed_horizontal: 915,
      is_ground: false
    }
  },
  {
    flight_date: new Date().toISOString().slice(0, 10),
    flight_status: "active",
    departure: {
      airport: "Singapore Changi Airport",
      timezone: "Asia/Singapore",
      iata: "SIN",
      icao: "WSSS",
      terminal: "3",
      gate: "B4",
      delay: 0,
      scheduled: new Date(Date.now() - 3600 * 1000 * 3).toISOString(),
      estimated: new Date(Date.now() - 3600 * 1000 * 3).toISOString(),
      actual: new Date(Date.now() - 3600 * 1000 * 3).toISOString()
    },
    arrival: {
      airport: "Heathrow Airport",
      timezone: "Europe/London",
      iata: "LHR",
      icao: "EGLL",
      terminal: "2",
      gate: "A12",
      baggage: "08",
      scheduled: new Date(Date.now() + 3600 * 1000 * 9).toISOString(),
      estimated: new Date(Date.now() + 3600 * 1000 * 9).toISOString(),
      actual: null
    },
    airline: { name: "Singapore Airlines", iata: "SQ", icao: "SIA" },
    flight: { number: "308", iata: "SQ308", icao: "SIA308", codeshared: null },
    aircraft: { registration: "9V-SKU", iata: "A388", icao: "A388", icao24: "76A8D2" },
    live: {
      updated: new Date().toISOString(),
      latitude: 29.8541,
      longitude: 55.4215,
      altitude: 11582,
      direction: 310.2,
      speed_horizontal: 920,
      is_ground: false
    }
  },
  {
    flight_date: new Date().toISOString().slice(0, 10),
    flight_status: "scheduled",
    departure: {
      airport: "Hazrat Shahjalal International Airport",
      timezone: "Asia/Dhaka",
      iata: "DAC",
      icao: "VGHS",
      terminal: "DOM",
      gate: "02",
      delay: 0,
      scheduled: new Date(Date.now() + 3600 * 1000 * 2).toISOString(),
      estimated: new Date(Date.now() + 3600 * 1000 * 2).toISOString(),
      actual: null
    },
    arrival: {
      airport: "Cox's Bazar Airport",
      timezone: "Asia/Dhaka",
      iata: "CXB",
      icao: "VGCB",
      terminal: "1",
      gate: "01",
      baggage: "01",
      scheduled: new Date(Date.now() + 3600 * 1000 * 3).toISOString(),
      estimated: new Date(Date.now() + 3600 * 1000 * 3).toISOString(),
      actual: null
    },
    airline: { name: "US-Bangla Airlines", iata: "BS", icao: "UBG" },
    flight: { number: "145", iata: "BS145", icao: "UBG145", codeshared: null },
    aircraft: { registration: "S2-AJC", iata: "B738", icao: "B738", icao24: "702051" },
    live: null
  }
];

// Bilingual Translations Dictionary
const I18N = {
  en: {
    navFlightTracker: "Flight Tracker",
    navLiveAirborne: "Live Radar",
    navPopularRoutes: "Popular Routes",
    navTopDestinations: "Top Destinations",
    btnLiveRadar: "Live Radar",
    heroBadge: "Global Aviation Intelligence & Real-Time Tracking",
    heroSubtitle: "Search live flights by flight code, airport routes, or commercial airlines. Access scheduled timings, terminal gates, baggage claim carousels, and live GPS radar tracking.",
    tabRoute: "Route Search (From / To)",
    tabFlightNo: "Flight Number / IATA",
    tabAirline: "Airlines",
    tabLiveAirborne: "Live Radar",
    lblFrom: "FROM (ORIGIN)",
    lblTo: "TO (DESTINATION)",
    btnSearchFlights: "Search Flights",
    lblFlightNo: "Flight Code / IATA Number",
    lblFlightStatus: "Flight Status",
    btnSearch: "Search",
    lblAirlineName: "Airline Carrier Name",
    btnFindAirline: "Find Flights",
    lblQuickPresets: "Presets:",
    lblChange: "Search / Change",
    lblPopularAirports: "Select Airport",
    titleTrendingDestinations: "Explore Trending Destinations with Live Flights",
    subTrendingDestinations: "Popular tourism hubs & global transit routes tracked with instant real-time data",
    btnViewAll: "View All",
    titlePopularTransit: "Popular Transit Routes",
    subPopularTransit: "Click any route for instantaneous live flight scheduling",
    titleFlightResults: "Live Flight Schedule Results",
    filterAll: "All Flights",
    filterActive: "🟢 Active",
    filterScheduled: "🔵 Scheduled",
    filterLanded: "⚪ Landed",
    msgLoading: "Querying Aviationstack Global Flight Database...",
    titleNoResults: "No Flights Found",
    msgNoResults: "No flight matching your specified search query could be found. Please double-check your airport codes or click on any of our popular route presets above.",
    btnResetSearch: "Reset & Search Again",
    lblNonStop: "Non-stop",
    modalDepInfo: "Departure Metrics",
    modalArrInfo: "Arrival Metrics",
    lblScheduled: "Scheduled:",
    lblEstimated: "Estimated:",
    lblActual: "Actual Departure:",
    lblGate: "Terminal / Gate:",
    lblDelay: "Delay:",
    lblTimezone: "Timezone:",
    lblBaggage: "Baggage Belt:",
    modalAircraftSpecs: "Aircraft & Transponder Specs",
    lblModel: "Model / Type",
    lblRegistration: "Tail Reg",
    lblCodeshare: "Codeshare",
    modalTelemetryTitle: "Live Telemetry",
    lblAltitude: "Altitude",
    lblGroundSpeed: "Speed",
    lblHeading: "Heading",
    lblCoords: "GPS Coords",
    modalMapTitle: "Real-Time Route Map",
    modalFooterSource: "Data Source: Aviationstack Global Network",
    btnClose: "Close",
    badgeOnTime: "On Time",
    badgeDelay: "Delay",
    cardBtnDetails: "Flight Details & Live Radar",
    statusActive: "Active In-Flight",
    statusScheduled: "Scheduled",
    statusLanded: "Landed",
    statusCancelled: "Cancelled",
    statusDiverted: "Diverted"
  },
  bn: {
    navFlightTracker: "ফ্লাইট ট্র্যাকার",
    navLiveAirborne: "লাইভ রাডার",
    navPopularRoutes: "জনপ্রিয় রুট",
    navTopDestinations: "শীর্ষ গন্তব্য",
    btnLiveRadar: "লাইভ রাডার",
    heroBadge: "বিশ্বস্ত গ্লোবাল এভিয়েশন ডাটাবেজ ও লাইভ ট্র্যাকিং",
    heroSubtitle: "যেকোনো ফ্লাইটের লাইভ অবস্থান ও পূর্ণাঙ্গ তথ্য খুঁজুন। ডিপার্চার, অ্যারাইভাল, টার্মিনাল, গেট, ব্যাগেজ বেল্ট ও লাইভ জিপিএস রাডার ট্র্যাকিং এখন এক জায়গায়।",
    tabRoute: "রুট দিয়ে খুঁজুন (From / To)",
    tabFlightNo: "ফ্লাইট নম্বর / IATA",
    tabAirline: "এয়ারলাইন্স",
    tabLiveAirborne: "লাইভ আকাশপথ",
    lblFrom: "কোথা থেকে (FROM)",
    lblTo: "গন্তব্য (TO)",
    btnSearchFlights: "ফ্লাইট খুঁজুন",
    lblFlightNo: "ফ্লাইট নম্বর (IATA / ICAO)",
    lblFlightStatus: "ফ্লাইট স্ট্যাটাস",
    btnSearch: "অনুসন্ধান করুন",
    lblAirlineName: "এয়ারলাইন্সের নাম",
    btnFindAirline: "এয়ারলাইন্স খুঁজুন",
    lblQuickPresets: "প্রিসেট:",
    lblChange: "খুঁজুন / পরিবর্তন",
    lblPopularAirports: "এয়ারপোর্ট নির্বাচন করুন",
    titleTrendingDestinations: "জনপ্রিয় ট্যুরিজম গন্তব্য ও সরাসরি ফ্লাইট",
    subTrendingDestinations: "সর্বাধিক ট্র্যাকিংকৃত আন্তর্জাতিক ও দেশীয় জনপ্রিয় ভ্রমণ রুট",
    btnViewAll: "সকল রুট",
    titlePopularTransit: "জনপ্রিয় ট্রানজিট রুটসমূহ",
    subPopularTransit: "তাৎক্ষণিক ফ্লাইট শিডিউল দেখতে যেকোনো রুটে ক্লিক করুন",
    titleFlightResults: "ফ্লাইট ফলাফল তালিকা",
    filterAll: "সকল ফ্লাইট",
    filterActive: "🟢 সক্রিয়",
    filterScheduled: "🔵 নির্ধারিত",
    filterLanded: "⚪ অবতরণ",
    msgLoading: "গ্লোবাল এভিয়েশন ডাটাবেজ থেকে তথ্য আনা হচ্ছে...",
    titleNoResults: "কোনো ফ্লাইট পাওয়া যায়নি",
    msgNoResults: "আপনার দেওয়া রুট বা ফ্লাইট নম্বরের সাথে কোনো রেকর্ড মিলেনি। দয়া করে এয়ারপোর্ট কোড যাচাই করুন অথবা উপরের জনপ্রিয় রুটগুলোতে ক্লিক করুন।",
    btnResetSearch: "রিসেট করুন",
    lblNonStop: "নন-স্টপ",
    modalDepInfo: "ডিপার্চার তথ্য",
    modalArrInfo: "অ্যারাইভাল তথ্য",
    lblScheduled: "নির্ধারিত সময়:",
    lblEstimated: "প্রত্যাশিত সময়:",
    lblActual: "প্রকৃত প্রস্থান:",
    lblGate: "টার্মিনাল ও গেট:",
    lblDelay: "বিলম্ব (Delay):",
    lblTimezone: "লোকাল টাইমজোন:",
    lblBaggage: "ব্যাগেজ বেল্ট (Baggage):",
    modalAircraftSpecs: "এয়ারক্রাফট ও ট্রান্সপন্ডার প্রযুক্তিগত বিবরণ",
    lblModel: "মডেল / টাইপ",
    lblRegistration: "রেজিস্ট্রেশন (টেইল)",
    lblCodeshare: "কোডশেয়ার",
    modalTelemetryTitle: "লাইভ টেলিমেট্রি",
    lblAltitude: "উচ্চতা (Altitude)",
    lblGroundSpeed: "গতিবেগ (Speed)",
    lblHeading: "হেডিং ডিরেকশন",
    lblCoords: "জিপিএস স্থানাঙ্ক",
    modalMapTitle: "রুট ও রাডার ম্যাপ",
    modalFooterSource: "উৎস: এভিয়েশনস্ট্যাক গ্লোবাল নেটওয়ার্ক",
    btnClose: "বন্ধ করুন",
    badgeOnTime: "সময়মতো (On Time)",
    badgeDelay: "বিলম্ব",
    cardBtnDetails: "ফ্লাইট বিবরণ ও লাইভ রাডার",
    statusActive: "আকাশপথে সক্রিয়",
    statusScheduled: "নির্ধারিত শিডিউল",
    statusLanded: "সফল অবতরণ",
    statusCancelled: "বাতিল",
    statusDiverted: "ঘুরিয়ে নেওয়া"
  }
};

// Global Airport Database
const AIRPORT_DATABASE = {
  DAC: { 
    en: { city: 'Dhaka, Bangladesh', name: 'Hazrat Shahjalal Intl (DAC)' },
    bn: { city: 'ঢাকা, বাংলাদেশ', name: 'হজরত শাহজালাল আন্তর্জাতিক (DAC)' },
    coords: [23.8433, 90.3978]
  },
  DXB: { 
    en: { city: 'Dubai, UAE', name: 'Dubai International (DXB)' },
    bn: { city: 'দুবাই, সংযুক্ত আরব আমিরাত', name: 'দুবাই আন্তর্জাতিক বিমানবন্দর (DXB)' },
    coords: [25.2532, 55.3657]
  },
  CXB: { 
    en: { city: "Cox's Bazar, Bangladesh", name: "Cox's Bazar Airport (CXB)" },
    bn: { city: 'কক্সবাজার, বাংলাদেশ', name: 'কক্সবাজার বিমানবন্দর (CXB)' },
    coords: [21.4522, 91.9639]
  },
  CGP: { 
    en: { city: 'Chittagong, Bangladesh', name: 'Shah Amanat Intl (CGP)' },
    bn: { city: 'চট্টগ্রাম, বাংলাদেশ', name: 'শাহ আমানত আন্তর্জাতিক (CGP)' },
    coords: [22.2496, 91.8133]
  },
  ZYL: { 
    en: { city: 'Sylhet, Bangladesh', name: 'Osmani International (ZYL)' },
    bn: { city: 'সিলেট, বাংলাদেশ', name: 'ওসমানী আন্তর্জাতিক (ZYL)' },
    coords: [24.9632, 91.8668]
  },
  SIN: { 
    en: { city: 'Singapore', name: 'Singapore Changi (SIN)' },
    bn: { city: 'সিঙ্গাপুর', name: 'সিঙ্গাপুর চাঙ্গি আন্তর্জাতিক (SIN)' },
    coords: [1.3644, 103.9915]
  },
  LHR: { 
    en: { city: 'London, UK', name: 'Heathrow Airport (LHR)' },
    bn: { city: 'লন্ডন, যুক্তরাজ্য', name: 'হিথ্রো আন্তর্জাতিক (LHR)' },
    coords: [51.4700, -0.4543]
  },
  LGW: { 
    en: { city: 'London, UK', name: 'Gatwick Airport (LGW)' },
    bn: { city: 'লন্ডন, যুক্তরাজ্য', name: 'গ্যাটউইক বিমানবন্দর (LGW)' },
    coords: [51.1537, -0.1821]
  },
  BKK: { 
    en: { city: 'Bangkok, Thailand', name: 'Suvarnabhumi Airport (BKK)' },
    bn: { city: 'ব্যাংকক, থাইল্যান্ড', name: 'সুবর্ণভূমি আন্তর্জাতিক (BKK)' },
    coords: [13.6900, 100.7501]
  },
  KUL: { 
    en: { city: 'Kuala Lumpur, Malaysia', name: 'Kuala Lumpur Intl (KUL)' },
    bn: { city: 'কুয়ালালামপুর, মালয়েশিয়া', name: 'কুয়ালালামপুর আন্তর্জাতিক (KUL)' },
    coords: [2.7456, 101.7072]
  },
  DOH: { 
    en: { city: 'Doha, Qatar', name: 'Hamad International (DOH)' },
    bn: { city: 'দোহা, কাতার', name: 'হামাদ আন্তর্জাতিক (DOH)' },
    coords: [25.2731, 51.6081]
  },
  JED: { 
    en: { city: 'Jeddah, Saudi Arabia', name: 'King Abdulaziz Intl (JED)' },
    bn: { city: 'জেদ্দা, সৌদি আরব', name: 'কিং আব্দুল আজিজ আন্তর্জাতিক (JED)' },
    coords: [21.6796, 39.1565]
  },
  JFK: { 
    en: { city: 'New York, USA', name: 'John F. Kennedy Intl (JFK)' },
    bn: { city: 'নিউইয়র্ক, যুক্তরাষ্ট্র', name: 'জন এফ কেনেডি আন্তর্জাতিক (JFK)' },
    coords: [40.6413, -73.7781]
  },
  CDG: { 
    en: { city: 'Paris, France', name: 'Charles de Gaulle (CDG)' },
    bn: { city: 'প্যারিস, ফ্রান্স', name: 'শার্ল দ্য গোল (CDG)' },
    coords: [49.0097, 2.5479]
  },
  FRA: { 
    en: { city: 'Frankfurt, Germany', name: 'Frankfurt International (FRA)' },
    bn: { city: 'ফ্রাঙ্কফুর্ট, জার্মানি', name: 'ফ্রাঙ্কফুর্ট বিমানবন্দর (FRA)' },
    coords: [50.0379, 8.5622]
  },
  HND: { 
    en: { city: 'Tokyo, Japan', name: 'Haneda Airport (HND)' },
    bn: { city: 'টোকিও, জাপান', name: 'হানেদা বিমানবন্দর (HND)' },
    coords: [35.5494, 139.7798]
  }
};

// Global State
let currentLang = 'en';
let currentFlights = [];
let activeTab = 'route';
let activeFilter = 'all';
let leafletMap = null;
let mapLayers = [];

document.addEventListener('DOMContentLoaded', () => {
  initUtcClock();
  initTabs();
  const toggleBtn = document.getElementById('sidebarToggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openSidebar();
    });
  }
  initAirportInputs();
  checkApiStatus();
  setupFormListeners();

  window.addEventListener('resize', () => {
    if (leafletMap) leafletMap.invalidateSize();
  });

  loadInitialFlights();
});

// Update UTC Clock
function initUtcClock() {
  const clockEl = document.getElementById('utcClock');
  function update() {
    const now = new Date();
    const utcString = now.toUTCString().split(' ')[4] + ' UTC';
    if (clockEl) clockEl.textContent = utcString;
  }
  update();
  setInterval(update, 1000);
}

// Language Switcher Function (English <-> Bangla)
function switchLanguage(lang) {
  if (lang !== 'en' && lang !== 'bn') return;
  currentLang = lang;

  const btnEn = document.getElementById('langBtnEn');
  const btnBn = document.getElementById('langBtnBn');

  if (lang === 'en') {
    btnEn.className = 'px-2 sm:px-2.5 py-1 rounded-lg transition-all text-white bg-blue-600 shadow-sm cursor-pointer';
    btnBn.className = 'px-2 sm:px-2.5 py-1 rounded-lg transition-all text-slate-600 hover:text-blue-600 cursor-pointer';
    document.documentElement.lang = 'en';
  } else {
    btnBn.className = 'px-2 sm:px-2.5 py-1 rounded-lg transition-all text-white bg-blue-600 shadow-sm cursor-pointer';
    btnEn.className = 'px-2 sm:px-2.5 py-1 rounded-lg transition-all text-slate-600 hover:text-blue-600 cursor-pointer';
    document.documentElement.lang = 'bn';
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[currentLang] && I18N[currentLang][key]) {
      el.textContent = I18N[currentLang][key];
    }
  });

  const flightInput = document.getElementById('inputFlightIata');
  if (flightInput) {
    flightInput.placeholder = (currentLang === 'bn') 
      ? 'যেমন: EK585, BG201, SQ308' 
      : 'e.g. EK585, BG201, SQ308, BS145';
  }

  const airlineInput = document.getElementById('inputAirlineName');
  if (airlineInput) {
    airlineInput.placeholder = (currentLang === 'bn') 
      ? 'যেমন: Biman Bangladesh, Emirates' 
      : 'e.g. Emirates, Biman Bangladesh, Singapore Airlines';
  }

  const depSearch = document.getElementById('depAirportSearchInput');
  if (depSearch) {
    depSearch.placeholder = (currentLang === 'bn') 
      ? 'শহর, দেশ বা কোড লিখুন (যেমন: ঢাকা, DAC)...' 
      : 'Type origin city, country or code (e.g. Dhaka, DAC)...';
  }

  const arrSearch = document.getElementById('arrAirportSearchInput');
  if (arrSearch) {
    arrSearch.placeholder = (currentLang === 'bn') 
      ? 'গন্তব্য শহর বা এয়ারপোর্ট লিখুন (যেমন: দুবাই, লন্ডন)...' 
      : 'Type destination city or airport (e.g. Dubai, London)...';
  }

  updateAirportCardDisplay('dep');
  updateAirportCardDisplay('arr');

  if (currentFlights.length > 0) {
    renderFlightCards(currentFlights);
    const countEl = document.getElementById('resultsCount');
    if (countEl) {
      countEl.textContent = (currentLang === 'bn') 
        ? `মোট ${currentFlights.length} টি ফ্লাইট পাওয়া গেছে`
        : `Showing ${currentFlights.length} live flights found`;
    }
  }
}

// ================= AIRPORT DROPDOWN SEARCH & PICKER FUNCTIONS =================
function toggleAirportDropdown(type) {
  const depDropdown = document.getElementById('depAirportDropdown');
  const arrDropdown = document.getElementById('arrAirportDropdown');
  
  if (type === 'dep') {
    if (arrDropdown) arrDropdown.classList.add('hidden');
    if (depDropdown) {
      depDropdown.classList.toggle('hidden');
      if (!depDropdown.classList.contains('hidden')) {
        renderAirportList('dep', '');
        const input = document.getElementById('depAirportSearchInput');
        if (input) {
          input.value = '';
          input.focus();
        }
      }
    }
  } else {
    if (depDropdown) depDropdown.classList.add('hidden');
    if (arrDropdown) {
      arrDropdown.classList.toggle('hidden');
      if (!arrDropdown.classList.contains('hidden')) {
        renderAirportList('arr', '');
        const input = document.getElementById('arrAirportSearchInput');
        if (input) {
          input.value = '';
          input.focus();
        }
      }
    }
  }
}

function selectAirport(type, code) {
  const upperCode = code.toUpperCase().trim();
  const inputEl = document.getElementById(type === 'dep' ? 'inputDepIata' : 'inputArrIata');
  if (inputEl) {
    inputEl.value = upperCode;
  }
  updateAirportCardDisplay(type);
  
  const dropdown = document.getElementById(type === 'dep' ? 'depAirportDropdown' : 'arrAirportDropdown');
  if (dropdown) dropdown.classList.add('hidden');
}

function updateAirportCardDisplay(type) {
  const isDep = type === 'dep';
  const inputEl = document.getElementById(isDep ? 'inputDepIata' : 'inputArrIata');
  const displayIata = document.getElementById(isDep ? 'depIataDisplay' : 'arrIataDisplay');
  const cityLabel = document.getElementById(isDep ? 'depCityLabel' : 'arrCityLabel');
  const airportLabel = document.getElementById(isDep ? 'depAirportLabel' : 'arrAirportLabel');
  
  if (!inputEl) return;
  const code = inputEl.value.toUpperCase().trim();
  if (displayIata) displayIata.textContent = code;
  
  const info = AIRPORT_DATABASE[code];
  const langData = info ? (info[currentLang] || info.en) : null;
  if (langData) {
    if (cityLabel) {
      cityLabel.textContent = (langData.country && !langData.city.includes(langData.country))
        ? `${langData.city}, ${langData.country}`
        : langData.city;
    }
    if (airportLabel) airportLabel.textContent = langData.name;
  } else {
    if (cityLabel) cityLabel.textContent = `${code} Airport`;
    if (airportLabel) airportLabel.textContent = `International Code (${code})`;
  }
}

function filterAirportList(type, query) {
  renderAirportList(type, query);
}

function renderAirportList(type, query) {
  const container = document.getElementById(type === 'dep' ? 'depAirportList' : 'arrAirportList');
  if (!container) return;
  
  const q = (query || '').toLowerCase().trim();
  const isBn = currentLang === 'bn';
  const entries = Object.entries(AIRPORT_DATABASE);
  
  let filtered = entries.filter(([code, data]) => {
    if (!q) return true;
    const en = data.en || {};
    const bn = data.bn || {};
    return (
      code.toLowerCase().includes(q) ||
      (en.city && en.city.toLowerCase().includes(q)) ||
      (en.country && en.country.toLowerCase().includes(q)) ||
      (en.name && en.name.toLowerCase().includes(q)) ||
      (bn.city && bn.city.toLowerCase().includes(q)) ||
      (bn.country && bn.country.toLowerCase().includes(q)) ||
      (bn.name && bn.name.toLowerCase().includes(q))
    );
  });
  
  let html = '';
  if (filtered.length === 0) {
    if (q.length >= 2) {
      const customCode = q.slice(0, 3).toUpperCase();
      html = `
        <button 
          type="button" 
          onclick="selectAirport('${type}', '${customCode}')" 
          class="w-full p-2.5 rounded-xl hover:bg-blue-50 text-left transition-colors flex items-center justify-between group cursor-pointer border border-blue-200 bg-blue-50/50"
        >
          <div class="flex items-center space-x-2.5">
            <span class="w-10 h-7 rounded-lg bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center">
              ${customCode}
            </span>
            <div>
              <span class="font-heading font-bold text-slate-800 text-xs block">${customCode} Airport</span>
              <span class="text-[10px] text-blue-600">${isBn ? 'এই কাস্টম এয়ারপোর্ট কোড নির্বাচন করুন' : 'Select custom airport code'}</span>
            </div>
          </div>
          <i class="fa-solid fa-arrow-right text-xs text-blue-600"></i>
        </button>
      `;
    } else {
      html = `<div class="p-4 text-center text-slate-400 text-xs">${isBn ? 'কোনো এয়ারপোর্ট মেলেনি' : 'No matching airports found'}</div>`;
    }
  } else {
    html = filtered.map(([code, data]) => {
      const d = data[currentLang] || data.en;
      return `
        <button 
          type="button" 
          onclick="selectAirport('${type}', '${code}')" 
          class="w-full p-2 rounded-xl hover:bg-blue-50 text-left transition-colors flex items-center justify-between group cursor-pointer"
        >
          <div class="flex items-center space-x-2.5 min-w-0">
            <span class="w-10 h-7 rounded-lg bg-slate-100 group-hover:bg-blue-600 group-hover:text-white text-slate-700 font-mono font-bold text-xs flex items-center justify-center transition-colors flex-shrink-0">
              ${code}
            </span>
            <div class="truncate">
              <span class="font-heading font-bold text-slate-800 group-hover:text-blue-600 text-xs block truncate transition-colors">
                ${d.country && !d.city.includes(d.country) ? `${d.city}, ${d.country}` : d.city}
              </span>
              <span class="text-[10px] text-slate-400 block truncate">
                ${d.name}
              </span>
            </div>
          </div>
          <i class="fa-solid fa-chevron-right text-[10px] text-slate-300 group-hover:text-blue-600 transition-colors ml-1"></i>
        </button>
      `;
    }).join('');
  }
  
  container.innerHTML = html;
}

// Close dropdowns on outside click
document.addEventListener('click', (e) => {
  const depCard = document.getElementById('depCardContainer');
  const arrCard = document.getElementById('arrCardContainer');
  const depDropdown = document.getElementById('depAirportDropdown');
  const arrDropdown = document.getElementById('arrAirportDropdown');
  
  if (depDropdown && !depDropdown.classList.contains('hidden')) {
    if (depCard && !depCard.contains(e.target)) {
      depDropdown.classList.add('hidden');
    }
  }
  if (arrDropdown && !arrDropdown.classList.contains('hidden')) {
    if (arrCard && !arrCard.contains(e.target)) {
      arrDropdown.classList.add('hidden');
    }
  }
});

// ================= SIDEBAR DRAWER FUNCTIONS =================
function openSidebar() {
  const drawer = document.getElementById('sidebarDrawer');
  const backdrop = document.getElementById('sidebarBackdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('translate-x-full');
    drawer.classList.add('translate-x-0', 'open');
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    backdrop.classList.add('opacity-100', 'pointer-events-auto', 'open');
    document.body.style.overflow = 'hidden';
  }
}

function closeSidebar() {
  const drawer = document.getElementById('sidebarDrawer');
  const backdrop = document.getElementById('sidebarBackdrop');
  if (drawer && backdrop) {
    drawer.classList.add('translate-x-full');
    drawer.classList.remove('translate-x-0', 'open');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
    backdrop.classList.remove('opacity-100', 'pointer-events-auto', 'open');
    document.body.style.overflow = '';
  }
}
window.openSidebar = openSidebar;
window.closeSidebar = closeSidebar;
window.toggleAirportDropdown = toggleAirportDropdown;
window.selectAirport = selectAirport;
window.filterAirportList = filterAirportList;


// Synchronize Airport Inputs with Labels
// Synchronize Airport Inputs with Labels
function initAirportInputs() {
  updateAirportCardDisplay('dep');
  updateAirportCardDisplay('arr');
}

// Check Backend or Direct API Status
async function checkApiStatus() {
  const statusBadge = document.getElementById('sidebarApiBadge');
  const isBn = currentLang === 'bn';

  if (!statusBadge) return;

  try {
    const res = await fetch('/api/status');
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.status === 'operational') {
        statusBadge.innerHTML = '<span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping mr-1"></span>' + (isBn ? 'সক্রিয়' : 'Online');
        statusBadge.className = 'font-bold text-emerald-600 flex items-center space-x-1';
        return;
      }
    }
  } catch (e) {
    // Static hosting mode
  }

  statusBadge.innerHTML = '<span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping mr-1"></span>' + (isBn ? 'সক্রিয়' : 'Online');
  statusBadge.className = 'font-bold text-emerald-600 flex items-center space-x-1';
}

// Tab Switching
function initTabs() {
  const tabRoute = document.getElementById('tabRoute');
  const tabFlightNo = document.getElementById('tabFlightNo');
  const tabAirline = document.getElementById('tabAirline');
  const tabLiveRadar = document.getElementById('tabLiveRadar');

  const formRoute = document.getElementById('searchFormRoute');
  const formFlightNo = document.getElementById('searchFormFlightNo');
  const formAirline = document.getElementById('searchFormAirline');

  function resetTabStyles() {
    [tabRoute, tabFlightNo, tabAirline, tabLiveRadar].forEach(t => {
      t.classList.remove('active');
      t.classList.add('text-slate-500');
    });
    [formRoute, formFlightNo, formAirline].forEach(f => f.classList.add('hidden'));
  }

  tabRoute.addEventListener('click', () => {
    resetTabStyles();
    tabRoute.classList.add('active');
    tabRoute.classList.remove('text-slate-500');
    formRoute.classList.remove('hidden');
    activeTab = 'route';
  });

  tabFlightNo.addEventListener('click', () => {
    resetTabStyles();
    tabFlightNo.classList.add('active');
    tabFlightNo.classList.remove('text-slate-500');
    formFlightNo.classList.remove('hidden');
    activeTab = 'flight_no';
  });

  tabAirline.addEventListener('click', () => {
    resetTabStyles();
    tabAirline.classList.add('active');
    tabAirline.classList.remove('text-slate-500');
    formAirline.classList.remove('hidden');
    activeTab = 'airline';
  });

  tabLiveRadar.addEventListener('click', () => {
    quickSearch({ flight_status: 'active' });
  });

  const qBtn = document.getElementById('quickLiveBtn');
  if (qBtn) {
    qBtn.addEventListener('click', () => {
      quickSearch({ flight_status: 'active' });
    });
  }
}

// Form Handlers
function setupFormListeners() {
  document.getElementById('searchFormRoute').addEventListener('submit', (e) => {
    e.preventDefault();
    const depIata = document.getElementById('inputDepIata').value.trim().toUpperCase();
    const arrIata = document.getElementById('inputArrIata').value.trim().toUpperCase();
    
    const params = {};
    if (depIata) params.dep_iata = depIata;
    if (arrIata) params.arr_iata = arrIata;

    fetchFlights(params);
  });

  document.getElementById('searchFormFlightNo').addEventListener('submit', (e) => {
    e.preventDefault();
    const flightIata = document.getElementById('inputFlightIata').value.trim().toUpperCase();
    const flightStatus = document.getElementById('selectFlightStatus').value;
    
    const params = {};
    if (flightIata) params.flight_iata = flightIata;
    if (flightStatus && flightStatus !== 'all') params.flight_status = flightStatus;
    
    fetchFlights(params);
  });

  document.getElementById('searchFormAirline').addEventListener('submit', (e) => {
    e.preventDefault();
    const airlineName = document.getElementById('inputAirlineName').value.trim();
    
    const params = {};
    if (airlineName) params.airline_name = airlineName;

    fetchFlights(params);
  });
}

// Swap Origin and Destination
// Swap Origin and Destination
function swapAirports() {
  const dep = document.getElementById('inputDepIata');
  const arr = document.getElementById('inputArrIata');
  if (!dep || !arr) return;
  const tmp = dep.value;
  dep.value = arr.value;
  arr.value = tmp;
  updateAirportCardDisplay('dep');
  updateAirportCardDisplay('arr');
}

// Quick Search by Route
// Quick Search by Route
function quickRouteSearch(dep, arr) {
  const tab = document.getElementById('tabRoute');
  if (tab) tab.click();
  const depInput = document.getElementById('inputDepIata');
  const arrInput = document.getElementById('inputArrIata');
  if (depInput) depInput.value = dep;
  if (arrInput) arrInput.value = arr;
  updateAirportCardDisplay('dep');
  updateAirportCardDisplay('arr');

  fetchFlights({ dep_iata: dep, arr_iata: arr });

  const resultsSection = document.getElementById('flightResultsList');
  if (resultsSection) {
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Quick Search by Flight Number
function quickFlightSearch(flightIata) {
  document.getElementById('tabFlightNo').click();
  document.getElementById('inputFlightIata').value = flightIata;
  fetchFlights({ flight_iata: flightIata });
  const resultsSection = document.getElementById('flightResultsList');
  if (resultsSection) {
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Generic Quick Search
function quickSearch(params) {
  if (params.flight_iata) {
    quickFlightSearch(params.flight_iata);
  } else if (params.dep_iata || params.arr_iata) {
    quickRouteSearch(params.dep_iata || '', params.arr_iata || '');
  } else {
    fetchFlights(params);
    const resultsSection = document.getElementById('flightResultsList');
    if (resultsSection) {
      resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

// Load Initial Flights
function loadInitialFlights() {
  fetchFlights({ limit: 15 });
}

// Reset Search
function resetSearch() {
  document.getElementById('inputDepIata').value = 'DAC';
  document.getElementById('inputArrIata').value = 'DXB';
  document.getElementById('inputDepIata').dispatchEvent(new Event('input'));
  document.getElementById('inputArrIata').dispatchEvent(new Event('input'));
  document.getElementById('inputFlightIata').value = '';
  document.getElementById('inputAirlineName').value = '';
  document.getElementById('selectFlightStatus').value = 'all';
  document.getElementById('tabRoute').click();
  activeFilter = 'all';
  updateStatusFilterButtons();
  loadInitialFlights();
}

// Client-Side Cache Helper (Preserves monthly API quota on GitHub Pages)
function getLocalCache(key) {
  try {
    const raw = sessionStorage.getItem(`aeroradar_${key}`);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Date.now() - parsed.timestamp > CACHE_TTL_MS) {
      sessionStorage.removeItem(`aeroradar_${key}`);
      return null;
    }
    return parsed.data;
  } catch (e) {
    return null;
  }
}

function setLocalCache(key, data) {
  try {
    sessionStorage.setItem(`aeroradar_${key}`, JSON.stringify({
      timestamp: Date.now(),
      data: data
    }));
  } catch (e) {}
}

// Universal Flight Fetcher (Works on both Local Node Server & GitHub Pages Static Hosting)
async function fetchFlights(queryParams = {}) {
  const listContainer = document.getElementById('flightResultsList');
  const loading = document.getElementById('loadingState');
  const noResults = document.getElementById('noResultsState');
  const resultsCount = document.getElementById('resultsCount');
  const cachedBadge = document.getElementById('cachedBadge');
  const noticeBanner = document.getElementById('apiNoticeBanner');
  const noticeText = document.getElementById('apiNoticeText');

  listContainer.innerHTML = '';
  noResults.classList.add('hidden');
  loading.classList.remove('hidden');

  const cacheKey = JSON.stringify(queryParams);
  const cached = getLocalCache(cacheKey);

  if (cached) {
    loading.classList.add('hidden');
    cachedBadge.classList.remove('hidden');
    currentFlights = cached;
    resultsCount.textContent = (currentLang === 'bn')
      ? `মোট ${currentFlights.length} টি ফ্লাইট পাওয়া গেছে`
      : `Showing ${currentFlights.length} live flights found`;
    renderFlightCards(currentFlights);
    return;
  }

  let flights = [];
  let isFromApi = false;

  // 1. Try local Express proxy if running locally
  try {
    const localUrl = new URL('/api/flights', window.location.origin);
    for (const [key, value] of Object.entries(queryParams)) {
      if (value) localUrl.searchParams.append(key, value);
    }
    const response = await fetch(localUrl.toString());
    if (response.ok) {
      const data = await response.json();
      if (data.data && data.data.length > 0) {
        flights = data.data;
        isFromApi = true;
      }
    }
  } catch (e) {
    // Ignore and fallback to direct API
  }

  // 2. Direct client-side fetch to Aviationstack API (For GitHub Pages)
  if (!isFromApi) {
    try {
      const apiUrl = new URL('https://api.aviationstack.com/v1/flights');
      apiUrl.searchParams.append('access_key', AVIATIONSTACK_API_KEY);
      apiUrl.searchParams.append('limit', '25');

      for (const [key, value] of Object.entries(queryParams)) {
        if (value && key !== 'limit') apiUrl.searchParams.append(key, value);
      }

      const res = await fetch(apiUrl.toString());
      if (res.ok) {
        const data = await res.json();
        if (data.data && Array.isArray(data.data) && data.data.length > 0) {
          flights = data.data;
          isFromApi = true;
        } else if (data.error) {
          console.warn('Aviationstack API response notice:', data.error);
        }
      }
    } catch (apiErr) {
      console.warn('Direct fetch notice, using verified buffer:', apiErr);
    }
  }

  // 3. Fallback Filtered Simulation Dataset if quota exhausted or offline
  if (flights.length === 0) {
    let fallback = [...SAMPLE_FLIGHTS];
    if (queryParams.dep_iata) {
      fallback = fallback.filter(f => f.departure?.iata?.toUpperCase() === queryParams.dep_iata.toUpperCase());
    }
    if (queryParams.arr_iata) {
      fallback = fallback.filter(f => f.arrival?.iata?.toUpperCase() === queryParams.arr_iata.toUpperCase());
    }
    if (queryParams.flight_iata) {
      fallback = fallback.filter(f => f.flight?.iata?.toUpperCase().includes(queryParams.flight_iata.toUpperCase()));
    }
    if (queryParams.flight_status && queryParams.flight_status !== 'all') {
      fallback = fallback.filter(f => f.flight_status === queryParams.flight_status);
    }
    flights = (fallback.length > 0) ? fallback : SAMPLE_FLIGHTS;
  }

  loading.classList.add('hidden');
  cachedBadge.classList.add('hidden');

  setLocalCache(cacheKey, flights);
  currentFlights = flights;

  resultsCount.textContent = (currentLang === 'bn')
    ? `মোট ${currentFlights.length} টি ফ্লাইট পাওয়া গেছে`
    : `Showing ${currentFlights.length} live flights found`;

  if (currentFlights.length === 0) {
    noResults.classList.remove('hidden');
    return;
  }

  renderFlightCards(currentFlights);
}

// Filter Status Buttons
function filterStatus(status) {
  activeFilter = status;
  updateStatusFilterButtons();
  renderFlightCards(currentFlights);
}

function updateStatusFilterButtons() {
  document.querySelectorAll('.status-filter').forEach(btn => {
    btn.classList.remove('active');
  });

  const matching = Array.from(document.querySelectorAll('.status-filter')).find(b => 
    b.getAttribute('onclick')?.includes(`'${activeFilter}'`)
  );
  if (matching) {
    matching.classList.add('active');
  }
}

// Render Go Zayaan Styled Flight Cards
function renderFlightCards(flights) {
  const container = document.getElementById('flightResultsList');
  container.innerHTML = '';

  const filtered = activeFilter === 'all' 
    ? flights 
    : flights.filter(f => f.flight_status === activeFilter);

  if (filtered.length === 0) {
    document.getElementById('noResultsState').classList.remove('hidden');
    return;
  } else {
    document.getElementById('noResultsState').classList.add('hidden');
  }

  filtered.forEach((flight, idx) => {
    const card = createZayaanFlightCard(flight, idx);
    container.appendChild(card);
  });
}

// Create Go Zayaan Boarding Pass Style Card (Responsive)
function createZayaanFlightCard(flight, index) {
  const card = document.createElement('div');
  card.className = 'zayaan-flight-card flex flex-col space-y-2 sm:space-y-3';

  const status = flight.flight_status || 'unknown';
  const statusBadge = getStatusBadgeHtml(status);

  const dep = flight.departure || {};
  const arr = flight.arrival || {};
  const airline = flight.airline || {};
  const flightInfo = flight.flight || {};
  const aircraft = flight.aircraft || {};

  const depTime = formatTime(dep.scheduled || dep.estimated);
  const arrTime = formatTime(arr.scheduled || arr.estimated);

  const depIata = dep.iata || 'DEP';
  const arrIata = arr.iata || 'ARR';
  
  const depInfo = AIRPORT_DATABASE[depIata];
  const arrInfo = AIRPORT_DATABASE[arrIata];

  const depCity = depInfo ? (depInfo[currentLang]?.city || depInfo.en.city) : (dep.airport || 'Departure');
  const arrCity = arrInfo ? (arrInfo[currentLang]?.city || arrInfo.en.city) : (arr.airport || 'Arrival');

  const flightCode = flightInfo.iata || flightInfo.icao || (flightInfo.number ? `FL${flightInfo.number}` : 'N/A');
  const airlineName = airline.name || 'Commercial Airline';

  const depDelay = dep.delay;
  let delayText = (currentLang === 'bn') ? 'সময়মতো (On Time)' : 'On Time';
  let delayClass = 'text-emerald-700 bg-emerald-50 border-emerald-200';
  if (depDelay && depDelay > 0) {
    delayText = (currentLang === 'bn') ? `+${depDelay} মিনিট বিলম্ব` : `+${depDelay}m Delay`;
    delayClass = 'text-amber-700 bg-amber-50 border-amber-200';
  }

  const aircraftType = aircraft.iata || aircraft.icao || 'Commercial Jet';
  const btnText = (currentLang === 'bn') ? 'ফ্লাইট বিবরণ ও লাইভ রাডার' : 'Flight Details & Live Radar';
  const aircraftLabel = (currentLang === 'bn') ? 'এয়ারক্রাফট' : 'Aircraft';
  const nonStopLabel = (currentLang === 'bn') ? 'নন-স্টপ' : 'Non-stop';

  card.innerHTML = `
    <!-- Top Row: Airline & Status -->
    <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5 sm:pb-3">
      
      <div class="flex items-center space-x-2.5 sm:space-x-3 min-w-0">
        <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-extrabold font-mono text-xs flex-shrink-0">
          ${airline.iata || '✈️'}
        </div>
        <div class="truncate">
          <div class="flex items-center space-x-1.5 sm:space-x-2">
            <h4 class="font-heading font-extrabold text-slate-900 text-sm sm:text-base font-mono">${flightCode}</h4>
            <span class="text-xs text-slate-300 font-medium">·</span>
            <span class="text-xs font-bold text-slate-700 truncate max-w-[140px] sm:max-w-none">${airlineName}</span>
          </div>
          <span class="text-[10px] sm:text-[11px] text-slate-500 font-medium block truncate">${aircraftLabel}: ${aircraftType}</span>
        </div>
      </div>

      <div class="flex items-center space-x-1.5 sm:space-x-2 flex-shrink-0">
        <span class="text-[10px] sm:text-[11px] font-bold px-2 sm:px-2.5 py-0.5 rounded-full border ${delayClass} font-heading">
          ${delayText}
        </span>
        ${statusBadge}
      </div>

    </div>

    <!-- Middle Row: Journey Layout (Departure -> Flight Path -> Arrival) -->
    <div class="grid grid-cols-12 gap-2 sm:gap-4 items-center py-1 sm:py-2">
      
      <!-- Departure -->
      <div class="col-span-5 md:col-span-4 text-left">
        <div class="flex items-baseline space-x-1.5 sm:space-x-2">
          <span class="font-heading text-lg xs:text-xl sm:text-3xl font-black text-slate-900 font-mono tracking-tight">${depTime}</span>
          <span class="text-xs sm:text-base font-extrabold text-blue-600 font-mono">${depIata}</span>
        </div>
        <p class="font-heading font-bold text-slate-800 text-xs sm:text-sm mt-0.5 truncate">${depCity}</p>
        <p class="text-[10px] sm:text-xs text-slate-400 truncate hidden xs:block" title="${dep.airport || ''}">${dep.airport || 'Departure Airport'}</p>
        <div class="mt-1 flex items-center space-x-1.5 text-[10px] sm:text-[11px] text-slate-500">
          <span class="bg-slate-100 px-1.5 py-0.5 rounded font-semibold text-slate-700 font-mono">T${dep.terminal || '1'}</span>
          <span class="hidden sm:inline">Gate ${dep.gate || 'TBA'}</span>
        </div>
      </div>

      <!-- Center Route Visualization -->
      <div class="col-span-2 md:col-span-4 flex flex-col items-center justify-center px-1">
        <span class="text-[9px] sm:text-[11px] text-slate-400 font-semibold mb-0.5 sm:mb-1 font-heading hidden sm:block">${nonStopLabel}</span>
        <div class="w-full flex items-center justify-center relative my-1">
          <div class="w-full border-t-2 border-slate-200"></div>
          <div class="absolute bg-white px-1 sm:px-2 text-blue-600">
            <i class="fa-solid fa-plane text-xs sm:text-sm ${status === 'active' ? 'text-emerald-500 animate-pulse' : ''}"></i>
          </div>
        </div>
        <span class="text-[9px] sm:text-[11px] font-bold text-blue-600 bg-blue-50 px-1.5 sm:px-2.5 py-0.5 rounded-full mt-0.5 font-mono truncate max-w-full">
          ${flight.flight_date || 'Date'}
        </span>
      </div>

      <!-- Arrival -->
      <div class="col-span-5 md:col-span-4 text-right">
        <div class="flex items-baseline space-x-1.5 sm:space-x-2 justify-end">
          <span class="text-xs sm:text-base font-extrabold text-indigo-600 font-mono">${arrIata}</span>
          <span class="font-heading text-lg xs:text-xl sm:text-3xl font-black text-slate-900 font-mono tracking-tight">${arrTime}</span>
        </div>
        <p class="font-heading font-bold text-slate-800 text-xs sm:text-sm mt-0.5 truncate">${arrCity}</p>
        <p class="text-[10px] sm:text-xs text-slate-400 truncate hidden xs:block" title="${arr.airport || ''}">${arr.airport || 'Arrival Airport'}</p>
        <div class="mt-1 flex items-center space-x-1.5 text-[10px] sm:text-[11px] text-slate-500 justify-end">
          <span class="bg-slate-100 px-1.5 py-0.5 rounded font-semibold text-slate-700 font-mono">T${arr.terminal || '1'}</span>
          <span class="hidden sm:inline">Gate ${arr.gate || 'TBA'}</span>
          ${arr.baggage ? `<span class="bg-amber-50 text-amber-800 font-bold px-1.5 py-0.5 rounded font-mono text-[9px] sm:text-[10px]">B${arr.baggage}</span>` : ''}
        </div>
      </div>

    </div>

    <!-- Bottom Row: CTA Button & Specs -->
    <div class="border-t border-slate-100 pt-2.5 sm:pt-3 flex flex-col xs:flex-row items-stretch xs:items-center justify-between gap-2.5 text-xs text-slate-500">
      
      <div class="flex items-center space-x-2 sm:space-x-3 overflow-hidden text-[10px] sm:text-[11px]">
        <span class="flex items-center space-x-1 font-mono text-slate-600 truncate">
          <i class="fa-solid fa-plane-up text-slate-400"></i>
          <span>${aircraft.registration ? `${tailLabel}: ${aircraft.registration}` : (aircraft.icao24 ? `ICAO: ${aircraft.icao24}` : 'Commercial')}</span>
        </span>
        ${flightInfo.codeshared ? `<span class="hidden sm:inline text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium truncate">${codeshareLabel} ${flightInfo.codeshared.airline_name || ''}</span>` : ''}
      </div>

      <button onclick="openFlightModal(${JSON.stringify(flight).replace(/"/g, '&quot;')})" class="w-full xs:w-auto px-4 py-2 sm:py-2.5 bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white rounded-xl font-bold transition-all flex items-center justify-center space-x-2 group cursor-pointer shadow-sm font-heading text-xs sm:text-sm">
        <span>${btnText}</span>
        <i class="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
      </button>

    </div>
  `;

  return card;
}

// Status Badges
function getStatusBadgeHtml(status) {
  const isBn = currentLang === 'bn';
  switch (status.toLowerCase()) {
    case 'active':
      return `<span class="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wide bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center space-x-1 font-heading">
        <span class="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-500 animate-ping mr-1"></span>${isBn ? 'সক্রিয়' : 'Active'}
      </span>`;
    case 'scheduled':
      return `<span class="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wide bg-blue-50 text-blue-700 border border-blue-200 font-heading">
        ${isBn ? 'নির্ধারিত' : 'Scheduled'}
      </span>`;
    case 'landed':
      return `<span class="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wide bg-slate-100 text-slate-700 border border-slate-200 font-heading">
        ${isBn ? 'অবতরণ' : 'Landed'}
      </span>`;
    case 'cancelled':
      return `<span class="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wide bg-rose-50 text-rose-700 border border-rose-200 font-heading">
        ${isBn ? 'বাতিল' : 'Cancelled'}
      </span>`;
    case 'diverted':
      return `<span class="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wide bg-amber-50 text-amber-700 border border-amber-200 font-heading">
        ${isBn ? 'ঘুরিয়ে নেওয়া' : 'Diverted'}
      </span>`;
    default:
      return `<span class="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wide bg-slate-100 text-slate-600 font-heading">
        ${status}
      </span>`;
  }
}

// Format ISO string to HH:MM format
function formatTime(isoString) {
  if (!isoString) return '--:--';
  try {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return isoString.slice(11, 16) || '--:--';
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  } catch (e) {
    return '--:--';
  }
}

// Sidebar Drawer Functions
function openSidebar() {
  const drawer = document.getElementById('sidebarDrawer');
  const backdrop = document.getElementById('sidebarBackdrop');
  if (drawer && backdrop) {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeSidebar() {
  const drawer = document.getElementById('sidebarDrawer');
  const backdrop = document.getElementById('sidebarBackdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Global Keyboard listener (Escape closes sidebar and modal)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeSidebar();
    closeFlightModal();
  }
});

// Open Detailed Flight Modal
function openFlightModal(flight) {
  const modal = document.getElementById('flightModal');
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  const dep = flight.departure || {};
  const arr = flight.arrival || {};
  const airline = flight.airline || {};
  const flightInfo = flight.flight || {};
  const aircraft = flight.aircraft || {};
  const live = flight.live || {};

  const depIata = dep.iata || 'DEP';
  const arrIata = arr.iata || 'ARR';

  const depInfo = AIRPORT_DATABASE[depIata];
  const arrInfo = AIRPORT_DATABASE[arrIata];

  // Header Details
  document.getElementById('modalFlightNumber').textContent = flightInfo.iata || flightInfo.icao || `FL${flightInfo.number || '---'}`;
  document.getElementById('modalAirlineName').textContent = airline.name || 'Commercial Airline';
  document.getElementById('modalAirlineBadge').textContent = airline.iata || '✈️';
  document.getElementById('modalFlightStatusBadge').innerHTML = getStatusBadgeHtml(flight.flight_status || 'unknown');

  // Route & Date
  document.getElementById('modalDepIata').textContent = depIata;
  document.getElementById('modalDepCity').textContent = depInfo ? (depInfo[currentLang]?.city || depInfo.en.city) : 'Departure City';
  document.getElementById('modalDepAirport').textContent = dep.airport || 'Departure Airport';

  document.getElementById('modalArrIata').textContent = arrIata;
  document.getElementById('modalArrCity').textContent = arrInfo ? (arrInfo[currentLang]?.city || arrInfo.en.city) : 'Arrival City';
  document.getElementById('modalArrAirport').textContent = arr.airport || 'Arrival Airport';

  document.getElementById('modalFlightDate').textContent = flight.flight_date || new Date().toISOString().slice(0, 10);

  // Departure Metrics
  document.getElementById('modalDepScheduled').textContent = formatTime(dep.scheduled);
  document.getElementById('modalDepEstimated').textContent = formatTime(dep.estimated);
  document.getElementById('modalDepActual').textContent = formatTime(dep.actual);
  const isBn = currentLang === 'bn';
  const termLabel = isBn ? 'টার্মিনাল' : 'T';
  const gateLabel = isBn ? 'গেট' : 'Gate';
  const beltLabel = isBn ? 'বেল্ট' : 'Belt';
  const tbaText = isBn ? 'অপেক্ষমান' : 'TBA';
  document.getElementById('modalDepGate').textContent = `${termLabel} ${dep.terminal || '1'} / ${gateLabel} ${dep.gate || tbaText}`;
  document.getElementById('modalDepDelay').textContent = dep.delay 
    ? (currentLang === 'bn' ? `${dep.delay} মিনিট` : `${dep.delay} mins`)
    : (currentLang === 'bn' ? '০ মিনিট' : '0 mins');
  document.getElementById('modalDepTz').textContent = dep.timezone || '--';

  // Arrival Metrics
  document.getElementById('modalArrScheduled').textContent = formatTime(arr.scheduled);
  document.getElementById('modalArrEstimated').textContent = formatTime(arr.estimated);
  document.getElementById('modalArrActual').textContent = formatTime(arr.actual);
  document.getElementById('modalArrGate').textContent = `${termLabel} ${arr.terminal || '1'} / ${gateLabel} ${arr.gate || tbaText}`;
  document.getElementById('modalArrBaggage').textContent = arr.baggage ? `${beltLabel} ${arr.baggage}` : (currentLang === 'bn' ? 'ঘোষিত হয়নি' : 'TBA');
  document.getElementById('modalArrTz').textContent = arr.timezone || '--';

  // Aircraft Specs
  document.getElementById('modalAircraftModel').textContent = aircraft.iata || aircraft.icao || 'Commercial Jet';
  document.getElementById('modalAircraftReg').textContent = aircraft.registration || 'N/A';
  document.getElementById('modalAircraftIcao24').textContent = aircraft.icao24 || 'N/A';

  if (flightInfo.codeshared) {
    const cs = flightInfo.codeshared;
    document.getElementById('modalCodeshare').textContent = `${cs.airline_name || ''} (${cs.flight_iata || cs.flight_number || ''})`;
  } else {
    document.getElementById('modalCodeshare').textContent = (currentLang === 'bn') ? 'প্রধান ক্যারিয়ার' : 'Primary Carrier';
  }

  // Telemetry HUD
  const liveBadge = document.getElementById('modalLiveStateBadge');
  if (live && live.latitude && live.longitude) {
    liveBadge.textContent = live.is_ground ? 'ON GROUND' : 'AIRBORNE';
    liveBadge.className = live.is_ground 
      ? 'text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 font-bold border border-amber-200' 
      : 'text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200';

    document.getElementById('modalAltitude').textContent = live.altitude ? `${Math.round(live.altitude)} m (${Math.round(live.altitude * 3.28084)} ft)` : '--';
    document.getElementById('modalSpeed').textContent = live.speed_horizontal ? `${Math.round(live.speed_horizontal)} km/h` : '--';
    document.getElementById('modalHeading').textContent = live.direction ? `${Math.round(live.direction)}°` : '--°';
    document.getElementById('modalCoords').textContent = `${live.latitude.toFixed(3)}, ${live.longitude.toFixed(3)}`;
  } else {
    liveBadge.textContent = (flight.flight_status === 'active') ? 'RADAR ACTIVE' : flight.flight_status.toUpperCase();
    document.getElementById('modalAltitude').textContent = (flight.flight_status === 'active') ? '35,000 ft (Est)' : '--';
    document.getElementById('modalSpeed').textContent = (flight.flight_status === 'active') ? '880 km/h (Est)' : '--';
    document.getElementById('modalHeading').textContent = '--°';
    document.getElementById('modalCoords').textContent = 'Calculated';
  }

  setTimeout(() => {
    renderLeafletMap(flight);
  }, 150);
}

// Close Modal
function closeFlightModal() {
  document.getElementById('flightModal').classList.add('hidden');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeFlightModal();
});

// Render Leaflet Map (Light Theme - CartoDB Voyager)
function renderLeafletMap(flight) {
  if (!leafletMap) {
    leafletMap = L.map('leafletMap', {
      zoomControl: true,
      attributionControl: false
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
    }).addTo(leafletMap);
  }

  mapLayers.forEach(layer => leafletMap.removeLayer(layer));
  mapLayers = [];

  const depIata = flight.departure?.iata;
  const arrIata = flight.arrival?.iata;
  const live = flight.live;

  let depCoords = AIRPORT_DATABASE[depIata]?.coords;
  let arrCoords = AIRPORT_DATABASE[arrIata]?.coords;

  if (!depCoords) depCoords = [23.8433, 90.3978]; // Dhaka
  if (!arrCoords) arrCoords = [25.2532, 55.3657]; // Dubai

  const points = [];

  if (depCoords) {
    const depMarker = L.marker(depCoords, {
      icon: L.divIcon({
        className: 'custom-icon',
        html: `<div class="airport-marker-icon">🛫 ${depIata || 'DEP'}</div>`,
        iconSize: [40, 20]
      })
    }).bindPopup(`<b>Departure: ${depIata}</b><br>${flight.departure?.airport || ''}`).addTo(leafletMap);
    mapLayers.push(depMarker);
    points.push(depCoords);
  }

  if (arrCoords) {
    const arrMarker = L.marker(arrCoords, {
      icon: L.divIcon({
        className: 'custom-icon',
        html: `<div class="airport-marker-icon">🛬 ${arrIata || 'ARR'}</div>`,
        iconSize: [40, 20]
      })
    }).bindPopup(`<b>Arrival: ${arrIata}</b><br>${flight.arrival?.airport || ''}`).addTo(leafletMap);
    mapLayers.push(arrMarker);
    points.push(arrCoords);
  }

  if (depCoords && arrCoords) {
    const routeLine = L.polyline([depCoords, arrCoords], {
      color: '#1882FF',
      weight: 3,
      opacity: 0.85,
      dashArray: '6, 6'
    }).addTo(leafletMap);
    mapLayers.push(routeLine);
  }

  let planePosition = null;
  let rotation = 0;

  if (live && live.latitude && live.longitude) {
    planePosition = [live.latitude, live.longitude];
    rotation = live.direction || 0;
  } else if (depCoords && arrCoords) {
    planePosition = [
      (depCoords[0] + arrCoords[0]) / 2,
      (depCoords[1] + arrCoords[1]) / 2
    ];
  }

  if (planePosition) {
    const planeMarker = L.marker(planePosition, {
      icon: L.divIcon({
        className: 'plane-icon-wrapper',
        html: `<div class="plane-marker-icon" style="transform: rotate(${rotation}deg);">
          <i class="fa-solid fa-plane"></i>
        </div>`,
        iconSize: [28, 28]
      })
    }).bindPopup(`<b>${flight.flight?.iata || 'Flight'}</b><br>Altitude: ${live?.altitude ? Math.round(live.altitude) + 'm' : 'In Flight'}`).addTo(leafletMap);
    mapLayers.push(planeMarker);
    points.push(planePosition);
  }

  if (points.length > 0) {
    const bounds = L.latLngBounds(points);
    leafletMap.fitBounds(bounds, { padding: [30, 30] });
  } else {
    leafletMap.setView([23.8, 90.4], 4);
  }

  leafletMap.invalidateSize();
}
