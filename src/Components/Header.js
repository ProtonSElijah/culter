import React from 'react';
import './ComponentsStyle/Header.css';

const Header = ({panelId}) => {
    let panelTitle = "";
    switch (panelId) {
        case "personal": panelTitle = "Профиль"; break;
        case "grid": panelTitle = "События"; break;
        case "swipe": panelTitle = "События"; break;
        case "people": panelTitle = "Люди"; break;
        case "matches": panelTitle = "Диалоги"; break;
    }
    return (
        <div className="App-header">
            <div className="App-header-content">
                <p>{"Culter".toUpperCase()}</p>
            </div>
            <div className="App-header-bottomLine"></div>
            <div className="App-header-panelTitle">
                <p>{panelTitle}</p>
            </div>
        </div>
    );
}

export default Header;
