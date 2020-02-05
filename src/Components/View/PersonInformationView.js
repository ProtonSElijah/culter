import React, {Component} from 'react';
import '../ComponentsStyle/CardView.scss'

const PersonInformationView = ({person}) => {

    let wantedEvents = person.common_events.slice(0,5);

    return  (

        <div className="Swipe-content-down-container">

            <div className="Swipe-content-down-center user">
                <p>{person.first_name}</p>

                <p>Общих событий: <b>{person.common_events.length}</b></p>
   
            </div>

        </div>
    )

};

export default PersonInformationView;
