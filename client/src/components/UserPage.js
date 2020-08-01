// * dependencies
import React, {useState, useEffect} from 'react';
import { useParams, Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';


// * components

import UserInfo from './UserInfo';


// * action creators
import * as actions from '../actions/index';


// * mock user 
const testuser = {
    id:	2,
    username: "testUser2",
    email: "test2@yahoo.com",
    password: "$2a$14$vaAafHs8fVVtW7suW8O.bOIJD3jnc2dhMh9mffW0OdCL.2LAlBIzG",
    is_operator: false
}

const UserPage = (props) => {

    const { id } = useParams();
    const [ isLoaded, setIsLoaded ] = useState(true);

    // * useEffect sends dispatch to set the user to state 
    // ! add ID once possible 
    useEffect(() => {
        props.getUserById()
    },[])

    // * useEffect dependent on updating state of user 
    // * to render comp conditionally 
    useEffect(() => {
        if (props.user) setIsLoaded(true)
    },[props.user])

    console.log('props form user', props)
    return (
        <div className='user-page-container'>
            {isLoaded
            // ? <UserInfo userinfo={props.user}/>
            ? (
                <div className='user-page-container'>
                    <UserInfo userinfo={testuser}/>
                    
                    {/* <Route exact path='/profile/:id'>
                        <Link to={`/profile/${id}/edit`}>
                            <button> Edit Account </button>
                        </Link>
                    </Route> */}
                </div>
            )
            : <h1> getting user </h1>
            }
            
           


           
        </div>
    )
};

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps, actions)(UserPage)