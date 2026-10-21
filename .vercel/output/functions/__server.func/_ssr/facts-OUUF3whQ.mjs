import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as placeStory, d as rates, u as rateById } from "./router-z40d0hao.mjs";
import { n as PageIntro, r as Shell, t as HelpStrip } from "./shell-oUnSRa7Z.mjs";
import { t as useStored } from "./use-stored-vKkINxIl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/facts-OUUF3whQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FactsPage() {
	const hash = useRouterState({ select: (state) => state.location.hash }).replace(/^#/, "");
	const [mode, setMode] = useStored("sep-year", "2026");
	const [placeId, setPlaceId] = useStored("sep-place", "busia");
	const [order, setOrder] = useStored("sep-order", "handbook");
	const selected = rateById(placeId);
	const subs = rates.filter((row) => row.kind === "sub");
	const shown = order === "high" ? [...rates].sort((a, b) => valueOf(b, mode) - valueOf(a, mode)) : rates;
	const highest = subs.reduce((best, row) => row.y2026 > best.y2026 ? row : best);
	const lowest = subs.reduce((best, row) => row.y2026 < best.y2026 ? row : best);
	const drop = subs.reduce((best, row) => row.y2025 - row.y2026 > best.y2025 - best.y2026 ? row : best);
	(0, import_react.useEffect)(() => {
		if (rates.some((row) => row.id === hash)) setPlaceId(hash);
	}, [hash, setPlaceId]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
		tone: "page",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-4 pt-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HelpStrip, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
					kicker: "Page 3 · Facts",
					title: "Know the facts",
					lede: "Good news: Busia County’s number is going down. Every sub-county has a role in bringing it down further."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-3 gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Busia 2026",
							value: "16.9",
							note: "was 17.4"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Lowest",
							value: lowest.y2026.toFixed(1),
							note: lowest.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Biggest fall",
							value: (drop.y2025 - drop.y2026).toFixed(1),
							note: drop.name
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: [
						"Highest in 2026 is ",
						highest.name,
						" at ",
						highest.y2026.toFixed(1),
						". The campaign line is 17 in every 100. The detailed count was 17.4 in 2025 and 16.9 in 2026."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-2",
					role: "radiogroup",
					"aria-label": "Which year to show",
					children: [[
						["2025", "2025"],
						["2026", "2026"],
						["change", "Change"]
					].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						role: "radio",
						"aria-checked": mode === id,
						onClick: () => setMode(id),
						className: mode === id ? "press min-h-11 rounded-full bg-forest px-4 text-sm font-semibold text-cream" : "press min-h-11 rounded-full bg-cream-2 px-4 text-sm font-semibold text-ink",
						children: label
					}, id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOrder(order === "handbook" ? "high" : "handbook"),
						className: "press min-h-11 rounded-full bg-cream-2 px-4 text-sm font-semibold text-ink",
						children: order === "handbook" ? "Handbook order" : "Highest first"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs font-semibold tracking-widest text-muted uppercase",
					children: mode === "change" ? "Change from 2025 to 2026, out of every 100 girls" : `Teenage pregnancy in ${mode}, out of every 100 girls`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 grid gap-1",
					children: shown.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						row,
						mode,
						active: row.id === selected.id,
						onSelect: () => setPlaceId(row.id)
					}) }, row.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "card mt-4 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-widest text-forest uppercase",
							children: selected.kind === "sub" ? "Sub-county" : selected.kind === "county" ? "County" : "Country"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-3xl text-ink",
							children: selected.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-base leading-relaxed",
							children: placeStory(selected)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: "Tap another bar to keep that place on your home screen."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: subs.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setPlaceId(row.id),
						className: row.id === selected.id ? "press min-h-11 rounded-full bg-forest-deep px-3 text-sm font-semibold text-cream" : "press min-h-11 rounded-full bg-paper px-3 text-sm font-semibold text-ink shadow-card",
						children: row.name
					}, row.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm leading-relaxed text-muted",
					children: "Across Kenya, about 15% of women aged 15–19 have ever been pregnant, according to the Kenya National Bureau of Statistics figure printed in this handbook. Pregnancy can stop your dreams. It does not have to be the end. With support, a girl can go back to school."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs leading-relaxed text-muted",
					children: "Source: County Government of Busia youth handbook, 2026. Rates are out of every 100 girls, as printed for 2025 and 2026."
				})
			]
		})
	});
}
function valueOf(row, mode) {
	if (mode === "2025") return row.y2025;
	if (mode === "2026") return row.y2026;
	return row.y2026 - row.y2025;
}
function Bar({ row, mode, active, onSelect }) {
	const delta = Math.round((row.y2026 - row.y2025) * 10) / 10;
	const amount = mode === "2025" ? row.y2025 : mode === "2026" ? row.y2026 : Math.abs(delta);
	const width = Math.max(2, Math.min(100, amount / (mode === "change" ? 6 : 25) * 100));
	const label = mode === "change" ? delta === 0 ? "0.0" : `${delta > 0 ? "+" : "−"}${Math.abs(delta).toFixed(1)}` : amount.toFixed(1);
	const direction = delta < 0 ? "fell" : delta > 0 ? "rose" : "same";
	const fill = row.kind === "county" ? "bg-ember" : row.kind === "national" ? "bg-muted" : "bg-forest";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onSelect,
		"aria-pressed": active,
		className: active ? "press w-full rounded-xl bg-cream-2 px-3 py-2.5 text-left" : "press w-full rounded-xl px-3 py-2.5 text-left hover:bg-cream-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-baseline justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium text-ink",
				children: row.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-semibold text-forest tabular-nums",
				children: [label, mode === "change" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-2 text-xs font-semibold tracking-wide text-muted uppercase",
					children: direction
				}) : null]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-1.5 block h-2.5 overflow-hidden rounded-full bg-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `bar-fill block h-full rounded-full ${mode === "change" && delta > 0 ? "bg-ember-deep" : fill}`,
				style: { width: `${width}%` }
			})
		})]
	});
}
function Stat({ label, value, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card px-3 py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-wide text-muted uppercase",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-display text-3xl leading-none text-ink tabular-nums",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 truncate text-xs text-muted",
				children: note
			})
		]
	});
}
//#endregion
export { FactsPage as component };
