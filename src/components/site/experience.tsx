import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { education, experience } from "@/lib/data";

const Logo = ({ src, className }: { src?: string; className: string }) => (
	<div className={`flex shrink-0 items-center justify-center overflow-hidden border bg-white ${className}`}>{src ? <Image src={src} alt="" width={64} height={64} className="h-full w-full object-contain" /> : null}</div>
);

export default function Experience() {
	return (
		<section id="experience" className="border-t bg-surface-2/50 py-16 md:py-24">
			<div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-x-16">
				<div className="reveal lg:col-start-1 lg:row-start-1">
					<p className="eyebrow mb-3">Experience</p>
					<h2 className="section-title">From core PHP to leading teams.</h2>
					<p className="mt-4 text-muted">Started in 2013 writing PHP. Today I lead engineering and still write code every week.</p>
				</div>

				<ol className="relative space-y-4 sm:space-y-5 sm:before:absolute sm:before:bottom-8 sm:before:left-[31px] sm:before:top-8 sm:before:w-px sm:before:bg-line/10 lg:col-start-2 lg:row-span-2 lg:row-start-1">
					{experience.map((job, i) => (
						<li key={job.company} className="reveal relative flex gap-5" style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}>
							<Logo src={job.logo} className="relative z-10 hidden h-16 w-16 rounded-2xl p-2 sm:flex" />
							<div className="card flex-1 p-5 sm:p-6">
								<div className="flex items-start gap-3">
									<Logo src={job.logo} className="h-11 w-11 rounded-xl p-1.5 sm:hidden" />
									<div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
										<div>
											<h3 className="font-display text-lg font-semibold leading-snug">{job.role}</h3>
											<p className="text-sm font-medium text-accent">{job.company}</p>
										</div>
										<span className="shrink-0 font-mono text-xs text-muted sm:pt-1">{job.period}</span>
									</div>
								</div>
								<ul className="mt-4 space-y-2">
									{job.points.map((pt) => (
										<li key={pt} className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-accent">
											{pt}
										</li>
									))}
								</ul>
							</div>
						</li>
					))}
				</ol>

				<div className="reveal lg:col-start-1 lg:row-start-2 lg:self-start">
					<h3 className="flex items-center gap-2 font-display text-base font-semibold">
						<GraduationCap className="h-4 w-4 text-accent" />
						Education
					</h3>
					<ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
						{education.map((e) => (
							<li key={e.degree} className="card flex items-center gap-3 p-3">
								<Logo src={e.logo} className="h-10 w-10 rounded-lg p-1" />
								<div>
									<p className="text-sm font-semibold">{e.degree}</p>
									<p className="text-xs text-muted">{e.institute}</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
