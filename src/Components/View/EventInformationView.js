import React, {Component} from 'react';
import '../ComponentsStyle/CardView.scss'


const EventInformationView = ({event}) => {

    return  (

        <div>
            <p id="Font-bold"><b>{event.short_title}</b></p>

            <p><b>4</b> апреля, суббота, <b>20:00</b></p>

            <p><b>20</b> человек идёт - <b>1</b> друг</p>
        </div>
    )

};

export default EventInformationView;
