import config from './api_config';

export async function fetchPeopleCall(userId, page, size, isReload) {
  const url = buildUrl(userId, page, size);
  const response = await fetch(url, {method: 'GET'});
  if (response.status !== 200) {
    return [];
  }

  const newPeopleJson = await response.json();
  const newPeople = newPeopleJson.content;

  return newPeople;
}

function buildUrl(userId, page, size) {
  return config.url + '/user/' + userId +
        '/users/all?' +
        '&page=' + page +
        '&size=' + size;
}
