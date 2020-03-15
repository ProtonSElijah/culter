import React from 'react';
import '../ComponentsStyle/CardView.scss'

import peopleIcon from '../../assets/icons/peopleRed.svg';
import chatIcon from '../../assets/icons/chatRed.svg';
import eventsIcon from "../../assets/icons/eventsRed.svg";

const EventEndView = () => {


    return  (
        <div className="Swipe-content-down-container">
            <div className="Swipe-content-down-center">
                <p>События закончились</p>
                <div className="Swipe-content-down-center-date">
                    <p><img style={{"width": "20px"}} src={peopleIcon} alt="chat icon" />&nbsp;: найди компанию</p>
                    <p><img style={{"width": "20px"}} src={chatIcon} alt="chat icon" />&nbsp;: позови на событие</p>
                </div>
            </div>
        </div>
    )

};

export default EventEndView;
