import { e as createComponent, f as createAstro, m as maybeRenderHead, s as spreadAttributes, h as addAttribute, l as renderSlot, r as renderTemplate, k as renderComponent, n as renderScript, o as renderHead } from './astro/server_BRgZ9G5u.mjs';
import 'piccolore';
/* empty css                         */
import 'clsx';

const $$Astro$d = createAstro();
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  const cls = Astro2.props.class;
  const name = Astro2.props.iconName;
  delete Astro2.props.size;
  delete Astro2.props.class;
  delete Astro2.props.iconName;
  const props = Object.assign({
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke-width": 2,
    "width": size ?? 24,
    "height": size ?? 24,
    "stroke": "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "fill": "none",
    "viewBox": "0 0 24 24"
  }, Astro2.props);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(["lucide", { [`lucide-${name}`]: name }, cls], "class:list")}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "D:/Development/Web/zraes-ai/astro-landing-page-zraes/node_modules/lucide-astro/dist/.Layout.astro", void 0);

const $$Astro$c = createAstro();
const $$ArrowUp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$ArrowUp;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "arrow-up", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m5 12 7-7 7 7"></path> <path d="M12 19V5"></path> ` })}`;
}, "D:/Development/Web/zraes-ai/astro-landing-page-zraes/node_modules/lucide-astro/dist/ArrowUp.astro", void 0);

const $$Astro$b = createAstro();
const $$ChevronDown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$ChevronDown;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "chevron-down", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m6 9 6 6 6-6"></path> ` })}`;
}, "D:/Development/Web/zraes-ai/astro-landing-page-zraes/node_modules/lucide-astro/dist/ChevronDown.astro", void 0);

const $$Astro$a = createAstro();
const $$ExternalLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ExternalLink;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "external-link", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M15 3h6v6"></path> <path d="M10 14 21 3"></path> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path> ` })}`;
}, "D:/Development/Web/zraes-ai/astro-landing-page-zraes/node_modules/lucide-astro/dist/ExternalLink.astro", void 0);

const $$Astro$9 = createAstro();
const $$Github = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Github;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "github", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path> <path d="M9 18c-4.51 2-5-2-7-2"></path> ` })}`;
}, "D:/Development/Web/zraes-ai/astro-landing-page-zraes/node_modules/lucide-astro/dist/Github.astro", void 0);

const $$Astro$8 = createAstro();
const $$Globe = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Globe;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "globe", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="12" cy="12" r="10"></circle> <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path> <path d="M2 12h20"></path> ` })}`;
}, "D:/Development/Web/zraes-ai/astro-landing-page-zraes/node_modules/lucide-astro/dist/Globe.astro", void 0);

const $$Astro$7 = createAstro();
const $$Mail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "mail", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path> <rect x="2" y="4" width="20" height="16" rx="2"></rect> ` })}`;
}, "D:/Development/Web/zraes-ai/astro-landing-page-zraes/node_modules/lucide-astro/dist/Mail.astro", void 0);

const $$Astro$6 = createAstro();
const $$MessageCircle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$MessageCircle;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "message-circle", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path> ` })}`;
}, "D:/Development/Web/zraes-ai/astro-landing-page-zraes/node_modules/lucide-astro/dist/MessageCircle.astro", void 0);

const $$Astro$5 = createAstro();
const $$Send = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Send;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "send", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path> <path d="m21.854 2.147-10.94 10.939"></path> ` })}`;
}, "D:/Development/Web/zraes-ai/astro-landing-page-zraes/node_modules/lucide-astro/dist/Send.astro", void 0);

const $$Astro$4 = createAstro();
const $$Twitter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Twitter;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "twitter", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path> ` })}`;
}, "D:/Development/Web/zraes-ai/astro-landing-page-zraes/node_modules/lucide-astro/dist/Twitter.astro", void 0);

const $$Astro$3 = createAstro();
const $$Zap = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Zap;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "zap", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path> ` })}`;
}, "D:/Development/Web/zraes-ai/astro-landing-page-zraes/node_modules/lucide-astro/dist/Zap.astro", void 0);

