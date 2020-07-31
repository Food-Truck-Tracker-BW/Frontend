// * actions
import {GET_USER_BY_ID} from '../actions/index';
import {GET_USER_BY_ID_START} from '../actions/index';
import {GET_USER_BY_ID_SUCCESS} from '../actions/index';
import {GET_USER_BY_ID_FAIL} from '../actions/index';

import {GET_TRUCKS_BY_USER_ID} from '../actions/index';
import {GET_TRUCKS_BY_USER_ID_START} from '../actions/index';
import {GET_TRUCKS_BY_USER_ID_SUCCESS} from '../actions/index';
import {GET_TRUCKS_BY_USER_ID_FAIL} from '../actions/index';


const initialState = {
    users: [],
    fetchingUsers: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        // ! getting user:
        case GET_USER_BY_ID_START:
            console.log('get users AJAX start')
            return {
                ...state,
                fetchingUsers: true
            }
        case GET_USER_BY_ID_SUCCESS:
            console.log('get users AJAX success')
            return {
                ...state,
                fetchingUsers: false,
                user:  action.payload.data
            }
        case GET_USER_BY_ID_FAIL:
            console.log('get users AJAX failed')
            return {
                ...state,
                fetchingUsers: false,
                error: action.payload.error
            }
        
        
        
        default:
            return state
    }
};


export default userReducer;