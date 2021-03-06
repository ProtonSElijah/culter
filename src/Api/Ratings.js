import config from './api_config';

export async function setEventRateCall(userId, eventId, isLiked) {
  const url = config.url + '/user/' + userId + '/events/ratings';

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([
      {
        event_id: eventId,
        is_liked: isLiked,
      },
    ]),
  });
}

export async function setUserRateCall(userId, otherUserId, isLiked) {
  const url = config.url + '/user/' + userId + '/users/ratings';

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([
      {
        user_id: otherUserId,
        is_liked: isLiked,
      },
    ]),
  });
}
