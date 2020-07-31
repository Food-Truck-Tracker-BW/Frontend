// // * actions
// import {GET_USER_BY_ID} from '../actions/index';
// import {GET_USER_BY_ID_START} from '../actions/index';
// import {GET_USER_BY_ID_SUCCESS} from '../actions/index';
// import {GET_USER_BY_ID_FAIL} from '../actions/index';

// import {GET_TRUCKS_BY_USER_ID} from '../actions/index';
// import {GET_TRUCKS_BY_USER_ID_START} from '../actions/index';
// import {GET_TRUCKS_BY_USER_ID_SUCCESS} from '../actions/index';
// import {GET_TRUCKS_BY_USER_ID_FAIL} from '../actions/index';


// const initialState = {
//     users: [],
//     fetchingUsers: false
// }

// const userReducer = (state = initialState, action) => {
//     console.log('user reducer overall:', state)
//     switch(action.type){
//         // ! getting user:
//         case GET_USER_BY_ID_START:
//             console.log('get users AJAX start')
//             return {
//                 ...state,
//                 fetchingUsers: true
//             }
//         case GET_USER_BY_ID_SUCCESS:
//             console.log('get users AJAX success', action)
//             return {
//                 ...state,
//                 fetchingUsers: false,
//                 user:  action.payload.data.user
//             }
//         case GET_USER_BY_ID_FAIL:
//             console.log('get users AJAX failed', action)
//             return {
//                 ...state,
//                 fetchingUsers: false,
//                 error: action.payload.error
//             }
        
//             // ! getting user trucks:
//         case GET_TRUCKS_BY_USER_ID_START:
//             console.log('get users AJAX start')
//             return {
//                 ...state,
//                 fetchingUsers: true
//             }
//         case GET_TRUCKS_BY_USER_ID_SUCCESS:
//             console.log('get users AJAX success', action.payload)
//             return {
//                 ...state,
//                 fetchingUsers: false,
//                 userTrucks:  action.payload.data
//             }
//         case GET_TRUCKS_BY_USER_ID_FAIL:
//             console.log('get users AJAX failed', action)
//             return {
//                 ...state,
//                 fetchingUsers: false,
//                 error: action.payload.error
//             }
        
        
        
//         default:
//             return state
//     }
// };


// export default userReducer;