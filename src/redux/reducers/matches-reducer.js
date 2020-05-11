import {calculateElementsToAdd} from './utils';

const initialState = {
  matches: [],
  page: 0,
  size: 5,
  eventsPageSize: 10,
  matchesCount: 0,
};

function matches(state = initialState, action) {
  switch (action.type) {
    case 'MATCHES_RELOAD':
      state.matches = state.matches.concat(action.matches);
      state.page = Math.trunc(state.matches.length / state.size);
      return state;
    case 'MATCHES_LOAD': {
      const receivedMatches = action.matches.content;
      const matchesCount = receivedMatches.length;
      const shiftIndex = state.matches.length % state.size;
      const newMatches = receivedMatches.slice(shiftIndex, matchesCount);

      state.matches = state.matches.concat(newMatches);
      state.page = Math.trunc(state.matches.length / state.size);
      state.matchesCount = action.matches.totalElements;
      return state;
    }

    case 'UPDATE_COMMON_EVENTS': {
      const otherUserId = action.otherUserId;
      const receivedEvents = action.newEvents;

      const pageSize = state.eventsPageSize;

      state = updateUserById(state, otherUserId, (matchedUser) =>{
        const commonEventsLength = matchedUser.commonEvents.length;

        const elementsToAdd = calculateElementsToAdd(receivedEvents, commonEventsLength, pageSize);
        matchedUser.commonEvents = matchedUser.commonEvents.concat(elementsToAdd);
        matchedUser.page = Math.trunc(matchedUser.commonEvents.length / state.eventsPageSize);
      });
      return state;
    }
    case 'UPDATE_COUNT_COMMON_EVENTS': {
      const otherUserId = action.otherUserId;
      const eventsCount = action.commonEventsCount;

      state = updateUserById(state, otherUserId, (matchedUser) =>{
        matchedUser.count_common_events = eventsCount;
      });
      return state;
    }
    default:
      return state;
  }
}

function updateUserById(state, otherUserId, predicate) {
  const matchedUserId = state.matches.findIndex((match) => match.id === otherUserId);
  const updatedMatches = state.matches.slice();

  predicate(updatedMatches[matchedUserId]);
  state.matches = updatedMatches;

  return state;
}

export default matches;
