"use client";
import React, { useState } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';

const RemoveButton =  ({deleteId}) => {
  // const [IsClickDeleteButton, setClickDeleteButton] = useState(false);

  const HandelRemoveButton = async() => {
    
    const DeleteId = deleteId;

    const Confirmed = confirm("Are you sure? ");
    if(Confirmed){
          await fetch(`http://localhost:3000/Api/Topics?id=${DeleteId}`, {
            method:"DELETE",
          });
        }
  }
  
  return (
    <div>
        <button onClick={HandelRemoveButton} className='text-red-400'>
            <HiOutlineTrash size={24} />
        </button>    
    </div>
  )
}

export default RemoveButton
