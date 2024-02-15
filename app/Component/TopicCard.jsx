'use client';
import React from 'react';
import RemoveButton from './RemoveButton';

import EditTopic from './EditTopic';
 
const TopicCard = () => {
  return (
    <div className='flex items-start justify-between w-[1000px] gap-5 p-4 mx-auto my-3 border border-slate-300'>
        <div>
            <h2 className='text-2xl font-bold'>Topic Title</h2>
            <div>Topic Discription</div>
        </div>
        <div className='flex items-center '>
            <RemoveButton  />
            <EditTopic />
        </div>
    </div>
  )
}

export default TopicCard