const defaultLang = "en";
const ui = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.dashboard": "DASHBOARD",
    "nav.bot": "TELEGRAM BOT",
    "slider.title.prefix": "ZRAES AI:",
    "slider.title.main1": "ZERO-RISK AGENTIC",
    "slider.title.main2": "EXPLORATION OF SCENARIOS",
    "slider.title.suffix": "ON-CHAIN",
    "slider.subtitle": "Trustless performance verification powered by decentralized intelligence. Analyze, validate, and secure your algorithmic trading strategies.",
    "slider.cta.bot": "TELEGRAM BOT",
    "slider.cta.wallet": "CONNECT WALLET",
    "profile.section.badge": "Platform Analytics",
    "profile.section.title": "Instant",
    "profile.section.title.highlight": "Stock Charting",
    "profile.section.desc": "Receive professional-grade technical analysis and chart patterns directly in your Telegram chat.",
    "profile.feature.chart.title": "Chart Precision",
    "profile.feature.chart.desc": "High-accuracy technical analysis with advanced indicators",
    "profile.feature.speed.title": "Analysis Speed",
    "profile.feature.speed.desc": "Instant chart generation directly in Telegram",
    "profile.feature.users.title": "Active Users",
    "profile.feature.users.desc": "Traders relying on our daily pattern recognition",
    "pengumuman.section.badge": "Latest Updates",
    "pengumuman.section.title": "Bot",
    "pengumuman.section.title.highlight": "Changelog",
    "pengumuman.section.desc": "Follow the latest feature rollouts and improvements to our charting engine.",
    "pengumuman.cta.title": "Ready to Analyze the Market?",
    "pengumuman.cta.desc": "Start using Zraes AI Bot for instant technical analysis and charting.",
    "pengumuman.cta.button": "Start on Telegram",
    "pengumuman.supported": "Supported Networks"
  },
  id: {
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.dashboard": "DASHBOARD",
    "nav.bot": "TELEGRAM BOT",
    "slider.title.prefix": "ZRAES AI:",
    "slider.title.main1": "ZERO-RISK AGENTIC",
    "slider.title.main2": "EXPLORATION OF SCENARIOS",
    "slider.title.suffix": "ON-CHAIN",
    "slider.subtitle": "Verifikasi kinerja terpercaya yang didukung oleh kecerdasan terdesentralisasi. Analisis, validasi, dan amankan strategi perdagangan algoritmik Anda.",
    "slider.cta.bot": "TELEGRAM BOT",
    "slider.cta.wallet": "SAMBUNGKAN DOMPET",
    "profile.section.badge": "Analitik Platform",
    "profile.section.title": "Charting Saham",
    "profile.section.title.highlight": "Instan",
    "profile.section.desc": "Dapatkan analisis teknikal kelas profesional dan pola grafik langsung di obrolan Telegram Anda.",
    "profile.feature.chart.title": "Presisi Grafik",
    "profile.feature.chart.desc": "Analisis teknikal akurasi tinggi dengan indikator canggih",
    "profile.feature.speed.title": "Kecepatan Analisis",
    "profile.feature.speed.desc": "Pembuatan grafik instan langsung di Telegram",
    "profile.feature.users.title": "Pengguna Aktif",
    "profile.feature.users.desc": "Pedagang mengandalkan pengenalan pola harian kami",
    "pengumuman.section.badge": "Pembaruan Terbaru",
    "pengumuman.section.title": "Catatan Perubahan",
    "pengumuman.section.title.highlight": "Bot",
    "pengumuman.section.desc": "Ikuti peluncuran fitur terbaru dan peningkatan pada mesin grafik kami.",
    "pengumuman.cta.title": "Siap Menganalisis Pasar?",
    "pengumuman.cta.desc": "Mulai gunakan Bot Zraes AI untuk analisis teknikal dan grafik instan.",
    "pengumuman.cta.button": "Mulai di Telegram",
    "pengumuman.supported": "Jaringan yang Didukung"
  }
};

function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang;
  return defaultLang;
}
function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

