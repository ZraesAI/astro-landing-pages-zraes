import { e as createComponent, f as createAstro, m as maybeRenderHead, s as spreadAttributes, h as addAttribute, l as renderSlot, k as renderComponent, r as renderTemplate, n as renderScript } from './astro/server_BRgZ9G5u.mjs';
import 'piccolore';
import { g as getLangFromUrl, u as useTranslations } from './Layout_BoRfYvHb.mjs';
/* empty css                         */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};

const $$Astro$1 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Icon;
  const {
    color = "currentColor",
    size = 24,
    "stroke-width": strokeWidth = 2,
    absoluteStrokeWidth = false,
    iconNode = [],
    class: className,
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes({
    ...defaultAttributes,
    width: size,
    height: size,
    stroke: color,
    "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
    ...rest
  })}${addAttribute(["lucide", className], "class:list")}> ${iconNode.map(([Tag, attrs]) => renderTemplate`${renderComponent($$result, "Tag", Tag, { ...attrs })}`)} ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "D:/Development/Web/zraes-ai/astro-landing-page-zraes/node_modules/@lucide/astro/src/Icon.astro", void 0);

const createLucideIcon = (iconName, iconNode) => {
  const Component = createComponent(
    ($$result, $$props, $$slots) => {
      const { class: className, ...restProps } = $$props;
      return renderTemplate`${renderComponent(
        $$result,
        "Icon",
        $$Icon,
        {
          class: mergeClasses(
            Boolean(iconName) && `lucide-${toKebabCase(iconName)}`,
            Boolean(className) && className
          ),
          iconNode,
          ...restProps
        },
        { default: () => renderTemplate`${renderSlot($$result, $$slots["default"])}` }
      )}`;
    },
    void 0,
    "none"
  );
  return Component;
};

const ArrowRight = createLucideIcon("arrow-right", [["path", { "d": "M5 12h14" }], ["path", { "d": "m12 5 7 7-7 7" }]]);

const Brain = createLucideIcon("brain", [["path", { "d": "M12 18V5" }], ["path", { "d": "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" }], ["path", { "d": "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" }], ["path", { "d": "M17.997 5.125a4 4 0 0 1 2.526 5.77" }], ["path", { "d": "M18 18a4 4 0 0 0 2-7.464" }], ["path", { "d": "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" }], ["path", { "d": "M6 18a4 4 0 0 1-2-7.464" }], ["path", { "d": "M6.003 5.125a4 4 0 0 0-2.526 5.77" }]]);

const Database = createLucideIcon("database", [["ellipse", { "cx": "12", "cy": "5", "rx": "9", "ry": "3" }], ["path", { "d": "M3 5V19A9 3 0 0 0 21 19V5" }], ["path", { "d": "M3 12A9 3 0 0 0 21 12" }]]);

const Globe = createLucideIcon("globe", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }], ["path", { "d": "M2 12h20" }]]);

const Lock = createLucideIcon("lock", [["rect", { "width": "18", "height": "11", "x": "3", "y": "11", "rx": "2", "ry": "2" }], ["path", { "d": "M7 11V7a5 5 0 0 1 10 0v4" }]]);

const Send = createLucideIcon("send", [["path", { "d": "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" }], ["path", { "d": "m21.854 2.147-10.94 10.939" }]]);

