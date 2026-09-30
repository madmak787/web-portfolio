import { principles, skillGroups } from "@/lib/data";

export default function Skills() {
	return (
		<section id="skills" className="ink-section py-16 md:py-28">
			<div className="container">
				{/* How I work */}
				<div className="reveal max-w-2xl">
					<p className="eyebrow mb-4">How I work</p>
					<h2 className="section-title">
						Fast to build. <em>Built to last.</em>
					</h2>
				</div>

				<ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
					{principles.map((p, i) => (
						<li key={p.title} className="reveal border-t pt-6" style={{ "--delay": `${i * 70}ms` } as React.CSSProperties}>
							<span className="font-display text-5xl font-light italic text-accent">{i + 1}</span>
							<h3 className="mt-4 font-display text-xl font-medium leading-snug">{p.title}</h3>
							<p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
						</li>
					))}
				</ol>

				{/* Toolbox */}
				<div className="mt-20 grid gap-10 md:mt-28 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
					<div className="reveal">
						<p className="eyebrow mb-4">Toolbox</p>
						<h2 className="section-title">
							One engineer, <em>the whole stack.</em>
						</h2>
						<p className="mt-5 text-muted">I&apos;ve picked up whatever the product needed next: core PHP in 2013, Next.js and native iOS today.</p>
					</div>

					<dl className="reveal border-t">
						{skillGroups.map((g) => (
							<div key={g.title} className="grid gap-1 border-b py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
								<dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent sm:pt-0.5">{g.title}</dt>
								<dd className="text-[15px] leading-relaxed">{g.items.join(" · ")}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</section>
	);
}
