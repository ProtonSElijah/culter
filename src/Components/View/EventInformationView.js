import React from 'react';
import '../ComponentsStyle/CardView.scss'

import LeftButton from '../../assets/icons/eventAnnotationLeftButton.svg';
import RightButton from '../../assets/icons/eventAnnotationRightButton.svg';

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

            {/* <div className="Events-content-down-aside">
                <div className="Events-content-down-button">
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

            {/* <div className="Events-content-down-aside">
                <div className="Events-content-down-button">
                    <img id="Events-content-down-button-right" src={RightButton} alt="rightButton" />
                </div>
            </div> */}
        </div>
    )

};

export default EventInformationView;
