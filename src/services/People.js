import store from '../redux/store/store';
import {load, reload} from '../redux/actions/people-actions';
import {fetchPeopleCall} from '../Api/People';

export async function fetchPeople(isReload = false) {
  const requestState = store.getState();
  const userId = requestState.userState.user.id;
  const page = requestState.peopleState.page;
  const size = requestState.peopleState.size;

  const people = await fetchPeopleCall(userId, page, size, isReload);
  updateStore(isReload, people);
}


const updateStore = (isReload, newPeople) => {
  if (isReload) {
    store.dispatch(reload(newPeople));
  } else {
    if (newPeople.length !== 0) {
      store.dispatch(load(newPeople));
    }
  }
};
