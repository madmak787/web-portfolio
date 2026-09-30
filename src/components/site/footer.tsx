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
		<footer className="overflow-hidden border-t pb-28 pt-12 md:pb-10">
			<div className="container">
				{/* A nod to the city's own welcome sign: "Muskuraiye, aap Lucknow mein hain" (smile, you're in Lucknow). */}
				<p className="font-display text-2xl font-medium italic sm:text-3xl">
					Muskuraiye<span className="text-accent">,</span> <span className="text-muted">you&apos;re on {profile.firstName}&apos;s corner of the internet.</span>
				</p>

				<div className="mt-10 flex flex-col gap-6 border-t pt-6 md:flex-row md:items-center md:justify-between">
					<p className="text-sm text-muted">
						© {new Date().getFullYear()} {profile.name} · Made in Lucknow · Coded By &copy;
						<a href="https://khanamir.me" target="_blank" rel="noopener" className="font-medium transition-colors hover:text-fg">
							madmak787
						</a>
					</p>
					<nav aria-label="Footer">
						<ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
							{links.map((l) => (
								<li key={l.label}>
									<a href={l.href} target="_blank" rel="noreferrer" className="link-underline transition-colors hover:text-fg">
										{l.label}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>

				<p aria-hidden className="mt-10 select-none whitespace-nowrap text-center font-display text-[18vw] font-medium italic leading-[0.8] tracking-[-0.04em] text-fg/[0.07] md:text-[13rem]">
					madmak787
				</p>
			</div>
		</footer>
	);
}
