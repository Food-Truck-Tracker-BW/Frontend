import React from 'react';


const UserInfo = (props) => {

    return (
    <div>
        <h1> {props.username} </h1>
        <h1> {props.email} </h1>
    </div>
    )
};

export default UserInfo;