import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';

import Personal from './panels/Personal';
import Swipe from './panels/Swipe';
import Matches from './panels/Matches';

const AppCulter = () => {
    const [activePanel, setActivePanel] = useState('matches');

    const go = e => {
        setActivePanel(e.currentTarget.dataset.to);
    };

    return (
        <View activePanel={activePanel}>
            <Personal id='personal' go={go}/>
            <Swipe id='swipe' go={go}/>
            <Matches id='matches' go={go}/>
        </View>
    );
}

export default AppCulter;