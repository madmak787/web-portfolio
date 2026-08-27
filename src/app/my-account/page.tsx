import Header from "@/components/header";
import First from "./components/first";
import Second from "./components/second";
import Third from "./components/third";
import Fourth from "./components/fourth";

export default function MyAccount() {
	return (
		<>
			<div className="container relative z-50">
				<Header />
			</div>

			<div className="relative overflow-y-auto overflow-x-hidden overscroll-y-contain snap-mandatory snap-y h-screen w-full">
				<First />
				<Second />
				<Third />
				<Fourth />
			</div>
		</>
	);
}
