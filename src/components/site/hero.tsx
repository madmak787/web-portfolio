import { ArrowDown, ArrowUpRight, FileDown } from "lucide-react";
import { languages, profile, stats } from "@/lib/data";
import { cn } from "@/lib/utils";
import LocalTime from "./local-time";

export default function Hero() {
	return (
		<section id="home" className="relative overflow-hidden pb-14 pt-24 sm:pt-32 md:pb-20 md:pt-40">
			<div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-accent/10 blur-[120px]" />

			<div className="container relative grid items-center gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
				<div className="min-w-0">
					<p className="reveal font-display text-2xl italic text-accent sm:text-3xl">
						Aadaab<span className="text-muted">,</span>
						<span className="ml-3 align-middle font-mono text-[10px] not-italic uppercase tracking-[0.18em] text-muted sm:text-[11px]">a Lucknowi hello</span>
					</p>

					<h1
						className="reveal mt-4 text-balance font-display text-[2.6rem] font-medium leading-[1.02] tracking-[-0.03em] sm:text-7xl sm:leading-[0.98] xl:text-[5.4rem]"
						style={{ "--delay": "80ms" } as React.CSSProperties}
					>
						I&apos;m {profile.firstName}. I&apos;ve been <em className="font-normal text-accent">shipping</em> software since 2013.
					</h1>

					<p className="reveal mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg" style={{ "--delay": "160ms" } as React.CSSProperties}>
						Storefronts, payment flows, dashboards, iOS apps and a shelf of free tools: <span className="text-fg">300+ websites</span> so far. Today I lead a full-stack team at{" "}
						<span className="text-fg">eClerx</span>, and I still write code every week.
					</p>

					<div className="reveal mt-9 flex flex-wrap items-center gap-3" style={{ "--delay": "240ms" } as React.CSSProperties}>
						<a href="#work" className="btn-primary group">
							See my work
							<ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
						</a>
						<a href="#story" className="btn-ghost">
							Read my story
						</a>
						<a href={profile.links.resume} target="_blank" rel="noopener" className="btn-ghost">
							<FileDown className="h-4 w-4" />
							Resume
						</a>
					</div>
				</div>

				<VisitingCard />
			</div>

			<div className="container relative mt-16 md:mt-24">
				<dl className="reveal grid grid-cols-2 border-y md:grid-cols-4">
					{stats.map((s, i) => (
						<div key={s.label} className={cn("flex flex-col-reverse justify-end gap-1 py-6 pr-4", i % 2 ? "border-l pl-5 sm:pl-7" : i > 0 && "md:border-l md:pl-7", i < 2 && "max-md:border-b")}>
							<dt className="text-xs leading-snug text-muted sm:text-sm">{s.label}</dt>
							<dd className="font-display text-4xl font-medium tracking-tight sm:text-5xl">{s.value}</dd>
						</div>
					))}
				</dl>
			</div>
		</section>
	);
}

// A visiting card instead of a stock photo: the facts someone would ask on a first call.
function VisitingCard() {
	const rows: [string, React.ReactNode][] = [
		["Based in", profile.location],
		["Local time", <LocalTime key="t" className="tabular-nums" />],
		["Currently", profile.currently],
		["Writing", <a key="w" href={profile.links.mak365} target="_blank" rel="noreferrer" className="link-underline">#MAK365 on LinkedIn</a>],
		["Speaks", languages.map((l) => l.name).join(", ")],
	];

	return (
		<div className="reveal relative mx-auto w-full max-w-md lg:max-w-none" style={{ "--delay": "200ms" } as React.CSSProperties}>
			<div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border bg-surface-2 sm:rotate-2" />
			<div className="relative rounded-2xl border bg-surface p-6 shadow-[0_30px_60px_-30px_rgb(var(--line)/0.35)] sm:-rotate-1 sm:p-7">
				<div className="flex items-start justify-between gap-4">
					<div>
						<p className="font-display text-2xl font-medium leading-tight">{profile.name}</p>
						<p className="mt-1 text-sm text-muted">{profile.role}</p>
					</div>
					<Stamp />
				</div>

				<dl className="mt-6 divide-y border-t">
					{rows.map(([k, v]) => (
						<div key={k} className="flex items-baseline justify-between gap-4 py-2.5 text-sm">
							<dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">{k}</dt>
							<dd className="text-right font-medium">{v}</dd>
						</div>
					))}
				</dl>

				<div className="mt-5 flex items-center justify-between gap-3 border-t pt-5">
					<a href={`mailto:${profile.email}`} className="link-underline truncate text-sm font-medium">
						{profile.email}
					</a>
					<div className="flex gap-3 font-mono text-[11px] uppercase tracking-wider text-muted">
						<a href={profile.social.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-0.5 hover:text-accent">
							GH <ArrowUpRight className="h-3 w-3" />
						</a>
						<a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-0.5 hover:text-accent">
							IN <ArrowUpRight className="h-3 w-3" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

function Stamp() {
	return (
		<div aria-hidden className="relative -mr-2 -mt-2 h-[84px] w-[84px] shrink-0 text-accent">
			<svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow">
				<defs>
					<path id="stamp-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
				</defs>
				<text className="fill-current font-mono" fontSize="9.2" letterSpacing="2.1">
					<textPath href="#stamp-circle">OPEN TO REMOTE WORK • WORLDWIDE •</textPath>
				</text>
			</svg>
			<span className="absolute inset-0 flex items-center justify-center font-display text-lg font-semibold italic">{profile.short}</span>
		</div>
	);
}
