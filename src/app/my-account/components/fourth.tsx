'use client'
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadBigCirclesPreset } from "@tsparticles/preset-big-circles";
import { Londrina_Outline } from 'next/font/google'

const londrina = Londrina_Outline({
    subsets: ["latin"],
    weight: "400"
})

const Fourth = () => {
	const [init, setInit] = useState(false);

	// this should be run only once per application lifetime
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadBigCirclesPreset(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = async (container?: Container): Promise<void> => {
		// console.log(container);
	};

	const options: ISourceOptions = useMemo(
		() => ({
			background: {
				color: {
					value: "#000/",
				},
			},
			fpsLimit: 120,
			interactivity: {
				events: {
					onClick: {
						enable: true,
						mode: "push",
					},
					onHover: {
						enable: true,
						mode: "repulse",
					},
				},
				modes: {
					push: {
						quantity: 4,
					},
					repulse: {
						distance: 200,
						duration: 0.4,
					},
				},
			},
			particles: {
				color: {
					value: "#ffffff",
				},
				links: {
					color: "#ffffff",
					distance: 150,
					enable: true,
					opacity: 0.5,
					width: 1,
				},
				move: {
					direction: MoveDirection.none,
					enable: true,
					outModes: {
						default: OutMode.out,
					},
					random: false,
					speed: 6,
					straight: false,
				},
				number: {
					density: {
						enable: true,
					},
					value: 80,
				},
				opacity: {
					value: 0.5,
				},
				shape: {
					type: "circle",
				},
				size: {
					value: { min: 1, max: 5 },
				},
			},
			detectRetina: true,
		}),
		[]
	);
	return (
		<div className="snap-center h-screen w-screen flex justify-center relative bg-black z-20">
			<Particles className="absolute top-0 bottom-0 left-0 right-0 bg-black" id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
            <div className="flex flex-col justify-center items-center text-white relative z-40">
                <h1 className="text-[4rem] font-black mb-10">Education</h1>
                <div className="flex gap-2">
                    <p className="flex text-center gap-5 justify-center items-center text-2xl w-96">
                        <span className={`${londrina.className} text-[6rem] text-[#E50913]`}>01</span>
                        B-Tech in<br/>Computer Science
                    </p>
                    <p className="flex text-center gap-5 justify-center items-center text-2xl w-96">
                        <span className={`${londrina.className} text-[6rem] text-[#E50913]`}>02</span>
                        B-Tech in<br/>Computer Science
                    </p>
                    <p className="flex text-center gap-5 justify-center items-center text-2xl w-96">
                        <span className={`${londrina.className} text-[6rem] text-[#E50913]`}>03</span>
                        B-Tech in<br/>Computer Science
                    </p>
                </div>
            </div>
            
		</div>
	);
};
export default Fourth;
