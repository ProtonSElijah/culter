export function reload(events) {
  return {
    type: 'RELOAD',
    events,
  };
}
export function load(events) {
  return {
    type: 'LOAD',
    events,
  };
}

export function setIndex(index) {
  return {
    type: 'SET_INDEX',
    index,
  };
}

export function getEventsByQuery(query, events) {
  return {
    type: 'SEARCH',
    query,
    events,
  };
}
