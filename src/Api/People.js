import config from "./api_config"

export async function fetchPeople(userId, page=0, size=20)  {
    let url = config.url + "/user/" + userId 
        + "/users/all?"
        + "&page=" + page 
        + "&size=" + size;
    return fetch(url, {method: "GET",});
}
