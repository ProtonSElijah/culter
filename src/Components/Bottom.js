import React from 'react';
import './ComponentsStyle/Bottom.css';

const Bottom = ({go, left, right}) => {
    return (
        <div className="App-bottom">
           <div className="Bottom-button Bottom-profileButton" onClick={go} data-to="personal">
               <img src="https://image.flaticon.com/icons/svg/591/591762.svg" alt="personal" />
           </div>
           <div className="Bottom-button Bottom-eventsGridButton">

           </div>
           <div className="Bottom-button Bottom-eventsSwipeButton" onClick={go} data-to="swipe">
               <img src="https://image.flaticon.com/icons/svg/2357/2357918.svg" alt="swipe" />
           </div>
           <div className="Bottom-button Bottom-peopleSwipeButton">

           </div>
           <div className="Bottom-button Bottom-matchesButton" onClick={go} data-to="matches">
               <img src="https://image.flaticon.com/icons/svg/684/684808.svg" alt="matches" />
           </div>
        </div>
    );
    //Переключатель - две кнопки
    /*<div className="BottomLeftButton" onClick={go} data-to={left}><div></div></div>
    <div className="BottomRightButton" onClick={go} data-to={right}><div></div></div>*/
}

export default Bottom;
