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

import panels from "./panels.json"

const AppCulter = () => {
    const activePanel = useSelector(state => state.panelState.active);

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
        <View activePanel={activePanel}>
            <Personal id={panels.personal}/>
            <Grid id={panels.grid}/>
            <Events id={panels.events}/>
            <People id={panels.people}/>
            <Matches id={panels.matches}/>
        </View>
    );
};

export default AppCulter;
