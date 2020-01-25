import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';

import Personal from './panels/Personal';
import Swipe from './panels/Swipe';
import Matches from './panels/Matches';

import '@vkontakte/vkui/dist/vkui.css';
import './ResetBrowser.css';
import {authorize} from "./Api/Auth";
import config from "./Api/api_config.json";

const AppCulter = () => {
    const [activePanel, setActivePanel] = useState('swipe');
    const [user, setUser] = useState(null);

    const go = e => {
        setActivePanel(e.currentTarget.dataset.to);
    };

    useEffect(() => {
        async function fetchData() {
            let fetchedUser = config.is_dev ?
                {'id' : config.user_id} :
                await connect.sendPromise('VKWebAppGetUserInfo');
                
            await authorize(fetchedUser.id);
            setUser(fetchedUser);
        }
        fetchData();
    
    }, []);


    return (
        <View activePanel={activePanel}>
            <Personal id='personal' go={go}/>
            <Swipe user={user} id='swipe' go={go}/>
            <Matches id='matches' go={go}/>
        </View>
    );
}

export default AppCulter;
