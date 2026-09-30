// All site content lives here. Update this file and the whole portfolio updates.

export const site = {
	url: "https://khanamir.me",
	title: "Mohd Amir Khan — Full-Stack Engineering Lead",
	description:
		"I'm Amir, a full-stack engineering lead in Lucknow. I've been shipping software since 2013: 300+ websites, iOS apps and free tools, built with Next.js, TypeScript, React Native, Laravel and Magento.",
};

export const profile = {
	name: "Mohd Amir Khan",
	firstName: "Amir",
	short: "MAK",
	role: "Full-Stack Engineering Lead",
	headline: "I ship complete products — web, iOS & e-commerce.",
	intro:
		"13 years turning ideas into production software: storefronts, dashboards, payment flows and native apps. I use AI to prototype fast and engineering to make it hold up.",
	location: "Lucknow, India",
	timeZone: "Asia/Kolkata",
	availability: "Working remotely, worldwide",
	currently: "Engineering Lead at eClerx",
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
		mak365: "https://www.linkedin.com/in/madmak787/recent-activity/all/",
		tools: "https://tools.khanamir.me",
		resume: "/Mohd_Amir_Khan_Resume.pdf",
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
	visual: "metrics" | "speed" | "phone" | "gift" | "canvas" | "tools" | "cabin" | "code" | "schema" | "map";
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
		id: "dfab-cabin-designer",
		title: "DFAB Cabin Designer",
		kind: "web",
		category: "3D configurator · Client build",
		summary: "Design a portable cabin in 3D, get dimensioned drawings, and send a branded quotation in minutes. No server, no login.",
		highlights: ["Live 3D model with real wall cut-outs", "Floor plan, elevations & DXF export", "Instant GST quotation & WhatsApp share"],
		stack: ["Next.js", "three.js", "React Three Fiber", "Zustand"],
		visual: "cabin",
		href: "https://dfabcabin.com/draw/",
	},
	{
		id: "devtools",
		title: "DevTools",
		kind: "tools",
		category: "Developer suite",
		summary: "45 free developer utilities in one place, all running privately in the browser.",
		highlights: ["JSON, diff, regex & SQL formatters", "JWT, hashes, Base64 & QR codes", "Cron parser & color converter"],
		stack: ["Next.js", "TypeScript", "Tailwind"],
		visual: "code",
		href: "https://tool.khanamir.me/devtools",
	},
	{
		id: "matrixforge",
		title: "MatrixForge",
		kind: "tools",
		category: "Schema designer",
		summary: "Draw tables and relationships visually, import existing SQL, and export database scripts or an ER diagram.",
		highlights: ["MySQL, PostgreSQL & SQLite export", "SQL import", "PNG / SVG ER diagrams"],
		stack: ["Next.js", "TypeScript", "shadcn/ui"],
		visual: "schema",
		href: "https://tool.khanamir.me/matrix",
	},
	{
		id: "pingspot",
		title: "PingSpot",
		kind: "tools",
		category: "IP & domain locator",
		summary: "See your public IPv4 and IPv6, then look up the location, ISP, ASN and timezone of any IP or domain on a live map.",
		highlights: ["IPv4 & IPv6 detection", "Domain lookup", "Live map"],
		stack: ["Next.js", "Leaflet", "Static export"],
		visual: "map",
		href: "https://tool.khanamir.me/pingspot",
	},
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
		summary: "An installable internet speed test: download, upload, ping, jitter and packet loss, compared against your plan.",
		highlights: ["Installable PWA", "Cloudflare Speedtest", "CI/CD with GitHub Actions"],
		stack: ["Next.js", "Cloudflare", "GitHub Actions"],
		visual: "speed",
		href: "https://tool.khanamir.me/speedycheck",
	},
	{
		id: "sketchneko",
		title: "SketchNeko",
		kind: "tools",
		category: "Whiteboard",
		summary: "A hand-drawn style whiteboard for diagrams, wireframes and notes. Private, no sign-up.",
		highlights: ["Shapes, arrows, text & images", "PNG / SVG export", "Works on touch devices"],
		stack: ["Next.js", "Rough.js", "shadcn/ui"],
		visual: "canvas",
		href: "https://tool.khanamir.me/sketch",
	},
	{
		id: "tools",
		title: "Tools Hub",
		kind: "tools",
		category: "Tools catalog",
		summary: "The home for all my free tools, loaded live, with a 3D three.js hero, search and category filters.",
		highlights: ["7 live tools, including 45 dev utilities", "Resume builder & IP checker API", "Every tool runs in the browser"],
		stack: ["Next.js", "three.js", "GitHub Actions"],
		visual: "tools",
		href: "https://tools.khanamir.me",
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
		description: "Owned requirements, architecture and upkeep of the league's site, kept fast and online through match-day spikes.",
		icon: "trophy",
	},
	{
		title: "UP Local-Body Elections",
		tag: "Government · Team lead",
		description: "First team-lead role: led 8 engineers on a state election project, working directly with the Director of Local Bodies.",
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
		title: "WPSPINS & HolidayHomeConcepts",
		tag: "US clients",
		description: "Development partner for WPSPINS.com in Houston, TX, and built HolidayHomeConcepts.com, a Christmas décor store, solo in record time.",
		icon: "globe",
	},
];

