// * dependencies 
import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// * components:
import TruckCard from './TruckCard';
// import ItemView from './SingleTruckView';

// * action creators
import * as actions from '../actions/index';

const TruckList = (props) => {
    const [ isLoaded, setIsLoaded ] = useState(false);


    useEffect(() => { 
        console.log('truck props',props.trucks);
        if (props.trucks.length) setIsLoaded(true);
    }, [props.trucks])


    const populate = (event) => {
        event.preventDefault()
        props.getTrucks()
    }

    useEffect(() => {
        props.getTrucks()
    },[])

    return(
        <div className='list-container'>
            {isLoaded
            ? props.trucks.map((item) => {
                return(
                    <Link to={`/truck/${item.id}`} key={item.id}>
                        <TruckCard key={item.cuisineType} truck={item} />
                    </Link>                
                )
            })
            : (<button 
                    className='list-container__ajax-message'
                    onClick={populate}
                > View Trucks </button>)
            } 
        </div>
    )    
};

const mapStateToProps = state => ({ trucks: state.trucks });

export default connect(mapStateToProps, actions)(TruckList)
