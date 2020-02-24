import config from "./api_config"

export async function authorizeRequest(user) {
    let url = `${config.url}/user/identify?user_id=${user.id}`;
    return fetch(url, {method: "GET",});

}
