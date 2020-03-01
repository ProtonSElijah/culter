import store from "../redux/store/store";
import {loadMatches} from "../redux/actions/matches-actions";
import { fetchMatchesCall } from "../Api/Matches"

export async function fetchMatches() {
    let requestState = store.getState();
    let userId = requestState.userState.user.id;
    let page = requestState.peopleState.page;
    let size = requestState.peopleState.size;

    let matches = await fetchMatchesCall(userId, page, size);
    console.log(matches);
    updateStore(matches);

}


function updateStore(newMatches) {
    if (newMatches.length !== 0)
        store.dispatch(loadMatches(newMatches));

}
