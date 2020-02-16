import React from 'react';
import './ComponentsStyle/Header.css';

import IconFilter from '../assets/icons/filter.svg';

const Header = ({panelId}) => {
    let panelTitle = "";
    switch (panelId) {
        case "personal": panelTitle = "Профиль"; break;
        case "grid": panelTitle = "События"; break;
        case "events": panelTitle = "События"; break;
        case "people": panelTitle = "Люди"; break;
        case "matches": panelTitle = "Диалоги"; break;
    }
    return (
        <div className="App-header">
            <div className="App-header-content">
                <p>{"Culter"}</p>
            </div>
            <div className="App-header-panelTitle">
                <p>{panelTitle}</p>
                <img src={IconFilter} alt="filter" />
            </div>
        </div>
    );
};

export default Header;
