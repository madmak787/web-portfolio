"use client";
import { useState } from "react";
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { profile } from "@/lib/data";

const channels = [
	{ label: "LinkedIn", detail: "in/madmak787", href: profile.social.linkedin, icon: Linkedin },
	{ label: "GitHub", detail: "@madmak787", href: profile.social.github, icon: Github },
	{
		label: "WhatsApp",
		detail: "Quick chat",
		href: `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent("Hi Amir, I saw your portfolio.")}`,
		icon: MessageCircle,
	},
];

export default function Contact() {
	const [copied, setCopied] = useState(false);

	const copyEmail = async () => {
		try {
			await navigator.clipboard.writeText(profile.email);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch {
			window.location.href = `mailto:${profile.email}`;
		}
	};

	// Static site: compose the message in the visitor's mail app.
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const name = String(data.get("name") ?? "");
		const body = `${data.get("message") ?? ""}\n\n— ${name}\n${data.get("email") ?? ""}`;
		window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`Project enquiry from ${name}`)}&body=${encodeURIComponent(body)}`;
	};

	return (
		<section id="contact" className="py-16 md:py-24">
			<div className="container">
				<div className="reveal relative overflow-hidden rounded-3xl border bg-surface p-6 sm:p-10 lg:p-14">
					<div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-accent/20 blur-[100px]" />

					<div className="relative grid gap-12 lg:grid-cols-2">
						<div>
							<p className="eyebrow mb-3">Contact</p>
							<h2 className="section-title">Have a product to ship? Let&apos;s talk.</h2>
							<p className="mt-4 max-w-md text-muted">Tell me what you&apos;re building. I usually reply within a day, from Lucknow (IST, UTC+5:30).</p>

							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<a href={`mailto:${profile.email}`} className="btn-primary">
									<Mail className="h-4 w-4" />
									Email me
								</a>
								<button type="button" onClick={copyEmail} className="btn-ghost" aria-live="polite">
									{copied ? <Check className="h-4 w-4 text-ok" /> : <Copy className="h-4 w-4" />}
									{copied ? "Copied!" : profile.email}
								</button>
							</div>

							<ul className="mt-8 grid gap-3 sm:grid-cols-3">
								{channels.map(({ label, detail, href, icon: Icon }) => (
									<li key={label}>
										<a href={href} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-2xl border bg-surface-2/60 p-3.5 transition-colors hover:border-accent/40 sm:flex-col sm:items-start">
											<Icon className="h-5 w-5 text-accent" />
											<div className="flex-1">
												<p className="text-sm font-semibold">{label}</p>
												<p className="text-xs text-muted">{detail}</p>
											</div>
											<ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:hidden" />
										</a>
									</li>
								))}
							</ul>
						</div>

						<form onSubmit={onSubmit} className="space-y-4">
							<div className="grid gap-4 sm:grid-cols-2">
								<Field label="Name" name="name" autoComplete="name" required />
								<Field label="Email" name="email" type="email" autoComplete="email" required />
							</div>
							<label className="block">
								<span className="mb-1.5 block text-sm font-medium">What are you building?</span>
								<textarea
									name="message"
									required
									rows={5}
									placeholder="A few lines about the product, timeline and stack…"
									className="w-full resize-none rounded-xl border bg-bg px-4 py-3 text-[16px] outline-none transition-colors placeholder:text-muted/60 focus:border-accent sm:text-sm"
								/>
							</label>
							<button type="submit" className="btn-primary w-full sm:w-auto">
								<Send className="h-4 w-4" />
								Send message
							</button>
							<p className="text-xs text-muted">Opens your email app with the message ready to send.</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
	return (
		<label className="block">
			<span className="mb-1.5 block text-sm font-medium">{label}</span>
			<input {...props} className="h-12 w-full rounded-xl border bg-bg px-4 text-[16px] outline-none transition-colors placeholder:text-muted/60 focus:border-accent sm:text-sm" />
		</label>
	);
}
