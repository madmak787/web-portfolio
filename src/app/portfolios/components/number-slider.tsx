import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

const NumberSlider = () => {
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
					<CarouselItem className="basis-[18%] p-0 me-5 flex justify-center items-center">
                        <svg viewBox="0 0 11 4" className="w-full h-full mt-5 -me-[50%] font-bold">
                            <text x="4" y="5.3" textAnchor="middle" fontSize="10" fill="none" strokeWidth=".015" stroke="#fff" fontFamily="sans-serif">1</text>
                        </svg>
                        <Image src={`/assets/images/money-heist-01.jpg`} alt="" width={500} height={500} className="w-[60%] h-60 object-cover object-top" />
					</CarouselItem>
					<CarouselItem className="basis-[18%] p-0 me-5 flex justify-center items-center">
                        <svg viewBox="0 0 11 4" className="w-full h-full mt-5 -me-[50%] font-bold">
                            <text x="4" y="5.3" textAnchor="middle" fontSize="10" fill="none" strokeWidth=".015" stroke="#fff" fontFamily="sans-serif">2</text>
                        </svg>
                        <Image src={`/assets/images/money-heist-02.jpg`} alt="" width={500} height={500} className="w-[60%] h-60 object-cover object-top" />
					</CarouselItem>
					<CarouselItem className="basis-[18%] p-0 me-5 flex justify-center items-center">
                        <svg viewBox="0 0 11 4" className="w-full h-full mt-5 -me-[50%] font-bold">
                            <text x="4" y="5.3" textAnchor="middle" fontSize="10" fill="none" strokeWidth=".015" stroke="#fff" fontFamily="sans-serif">3</text>
                        </svg>
                        <Image src={`/assets/images/money-heist-03.jpg`} alt="" width={500} height={500} className="w-[60%] h-60 object-cover object-top" />
					</CarouselItem>
					<CarouselItem className="basis-[18%] p-0 me-5 flex justify-center items-center">
                        <svg viewBox="0 0 11 4" className="w-full h-full mt-5 -me-[50%] font-bold">
                            <text x="4" y="5.3" textAnchor="middle" fontSize="10" fill="none" strokeWidth=".015" stroke="#fff" fontFamily="sans-serif">4</text>
                        </svg>
                        <Image src={`/assets/images/money-heist-01.jpg`} alt="" width={500} height={500} className="w-[60%] h-60 object-cover object-top" />
					</CarouselItem>
					<CarouselItem className="basis-[18%] p-0 me-5 flex justify-center items-center">
                        <svg viewBox="0 0 11 4" className="w-full h-full mt-5 -me-[50%] font-bold">
                            <text x="4" y="5.3" textAnchor="middle" fontSize="10" fill="none" strokeWidth=".015" stroke="#fff" fontFamily="sans-serif">5</text>
                        </svg>
                        <Image src={`/assets/images/money-heist-02.jpg`} alt="" width={500} height={500} className="w-[60%] h-60 object-cover object-top" />
					</CarouselItem>
				</CarouselContent>
			</Carousel>
        </div>
    )
}
export default NumberSlider