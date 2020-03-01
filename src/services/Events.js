import store from "../redux/store/store";
import {reload, load} from "../redux/actions/events-actions";
import {fetchEventsRequest} from "../Api/Events";

export async function fetchEvents(categories = [1, 6], isReload = false, is_personal = true) {
    let requestState = store.getState();
    let userId = requestState.userState.user.id;
    let page = requestState.eventsState.page;
    let size = requestState.eventsState.size;

    let newEvents = await fetchEventsRequest(userId,categories, is_personal, page, size);

    updateEventsState(isReload, newEvents);
}

function updateEventsState(isReload, newEvents) {
    if (isReload) {
        store.dispatch(reload(newEvents));
    } else if (newEvents.length !== 0) {
        store.dispatch(load(newEvents));
    }

}


