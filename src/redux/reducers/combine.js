import {combineReducers} from "redux"
import eventsReducer from './events-reducer';
import userReducer from './user-reducer';

const reducers = combineReducers({
    eventsState: eventsReducer,
    userState: userReducer

});

export default reducers;