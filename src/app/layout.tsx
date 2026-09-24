import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile, site } from "@/lib/data";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
	metadataBase: new URL(site.url),
	title: { default: site.title, template: `%s — ${profile.name}` },
	description: site.description,
	keywords: ["Mohd Amir Khan", "MAK", "full-stack engineer", "Next.js developer", "iOS developer", "Magento developer", "Laravel", "Lucknow"],
	authors: [{ name: profile.name, url: site.url }],
	alternates: { canonical: "/" },
	openGraph: {
		type: "website",
		url: site.url,
		siteName: profile.name,
		title: site.title,
		description: site.description,
	},
	twitter: {
		card: "summary_large_image",
		creator: "@madmak787",
		title: site.title,
		description: site.description,
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	viewportFit: "cover",
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#fafaf9" },
		{ media: "(prefers-color-scheme: dark)", color: "#0a0a0d" },
	],
};

// Runs before paint so the saved or system theme applies without a flash.
const themeScript = `(function(){try{var d=document.documentElement;d.classList.add('js');var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))d.classList.add('dark')}catch(e){}})()`;

const personJsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: profile.name,
	alternateName: profile.short,
	jobTitle: profile.role,
	url: site.url,
	email: `mailto:${profile.email}`,
	address: { "@type": "PostalAddress", addressLocality: "Lucknow", addressCountry: "IN" },
	sameAs: [profile.social.github, profile.social.linkedin, profile.social.twitter, profile.social.codepen],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning className={`${sans.variable} ${display.variable} ${mono.variable}`}>
			<head>
				<script dangerouslySetInnerHTML={{ __html: themeScript }} />
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
			</head>
			<body>
				<a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg">
					Skip to content
				</a>
				{children}
			</body>
		</html>
	);
}
