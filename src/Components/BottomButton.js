import React from 'react';
import './ComponentsStyle/Bottom.css';

const BottomButton = ({panel, activePanel, activeImage, disabledImage, onClick, text}) => {
  return (
    <div className="Bottom-button" onClick={onClick}
      data-to={panel}>
      <img src={activePanel === panel ? activeImage : disabledImage} alt={panel} />
      <p className={activePanel === panel ? 'active' : ''}>{text}</p>
    </div>
  );
};

export default BottomButton;
