import React, {Component} from 'react';
import '../ComponentsStyle/CardView.scss'


const EventInformationView = ({event}) => {
    let title = event.short_title.length > 20 ?
        event.short_title.slice(0,15) + "..." : event.short_title;

    let isDateProvided = event.dates.length > 0;
    if (!isDateProvided){
        return  (
            <div>
                <p id="Font-bold">{title}</p>
            </div>
        )
    }
    let time = event.dates[0].start_time.slice(0,event.dates[0].start_time.length-3);

    let date = new Date(event.dates[0].start_date);

    let week = date.toLocaleDateString("ru-Ru", { weekday: 'long' });
    let day = date.toLocaleDateString("ru-Ru", { month: 'long', day: 'numeric'});

    return  (
        <div>
            <p id="Font-bold">{title}</p>
                <p> {day}</p>
                <p>{time} {week} </p>
        </div>
    )

};

export default EventInformationView;
