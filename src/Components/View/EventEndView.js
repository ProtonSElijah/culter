import React from 'react';
import '../ComponentsStyle/CardView.scss'

import peopleIcon from '../../assets/icons/peopleRed.svg';
import chatIcon from '../../assets/icons/chatRed.svg';

const EventEndView = ({}) => {


    return  (
        <div className="Swipe-content-down-container">
            <div className="Swipe-content-down-center">
                <p>События закончились</p>
                <p><div className="Swipe-content-down-image"><img src={peopleIcon}  alt="people icon"/></div>&nbsp; Найди компанию на ивент</p>
                <p><div className="Swipe-content-down-image"><img src={chatIcon} alt="chat icon" /></div>&nbsp; Позови людей на ивент</p>
            </div>
        </div>
    )

};

export default EventEndView;
