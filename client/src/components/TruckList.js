// * dependencies 
import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// * components:
import TruckCard from './TruckCard';
// import ItemView from './SingleTruckView';

// * action creators
import * as actions from '../actions/index';


const mockTrucks = [
    {
       cuisine_type: 'korean',
       departure: "03:35:00",
       id: 1,
       image: "https://media-cdn.tripadvisor.com/media/photo-s/0b/3d/45/72/food-truck.jpg",
       location: "0101000020E61000008656276728CA394022C2BF081A0C54C0",
       name: "Test Truck Korean"

    },
    {
       cuisine_type: 'korean',
       departure: "03:35:00",
       id: 2,
       image: "https://media-cdn.tripadvisor.com/media/photo-s/0b/3d/45/72/food-truck.jpg",
       location: "0101000020E61000008656276728CA394022C2BF081A0C54C0",
       name: "Test Truck Korean"

    },
    {
       cuisine_type: 'korean',
       departure: "03:35:00",
       id: 3,
       image: "https://media-cdn.tripadvisor.com/media/photo-s/0b/3d/45/72/food-truck.jpg",
       location: "0101000020E61000008656276728CA394022C2BF081A0C54C0",
       name: "Test Truck Korean"

    },
   
]


const TruckList = (props) => {
    const [ isLoaded, setIsLoaded ] = useState(false);


    useEffect(() => { 
        console.log('truck props', props);
        setIsLoaded(true);
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
                
            // ? mockTrucks.map((item) => {
            //     return(
            //         <Link to={`/truck/${item.id}`} key={item.id}>
            //             <TruckCard key={item.cuisineType} truck={item} />
            //         </Link>                
            //     )
            // })

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
