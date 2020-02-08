const initialState = {
    events: [],
    page: 0,
    size: 20,
    index: 0
};
console.log(initialState);
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
    }
    return state;
}

export default events;
