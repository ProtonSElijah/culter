import config from "./api_config"
import store from "../redux/store/store";
import {setAuthorizedUser} from "../redux/actions/user-actions";

export async function authorize(user) {
    let url = `${config.url}/user/identify?user_id=${user.id}`;
    let response = await fetch(url, {method: "GET",});
    if (response.status === 200) {
        store.dispatch(setAuthorizedUser(user));
    }
}