export const skillGroups: { title: string; items: string[] }[] = [
	{ title: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Zustand", "Redux", "three.js"] },
	{ title: "Mobile", items: ["React Native", "Ionic", "Capacitor", "SwiftUI", "PWA"] },
	{ title: "Backend", items: ["Node.js", "Express", "PHP", "Laravel", "CodeIgniter", "GraphQL", "Prisma", "REST APIs"] },
	{ title: "Commerce & CMS", items: ["Magento", "WordPress", "Payment gateways", "Headless commerce"] },
	{ title: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"] },
	{ title: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Varnish", "Memcached", "Linux"] },
	{ title: "Leadership", items: ["Architecture", "Code review", "Mentoring", "Agile delivery", "Stakeholder management"] },
];

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

export type Chapter = {
	year: string;
	title: string;
	role: string;
	org: string;
	place: string;
	logo?: string;
	current?: boolean;
	body: string;
	points?: string[];
};

// Career told as chapters, oldest first. Education sits in the timeline where it happened.
export const story: Chapter[] = [
	{
		year: "2008",
		title: "Where it started.",
		role: "Diploma, Computer Science & Engineering",
		org: "Bakhshi Polytechnic",
		place: "UP Board of Technical Education",
		logo: "/images/logos/bakhshi-logo.jpeg",
		body: "Three years of fundamentals, finished with an A+, and a clear sense that building software was what I wanted to do.",
	},
	{
		year: "2011",
		title: "A degree, and my first time leading people.",
		role: "Bachelor's, Computer Science · Grade A",
		org: "RRSIMT",
		place: "Sultanpur",
		logo: "/images/logos/rrsimt-logo.jpeg",
		body: "I was elected College President while finishing my degree. It taught me that leading a team is a skill of its own, and I needed it sooner than I expected.",
	},
	{
		year: "2013",
		title: "First job, first team of eight.",
		role: "Software Engineer",
		org: "Rishti India",
		place: "New Delhi",
		logo: "/images/logos/rishti-logo.jpeg",
		body: "Core PHP, Magento, WordPress, Joomla, Drupal, OpenCart, PrestaShop: I learned by shipping on whatever the client used.",
		points: ["Led 8 developers on the Government of Uttar Pradesh local-body elections project, working directly with the Director of Local Bodies."],
	},
	{
		year: "2015",
		title: "Moving money safely.",
		role: "Senior Web Developer",
		org: "Byte Matrix",
		place: "New Delhi",
		logo: "/images/logos/bytematrix-logo.jpeg",
		body: "Seven payment gateways (Stripe, PayPal, Authorize.net, WorldPay, eWay, HDFC and Axis Bank), each with its own gotchas, all in production.",
		points: [
			"Built Dealighted, a deals platform for Omantel users in Muscat, with a custom gateway on AWS.",
			"Rebuilt Scentra's Magento store, and built Tour4Sports and a crop-advisory database for the NGO Pragya.",
		],
	},
	{
		year: "2017",
		title: "Commerce for a global brand.",
		role: "Senior Software Engineer",
		org: "Incedo",
		place: "Gurugram",
		logo: "/images/logos/incedo-logo.png",
		body: "Led Magento development, including the store for ONE Championship, with better UI/UX and mobile responsiveness.",
		points: ["Integrated Facebook, Twitter and other social logins, working directly with international clients."],
	},
	{
		year: "2018",
		title: "Six years leading a remote team.",
		role: "Lead Software Engineer",
		org: "Sivana (ARC)",
		place: "Remote · New Delhi",
		logo: "/images/logos/sivana-mark.png",
		body: "Owned delivery end to end: planning, resourcing, client meetings, and still writing the code.",
		points: [
			"Moved the highest-traffic sites to AWS and cut response times with Varnish, Memcached and APC.",
			"Built the product front end in Next.js and Zustand against a PHP API.",
		],
	},
	{
		year: "2024",
		title: "Leading, and still hands-on.",
		role: "Process Manager, Full-Stack Engineering Lead",
		org: "eClerx",
		place: "Remote · Mumbai team",
		logo: "/images/logos/eclerx-logo.png",
		current: true,
		body: "I lead a cross-functional team shipping web products in React, Next.js, Node.js and TypeScript, and own architecture, code reviews and delivery standards.",
		points: ["I turn stakeholder needs into roadmaps, and mentor developers on modern TypeScript and AI-assisted workflows."],
	},
];

export const certifications = [
	{
		name: "Meta Front-End Developer",
		issuer: "Meta · Coursera",
		href: "https://www.coursera.org/account/accomplishments/certificate/LMNM2GK7BC6K",
	},
	{
		name: "Practical PHP: Master the Basics and Code Dynamic Websites",
		issuer: "Udemy · 2020",
		href: "https://www.udemy.com/certificate/UC-b2aec227-bc9c-47c8-b189-34b3436f14d6/",
	},
];

export const skillAssessments = ["React.js", "PHP", "WordPress", "HTML", "MySQL"];

export const languages = [
	{ name: "English", level: "Full professional" },
	{ name: "Hindi", level: "Full professional" },
	{ name: "Urdu", level: "Limited working" },
];

// What I'm focused on right now (a "now page"). Update it every few months.
export const now = {
	updated: "September 2026",
	items: [
		{ title: "Leading at eClerx", body: "Running a full-stack team from Lucknow, and reviewing or writing code most days." },
		{ title: "#MAK365 on LinkedIn", body: "A year-long challenge: one post a day about what I build and what I learn.", href: profile.links.mak365 },
		{ title: "Building free tools", body: "Small, private-by-default utilities. Everything runs in your browser, with no sign-up.", href: profile.links.tools },
		{ title: "Prototyping with AI", body: "Using AI to get ideas on screen in hours, then doing the engineering that makes them last." },
	],
};

export const navItems = [
	{ id: "home", label: "Home" },
	{ id: "work", label: "Work" },
	{ id: "story", label: "Story" },
	{ id: "now", label: "Now" },
	{ id: "contact", label: "Contact" },
] as const;
