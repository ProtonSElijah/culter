import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

import Header from "../Components/Header";
import MatchedNavigationButtons from "../Components/MatchedNavigationButtons"
import MatchedScrollList from "../Components/MatchedScrollList";
import MatchedList from "../Components/MatchedList";
import Bottom from "../Components/Bottom";

import '../ResetBrowser.css';
import './panelsStyle/Matches.css';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import {fetchMatches} from "../services/Matches";

const Matches = ({id}) => {
    const user = useSelector(state => state.userState.user);
    const matches = useSelector(state => state.matchesState.matches);

    async function loadMatches(){
        await fetchMatches();
    }

    useEffect(() => {
        if (user != null)
            loadMatches();
    }, [user]);

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
                <p>{matches.length != 1 ?
                ""+matches.length+" новых совпадений" :
                   "" + matches.length + " новое совпадение"}</p>
            </div>

            <div className="ScrollContainer">
                {matches.length > 0 ?
                    <MatchedScrollList
                        list={matches}/> :
                    <div/>
                }
            </div>
            <div className="Dialogues">
                <p>Совпадения</p>
            </div>
            <div className="ListContainer">
                {matches.length > 0 ?
                    <MatchedList
                        list={matches}/> :
                    <div/>
                }
            </div>
            <Bottom/>
        </Panel>
    );
}

export default Matches;

//const [isSelectedFriends, setIsSelectedFriends] = useState("true");
//const onSwitchClick = (value) => {setIsSelectedFriends(value);}
/*<MatchedNavigationButtons
               stateList = {isSelectedFriends}
               stateRefresh = {onSwitchClick}
               matchedList = {matchedPeople}
               friendsList = {matchedFriends}/>*/
