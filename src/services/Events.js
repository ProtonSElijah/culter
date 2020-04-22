import store from "../redux/store/store";
import {reload, load, getEventsByQuery} from "../redux/actions/events-actions";
import {fetchCommonEventsRequest, fetchEventsRequest, fetchEventsByQuery} from "../Api/Events";
import {updateCommonEvents, updateCommonEventsCount} from "../redux/actions/matches-actions";

export async function fetchEvents(categories = [1, 6], isReload = false, is_personal = true) {
    let requestState = store.getState();
    let userId = requestState.userState.user.id;
    let page = requestState.eventsState.page;
    let size = requestState.eventsState.size;

    let newEvents = await fetchEventsRequest(userId,categories, is_personal, page, size);

    updateEventsState(isReload, newEvents.content);
}


export async function fetchCommonEvents(otherUserId) {
    let requestState = store.getState();
    let userId = requestState.userState.user.id;
    let matches = requestState.matchesState.matches;

    let matchedUser = matches.find(
        (match =>  match.id === otherUserId)
    );
    let page = matchedUser.page;
    let size = requestState.matchesState.eventsPageSize;

    let newEvents = await fetchCommonEventsRequest(userId, otherUserId, page, size);

    updateCommonEventsState(otherUserId, newEvents.content);
    updateCommonEventsCountState(otherUserId, newEvents.totalElements);
}

export async function searchEventsByQuery(query) {
    let requestState = store.getState();
    let page = requestState.eventsState.searchSelection.page;
    let size = requestState.eventsState.searchSelection.size;

    let newEvents = await fetchEventsByQuery(query,page,size);
    
    updateSearchEventsState(query, newEvents.content);
}

function updateCommonEventsCountState(otherUserId, totalElementsCount) {
    if (totalElementsCount > 0){
        store.dispatch(updateCommonEventsCount(otherUserId,totalElementsCount))
    }
}

function updateCommonEventsState(otherUserId, newEvents) {
    if (newEvents.length !== 0)
        store.dispatch(updateCommonEvents(otherUserId,newEvents))
}

function updateEventsState(isReload, newEvents) {
    if (isReload) {
        store.dispatch(reload(newEvents));
    } else if (newEvents.length !== 0) {
        store.dispatch(load(newEvents));
    }

}

function updateSearchEventsState(query, newEvents){
    store.dispatch(getEventsByQuery(query,newEvents));
}


