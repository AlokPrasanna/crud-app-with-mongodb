"use client";
import React, { useState } from 'react';
import {HiPencilAlt} from "react-icons/hi";
import { useRouter } from 'next/router';

const GetTopicById = async(id) => {
  try {
    const res = await fetch(`http://localhost:3000/Api/Topics/${id}`, {
      cache:"no-store"
    });

    if(!res.ok){
      throw new Error("Faild to fetch error");
    }
    
    return res.json();
    
  } catch (error) {
    console.log(error);
  }
}

const EditTopic =  ({editId}) => {
  const [IsUpdateFormOpen, setUpdateFormStatus] = useState(false);
  const [NewTitle, setNewTitle] = useState(" ");
  const [NewDescription, setNewDescription] = useState(" ");
  
  const EditId = editId;
  let {topic} = 0;
  
  const HandelHiPencilAltIcon = async() => {
    topic = await GetTopicById(EditId)
    setNewTitle(topic.title);
    setNewDescription(topic.description);
    // console.log(NewTitle);
    // console.log(NewDescription);
    setUpdateFormStatus(true);
  }

  const HandelCanselButton = () => {
    setNewTitle(" ");
    setNewDescription(" ");
    setUpdateFormStatus(false);
  }

  const HandelUpdate = async (e) => {
    e.preventDefault();

    const newTitle = NewTitle;
    const newDescription = NewDescription;
    
    try {
      const res = await fetch(`http://localhost:3000/Api/Topics/${EditId}`, {
        method:"PUT",
        headers:{
          "Content-type": "application/json",
        },
        body: JSON.stringify({newTitle,newDescription})
      });
      
      if (!res.ok) {
        throw new Error("Failed to update topics details");
      }

      setNewTitle(" ");
      setNewDescription(" ");
      setUpdateFormStatus(false);
      
    } catch (error) {
      
    }
  }
  return (
    <div>
         <button type='button' className='ml-4' onClick={HandelHiPencilAltIcon}>
                <HiPencilAlt size={24} />
         </ button>
        {IsUpdateFormOpen &&
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="p-4 bg-white rounded shadow-lg">
                        <h2 className="mb-4 text-2xl font-bold">Edit Topic</h2>
                        <form onSubmit={HandelUpdate}>
                            <div className="flex flex-col gap-3 w-[700px]">
                                <input
                                  onChange={(e) => setNewTitle(e.target.value)}
                                  value={NewTitle} 
                                  type="text" 
                                  className="px-8 py-2 mt-1 border border-slate-400"  />
                                <input 
                                  onChange={(e) => setNewDescription(e.target.value)}
                                  value={NewDescription} 
                                  type="text"  
                                  className="px-8 py-2 mt-1 border border-slate-400"  />
                            </div>  
                             <div className='flex items-center justify-end'>
                              <button 
                                className="px-6 py-3 mt-3 font-semibold  text-white bg-green-500 rounded-[5px] " 
                                type="button" 
                                onClick={HandelCanselButton}>Cansel</button>
                              <button
                                type="submit" 
                                className="px-6 py-3 mt-3 ml-2 font-semibold  text-white bg-green-500 rounded-[5px] " >Update
                              </button>
                        </div>
                        </form>  
                    </div>
                </div>
      }   
    </div>
  )
}

export default EditTopic
