import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as ChevronDown } from "../_libs/lucide-react.mjs";
import { l as quiz, s as myths } from "./router-z40d0hao.mjs";
import { n as PageIntro, r as Shell, t as HelpStrip } from "./shell-oUnSRa7Z.mjs";
import { t as useStored } from "./use-stored-vKkINxIl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/myths-CxpizTs7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MythsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
		tone: "page",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-4 pt-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HelpStrip, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
					kicker: "Page 6 · Myths",
					title: "Myths, facts and key messages",
					lede: "Tap a myth to read the fact. Then try the eight-question check."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-3",
					children: myths.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Myth, {
						myth: item.myth,
						fact: item.fact
					}) }, item.myth))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quiz, {})
			]
		})
	});
}
function Myth({ myth, fact }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "press flex w-full items-start gap-3 p-4 text-left",
			"aria-expanded": open,
			onClick: () => setOpen((value) => !value),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-0.5 shrink-0 rounded-md bg-ember px-2 py-1 text-xs font-bold tracking-wide text-forest-deep uppercase",
					children: "Myth"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex-1 leading-snug font-medium",
					children: myth
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
					className: `mt-0.5 size-5 shrink-0 text-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`,
					"aria-hidden": "true"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `fold ${open ? "open" : ""}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3 border-t border-line px-4 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shrink-0 rounded-md bg-forest px-2 py-1 text-xs font-bold tracking-wide text-cream uppercase",
						children: "Fact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "leading-relaxed",
						children: fact
					})]
				})
			})
		})]
	});
}
function Quiz() {
	const [answers, setAnswers] = (0, import_react.useState)([]);
	const [done, setDone] = (0, import_react.useState)(false);
	const [best, setBest] = useStored("sep-quiz-best", 0);
	const current = quiz[answers.length];
	const score = answers.reduce((sum, answer, index) => sum + (answer === quiz[index]?.answer ? 1 : 0), 0);
	function choose(value) {
		const next = [...answers, value];
		setAnswers(next);
		if (next.length === quiz.length) {
			const nextScore = next.reduce((sum, answer, index) => sum + (answer === quiz[index]?.answer ? 1 : 0), 0);
			setBest((previous) => Math.max(previous, nextScore));
			setDone(true);
		}
	}
	function again() {
		setAnswers([]);
		setDone(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "check",
		className: "mt-10 scroll-mt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl text-ink",
				children: "Check what you know"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-muted",
				children: ["True or false, from the handbook. ", best > 0 ? `Best score on this phone: ${best} of ${quiz.length}.` : "Your score stays on this phone."]
			}),
			done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card mt-4 p-5",
				"aria-live": "polite",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-5xl leading-none text-forest tabular-nums",
						children: [score, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-2xl text-muted",
							children: [" / ", quiz.length]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 leading-relaxed",
						children: score === quiz.length ? "You know the facts. Share them with a friend — and remember support, not stigma." : "Look again at the ones below. The facts are there to protect you, not to catch you out."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-3",
						children: quiz.map((item, index) => answers[index] === item.answer ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-xl bg-cream-2 px-3 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: item.prompt
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm leading-relaxed text-muted",
								children: [item.answer ? "True. " : "False. ", item.why]
							})]
						}, item.prompt))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "btn-ember mt-5",
						onClick: again,
						children: "Try again"
					})
				]
			}) : current ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card mt-4 p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-semibold tracking-widest text-forest uppercase tabular-nums",
						children: [
							answers.length + 1,
							" of ",
							quiz.length
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 h-1.5 overflow-hidden rounded-full bg-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "bar-fill h-full rounded-full bg-forest",
							style: { width: `${answers.length / quiz.length * 100}%` }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-display text-2xl leading-snug text-ink",
						children: current.prompt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "btn-ember",
							onClick: () => choose(true),
							children: "True"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "press min-h-12 rounded-full bg-forest-deep px-4 font-semibold text-cream",
							onClick: () => choose(false),
							children: "False"
						})]
					})
				]
			}) : null
		]
	});
}
//#endregion
export { MythsPage as component };
