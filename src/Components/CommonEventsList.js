import React, {useState} from 'react';

const CommonEventsList = ({events}) => {
    return events.map(
        event =>
        <div className="eventContainer">
            <div className="poster">
                <img src={event.img} />
                <div className="annotation">
                    <p>{event.date}</p>
                    <p>{event.place}</p>
                </div>
            </div>
            <div className="name">
                <p>{event.name}</p>
            </div>
        </div>
    );
}

export default CommonEventsList;
