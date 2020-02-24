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

function buildUrl(userId, categories, is_personal, page, size) {
    let categoriesParameter = "category_id=" + categories.join("&category_id=");
    return config.url + "/user/" + userId
        + "/events/selection?" + categoriesParameter
        + "&is_personal=" + is_personal
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
