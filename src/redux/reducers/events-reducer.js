import { calculateElementsToAdd } from "./utils";

const initialState = {
    events: [],
    page: 0,
    size: 20,
    index: 0,
    searchSelection: {
        page: 0,
        pageSize: 20,
        events: []
    }
};
function events(state=initialState, action){
    switch(action.type){
        case "RELOAD":
            state.events = action.events;
            state.page = 1;
            return state;
        case "LOAD":
            state.events = state.events.concat(action.events);
            state.page = state.page + 1;
            return state;
        case "SET_INDEX":
            state.index = action.index;
            return state;
        case "RELOAD_SEARCH":{
            let page = action.events / state.searchSelection.size;
            let size = state.searchSelection.pageSize;
            state.searchSelection = {
                events: action.events,
                page: page,
                pageSize: size
            }
            return state
        }
        case "SEARCH":{
            let size = state.searchSelection.pageSize;
            let previousLength = state.searchSelection.events.length;
            let eventsToAdd = calculateElementsToAdd(action.events, previousLength, size);

            let updatedEvents = state.searchSelection.events.concat(eventsToAdd);
            let page = Math.trunc(updatedEvents.length / size);
            state.searchSelection = {
                events: updatedEvents,
                pageSize: size,
                page: page
            };

            return state;
        }
        default:
            return state;
    }
}

export default events;
