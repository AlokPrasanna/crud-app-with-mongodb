'use client';
import React, { useState } from "react";
import Link from "next/link";

const NavigationBar = () => {
    const [IsSignInFormOpen, setSignInFormOpen] = useState(false);

    const HandelSignInButton = () =>{
        setSignInFormOpen(true);
    }
    const HandleFormClose = () => {
        setSignInFormOpen(false);
    }
    return (
        <nav className="flex items-center justify-between bg-purple-500 ">
            <div >
                <Link href={'/'} className="px-3 py-6 ml-2 text-black cursor-pointer sm:text-2xl lg:text-3xl hover:text-slate-300">LOGO</Link>
            </div>
            <div className="flex mx-auto mr-2 text-xl">
                <Link className="mr-7 hover:text-slate-300" href={'/'}>Home</Link>
                <button className=" hover:text-slate-300" type="button" onClick={HandelSignInButton}>Add Topic</button>
                {IsSignInFormOpen &&
                    <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="p-4 bg-white rounded shadow-lg">
                        <h2 className="mb-4 text-2xl font-bold">Add Topic</h2>
                        <form>
                            <div className="flex flex-col gap-3 w-[700px]">
                                <input type="email" placeholder="Enter Topic" className="px-8 py-2 mt-1 border border-slate-400"  />
                                <input type="text" placeholder="Enter Discription" className="px-8 py-2 mt-1 border border-slate-400"  />
                            </div>
                            <button className="px-6 py-3 mt-3 font-semibold w-fit text-white bg-green-500 rounded-[5px] " type="button" onClick={HandleFormClose}>Save</button>
                        </form>
                    </div>
                </div>
                }
            </div>
        </nav>
    );
};

export default NavigationBar;
