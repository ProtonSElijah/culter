import React from 'react';

const MatchedNavigationButtons = ({stateList, stateRefresh, matchedList, friendsList}) => {

    const onSwitchMatched = () => {stateRefresh(true); RefreshButtons(true)};
    const onSwitchFriends = () => {stateRefresh(false); RefreshButtons(false)};

    const RefreshButtons = (value) => {
        document.getElementById("matchedButton").classList.toggle("NavigationButtonsActive", value);
        document.getElementById("friendsButton").classList.toggle("NavigationButtonsActive", !value);
        document.getElementById("matchedButton").classList.toggle("NavigationButtonsDefault", !value);
        document.getElementById("friendsButton").classList.toggle("NavigationButtonsDefault", value);
    };

    return (
        <div className="NavigationButtons">
            <button
                id="matchedButton"
                className="NavigationButtonsActive"
                onClick={onSwitchMatched}>
                    {matchedList.length} людей
            </button>
            <button
                id="friendsButton"
                className="NavigationButtonsDefault"
                onClick={onSwitchFriends}>
                    {friendsList.length} друг
                </button>
        </div>
    );
}

export default MatchedNavigationButtons;
