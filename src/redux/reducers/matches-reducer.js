const initialState = {
    matches: [],
    page: 0,
    size: 15
};

function matches(state = initialState, action) {
    switch (action.type) {
        case "MATCHES_RELOAD":
            state.matches = state.matches.concat(action.matches);
            state.page = Math.trunc(state.matches.length / state.size);
            return state;
        case "MATCHES_LOAD":
            let receivedMatches = action.matches;
            let matchesCount = receivedMatches.length;
            let shiftIndex = state.matches.length % state.size;
            let newMatches = receivedMatches.slice(shiftIndex, matchesCount);

            state.matches = state.matches.concat(newMatches);
            state.page = Math.trunc(state.matches.length / state.size);
            return state;
    }
    return state;
}

export default matches;