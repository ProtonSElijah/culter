import store from "../redux/store/store";
import {setAuthorizedUser} from "../redux/actions/user-actions";
import {authorizeRequest} from "../Api/Auth";

export async function authorize(user) {
    let response = await authorizeRequest(user);

    if (response.status === 200) {
        store.dispatch(setAuthorizedUser(user));
    }
}
