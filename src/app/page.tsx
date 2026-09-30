import Nav from "@/components/site/nav";
import Hero from "@/components/site/hero";
import Work from "@/components/site/work";
import Clients from "@/components/site/clients";
import Skills from "@/components/site/skills";
import Story from "@/components/site/story";
import Now from "@/components/site/now";
import Contact from "@/components/site/contact";
import Footer from "@/components/site/footer";
import RevealObserver from "@/components/site/reveal";

export default function Home() {
	return (
		<>
			<Nav />
			<main id="main">
				<Hero />
				<Work />
				<Story />
				<Clients />
				<Skills />
				<Now />
				<Contact />
			</main>
			<Footer />
			<RevealObserver />
		</>
	);
}
