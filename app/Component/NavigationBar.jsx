'use client';
import React from "react";
import Link from "next/link";

const NavigationBar = () => {
    return (
        <div>
        <nav className="flex items-center justify-between text-white bg-orange-500 ">
            <div>
                <div >
                    <Link href={'/'} className="px-3 py-6 ml-2 cursor-pointer sm:text-2xl lg:text-3xl hover:text-slate-300">LOGO</Link>
                </div>
            </div>
            <div className="flex items-center ">
                <div className="flex px-3 py-6 mx-auto mr-4 text-xl">
                    <Link className=" hover:text-slate-300" href={'/'}>Home</Link>
                </div>
                <div className="flex px-3 py-6 mx-auto mr-4 text-xl">
                    <Link className=" hover:text-slate-300" href={'/'}>About</Link>
                </div>
                <div className="flex px-3 py-6 mx-auto mr-4 text-xl">
                    <Link className=" hover:text-slate-300" href={'/'}>Contact Us</Link>
                </div>
            </div>         
        </nav>    
        </div>
    );
};

export default NavigationBar;
