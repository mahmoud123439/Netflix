import {React, useState } from 'react';
import './LoginScreen.css';
import SignUpScreen from '../SignUpScreen/SignUpScreen';
const LoginScreen = () => {
  const [SignIn, setSignIn ] = useState(false);

  return (
    <div className="LoginScreen">
        <div className="LoginScreen-background">
            <img 
                src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" 
                className='LoginScreen-logo'
                alt=""/>
            <button 
              onClick={() => setSignIn(true)}
              className='LoginScreen-button'>
                Sign in
            </button>
            <div className='LoginScreen-gradient'/>
        </div>
        <div className='LoginScreen-body'>
          {SignIn ? (
            <SignUpScreen /> 
          ) :(
            <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className='LoginScreen-input'>
              <form>
                <input type="email" placeholder='Email Address' />
                <button
                  onClick={() => setSignIn(true)}
                  className='LoginScreen-getStarted'>
                  GET STARTED
                </button>
              </form>
            </div>
          </>
          )}
          
        </div>
    </div>
  );
}

export default LoginScreen;