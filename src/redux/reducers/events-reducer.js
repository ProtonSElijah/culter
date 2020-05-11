import {calculateElementsToAdd} from './utils';

const initialState = {
  events: [],
  page: 0,
  size: 20,
  index: 0,
  searchSelection: {
    query: '',
    page: 0,
    pageSize: 20,
    events: [],
  },
};
function events(state=initialState, action) {
  switch (action.type) {
    case 'RELOAD':
      state.events = action.events;
      state.page = 1;
      return state;
    case 'LOAD':
      state.events = state.events.concat(action.events);
      state.page = state.page + 1;
      return state;
    case 'SET_INDEX':
      state.index = action.index;
      return state;
    case 'SEARCH': {
      const isReload = state.searchSelection.query !== action.query;
      let updatedEvents = [];
      const size = state.searchSelection.pageSize;

      if (!isReload) {
        const previousLength = state.searchSelection.events.length;
        const eventsToAdd = calculateElementsToAdd(action.events, previousLength, size);
        updatedEvents = state.searchSelection.events.concat(eventsToAdd);
      } else {
        updatedEvents = action.events;
      }


      const page = Math.trunc(updatedEvents.length / size);
      const query = action.query;
      state.searchSelection = {
        query: query,
        events: updatedEvents,
        pageSize: size,
        page: page,
      };

      return state;
    }
    default:
      return state;
  }
}

export default events;
