import {setEventRateCall, setUserRateCall} from '../Api/Ratings';
import store from "../redux/store/store";

export async function setEventRate(eventId, isLiked) {
    let userId = getUserId();

    return setEventRateCall(userId, eventId, isLiked);
}

export async function setUserRate(otherUserId, isLiked) {
    let userId = getUserId();

    return setUserRateCall(userId, otherUserId, isLiked);
}

function getUserId() {
    let requestState = store.getState();
    return requestState.userState.user.id;
}