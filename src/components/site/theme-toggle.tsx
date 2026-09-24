"use client";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
	const toggle = () => {
		const root = document.documentElement;
		const next = root.classList.contains("dark") ? "light" : "dark";
		root.classList.toggle("dark", next === "dark");
		try {
			localStorage.setItem("theme", next);
		} catch {}
	};

	return (
		<button type="button" onClick={toggle} className="icon-btn" aria-label="Toggle dark mode">
			<Sun className="hidden h-4 w-4 dark:block" />
			<Moon className="h-4 w-4 dark:hidden" />
		</button>
	);
}
