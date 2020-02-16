const initialState = {
    active: "events"
};
function panels(state=initialState, action){
    switch(action.type){
        case "CHANGE_PANEL":
            state.active = action.panel;
            return state;
    }
    return state;
}

export default panels;