const $$Astro$2 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navbar;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "id", name: "Indonesia", flag: "🇮🇩" }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="w-full bg-[#0b0c10] border-b border-[#66fcf1]/20" data-astro-cid-uiiyapzw> <nav class="w-full max-w-[1400px] mx-auto flex justify-between items-center px-6 md:px-8 py-4" data-astro-cid-uiiyapzw> <!-- Logo --> <a${addAttribute(`/${lang === "id" ? "id" : ""}`, "href")} class="cursor-pointer hover:opacity-90 transition-all duration-300 ease-out active:opacity-70 flex-shrink-0 group" data-astro-cid-uiiyapzw> <span class="text-xl md:text-2xl font-bold tracking-wider flex items-center gap-2.5" data-astro-cid-uiiyapzw> <img src="/icon-zraesai.png" alt="ZRAES AI" class="w-9 h-9 object-contain group-hover:drop-shadow-[0_0_20px_rgba(102,252,241,0.6)] transition-all duration-300 group-hover:scale-110" data-astro-cid-uiiyapzw> <span class="bg-gradient-to-r from-[#66fcf1] via-[#45a29e] to-[#66fcf1] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(102,252,241,0.3)] group-hover:drop-shadow-[0_0_40px_rgba(102,252,241,0.5)] transition-all duration-300 font-black" data-astro-cid-uiiyapzw>
ZRAES AI
</span> </span> </a> <!-- Right Side - Language & Telegram Button --> <div class="flex items-center gap-3" data-astro-cid-uiiyapzw> <!-- Language Selector --> <div class="relative" id="lang-selector" data-astro-cid-uiiyapzw> <button id="lang-btn" class="flex items-center gap-2 px-3 py-2 rounded-xl border border-[#66fcf1]/30 bg-[#1f2833]/50 text-[#c5c6c7] hover:border-[#66fcf1]/50 hover:text-[#66fcf1] transition-all duration-300" data-astro-cid-uiiyapzw> ${renderComponent($$result, "Globe", $$Globe, { "class": "w-4 h-4", "data-astro-cid-uiiyapzw": true })} <span class="hidden sm:inline text-sm font-medium" id="lang-display" data-astro-cid-uiiyapzw>🇺🇸 EN</span> <span class="sm:hidden text-sm" id="lang-flag" data-astro-cid-uiiyapzw>🇺🇸</span> ${renderComponent($$result, "ChevronDown", $$ChevronDown, { "class": "w-4 h-4 transition-transform duration-300", "id": "lang-chevron", "data-astro-cid-uiiyapzw": true })} </button> <!-- Language Dropdown --> <div id="lang-dropdown" class="absolute top-full right-0 mt-2 w-44 bg-[#1f2833]/95 backdrop-blur-xl rounded-xl border border-[#66fcf1]/25 shadow-[0_8px_32px_rgba(102,252,241,0.15)] overflow-hidden transition-all duration-300 z-50 opacity-0 invisible -translate-y-2" data-astro-cid-uiiyapzw> ${languages.map((l) => renderTemplate`<button${addAttribute(l.code, "data-lang-code")}${addAttribute(l.name, "data-lang-name")}${addAttribute(l.flag, "data-lang-flag")}${addAttribute(`lang-option w-full flex items-center gap-3 px-4 py-3 text-sm transition-all duration-200 text-[#c5c6c7] hover:bg-[#66fcf1]/10 hover:text-[#66fcf1] ${lang === l.code ? "text-[#66fcf1] bg-[#66fcf1]/10" : ""}`, "class")} data-astro-cid-uiiyapzw> <span class="text-lg" data-astro-cid-uiiyapzw>${l.flag}</span> <span class="font-medium" data-astro-cid-uiiyapzw>${l.name}</span> </button>`)} </div> </div> <!-- Dashboard Button --> <a href="https://app.zraes.dev" target="_blank" rel="noopener noreferrer" class="hidden md:flex items-center gap-2 px-4 py-2 border border-brand-primary/30 text-brand-primary hover:bg-brand-primary/10 hover:border-brand-primary rounded-lg transition-all duration-300 font-medium text-sm" data-astro-cid-uiiyapzw> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" data-astro-cid-uiiyapzw><rect width="7" height="9" x="3" y="3" rx="1" data-astro-cid-uiiyapzw></rect><rect width="7" height="5" x="14" y="3" rx="1" data-astro-cid-uiiyapzw></rect><rect width="7" height="9" x="14" y="12" rx="1" data-astro-cid-uiiyapzw></rect><rect width="7" height="5" x="3" y="16" rx="1" data-astro-cid-uiiyapzw></rect></svg> ${t("nav.dashboard")} </a> <!-- Bot Button --> <a${addAttribute("https://t.me/ZraesAIBot", "href")} target="_blank" rel="noopener noreferrer" class="hidden md:flex btn-cyber group relative px-6 py-2 bg-[#BFFF00] text-black font-bold uppercase tracking-wider text-sm transition-all hover:bg-[#9FE000] clip-path-cyber" data-astro-cid-uiiyapzw> <span class="relative z-10 flex items-center gap-2" data-astro-cid-uiiyapzw> ${renderComponent($$result, "Send", $$Send, { "class": "w-4 h-4", "data-astro-cid-uiiyapzw": true })} ${t("nav.bot")} </span> <!-- Button Glitch Layer --> <div class="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-20 transition-opacity" data-astro-cid-uiiyapzw></div> </a> </div> </nav> </div> <!-- Click outside overlay --> <div id="lang-overlay" class="fixed inset-0 z-40 hidden" data-astro-cid-uiiyapzw></div>  ${renderScript($$result, "D:/Development/Web/zraes-ai/astro-landing-page-zraes/src/components/globals/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Development/Web/zraes-ai/astro-landing-page-zraes/src/components/globals/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const TELEGRAM_BOT_URL = "https://t.me/ZraesAIBot";
  return renderTemplate`${maybeRenderHead()}<footer class="relative bg-brand-background text-white overflow-hidden"> <!-- Animated Grid Background --> <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px); background-size: 50px 50px;"></div> <!-- Gradient Orbs --> <div class="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none"></div> <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-secondary/5 rounded-full blur-[100px] pointer-events-none"></div> <!-- Top Border Glow --> <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent"></div> <div class="relative container mx-auto px-6 2xl:px-28 py-16 md:py-20"> <!-- Newsletter Section --> <div class="mb-16 p-8 rounded-2xl bg-gradient-to-br from-brand-surface/80 to-brand-surface/40 border border-brand-primary/20 backdrop-blur-sm"> <div class="flex flex-col lg:flex-row items-center justify-between gap-6"> <div class="text-center lg:text-left"> <h3 class="text-xl md:text-2xl font-bold text-white mb-2">Stay Updated with ZRAES AI</h3> <p class="text-brand-text-secondary text-sm">Get the latest updates on bot analytics and market insights.</p> </div> <div class="flex flex-col sm:flex-row gap-3 w-full lg:w-auto"> <div class="relative flex-1 lg:w-72"> <input type="email" placeholder="Enter your email" class="w-full px-4 py-3 bg-brand-background/80 border border-brand-primary/30 rounded-xl text-white placeholder-brand-text-secondary/50 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/50 transition-all duration-300"> ${renderComponent($$result, "Mail", $$Mail, { "class": "absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-primary/50" })} </div> <button class="px-6 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-brand-background font-bold rounded-xl hover:shadow-[0_0_30px_rgba(102,252,241,0.3)] transition-all duration-300 flex items-center justify-center gap-2 group"> <span>Subscribe</span> ${renderComponent($$result, "Send", $$Send, { "class": "w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" })} </button> </div> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12"> <!-- Brand Section --> <div class="lg:col-span-2"> <a href="/" class="inline-block mb-6 group"> <span class="text-2xl md:text-3xl font-bold tracking-wider flex items-center gap-3"> <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center group-hover:shadow-[0_0_25px_rgba(102,252,241,0.4)] transition-all duration-300"> ${renderComponent($$result, "Zap", $$Zap, { "class": "w-6 h-6 text-brand-background" })} </div> <span class="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-clip-text text-transparent">ZRAES AI</span> </span> </a> <p class="text-sm text-brand-text-secondary leading-relaxed mb-6 max-w-sm">Trustless performance verification for trading bots powered by decentralized intelligence and blockchain technology.</p> <!-- Live Status & Bot Button --> <div class="flex flex-wrap items-center gap-3"> <div class="inline-flex items-center gap-2 px-4 py-2 bg-brand-surface/80 rounded-full border border-brand-primary/20"> <span class="w-2 h-2 rounded-full bg-brand-primary animate-pulse shadow-[0_0_10px_rgba(102,252,241,0.5)]"></span> <span class="text-xs text-brand-primary font-medium">All Systems Operational</span> </div> <a${addAttribute(TELEGRAM_BOT_URL, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 rounded-full border border-brand-primary/30 hover:border-brand-primary/60 transition-all duration-300 group"> ${renderComponent($$result, "MessageCircle", $$MessageCircle, { "class": "w-4 h-4 text-brand-primary" })} <span class="text-xs text-brand-primary font-medium">Try the Bot</span> ${renderComponent($$result, "ExternalLink", $$ExternalLink, { "class": "w-3 h-3 text-brand-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" })} </a> </div> </div> <!-- Platform Links --> <div> <h3 class="text-sm font-bold mb-5 text-white uppercase tracking-wider flex items-center gap-2"> <div class="w-1 h-4 bg-gradient-to-b from-brand-primary to-brand-secondary rounded-full"></div>
Platform
</h3> <ul class="space-y-3"> <li> <a href="/profil" class="text-sm text-brand-text-secondary hover:text-brand-primary transition-all duration-200 flex items-center gap-2 group"> <span class="w-1 h-1 rounded-full bg-brand-primary/50 group-hover:bg-brand-primary group-hover:w-2 transition-all duration-200"></span>
Bot Analytics
</a> </li> <li> <a href="/program" class="text-sm text-brand-text-secondary hover:text-brand-primary transition-all duration-200 flex items-center gap-2 group"> <span class="w-1 h-1 rounded-full bg-brand-primary/50 group-hover:bg-brand-primary group-hover:w-2 transition-all duration-200"></span>
Risk Assessment
</a> </li> <li> <a href="/berita" class="text-sm text-brand-text-secondary hover:text-brand-primary transition-all duration-200 flex items-center gap-2 group"> <span class="w-1 h-1 rounded-full bg-brand-primary/50 group-hover:bg-brand-primary group-hover:w-2 transition-all duration-200"></span>
Documentation
</a> </li> <li> <a href="#" class="text-sm text-brand-text-secondary hover:text-brand-primary transition-all duration-200 flex items-center gap-2 group"> <span class="w-1 h-1 rounded-full bg-brand-primary/50 group-hover:bg-brand-primary group-hover:w-2 transition-all duration-200"></span>
API Reference
</a> </li> </ul> </div> <!-- Resources --> <div> <h3 class="text-sm font-bold mb-5 text-white uppercase tracking-wider flex items-center gap-2"> <div class="w-1 h-4 bg-gradient-to-b from-brand-primary to-brand-secondary rounded-full"></div>
Resources
</h3> <ul class="space-y-3"> <li> <a href="#" class="text-sm text-brand-text-secondary hover:text-brand-primary transition-all duration-200 flex items-center gap-2 group"> <span class="w-1 h-1 rounded-full bg-brand-primary/50 group-hover:bg-brand-primary group-hover:w-2 transition-all duration-200"></span>
Whitepaper
</a> </li> <li> <a href="#" class="text-sm text-brand-text-secondary hover:text-brand-primary transition-all duration-200 flex items-center gap-2 group"> <span class="w-1 h-1 rounded-full bg-brand-primary/50 group-hover:bg-brand-primary group-hover:w-2 transition-all duration-200"></span>
Smart Contracts
</a> </li> <li> <a href="#" class="text-sm text-brand-text-secondary hover:text-brand-primary transition-all duration-200 flex items-center gap-2 group"> <span class="w-1 h-1 rounded-full bg-brand-primary/50 group-hover:bg-brand-primary group-hover:w-2 transition-all duration-200"></span>
Security Audits
</a> </li> <li> <a href="#" class="text-sm text-brand-text-secondary hover:text-brand-primary transition-all duration-200 flex items-center gap-2 group"> <span class="w-1 h-1 rounded-full bg-brand-primary/50 group-hover:bg-brand-primary group-hover:w-2 transition-all duration-200"></span>
Bug Bounty
</a> </li> </ul> </div> <!-- Community --> <div> <h3 class="text-sm font-bold mb-5 text-white uppercase tracking-wider flex items-center gap-2"> <div class="w-1 h-4 bg-gradient-to-b from-brand-primary to-brand-secondary rounded-full"></div>
Community
</h3> <div class="flex flex-wrap gap-3"> <a href="#" class="w-11 h-11 rounded-xl bg-brand-surface/80 border border-brand-primary/20 hover:border-brand-primary/60 hover:bg-brand-primary/10 flex items-center justify-center transition-all duration-300 group" aria-label="GitHub"> ${renderComponent($$result, "Github", $$Github, { "class": "w-5 h-5 text-brand-text-secondary group-hover:text-brand-primary transition-all duration-200" })} </a> <a href="#" class="w-11 h-11 rounded-xl bg-brand-surface/80 border border-brand-primary/20 hover:border-brand-primary/60 hover:bg-brand-primary/10 flex items-center justify-center transition-all duration-300 group" aria-label="Twitter"> ${renderComponent($$result, "Twitter", $$Twitter, { "class": "w-5 h-5 text-brand-text-secondary group-hover:text-brand-primary transition-all duration-200" })} </a> <a${addAttribute(TELEGRAM_BOT_URL, "href")} target="_blank" class="w-11 h-11 rounded-xl bg-brand-surface/80 border border-brand-primary/20 hover:border-brand-primary/60 hover:bg-brand-primary/10 flex items-center justify-center transition-all duration-300 group" aria-label="Telegram"> ${renderComponent($$result, "Send", $$Send, { "class": "w-5 h-5 text-brand-text-secondary group-hover:text-brand-primary transition-all duration-200" })} </a> <a href="#" class="w-11 h-11 rounded-xl bg-brand-surface/80 border border-brand-primary/20 hover:border-brand-primary/60 hover:bg-brand-primary/10 flex items-center justify-center transition-all duration-300 group" aria-label="Discord"> ${renderComponent($$result, "MessageCircle", $$MessageCircle, { "class": "w-5 h-5 text-brand-text-secondary group-hover:text-brand-primary transition-all duration-200" })} </a> </div> <div class="mt-6"> <a href="mailto:contact@zraes.ai" class="text-sm text-brand-text-secondary hover:text-brand-primary transition-colors flex items-center gap-2"> ${renderComponent($$result, "Mail", $$Mail, { "class": "w-4 h-4" })}
contact@zraes.ai
</a> </div> </div> </div> <!-- Bottom Bar --> <div class="pt-8 border-t border-brand-primary/10"> <div class="flex flex-col md:flex-row justify-between items-center gap-4"> <div class="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-brand-text-secondary"> <span>© ${currentYear} ZRAES AI. All rights reserved.</span> <span class="hidden md:inline text-brand-primary/30">|</span> <span class="flex items-center gap-1">
Built with <span class="text-brand-primary">♦</span> for Web3
</span> </div> <div class="flex items-center gap-6 text-xs"> <a href="#" class="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">Privacy Policy</a> <a href="#" class="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">Terms of Service</a> <a href="#" class="text-brand-text-secondary hover:text-brand-primary transition-colors duration-200">Cookie Policy</a> </div> </div> </div> </div> </footer>`;
}, "D:/Development/Web/zraes-ai/astro-landing-page-zraes/src/components/globals/Footer.astro", void 0);

const $$Preloader = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="preloader" class="fixed inset-0 z-[9999] bg-brand-background flex items-center justify-center transition-opacity duration-500" data-astro-cid-on6efoem> <!-- Background dengan pattern Web3 --> <div class="absolute inset-0 overflow-hidden" data-astro-cid-on6efoem> <div class="absolute inset-0 bg-gradient-to-br from-brand-background via-brand-surface to-brand-background" data-astro-cid-on6efoem></div> <!-- Grid pattern --> <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px); background-size: 60px 60px;" data-astro-cid-on6efoem></div> <!-- Glowing orbs --> <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[150px] animate-pulse" data-astro-cid-on6efoem></div> <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[150px] animate-pulse" style="animation-delay: 1s;" data-astro-cid-on6efoem></div> </div> <!-- Neural Network Canvas --> <canvas id="preloader-neural" class="absolute inset-0 w-full h-full opacity-30" data-astro-cid-on6efoem></canvas> <!-- Content Container --> <div id="preloader-content" class="relative z-10 flex flex-col items-center justify-center gap-8 text-center" data-astro-cid-on6efoem> <!-- Logo/Text ZRAES AI --> <div class="relative" data-astro-cid-on6efoem> <h1 class="text-4xl md:text-6xl font-bold tracking-wider relative z-10" data-astro-cid-on6efoem> <span class="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-[gradient_3s_ease_infinite]" data-astro-cid-on6efoem> ZRAES AI </span> </h1> <!-- Glow effect --> <div class="absolute inset-0 bg-gradient-to-r from-brand-primary/30 via-brand-secondary/30 to-brand-primary/30 blur-2xl opacity-50 animate-pulse" data-astro-cid-on6efoem></div> </div> <!-- Tagline --> <p class="text-brand-text-secondary text-sm md:text-base tracking-widest uppercase" data-astro-cid-on6efoem>Decentralized Bot Intelligence</p> <!-- Progress Bar --> <div class="w-64 md:w-80 h-1 bg-brand-surface rounded-full overflow-hidden border border-brand-primary/20" data-astro-cid-on6efoem> <div id="progress-bar" class="h-full bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary rounded-full transition-all duration-300" style="width: 0%" data-astro-cid-on6efoem></div> </div> <!-- Loading Text --> <div class="flex items-center gap-2 text-brand-primary text-sm" data-astro-cid-on6efoem> <div class="w-2 h-2 rounded-full bg-brand-primary animate-pulse" data-astro-cid-on6efoem></div> <span class="loading-text" data-astro-cid-on6efoem>Initializing Neural Network...</span> </div> </div> <!-- Final cursor dot that remains after closing --> <div id="final-cursor-dot" class="absolute w-[10px] h-[10px] rounded-full bg-[#66fcf1] opacity-0 pointer-events-none z-[10001]" style="box-shadow: 0 0 10px rgba(102, 252, 241, 0.5), 0 0 20px rgba(102, 252, 241, 0.3);" data-astro-cid-on6efoem></div> </div>  ${renderScript($$result, "D:/Development/Web/zraes-ai/astro-landing-page-zraes/src/components/globals/Preloader.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Development/Web/zraes-ai/astro-landing-page-zraes/src/components/globals/Preloader.astro", void 0);

const $$Astro$1 = createAstro();
const $$ScrollToTop = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ScrollToTop;
  return renderTemplate`${maybeRenderHead()}<button id="scroll-to-top" class="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-primary-dark text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 opacity-0 scale-0 pointer-events-none" aria-label="Scroll to top" data-astro-cid-bo4s6zne> ${renderComponent($$result, "ArrowUp", $$ArrowUp, { "class": "w-6 h-6", "data-astro-cid-bo4s6zne": true })} </button> ${renderScript($$result, "D:/Development/Web/zraes-ai/astro-landing-page-zraes/src/components/globals/ScrollToTop.astro?astro&type=script&index=0&lang.ts")} `;
}, "D:/Development/Web/zraes-ai/astro-landing-page-zraes/src/components/globals/ScrollToTop.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Cursor = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<div class="cursor" data-astro-cid-jqpa4xae></div>  <script>
  document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".cursor");
    const interactiveElements = document.querySelectorAll("a, button, .cursor-pointer");

    // Menggerakkan kursor
    window.addEventListener("mousemove", (e) => {
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }
    });

    // Menambah/menghapus class 'cursor-active' saat hover
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (cursor) cursor.classList.add("cursor-active");
      });
      el.addEventListener("mouseleave", () => {
        if (cursor) cursor.classList.remove("cursor-active");
      });
    });
  });
<\/script>`])), maybeRenderHead());
}, "D:/Development/Web/zraes-ai/astro-landing-page-zraes/src/components/globals/Cursor.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class="overflow-x-hidden"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/icon-zraesai.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title} - Zraes AI</title>${renderHead()}</head> <body class="bg-brand-background overflow-x-hidden"> ${renderComponent($$result, "Preloader", $$Preloader, {})} ${renderComponent($$result, "Cursor", $$Cursor, {})} ${renderComponent($$result, "Navbar", $$Navbar, {})} <main id="main-content" class="transition-all duration-700 ease-in-out"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "ScrollToTop", $$ScrollToTop, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Development/Web/zraes-ai/astro-landing-page-zraes/src/components/globals/ScrollToTop.astro", "client:component-export": "default" })} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "D:/Development/Web/zraes-ai/astro-landing-page-zraes/src/layouts/Layout.astro", void 0);

export { $$ as $, $$Layout as a, getLangFromUrl as g, useTranslations as u };
