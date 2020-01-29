import React, {Component} from 'react';
import '../ComponentsStyle/CardView.scss'


const PersonInformationView = ({person}) => {

    let wantedEvents = person.common_events.slice(0,5);

    return  (

        <div>
            <p id="Font-bold">{person.first_name}</p>

            <p>Общих событий: {person.common_events.length}</p>
            <p>Всего событий: {person.liked_events.length}</p>

        </div>
    )

};

export default PersonInformationView;
