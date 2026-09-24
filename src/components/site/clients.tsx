import { CreditCard, Globe2, Landmark, ShoppingCart, Smartphone, Trophy } from "lucide-react";
import { clientWork } from "@/lib/data";

const icons = { trophy: Trophy, landmark: Landmark, card: CreditCard, cart: ShoppingCart, smartphone: Smartphone, globe: Globe2 };

export default function Clients() {
	return (
		<section id="clients" className="border-y bg-surface-2/50 py-16 md:py-24">
			<div className="container">
				<div className="reveal max-w-2xl">
					<p className="eyebrow mb-3">Client work</p>
					<h2 className="section-title">300+ websites, a few that stand out.</h2>
					<p className="mt-4 text-muted">High-traffic launches, government deadlines, and money moving through seven different gateways.</p>
				</div>

				<ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{clientWork.map((c, i) => {
						const Icon = icons[c.icon];
						return (
							<li key={c.title} className="reveal card p-6 transition-colors hover:border-accent/40" style={{ "--delay": `${(i % 3) * 70}ms` } as React.CSSProperties}>
								<div className="flex items-center justify-between">
									<span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
										<Icon className="h-5 w-5" />
									</span>
									<span className="chip">{c.tag}</span>
								</div>
								<h3 className="mt-5 font-display text-lg font-semibold">{c.title}</h3>
								<p className="mt-2 text-sm leading-relaxed text-muted">{c.description}</p>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}
