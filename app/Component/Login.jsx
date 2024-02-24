'use client';
import React, { useState } from 'react';
import '../Styles/Login.css';

const HomePage = ({onSignUpButtonClick}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <section className="m-2  sm:w-1/4 mx-auto text-slate-200 bg-[#424242] flex items-center justify-center">
      <div className="py-5 ">
        <div>
          <div className="p-5">
            <div className="flex flex-col items-center">
              <h4 className="pb-1 mt-4 mb-5 text-2xl font-bold text-center">We are The Skill Vault Team</h4>
            </div>
            <form className="max-w-md mx-auto">
              <p className="mb-4 text-lg font-semibold">Please login to your account</p>
              <div className="relative mb-4 ">
                <input
                  type="email"
                  id="form2Example11"
                  className= {`form-control bg-[#424242] focus:outline-none focus:border-b-green-500 ${username ? 'border-b border-green-500' : 'border-b border-white'} `}
                  placeholder=" "
                  value={username}
                  onChange={handleUsernameChange}
                />
                <label className={`form-label ${username ? 'small' : ''}`} htmlFor="form2Example11">Email</label>
              </div>
              <div className="relative mb-4 ">
                <input
                  type="password"
                  id="form2Example22"
                  className={`form-control bg-[#424242] focus:outline-none focus:border-b-green-500 ${password ? 'border-b-2 border-green-500' : 'border-b border-white'}`}
                  placeholder=" "
                  value={password}
                  onChange={handlePasswordChange}
                />
                <label className={`form-label ${password ? 'small' : ''}`} htmlFor="form2Example22">Password</label>
              </div>
              <div className="flex flex-col mb-4 sm:flex-row sm:items-center sm:justify-between">
                <button className="px-2 py-3 text-white rounded-lg sm:w-[230px] bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 hover:text-gray-700">LOG IN</button>
                <a className="mt-2 ml-4 text-center text-white hover:text-gray-300" href="#!">Forgot password?</a>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-medium">Don't have an account?</p>
                <button type="button" className="px-4 py-2 text-red-500 border border-red-500 text-semibold hover:border-green-600" onClick={onSignUpButtonClick} >SIGN UP</button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default HomePage;
