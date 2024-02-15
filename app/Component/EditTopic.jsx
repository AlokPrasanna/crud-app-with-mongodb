"use client";
import React, { useState } from 'react';
import {HiPencilAlt} from "react-icons/hi"

const EditTopic = () => {
  const [IsUpdateFormClose, setUpdateFormClose] = useState(false);
  
  const HandelHiPencilAltIcon = () => {
    setUpdateFormClose(true);
  }

    const HandelUpdateButton = () => {
        setUpdateFormClose(false);
    }
  return (
    <div>
         <button type='button' className='ml-4' onClick={HandelHiPencilAltIcon}>
                <HiPencilAlt size={24} />
         </ button>
        {IsUpdateFormClose &&
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="p-4 bg-white rounded shadow-lg">
                        <h2 className="mb-4 text-2xl font-bold">Edit Topic</h2>
                        <form>
                            <div className="flex flex-col gap-3 w-[700px]">
                                <input type="email" placeholder="Enter Topic" className="px-8 py-2 mt-1 border border-slate-400"  />
                                <input type="text" placeholder="Enter Discription" className="px-8 py-2 mt-1 border border-slate-400"  />
                            </div>
                            <button className="px-6 py-3 mt-3 font-semibold w-fit text-white bg-green-500 rounded-[5px] " type="button" onClick={HandelUpdateButton}>Update</button>
                        </form>
                    </div>
                </div>
      }   
    </div>
  )
}

export default EditTopic
