// * dependencies:
import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';


// * utility  comp
import PrivateRoute from './components/PrivateRoute';

// * styling
import './CSS/index.css';

// * components: 
import LoginPage from './components/LoginPage';
import SignUpForm from './components/SignUpForm';
import TruckList from './components/TruckList';
import ItemView from './components/SingleTruckView';

// * action creators
import * as actions from './actions/index';

function App(props) {
 
  const [ isNewUser, setIsNewUser ] = useState(false);

  // * sets local state if user selects new user
  const launchSignUp = (event) => {
    event.preventDefault()
    setIsNewUser(true);
  }

  return (
    <div className="app-container">
      
      <Route path='/trucks'>
        <nav className='app-container__nav-container'>
          <Link to='/trucks'>Trucks</Link>
          <Link to='/profile'>User Profile</Link>
        </nav>
      </Route>
      
      <Route path='/profile'>
        <nav className='app-container__nav-container'>
          <Link to='/trucks'>Trucks</Link>
          <Link to='/profile'>User Profile</Link>
        </nav>
      </Route>
      
      <Route path='/truck'>
        <nav className='app-container__nav-container'>
          <Link to='/trucks'>Trucks</Link>
          <Link to='/profile'>User Profile</Link>
        </nav>
      </Route>
      
      <div className='app-container__header-img'>
        <div className='app-container__logo-img'></div>
      </div>

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
          
          <Route 
              path='/truck/:id/' 
              render={() => (
                  <ItemView />
              )}
          />

          <Route 
            exact 
            path='/profile'
            render={() => (
              <div>profile page</div>
            )}
          />
      </Switch>
      
   </div>

  )
};

const mapStateToProps = state => ({ trucks: state.trucks });

export default connect(mapStateToProps, actions)(App)




