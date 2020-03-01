import React from 'react';
import '../ComponentsStyle/CardView.scss'

import eventsIcon from '../../assets/icons/eventsRed.svg';
import chatIcon from '../../assets/icons/chatRed.svg';

const PeopleEndView = ({}) => {


    return  (
        <div className="Swipe-content-down-container">
            <div className="Swipe-content-down-center">
                <p>Люди закончились</p>
                <p><div className="Swipe-content-down-image"><img src={eventsIcon} /></div>&nbsp; Выбери куда пойти</p>
                <p><div className="Swipe-content-down-image"><img src={chatIcon} /></div>&nbsp; Позови людей на ивент</p>
            </div>
        </div>
    )

};

export default PeopleEndView;
