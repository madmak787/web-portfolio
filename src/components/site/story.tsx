import Image from "next/image";
import { ArrowUpRight, FileDown } from "lucide-react";
import { certifications, profile, skillAssessments, story } from "@/lib/data";

export default function Story() {
	return (
		<section id="story" className="border-y bg-surface-2/40 py-16 md:py-28">
			<div className="container grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
				<div className="lg:sticky lg:top-28 lg:self-start">
					<div className="reveal">
						<p className="eyebrow mb-4">The story so far</p>
						<h2 className="section-title">
							From a diploma in UP to <em>leading teams.</em>
						</h2>
						<p className="mt-5 text-muted">Eighteen years, told in seven chapters. It started with core PHP. Today I lead engineering, and I still write code every week.</p>
						<a href={profile.links.resume} target="_blank" rel="noopener" className="btn-ghost mt-8">
							<FileDown className="h-4 w-4" />
							Download resume (PDF)
						</a>
					</div>
				</div>

				<ol className="relative">
					{story.map((c, i) => (
						<li key={c.year} className="reveal relative grid grid-cols-[3.5rem_1fr] gap-x-4 pb-12 last:pb-0 sm:grid-cols-[5.5rem_1fr] sm:gap-x-8" style={{ "--delay": `${Math.min(i, 3) * 60}ms` } as React.CSSProperties}>
							{/* Spine */}
							{i < story.length - 1 ? <span aria-hidden className="absolute bottom-0 left-[1.1rem] top-12 w-px bg-line/15 sm:left-[1.35rem]" /> : null}

							<div className="relative">
								<div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border bg-white p-1 sm:h-11 sm:w-11">
									{c.logo ? <Image src={c.logo} alt="" width={44} height={44} className="h-full w-full rounded-full object-contain" /> : null}
								</div>
							</div>

							<div className="min-w-0">
								<p className="flex flex-wrap items-center gap-3">
									<span className="font-display text-3xl font-medium italic leading-none text-accent sm:text-4xl">{c.year}</span>
									{c.current ? (
										<span className="inline-flex items-center gap-1.5 rounded-full border border-ok/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ok">
											<span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-ok" />
											Now
										</span>
									) : null}
								</p>
								<h3 className="mt-3 text-balance font-display text-2xl font-medium leading-snug tracking-tight">{c.title}</h3>
								<p className="mt-1.5 text-sm">
									<span className="font-semibold">{c.role}</span>
									<span className="text-muted">
										{" "}
										· {c.org} · {c.place}
									</span>
								</p>
								<p className="mt-3 leading-relaxed text-muted">{c.body}</p>
								{c.points?.length ? (
									<ul className="mt-3 space-y-2">
										{c.points.map((pt) => (
											<li key={pt} className="relative pl-5 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.6em] before:h-px before:w-2.5 before:bg-accent">
												{pt}
											</li>
										))}
									</ul>
								) : null}
							</div>
						</li>
					))}
				</ol>
			</div>

			{/* Credentials picked up along the way */}
			<div className="container mt-16 md:mt-24">
				<div className="reveal grid gap-8 border-t pt-10 md:grid-cols-[0.75fr_1.25fr] md:gap-20">
					<h3 className="font-display text-2xl font-medium italic">Along the way</h3>
					<div className="grid gap-8 sm:grid-cols-2">
						<div>
							<p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">Certifications</p>
							<ul className="mt-3 space-y-3">
								{certifications.map((c) => (
									<li key={c.name}>
										<a href={c.href} target="_blank" rel="noopener noreferrer" className="group block">
											<span className="text-sm font-semibold group-hover:text-accent">{c.name}</span>
											<span className="mt-0.5 flex items-center gap-1 text-xs text-muted">
												{c.issuer} · Verify <ArrowUpRight className="h-3 w-3" />
											</span>
										</a>
									</li>
								))}
							</ul>
						</div>
						<div>
							<p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">LinkedIn skill assessments</p>
							<ul className="mt-3 flex flex-wrap gap-2">
								{skillAssessments.map((s) => (
									<li key={s} className="rounded-full border border-line/25 px-3 py-1 text-xs font-medium">
										{s}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
