'use client';
import React from "react";
import Link from "next/link";

const NavigationBar = () => {
    return (
        <nav className="flex items-center justify-between bg-purple-500 ">
            <div >
                <Link href={'/'} className="px-3 py-6 ml-2 text-black cursor-pointer sm:text-2xl lg:text-3xl hover:text-slate-300">LOGO</Link>
            </div>
            <div className="flex mx-auto mr-2 text-xl">
                <Link className="mr-7 hover:text-slate-300" href={'/'}>Home</Link>
            </div>
        </nav>
    );
};

export default NavigationBar;
