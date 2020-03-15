import React from 'react';
import '../ComponentsStyle/CardView.scss'

const EventInformationView = ({event}) => {
    let isDateProvided = event.start_date && event.start_time;
    let isPlaceProvided = event.place && event.place.title;
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

    let place = "";
    if (isPlaceProvided){

        if (event.place.title.length <= 16){
            place = event.place.title;
        } else {
            place = event.place.short_title;
        }


    }

    return  (
        <div className="Swipe-content-down-container">

            <div className="Swipe-content-down-center">
                <p>{event.short_title}</p>
                <div className="Swipe-content-down-center-date">
                    {isDateProvided &&
                    <p>{day}, {week}</p>}
                    {isPlaceProvided &&
                    <p>{place}</p>}
                 </div>
            </div>

        </div>
    )

};

export default EventInformationView;
