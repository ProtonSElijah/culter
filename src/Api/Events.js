import config from './api_config';
import {isValidResponse} from './Utils';

export async function fetchEventsRequest(userId, categories, isPersonal,
    page, size) {
  const url = buildUrl(userId, categories, isPersonal, page, size);
  return await getPageableEventsByUrl(url);
}

export async function fetchCommonEventsRequest(userId, otherUserId, page, size) {
  const url = buildUrlForCommonEvents(userId, otherUserId, page, size);
  return await getPageableEventsByUrl(url);
}

export async function fetchEventsByQuery(query, page, size) {
  const url = buildUrlForEventsByQuery(query, page, size);
  return await getPageableEventsByUrl(url);
}

async function getPageableEventsByUrl(url) {
  const response = await fetch(url, {method: 'GET'});
  if (!isValidResponse(response)) {
    return [];
  }

  const eventsJson = await response.json();
  const events = eventsJson.content;
  updateImageUrls(events);

  eventsJson.content = events;
  return eventsJson;
}


function buildUrl(userId, categories, isPersonal, page, size) {
  const categoriesParameter = 'category_id=' + categories.join('&category_id=');
  return config.url + '/user/' + userId +
        '/events/selection?' + categoriesParameter +
        '&is_personal=' + isPersonal +
        '&page=' + page +
        '&size=' + size;
}

function buildUrlForCommonEvents(userId, otherUserId, page, size) {
  return `${config.url}/user/${userId}` +
        `/common/events?anotherUserId=${otherUserId}` +
        '&page=' + page +
        '&size=' + size;
}

function buildUrlForEventsByQuery(query, page, size) {
  return `${config.url}/event/search` +
    `?query=${query}`+ `&page=${page}` + `&size=${size}`;
}


function updateImageUrls(newEvents) {
  newEvents.forEach((item) => {
    item.images.forEach((imageItem) => {
      imageItem.image = config.images_url + imageItem.image;
    });
  });
}
