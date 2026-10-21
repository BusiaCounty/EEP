import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as helpSteps } from "./router-z40d0hao.mjs";
import { n as PageIntro, r as Shell, t as HelpStrip } from "./shell-oUnSRa7Z.mjs";
import { t as useStored } from "./use-stored-vKkINxIl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/help-BRF30Owl.js
var import_jsx_runtime = require_jsx_runtime();
var emptyNotebook = () => ({
	adults: [
		{
			name: "",
			phone: ""
		},
		{
			name: "",
			phone: ""
		},
		{
			name: "",
			phone: ""
		}
	],
	clinic: ""
});
function HelpPage() {
	const [notebook, setNotebook] = useStored("sep-notebook", emptyNotebook());
	const stored = notebook?.adults?.length === 3 ? notebook : emptyNotebook();
	const adults = stored.adults;
	function updateAdult(index, patch) {
		const next = adults.map((adult, item) => item === index ? {
			...adult,
			...patch
		} : adult);
		setNotebook({
			...stored,
			adults: next
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
		tone: "page",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-4 pt-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HelpStrip, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
					kicker: "Page 7 · Help",
					title: "What you can do and where to get help",
					lede: "You deserve information, safety, respect, healthcare and a chance to learn and build your future."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					id: "steps",
					className: "grid scroll-mt-24 gap-3",
					children: helpSteps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "card flex gap-4 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-10 shrink-0 items-center justify-center rounded-full bg-forest font-display text-lg text-cream",
							children: index + 1
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-2xl leading-tight text-ink",
							children: step.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block leading-relaxed text-muted",
							children: step.text
						})] })]
					}, step.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "emergency",
					className: "card mt-6 scroll-mt-24 bg-forest-deep p-5 text-cream",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "If someone forces or pressures you"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-4 grid gap-3 sm:grid-cols-3",
						children: [
							"Get to a safe place.",
							"Tell a trusted adult.",
							"Report it. It is NOT your fault."
						].map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-xl bg-cream/10 px-3 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl text-ember",
								children: index + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 leading-snug",
								children: step
							})]
						}, step))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "lines",
					className: "mt-6 scroll-mt-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl text-ink",
							children: "Free lines"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-3 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "tel:116",
								className: "card press block p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-5xl leading-none text-forest tabular-nums",
										children: "116"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 font-semibold text-ink",
										children: "Childline Kenya"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted",
										children: "Free call. For children."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "tel:1195",
								className: "card press block p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-5xl leading-none text-forest tabular-nums",
										children: "1195"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 font-semibold text-ink",
										children: "GBV helpline"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted",
										children: "Free call. Help and rescue."
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card mt-3 p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold tracking-widest text-forest uppercase",
									children: "County Government of Busia"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+254700106517",
									className: "mt-2 block font-display text-3xl text-ink",
									children: "+254 700 106 517"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: "Mon–Fri, 8.00 am – 5.00 pm"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:info@busiacounty.go.ke",
									className: "mt-3 inline-block font-semibold text-forest",
									children: "info@busiacounty.go.ke"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "adults",
					className: "mt-8 scroll-mt-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl text-ink",
							children: "Adults I can talk to"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 leading-relaxed text-muted",
							children: "Write a parent, teacher, counsellor or health worker. This list stays on this phone only. It is not sent anywhere."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-3",
							children: [
								adults.map((adult, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "card grid gap-2 p-3 sm:grid-cols-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "block",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-semibold tracking-wide text-muted uppercase",
												children: "Name"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												className: "field mt-1",
												value: adult.name,
												maxLength: 80,
												autoComplete: "name",
												onChange: (event) => updateAdult(index, { name: event.target.value })
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "block",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-semibold tracking-wide text-muted uppercase",
												children: "Phone"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												className: "field mt-1",
												value: adult.phone,
												maxLength: 24,
												inputMode: "tel",
												autoComplete: "tel",
												onChange: (event) => updateAdult(index, { phone: event.target.value })
											})]
										}),
										adult.phone.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: `tel:${adult.phone.replace(/[^\d+]/g, "")}`,
											className: "text-sm font-semibold text-forest sm:col-span-2",
											children: ["Call ", adult.name.trim() || "this person"]
										}) : null
									]
								}, index)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "card block p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-semibold tracking-wide text-muted uppercase",
										children: "My nearest hospital or clinic"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "field mt-1",
										value: stored.clinic ?? "",
										maxLength: 120,
										onChange: (event) => setNotebook({
											...stored,
											adults,
											clinic: event.target.value
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "press min-h-11 self-start rounded-full px-3 text-sm font-semibold text-muted",
									onClick: () => setNotebook(emptyNotebook()),
									children: "Clear this list"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "card mt-6 bg-forest p-5 text-cream",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "You can seek help at a nearby hospital or clinic."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 leading-relaxed text-cream/90",
						children: "If you think you may be pregnant, or you need advice, care or protection, go to your nearest hospital or youth-friendly clinic. Health workers will help you, and you will not be laughed at."
					})]
				})
			]
		})
	});
}
//#endregion
export { HelpPage as component };
