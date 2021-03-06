import React from 'react';
import './ComponentsStyle/CommonEventsList.scss';
const CommonEventsList = ({events}) => {
  const getFormattedDay = (date) => {
    if (!date) return '';
    const day = new Date(date);
    return day.toLocaleDateString('ru-Ru', {month: 'long', day: 'numeric'});
  };

  return events.map(
      (event) =>
        <div className="eventContainer" >
          <div className="poster">
            <div className="image-container">
              <img src={event.images[0].image} alt={event.short_title}/>
            </div>
            <div className="annotation">
              <p>{getFormattedDay(event.start_date)}</p>
              <p>{event.place_short_title}</p>
            </div>
          </div>
          <div className="name">
            <p>{event.short_title}</p>
          </div>
        </div>,
  );
};

export default CommonEventsList;
