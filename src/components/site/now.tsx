import { ArrowUpRight } from "lucide-react";
import { languages, now } from "@/lib/data";
import LocalTime from "./local-time";

export default function Now() {
	return (
		<section id="now" className="py-16 md:py-28">
			<div className="container grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
				<div>
					<div className="reveal">
						<p className="eyebrow mb-4">Now</p>
						<h2 className="section-title">
							What I&apos;m up to <em>these days.</em>
						</h2>
						<p className="mt-4 font-mono text-xs text-muted">Last updated {now.updated}</p>
					</div>

					<ul className="mt-10 grid gap-x-10 border-t sm:grid-cols-2">
						{now.items.map((item, i) => {
							const content = (
								<>
									<h3 className="flex items-center gap-2 font-display text-xl font-medium">
										{item.title}
										{item.href ? <ArrowUpRight className="h-4 w-4 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" /> : null}
									</h3>
									<p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
								</>
							);
							return (
								<li key={item.title} className="reveal border-b py-6" style={{ "--delay": `${(i % 2) * 70}ms` } as React.CSSProperties}>
									{item.href ? (
										<a href={item.href} target="_blank" rel="noreferrer" className="group block">
											{content}
										</a>
									) : (
										content
									)}
								</li>
							);
						})}
					</ul>
				</div>

				{/* A postcard from Lucknow */}
				<aside className="reveal relative self-start overflow-hidden rounded-3xl border bg-surface p-7 sm:p-8" style={{ "--delay": "120ms" } as React.CSSProperties}>
					<Skyline />
					<p className="relative mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Postcard from</p>
					<p className="relative mt-1 font-display text-4xl font-medium italic">Lucknow</p>
					<p className="relative mt-4 text-sm leading-relaxed text-muted">
						The city of <em className="font-display text-base text-fg">tehzeeb</em>: courtesy first, always. I try to bring the same to every client call, across every time zone.
					</p>

					<dl className="relative mt-6 space-y-2.5 border-t pt-5 text-sm">
						<div className="flex justify-between gap-4">
							<dt className="text-muted">Local time</dt>
							<dd className="font-medium tabular-nums">
								<LocalTime /> <span className="text-muted">IST</span>
							</dd>
						</div>
						<div className="flex justify-between gap-4">
							<dt className="text-muted">Works with</dt>
							<dd className="font-medium">Teams worldwide</dd>
						</div>
						{languages.map((l) => (
							<div key={l.name} className="flex justify-between gap-4">
								<dt className="text-muted">{l.name}</dt>
								<dd className="font-medium">{l.level}</dd>
							</div>
						))}
					</dl>
				</aside>
			</div>
		</section>
	);
}

// Line sketch of Awadhi domes and minarets, a nod to Lucknow's skyline.
function Skyline() {
	return (
		<svg aria-hidden viewBox="0 0 320 120" className="-mx-1 block h-auto w-[calc(100%+0.5rem)] text-accent/50" fill="none" stroke="currentColor" strokeWidth="1.5">
			<path d="M20 120 V78 h14 V120" />
			<path d="M27 78 V60 m-5 0 h10 m-5 0 c0 -8 0 -10 0 -14" />
			<path d="M60 120 V74 h110 V120" />
			<path d="M80 74 c0 -28 70 -28 70 0" />
			<path d="M115 46 v-10 m-3 4 h6" />
			<path d="M92 120 V96 c0 -12 26 -12 26 0 V120" />
			<path d="M128 120 V100 c0 -8 16 -8 16 0 V120 M70 120 V100 c0 -8 16 -8 16 0 V120" />
			<path d="M190 120 V70 h12 V120 M196 70 V52 m-5 0 h10 m-5 0 c0 -6 0 -8 0 -12" />
			<path d="M215 120 V88 h70 V120 M230 88 c0 -18 40 -18 40 0 M250 70 v-8" />
			<path d="M0 120 H320" />
		</svg>
	);
}
