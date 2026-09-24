import type { Project } from "@/lib/data";

// Lightweight illustrated mockups so each card has a visual without shipping screenshots.
export default function ProjectVisual({ type }: { type: Project["visual"] }) {
	return (
		<div aria-hidden className="relative aspect-[16/10] overflow-hidden rounded-xl border bg-surface-2">
			<div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_100%_0%,rgb(var(--accent)/0.18),transparent_60%)]" />
			<div className="relative flex h-full items-center justify-center p-5">{visuals[type]}</div>
		</div>
	);
}

const Ring = ({ value, label, pct }: { value: string; label: string; pct: number }) => (
	<div className="flex flex-col items-center gap-1.5">
		<svg viewBox="0 0 36 36" className="h-12 w-12 -rotate-90 sm:h-14 sm:w-14">
			<circle cx="18" cy="18" r="15" fill="none" stroke="rgb(var(--line) / 0.1)" strokeWidth="3.5" />
			<circle cx="18" cy="18" r="15" fill="none" stroke="rgb(var(--ok))" strokeWidth="3.5" strokeLinecap="round" strokeDasharray={`${pct * 0.94} 94`} />
		</svg>
		<span className="font-mono text-[11px] font-semibold text-fg">{value}</span>
		<span className="font-mono text-[9px] uppercase tracking-wider text-muted">{label}</span>
	</div>
);

const Window = ({ children }: { children: React.ReactNode }) => (
	<div className="w-full max-w-[300px] rounded-lg border bg-surface shadow-xl shadow-black/10">
		<div className="flex gap-1 border-b px-3 py-2">
			{[0, 1, 2].map((i) => (
				<span key={i} className="h-1.5 w-1.5 rounded-full bg-muted/40" />
			))}
		</div>
		<div className="p-3">{children}</div>
	</div>
);

const visuals: Record<Project["visual"], React.ReactNode> = {
	metrics: (
		<Window>
			<div className="flex justify-around">
				<Ring value="1.8s" label="LCP" pct={82} />
				<Ring value="0.04" label="CLS" pct={94} />
				<Ring value="120ms" label="INP" pct={76} />
			</div>
			<div className="mt-3 flex h-10 items-end gap-1">
				{[40, 65, 50, 80, 58, 90, 72, 95, 68, 84].map((h, i) => (
					<span key={i} className="flex-1 rounded-sm bg-accent/70" style={{ height: `${h}%`, opacity: 0.35 + i * 0.065 }} />
				))}
			</div>
		</Window>
	),
	speed: (
		<div className="flex flex-col items-center">
			<svg viewBox="0 0 120 70" className="w-44 sm:w-52">
				<path d="M10 62 A50 50 0 0 1 110 62" fill="none" stroke="rgb(var(--line) / 0.1)" strokeWidth="9" strokeLinecap="round" />
				<path d="M10 62 A50 50 0 0 1 95 27" fill="none" stroke="rgb(var(--accent))" strokeWidth="9" strokeLinecap="round" />
				<line x1="60" y1="62" x2="92" y2="32" stroke="rgb(var(--fg))" strokeWidth="2.5" strokeLinecap="round" />
				<circle cx="60" cy="62" r="4" fill="rgb(var(--fg))" />
			</svg>
			<p className="-mt-1 font-display text-3xl font-bold text-fg">
				486<span className="ml-1 text-sm font-medium text-muted">Mbps</span>
			</p>
		</div>
	),
	phone: (
		<div className="flex items-center gap-4">
			<div className="h-[150px] w-[76px] rounded-[18px] border-[3px] border-fg/80 bg-surface p-1.5 sm:h-[170px] sm:w-[86px]">
				<div className="mx-auto mb-2 h-2 w-8 rounded-full bg-fg/80" />
				<div className="rounded-lg bg-accent/15 p-1.5 text-center">
					<p className="font-mono text-[8px] uppercase text-accent">Focus</p>
					<p className="font-display text-sm font-bold text-fg">25:00</p>
				</div>
				<div className="mt-1.5 grid grid-cols-3 gap-1">
					{Array.from({ length: 9 }).map((_, i) => (
						<span key={i} className="aspect-square rounded-[4px] bg-muted/25" />
					))}
				</div>
			</div>
			<div className="flex flex-col items-center gap-2">
				<div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-accent/60">
					<span className="absolute inset-0 animate-ping rounded-full bg-accent/10" />
					<span className="font-mono text-[10px] font-bold text-accent">NFC</span>
				</div>
				<span className="font-mono text-[9px] uppercase tracking-wider text-muted">Tap to unlock</span>
			</div>
		</div>
	),
	gift: (
		<div className="relative h-32 w-52 sm:h-36 sm:w-56">
			<div className="absolute left-6 top-0 h-24 w-40 rotate-[-8deg] rounded-xl bg-gradient-to-br from-fg/70 to-fg/40 sm:h-28 sm:w-44" />
			<div className="absolute bottom-0 right-0 flex h-24 w-40 rotate-[4deg] flex-col justify-between rounded-xl bg-gradient-to-br from-accent to-[rgb(150_20_30)] p-3 text-white shadow-xl sm:h-28 sm:w-44">
				<div className="flex justify-between font-mono text-[9px] uppercase tracking-wider opacity-80">
					<span>eGift</span>
					<span>Group · 4</span>
				</div>
				<p className="font-display text-2xl font-bold">₹5,000</p>
			</div>
		</div>
	),
	canvas: (
		<Window>
			<svg viewBox="0 0 200 90" className="h-24 w-full">
				<path d="M15 60 C 40 10, 70 10, 85 45 S 130 85, 150 35" fill="none" stroke="rgb(var(--accent))" strokeWidth="4" strokeLinecap="round" />
				<path d="M120 70 q 10 -18 22 -4 q 10 -20 24 0" fill="none" stroke="rgb(var(--fg) / 0.7)" strokeWidth="3" strokeLinecap="round" />
				<circle cx="45" cy="72" r="7" fill="rgb(var(--ok) / 0.7)" />
			</svg>
			<div className="flex gap-1.5">
				{["bg-accent", "bg-ok", "bg-fg", "bg-muted", "bg-amber-400", "bg-sky-400"].map((c) => (
					<span key={c} className={`h-4 w-4 rounded-full ${c}`} />
				))}
			</div>
		</Window>
	),
	tools: (
		<div className="grid w-full max-w-[280px] grid-cols-3 gap-2.5">
			{[
				["CV", "Resume"],
				["IP", "Checker"],
				["Mb", "Speed"],
			].map(([glyph, label]) => (
				<div key={label} className="flex aspect-square flex-col items-center justify-center gap-1 rounded-xl border bg-surface shadow-lg shadow-black/5">
					<span className="font-display text-xl font-bold text-accent">{glyph}</span>
					<span className="font-mono text-[9px] uppercase tracking-wider text-muted">{label}</span>
				</div>
			))}
		</div>
	),
};
