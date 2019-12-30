import config from "./api_config"

export async function setRate(userId, eventId, isLiked)  {
    let url = config.url + "/user/" + userId + "/events/ratings";

    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify([
            {
                event_id: eventId,
                is_liked: isLiked
            }
        ])
    });
}
