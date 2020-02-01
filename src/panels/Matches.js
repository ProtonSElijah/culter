import React, { useState, useEffect } from 'react';

import Header from "../Components/Header";
import MatchedNavigationButtons from "../Components/MatchedNavigationButtons"
import MatchedScrollList from "../Components/MatchedScrollList";
import MatchedList from "../Components/MatchedList";
import Bottom from "../Components/Bottom";

import '../ResetBrowser.css';
import './panelsStyle/Matches.css';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import {fetchMatches, fetchPeople} from "../Api/People";

const Matches = ({id, user, go}) => {
    const [matchedPeople, setMatchedPeople] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(20);

    async function loadMatches(){
        let peopleResponse = await fetchMatches(user.id, page, size);
        let newPeople = await peopleResponse.json();
        console.log(newPeople);
        setPage(page + 1);
        setMatchedPeople(matchedPeople.concat(newPeople.content));
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

    return (
        <Panel id={id}>
            <Header panelId={id}/>
            <div className="Head">
                <p>{matchedPeople.length != 1 ?
                ""+matchedPeople.length+" новых совпадений" :
                   "" + matchedPeople.length + " новое совпадение"}</p>
            </div>

            <div className="ScrollContainer">
                {matchedPeople.length > 0 ?
                    <MatchedScrollList
                        list={matchedPeople}/> :
                    <div/>
                }
            </div>
            <div className="Dialogues">
                <p>Диалоги</p>
            </div>
            <div className="ListContainer">
                {matchedPeople.length > 0 ?
                    <MatchedList
                        list={matchedPeople}/> :
                    <div/>
                }
            </div>
            <Bottom go={go}/>
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
