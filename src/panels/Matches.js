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
import {fetchMatches} from "../Api/Matches";

const Matches = ({id}) => {
    const user = useSelector(state => state.userState.user);
    const [matchedPeople, setMatchedPeople] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(20);

    async function loadMatches(){
        let peopleResponse = await fetchMatches(user.id, page, size);
        let newPeople = await peopleResponse.json();

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
        if (user != null)
            loadMatches();
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
                <p>Совпадения</p>
            </div>
            <div className="ListContainer">
                {matchedPeople.length > 0 ?
                    <MatchedList
                        list={matchedPeople}/> :
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
