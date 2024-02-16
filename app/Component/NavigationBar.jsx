'use client';
import React, { useState } from "react";
import Link from "next/link";

const NavigationBar = () => {
    const [IsSignInFormOpen, setSignInFormOpen] = useState(false);
    const [title, setTitle] = useState(" ");
    const [description, setDescription] = useState(" ");

    // console.log("Title", Title);
    // console.log("description", Description);

    const HandelCanselButton = () => {
        setTitle(" ");
        setDescription(" ");
        setSignInFormOpen(false);
      }
    

    const HandelSave = async (e) => {
        e.preventDefault();
        
        if(title.trim() === "" || description.trim() === ""){
          alert("Fill all field!");
          return;
        }else {        
            try {
            const res = await fetch("http://localhost:3000/Api/Topics/", {
                method:"POST",
                headers:{
                "Content-type": "application/json",
                },
                body: JSON.stringify( {title, description} )
            });
            
            if (!res.ok) {
                throw new Error("Failed to update topics details");
            }
        
            setSignInFormOpen(false);
            
            } catch (error) {
            console.log(error);
            }
        }
      }

    const HandelSignInButton = () =>{
        setSignInFormOpen(true);
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
                        <form onSubmit={HandelSave}>
                            <div className="flex flex-col gap-3 w-[700px]">
                                <input 
                                    type="text"
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}  
                                    placeholder="Enter Topic" 
                                    className="px-8 py-2 mt-1 border border-slate-400"  />
                                <input 
                                    type="text" 
                                    onChange={(e) => setDescription(e.target.value)}
                                    value={description} 
                                    placeholder="Enter Discription" 
                                    className="px-8 py-2 mt-1 border border-slate-400"  />
                            </div>
                            <div className='flex items-center justify-end'>
                              <button 
                                className="px-6 py-3 mt-3 font-semibold  text-white bg-green-500 rounded-[5px] " 
                                type="submit" 
                                onClick={HandelCanselButton}>Cansel</button>
                              <button
                                type="submit" 
                                className="px-6 py-3 mt-3 ml-2 font-semibold  text-white bg-green-500 rounded-[5px] " >Save
                              </button>
                        </div>
                        </form>
                    </div>
                </div>
                }
            </div>
        </nav>
    );
};

export default NavigationBar;
