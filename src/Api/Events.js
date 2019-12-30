import config from "./api_config"

export async function fetchEvents(userId)  {
    let url = config.url + "/user/" + userId + "/events/selection?category_id=1&category_id=6";
    return fetch(url, {method: "GET",});
}
