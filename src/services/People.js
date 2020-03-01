import store from "../redux/store/store";
import {load, reload} from "../redux/actions/people-actions";
import { fetchPeopleCall } from "../Api/People"

export async function fetchPeople(isReload = false) {
    let requestState = store.getState();
    let userId = requestState.userState.user.id;
    let page = requestState.peopleState.page;
    let size = requestState.peopleState.size;

    let people = await fetchPeopleCall(userId, page, size, isReload);
    updateStore(isReload, people);
}


function updateStore(isReload, newPeople) {
    if (isReload) {
        store.dispatch(reload(newPeople));
    } else {
        if (newPeople.length !== 0)
            store.dispatch(load(newPeople));
    }
}
