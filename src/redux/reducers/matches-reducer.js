import {calculateElementsToAdd} from "./utils";

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
            let receivedEvents = action.newEvents;

            let pageSize = state.eventsPageSize;

            state = updateUserById(state, otherUserId, (matchedUser) =>{
                let commonEventsLength = matchedUser.commonEvents.length;

                let elementsToAdd = calculateElementsToAdd(receivedEvents, commonEventsLength, pageSize);
                matchedUser.commonEvents = matchedUser.commonEvents.concat(elementsToAdd);
                matchedUser.page = Math.trunc(matchedUser.commonEvents.length / state.eventsPageSize);
            });
            return state;
        }
        case "UPDATE_COUNT_COMMON_EVENTS": {
            let otherUserId = action.otherUserId;
            let eventsCount = action.commonEventsCount;

            state = updateUserById(state, otherUserId, (matchedUser) =>{
                matchedUser.count_common_events = eventsCount
            });
            return state;
        }
        default:
            return state;
    }
}

function updateUserById(state, otherUserId, predicate) {
    let matchedUserId = state.matches.findIndex((match) => match.id === otherUserId);
    let updatedMatches = state.matches.slice();

    predicate(updatedMatches[matchedUserId]);
    state.matches = updatedMatches;

    return state;
}

export default matches;
