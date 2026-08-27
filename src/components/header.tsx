import { Bell, ChevronDown, Search, Smile } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Header = () => {
    return (
        <header className="absolute top-0 left-0 right-0 p-10 flex justify-start items-center gap-5 z-10 text-white">
				<Link href={`/`} className="">
					<Image src={`/assets/images/logo-web.png`} alt="madmak787" width={300} height={150} className="object-contain object-center w-60 h-auto" />
				</Link>
				<ul className="flex justify-start items-center gap-10 w-full ms-10">
					<li className="">
						<Link href={`/`} className="font-bold">
							Home
						</Link>
					</li>
					<li className="">
						<Link href={`/portfolios`} className="">
							Portfolio
						</Link>
					</li>
					<li className="">
						<Link href={`/portfolios-1`} className="">
							Portfolio
						</Link>
					</li>
					<li className="">
						<Link href={`/contact`} className="">
							Contact
						</Link>
					</li>
					<li className="">
						<Link href={`/my-account`} className="">
							Account
						</Link>
					</li>
				</ul>

				<div className="flex justify-end items-center gap-5">
					<Link href={`#`} className="">
						<Search />
					</Link>
					<Link href={`#`} className="">
						<Bell />
					</Link>
					<DropdownMenu>
						<DropdownMenuTrigger className="flex justify-center items-center gap-1 focus-visible:outline-none">
							<Smile className="bg-blue-600 rounded w-10 h-10 p-2" />
							<ChevronDown />
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Profile</DropdownMenuItem>
							<DropdownMenuItem>Billing</DropdownMenuItem>
							<DropdownMenuItem>Team</DropdownMenuItem>
							<DropdownMenuItem>Subscription</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</header>
    )
}
export default Header