const Shield = createLucideIcon("shield", [["path", { "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }]]);

const TrendingUp = createLucideIcon("trending-up", [["path", { "d": "M16 7h6v6" }], ["path", { "d": "m22 7-8.5 8.5-5-5L2 17" }]]);

const Zap = createLucideIcon("zap", [["path", { "d": "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" }]]);

const $$Astro = createAstro();
const $$Slider = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Slider;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-background" id="slider-section" data-astro-cid-6uckkzjn> <!-- Dynamic Background Matrix --> <div class="absolute inset-0 bg-[#050510]" data-astro-cid-6uckkzjn> <div class="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(18,24,27,1)_2px,transparent_2px),linear-gradient(90deg,rgba(18,24,27,1)_2px,transparent_2px)] bg-[size:40px_40px]" data-astro-cid-6uckkzjn></div> <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(191,255,0,0.05),transparent_70%)]" data-astro-cid-6uckkzjn></div> </div> <!-- Cyberpunk Scanner Line --> <div class="scanner-line" data-astro-cid-6uckkzjn></div> <!-- Floating Data Particles (Decorations) --> <div class="absolute top-20 left-10 opacity-20 hidden lg:block animate-float-delayed" data-astro-cid-6uckkzjn> <div class="font-mono text-xs text-[#66FCF1] flex flex-col gap-1" data-astro-cid-6uckkzjn> <span data-astro-cid-6uckkzjn>0x4F...3A</span> <span data-astro-cid-6uckkzjn>BLOCK: 194821</span> <span data-astro-cid-6uckkzjn>GAS: 12 GWEI</span> </div> </div> <div class="absolute bottom-40 right-10 opacity-20 hidden lg:block animate-float" data-astro-cid-6uckkzjn> <div class="font-mono text-xs text-[#BFFF00] flex flex-col gap-1 text-right" data-astro-cid-6uckkzjn> <span data-astro-cid-6uckkzjn>APY: 99.4%</span> <span data-astro-cid-6uckkzjn>LTV: 45.2%</span> <span data-astro-cid-6uckkzjn>SIGNAL: STRONG_BUY</span> </div> </div> <!-- Central Visual Anchor (Behind Content) --> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none" data-astro-cid-6uckkzjn> <div class="absolute inset-0 border border-[#BFFF00]/5 rounded-full animate-spin-slow" data-astro-cid-6uckkzjn></div> <div class="absolute inset-[100px] border border-dashed border-[#66FCF1]/10 rounded-full animate-spin-reverse-slow" data-astro-cid-6uckkzjn></div> <div class="absolute inset-[200px] border border-[#BFFF00]/5 rounded-full animate-pulse" data-astro-cid-6uckkzjn></div> </div> <!-- Content Container with Holo Effect --> <div class="relative z-10 container mx-auto px-6 mt-10 text-center" data-astro-cid-6uckkzjn> <!-- Holographic Frame --> <div class="absolute inset-0 -z-10 bg-gradient-to-br from-white/5 to-transparent rounded-3xl blur-3xl opacity-20 transform scale-110" data-astro-cid-6uckkzjn></div> <div class="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] max-w-5xl mx-auto backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]" data-astro-cid-6uckkzjn> <!-- Tech Badge --> <div class="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border-l-4 border-[#BFFF00] bg-brand-surface/80 mb-10 overflow-hidden relative group" data-astro-cid-6uckkzjn> <div class="absolute inset-0 bg-gradient-to-r from-[#BFFF00]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" data-astro-cid-6uckkzjn></div> ${renderComponent($$result, "Shield", Shield, { "class": "w-4 h-4 text-[#BFFF00]", "data-astro-cid-6uckkzjn": true })} <span class="text-xs text-[#C5C6C7] font-mono uppercase tracking-[0.2em]" data-astro-cid-6uckkzjn>${t("slider.title.prefix")} ALPHA V.1.0</span> </div> <!-- Glitch Title --> <h1 class="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-6 tracking-tighter relative" data-astro-cid-6uckkzjn> <span class="relative inline-block"${addAttribute(t("slider.title.main1"), "data-text")} data-astro-cid-6uckkzjn> <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#C5C6C7] to-white" data-astro-cid-6uckkzjn>${t("slider.title.main1")}</span> <span class="absolute top-0 left-0 -ml-[2px] text-[#BFFF00] opacity-0 animate-glitch-1" data-astro-cid-6uckkzjn></span> <span class="absolute top-0 left-0 ml-[2px] text-[#66FCF1] opacity-0 animate-glitch-2" data-astro-cid-6uckkzjn></span> </span> <br class="hidden md:block" data-astro-cid-6uckkzjn> <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#BFFF00] to-[#66FCF1] text-glow-cyber" data-astro-cid-6uckkzjn> ${t("slider.title.main2")} </span> </h1> <p class="hero-subtitle text-lg sm:text-xl text-[#C5C6C7]/80 max-w-2xl mx-auto mb-12 font-light border-l-2 border-[#66FCF1]/30 pl-6 text-left hidden md:block" data-astro-cid-6uckkzjn>
&gt; ${t("slider.subtitle")} </p> <!-- Mobile Subtitle Fallback --> <p class="hero-subtitle text-base text-[#C5C6C7]/80 max-w-2xl mx-auto mb-10 md:hidden" data-astro-cid-6uckkzjn> ${t("slider.subtitle")} </p> <!-- Cyber Action Bar --> <div class="hero-cta flex flex-wrap justify-center items-center gap-6 relative" data-astro-cid-6uckkzjn> <!-- Connector Line (Decorative) --> <div class="hidden md:block absolute -left-12 top-1/2 w-8 h-[1px] bg-white/10" data-astro-cid-6uckkzjn></div> <div class="hidden md:block absolute -right-12 top-1/2 w-8 h-[1px] bg-white/10" data-astro-cid-6uckkzjn></div> <a${addAttribute("https://t.me/ZraesAIBot", "href")} target="_blank" rel="noopener noreferrer" class="btn-cyber group relative px-8 py-4 bg-[#BFFF00] text-black font-bold uppercase tracking-wider text-sm transition-all hover:bg-[#9FE000] clip-path-cyber" data-astro-cid-6uckkzjn> <span class="relative z-10 flex items-center gap-2" data-astro-cid-6uckkzjn> ${renderComponent($$result, "Send", Send, { "class": "w-4 h-4", "data-astro-cid-6uckkzjn": true })} ${t("slider.cta.bot")} ${renderComponent($$result, "ArrowRight", ArrowRight, { "class": "w-4 h-4 transition-transform group-hover:translate-x-1", "data-astro-cid-6uckkzjn": true })} </span> <!-- Button Glitch Layer --> <div class="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-20 transition-opacity" data-astro-cid-6uckkzjn></div> </a> </div> <!-- System Status Footer --> <div class="mt-16 pt-8 border-t border-white/5 w-full flex justify-between items-center text-[10px] sm:text-xs font-mono text-[#666] uppercase tracking-widest" data-astro-cid-6uckkzjn> <div class="flex items-center gap-2" data-astro-cid-6uckkzjn> <div class="w-2 h-2 bg-[#BFFF00] rounded-full animate-pulse" data-astro-cid-6uckkzjn></div>
SYSTEM ONLINE
</div> <div class="hidden sm:flex gap-6" data-astro-cid-6uckkzjn> <span data-astro-cid-6uckkzjn>${renderComponent($$result, "Zap", Zap, { "class": "w-3 h-3 inline mr-1 text-[#66FCF1]", "data-astro-cid-6uckkzjn": true })} LOW LATENCY</span> <span data-astro-cid-6uckkzjn>${renderComponent($$result, "Database", Database, { "class": "w-3 h-3 inline mr-1 text-[#66FCF1]", "data-astro-cid-6uckkzjn": true })} ON-CHAIN DATA</span> <span data-astro-cid-6uckkzjn>${renderComponent($$result, "Globe", Globe, { "class": "w-3 h-3 inline mr-1 text-[#66FCF1]", "data-astro-cid-6uckkzjn": true })} GLOBAL ACCESS</span> </div> <div data-astro-cid-6uckkzjn>SECURE_CONNECTION_ESTABLISHED</div> </div> </div> </div> </section>  ${renderScript($$result, "D:/Development/Web/zraes-ai/astro-landing-page-zraes/src/components/pages/landing-pages/Slider.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Development/Web/zraes-ai/astro-landing-page-zraes/src/components/pages/landing-pages/Slider.astro", void 0);

const $$Profile = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-brand-background py-20 lg:py-32 relative overflow-hidden" data-astro-cid-vnjj46dv> <!-- Dynamic Background --> <div class="absolute inset-0 opacity-[0.03] grid-pattern" data-astro-cid-vnjj46dv></div> <div class="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#BFFF00]/10 rounded-full blur-[120px] -translate-y-1/2" data-astro-cid-vnjj46dv></div> <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-primary/10 rounded-full blur-[100px]" data-astro-cid-vnjj46dv></div> <div class="container mx-auto px-6 max-w-7xl relative z-10" data-astro-cid-vnjj46dv> <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20" data-astro-cid-vnjj46dv> <!-- Left Content: Value Proposition --> <div class="flex-1 space-y-8 text-center lg:text-left" data-astro-cid-vnjj46dv> <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-primary/30 bg-brand-primary/5 mx-auto lg:mx-0" data-astro-cid-vnjj46dv> ${renderComponent($$result, "Zap", Zap, { "class": "w-4 h-4 text-brand-primary", "data-astro-cid-vnjj46dv": true })} <span class="text-xs md:text-sm text-brand-primary font-bold uppercase tracking-widest" data-astro-cid-vnjj46dv>Instant Analysis</span> </div> <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" data-astro-cid-vnjj46dv>
Your Personal <br class="hidden lg:block" data-astro-cid-vnjj46dv> <span class="text-glow bg-gradient-to-r from-[#BFFF00] to-brand-primary bg-clip-text text-transparent" data-astro-cid-vnjj46dv>AI Market Analyst</span> </h2> <p class="text-[#C5C6C7] text-lg leading-relaxed max-w-xl mx-auto lg:mx-0" data-astro-cid-vnjj46dv>Stop staring at complex dashboards. Just type a ticker, and get professional-grade technical analysis delivered directly to your Telegram in seconds.</p> <!-- Feature List --> <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4" data-astro-cid-vnjj46dv> <div class="feature-item p-4 rounded-xl bg-brand-surface/30 border border-white/5 hover:border-brand-primary/30 transition-all duration-300" data-astro-cid-vnjj46dv> <div class="w-10 h-10 rounded-lg bg-[#BFFF00]/10 flex items-center justify-center mb-3" data-astro-cid-vnjj46dv> ${renderComponent($$result, "TrendingUp", TrendingUp, { "class": "w-5 h-5 text-[#BFFF00]", "data-astro-cid-vnjj46dv": true })} </div> <h4 class="text-white font-bold mb-1" data-astro-cid-vnjj46dv>Pattern Detection</h4> <p class="text-sm text-[#C5C6C7]/70" data-astro-cid-vnjj46dv>Auto-identifies wedges, flags, and RSI divergences.</p> </div> <div class="feature-item p-4 rounded-xl bg-brand-surface/30 border border-white/5 hover:border-brand-primary/30 transition-all duration-300" data-astro-cid-vnjj46dv> <div class="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-3" data-astro-cid-vnjj46dv> ${renderComponent($$result, "Lock", Lock, { "class": "w-5 h-5 text-brand-primary", "data-astro-cid-vnjj46dv": true })} </div> <h4 class="text-white font-bold mb-1" data-astro-cid-vnjj46dv>Private & Secure</h4> <p class="text-sm text-[#C5C6C7]/70" data-astro-cid-vnjj46dv>Your strategies and queries remain 100% encrypted.</p> </div> </div> <div class="pt-6" data-astro-cid-vnjj46dv> <a href="https://t.me/Gilang_Bot" target="_blank" class="btn-cyber group relative px-8 py-4 bg-[#BFFF00] text-black font-bold uppercase tracking-wider text-sm transition-all hover:bg-[#9FE000] clip-path-cyber inline-flex" data-astro-cid-vnjj46dv> <span class="relative z-10 flex items-center gap-2" data-astro-cid-vnjj46dv> <span class="text-lg" data-astro-cid-vnjj46dv>Try the Bot Now</span> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform" data-astro-cid-vnjj46dv><path d="M5 12h14" data-astro-cid-vnjj46dv></path><path d="m12 5 7 7-7 7" data-astro-cid-vnjj46dv></path></svg> </span> <!-- Button Glitch Layer --> <div class="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-20 transition-opacity" data-astro-cid-vnjj46dv></div> </a> </div> </div> <!-- Right Content: The "Cool" Chat Visualization --> <div class="flex-1 w-full max-w-md lg:max-w-full chat-interface-container perspective-1000" data-astro-cid-vnjj46dv> <div class="relative bg-brand-background border border-white/10 rounded-3xl p-4 shadow-2xl overflow-hidden chat-window transform transition-transform duration-500 hover:rotate-y-2 hover:rotate-x-2" data-astro-cid-vnjj46dv> <!-- Mock Status Bar --> <div class="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-brand-surface/50 rounded-t-2xl" data-astro-cid-vnjj46dv> <div class="flex items-center gap-3" data-astro-cid-vnjj46dv> <div class="w-3 h-3 rounded-full bg-red-500" data-astro-cid-vnjj46dv></div> <div class="w-3 h-3 rounded-full bg-yellow-500" data-astro-cid-vnjj46dv></div> <div class="w-3 h-3 rounded-full bg-green-500" data-astro-cid-vnjj46dv></div> </div> <div class="text-[#C5C6C7] text-xs font-mono tracking-widest" data-astro-cid-vnjj46dv>ZRAES_BOT_TERMINAL</div> </div> <!-- Chat Area --> <div class="p-6 space-y-6 min-h-[400px] font-mono text-sm relative" data-astro-cid-vnjj46dv> <!-- Background Glitch Effect --> <div class="absolute inset-0 bg-scanlines opacity-10 pointer-events-none" data-astro-cid-vnjj46dv></div> <!-- Messages --> <div class="chat-message user flex justify-end animate-slide-in-right opacity-0" style="animation-delay: 0.2s; animation-fill-mode: forwards;" data-astro-cid-vnjj46dv> <div class="bg-brand-surface/80 text-white px-4 py-3 rounded-2xl rounded-tr-none border border-white/10 shadow-lg max-w-[80%]" data-astro-cid-vnjj46dv> <span class="text-[#BFFF00] mr-2" data-astro-cid-vnjj46dv>$</span> /plan BBCA
</div> </div> <div class="chat-message bot flex flex-col gap-2 animate-slide-in-left opacity-0" style="animation-delay: 0.8s; animation-fill-mode: forwards;" data-astro-cid-vnjj46dv> <div class="flex items-center gap-2 mb-1" data-astro-cid-vnjj46dv> <div class="w-6 h-6 rounded bg-brand-primary/20 flex items-center justify-center border border-brand-primary/30" data-astro-cid-vnjj46dv> ${renderComponent($$result, "Brain", Brain, { "class": "w-3 h-3 text-brand-primary", "data-astro-cid-vnjj46dv": true })} </div> <span class="text-xs text-brand-primary" data-astro-cid-vnjj46dv>Zraes AI • Bot</span> </div> <div class="bg-[#1A1A1A] border border-brand-primary/20 rounded-2xl rounded-tl-none p-1 overflow-hidden shadow-[0_0_20px_rgba(102,252,241,0.1)]" data-astro-cid-vnjj46dv> <!-- Stylized Graph Placeholder --> <div class="relative bg-gradient-to-b from-brand-surface/40 to-brand-background h-40 rounded-xl p-4 flex items-end gap-1" data-astro-cid-vnjj46dv> <div class="w-full h-full absolute inset-0 grid-graph opacity-20" data-astro-cid-vnjj46dv></div> <!-- Bars --> <div class="flex-1 bg-red-500/50 h-[40%] rounded-sm" data-astro-cid-vnjj46dv></div> <div class="flex-1 bg-green-500/50 h-[60%] rounded-sm" data-astro-cid-vnjj46dv></div> <div class="flex-1 bg-green-500/50 h-[50%] rounded-sm" data-astro-cid-vnjj46dv></div> <div class="flex-1 bg-red-500/50 h-[30%] rounded-sm" data-astro-cid-vnjj46dv></div> <div class="flex-1 bg-green-500/50 h-[80%] rounded-sm animate-pulse-fast" data-astro-cid-vnjj46dv></div> <!-- Overlay Analysis Text --> <div class="absolute top-2 left-2 right-2 bg-black/60 backdrop-blur-md rounded border border-white/5 p-2" data-astro-cid-vnjj46dv> <div class="flex justify-between items-center mb-1" data-astro-cid-vnjj46dv> <span class="text-white font-bold" data-astro-cid-vnjj46dv>BBCA.JK</span> <span class="text-[#BFFF00]" data-astro-cid-vnjj46dv>+2.4%</span> </div> <div class="text-[10px] text-[#C5C6C7]" data-astro-cid-vnjj46dv>
Signal: <span class="text-[#BFFF00]" data-astro-cid-vnjj46dv>STRONG BUY</span><br data-astro-cid-vnjj46dv>
Target: 10,450
</div> </div> </div> </div> </div> <!-- Typing Indicator --> <div class="flex gap-1 pl-2 animate-fade-in opacity-0" style="animation-delay: 2s; animation-fill-mode: forwards;" data-astro-cid-vnjj46dv> <div class="w-1.5 h-1.5 bg-brand-primary/50 rounded-full animate-bounce" data-astro-cid-vnjj46dv></div> <div class="w-1.5 h-1.5 bg-brand-primary/50 rounded-full animate-bounce" style="animation-delay: 0.1s" data-astro-cid-vnjj46dv></div> <div class="w-1.5 h-1.5 bg-brand-primary/50 rounded-full animate-bounce" style="animation-delay: 0.2s" data-astro-cid-vnjj46dv></div> </div> </div> </div> <!-- Floating Elements behind chat --> <div class="absolute -top-10 -right-10 w-24 h-24 bg-brand-primary/20 rounded-full blur-2xl animate-pulse-slow" data-astro-cid-vnjj46dv></div> <div class="absolute -bottom-5 -left-5 w-32 h-32 bg-[#BFFF00]/10 rounded-full blur-2xl animate-pulse-slow" style="animation-delay: 1s" data-astro-cid-vnjj46dv></div> </div> </div> </div> </section>  `;
}, "D:/Development/Web/zraes-ai/astro-landing-page-zraes/src/components/pages/landing-pages/Profile.astro", void 0);

export { $$Slider as $, $$Profile as a };
