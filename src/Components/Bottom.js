import React from 'react';
import './ComponentsStyle/Bottom.css';

const Bottom = ({go, left, right}) => {
    return (
        <div className="App-bottom">
            <div className="BottomLeftButton" onClick={go} data-to={left}><div></div></div>
            <div className="BottomRightButton" onClick={go} data-to={right}><div></div></div>
        </div>
    );
}

export default Bottom;
