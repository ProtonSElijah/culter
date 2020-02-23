import React from 'react';
import '../ComponentsStyle/CardView.scss'

import eventsIcon from '../../assets/icons/eventsRed.svg';
import peopleIcon from '../../assets/icons/peopleRed.svg';
import chatIcon from '../../assets/icons/chatRed.svg';

const EventEndView = ({}) => {


    return  (
        <div className="Swipe-content-down-container">
            <div className="Swipe-content-down-center">
                <p>События закончились</p>
                <p><div className="Swipe-content-down-image"><img src={peopleIcon} /></div>&nbsp; Найди компанию на ивент</p>
                <p><div className="Swipe-content-down-image"><img src={chatIcon} /></div>&nbsp; Позови людей на ивент</p>
            </div>
        </div>
    )

};

export default EventEndView;
