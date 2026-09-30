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
	cabin: (
		<svg viewBox="0 0 220 130" className="w-52 sm:w-60">
			{/* Isometric cabin: front, side and roof faces, with a door and window cut out. */}
			<polygon points="30,70 110,110 110,60 30,20" fill="rgb(var(--fg) / 0.12)" stroke="rgb(var(--fg) / 0.6)" strokeWidth="1.5" />
			<polygon points="110,110 190,70 190,20 110,60" fill="rgb(var(--accent) / 0.22)" stroke="rgb(var(--fg) / 0.6)" strokeWidth="1.5" />
			<polygon points="24,20 110,62 196,20 110,-18" transform="translate(0 2)" fill="rgb(var(--accent) / 0.55)" stroke="rgb(var(--fg) / 0.6)" strokeWidth="1.5" />
			<polygon points="52,56 70,65 70,90 52,81" fill="rgb(var(--surface))" stroke="rgb(var(--fg) / 0.6)" />
			<polygon points="130,62 160,47 160,62 130,77" fill="rgb(var(--surface))" stroke="rgb(var(--fg) / 0.6)" />
			<line x1="30" y1="72" x2="30" y2="118" stroke="rgb(var(--muted) / 0.6)" strokeDasharray="3 3" />
			<line x1="110" y1="112" x2="110" y2="126" stroke="rgb(var(--muted) / 0.6)" strokeDasharray="3 3" />
			<text x="62" y="126" className="fill-muted font-mono" fontSize="8">20&apos;0&quot;</text>
		</svg>
	),
	code: (
		<Window>
			<div className="space-y-1.5 font-mono text-[10px] leading-tight">
				<p><span className="text-muted">{"{"}</span></p>
				<p className="pl-3"><span className="text-accent">&quot;tools&quot;</span>: <span className="text-ok">45</span>,</p>
				<p className="pl-3"><span className="text-accent">&quot;signup&quot;</span>: <span className="text-fg">false</span>,</p>
				<p className="pl-3"><span className="text-accent">&quot;runs&quot;</span>: <span className="text-ok">&quot;in-browser&quot;</span></p>
				<p><span className="text-muted">{"}"}</span></p>
			</div>
			<div className="mt-3 flex flex-wrap gap-1">
				{["JSON", "JWT", "Regex", "SQL", "QR", "Cron"].map((t) => (
					<span key={t} className="rounded border px-1.5 py-0.5 font-mono text-[8px] text-muted">{t}</span>
				))}
			</div>
		</Window>
	),
	schema: (
		<svg viewBox="0 0 220 120" className="w-52 sm:w-60">
			{[
				{ x: 10, y: 14, title: "users", rows: ["id", "email", "name"] },
				{ x: 130, y: 6, title: "orders", rows: ["id", "user_id", "total"] },
				{ x: 130, y: 72, title: "items", rows: ["id", "order_id"] },
			].map((t) => (
				<g key={t.title}>
					<rect x={t.x} y={t.y} width="80" height={16 + t.rows.length * 12} rx="5" fill="rgb(var(--surface))" stroke="rgb(var(--fg) / 0.35)" />
					<rect x={t.x} y={t.y} width="80" height="15" rx="5" fill="rgb(var(--accent))" />
					<text x={t.x + 6} y={t.y + 11} fontSize="8" fill="white" className="font-mono">{t.title}</text>
					{t.rows.map((r, i) => (
						<text key={r} x={t.x + 6} y={t.y + 26 + i * 12} fontSize="7.5" className="fill-muted font-mono">{r}</text>
					))}
				</g>
			))}
			<path d="M90 36 C 110 36, 110 32, 130 32" fill="none" stroke="rgb(var(--accent))" strokeWidth="1.5" />
			<path d="M170 58 L 170 72" fill="none" stroke="rgb(var(--accent))" strokeWidth="1.5" />
		</svg>
	),
	map: (
		<Window>
			<div className="relative h-24 overflow-hidden rounded-md bg-[radial-gradient(rgb(var(--fg)/0.14)_1px,transparent_1px)] [background-size:8px_8px]">
				<span className="absolute left-[58%] top-[38%] flex h-3 w-3 -translate-x-1/2 -translate-y-1/2">
					<span className="absolute inset-0 animate-ping rounded-full bg-accent/50" />
					<span className="relative h-3 w-3 rounded-full border-2 border-white bg-accent" />
				</span>
			</div>
			<div className="mt-2 flex justify-between font-mono text-[9px]">
				<span className="text-fg">203.0.113.42</span>
				<span className="text-muted">Lucknow · AS9829</span>
			</div>
		</Window>
	),
};
