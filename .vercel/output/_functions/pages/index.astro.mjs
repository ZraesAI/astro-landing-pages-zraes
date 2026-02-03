import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_BRgZ9G5u.mjs';
import 'piccolore';
import { $ as $$Slider, a as $$Profile } from '../chunks/Profile_D6Er1TTY.mjs';
import { a as $$Layout } from '../chunks/Layout_BoRfYvHb.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Homepage" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Slider", $$Slider, {})} ${renderComponent($$result2, "Profile", $$Profile, {})} ` })}`;
}, "D:/Development/Web/zraes-ai/astro-landing-page-zraes/src/pages/index.astro", void 0);

const $$file = "D:/Development/Web/zraes-ai/astro-landing-page-zraes/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
