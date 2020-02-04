import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

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

const Matches = ({id, go, activePanel}) => {
    const user = useSelector(state => state.userState.user);
    const [isSelectedFriends, setIsSelectedFriends] = useState("true");
    
    const onSwitchClick = (value) => {setIsSelectedFriends(value);}

    useEffect(() => {
        async function refreshHeaderVK() {
            document.getElementById(id).children[0].style.paddingTop = 0;
            document.body.style.setProperty('--background_page', 'white');
        }
        refreshHeaderVK();
    }, []);

    /*<MatchedNavigationButtons
                stateList = {isSelectedFriends}
                stateRefresh = {onSwitchClick}
                matchedList = {matchedPeople}
                friendsList = {matchedFriends}/>*/

    return (
        <Panel id={id}>
            <Header panelId={id}/>
            <div className="Head">
                <p>{matchedPeople.length != 1 ?
                ""+matchedPeople.length+" новых совпадений" :
                   "" + matchedPeople.length + "новое совпадение"}</p>
            </div>

            <div className="ScrollContainer">
                <MatchedScrollList
                       list={isSelectedFriends
                            ? matchedPeople
                            : matchedFriends} />
            </div>
            <div className="Dialogies">
                <p>Диалоги</p>
            </div>
            <div className="ListContainer">
                <MatchedList
                       list = {isSelectedFriends
                            ? matchedPeople
                            : matchedFriends} />
            </div>
            <Bottom go={go} activePanel={activePanel}/>
        </Panel>
    );
}

export default Matches;
