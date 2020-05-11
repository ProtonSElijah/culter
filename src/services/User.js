import store from '../redux/store/store';
import {setAuthorizedUser} from '../redux/actions/user-actions';
import {authorizeRequest, setUserImageRequest} from '../Api/User';

export async function authorize(user) {
  const response = await authorizeRequest(user);

  if (response.status === 200) {
    store.dispatch(setAuthorizedUser(user));
  }

  return response.json();
}

export async function setUserImage(userId, imageUrl) {
  await setUserImageRequest(userId, imageUrl);
}
