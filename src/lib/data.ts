// All site content lives here. Update this file and the whole portfolio updates.

export const site = {
	url: "https://khanamir.me",
	title: "Mohd Amir Khan — Full-Stack Engineering Lead",
	description:
		"Full-stack engineering lead with 13 years and 300+ websites behind him. I ship complete products across web, iOS and e-commerce with Next.js, TypeScript, React Native, Ionic, Capacitor, Laravel and Magento.",
};

export const profile = {
	name: "Mohd Amir Khan",
	short: "MAK",
	role: "Full-Stack Engineering Lead",
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
		description: "Website development partner for WPSPINS.com in Houston, TX, and for HolidayHomeConcepts.com, delivered remotely.",
		icon: "globe",
	},
];

export const skillGroups: { title: string; items: string[] }[] = [
	{ title: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "GSAP"] },
	{ title: "Mobile", items: ["React Native", "Ionic", "Capacitor", "PWA"] },
	{ title: "Backend", items: ["Node.js", "Express", "PHP", "Laravel", "CodeIgniter", "REST APIs"] },
	{ title: "Commerce & CMS", items: ["Magento", "WordPress", "Payment gateways", "Headless commerce"] },
	{ title: "Data", items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "MSSQL"] },
	{ title: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Varnish", "Memcached", "Linux"] },
];

export const stackJourney = ["Core PHP", "Magento", "Laravel", "React", "Next.js", "React Native", "Ionic", "Capacitor"];

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
	location: string;
	logo?: string;
	current?: boolean;
	points: string[];
};

export const experience: ExperienceItem[] = [
	{
		company: "eClerx",
		role: "Process Manager — Full-Stack Engineering Lead",
		period: "Jul 2024 — Present",
		location: "Remote · Mumbai team",
		logo: "/images/logos/eclerx-logo.png",
		current: true,
		points: [
			"Lead a cross-functional team delivering web products while staying hands-on in the code.",
			"Build and review features with React, Next.js, Node.js and TypeScript; own architecture, code reviews and delivery standards.",
			"Turn stakeholder needs into technical roadmaps and releases, and mentor developers on modern JS/TS and AI-assisted workflows.",
		],
	},
	{
		company: "Sivana (ARC)",
		role: "Lead Software Engineer",
		period: "Feb 2018 — Jul 2024",
		location: "Remote · New Delhi",
		logo: "/images/logos/sivana-mark.png",
		points: [
			"Led the engineering team, owning project delivery, client meetings and hands-on development.",
			"Moved the highest-traffic websites to AWS and cut response times with APC, Varnish and Memcached.",
		],
	},
	{
		company: "Incedo Inc.",
		role: "Senior Software Engineer",
		period: "Jun 2017 — Feb 2018",
		location: "Gurugram",
		logo: "/images/logos/incedo-logo.png",
		points: [
			"Led Magento e-commerce development, including ONE Championship's store, with better UI/UX and responsiveness.",
			"Integrated Facebook, Twitter and other social login APIs, working directly with international clients.",
		],
	},
	{
		company: "Byte Matrix Pvt. Ltd.",
		role: "Sr. Web Developer",
		period: "Jul 2015 — Jun 2017",
		location: "New Delhi",
		logo: "/images/logos/bytematrix-logo.jpeg",
		points: [
			"Delivered client projects on open-source platforms, and led client meetings and resource planning.",
			"Integrated Stripe, PayPal, Authorize.net, WorldPay, eWay, HDFC and Axis Bank payment gateways.",
			"Built Dealighted, a deals platform for Omantel users in Muscat, and rebuilt the Magento store for Scentra.",
		],
	},
	{
		company: "Rishti India",
		role: "Software Engineer",
		period: "Feb 2013 — Jul 2015",
		location: "New Delhi",
		logo: "/images/logos/rishti-logo.jpeg",
		points: [
			"Built web apps in core PHP, Magento, WordPress, Joomla, Drupal, OpenCart, osCommerce and PrestaShop.",
			"Led a team of 8 on the UP government local-body elections project, working directly with the Director of Local Bodies.",
		],
	},
];

export const education = [
	{
		degree: "Bachelor's, Computer Science",
		institute: "Rajarshi Ranjay Sinh Institute of Management & Technology, Sultanpur",
		period: "2011 — 2014",
		detail: "Grade A · College President",
		logo: "/images/logos/rrsimt-logo.jpeg",
	},
	{
		degree: "Diploma, Computer Science & Engineering",
		institute: "Bakhshi Polytechnic (UP Board of Technical Education)",
		period: "2008 — 2011",
		detail: "Grade A+",
		logo: "/images/logos/bakhshi-logo.jpeg",
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

export const navItems = [
	{ id: "home", label: "Home" },
	{ id: "work", label: "Work" },
	{ id: "skills", label: "Skills" },
	{ id: "experience", label: "Experience" },
	{ id: "contact", label: "Contact" },
] as const;
