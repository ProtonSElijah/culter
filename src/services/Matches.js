import store from '../redux/store/store';
import {loadMatches} from '../redux/actions/matches-actions';
import {fetchMatchesCall} from '../Api/Matches';

export async function fetchMatches() {
  const requestState = store.getState();
  const userId = requestState.userState.user.id;
  const page = requestState.matchesState.page;
  const size = requestState.matchesState.size;

  const matches = await fetchMatchesCall(userId, page, size);
  updateStore(matches);
}


function updateStore(newMatches) {
  if (newMatches.content.length !== 0) {
    store.dispatch(loadMatches(newMatches));
  }
}
