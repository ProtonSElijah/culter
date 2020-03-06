import React from 'react';
import '../ComponentsStyle/CardView.scss'

const EventInformationView = ({event}) => {
    let isDateProvided = event.start_date != null;

    let date = "";
    let time = "";
    let week = "";
    let day = "";

    if (isDateProvided) {
        time = event.start_time.slice(0,event.start_time.length-3);
        date = new Date(event.start_date);
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
