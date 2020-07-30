
// * actions
import {GET_ALL_TRUCKS_START} from '../actions/index';
import {GET_ALL_TRUCKS_SUCCESS} from '../actions/index';
import {GET_ALL_TRUCKS_FAIL}  from '../actions/index';
import {GET_ALL_TRUCK_BY_ID_START} from '../actions/index';
import {GET_ALL_TRUCK_BY_ID_SUCCESS} from '../actions/index';
import {GET_ALL_TRUCK_BY_ID_FAIL} from '../actions/index';
import {GET_MENUS_START} from '../actions/index';
import {GET_MENUS_SUCCESS} from '../actions/index';
import {GET_MENUS_FAIL} from '../actions/index';


const intitialTruckState = {
    trucks: [],
    fetchingTrucks: false
}



const reducer = (state = intitialTruckState, action) => {
    console.log('reducer overall:', state, action)
    switch(action.type){
        // ! Get all trucks
        case GET_ALL_TRUCKS_START:
            console.log('starting to get trucks AJAX')
            return {
                ...state,
                fetchingTrucks: true,
            }
        
        case GET_ALL_TRUCKS_SUCCESS:
            console.log('success get truck AJAX')
            return {
                ...state,
                fetchingTrucks: false,
                trucks: action.payload.data.trucks
            }
        case GET_ALL_TRUCKS_FAIL:
            console.log('failure on get trucks')
            return {
                ...state,
                fetchingTrucks: false,
                errors: action.payload.error
            }
        
        // ! getting trucks by ID 
        case GET_ALL_TRUCK_BY_ID_START:
            console.log('starting to get TRUCK')
            return {
                ...state,
                fetchingTruck: true,
            }
        case GET_ALL_TRUCK_BY_ID_SUCCESS:
            console.log('successfully got TRUCK', action.payload)
            return {
                ...state,
                fetchingTruck: false,
                selectedTruck: action.payload.data.truck
            }
        case GET_ALL_TRUCK_BY_ID_FAIL:
            console.log('failure on get trucks')
            return {
                ...state,
                fetchingTruck: false,
                errors: action.payload.error
        }
        
        // ! getting menus 
        case GET_MENUS_START:
            console.log('starting to get TRUCK')
            return {
                ...state,
                fetchingMenu: true,
            }
        case GET_MENUS_SUCCESS:
            console.log('successfully got TRUCK', action.payload)
            return {
                ...state,
                fetchingMenu: false,
                menu: action.payload.data.menu
            }
        case GET_MENUS_FAIL:
            console.log('failure on get trucks')
            return {
                ...state,
                fetchingMenu: false,
                errors: action.payload.error
        }


        default:
            return state;

    }


}




export default reducer;