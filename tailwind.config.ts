import type { Config } from "tailwindcss";

const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config = {
	darkMode: ["class"],
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		container: {
			center: true,
			padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
			screens: { "2xl": "1200px" },
		},
		extend: {
			colors: {
				bg: token("bg"),
				surface: token("surface"),
				"surface-2": token("surface-2"),
				line: token("line"),
				fg: token("fg"),
				muted: token("muted"),
				accent: token("accent"),
				"accent-fg": token("accent-fg"),
				ok: token("ok"),
			},
			fontFamily: {
				sans: ["var(--font-sans)", "system-ui", "sans-serif"],
				display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
				mono: ["var(--font-mono)", "ui-monospace", "monospace"],
			},
			keyframes: {
				"pulse-dot": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.35" },
				},
			},
			animation: {
				"pulse-dot": "pulse-dot 2s ease-in-out infinite",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
