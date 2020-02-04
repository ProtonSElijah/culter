const initialState = {
    id: 0,
    
};

function panels(state=initialState, action){
    switch(action.type){
        case "MOVE":
            state.events = action.events;
            state.page = 1;
            return state;
    }
    return state;
}

export default panels;