import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';

import Personal from './panels/Personal';
import Events from './panels/Events';
import Matches from './panels/Matches';
import Grid from './panels/Grid';
import People from './panels/People';

import '@vkontakte/vkui/dist/vkui.css';
import './ResetBrowser.css';
import {authorize} from "./Api/Auth";
import config from "./Api/api_config.json";
import settings from "./Api/dev_settings.json";
import {useSelector} from "react-redux";

const AppCulter = () => {
    const activePanel2 = useSelector(state => state.panelState.active);
    const [activePanel, setActivePanel] = useState('events');
    const go = e => {
        setActivePanel(e.currentTarget.dataset.to);
    };

    useEffect(() => {
        async function fetchData() {
            let fetchedUser = config.is_dev ?
                {'id' : settings.user_id} :
                await connect.sendPromise('VKWebAppGetUserInfo');
            
            await authorize(fetchedUser);
        }
        fetchData();

    }, []);


    return (
        <View activePanel={activePanel2}>
            <Personal id='personal' go={go} activePanel={activePanel}/>
            <Grid id="grid" go={go} activePanel={activePanel}/>
            <Events id='events' go={go} activePanel={activePanel}/>
            <People id='people' go={go} activePanel={activePanel}/>
            <Matches id='matches' go={go} activePanel={activePanel}/>
        </View>
    );
};

export default AppCulter;
