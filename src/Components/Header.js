import React from 'react';
import './ComponentsStyle/Header.css';

const Header = ({text}) => {
    return (
        <div className="App-header">
            <p>{text.toUpperCase()}</p>
        </div>
    );
}

export default Header;
