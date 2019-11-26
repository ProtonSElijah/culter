import React from 'react';
import Header from "../Components/Header";
import Bottom from "../Components/Bottom";
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import '../ResetBrowser.css';

const Personal = ({id, go}) => {

    return (
        <Panel id={id}>
            <Header />

            <Bottom go={go} left="" right=""/>
        </Panel>
    );
};

export default Personal;
