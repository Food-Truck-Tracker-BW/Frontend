import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';



import * as actions from '../actions/index';
import TruckCard from './TruckCard';

const mockTruck = [
    {
        id: 1,
        name: "Test Truck Korean",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/0b/3d/45/72/food-truck.jpg",
        cuisine_type: "Korean",
        location: "0101000020E61000008656276728CA394022C2BF081A0C54C0",
        departure: "03:25:00",
        operator_id: 1
    }
]


const UserTruckList = (props) => {


    const { id } = useParams();
    const [isLoaded, setIsLoaded] = useState(false);

    // * useEffect sends dispatch to set the user trucks to state 

    useEffect(() => {
        props.getTruckByUserId(id)
    }, [])

    // * useEffect dependent on updating state of user 
    // * to render comp conditionally 
    useEffect(() => {
        if (props.userTrucks) setIsLoaded(true)
    }, [props.userTrucks])



    return (
        <div>
            {isLoaded
                ? <div className='user-trucks-container'>
                    <h1> Your Trucks: </h1>

                    {props.userTrucks.map((item) => {
                        return <Link to={`/truck/${item.id}`} key={item.id}><TruckCard key={item.id} truck={item} /> </Link>
                    })}

                </div>
                : <h1 className='loading-message'> getting trucks </h1>
            }
        </div>
    )

};

const mapStateToProps = state => ({ userTrucks: state.userTrucks });

export default connect(mapStateToProps, actions)(UserTruckList)