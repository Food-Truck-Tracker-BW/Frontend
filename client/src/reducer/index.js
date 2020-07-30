// * dependencies
import React from 'react';
import axios from 'axios';
import {
    GET_USERS,
    GET_DINER,
    GET_OPERATOR,
    GET_USER_BY_ID,
    GET_TRUCKS_BY_USER_ID,
    GET_ALL_TRUCKS,
    GET_ALL_TRUCK_BY_ID,
    GET_MENUS,
    GET_LOCATION,
    GET_RATING,
    GET_MENU_ITEM,
    GET_MENU_ITEM_RATING,
    UPDATE_TRUCK,
    ADD_TRUCK,
    ADD_MENU_ITEM,
    DELETE_USER,
    DELETE_TRUCK 
} from '../actions/index';

import store from '../Store';


const reducer = (state = store, action) => {
    console.log('reducer overall:', state, action)
    switch(action.type){
        // ! Getting all users
        case GET_USERS: 
        console.log('get user ran')
        axios.get("http://food-truck-tracker-be.herokuapp.com/api/user")
        .then((response) => {
            console.log(response)
            return {
                ...state,
                users: response
            }
        })
        .catch((error) => {
            console.log('error on get user', error)
            return state
        })

        // ! Get all trucks
        case GET_ALL_TRUCKS:
            console.log('get trucks ran')
            axios.get('http://food-truck-tracker-be.herokuapp.com/api/truck/')
            .then((response) =>{
                console.log('get trucks response:', response)
                return {
                    ...state,
                    trucks: response
                }
            })
            .catch((error) => { 
                console.log('get trucks error:', error)
                return state
            })
    }


}

export default reducer;