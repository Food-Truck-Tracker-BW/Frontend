// * dependencies 
import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import { useFormik } from 'formik';

// const handleSubmit = e => {
//     e.preventDefault();
//     // console.log(formState);
//     axios.post("https://reqres.in/api/users", formState)
//     .then(res => props.(res.data))
//     .catch(err => console.log(err));
// }

const TruckList = () => {

    // * useEffect()
        // * axios call to get data 
        // * assign data to local state

    return(
        <div className='list-container'>
            Here is the truck list
            
            {/* .map() of axios return call on component mounting */}

        </div>
    )
    // * each item in the list should link through to single view page 
    // * link should dynamically accept the ID of the selected element
    
};

export default TruckList; 