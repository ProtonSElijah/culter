import React, {useState} from 'react';
import './ComponentsStyle/Bottom.css';

import chatDisabled from "../assets/icons/chatGrey.svg";
import peopleDisabled from "../assets/icons/peopleGrey.svg";
import gridDisabled from "../assets/icons/gridGrey.svg";
import eventsDisabled from "../assets/icons/eventsGrey.svg";
import userDisabled from "../assets/icons/userGrey.svg";

import chatActive from "../assets/icons/chatRed.svg";
import peopleActive from "../assets/icons/peopleRed.svg";
import gridActive from "../assets/icons/gridRed.svg";
import eventsActive from "../assets/icons/eventsRed.svg";
import userActive from "../assets/icons/userRed.svg";

import {changePanel} from "../redux/actions/panel-actions";
import store from "../redux/store/store";
import panels from "../panels.json";
import BottomButton from "./BottomButton";

const Bottom = ({go, activePanel}) => {
    const onChangePanelClick = (event) => {
        console.log(event);
        store.dispatch(changePanel(event))
    };

    return (
        
        <div className="App-bottom">
            <BottomButton onClick={onChangePanelClick} panel={panels.personal} activePanel={activePanel}
                          activeImage={userActive} disabledImage={userDisabled}  />
            <BottomButton onClick={onChangePanelClick} panel={panels.grid} activePanel={activePanel}
                          activeImage={gridActive} disabledImage={gridDisabled}  />
            <BottomButton onClick={onChangePanelClick} panel={panels.events} activePanel={activePanel}
                          activeImage={eventsActive} disabledImage={eventsDisabled}  />
            <BottomButton onClick={onChangePanelClick} panel={panels.people} activePanel={activePanel}
                          activeImage={peopleActive} disabledImage={peopleDisabled}  />
            <BottomButton onClick={onChangePanelClick} panel={panels.matches} activePanel={activePanel}
                          activeImage={chatActive} disabledImage={chatDisabled}  />
        </div>
    );
    //Переключатель - две кнопки
    /*<div className="BottomLeftButton" onClick=onChangePanelClick data-to={left}><div></div></div>
    <div className="BottomRightButton" onClick=onChangePanelClick data-to={right}><div></div></div>*/
}

export default Bottom;
