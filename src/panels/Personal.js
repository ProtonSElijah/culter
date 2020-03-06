import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import Header from "../Components/Header";
import Bottom from "../Components/Bottom";
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import './panelsStyle/Personal.css';


const Personal = ({id}) => {
    const user = useSelector(state => state.userState.user);

    useEffect(() => {
        async function refreshHeaderVK() {
            document.getElementById(id).children[0].style.paddingTop = 0;
            document.body.style.setProperty('--background_page', 'white');
        }
        refreshHeaderVK();

        // async function fetchToken(){
        //     let tokenObject = await connect.sendPromise("VKWebAppGetAuthToken", {
        //         "app_id": lol, "scope": "friends"});
        //     setToken(tokenObject.access_token);
        // }
        //fetchToken();
    }, []);

    return (
        <Panel id={id}>
            <Header panelId={id}/>
            <div className="PersonalContent">
                <div className="PersonalBlock">
                       {user &&
                        <div className="PersonalData">
                           <img src={user.photo_200 ? user.photo_200 : null} alt="Person"/>

                           <p>{user.first_name ? user.first_name : ""}</p>
                           <p>{user.last_name ? (" " + user.last_name) : "" }</p>

                            {
                               /* token &&
                                <p>
                                    {token}
                                </p>*/
                            }
                        </div>
                        }
                </div>
            </div>
            <Bottom/>
        </Panel>
    );
};

export default Personal;
