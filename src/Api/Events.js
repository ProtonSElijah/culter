import config from "./api_config"
import {isValidResponse} from "./Utils";

export async function fetchEventsRequest(userId, categories, is_personal,
                                         page, size) {
    let url = buildUrl(userId, categories, is_personal, page, size);
    let response = await fetch(url, {method: "GET",});
    if (!isValidResponse(response)){
        return [];
    }

    let eventsJson = await response.json();
    let events = eventsJson.content;
    updateImageUrls(events);

    return events;
}

export async function fetchCommonEventsRequest(userId, otherUserId, page, size) {
    let url = buildUrlForCommonEvents(userId, otherUserId, page, size);
    let response = await fetch(url, {method: "GET"});
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
    return config.url + "/user/" + userId
        + "/common/events?" + "anotherUserId=" + otherUserId
        + "&page=" + page
        + "&size=" + size;
}

function updateImageUrls(newEvents) {
    newEvents.forEach((item) => {
        item.images.forEach((imageItem) => {
            imageItem.image = config.images_url + imageItem.image;
        })
    });
}
