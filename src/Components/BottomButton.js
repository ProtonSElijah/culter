import React from 'react';
import './ComponentsStyle/Bottom.css';

const BottomButton = ({panel, activePanel, activeImage, disabledImage, onClick }) => {
    return (
        <div className="Bottom-button" onClick={onClick}
             data-to={panel}>
            <img src={activePanel === panel ? activeImage : disabledImage} alt={panel} />
        </div>
    );
};

export default BottomButton;
