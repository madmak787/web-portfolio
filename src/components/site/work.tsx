"use client";
import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { projectFilters, projects, type ProjectKind } from "@/lib/data";
import { cn } from "@/lib/utils";
import ProjectVisual from "./project-visual";

export default function Work() {
	const [filter, setFilter] = useState<"all" | ProjectKind>("all");
	const shown = filter === "all" ? projects : projects.filter((p) => p.kind === filter);

	return (
		<section id="work" className="py-16 md:py-24">
			<div className="container">
				<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
					<div className="reveal max-w-2xl">
						<p className="eyebrow mb-3">Recently shipped</p>
						<h2 className="section-title">Products I built end to end.</h2>
						<p className="mt-4 text-muted">From idea to production — design, code, deploys and the details in between.</p>
					</div>

					<div role="tablist" aria-label="Filter projects" className="reveal flex flex-wrap gap-2">
						{projectFilters.map((f) => (
							<button
								key={f.id}
								role="tab"
								aria-selected={filter === f.id}
								onClick={() => setFilter(f.id)}
								className={cn("rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors sm:px-4 sm:py-2", filter === f.id ? "border-fg bg-fg text-bg" : "bg-surface text-muted hover:text-fg")}
							>
								{f.label}
							</button>
						))}
					</div>
				</div>

				<ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{shown.map((p) => (
						<li key={p.id} className="card group flex flex-col p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10 animate-in fade-in-0 zoom-in-95">
							<ProjectVisual type={p.visual} />
							<div className="flex flex-1 flex-col px-2 pb-2 pt-5">
								<div className="flex items-start justify-between gap-3">
									<div>
										<p className="font-mono text-[11px] uppercase tracking-wider text-accent">{p.category}</p>
										<h3 className="mt-1 font-display text-xl font-semibold">{p.title}</h3>
									</div>
									{p.href ? (
										<a href={p.href} target="_blank" rel="noreferrer" className="icon-btn shrink-0" aria-label={`Open ${p.title}`}>
											<ArrowUpRight className="h-4 w-4" />
										</a>
									) : null}
								</div>
								<p className="mt-3 text-sm leading-relaxed text-muted">{p.summary}</p>
								<ul className="mt-4 space-y-1.5">
									{p.highlights.map((h) => (
										<li key={h} className="flex items-center gap-2 text-sm">
											<Check className="h-3.5 w-3.5 shrink-0 text-ok" />
											{h}
										</li>
									))}
								</ul>
								<div className="mt-auto flex flex-wrap gap-1.5 pt-5">
									{p.stack.map((s) => (
										<span key={s} className="chip bg-surface-2">
											{s}
										</span>
									))}
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
