"use client";
import { useEffect } from "react";

// One observer for every `.reveal` element on the page.
export default function RevealObserver() {
	useEffect(() => {
		const els = document.querySelectorAll<HTMLElement>(".reveal:not(.in)");
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("in");
						observer.unobserve(entry.target);
					}
				});
			},
			{ rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
		);
		els.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, []);

	return null;
}
