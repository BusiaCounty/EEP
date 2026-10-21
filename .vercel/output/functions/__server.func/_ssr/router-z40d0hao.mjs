import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, _ as lazyRouteComponent, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-z40d0hao.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-dvh flex-col items-center justify-center gap-3 bg-forest-deep px-6 text-center text-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-ember",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm leading-relaxed break-words text-cream/75",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var APP_NAME = "End Early Pregnancies";
/** Figures as printed in the 2026 Busia County youth handbook. */
var rates = [
	{
		id: "kenya",
		name: "Kenya",
		kind: "national",
		y2025: 16.3,
		y2026: 15.5
	},
	{
		id: "busia",
		name: "Busia County",
		kind: "county",
		y2025: 17.4,
		y2026: 16.9
	},
	{
		id: "bunyala",
		name: "Bunyala",
		kind: "sub",
		y2025: 19.4,
		y2026: 20.8
	},
	{
		id: "butula",
		name: "Butula",
		kind: "sub",
		y2025: 18.4,
		y2026: 19.4
	},
	{
		id: "matayos",
		name: "Matayos",
		kind: "sub",
		y2025: 15.1,
		y2026: 15.1
	},
	{
		id: "nambale",
		name: "Nambale",
		kind: "sub",
		y2025: 21.1,
		y2026: 16
	},
	{
		id: "samia",
		name: "Samia",
		kind: "sub",
		y2025: 20.6,
		y2026: 18.6
	},
	{
		id: "teso-central",
		name: "Teso Central",
		kind: "sub",
		y2025: 17.3,
		y2026: 18.7
	},
	{
		id: "teso-north",
		name: "Teso North",
		kind: "sub",
		y2025: 14.2,
		y2026: 13.7
	},
	{
		id: "teso-south",
		name: "Teso South",
		kind: "sub",
		y2025: 14.5,
		y2026: 14.6
	}
];
function rateById(id) {
	return rates.find((row) => row.id === id) ?? rates[1];
}
function round1(n) {
	return Math.round(n * 10) / 10;
}
function versus(value, benchmark) {
	if (Math.abs(value - benchmark) < .05) return "the same as";
	return value < benchmark ? "below" : "above";
}
function placeStory(place) {
	const delta = round1(place.y2026 - place.y2025);
	const move = delta === 0 ? `stayed at ${place.y2026.toFixed(1)}` : delta < 0 ? `fell from ${place.y2025.toFixed(1)} to ${place.y2026.toFixed(1)}` : `rose from ${place.y2025.toFixed(1)} to ${place.y2026.toFixed(1)}`;
	const county = rateById("busia");
	const kenya = rateById("kenya");
	const compare = place.kind === "sub" ? ` In 2026 that is ${versus(place.y2026, county.y2026)} the Busia County rate of ${county.y2026.toFixed(1)}, and ${versus(place.y2026, kenya.y2026)} the Kenya rate of ${kenya.y2026.toFixed(1)}.` : "";
	return `In ${place.name}, teenage pregnancy ${move} out of every 100 girls.${compare}`;
}
var causes = [
	"Limited knowledge about sexual health and reproduction",
	"Poor decision-making skills and low self-esteem",
	"Peer pressure and influence from social media",
	"Social gatherings (disco matanga, keshas, back-to-school parties), especially without adult supervision",
	"Persuasion by older boys and men",
	"Transactional sex (sex for money or gifts)",
	"Child marriage",
	"Alcohol and drug use"
];
var dangers = [
	"Anaemia (lack of enough blood in the body)",
	"High blood pressure in pregnancy, which can be life-threatening",
	"Difficult labour because the body is still growing: it can cause lifelong injury or even death",
	"Unsafe abortion attempts that can end in death",
	"Low birth weight and premature babies",
	"Mental and emotional distress",
	"Education stopped for a time or for good, and fewer chances for further education and work",
	"Stigma, discrimination and rejection"
];
var healthyChoices = [
	"Practise abstinence from sex",
	"Concentrate on your education",
	"Develop personal career goals",
	"Set personal boundaries",
	"Avoid alcohol, drug and substance abuse",
	"Use social media wisely",
	"Spend time with productive friends",
	"Take part in sports and youth activities"
];
var resistPressure = [
	"Say “No” clearly and firmly. You do not owe anyone an explanation",
	"Walk away, leave early or go with a trusted friend if you feel pressured",
	"Choose friends who respect your choices",
	"Gifts, money, lifts or promises are not love. You owe nothing in return",
	"Be careful with older boys and men who give you special attention or gifts",
	"Never accept sex in exchange for money or gifts",
	"Avoid being alone with someone who pressures you",
	"Tell a trusted adult if someone keeps pushing you"
];
var warningSigns = [
	"Entices you to have sex",
	"Threatens you",
	"Controls your friends or your phone",
	"Demands sexual photographs",
	"Gives gifts in exchange for sex",
	"Uses alcohol or drugs to influence you"
];
var keyMessages = [
	"Protect your future: delay sexual activity until you are ready and able to make responsible decisions.",
	"Your body belongs to you. You have the right to set boundaries and say NO.",
	"No one should force you into sexual activity. This is sexual harassment. Report anyone who sexually harasses you.",
	"Talk to a trusted adult or qualified health worker when you have questions about sexual and reproductive health.",
	"Avoid alcohol and drugs that can impair your judgement and increase vulnerability.",
	"A healthy relationship is based on respect, consent, trust and responsibility.",
	"Pregnant adolescents need support, not stigma."
];
var myths = [
	{
		myth: "A girl cannot become pregnant the first time she has sex.",
		fact: "Pregnancy can occur even on the first time."
	},
	{
		myth: "A girl cannot become pregnant if she has not started regular periods.",
		fact: "Ovulation can occur before a first or regular period."
	},
	{
		myth: "You cannot get pregnant during your period.",
		fact: "Pregnancy is still possible because cycles vary and sperm can survive for several days."
	},
	{
		myth: "Sex is safe as long as a girl does not get pregnant.",
		fact: "Sex at a young age is risky even without pregnancy: it can bring HIV and other infections, pressure, violence, fear and emotional hurt."
	},
	{
		myth: "Talking to adolescents about sex encourages sex.",
		fact: "Accurate, age-appropriate information helps young people make informed decisions."
	},
	{
		myth: "Only girls are responsible for teenage pregnancy prevention.",
		fact: "Pregnancy prevention is a shared responsibility between boys and girls."
	},
	{
		myth: "A pregnant adolescent should be rejected.",
		fact: "She needs health care, protection, support and opportunities to continue her life."
	},
	{
		myth: "Sexual violence is the victim’s fault.",
		fact: "Sexual violence is the responsibility of the perpetrator."
	}
];
var quiz = [
	{
		prompt: "Pregnancy can happen the first time a girl has sex.",
		answer: true,
		why: "Pregnancy can occur even on the first time."
	},
	{
		prompt: "A girl cannot become pregnant before her periods are regular.",
		answer: false,
		why: "Ovulation can occur before a first or regular period."
	},
	{
		prompt: "You cannot get pregnant during your period.",
		answer: false,
		why: "Cycles vary, and sperm can survive for several days."
	},
	{
		prompt: "Accurate information helps young people make safer decisions.",
		answer: true,
		why: "Talking honestly does not push adolescents into sex. Facts help them choose."
	},
	{
		prompt: "Only girls are responsible for preventing pregnancy.",
		answer: false,
		why: "Prevention is a shared responsibility between boys and girls."
	},
	{
		prompt: "Sex with a child under 18 is a crime in Kenya.",
		answer: true,
		why: "It is defilement. It is never the girl’s fault."
	},
	{
		prompt: "Gifts or money mean you owe someone sex.",
		answer: false,
		why: "Gifts, money, lifts or promises are not love. You owe nothing in return."
	},
	{
		prompt: "A pregnant adolescent should be supported, not rejected.",
		answer: true,
		why: "She needs health care, protection, support and a chance to continue her life."
	}
];
var helpSteps = [
	{
		title: "Talk",
		text: "Tell one adult you trust: a parent, teacher, counsellor or health worker."
	},
	{
		title: "Say NO to pressure",
		text: "You decide when you are ready. Nobody can force you."
	},
	{
		title: "Get true information",
		text: "Ask at a youth-friendly clinic. Do not depend on rumours."
	},
	{
		title: "Go early",
		text: "Think you may be pregnant? Go to the clinic quickly. You will not be laughed at."
	},
	{
		title: "Stay in school",
		text: "Pregnancy is not the end of learning. Ask your school how to continue."
	}
];
var topics = [
	{
		group: "Learn",
		title: "What teenage pregnancy is",
		text: "Pregnancy during adolescence, generally among girls aged 10–19.",
		to: "/learn",
		hash: "what"
	},
	{
		group: "Learn",
		title: "It can happen early",
		text: "A girl can become pregnant once ovulation begins, even soon after menstruation starts.",
		to: "/learn",
		hash: "early"
	},
	{
		group: "Learn",
		title: "Why it happens",
		text: "Peer pressure, gatherings, gifts, child marriage, alcohol, older boys and men.",
		to: "/learn",
		hash: "causes"
	},
	{
		group: "Learn",
		title: "Dangers to a girl",
		text: "Anaemia, high blood pressure, difficult labour, school leaving, stigma.",
		to: "/learn",
		hash: "dangers"
	},
	{
		group: "Learn",
		title: "HIV, violence and the law",
		text: "Sex under 18 is defilement. It is never the girl’s fault.",
		to: "/learn",
		hash: "risk"
	},
	{
		group: "Learn",
		title: "How to protect yourself",
		text: "Abstinence, school, boundaries, sports, friends who respect you.",
		to: "/learn",
		hash: "protect"
	},
	{
		group: "Learn",
		title: "Pressure is not love",
		text: "Say no. Gifts and money do not mean you owe anyone.",
		to: "/learn",
		hash: "pressure"
	},
	{
		group: "Facts",
		title: "Sub-county numbers",
		text: "Bunyala Butula Matayos Nambale Samia Teso North Teso South Teso Central 2025 2026.",
		to: "/facts"
	},
	{
		group: "Myths",
		title: "Myths and facts",
		text: "First time, periods, whose responsibility, rejection, violence.",
		to: "/myths"
	},
	{
		group: "Myths",
		title: "Check what you know",
		text: "Eight true or false questions from the handbook.",
		to: "/myths",
		hash: "check"
	},
	{
		group: "Help",
		title: "Childline 116 and GBV 1195",
		text: "Free calls. County phone +254 700 106 517. info@busiacounty.go.ke.",
		to: "/help",
		hash: "lines"
	},
	{
		group: "Help",
		title: "Adults I can talk to",
		text: "Save a parent, teacher or clinic on this phone only.",
		to: "/help",
		hash: "adults"
	},
	{
		group: "Help",
		title: "If someone forces you",
		text: "Get to a safe place. Tell a trusted adult. Report it.",
		to: "/help",
		hash: "emergency"
	}
];
function searchTopics(query) {
	const needle = query.trim().toLowerCase();
	if (needle.length < 2) return [];
	const words = needle.split(/\s+/).filter((word) => word.length > 1);
	const scored = searchCorpus().map((topic) => {
		const title = topic.title.toLowerCase();
		const blob = `${title} ${topic.text} ${topic.group}`.toLowerCase();
		let score = 0;
		if (title === needle) score += 12;
		if (title.includes(needle)) score += 6;
		if (blob.includes(needle)) score += 4;
		for (const word of words) if (title.includes(word)) score += 3;
		else if (blob.includes(word)) score += 1;
		else score -= 2;
		return {
			topic,
			score
		};
	}).filter((item) => item.score > 0).sort((a, b) => b.score - a.score);
	const seen = /* @__PURE__ */ new Set();
	const hits = [];
	for (const item of scored) {
		const key = `${item.topic.to}#${item.topic.hash ?? ""}|${item.topic.title}`;
		if (seen.has(key)) continue;
		seen.add(key);
		hits.push(item.topic);
		if (hits.length === 8) break;
	}
	return hits;
}
function searchCorpus() {
	const places = rates.filter((row) => row.kind !== "national").map((row) => ({
		group: "Facts",
		title: row.name,
		text: placeStory(row),
		to: "/facts",
		hash: row.id
	}));
	const fromList = (items, group, to, hash, label) => items.map((item) => ({
		group,
		title: item.replace(/\.$/, ""),
		text: label,
		to,
		hash
	}));
	return [
		...topics,
		...places,
		...fromList(causes, "Learn", "/learn", "causes", "Why early pregnancy happens"),
		...fromList(dangers, "Learn", "/learn", "dangers", "Dangers of early pregnancy"),
		...fromList(healthyChoices, "Learn", "/learn", "protect", "How to protect yourself"),
		...fromList(resistPressure, "Learn", "/learn", "pressure", "Pressure is not love"),
		...fromList(warningSigns, "Learn", "/learn", "warnings", "Be careful when someone does this"),
		...fromList(keyMessages, "Learn", "/learn", "messages", "Key message for adolescent girls"),
		...myths.flatMap((item) => [{
			group: "Myths",
			title: item.myth.replace(/\.$/, ""),
			text: `Myth. Fact: ${item.fact}`,
			to: "/myths"
		}]),
		...helpSteps.map((step) => ({
			group: "Help",
			title: step.title,
			text: step.text,
			to: "/help",
			hash: "steps"
		}))
	];
}
var styles_default = "/assets/styles-qfOw7WIu.css";
var Route$5 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: `${APP_NAME} — Busia County` },
			{
				name: "description",
				content: "A handbook for teenagers in Busia County: the facts on early pregnancy, how to protect your future, and where to get help."
			},
			{
				name: "theme-color",
				content: "#083528"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,560;0,9..144,700;1,9..144,560&family=Outfit:wght@400;500;600;700&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$4 = () => import("./routes-DEdQbZsZ.mjs");
var Route$4 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./facts-OUUF3whQ.mjs");
var Route$3 = createFileRoute("/facts")({
	head: () => ({ meta: [{ title: "Know the facts — End Early Pregnancies" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./help-BRF30Owl.mjs");
var Route$2 = createFileRoute("/help")({
	head: () => ({ meta: [{ title: "Get help — End Early Pregnancies" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./learn-CkDGao8t.mjs");
var Route$1 = createFileRoute("/learn")({
	head: () => ({ meta: [{ title: "How to protect yourself — End Early Pregnancies" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./myths-CxpizTs7.mjs");
var Route = createFileRoute("/myths")({
	head: () => ({ meta: [{ title: "Myths and facts — End Early Pregnancies" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	FactsRoute: Route$3.update({
		id: "/facts",
		path: "/facts",
		getParentRoute: () => Route$5
	}),
	HelpRoute: Route$2.update({
		id: "/help",
		path: "/help",
		getParentRoute: () => Route$5
	}),
	LearnRoute: Route$1.update({
		id: "/learn",
		path: "/learn",
		getParentRoute: () => Route$5
	}),
	MythsRoute: Route.update({
		id: "/myths",
		path: "/myths",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { helpSteps as a, placeStory as c, rates as d, resistPressure as f, healthyChoices as i, quiz as l, warningSigns as m, causes as n, keyMessages as o, searchTopics as p, dangers as r, myths as s, router_exports as t, rateById as u };
