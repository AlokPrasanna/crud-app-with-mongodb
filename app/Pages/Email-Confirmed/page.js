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
        const Url = `http://localhost:3000/api/verify-email?userId=${Params.id}/&token=${Params.token}`;
        setValidUrl(true);
      } catch (error) {
        console.log(error);
        setValidUrl(false);
      }
    }

    VerifyEmailUrl();
  },[])
   
  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <Fragment>
          { ValidUrl ? (
            <div className='flex flex-col items-center justify-center'>
              <Image className='mt-3 mb-3' width={200} height={200} src='/Images/success.png' alt='success-image'/>
              <h1 className='mb-3 text-3xl font-semibold'>Email Verified Successfully</h1>
              <Link href='/'>
                <button className='text-white bg-green-500 rounded-[10px] text-2xl text-center px-3 py-2 w-[100%]'>Login</button>
              </Link>
            </div>
          ) : (
            <div className='flex items-center justify-center'>
              <h1 className='justify-center text-3xl font-bold'>404 | Page Not Found</h1>
            </div>   
          )}
        </Fragment>
      </div>
    </div>
  )
}

export default EmailVerifyPage
