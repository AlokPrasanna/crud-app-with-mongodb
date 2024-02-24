'use client';
import React,{useState} from 'react';

const Registration = ({onLoginButtonClick}) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <section className="m-2  sm:w-1/4 mx-auto bg-[#424242]">
        <div className="py-5 ">
        <div>
            <div className="p-5">
            <div className="flex flex-col items-center">
                <h4 className="pb-1 mt-4 mb-5 text-2xl font-bold text-center text-white">We are The Skill Vault Team</h4>
            </div>
            <form className="max-w-md mx-auto">
                <p className="mb-4 text-lg font-semibold text-white">Create your account</p>
                <div className="relative mb-4 ">
                <input
                    type="text"
                    id="firstName"
                    className= {`form-control bg-[#424242] focus:outline-none focus:border-b-green-500 ${firstName ? 'border-b border-green-500' : 'border-b border-white'} `}
                    placeholder=" "
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
                <label className={`form-label ${firstName ? 'small' : ''}`} htmlFor="firstName">First Name</label>
                </div>
                <div className="relative mb-4 ">
                <input
                    type="text"
                    id="lastName"
                    className= {`form-control bg-[#424242] focus:outline-none focus:border-b-green-500 ${lastName ? 'border-b border-green-500' : 'border-b border-white'} `}
                    placeholder=" "
                    value={lastName}
                    onChange={handleLastNameChange}
                />
                <label className={`form-label ${lastName ? 'small' : ''}`} htmlFor="lastName">Last Name</label>
                </div>
                <div className="relative mb-4 ">
                <input
                    type="email"
                    id="email"
                    className= {`form-control bg-[#424242] focus:outline-none focus:border-b-green-500 ${email ? 'border-b border-green-500' : 'border-b border-white'} `}
                    placeholder=" "
                    value={email}
                    onChange={handleEmailChange}
                />
                <label className={`form-label ${email ? 'small' : ''}`} htmlFor="email">Email</label>
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
                <div className="flex flex-col mb-4 sm:flex-row sm:items-center sm:justify-center">
                <button className="px-2 py-3 text-white rounded-lg sm:w-[230px] bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 hover:text-gray-700">SIGN UP</button>
                </div>
                <div className="flex items-center justify-between">
                 <p className='text-white '>Already  have an account?</p> 
                <button type="button" className="px-4 py-2 text-red-500 border border-red-500 text-semibold hover:border-green-600" onClick={onLoginButtonClick}>LOG IN</button>
                </div>
            </form>
            </div>
            
            </div>
        </div>
</section>
  )
}

export default Registration
