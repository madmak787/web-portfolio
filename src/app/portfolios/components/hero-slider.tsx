"use client";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Info, Play } from "lucide-react";

const HeroSlider = () => {
	const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

	return (
		<div className="relative">
			<Carousel
				plugins={[plugin.current]}
				opts={{
					align: "start",
					loop: true,
				}}
				className="bg-black m-0"
			>
				<CarouselContent>
					<CarouselItem className="p-0">
						<Image src={`/assets/images/money-heist-01.jpg`} alt="" width={1100} height={768} className="w-full h-screen object-cover object-top" />
					</CarouselItem>
					<CarouselItem className="p-0">
						<Image src={`/assets/images/money-heist-02.jpg`} alt="" width={1100} height={768} className="w-full h-screen object-cover object-top" />
					</CarouselItem>
					<CarouselItem className="p-0">
						<Image src={`/assets/images/money-heist-03.jpg`} alt="" width={1100} height={768} className="w-full h-screen object-cover object-top" />
					</CarouselItem>
				</CarouselContent>
			</Carousel>
			<div className="absolute top-0 left-4 w-full h-full flex flex-col justify-center items-start px-12">
				<h2 className="text-[4rem] font-black -tracking-[4px] flex justify-center items-center gap-2">
					<span className="bg-gradient-to-r from-slate-300 to-slate-100 bg-clip-text text-transparent">MONEY</span>
					<span className="bg-gradient-to-r from-red-600 to-red-900 leading-none px-2 mix-blend-screen rounded-sm">HEIST</span>
				</h2>
				<div className="flex justify-center items-center gap-2">
					<Button variant={`secondary`}>
						<Play className="me-1" /> Play
					</Button>
					<Button variant={`default`} className="bg-[#585758]">
						<Info className="me-1" /> More Info
					</Button>
				</div>
				<div className="w-[102%] -ms-[1%] h-[3px] mt-14 mb-7 bg-white rounded-full"></div>
				<p className="text-white text-xl leading-7 tracking-wide text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
			</div>
			<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
		</div>
	);
};
export default HeroSlider;
