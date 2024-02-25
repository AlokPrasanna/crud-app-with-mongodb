import React from 'react';
import NavigationBar from '@/app/Component/NavigationBar';

const page = () => {
  return (
    <div>
      <NavigationBar />
      <div>
        <div className='flex items-center justify-center'>
            <h1 className='justify-center text-3xl font-bold'>Verify your email address before login to the system!</h1>
        </div>   
      </div>  
    </div>
  )
}

export default page
