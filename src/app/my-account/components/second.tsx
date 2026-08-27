import BgSlider from "@/app/components/bg-slider"

const Second = () => {

    return (
        <section id="second" className="snap-center h-screen w-full flex justify-center items-center relative z-40">
            <div className="absolute top-0 left-0 right-0 bottom-0 z-10">
                <BgSlider />
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 z-20 bg-gradient-to-tr from-black via-black/90 to-transparent"></div>
            <div className="flex flex-col justify-center items-center text-white relative z-20">
                <h1 className="text-[4rem] font-black"><span className="text-[#E50913]">SKILLS</span> & INTERESTS</h1>
                <p className="m-auto w-[50vw] text-center">
                    Proficient in PHP, ReactJS and Wordpress, Can easily transform PSD to HTML using CSS and
                    Media Queries, Have good knowledge of Bootstrap, Worked on Tailwind, Having a good knowledge of
                    CodeIgniter, Apart from that I have knowledge of Saas, Less, NextJS, NodeJS, ExpressJS. Hands on
                    experience of FabricJS, Cordova, GSAP and some additional web plugins. Also I have some knowledge
                    of Photoshop and DaVinci Resolve.
                </p>
            </div>
        </section>
    )
}
export default Second