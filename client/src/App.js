// * dependencies:
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

// * utility  comp
import PrivateRoute from './components/PrivateRoute';

// * styling
import './CSS/index.css';

// * components: 
import LoginPage from './components/LoginPage';
import SignUpForm from './components/SignUpForm';
import MainObject from './components/MainObject';
import TruckList from './components/TruckList';
import SingleTruck from './components/SingleTruckView';

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



      <div className='header-img__logo'></div>
      <Switch>
          <Route exact path='/'>
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
          </Route>
          <PrivateRoute exact path='/trucks' component={TruckList} />
          {/* <Route path='/trucks' component={TruckList} /> */}
      </Switch>
      
   </div>

  )
};

export default App;


