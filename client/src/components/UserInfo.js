import React from 'react';
import { Route, Link, useParams } from 'react-router-dom'

import OperatorEditForm from './OperatorEditForm';
import UserTruckList from './UserTruckList';





const UserInfo = (props) => {

    const { id } = useParams();

    return (
    <div className='user-info-container'>
  
    <div className='user-account'>
        <div className='location-container'>
            <span>Username: </span>
            <p className="truck-location">{props.userinfo.username}</p>
        </div>
        
        <div className='location-container'>
            <span>Email: </span>
            <p className="truck-location">{props.userinfo.email}</p>
        </div>
    </div>
    
    <Route exact path='/profile/:id'>
        <Link to={`/profile/${id}/edit`}>
            <button> Edit Account </button>
        </Link>
    </Route>

    <Route 
        path='/profile/:id/edit'
        component={OperatorEditForm}
    />

    <Route
        path='/profile/:id'
        component={UserTruckList}
    />


    </div>
    )
};

export default UserInfo;