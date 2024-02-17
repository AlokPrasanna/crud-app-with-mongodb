import React from 'react';
import NavigationBar from '../Component/NavigationBar';
import TopicCard from '../Component/TopicCard';
import AddTopic from '../Component/AddTopic';

const HomePage = () => {
  return (
    <div>
        <div><NavigationBar /></div>
        <div>
          <AddTopic/>
        </div>
        <div>
          <TopicCard />
        </div>     
    </div>
  )
}

export default HomePage
