"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projectFilters, projects, type Project, type ProjectKind } from "@/lib/data";
import { cn } from "@/lib/utils";
import ProjectVisual from "./project-visual";

export default function Work() {
	const [filter, setFilter] = useState<"all" | ProjectKind>("all");
	const shown = filter === "all" ? projects : projects.filter((p) => p.kind === filter);
	const [featured, ...rest] = shown;

	return (
		<section id="work" className="py-16 md:py-28">
			<div className="container">
				<div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
					<div className="reveal max-w-2xl">
						<p className="eyebrow mb-4">Selected work</p>
						<h2 className="section-title">
							Things I&apos;ve built, <em>end to end.</em>
						</h2>
						<p className="mt-5 max-w-lg text-muted">Client builds and my own side projects. I did the design, code, deploys and everything in between.</p>
					</div>

					<div role="tablist" aria-label="Filter projects" className="reveal no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 md:mx-0 md:flex-wrap md:px-0">
						{projectFilters.map((f) => (
							<button
								key={f.id}
								role="tab"
								aria-selected={filter === f.id}
								onClick={() => setFilter(f.id)}
								className={cn("shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors", filter === f.id ? "border-fg bg-fg text-bg" : "border-line/25 text-muted hover:border-fg hover:text-fg")}
							>
								{f.label}
							</button>
						))}
					</div>
				</div>

				{featured ? <Featured key={featured.id} project={featured} /> : null}

				<ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{rest.map((p, i) => (
						<li key={p.id} className="animate-in fade-in-0 slide-in-from-bottom-2 duration-500">
							<Card project={p} index={i + 2} />
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

const num = (i: number) => String(i).padStart(2, "0");

function Featured({ project: p }: { project: Project }) {
	return (
		<article className="group mt-12 grid gap-6 rounded-3xl border bg-surface p-3 animate-in fade-in-0 duration-500 sm:p-4 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
			<ProjectVisual type={p.visual} large />
			<div className="flex flex-col px-2 pb-3 lg:py-6 lg:pr-6">
				<p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
					<span className="text-accent">{num(1)}</span>
					<span className="h-px w-6 bg-line/30" />
					{p.category}
				</p>
				<h3 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">{p.title}</h3>
				<p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{p.summary}</p>
				<ul className="mt-6 space-y-2.5 border-t pt-6">
					{p.highlights.map((h) => (
						<li key={h} className="flex gap-3 text-sm">
							<span className="mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 bg-accent" />
							{h}
						</li>
					))}
				</ul>
				<div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
					<p className="font-mono text-xs text-muted">{p.stack.join(" · ")}</p>
					{p.href ? (
						<a href={p.href} target="_blank" rel="noreferrer" className="btn-primary h-10">
							Open live
							<ArrowUpRight className="h-4 w-4" />
						</a>
					) : null}
				</div>
			</div>
		</article>
	);
}

function Card({ project: p, index }: { project: Project; index: number }) {
	const Wrapper = p.href ? "a" : "div";
	return (
		<Wrapper
			{...(p.href ? { href: p.href, target: "_blank", rel: "noreferrer" } : {})}
			className="group flex h-full flex-col rounded-2xl border bg-surface p-3 transition-all duration-300 hover:-translate-y-1 hover:border-line/30 hover:shadow-[0_24px_48px_-28px_rgb(var(--line)/0.4)]"
		>
			<ProjectVisual type={p.visual} />
			<div className="flex flex-1 flex-col px-2 pb-2 pt-5">
				<p className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
					<span className="text-accent">{num(index)}</span>
					{p.category}
				</p>
				<h3 className="mt-2 flex items-start justify-between gap-3 font-display text-2xl font-medium tracking-tight">
					{p.title}
					{p.href ? <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden /> : null}
				</h3>
				<p className="mt-3 text-sm leading-relaxed text-muted">{p.summary}</p>
				<p className="mt-auto pt-5 font-mono text-[11px] text-muted/90">{p.stack.join(" · ")}</p>
			</div>
		</Wrapper>
	);
}
