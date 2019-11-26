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

const Matches = () => {
    const [isSelectedFriends, setIsSelectedFriends] = useState("true");

    const onSwitchClick = (value) => {setIsSelectedFriends(value);}

    return (
        <div id="SwipeScreen" className="PanelMatches">
            <Header />
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
            <div className="ListContainer">
                <MatchedList
                       list = {isSelectedFriends
                            ? matchedPeople
                            : matchedFriends} />
                </div>
            <Bottom />
        </div>
    );
}

export default Matches;
