"use client";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const format = new Intl.DateTimeFormat("en-US", { timeZone: profile.timeZone, hour: "numeric", minute: "2-digit" });

// Live time in Lucknow. Renders a placeholder on the server so the static HTML never shows a stale time.
export default function LocalTime({ className }: { className?: string }) {
	const [time, setTime] = useState<string | null>(null);

	useEffect(() => {
		const tick = () => setTime(format.format(new Date()));
		tick();
		const id = setInterval(tick, 15_000);
		return () => clearInterval(id);
	}, []);

	return (
		<time className={className} suppressHydrationWarning>
			{time ?? "--:--"}
		</time>
	);
}
