import config from "./api_config"
import store from "../redux/store/store";
import { reload, load } from "../redux/actions/events-actions";

export async function fetchEvents(categories=[1,6], isReload=false, is_personal=true )  {
    let requestState = store.getState();
    let userId = requestState.userState.user.id;
    let page = requestState.eventsState.page;
    let size = requestState.eventsState.size;

    let url = getUrl(userId, categories, is_personal, page, size);
    let response = await fetch(url, {method: "GET",});
    if (response.status !== 200){
        return;
    }

    let newEventsJson = await response.json();
    let newEvents = newEventsJson.content;

    updateEventsState(isReload, newEvents);

}

function getUrl(userId, categories, is_personal, page, size) {
    let categoriesParameter = "category_id=" + categories.join("&category_id=");
    return config.url + "/user/" + userId
        + "/events/selection?" + categoriesParameter
        + "&is_personal=" + is_personal
        + "&page=" + page
        + "&size=" + size;
}


function updateEventsState(isReload, newEvents) {
    if (isReload) {
        store.dispatch(reload(newEvents));
    } else {
        if (newEvents.length !== 0)
            store.dispatch(load(newEvents));
    }
}
