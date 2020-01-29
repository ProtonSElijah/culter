import config from "./api_config"

export async function fetchEvents(userId, categories=[1,6], page=0, size=20, is_personal=true )  {
    let categoriesParameter = "category_id=" + categories.join("&category_id=");
    let url = config.url + "/user/" + userId 
        + "/events/selection?" + categoriesParameter 
        + "&is_personal=" + is_personal 
        + "&page=" + page 
        + "&size=" + size;
    return fetch(url, {method: "GET",});
}
