const initialState = {
    people: [],
    page: 0,
    size: 20,
    index: 0
};

function people(state=initialState, action){
    switch(action.type){
        case "RELOAD":
            state.people = action.people;
            state.page = 1;
            return state;
        case "LOAD":
            state.people = state.people.concat(action.people);
            state.page = state.page + 1;
            return state;
        case "SET_INDEX":
            state.index = action.index;
            return state;
    }
    return state;
}

export default people;
