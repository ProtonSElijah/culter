import React, {useState} from 'react';
import './ComponentsStyle/Bottom.css';

import chatDes from "../icons/chatGrey.svg";
import eventDes from "../icons/eventGrey.svg";
import gridDes from "../icons/gridGrey.svg";
import swipeDes from "../icons/swipeGrey.svg";
import userDes from "../icons/userGrey.svg";

import chatActive from "../icons/chatRed.svg";
import eventActive from "../icons/eventRed.svg";
import gridActive from "../icons/gridRed.svg";
import swipeActive from "../icons/swipeRed.svg";
import userActive from "../icons/userRed.svg";

const Bottom = ({go, activePanel}) => {

    return (
        
        <div className="App-bottom">
           <div className="Bottom-button Bottom-profileButton" onClick={go}
                data-to="personal">
               <img id="personalButton" src={activePanel == "personal" ? userActive : userDes} alt="personal" />
           </div>
           <div className="Bottom-button Bottom-eventsGridButton" onClick={go} data-to="grid">
               <img id="gridButton" src={activePanel == "grid" ? gridActive : gridDes} alt="swipe" />
           </div>
           <div className="Bottom-button Bottom-eventsSwipeButton" onClick={go}
                data-to="swipe">
               <img  id="swipeButton" src={activePanel == "swipe" ? swipeActive : swipeDes} alt="swipe" />
           </div>
           <div className="Bottom-button Bottom-peopleSwipeButton" onClick={go} data-to="people">
               <img id="peopleButton" src={activePanel == "people" ? eventActive : eventDes} alt="people" />
           </div>
           <div className="Bottom-button Bottom-matchesButton" onClick={go}
                data-to="matches">
               <img id="matchesButton" src={activePanel == "matches" ? chatActive : chatDes} alt="matches" />
           </div>
        </div>
    );
    //Переключатель - две кнопки
    /*<div className="BottomLeftButton" onClick={go} data-to={left}><div></div></div>
    <div className="BottomRightButton" onClick={go} data-to={right}><div></div></div>*/
}

export default Bottom;
