import axios from 'axios';

// http://food-truck-tracker-be.herokuapp.com/

// USERS(GET):
// GET ALL REGISTERED USERS: /api/user
export const GET_USERS = "GET_USERS";
export const getUsers = () => {
    return {
        type: GET_USERS,
        payload: ''
    }
}

// GET ALL REGISTERED DINERS: /api/user/getDiners
export const GET_DINER = "GET_DINERS";

// GET ALL REGISTERED OPERATORS: /api/user/getOperators
export const GET_OPERATOR = "GET_OPERATOR";

// GET USER BY ID: /api/user/:id
export const GET_USER_BY_ID = "GET_USER_BY_ID";

// GET ALL TRUCKS OWNED BY USER: api/user/:id/trucks
export const GET_TRUCKS_BY_USER_ID = "GET_TRUCKS_BY_USER_ID";

// TRUCKS(GET):
// GET ALL TRUCKS: /api/truck/
export const GET_ALL_TRUCKS = "GET_ALL_TRUCKS";
export const GET_ALL_TRUCKS_START = "GET_ALL_TRUCKS_START";
export const GET_ALL_TRUCKS_SUCCESS = "GET_ALL_TRUCKS_SUCCESS";
export const GET_ALL_TRUCKS_FAIL = "GET_ALL_TRUCKS_FAIL";
export const getTrucks = () => dispatch => {
    dispatch( { type: GET_ALL_TRUCKS_START } )
    axios.get('http://food-truck-tracker-be.herokuapp.com/api/truck/')
    .then((response) => {
        console.log(response);
        dispatch({ type: GET_ALL_TRUCKS_SUCCESS, payload: response })
    })
    .catch((error) => {
        console.log('get error', error)
        dispatch({ type: GET_ALL_TRUCKS_FAIL, payload: error })
    })
}



// export const getPokemon = () => dispatch => {
//     dispatch({ type: FETCH_POKEMON_START });
//     axios
//       .get('https://pokeapi.co/api/v2/pokemon/')
//       .then(res =>
//         dispatch({ type: FETCH_POKEMON_SUCCESS, payload: res.data.results })
//       )
//       .catch(err => dispatch({ type: FETCH_POKEMON_FAIL, payload: err }));
//   };


// GET ALL TRUCK BY ID: /api/truck/:id
export const GET_ALL_TRUCK_BY_ID = "GET_ALL_TRUCK_BY_ID";

// GET MENUS: /api/truck/:id/menus
export const GET_MENUS = "GET_MENUS";

// GET LOCATION: /api/truck/:id/location
export const GET_LOCATION = "GET_LOCATION";

// GET RATING: /api/truck/:id/avgRating
export const GET_RATING = "GET_RATING";

// GET MENU ITEM: /api/truck/menu/:itemId
export const GET_MENU_ITEM = "GET_MENU_ITEM";

// GET MENU ITEM RATING: /api/truck/menu/:itemId/itemAvgRatings
export const GET_MENU_ITEM_RATING = "GET_MENU_ITEM_RATING";


// (PUT):

// UPDATE TRUCK:
// /api/truck/:id
export const UPDATE_TRUCK = "UPDATE_TRUCK";


// (POST):

// ADD TRUCK:
// /api/user/:id/trucks
export const ADD_TRUCK = "ADD_TRUCK";

// POST MENU ITEM(S): /api/truck/:id
export const ADD_MENU_ITEM = "ADD_MENU_ITEM";


// (DELETE):

// DELETE USER:
// /api/user/:id
export const DELETE_USER = "DELETE_USER";

// DELETE TRUCK:
// /api/truck/:id
export const DELETE_TRUCK = "DELETE_TRUCK";

