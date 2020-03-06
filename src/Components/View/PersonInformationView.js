import React from 'react';
import '../ComponentsStyle/CardView.scss'

const PersonInformationView = ({person}) => {


    return  (

        <div className="Swipe-content-down-container">

            <div className="Swipe-content-down-center user">
                <p>{person.first_name}</p>

                <p>Общих событий: <b>{person.count_common_events}</b></p>
   
            </div>

        </div>
    )

};

export default PersonInformationView;
