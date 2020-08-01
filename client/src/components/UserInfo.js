import React from 'react';
import { Route, Link, useParams } from 'react-router-dom'

import OperatorEditForm from './OperatorEditForm';
import UserTruckList from './UserTruckList';





const UserInfo = (props) => {

    const { id } = useParams();

    return (
    <div>
        <h1> {props.userinfo.username} </h1>
        <h1> {props.userinfo.email} </h1>


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