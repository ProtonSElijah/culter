import config from "./api_config"
import store from "../redux/store/store";
import {load, reload} from "../redux/actions/people-actions";

export async function fetchPeople(isReload = false)  {
    let requestState = store.getState();
    let userId = requestState.userState.user.id;
    let page = requestState.peopleState.page;
    let size = requestState.peopleState.size;

    let url = buildUrl(userId, page, size);
    let response = await fetch(url, {method: "GET",});
    if (response.status !== 200){
        return;
    }

    let newPeopleJson = await response.json();
    let newPeople = newPeopleJson.content;

    updateStore(isReload, newPeople);
}

function buildUrl(userId, page, size) {
    return config.url + "/user/" + userId
        + "/users/all?"
        + "&page=" + page
        + "&size=" + size;
}

function updateStore(isReload, newPeople) {
    if (isReload) {
        store.dispatch(reload(newPeople));
    } else {
        if (newPeople.length !== 0)
            store.dispatch(load(newPeople));
    }
}
