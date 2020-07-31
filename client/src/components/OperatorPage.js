// * dependencies
import React, {useState, useEffect} from 'react';
import { useParams, Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';


// * components
import OperatorEditForm from '../components/OperatorEditForm';


// * action creators
import * as actions from '../actions/index';


const OperatorPage = (props) => {

    // const { id } = useParams();
    const [ isLoaded, setIsLoaded ] = useState(false);

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

    return (
        <div className='operator-page-container'>
            {isLoaded
            ? <h1> user info </h1>
            : <h1> getting user </h1>
            }
        </div>
    )
};

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps, actions)(OperatorPage)