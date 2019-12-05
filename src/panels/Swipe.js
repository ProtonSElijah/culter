import React, { useState, useEffect } from 'react';
import Header from "../Components/Header";
import Bottom from "../Components/Bottom";
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import '../ResetBrowser.css';
import './panelsStyle/Swipe.css';
import Card from "../Components/Card";

const Swipe = ({id, go}) => {

    useEffect(() => {
        async function refreshHeaderVK() {
            document.getElementById(id).children[0].style.paddingTop = 0;
        }
        refreshHeaderVK();
    }, []);

    return (
        <Panel id={id}>
            <Header text={id}/>

            <Card/>

            <Bottom go={go} left="personal" right="matches"/>
        </Panel>
    );
};

export default Swipe;
