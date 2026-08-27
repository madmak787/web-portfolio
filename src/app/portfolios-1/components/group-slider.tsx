import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

const GroupSlider = () => {
    return (
        <div className="ms-16 my-10 text-white relative">
            <p className="text-lg font-bold my-3">Popular on Netflix</p>
            <Carousel
				opts={{
					align: "start",
					loop: true,
				}}
				className="bg-black m-0"
			>
				<CarouselContent>
					<CarouselItem className="basis-[22%] p-0 me-5 relative">
                        <Image src={`/assets/images/icon.png`} alt="" width={100} height={100} className="absolute top-2 left-2 w-8 h-8 object-contain object-top drop-shadow-xl" />
						<Image src={`/assets/images/money-heist-01.jpg`} alt="" width={1100} height={768} className="w-full h-full object-cover object-top" />
					</CarouselItem>
					<CarouselItem className="basis-[22%] p-0 me-5">
                        <Image src={`/assets/images/icon.png`} alt="" width={100} height={100} className="absolute top-2 left-2 w-8 h-8 object-contain object-top drop-shadow-xl" />
						<Image src={`/assets/images/money-heist-02.jpg`} alt="" width={1100} height={768} className="w-full h-full object-cover object-top" />
					</CarouselItem>
					<CarouselItem className="basis-[22%] p-0 me-5">
                        <Image src={`/assets/images/icon.png`} alt="" width={100} height={100} className="absolute top-2 left-2 w-8 h-8 object-contain object-top drop-shadow-xl" />
						<Image src={`/assets/images/money-heist-03.jpg`} alt="" width={1100} height={768} className="w-full h-full object-cover object-top" />
					</CarouselItem>
                    <CarouselItem className="basis-[22%] p-0 me-5">
                        <Image src={`/assets/images/icon.png`} alt="" width={100} height={100} className="absolute top-2 left-2 w-8 h-8 object-contain object-top drop-shadow-xl" />
        				<Image src={`/assets/images/money-heist-01.jpg`} alt="" width={1100} height={768} className="w-full h-full object-cover object-top" />
					</CarouselItem>
					<CarouselItem className="basis-[22%] p-0 me-5">
                        <Image src={`/assets/images/icon.png`} alt="" width={100} height={100} className="absolute top-2 left-2 w-8 h-8 object-contain object-top drop-shadow-xl" />
                        <Image src={`/assets/images/money-heist-02.jpg`} alt="" width={1100} height={768} className="w-full h-full object-cover object-top" />
					</CarouselItem>
					<CarouselItem className="basis-[22%] p-0 me-5">
                        <Image src={`/assets/images/icon.png`} alt="" width={100} height={100} className="absolute top-2 left-2 w-8 h-8 object-contain object-top drop-shadow-xl" />
                        <Image src={`/assets/images/money-heist-03.jpg`} alt="" width={1100} height={768} className="w-full h-full object-cover object-top" />
					</CarouselItem>
				</CarouselContent>
			</Carousel>
        </div>
    )
}
export default GroupSlider