import config from "./api_config"

export async function fetchPeopleCall(userId, page, size, isReload) {

    let url = buildUrl(userId, page, size);
    let response = await fetch(url, {method: "GET",});
    if (response.status !== 200) {
        return [];
    }

    let newPeopleJson = await response.json();
    let newPeople = newPeopleJson.content;

    return newPeople;

}

function buildUrl(userId, page, size) {
    return config.url + "/user/" + userId
        + "/users/all?"
        + "&page=" + page
        + "&size=" + size;
}
