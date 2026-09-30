"use client";
import { useEffect, useState } from "react";
import { BookOpen, Home, Mail, Sparkles, Sunrise } from "lucide-react";
import { navItems, profile } from "@/lib/data";
import { cn } from "@/lib/utils";
import ThemeToggle from "./theme-toggle";
import LocalTime from "./local-time";

const icons = { home: Home, work: Sparkles, story: BookOpen, now: Sunrise, contact: Mail };

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
			<header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "border-b bg-bg/80 backdrop-blur-xl" : "border-b border-transparent")}>
				<div className="container flex h-16 items-center justify-between gap-4">
					<a href="#home" className="group flex items-center gap-3" aria-label={`${profile.name}, back to top`}>
						<span className="flex h-9 w-9 items-center justify-center rounded-full border border-fg/80 font-display text-[13px] font-semibold italic transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-accent-fg">
							{profile.short}
						</span>
						<span className="hidden leading-tight sm:block">
							<span className="block font-display text-[17px] font-medium">{profile.name}</span>
							<span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted">
								<span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-ok" />
								Lucknow · <LocalTime />
							</span>
						</span>
					</a>

					<nav aria-label="Primary" className="hidden md:block">
						<ul className="flex items-center gap-7">
							{navItems.slice(1).map(({ id, label }) => (
								<li key={id}>
									<a
										href={`#${id}`}
										aria-current={active === id ? "true" : undefined}
										className={cn("relative py-1 text-sm font-medium transition-colors", active === id ? "text-fg" : "text-muted hover:text-fg")}
									>
										{label}
										<span className={cn("absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300", active === id ? "w-full" : "w-0")} />
									</a>
								</li>
							))}
						</ul>
					</nav>

					<div className="flex items-center gap-2">
						<ThemeToggle />
						<a href="#contact" className="btn-primary hidden h-10 sm:inline-flex">
							Say hello
						</a>
					</div>
				</div>
			</header>

			{/* Mobile: app-style bottom tab bar within thumb reach */}
			<nav aria-label="Sections" className="fixed inset-x-0 bottom-0 z-50 border-t bg-bg/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl md:hidden">
				<ul className="mx-auto grid max-w-md grid-cols-5">
					{navItems.map(({ id, label }) => {
						const Icon = icons[id];
						const isActive = active === id;
						return (
							<li key={id}>
								<a href={`#${id}`} aria-current={isActive ? "true" : undefined} className={cn("flex flex-col items-center gap-1 px-0.5 py-2 text-[10px] font-medium leading-none transition-colors min-[380px]:text-[11px]", isActive ? "text-accent" : "text-muted")}>
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
