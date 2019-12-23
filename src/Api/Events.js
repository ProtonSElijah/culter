import config from "./api_config"

export async function fetchEvents(userId,page = 0,size = 10,isPersonal=false)  {
    let url = `${config.url}/user/${userId}/events/selection?category_id=1&category_id=6&page=${page}&size=${size}&is_personal=${isPersonal}`;
    return await fetch(url, {
        method: "GET",
    });
}

export async function fetchCategories(){
    let url = config.url + "/category/all";

    return await fetch(url, {
        method: "GET",
    });
}
