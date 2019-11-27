import React, { useState, useEffect } from 'react';
import Header from "../Components/Header";
import Bottom from "../Components/Bottom";
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import connect from '@vkontakte/vk-connect';
import './panelsStyle/Personal.css';


const Personal = ({id, go}) => {
    const [fetchedUser, setUser] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const user = await connect.sendPromise('VKWebAppGetUserInfo');
            setUser(user);
        }
        fetchData();
    }, []);

    return (
        <Panel id={id}>

            <Header text={id}></Header>
            <div className="PersonalContent">
                <div className="PersonalBlock">
                       {fetchedUser &&
                        <div className="PersonalData">
                           <img src={fetchedUser.photo_200 ? fetchedUser.photo_200 : null} alt="Person"/>
                           <p>
                           {fetchedUser.first_name ? fetchedUser.first_name : ""}
                           {fetchedUser.last_name ? (" " + fetchedUser.last_name) : "" }
                           </p>
                        </div>
                        }
                </div>
            </div>
            <Bottom go={go} left="matches" right="swipe"/>
        </Panel>
    );
}

export default Personal;
