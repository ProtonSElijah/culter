import config from "./api_config"

export async function authorize(userId)  {
    let url = `${config.url}/user/identify?user_id=${userId}`;
    return fetch(url, {method: "GET",});
}
