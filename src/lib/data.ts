// All site content lives here. Update this file and the whole portfolio updates.

export const site = {
	url: "https://khanamir.me",
	title: "Mohd Amir Khan — Senior Full-Stack Engineer",
	description:
		"Senior full-stack engineer with 13 years and 300+ websites behind him. I ship complete products across web, iOS and e-commerce with Next.js, TypeScript, Swift, Laravel and Magento.",
};

export const profile = {
	name: "Mohd Amir Khan",
	short: "MAK",
	role: "Senior Full-Stack Engineer",
	headline: "I ship complete products — web, iOS & e-commerce.",
	intro:
		"13 years turning ideas into production software: storefronts, dashboards, payment flows and native apps. I use AI to prototype fast and engineering to make it hold up.",
	location: "Lucknow, India",
	availability: "Working remotely, worldwide",
	email: "madmak787@gmail.com",
	whatsapp: "919899549211",
	social: {
		github: "https://github.com/madmak787",
		linkedin: "https://www.linkedin.com/in/madmak787/",
		twitter: "https://twitter.com/madmak787",
		codepen: "https://codepen.io/madmak787",
	},
	links: {
		blog: "https://khanamir.me/blog/",
		tools: "https://khanamir.me/tools/",
	},
};

export const stats = [
	{ value: "13+", label: "Years shipping" },
	{ value: "300+", label: "Websites delivered" },
	{ value: "99%", label: "Client satisfaction" },
	{ value: "7", label: "Payment gateways integrated" },
];

export type ProjectKind = "web" | "ios" | "commerce" | "tools";

export type Project = {
	id: string;
	title: string;
	kind: ProjectKind;
	category: string;
	summary: string;
	highlights: string[];
	stack: string[];
	visual: "metrics" | "speed" | "phone" | "gift" | "canvas" | "tools";
	href?: string;
};

export const projectFilters: { id: "all" | ProjectKind; label: string }[] = [
	{ id: "all", label: "All" },
	{ id: "web", label: "Web apps" },
	{ id: "ios", label: "iOS" },
	{ id: "commerce", label: "E-commerce" },
	{ id: "tools", label: "Tools" },
];

export const projects: Project[] = [
	{
		id: "speedmetrics",
		title: "SpeedMetrics",
		kind: "web",
		category: "Performance dashboard",
		summary: "Website performance reports built around Core Web Vitals, running as a static Next.js export with zero backend.",
		highlights: ["Device & network profiles", "Side-by-side comparison", "PDF export"],
		stack: ["Next.js 15", "TypeScript", "Recharts"],
		visual: "metrics",
	},
	{
		id: "nfc-focus",
		title: "NFC Focus for iOS",
		kind: "ios",
		category: "Native iOS app",
		summary: "Tap a physical NFC tag to block distracting apps. The phone stays locked to focus until you tap the tag again.",
		highlights: ["Live Activity timer", "Home Screen widget", "Screen Time APIs"],
		stack: ["SwiftUI", "CoreNFC", "WidgetKit"],
		visual: "phone",
	},
	{
		id: "egift",
		title: "eGift Card Platform",
		kind: "commerce",
		category: "E-commerce",
		summary: "A gifting storefront with group gifting, corporate bulk orders, cart and checkout on a Next.js front end and PHP API.",
		highlights: ["Group gifting with pooled payments", "Corporate bulk gifting", "Cart & checkout"],
		stack: ["Next.js", "TypeScript", "PHP API"],
		visual: "gift",
	},
	{
		id: "speedycheck",
		title: "SpeedyCheck",
		kind: "tools",
		category: "PWA",
		summary: "An installable internet speed test with automated deploys on every push.",
		highlights: ["Installable PWA", "Cloudflare Speedtest", "CI/CD with GitHub Actions"],
		stack: ["Next.js", "Cloudflare", "GitHub Actions"],
		visual: "speed",
	},
	{
		id: "sketchneko",
		title: "SketchNeko",
		kind: "web",
		category: "Creative app",
		summary: "A playful, anime-styled drawing board that runs in the browser.",
		highlights: ["Canvas drawing tools", "Playful themed UI", "Works on touch devices"],
		stack: ["Next.js", "shadcn/ui"],
		visual: "canvas",
	},
	{
		id: "tools",
		title: "Free Web Tools",
		kind: "tools",
		category: "Utilities",
		summary: "Small tools shipped end to end — each with CI/CD, SEO and legal pages — including a resume builder and an IP checker.",
		highlights: ["Resume builder", "IP checker", "More on the way"],
		stack: ["Next.js", "Tailwind", "GitHub Actions"],
		visual: "tools",
		href: "https://khanamir.me/tools/",
	},
];

