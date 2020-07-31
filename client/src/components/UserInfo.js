import React from 'react';
import { Route } from 'react-router-dom'

import OperatorEditForm from './OperatorEditForm';
import UserTruckList from './UserTruckList';





const UserInfo = (props) => {



    return (
    <div>
        <h1> {props.userinfo.username} </h1>
        <h1> {props.userinfo.email} </h1>

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