import React from 'react';
import '../ComponentsStyle/CardView.scss'

import LeftButton from '../../icons/eventAnnotationLeftButton.svg';
import RightButton from '../../icons/eventAnnotationRightButton.svg';

const EventInformationView = ({event}) => {
    let title = event.short_title.length > 18 ?
        event.short_title.slice(0,15) + "..." : event.short_title;

    let isDateProvided = event.dates.length > 0;

    let date = "";
    let time = "";
    let week = "";
    let day = "";

    if (isDateProvided) {
        time = event.dates[0].start_time.slice(0,event.dates[0].start_time.length-3);
        date = new Date(event.dates[0].start_date);
        week = date.toLocaleDateString("ru-Ru", { weekday: 'long' });
        day = date.toLocaleDateString("ru-Ru", { month: 'long', day: 'numeric'});
    }

    return  (
        <div className="Swipe-content-down-container">

            {/* <div className="Swipe-content-down-aside">
                <div className="Swipe-content-down-button">
                    <img src={LeftButton} alt="leftButton" />
                </div>
            </div> */}

            <div className="Swipe-content-down-center">
                <p>{title}</p>
                {isDateProvided &&
                <p> {day}</p>}
                {isDateProvided &&
                <p>{time} {week} </p>
                 }
            </div>

            {/* <div className="Swipe-content-down-aside">
                <div className="Swipe-content-down-button">
                    <img id="Swipe-content-down-button-right" src={RightButton} alt="rightButton" />
                </div>
            </div> */}
        </div>
    )

};

export default EventInformationView;
