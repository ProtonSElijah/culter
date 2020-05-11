import config from './api_config';

export async function fetchMatchesCall(userId, page, size) {
  const url = buildUrl(userId, page, size);
  const response = await fetch(url, {method: 'GET'});
  if (response.status !== 200) {
    return [];
  }

  const newMatchesJson = await response.json();
  const newMatches = newMatchesJson.content;
  setUpEmptyCommonEvents(newMatches);
  updateEmptyImages(newMatches);
  newMatchesJson.content = newMatches;
  return newMatchesJson;
}


function buildUrl(userId, page, size) {
  return config.url + '/user/' + userId +
        '/users/ratings?' +
        '&page=' + page +
        '&size=' + size;
}

function setUpEmptyCommonEvents(newMatches) {
  newMatches.forEach((item) => {
    item.commonEvents = [];
    item.page = 0;
  });
}

function updateEmptyImages(newMatches) {
  newMatches.forEach((item) => {
    if (!item.photo_400_orig) {
      item.photo_400_orig = 'https://vk.com/images/camera_200.png?ava=1';
    }
  });
}
