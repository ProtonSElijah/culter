import config from "./api_config"
import store from "../redux/store/store";
import { reload, load } from "../redux/actions/events-actions";

export async function fetchEvents(categories=[1,6], is_personal=true )  {
    let requestState = store.getState();

    let userId = requestState.userState.user.id;
    let page = requestState.eventsState.page;
    let size = requestState.eventsState.size;

    let categoriesParameter = "category_id=" + categories.join("&category_id=");

    let url = config.url + "/user/" + userId 
        + "/events/selection?" + categoriesParameter 
        + "&is_personal=" + is_personal 
        + "&page=" + page 
        + "&size=" + size;
    let response = await fetch(url, {method: "GET",});

    let newEvents = await response.json();

    if (newEvents.content.length !== 0) 
        store.dispatch(load(newEvents.content));
}
