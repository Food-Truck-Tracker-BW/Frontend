import { combineReducers } from 'redux';
import truckReducer from './truckReducer';
import userReducer from './userReducer';

const reducer = combineReducers({
    truckReducer,
    userReducer
});

export default reducer;