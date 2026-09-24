import { ChevronRight } from "lucide-react";
import { principles, skillGroups, stackJourney } from "@/lib/data";

export default function Skills() {
	return (
		<section id="skills" className="py-16 md:py-24">
			<div className="container">
				<div className="reveal max-w-2xl">
					<p className="eyebrow mb-3">Skills</p>
					<h2 className="section-title">One engineer, the whole stack.</h2>
					<p className="mt-4 text-muted">Thirteen years of picking up whatever the product needed next.</p>
				</div>

				{/* Stack journey */}
				<div className="reveal card mt-10 p-5 sm:p-6">
					<p className="font-mono text-[11px] uppercase tracking-wider text-muted">Stack journey · 2013 → today</p>
					<ol className="mt-4 flex flex-wrap items-center gap-2">
						{stackJourney.map((s, i) => (
							<li key={s} className="flex items-center gap-2">
								<span className={i === stackJourney.length - 1 ? "rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-fg" : "rounded-full border bg-surface-2 px-4 py-2 text-sm font-medium"}>{s}</span>
								{i < stackJourney.length - 1 ? <ChevronRight className="hidden h-4 w-4 text-muted sm:block" /> : null}
							</li>
						))}
					</ol>
				</div>

				<div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{skillGroups.map((g, i) => (
						<div key={g.title} className="reveal card p-6" style={{ "--delay": `${(i % 3) * 70}ms` } as React.CSSProperties}>
							<h3 className="font-display text-base font-semibold">{g.title}</h3>
							<ul className="mt-4 flex flex-wrap gap-2">
								{g.items.map((s) => (
									<li key={s} className="chip text-fg/80">
										{s}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* How I work */}
				<div className="mt-20">
					<div className="reveal max-w-2xl">
						<p className="eyebrow mb-3">How I work</p>
						<h2 className="section-title">Fast to build. Built to last.</h2>
					</div>
					<ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border bg-line/[0.09] sm:grid-cols-2 lg:grid-cols-4">
						{principles.map((p, i) => (
							<li key={p.title} className="reveal bg-surface p-6" style={{ "--delay": `${i * 70}ms` } as React.CSSProperties}>
								<span className="font-mono text-sm font-semibold text-accent">0{i + 1}</span>
								<h3 className="mt-3 font-display text-lg font-semibold leading-snug">{p.title}</h3>
								<p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
							</li>
						))}
					</ol>
				</div>
			</div>
		</section>
	);
}
