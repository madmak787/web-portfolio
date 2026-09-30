import { clientWork } from "@/lib/data";

export default function Clients() {
	return (
		<section id="clients" className="py-16 md:py-28">
			<div className="container">
				<div className="reveal max-w-2xl">
					<p className="eyebrow mb-4">Notable engagements</p>
					<h2 className="section-title">
						300+ websites. <em>A few that stand out.</em>
					</h2>
					<p className="mt-5 text-muted">High-traffic launches, government deadlines, and money moving through seven different gateways.</p>
				</div>

				<ol className="mt-12 grid border-t md:grid-cols-2 md:gap-x-16">
					{clientWork.map((c, i) => (
						<li key={c.title} className="reveal group grid grid-cols-[2.5rem_1fr] gap-x-4 border-b py-7" style={{ "--delay": `${(i % 2) * 70}ms` } as React.CSSProperties}>
							<span className="pt-1 font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
							<div>
								<p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">{c.tag}</p>
								<h3 className="mt-1.5 font-display text-2xl font-medium tracking-tight transition-colors group-hover:text-accent">{c.title}</h3>
								<p className="mt-2 text-sm leading-relaxed text-muted">{c.description}</p>
							</div>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
