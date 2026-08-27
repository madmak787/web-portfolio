"use client";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const First = () => {
	useEffect(() => {
		gsap.to(".letter", {
            scrollTrigger: {
                trigger: "#first",
                start: "top center",
                end: "bottom center",
                markers: true,
            },
            y: 20,
            duration: 1.5,
            ease: "sine",
            stagger: 0.1,
            repeat: -1,
            yoyo: true,
        })

        gsap.to(".letter", {
            scrollTrigger: {
                trigger: "#second",
                start: "top center",
                end: "bottom center",
                markers: true,
            },
            y: 2000,
            zIndex: 99,
            duration: 0.5,
            ease: "sine",
            stagger: 0.1,
            repeat: 0,
            yoyo: false,
        })

        

	}, []);

	const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows`;

	return (
		<section id="first" className="snap-center h-screen w-full flex justify-center items-center bg-gradient-to-r from-black via-black to-black/90 relative z-40">
			<div className="flex flex-col justify-center items-center w-1/2">
				<h1 className="text-[#E50913] text-[4rem] font-black">MOHD AMIR KHAN</h1>
				<div className="flex gap-2">
					<Button className="bg-red-700 border-2 border-red-900 rounded-sm px-5 py-3" asChild>
						<Link href="mailto:madmak787@gmail.com">
							<Mail className="mr-2 h-4 w-4" /> Email
						</Link>
					</Button>
					<Button variant={`outline`} className="bg-transparent text-white rounded-sm px-5 py-3" asChild>
						<Link href="mailto:madmak787@gmail.com">
							<Mail className="mr-2 h-4 w-4" /> Email
						</Link>
					</Button>
					<Button className="bg-red-700 border-2 border-red-900 rounded-sm px-5 py-3" asChild>
						<Link href="mailto:madmak787@gmail.com">
							<Mail className="mr-2 h-4 w-4" /> Email
						</Link>
					</Button>
					<Button variant={`outline`} className="bg-transparent text-white rounded-sm px-5 py-3" asChild>
						<Link href="mailto:madmak787@gmail.com">
							<Mail className="mr-2 h-4 w-4" /> Email
						</Link>
					</Button>
				</div>
				<TextGenerateEffect words={words} />
			</div>
			<div className="flex justify-center items-center w-1/2">
				<Image src={`/assets/images/web-m.png`} alt="@madmak" width="500" height="500" className="letter w-full h-[70vh] object-contain opacity-30 -rotate-45" />
			</div>
		</section>
	);
};
export default First;
