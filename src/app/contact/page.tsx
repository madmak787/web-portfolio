import Image from "next/image";
import Link from "next/link";
import Footer from "../portfolios/components/footer";
import ContactForm from "./components/form";

export default function Home() {
	return (
		<div className="min-h-screen overflow-x-hidden overflow-y-scroll">
			<div className="flex justify-between items-center p-5 shadow-[rgba(0,0,0,0.2)_0px_5px_5px_0px]">
				<Link href={`/`}>
					<Image src={`/assets/images/logo-web.png`} alt="Logo" height={90} width={200} className="object-contain object-center" />
				</Link>
				<Link href={`#`} className="text-2xl font-semibold">
					Sign In
				</Link>
			</div>

			<div className="flex flex-col justify-start items-start w-full max-w-[600px] mx-auto my-20">
				<p className="text-[1.8rem]">Step 1 of 1</p>
				<p className="text-[2.8rem] leading-[1.2] font-semibold my-5">Create a password to start your membership</p>
				<p className="text-[1.8rem] font-light">Just a few more steps and you're one!<br />We hate paperwork, too.</p>
				<ContactForm />
			</div>

			<div className="bg-[#F3F3F3] pt-1 pb-20">
				<Footer cls="" />
			</div>
		</div>
	);
}
