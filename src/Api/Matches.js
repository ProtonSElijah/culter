import config from "./api_config";
import store from "../redux/store/store";
import {loadMatches, reloadMatches} from "../redux/actions/matches-actions";

export async function fetchMatches() {
    let requestState = store.getState();
    let userId = requestState.userState.user.id;
    let page = requestState.matchesState.page;
    let size = requestState.matchesState.size;

    let url = buildUrl(userId, page, size);
    let response = await fetch(url, {method: "GET",});
    if (response.status !== 200) {
        return;
    }

    let newMatchesJson = await response.json();
    let newMatches = newMatchesJson.content;

    updateStore(newMatches);
}


function buildUrl(userId, page, size) {
    return config.url + "/user/" + userId
        + "/users/ratings?"
        + "&page=" + page
        + "&size=" + size;
}

function updateStore(newMatches) {
    if (newMatches.length !== 0)
        store.dispatch(loadMatches(newMatches));

}
