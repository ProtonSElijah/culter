import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import { View, Gallery, Panel } from '@vkontakte/vkui';

import Personal from './panels/Personal';
import Swipe from './panels/Swipe';
import Matches from './panels/Matches';

import '@vkontakte/vkui/dist/vkui.css';
import './ResetBrowser.css';
import {authorize} from "./Api/Auth";

const AppCulter = () => {
    const [activePanel, setActivePanel] = useState('panels');
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);

    const go = e => {
        setActivePanel(e.currentTarget.dataset.to);
    };

    useEffect(() => {
        async function fetchData() {
            const user = await connect.sendPromise('VKWebAppGetUserInfo');
            setUser(user);
        }
        async function fetchToken(){
            let tokenObject = await connect.sendPromise("VKWebAppGetAuthToken", {
                "app_id": 7197573, "scope": "friends"});
            setToken(tokenObject.access_token);
        }

        fetchData().then(
            _ => fetchToken().then(_ =>
                authorize(user.id,token).then(
                    data => console.log(data)
                )
            )
        );
        authorize("USER_ID","TOKEN")
            .then(data => console.log(data));

    }, []);
    return (
        <View activePanel={activePanel}>
            <Panel id="panels">
            <Gallery
                slideWidth="100%"
                style={{ height: "100vmax" }}
                bullets="dark"
              >
                <Personal id='personal' go={go}/>
                <Swipe user={user} id='swipe' go={go}/>
                <Matches id='matches' go={go}/>
              </Gallery>
            </Panel>
        </View>
    );
}

export default AppCulter;
