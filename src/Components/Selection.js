import React from 'react';
import {useSelector} from 'react-redux';
import './ComponentsStyle/Selection.scss';
import CommonEventsList from './CommonEventsList';

const Selection = ({ }) => {
  const events = useSelector((state) => state.eventsState.events);
  return (
    <div className="selection-container">

      <div className="header">
        <p>Подборка</p>
        <p>255+</p>
      </div>

      <div className="body">
        <div className="scroll">
          <CommonEventsList events={events}/>
        </div>

      </div>

    </div>
  );
};

export default Selection;
