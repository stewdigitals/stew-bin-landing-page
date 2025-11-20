'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/constants/navLinks';
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const [activeHash, setActiveHash] = useState<string>("/#home");

    React.useEffect(() => {
        const updateHash = () => {
            setActiveHash(window.location.hash ? `/${window.location.hash}` : "/#home");
        };

        updateHash(); // set on load
        window.addEventListener("hashchange", updateHash);

        return () => window.removeEventListener("hashchange", updateHash);
    }, []);


    return (
        <>
            {/* TOP NAVBAR */}
            <header className="w-full  bg-green-500 shadow-lg fixed top-0 left-0 z-50 font-poppins">
                <div className="max-w-[1200px] overflow-clip mx-auto flex items-center justify-between px-4 md:px-8 h-16">

                    {/* LEFT — LOGO */}
                    <a href="/" className="flex bg-white items-center gap-2">
                        <Image
                            src="/logo.png"     // update your logo path
                            alt="Logo"
                            width={40}
                            height={40}
                            className=" w-18 h-18 object-contain"
                        />

                    </a>

                    {/* /* RIGHT — MENU (Desktop)  */}
                    <nav className="hidden md:flex gap-6 relative">
                        {navLinks.map(({ name, path }) => {
                            const isActive = activeHash === path;

                            return (
                                <a
                                    key={name}
                                    href={path}
                                    className={`uppercase relative tracking-wide px-3 py-1 transition-all 
                    ${isActive ? 'text-black font-bold' : 'text-white hover:text-black'}
                `}
                                >
                                    {name}

                                    {/* ACTIVE INDICATOR */}
                                    {isActive && (
                                        <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-black rounded-full"></span>
                                    )}

                                    {/* HOVER INDICATOR */}
                                    {!isActive && (
                                        <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-white transition-all duration-300"></span>
                                    )}
                                </a>
                            );
                        })}
                    </nav>



                    {/* HAMBURGER MENU (Mobile) */}
                    <button
                        className="md:hidden text-white text-2xl"
                        onClick={() => setOpen(true)}
                    >
                        <CiMenuBurger className='text-3xl' />
                    </button>
                </div>
            </header>

            {/* MOBILE SIDEBAR OVERLAY */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/60 z-40 md:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* MOBILE SIDEBAR */}
            <aside
                className={`fixed top-0 right-0 h-full w-64 bg-green-500  z-50 transform transition-transform duration-300 md:hidden ${open ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex justify-end items-center px-4 h-16 ">
                    <button
                        onClick={() => setOpen(false)}
                        className="text-2xl text-gray-700"
                    >
                        <TfiClose className='text-2xl' />
                    </button>
                </div>

                <ul className="flex flex-col gap-4 px-6 py-6">
                    {navLinks.map(({ name, path }) => (
                        <li key={name}>
                            <a
                                href={path}
                                onClick={() => setOpen(false)}
                                className={`block text-base py-2 px-2 rounded transition 
        ${activeHash === path
                                        ? 'bg-white text-green-600 font-semibold shadow-sm'
                                        : 'text-white hover:bg-white/20'
                                    }
    `}
                            >
                                {name}
                            </a>

                        </li>
                    ))}
                </ul>
            </aside>
        </>
    );
};

export default Navbar;
