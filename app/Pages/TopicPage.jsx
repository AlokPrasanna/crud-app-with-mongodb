import React from 'react';
import NavigationBar from '../Component/NavigationBar';
import TopicCard from '../Component/TopicCard';

const HomePage = () => {
  return (
    <div>
        <div><NavigationBar /></div>
        <div>
            <TopicCard />
        </div>     
    </div>
  )
}

export default HomePage
