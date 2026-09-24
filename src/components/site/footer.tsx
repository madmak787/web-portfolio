import { profile } from "@/lib/data";

const links = [
	{ label: "Resume", href: profile.links.resume },
	{ label: "Blog", href: profile.links.blog },
	{ label: "Tools", href: profile.links.tools },
	{ label: "GitHub", href: profile.social.github },
	{ label: "LinkedIn", href: profile.social.linkedin },
	{ label: "X", href: profile.social.twitter },
	{ label: "CodePen", href: profile.social.codepen },
];

export default function Footer() {
	return (
		<footer className="border-t pb-28 pt-10 md:pb-10">
			<div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
				<div className="flex items-center gap-3">
					<span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent font-display text-sm font-bold text-accent-fg">{profile.short}</span>
					<p className="text-sm text-muted">
						© {new Date().getFullYear()} {profile.name}
					</p>
				</div>
				<nav aria-label="Footer">
					<ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
						{links.map((l) => (
							<li key={l.label}>
								<a href={l.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-fg">
									{l.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</footer>
	);
}
