import Header from "@/components/header";
import Loader from "@/components/loader";
import HeroSlider from "./components/hero-slider";
import GroupSlider from "./components/group-slider";
import NumberSlider from "./components/number-slider";
import Footer from "./components/footer";

export default function Home() {
	return (
		<div className="overflow-x-hidden overflow-y-scroll bg-black">
			<div className="container relative">
				<Header />
			</div>
			<HeroSlider />
			<div className="-mt-28">
				<GroupSlider />
			</div>
			
			<NumberSlider />

			<GroupSlider />

			<Footer />

			<Loader />
		</div>
	);
}
