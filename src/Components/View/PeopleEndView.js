import React from 'react';
import '../ComponentsStyle/CardView.scss'

import eventsIcon from '../../assets/icons/eventsRed.svg';
import chatIcon from '../../assets/icons/chatRed.svg';

const PeopleEndView = ({}) => {


    return  (
        <div className="Swipe-content-down-container">
            <div className="Swipe-content-down-center">
                <p>Люди закончились</p>
                <p><div className="Swipe-content-down-image"><img src={eventsIcon} /></div>&nbsp; Выбери куда бы ты ещё хотел сходить</p>
                <p><div className="Swipe-content-down-image"><img src={chatIcon} /></div>&nbsp; Позови людей на мероприятие</p>
            </div>
        </div>
    )

};

export default PeopleEndView;
