const initialState = {
    matches: [],
    page: 0,
    size: 15,
    eventsPageSize: 10
};

function matches(state = initialState, action) {
    switch (action.type) {
        case "MATCHES_RELOAD":
            state.matches = state.matches.concat(action.matches);
            state.page = Math.trunc(state.matches.length / state.size);
            return state;
        case "MATCHES_LOAD": {
            let receivedMatches = action.matches;
            let matchesCount = receivedMatches.length;
            let shiftIndex = state.matches.length % state.size;
            let newMatches = receivedMatches.slice(shiftIndex, matchesCount);

            state.matches = state.matches.concat(newMatches);
            state.page = Math.trunc(state.matches.length / state.size);
            return state;
        }

        case  "UPDATE_COMMON_EVENTS": {
            let otherUserId = action.otherUserId;
            let events = action.newEvents;

            let matchedUserId = state.matches.findIndex((match) => match.id === otherUserId);
            let updatedMatches = state.matches.slice();
            updatedMatches[matchedUserId].commonEvents = events;
            state.matches = updatedMatches;
            return state;
        }
        case "UPDATE_COUNT_COMMON_EVENTS": {
            let otherUserId = action.otherUserId;
            let eventsCount = action.commonEventsCount;

            let matchedUserId = state.matches.findIndex((match) => match.id === otherUserId);
            let updatedMatches = state.matches.slice();
            updatedMatches[matchedUserId].count_common_events = eventsCount;
            state.matches = updatedMatches;

            return state;
        }
        default:
            return state;
    }
}

export default matches;
