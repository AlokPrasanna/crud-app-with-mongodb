'use client';
import React,{useState} from "react";
import Login from '../../Component/Login';
import Registration from "../../Component/Registration";
import NavigationBar from '../../Component/NavigationBar';

const HomePage = () => {  
  const [ShowLogin, setShowLogin] = useState(true);
  const [ShowRegistration, setShowRegistration] = useState(false);

  const HandleLoginButton = () => {
      setShowLogin(true);
      setShowRegistration(false); 
  };

  const HandleRegisterButton = () => {
      setShowRegistration(true);
      setShowLogin(false); 
  }; 
  return (
    <div>
      <NavigationBar />
      <div>
        {ShowLogin && <Login onSignUpButtonClick={HandleRegisterButton} />}
        {ShowRegistration && <Registration onLoginButtonClick={HandleLoginButton}  />}
      </div>
    </div>
  )
}

export default HomePage
