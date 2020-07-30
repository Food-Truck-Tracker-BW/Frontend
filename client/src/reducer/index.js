
// * dependencies
import rootReducer from '../reducer/index';
import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';

// * actions
import {GET_ALL_TRUCKS_START} from '../actions/index';
import {GET_ALL_TRUCKS_SUCCESS} from '../actions/index';
import {GET_ALL_TRUCKS_FAIL}  from '../actions/index';



export const store = createStore(
    reducer,
    applyMiddleware(thunk)
);


const reducer = (state = store, action) => {
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
                trucks: action.payload
            }
        case GET_ALL_TRUCKS_FAIL:
            console.log('failure on get trucks')
            return {
                ...state,
                errors: action.payload
            }

        default:
            return state;

    }


}

export default reducer;