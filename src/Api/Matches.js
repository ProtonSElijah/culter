import config from "./api_config";

export async function fetchMatches(userId, page = 0, size = 20) {
    let url = config.url + "/user/" + userId
        + "/users/ratings?"
        + "&page=" + page
        + "&size=" + size;
    return fetch(url, {method: "GET",});
}
