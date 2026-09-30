"use client";
import { useState } from "react";
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { profile } from "@/lib/data";
import LocalTime from "./local-time";

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
		<section id="contact" className="pb-16 md:pb-28">
			<div className="container">
				<div className="reveal relative overflow-hidden rounded-[2rem] border bg-surface p-6 sm:p-10 lg:p-16">
					<div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent/15 blur-[110px]" />

					<div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
						<div>
							<p className="eyebrow mb-4">Contact</p>
							<h2 className="text-balance font-display text-[2.6rem] font-medium leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
								Have something to build? <em className="font-normal italic text-accent">Let&apos;s talk.</em>
							</h2>
							<p className="mt-6 max-w-md text-muted">
								Tell me what you&apos;re working on. It&apos;s <LocalTime className="font-medium text-fg tabular-nums" /> in Lucknow right now (IST, UTC+5:30), and I usually reply within a day.
							</p>

							<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
								<a href={`mailto:${profile.email}`} className="btn-primary">
									<Mail className="h-4 w-4" />
									Email me
								</a>
								<button type="button" onClick={copyEmail} className="btn-ghost" aria-live="polite">
									{copied ? <Check className="h-4 w-4 text-ok" /> : <Copy className="h-4 w-4" />}
									{copied ? "Copied!" : profile.email}
								</button>
							</div>

							<ul className="mt-10 border-t">
								{channels.map(({ label, detail, href, icon: Icon }) => (
									<li key={label}>
										<a href={href} target="_blank" rel="noreferrer" className="group flex items-center gap-4 border-b py-4 transition-colors hover:text-accent">
											<Icon className="h-5 w-5 text-muted transition-colors group-hover:text-accent" />
											<span className="font-display text-xl font-medium">{label}</span>
											<span className="ml-auto text-sm text-muted">{detail}</span>
											<ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
										</a>
									</li>
								))}
							</ul>
						</div>

						<form onSubmit={onSubmit} className="space-y-4 self-end rounded-2xl border bg-bg/60 p-5 sm:p-7">
							<p className="font-display text-2xl font-medium italic">Write me a note</p>
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
									className="w-full resize-none rounded-xl border bg-surface px-4 py-3 text-[16px] outline-none transition-colors placeholder:text-muted/70 focus:border-accent sm:text-sm"
								/>
							</label>
							<button type="submit" className="btn-primary w-full">
								<Send className="h-4 w-4" />
								Send message
							</button>
							<p className="text-center text-xs text-muted">Opens your email app with the message ready to send.</p>
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
			<input {...props} className="h-12 w-full rounded-xl border bg-surface px-4 text-[16px] outline-none transition-colors placeholder:text-muted/70 focus:border-accent sm:text-sm" />
		</label>
	);
}
