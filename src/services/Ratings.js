import {setEventRateCall, setUserRateCall} from '../Api/Ratings';
import store from '../redux/store/store';

export async function setEventRate(eventId, isLiked) {
  const userId = getUserId();

  return setEventRateCall(userId, eventId, isLiked);
}

export async function setUserRate(otherUserId, isLiked) {
  const userId = getUserId();

  return setUserRateCall(userId, otherUserId, isLiked);
}

function getUserId() {
  const requestState = store.getState();
  return requestState.userState.user.id;
}
