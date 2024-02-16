'use client';
import React, { useEffect, useState } from 'react';
import RemoveButton from './RemoveButton';
import EditTopic from './EditTopic';

const TopicCard = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/Api/Topics/', {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch topics details");
        }
        
        const data = await res.json();
        //console.log(data);

        setTopics(data); 
      } catch (error) {
        console.log("Error loading topics: ", error);
      }
    };

    fetchData();
  }, []); 

  console.log(topics);
  return (
    <div>
      {Array.isArray(topics) && topics.map(topic => (
        <div key={topic._id} className='flex items-start justify-between w-[1000px] gap-5 p-4 mx-auto my-3 border border-slate-300'>
          <div>
            <h2 className='text-2xl font-bold'>{topic.title}</h2>
            <p>{topic.description}</p>
          </div>
          <div className='flex items-center '>
            <RemoveButton deleteId={topic._id} />
            <EditTopic editId={topic._id} />
          </div>
        </div>
      ))}
    </div>  
  );
}

export default TopicCard;
