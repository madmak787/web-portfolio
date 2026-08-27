import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

const Footer = ({cls='text-white'}) => {
    return (
        <div className={`container ${cls}`}>
            <ul className="flex gap-10 mt-20">
                <li><Link href={`/`}><Facebook className="w-10 h-10" /></Link></li>
                <li><Link href={`/`}><Instagram className="w-10 h-10" /></Link></li>
                <li><Link href={`/`}><Twitter className="w-10 h-10" /></Link></li>
                <li><Link href={`/`}><Youtube className="w-10 h-10" /></Link></li>
            </ul>
            <div className="flex w-full my-10">
                <ul className="flex flex-col gap-3 w-full">
                    <li><Link href={`/`}>Audio and Subtitles</Link></li>
                    <li><Link href={`/about`}>Media Centre</Link></li>
                    <li><Link href={`/contact`}>Privacy</Link></li>
                    <li><Link href={`/contact`}>Contact Us</Link></li>
                </ul>
                <ul className="flex flex-col gap-3 w-full">
                    <li><Link href={`/`}>Audio and Subtitles</Link></li>
                    <li><Link href={`/about`}>Media Centre</Link></li>
                    <li><Link href={`/contact`}>Privacy</Link></li>
                    <li><Link href={`/contact`}>Contact Us</Link></li>
                </ul>
                <ul className="flex flex-col gap-3 w-full">
                    <li><Link href={`/`}>Audio and Subtitles</Link></li>
                    <li><Link href={`/about`}>Media Centre</Link></li>
                    <li><Link href={`/contact`}>Privacy</Link></li>
                    <li><Link href={`/contact`}>Contact Us</Link></li>
                </ul>
                <ul className="flex flex-col gap-3 w-full">
                    <li><Link href={`/`}>Audio and Subtitles</Link></li>
                    <li><Link href={`/about`}>Media Centre</Link></li>
                    <li><Link href={`/contact`}>Privacy</Link></li>
                    <li><Link href={`/contact`}>Contact Us</Link></li>
                </ul>
            </div>
            <i className="block text-center my-2 text-[10px] font-normal">&copy; All Right Reserved.</i>
        </div>
    )
}
export default Footer