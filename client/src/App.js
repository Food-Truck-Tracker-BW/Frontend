// * dependencies:
import React, { useState } from 'react';

import './CSS/index.css';

// * components: 
import LoginPage from './components/LoginPage';
import SignUpForm from './components/SignUpForm';
import MainObject from './components/MainObject';
function App() {

 
  const [ isNewUser, setIsNewUser ] = useState(false);

  // * sets local state if user selects new user
  const launchSignUp = (event) => {
    event.preventDefault()
    setIsNewUser(true);
  }
console.log("ghe")
  return (
    <div className="app-container">
      <div className='app-container__header-img'></div>

      {/* * conditionally renders form based on local state isNewUser */}
      {isNewUser
        ? 
          <SignUpForm /> 
        :
          <div>
            <button 
            className='app-container__button'
            onClick={launchSignUp}
            > I'm a New User </button> 
            <LoginPage />
          </div>
      }  
      <MainObject />
    </div>
  )
};

export default App;


