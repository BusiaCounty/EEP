import { S as require_jsx_runtime, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as CircleHelp, c as BookOpen, i as House, r as Phone, s as ChartColumn } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-oUnSRa7Z.js
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		to: "/",
		label: "Home",
		icon: House
	},
	{
		to: "/facts",
		label: "Facts",
		icon: ChartColumn
	},
	{
		to: "/learn",
		label: "Learn",
		icon: BookOpen
	},
	{
		to: "/myths",
		label: "Myths",
		icon: CircleHelp
	},
	{
		to: "/help",
		label: "Help",
		icon: Phone
	}
];
function isOn(path, to) {
	if (to === "/") return path === "/";
	return path === to || path.startsWith(`${to}/`);
}
function Shell({ tone, children }) {
	const path = useRouterState({ select: (state) => state.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: tone === "cover" ? "flex min-h-dvh flex-col bg-forest-deep text-cream" : "sheet min-h-dvh",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#content",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-cream focus:px-4 focus:py-2 focus:text-ink",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-30 border-b border-cream/10 bg-forest-deep",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "min-w-0 press",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-widest text-cream/70 uppercase",
							children: "Busia County · 2026"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate font-display text-lg leading-tight text-cream",
							children: "End early pregnancies"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 md:flex",
						"aria-label": "Handbook",
						children: links.map((item) => {
							const on = isOn(path, item.to);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								"aria-current": on ? "page" : void 0,
								className: on ? "rounded-full bg-cream/15 px-3 py-2 text-sm font-semibold text-cream" : "rounded-full px-3 py-2 text-sm font-medium text-cream/70 hover:bg-cream/10 hover:text-cream",
								children: item.label
							}, item.to);
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "content",
				className: tone === "cover" ? "flex flex-1 flex-col" : "pb-28 md:pb-12",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "nav-safe fixed inset-x-0 bottom-0 z-30 border-t border-cream/10 bg-forest-deep md:hidden",
				"aria-label": "Handbook",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mx-auto grid max-w-3xl grid-cols-5",
					children: links.map((item) => {
						const on = isOn(path, item.to);
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							"aria-current": on ? "page" : void 0,
							className: on ? "flex min-h-14 flex-col items-center justify-center gap-0.5 text-xs font-semibold text-cream" : "flex min-h-14 flex-col items-center justify-center gap-0.5 text-xs font-medium text-cream/65",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-5",
								strokeWidth: on ? 2.4 : 1.8,
								"aria-hidden": "true"
							}), item.label]
						}) }, item.to);
					})
				})
			})
		]
	});
}
function HelpStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/help",
		className: "press mb-6 flex items-center justify-between gap-3 rounded-2xl bg-forest-deep px-4 py-3 text-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm leading-snug",
			children: "In danger or under pressure? Free help on 116 and 1195."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "shrink-0 text-sm font-semibold",
			children: "Get help"
		})]
	});
}
function PageIntro({ kicker, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-widest text-forest uppercase",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl leading-none text-ink",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-base leading-relaxed text-muted",
				children: lede
			})
		]
	});
}
//#endregion
export { PageIntro as n, Shell as r, HelpStrip as t };
