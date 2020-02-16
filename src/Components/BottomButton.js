import React, {useState} from 'react';
import './ComponentsStyle/Bottom.css';

import chatDes from "../assets/icons/chatGrey.svg";
import eventDes from "../assets/icons/peopleGrey.svg";
import gridDes from "../assets/icons/gridGrey.svg";
import swipeDes from "../assets/icons/eventsGrey.svg";
import userDes from "../assets/icons/userGrey.svg";

import chatActive from "../assets/icons/chatRed.svg";
import eventActive from "../assets/icons/peopleRed.svg";
import gridActive from "../assets/icons/gridRed.svg";
import swipeActive from "../assets/icons/eventsRed.svg";
import userActive from "../assets/icons/userRed.svg";
import {changePanel} from "../redux/actions/panel-actions";
import store from "../redux/store/store";
import panels from "../panels.json";

const BottomButton = ({panel, activePanel, activeImage, disabledImage, onClick }) => {
    return (
        <div className="Bottom-button" onClick={onClick}
             data-to={panel}>
            <img src={activePanel === panel ? activeImage : disabledImage} alt={panel} />
        </div>
    );
};

export default BottomButton;
