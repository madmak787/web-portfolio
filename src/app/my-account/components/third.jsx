'use client'
import { MatrixRainingLetters } from "react-mdr";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Image from "next/image";
import { Play, Plus, ThumbsUp } from "lucide-react";

const Third = () => {
    const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

    return (
        <div className="snap-center h-screen w-screen flex justify-center relative bg-black z-40">
            <MatrixRainingLetters custom_class="absolute top-0 left-0 right-0 bottom-0 z-10" />
            <div className="flex flex-col justify-center items-center text-white relative z-40 w-[60vw]">
                <h1 className="text-[4rem] font-black mb-10">
                    <span className="text-[#E50913]">Professional </span>
                    Experience
                </h1>
                <Carousel className="w-full max-w-sm" plugins={[plugin.current]} opts={{align: "center",loop: true,}}>
                    <CarouselContent className="-ml-1 w-[15rem]">
                        <CarouselItem key={1} className="pl-1 basis-1">
                            <div className="p-2 w-20 h-20">
                                <Image src={`/assets/images/experience-01.jpg`} alt="experience" height="300" width="400" className="w-full object-cover" />
                                <div className="flex flex-col gap-2 justify-center items-start bg-[#DB202C] text-black py-2 px-4">
                                    <h2 className="text-2xl font-bold text-white">Lead Software Engineer</h2>
                                    <div className="flex gap-1">
                                        <Play className="bg-white rounded-full p-2 w-8 h-8" />
                                        <Plus className="border-white text-white border rounded-full p-2 w-8 h-8" />
                                        <ThumbsUp className="border-white text-white border rounded-full p-2 w-8 h-8" />
                                    </div>
                                    <ul className="text-[10px] text-white break-all list-disc">
                                        <li>Worked with cross-functional teams to ensure successful implementation of new technologies.</li>
                                        <li>Coordinated with clients to understand their requirements and provided solutions accordingly.</li>
                                        <li>Conducted regular meetings with the team to ensure smooth functioning of the project.</li>
                                    </ul>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem key={2} className="pl-1 basis-1">
                            <div className="p-2 w-20 h-20">
                                <Image src={`/assets/images/experience-01.jpg`} alt="experience" height="300" width="400" className="w-full object-cover" />
                                <div className="flex flex-col gap-2 justify-center items-start bg-[#DB202C] text-black py-2 px-4">
                                    <h2 className="text-2xl font-bold text-white">Lead Software Engineer</h2>
                                    <div className="flex gap-1">
                                        <Play className="bg-white rounded-full p-2 w-8 h-8" />
                                        <Plus className="border-white text-white border rounded-full p-2 w-8 h-8" />
                                        <ThumbsUp className="border-white text-white border rounded-full p-2 w-8 h-8" />
                                    </div>
                                    <ul className="text-[10px] text-white break-all list-disc">
                                        <li>Worked with cross-functional teams to ensure successful implementation of new technologies.</li>
                                        <li>Coordinated with clients to understand their requirements and provided solutions accordingly.</li>
                                        <li>Conducted regular meetings with the team to ensure smooth functioning of the project.</li>
                                    </ul>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem key={3} className="pl-1 basis-1">
                            <div className="p-2 w-20 h-20">
                                <Image src={`/assets/images/experience-01.jpg`} alt="experience" height="300" width="400" className="w-full object-cover" />
                                <div className="flex flex-col gap-2 justify-center items-start bg-[#DB202C] text-black py-2 px-4">
                                    <h2 className="text-2xl font-bold text-white">Lead Software Engineer</h2>
                                    <div className="flex gap-1">
                                        <Play className="bg-white rounded-full p-2 w-8 h-8" />
                                        <Plus className="border-white text-white border rounded-full p-2 w-8 h-8" />
                                        <ThumbsUp className="border-white text-white border rounded-full p-2 w-8 h-8" />
                                    </div>
                                    <ul className="text-[10px] text-white break-all list-disc">
                                        <li>Worked with cross-functional teams to ensure successful implementation of new technologies.</li>
                                        <li>Coordinated with clients to understand their requirements and provided solutions accordingly.</li>
                                        <li>Conducted regular meetings with the team to ensure smooth functioning of the project.</li>
                                    </ul>
                                </div>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}
export default Third