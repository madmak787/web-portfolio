import { ArrowLeft } from "lucide-react";

export default function NotFound() {
	return (
		<main id="main" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center">
			<div className="grid-bg pointer-events-none absolute inset-0" />
			<p className="eyebrow relative">Error 404</p>
			<h1 className="relative mt-4 font-display text-5xl font-semibold tracking-tight sm:text-6xl">This page didn&apos;t ship.</h1>
			<p className="relative mt-4 max-w-md text-muted">The link may be old or mistyped. Everything lives on the home page now.</p>
			<a href="/" className="btn-primary relative mt-8">
				<ArrowLeft className="h-4 w-4" />
				Back to home
			</a>
		</main>
	);
}
