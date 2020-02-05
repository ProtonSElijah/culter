const initialState = {
    events: [],
    page: 0,
    size: 20
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
    }
    return state;
}

export default events;