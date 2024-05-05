"use client"
import Image from 'next/image';
import Logo from '../public/Logo.svg';
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { FaTelegramPlane, FaDiscord, FaTwitter } from "react-icons/fa";
import Link from 'next/link';
import { useRef } from 'react';

export default function NavBar() {

    const drawerRef = useRef<HTMLDivElement>(null);

    const handleLabelClick = () => {
        if (drawerRef.current) {
            drawerRef.current.click();
        }
    };

    return (
        <nav className="w-full top-0 absolute px-7 py-5 flex justify-between items-center z-[99]">
            <Image alt='logo' src={Logo} className='h-6'></Image>
            <ul className='hidden lg:flex gap-7 items-center font-bold text-white'>
                <li>
                    Creon Pass
                </li>
                <li className='flex gap-1'>
                    Token
                    <span className='self-start bg-black rounded-full px-1 py-[2px] text-[0.5rem] text-purple-600'>SOON</span>
                </li>
                <li className='flex gap-1'>
                    AI Revenue
                    <span className='self-start bg-black rounded-full px-1 py-[2px] text-[0.5rem] text-purple-600'>SOON</span>
                </li>
                <li className='flex gap-1'>
                    AI Launchpad
                    <span className='self-start bg-black rounded-full px-1 py-[2px] text-[0.5rem] text-purple-600'>SOON</span>
                </li>
                <button className='py-1 px-4 border-2 rounded-lg border-white'>
                    Connect
                </button>
            </ul>
            <div className="drawer drawer-end flex justify-end lg:hidden">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" ref={drawerRef}/>
                <div className="drawer-content">
                    <label htmlFor="my-drawer-4" className="drawer-button btn bg-Blue px-3 border-0">
                        <IoMenu className="stroke-white text-2xl"/>
                    </label>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu w-[60%] min-h-full text-base-content bg-black flex flex-col justify-between">
                        <div className='flex flex-col gap-10 p-5'>
                            <div className="flex flex-row justify-between">
                                <button className="py-1 px-4 border-2 rounded-lg border-white text-white">
                                    Connect
                                </button>
                                <button onClick={handleLabelClick}>
                                    <IoIosClose className="fill-white bg-Blue rounded-lg text-2xl" size={35}/>
                                </button>
                            </div>
                            <ul className='flex flex-col gap-4 text-white text-xl font-bold'>
                                <span className="w-full h-[1px] bg-[#13171D]"/>
                                <li>Creon Pass</li>
                                <span className="w-full h-[1px] bg-[#13171D]"/>
                                <li className='relative gap-1'>
                                    Token<span className='absolute -top-1 right-20 self-start bg-black rounded-full px-1 py-[2px] text-xs text-Purple'>SOON</span>
                                </li>
                                <span className="w-full h-[1px] bg-[#13171D]"/>
                                <li className="relative gap-1">
                                    AI Revenue
                                    <span className='absolute -top-1 right-10 self-start bg-black rounded-full px-1 py-[2px] text-xs text-Purple'>SOON</span>
                                </li>
                                <span className="w-full h-[1px] bg-[#13171D]"/>
                                <li className='relative gap-1'>
                                    AI Launchpad
                                    <span className='absolute -top-1 right-5 self-start bg-black rounded-full px-1 py-[2px] text-xs text-Purple'>SOON</span>
                                </li>
                                <span className="w-full h-[1px] bg-[#13171D]"/>
                            </ul>
                        </div> 
                        <div className="flex gap-3 p-5">
                            <Link href="https://www.niftables.com/" target="_blank" className="p-[6px] border-2 border-white rounded-full">
                                <FaTelegramPlane size={25} className='fill-white'/>
                            </Link>
                            <Link href="https://www.niftables.com/" target="_blank" className="p-[6px] border-2 border-white rounded-full">
                                <FaDiscord size={25} className='fill-white'/>
                            </Link>
                            <Link href="https://www.niftables.com/" target="_blank" className="p-[6px] border-2 border-white rounded-full">
                                <FaTwitter size={25} className='fill-white'/>
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
