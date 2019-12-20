import config from "./api_config"

export async function authorize(userId, accessToken)  {

    let url = `${config.url}/user/identify?user_id=${userId}&access_token=${accessToken}`;
    return await fetch(url, {
        method: "GET",
    });
}
