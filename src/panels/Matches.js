import React, { useState, useEffect } from 'react';

import Header from "../Components/Header";
import MatchedNavigationButtons from "../Components/MatchedNavigationButtons"
import MatchedScrollList from "../Components/MatchedScrollList";
import MatchedList from "../Components/MatchedList";
import Bottom from "../Components/Bottom";

import '../ResetBrowser.css';
import './panelsStyle/Matches.css';

import matchedPeople from "../Components/ExportMatchedPeople";
import matchedFriends from "../Components/ExportMatchedFriends";

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';

const Matches = ({id, go}) => {
    const [isSelectedFriends, setIsSelectedFriends] = useState("true");

    const onSwitchClick = (value) => {setIsSelectedFriends(value);}

    useEffect(() => {
        async function refreshHeaderVK() {
            document.getElementById(id).children[0].style.paddingTop = 0;
        }
        refreshHeaderVK();
    }, []);

    return (
        <Panel id={id}>
            <Header text={id}/>
            <div className="HeaderLine"></div>
            <div className="Head">
                <p>Новые совпадения</p>
            </div>
            <MatchedNavigationButtons
                stateList = {isSelectedFriends}
                stateRefresh = {onSwitchClick}
                matchedList = {matchedPeople}
                friendsList = {matchedFriends}/>
            <div className="ScrollContainer">
                <MatchedScrollList
                       list={isSelectedFriends
                            ? matchedPeople
                            : matchedFriends} />
            </div>
            <div className="Head Dialog">
                <p>Диалоги</p>
            </div>
            <div className="ListContainer">
                <MatchedList
                       list = {isSelectedFriends
                            ? matchedPeople
                            : matchedFriends} />
                </div>
            <Bottom go={go} left="swipe" right="personal"/>
        </Panel>
    );
}

export default Matches;
