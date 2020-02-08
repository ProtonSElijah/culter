import {combineReducers} from "redux"
import eventsReducer from './events-reducer';
import userReducer from './user-reducer';
import peopleReducer from "./people-reducer";

const reducers = combineReducers({
    eventsState: eventsReducer,
    userState: userReducer,
    peopleState: peopleReducer

});

export default reducers;
