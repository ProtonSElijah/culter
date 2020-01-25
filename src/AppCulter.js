import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';

import Personal from './panels/Personal';
import Swipe from './panels/Swipe';
import Matches from './panels/Matches';
import Grid from './panels/Grid';

import '@vkontakte/vkui/dist/vkui.css';
import './ResetBrowser.css';
import {authorize} from "./Api/Auth";

const AppCulter = () => {
    const [activePanel, setActivePanel] = useState('swipe');
    const [user, setUser] = useState(null);

    const go = e => {
        setActivePanel(e.currentTarget.dataset.to);
    }

    useEffect(() => {
        async function fetchData() {
            const user = await connect.sendPromise('VKWebAppGetUserInfo');
            setUser(user);
            return user;
        }
        fetchData().then(user => authorize(user.id));
    }, []);


    return (
        <View activePanel={activePanel}>
            <Personal id='personal' go={go} />
            <Grid id="grid" go={go} />
            <Swipe user={user} id='swipe' go={go} />
            <Matches id='matches' go={go} />
        </View>
    );
}

export default AppCulter;
