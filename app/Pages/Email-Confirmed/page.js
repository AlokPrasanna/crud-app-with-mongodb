'use client';
import React,{useEffect, useState, Fragment} from 'react';
import Image from 'next/image';
import NavigationBar from '../../Component/NavigationBar';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const EmailVerifyPage = () => {
  const [ValidUrl,setValidUrl] = useState(false);
  const Params = useParams();

  useEffect(() => {
    const VerifyEmailUrl = async () => {
      try {
        const Url = `http://localhost:3000/api/verify-email?userId=${Params.id}/&token=${Params.token}`
      } catch (error) {
        console.log(error);
        setValidUrl(false);
      }
    }
  })
   
  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <Fragment>
          { ValidUrl ? (
            <div className='flex flex-col items-center justify-center'>
              <Image className='mt-3 mb-3' src='/Images/success.png' alt='success-image'/>
              <h1 className='mb-3'>Email Verified Successfully</h1>
              <Link href='/'>
                <button className='text-white bg-green-500 rounded-[10px] text-center text-xl'>Login</button>
              </Link>
            </div>
          ) : (
            <h1>404 Page Not Found</h1>
          )}
        </Fragment>
      </div>
    </div>
  )
}

export default EmailVerifyPage
