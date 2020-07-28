// * dependencies 
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


// * components:
import TruckCard from './TruckCard';


const TruckList = () => {

    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ trucks, setTrucks ] = useState([]);


    useEffect(() => { 
        axios.get("http://localhost:3333/trucks")
        .then((response) => {
            console.log(response.data)
            setTrucks(response.data)
            setIsLoaded(true)
        })
        .catch((error) => {
            console.log('get error', error)
        })
    }, [])

    return(
        <div className='list-container'>
            Here is the truck list
            {trucks.map((item) => {
                return(
                    <Link to={`/truck/${item.cuisineType}`}>
                        <TruckCard key={item.cuisineType} truck={item} />
                    </Link>                
                )
            })}
        </div>
    )
    // * each item in the list should link through to single view page 
    // * link should dynamically accept the ID of the selected element
    
};

export default TruckList; 



// const handleSubmit = e => {
//     e.preventDefault();
//     // console.log(formState);
//     axios.post("https://reqres.in/api/users", formState)
//     .then(res => props.(res.data))
//     .catch(err => console.log(err));
// }