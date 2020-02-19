import React from 'react';
import '../ComponentsStyle/CardView.scss'

import LeftButton from '../../assets/icons/eventAnnotationLeftButton.svg';
import RightButton from '../../assets/icons/eventAnnotationRightButton.svg';

const EventInformationView = ({event}) => {
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

            <div className="Swipe-content-down-center">
                <p>{event.short_title}</p>
                {isDateProvided &&
                <p> {day}</p>}
                {isDateProvided &&
                <p>{time} {week} </p>
                 }
            </div>

        </div>
    )

};

export default EventInformationView;
