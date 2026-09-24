"use client";
import { useEffect, useState } from "react";
import { Briefcase, Home, Layers, Mail, Sparkles } from "lucide-react";
import { navItems, profile } from "@/lib/data";
import { cn } from "@/lib/utils";
import ThemeToggle from "./theme-toggle";

const icons = { home: Home, work: Sparkles, skills: Layers, experience: Briefcase, contact: Mail };

export default function Nav() {
	const [active, setActive] = useState<string>("home");
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });

		// Highlight whichever section crosses the upper-middle of the viewport.
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) setActive(entry.target.id);
				});
			},
			{ rootMargin: "-40% 0px -55% 0px" },
		);
		navItems.forEach(({ id }) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => {
			window.removeEventListener("scroll", onScroll);
			observer.disconnect();
		};
	}, []);

	return (
		<>
			<header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "border-b bg-bg/75 backdrop-blur-xl" : "border-b border-transparent")}>
				<div className="container flex h-16 items-center justify-between gap-4">
					<a href="#home" className="group flex items-center gap-2.5" aria-label={`${profile.name}, back to top`}>
						<span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent font-display text-sm font-bold text-accent-fg transition-transform group-hover:-rotate-6">
							{profile.short}
						</span>
						<span className="hidden font-display text-[15px] font-semibold sm:block">{profile.name}</span>
					</a>

					<nav aria-label="Primary" className="hidden md:block">
						<ul className="flex items-center gap-1 rounded-full border bg-surface/70 p-1 backdrop-blur">
							{navItems.slice(1).map(({ id, label }) => (
								<li key={id}>
									<a
										href={`#${id}`}
										aria-current={active === id ? "true" : undefined}
										className={cn("block rounded-full px-4 py-1.5 text-sm font-medium transition-colors", active === id ? "bg-fg text-bg" : "text-muted hover:text-fg")}
									>
										{label}
									</a>
								</li>
							))}
						</ul>
					</nav>

					<div className="flex items-center gap-2">
						<ThemeToggle />
						<a href={`mailto:${profile.email}`} className="btn-primary hidden h-10 sm:inline-flex">
							Let&apos;s talk
						</a>
					</div>
				</div>
			</header>

			{/* Mobile: app-style bottom tab bar within thumb reach */}
			<nav aria-label="Sections" className="fixed inset-x-0 bottom-0 z-50 border-t bg-bg/85 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl md:hidden">
				<ul className="mx-auto grid max-w-md grid-cols-5">
					{navItems.map(({ id, label }) => {
						const Icon = icons[id];
						const isActive = active === id;
						return (
							<li key={id}>
								<a href={`#${id}`} aria-current={isActive ? "true" : undefined} className={cn("flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium transition-colors", isActive ? "text-accent" : "text-muted")}>
									<span className={cn("flex h-7 w-12 items-center justify-center rounded-full transition-colors", isActive && "bg-accent/10")}>
										<Icon className="h-[18px] w-[18px]" strokeWidth={isActive ? 2.4 : 2} />
									</span>
									{label}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
}
