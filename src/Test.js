import React, { useState, useEffect } from 'react';
/*import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';*/
import "./ResetBrowser.css";
import "./Test.css";
import el from '../src/img/el.jpg';

const Test = () => {

    const go = e => {
        alert("Работает " + e.type);
    };

    return (
        <div className="App">
          <div className="App-header">
            <p>Culter</p>
          </div>
            <div className="Swipe-main">
               <div className="Swipe-content">
                  <div className="Swipe-content-up">
                      <img className="el" src={el} ontouchend={go}/>
                  </div>
                  <div className="Swipe-content-down">
                      <p id="Font-bold"><b>Элджей</b></p>
                      <p>11 апреля</p>
                      <p>20 человек</p>
                  </div>
               </div>
            </div>
            <div className="App-bottom">
                <div className="BottomLeftButton"><div></div></div>
                <div className="BottomRightButton"><div></div></div>
            </div>
        </div>
    );
};

export default Test;
