import React, {useState} from 'react';

const CommonEventsList = ({events}) => {

    return events.map(
        event =>
        <div className="eventContainer">
            <div className="poster">
                <img src={event.images[0].image} />
                <div className="annotation">
                    <p>{event.start_date}</p>
                    <p>{event.place}</p>
                </div>
            </div>
            <div className="name">
                <p>{event.short_title}</p>
            </div>
        </div>
    );
}

export default CommonEventsList;
