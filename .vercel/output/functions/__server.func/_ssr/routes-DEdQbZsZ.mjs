import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as ArrowRight, n as Search } from "../_libs/lucide-react.mjs";
import { c as placeStory, d as rates, p as searchTopics, u as rateById } from "./router-z40d0hao.mjs";
import { r as Shell } from "./shell-oUnSRa7Z.mjs";
import { t as useStored } from "./use-stored-vKkINxIl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DEdQbZsZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var chapters = [
	{
		to: "/facts",
		kicker: "01",
		title: "Know the facts",
		text: "Busia fell from 17.4 to 16.9. See your sub-county."
	},
	{
		to: "/learn",
		kicker: "02",
		title: "Protect your future",
		text: "What early pregnancy is, why it happens, and how to say no."
	},
	{
		to: "/myths",
		kicker: "03",
		title: "Myths and a short check",
		text: "Eight things people get wrong — then test yourself."
	},
	{
		to: "/help",
		kicker: "04",
		title: "Talk and get help",
		text: "Free lines, a clinic, and adults you can name on this phone."
	}
];
function Home() {
	const [placeId, setPlaceId] = useStored("sep-place", "busia");
	const place = rateById(placeId);
	const [query, setQuery] = (0, import_react.useState)("");
	const hits = (0, import_react.useMemo)(() => searchTopics(query), [query]);
	const subs = rates.filter((row) => row.kind === "sub");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
		tone: "cover",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "cover-hero px-4 pt-8 pb-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "inline-flex rounded-full bg-cream px-3 py-1.5 text-xs font-semibold tracking-wide text-ember-deep uppercase",
						children: "Stop early pregnancies · Busia County"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-5 max-w-xl font-display text-5xl leading-none text-cream sm:text-6xl",
						children: ["Your future.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-ember",
							children: "Your choice."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md font-display text-xl text-cream/85 italic",
						children: "A campaign for all. A handbook for teenagers."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "card mt-8 p-5 text-ink sm:p-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-5 sm:flex-row sm:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-10 gap-1",
								"aria-hidden": "true",
								children: Array.from({ length: 100 }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: index < 17 ? "size-2 rounded-full bg-ember" : "size-2 rounded-full bg-line" }, index))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-6xl leading-none text-ember tabular-nums",
										children: "17"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm font-semibold tracking-wide text-ink uppercase",
										children: "in every 100"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 max-w-xs text-base leading-snug",
										children: "teenage girls in Busia get pregnant too early."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 font-semibold text-forest",
										children: "It does not have to be you."
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-base text-cream/85",
						children: "Together we can change this number."
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "sheet relative z-10 -mt-6 flex-1 rounded-t-3xl pb-28 md:pb-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-4 py-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						"aria-labelledby": "place-heading",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								id: "place-heading",
								className: "font-display text-3xl text-ink",
								children: "Where you live"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-base leading-relaxed text-muted",
								children: "The number is not the same in every part of Busia. Tap your sub-county."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-2",
								children: subs.map((row) => {
									const on = row.id === place.id;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-pressed": on,
										onClick: () => setPlaceId(row.id),
										className: on ? "press min-h-11 rounded-full bg-forest-deep px-3.5 text-sm font-semibold text-cream" : "press min-h-11 rounded-full bg-paper px-3.5 text-sm font-semibold text-ink shadow-card",
										children: row.name
									}, row.id);
								})
							}),
							place.kind === "sub" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/facts",
								hash: place.id,
								className: "card press mt-4 block p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold tracking-widest text-forest uppercase",
										children: "Your sub-county · 2026"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-display text-2xl text-ink",
										children: place.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted",
										children: placeStory(place)
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed text-muted",
								children: "Choose a place to see how its number moved from 2025 to 2026."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-8 font-display text-3xl text-ink",
						children: "In short"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-base leading-relaxed text-muted",
						children: "Early pregnancy takes away a girl’s health, her schooling and her dreams. This campaign gives you the facts so you can protect your future."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid gap-3 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brief, {
								title: "Why it happens",
								points: [
									"Pressure from friends, boys and men",
									"Little true information",
									"Gifts and money for sex"
								],
								hash: "causes"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brief, {
								title: "The dangers",
								points: [
									"Health risks for you and the baby",
									"Leaving school",
									"Stigma and rejection"
								],
								hash: "dangers"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brief, {
								title: "What you can do",
								points: [
									"Say NO and stay in school",
									"Tell a trusted adult",
									"See a health worker early"
								],
								hash: "protect"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-8 block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold tracking-widest text-forest uppercase",
							children: "Search the handbook"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative mt-2 block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
								className: "pointer-events-none absolute top-1/2 left-3 size-5 -translate-y-1/2 text-muted",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: query,
								onChange: (event) => setQuery(event.target.value),
								className: "field pl-11",
								placeholder: "Try school, Nambale, pressure, 116",
								type: "search"
							})]
						})]
					}),
					query.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 grid gap-2",
						children: hits.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-2xl bg-cream-2 px-4 py-3 text-sm text-muted",
							children: "Nothing matches that. Try “school”, “Nambale”, or “116”."
						}) : hits.map((hit) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hit, { topic: hit }, `${hit.to}-${hit.title}`))
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-8 font-display text-3xl text-ink",
						children: "The handbook"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-3",
						children: chapters.map((chapter) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: chapter.to,
							hash: chapter.hash,
							className: "card press flex items-center gap-4 p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl text-ember tabular-nums",
									children: chapter.kicker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-display text-2xl leading-tight text-ink",
										children: chapter.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-sm leading-snug text-muted",
										children: chapter.text
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "size-5 shrink-0 text-forest",
									"aria-hidden": "true"
								})
							]
						}) }, chapter.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/help",
							className: "btn-ember",
							children: "Need help now"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/facts",
							className: "btn-quiet",
							children: "See the numbers"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
						className: "mt-10 border-t border-line pt-5 text-sm leading-relaxed text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "County Government of Busia · Handbook · 2026. Empowering girls, protecting futures, building hope." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2",
							children: "In partnership with Kenya Red Cross, tiko, KMET and community partners."
						})]
					})
				]
			})
		})]
	});
}
function Brief({ title, points, hash }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/learn",
		hash,
		className: "card press block p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-display text-xl text-ink",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "ticks mt-3 text-sm",
			children: points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: point }, point))
		})]
	});
}
function Hit({ topic }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: topic.to,
		hash: topic.hash,
		className: "card press flex items-center justify-between gap-3 px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-xs font-semibold tracking-widest text-forest uppercase",
			children: topic.group
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-0.5 block font-medium text-ink",
			children: topic.title
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
			className: "size-4 shrink-0 text-forest",
			"aria-hidden": "true"
		})]
	}) });
}
//#endregion
export { Home as component };