export type ClientWork = {
	title: string;
	tag: string;
	description: string;
	icon: "trophy" | "landmark" | "card" | "cart" | "smartphone" | "globe";
};

export const clientWork: ClientWork[] = [
	{
		title: "Legends League Cricket",
		tag: "Tech partner",
		description: "Kept a high-traffic sports site fast and online through match-day spikes with layered caching and CDN.",
		icon: "trophy",
	},
	{
		title: "UP Local-Body Elections",
		tag: "Government · Team lead",
		description: "First team-lead role: led 8 engineers on a state election project with a deadline that could not move.",
		icon: "landmark",
	},
	{
		title: "Payment integrations",
		tag: "Fintech",
		description: "Stripe, PayPal, Authorize.net, WorldPay, eWay, HDFC and Axis Bank — each with its own gotchas, all in production.",
		icon: "card",
	},
	{
		title: "Magento & headless commerce",
		tag: "E-commerce",
		description: "Magento stores from build to scale, and Next.js front ends when a store is ready to go headless.",
		icon: "cart",
	},
	{
		title: "RoyalMobiles",
		tag: "Hybrid mobile",
		description: "A cross-platform mobile app built with Ionic and Capacitor from a single web codebase.",
		icon: "smartphone",
	},
	{
		title: "Remote agency partnerships",
		tag: "US clients",
		description: "Long-running delivery for agencies in the US, with overlap hours, async updates and a steady demo cadence.",
		icon: "globe",
	},
];

export const skillGroups: { title: string; items: string[] }[] = [
	{ title: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "GSAP"] },
	{ title: "Mobile", items: ["SwiftUI", "WidgetKit", "CoreNFC", "Ionic", "Capacitor", "PWA"] },
	{ title: "Backend", items: ["Node.js", "Express", "PHP", "Laravel", "CodeIgniter", "REST APIs"] },
	{ title: "Commerce & CMS", items: ["Magento", "WordPress", "Payment gateways", "Headless commerce"] },
	{ title: "Data", items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "MSSQL"] },
	{ title: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Varnish", "Memcached", "Linux"] },
];

export const stackJourney = ["Core PHP", "Magento", "Laravel", "React", "Next.js", "Swift"];

export const principles = [
	{
		title: "Prototype fast, harden properly",
		body: "AI gets a working draft on screen in hours. Types, edge cases, security and tests are what get it to production.",
	},
	{
		title: "Performance is a feature",
		body: "APC, Varnish, Memcached, CDN — I pick the caching layer that fixes the actual slowness, then measure Core Web Vitals.",
	},
	{
		title: "Ship end to end",
		body: "CI/CD, SEO, analytics and legal pages are part of the build, not a follow-up ticket.",
	},
	{
		title: "Clear across time zones",
		body: "Written updates, predictable demos and overlap hours, so remote clients always know where things stand.",
	},
];

export type ExperienceItem = {
	company: string;
	role: string;
	period: string;
	logo?: string;
	points: string[];
};

export const experience: ExperienceItem[] = [
	{
		company: "Sivana ICC",
		role: "IT Lead & Senior Software Engineer",
		period: "Feb 2017 — Present",
		logo: "/images/logos/sivana-mark.png",
		points: [
			"Lead engineering on client products across Next.js, React, Laravel, Magento and WordPress.",
			"Own architecture, caching and deployment for high-traffic client sites.",
			"Lead delivery for remote clients, from scoping through launch and support.",
		],
	},
	{
		company: "Incedo Inc",
		role: "Senior Software Engineer",
		period: "Jun 2017 — Feb 2018",
		logo: "/images/logos/incedo-logo.png",
		points: ["Built and maintained customer-facing web applications with product and design teams."],
	},
	{
		company: "Rishti India",
		role: "PHP Developer",
		period: "2013",
		logo: "/images/logos/rishti-logo.jpeg",
		points: ["Where it started: core PHP, MySQL and the first of 300+ websites."],
	},
];

export const education = [
	{ degree: "B.Tech, Computer Science", institute: "RRSIMT (AKTU)", logo: "/images/logos/rrsimt-logo.jpeg" },
	{ degree: "Diploma, Computer Science", institute: "Bakhshi Polytechnic (BTEUP)", logo: "/images/logos/bakhshi-logo.jpeg" },
];

export const navItems = [
	{ id: "home", label: "Home" },
	{ id: "work", label: "Work" },
	{ id: "skills", label: "Skills" },
	{ id: "experience", label: "Experience" },
	{ id: "contact", label: "Contact" },
] as const;
