// * dependencies 
import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

// * components:
import TruckCard from './TruckCard';
import SingleTruckView from './SingleTruckView';

// * action creators
import { getTrucks } from '../actions/index';

const TruckList = (props) => {

    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ trucks, setTrucks ] = useState();


    useEffect(() => { 
        setIsLoaded(true)
    }, [])

    console.log('trucks:',trucks)

    return(
        <div className='list-container'>
            {isLoaded
            ? trucks.trucks.map((item) => {
                return(
                    <Link to={`/truck/${item.id}`} key={item.id}>
                        <TruckCard key={item.cuisineType} truck={item} />
                    </Link>                
                )
            })
            : (<div className='list-container__ajax-message'> Getting Trucks </div>)
            }
        
            <Route 
                exact path='/truck/:id' 
                component={() => (
                    <SingleTruckView />
                )}
            />
            
            
        </div>
    )
    // * each item in the list should link through to single view page 
    // * link should dynamically accept the ID of the selected element
    
};

const mapStateToProps = state => {
    return {
        trucks: state.trucks
    }
  }

export default connect(mapStateToProps, { getTrucks })(TruckList)



// const handleSubmit = e => {
//     e.preventDefault();
//     // console.log(formState);
//     axios.post("https://reqres.in/api/users", formState)
//     .then(res => props.(res.data))
//     .catch(err => console.log(err));
// }