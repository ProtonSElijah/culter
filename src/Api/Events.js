import config from "./api_config"
import {isValidResponse} from "./Utils";

export async function fetchEventsRequest(userId, categories, is_personal,
                                         page, size) {
    let url = buildUrl(userId, categories, is_personal, page, size);
    return await getPageableEventsByUrl(url);
}

export async function fetchCommonEventsRequest(userId, otherUserId, page, size) {
    let url = buildUrlForCommonEvents(userId, otherUserId, page, size);
    return await getPageableEventsByUrl(url);

}

export async function fetchEventsByQuery(query, page, size){
    let url = buildUrlForEventsByQuery(query, page, size);
    return await getPageableEventsByUrl(url);
}

async function getPageableEventsByUrl(url) {
    let response = await fetch(url, {method: "GET",});
    if (!isValidResponse(response)) {
        return [];
    }

    let eventsJson = await response.json();
    let events = eventsJson.content;
    updateImageUrls(events);

    eventsJson.content = events;
    return eventsJson;
}


function buildUrl(userId, categories, is_personal, page, size) {
    let categoriesParameter = "category_id=" + categories.join("&category_id=");
    return config.url + "/user/" + userId
        + "/events/selection?" + categoriesParameter
        + "&is_personal=" + is_personal
        + "&page=" + page
        + "&size=" + size;
}

function buildUrlForCommonEvents(userId, otherUserId, page, size) {
    return `${config.url}/user/${userId}`
        + `/common/events?anotherUserId=${otherUserId}`
        + "&page=" + page
        + "&size=" + size;
}

function buildUrlForEventsByQuery(query, page, size) {
    return `${config.url}/event/search`
    + `?query=${query}`+ `&page=${page}` + `&size=${size}`;
}
}

function updateImageUrls(newEvents) {
    newEvents.forEach((item) => {
        item.images.forEach((imageItem) => {
            imageItem.image = config.images_url + imageItem.image;
        })
    });
}
