import React, {useState} from 'react';
import './ComponentsStyle/Bottom.css';

import chatDes from "../assets/icons/chatGrey.svg";
import eventDes from "../assets/icons/eventGrey.svg";
import gridDes from "../assets/icons/gridGrey.svg";
import swipeDes from "../assets/icons/swipeGrey.svg";
import userDes from "../assets/icons/userGrey.svg";

import chatActive from "../assets/icons/chatRed.svg";
import eventActive from "../assets/icons/eventRed.svg";
import gridActive from "../assets/icons/gridRed.svg";
import swipeActive from "../assets/icons/swipeRed.svg";
import userActive from "../assets/icons/userRed.svg";

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
                data-to="events">
               <img  id="eventsButton" src={activePanel == "events" ? swipeActive : swipeDes} alt="events" />
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
