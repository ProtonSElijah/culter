import {combineReducers} from 'redux';
import eventsReducer from './events-reducer';
import userReducer from './user-reducer';
import peopleReducer from './people-reducer';
import panelReducer from './panel-reducer';
import matchesReducer from './matches-reducer';

const reducers = combineReducers({
  eventsState: eventsReducer,
  userState: userReducer,
  peopleState: peopleReducer,
  panelState: panelReducer,
  matchesState: matchesReducer,
});

export default reducers;
