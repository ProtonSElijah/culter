import store from "../redux/store/store";
import {loadMatches} from "../redux/actions/matches-actions";
import { fetchMatchesCall } from "../Api/Matches"

export async function fetchMatches() {
    let requestState = store.getState();
    let userId = requestState.userState.user.id;
    let page = requestState.matchesState.page;
    let size = requestState.matchesState.size;

    let matches = await fetchMatchesCall(userId, page, size);
    updateStore(matches);

}


function updateStore(newMatches) {
    if (newMatches.content.length !== 0)
        store.dispatch(loadMatches(newMatches));

}
