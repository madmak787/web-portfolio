import { ArrowRight, FileDown, Github, Linkedin, MapPin } from "lucide-react";
import { profile, stats } from "@/lib/data";

export default function Hero() {
	return (
		<section id="home" className="relative overflow-hidden pb-10 pt-20 sm:pb-12 sm:pt-32 md:pb-16 md:pt-40">
			<div className="grid-bg pointer-events-none absolute inset-0" />
			<div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />

			<div className="container relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
				<div className="min-w-0">
					<div className="reveal mb-5 inline-flex max-w-full items-center gap-2 rounded-full border bg-surface/80 py-1.5 pl-2 pr-3.5 text-[11px] font-medium leading-snug text-muted backdrop-blur sm:mb-6 sm:text-xs">
						<span className="relative flex h-2 w-2">
							<span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-ok" />
							<span className="relative inline-flex h-2 w-2 rounded-full bg-ok" />
						</span>
						<MapPin className="h-3.5 w-3.5" />
						{profile.location} · {profile.availability}
					</div>

					<p className="reveal eyebrow mb-3 leading-relaxed sm:mb-4" style={{ "--delay": "60ms" } as React.CSSProperties}>
						<span className="sm:hidden">
							{profile.name}
							<br />
							{profile.role.replace("-", "\u2011")}
						</span>
						<span className="hidden sm:inline">
							{profile.name} — {profile.role}
						</span>
					</p>

					<h1 className="reveal text-balance font-display text-[2.15rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl sm:leading-[1.04] xl:text-7xl" style={{ "--delay": "120ms" } as React.CSSProperties}>
						I ship complete products<span className="text-accent">.</span>
						<span className="mt-2 block text-muted">
							Web, iOS &amp; <span className="whitespace-nowrap">e-commerce.</span>
						</span>
					</h1>

					<p className="reveal mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg" style={{ "--delay": "180ms" } as React.CSSProperties}>
						{profile.intro}
					</p>

					<div className="reveal mt-8 flex flex-wrap items-center gap-3" style={{ "--delay": "240ms" } as React.CSSProperties}>
						<a href="#work" className="btn-primary group">
							See my work
							<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
						</a>
						<a href="#contact" className="btn-ghost">
							Get in touch
						</a>
						<a href={profile.links.resume} target="_blank" rel="noopener" className="btn-ghost">
							<FileDown className="h-4 w-4" />
							Resume
						</a>
						<div className="flex items-center gap-2 sm:ml-1">
							<a href={profile.social.github} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
								<Github className="h-4 w-4" />
							</a>
							<a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="icon-btn" aria-label="LinkedIn">
								<Linkedin className="h-4 w-4" />
							</a>
						</div>
					</div>
				</div>

				<ProfileCard />
			</div>

			<div className="container relative mt-14 md:mt-20">
				<dl className="reveal grid grid-cols-2 overflow-hidden rounded-2xl border bg-line/[0.09] md:grid-cols-4" style={{ gap: "1px" }}>
					{stats.map((s) => (
						<div key={s.label} className="flex h-full flex-col bg-surface px-4 py-5 sm:px-7 sm:py-6">
							<dt className="text-xs font-medium leading-snug text-muted sm:text-sm">{s.label}</dt>
							<dd className="mt-auto pt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{s.value}</dd>
						</div>
					))}
				</dl>
			</div>
		</section>
	);
}

function ProfileCard() {
	const lines: [string, string][] = [
		["role", `"${profile.role}"`],
		["based", `"${profile.location}"`],
		["ships", `["web", "iOS", "e-commerce"]`],
		["stack", `["Next.js", "React Native", "Ionic", "Capacitor"]`],
		["workflow", `"AI to prototype, engineering to harden"`],
	];

	return (
		<div className="reveal relative mx-auto hidden w-full min-w-0 max-w-md md:block lg:max-w-none" style={{ "--delay": "200ms" } as React.CSSProperties}>
			<div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/40 via-transparent to-transparent opacity-60" />
			<div className="card relative overflow-hidden shadow-2xl shadow-black/10">
				<div className="flex items-center justify-between border-b px-4 py-3">
					<div className="flex gap-1.5">
						<span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
						<span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
						<span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
					</div>
					<span className="font-mono text-[11px] text-muted">mak.ts</span>
					<span className="w-10" />
				</div>
				<pre className="whitespace-pre-wrap break-words p-5 font-mono text-[12px] leading-6 sm:text-[13px] sm:leading-7">
					<code>
						<span className="text-accent">const</span> <span className="text-fg">mak</span> <span className="text-muted">=</span> {"{"}
						{"\n"}
						{lines.map(([k, v]) => (
							<span key={k}>
								{"  "}
								<span className="text-fg">{k}</span>
								<span className="text-muted">: </span>
								<span className="text-ok">{v}</span>
								<span className="text-muted">,</span>
								{"\n"}
							</span>
						))}
						{"}"};
						<span className="ml-0.5 inline-block h-4 w-[7px] translate-y-0.5 animate-pulse-dot bg-accent" />
					</code>
				</pre>
			</div>
		</div>
	);
}
