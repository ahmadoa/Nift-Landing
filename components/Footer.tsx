import { FaTelegramPlane, FaDiscord, FaTwitter } from "react-icons/fa";
import Link from 'next/link';


export default function Footer(){
    return (
        <section className="w-full absolute bottom-0 text-white px-5 lg:px-36 py-5 flex justify-between items-center z-50">
            <div className="flex flex-row items-center gap-10 text-white">
                <span className="text-xs lg:text-sm" >&copy; Creon 2023. All rights reserved.</span>
                <div className="gap-2 hidden lg:flex">
                    <Link href="https://www.niftables.com/" target="_blank" className="p-[6px] border-2 border-white rounded-full">
                        <FaTelegramPlane size={16}/>
                    </Link>
                    <Link href="https://www.niftables.com/" target="_blank" className="p-[6px] border-2 border-white rounded-full">
                        <FaDiscord size={16}/>
                    </Link>
                    <Link href="https://www.niftables.com/" target="_blank" className="p-[6px] border-2 border-white rounded-full">
                        <FaTwitter size={16}/>
                    </Link>
                </div>
            </div>
            <div className="text-sm text-white">Powered by <span className="font-bold uppercase text-white">NIFTABLES</span></div>
        </section>
    )
}