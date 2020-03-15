import React from 'react';
import '../ComponentsStyle/CardView.scss'

import eventsIcon from '../../assets/icons/eventsRed.svg';
import chatIcon from '../../assets/icons/chatRed.svg';

const PeopleEndView = () => {


    return  (
        <div className="Swipe-content-down-container">
            <div className="Swipe-content-down-center">
                <p>Люди закончились</p>
                <div className="Swipe-content-down-center-date">
                    <p><img style={{"width": "20px"}} src={eventsIcon} alt="chat icon" />&nbsp;: выбери события</p>
                    <p><img style={{"width": "20px"}} src={chatIcon} alt="chat icon" />&nbsp;: позови на событие</p>
                </div>
            </div>
        </div>
    )

};

export default PeopleEndView;
