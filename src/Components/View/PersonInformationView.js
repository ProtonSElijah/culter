import React, {Component} from 'react';
import '../ComponentsStyle/CardView.scss'


const PersonInformationView = ({person}) => {

    let wantedEvents = person.common_events.slice(0,5);

    return  (

        <div>
            <p id="Font-bold"><b>{person.first_name}</b></p>

            <p>Общих событий: <b>{person.common_events.length}</b></p>
            <p>Всего событий: <b>{person.liked_events.length}</b></p>

        </div>
    )

};

export default PersonInformationView;        
