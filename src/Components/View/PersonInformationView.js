import React, {Component} from 'react';
import '../ComponentsStyle/CardView.scss'

const PersonInformationView = ({person}) => {

    let wantedEvents = person.common_events.slice(0,5);

    return  (

        <div className="Swipe-content-down-container">

            <div className="Swipe-content-down-center user">
                <p>{person.first_name}</p>

                <p>Общих событий: {person.common_events.length}</p>
                <p>Всего событий: {person.liked_events.length}</p>
            </div>

        </div>
    )

};

export default PersonInformationView;
