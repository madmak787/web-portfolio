import Loader from "@/components/loader";
import BgSlider from "./components/bg-slider";
import Header from "@/components/header";
import Footer from "./portfolios/components/footer";
import SubscribeForm from "./components/subscribe-form";
import TextImage from "./components/text-image";
import Faq from "./components/faq";

export default function Home() {
	return (
		<div className="w-screen h-screen overflow-x-hidden overflow-y-scroll bg-black relative">
			<BgSlider />

			<div className="container relative z-10">
				<Header />
			</div>
			
			<div className="container relative z-10">
				<div className="flex flex-col justify-center items-center text-center w-full max-w-[600px] mx-auto mt-52 text-white">
					<p className="text-[2.8rem] leading-[1.2] font-semibold my-5">Unlimited movies, TV shows and more.</p>
					<p className="text-[1.8rem] font-light">Watch anywhere. Cancel anytime.</p>
					<p className="text-[1rem] my-6">Ready to watch? Enter your email to create or restart your membership</p>
					<SubscribeForm />
				</div>
			</div>

			<hr className="bg-transparent h-52" />

			<div className="container relative z-10 w-[1000px]">
				<TextImage heading={`Enjoy on your TV.`} description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel luctus eros.`} image={`/assets/images/netflix-tv.jpg`} />
				
				<TextImage type={`right`} heading={`Enjoy on your TV.`} description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel luctus eros.`} image={`/assets/images/netflix-tv.jpg`} />
			
				<TextImage heading={`Enjoy on your TV.`} description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel luctus eros.`} image={`/assets/images/netflix-tv.jpg`} />
				
				<TextImage type={`right`} heading={`Enjoy on your TV.`} description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel luctus eros.`} image={`/assets/images/netflix-tv.jpg`} />
			
				<Faq />
			
			</div>

			<Footer />

			<Loader />
		</div>
	);
}
