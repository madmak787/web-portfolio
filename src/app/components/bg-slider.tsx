"use client";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from 'embla-carousel-auto-scroll'
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import { useRef } from "react";


const BgSlider = () => {
	// const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));
	const plugin = useRef(AutoScroll({ playOnInit: true }));

	return (
		<>
			<div className="absolute top-0 left-0 w-screen h-screen overflow-hidden z-0">
				<div className="-ms-[10vw] w-[130vw] skew-x-[-20deg]">
					<Carousel
						plugins={[plugin.current]}
						opts={{
							align: "start",
							loop: true,
						}}
						orientation="vertical"
						className="bg-black my-0 me-0 w-[130vw]"
					>
						<CarouselContent className="h-screen">
							<CarouselItem className="px-0 py-4 flex basis-0">
								<Image src={`/assets/images/bg-01.png`} alt="" width={1500} height={1200} className="w-[60vw] object-contain object-top" />
								<Image src={`/assets/images/bg-02.png`} alt="" width={1500} height={1200} className="w-[60vw] object-contain object-top" />
							</CarouselItem>
							<CarouselItem className="px-0 py-4 flex basis-0">
								<Image src={`/assets/images/bg-03.png`} alt="" width={1500} height={1200} className="w-[60vw] object-contain object-top" />
								<Image src={`/assets/images/bg-04.png`} alt="" width={1500} height={1200} className="w-[60vw] object-contain object-top" />
							</CarouselItem>
							<CarouselItem className="px-0 py-4 flex basis-0">
								<Image src={`/assets/images/bg-05.png`} alt="" width={1500} height={1200} className="w-[60vw] object-contain object-top" />
								<Image src={`/assets/images/bg-06.png`} alt="" width={1500} height={1200} className="w-[60vw] object-contain object-top" />
							</CarouselItem>
							<CarouselItem className="px-0 py-4 flex basis-0">
								<Image src={`/assets/images/bg-07.png`} alt="" width={1500} height={1200} className="w-[60vw] object-contain object-top" />
								<Image src={`/assets/images/bg-08.png`} alt="" width={1500} height={1200} className="w-[60vw] object-contain object-top" />
							</CarouselItem>
							<CarouselItem className="px-0 py-4 flex basis-0">
								<Image src={`/assets/images/bg-09.png`} alt="" width={1500} height={1200} className="w-[60vw] object-contain object-top" />
								<Image src={`/assets/images/bg-10.png`} alt="" width={1500} height={1200} className="w-[60vw] object-contain object-top" />
							</CarouselItem>
							<CarouselItem className="px-0 py-4 flex basis-0">
								<Image src={`/assets/images/bg-01.png`} alt="" width={1500} height={1200} className="w-[60vw] object-contain object-top" />
								<Image src={`/assets/images/bg-02.png`} alt="" width={1500} height={1200} className="w-[60vw] object-contain object-top" />
							</CarouselItem>
							<CarouselItem className="px-0 py-4 flex basis-0">
								<Image src={`/assets/images/bg-03.png`} alt="" width={1500} height={1200} className="w-[60vw] object-contain object-top" />
								<Image src={`/assets/images/bg-04.png`} alt="" width={1500} height={1200} className="w-[60vw] object-contain object-top" />
							</CarouselItem>
							<CarouselItem className="px-0 py-4 flex basis-0">
								<Image src={`/assets/images/bg-05.png`} alt="" width={1500} height={1200} className="w-[60vw] object-contain object-top" />
								<Image src={`/assets/images/bg-06.png`} alt="" width={1500} height={1200} className="w-[60vw] object-contain object-top" />
							</CarouselItem>
							<CarouselItem className="px-0 py-4 flex basis-0">
								<Image src={`/assets/images/bg-07.png`} alt="" width={1500} height={1200} className="w-[60vw] object-contain object-top" />
								<Image src={`/assets/images/bg-08.png`} alt="" width={1500} height={1200} className="w-[60vw] object-contain object-top" />
							</CarouselItem>
							<CarouselItem className="px-0 py-4 flex basis-0">
								<Image src={`/assets/images/bg-09.png`} alt="" width={1500} height={1200} className="w-[60vw] object-contain object-top" />
								<Image src={`/assets/images/bg-10.png`} alt="" width={1500} height={1200} className="w-[60vw] object-contain object-top" />
							</CarouselItem>
						</CarouselContent>
					</Carousel>
				</div>
			</div>
			<div className="absolute top-0 left-0 w-screen h-screen bg-black/90 z-[1]"></div>
		</>
	);
};
export default BgSlider;
