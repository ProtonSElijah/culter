import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import { View, Gallery, Panel } from '@vkontakte/vkui';

import Personal from './panels/Personal';
import Swipe from './panels/Swipe';
import Matches from './panels/Matches';

import '@vkontakte/vkui/dist/vkui.css';
import './ResetBrowser.css';
import {authorize} from "./Api/Auth";
import {fetchCategories} from "./Api/Events";

const AppCulter = () => {
    const [activePanel, setActivePanel] = useState('panels');
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [slideIndex, setSlideIndex] = useState(1);
    const [isLoaded, setIsLoaded] = useState(false);

    const go = e => {
        setActivePanel(e.currentTarget.dataset.to);
    };

    useEffect(() => {

        async function fetchAuthorizationData(){
            const loadedUser = await connect.sendPromise('VKWebAppGetUserInfo');
            setUser(loadedUser);
            let tokenObject = await connect.sendPromise("VKWebAppGetAuthToken", {
                "app_id": 7197573, "scope": "friends"});
            console.log(tokenObject);
            setToken(tokenObject.access_token);
            let response = await fetchCategories();

            console.log(response);
            let authStatus = await authorize(loadedUser.id,tokenObject.access_token);
            console.log(authStatus);
            setIsLoaded(true);
        }

        fetchAuthorizationData().then();


    }, []);
    return (
        <View activePanel={activePanel}>
            <Panel id="panels">
            <Gallery
                slideWidth="100%"
                style={{ height: "100vmax" }}
                bullets="dark"
                slideIndex={slideIndex}
                onChange={index => {if (index !== slideIndex) setSlideIndex(index)}}
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
