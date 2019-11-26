import React from 'react';
import './ComponentsStyle/Bottom.css';

const Bottom = () => {
    const goLeft = e => {
        alert("Left");
    };

    const goRight = e => {
        alert("Right");
    };

    return (
        <div className="App-bottom">
            <div className="BottomLeftButton" onClick={goLeft}><div></div></div>
            <div className="BottomRightButton" onClick={goRight}><div></div></div>
        </div>
    );
}

export default Bottom;
