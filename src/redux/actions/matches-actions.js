export function reloadMatches(matches) {
  return {
    type: 'MATCHES_RELOAD',
    matches,
  };
}
export function loadMatches(matches) {
  return {
    type: 'MATCHES_LOAD',
    matches,
  };
}

export function updateCommonEvents(otherUserId, newEvents) {
  return {
    type: 'UPDATE_COMMON_EVENTS',
    otherUserId,
    newEvents,
  };
}

export function updateCommonEventsCount(otherUserId, commonEventsCount) {
  return {
    type: 'UPDATE_COUNT_COMMON_EVENTS',
    otherUserId,
    commonEventsCount,
  };
}
