const initialState = {
    people: [],
    page: 0,
    size: 20,
    index: 0
};

function people(state=initialState, action){
    switch(action.type){
        case "PEOPLE_RELOAD":
            state.people = state.people.concat(action.people);
            state.page = Math.trunc(state.people.length / state.size);
            return state;
        case "PEOPLE_LOAD":
            let receivedPeople = action.people;
            let peopleCount = receivedPeople.length;
            let shiftIndex = state.people.length % state.size;
            let newPeople = receivedPeople.slice(shiftIndex, peopleCount);

            state.people = state.people.concat(newPeople);
            state.page = Math.trunc(state.people.length / state.size);
            return state;
        case "PEOPLE_SET_INDEX":
            state.index = action.index;
            return state;
        default:
            return state;
    }
}

export default people;
