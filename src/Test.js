import React, { useState, useEffect } from 'react';
/*import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';*/
import "./ResetBrowser.css";
import "./Test.css";


const Test = () => {

    return (
        <div className="App">
          <div className="App-header">
            <p>Header</p>
          </div>
            <div className="Swipe-main">
               <div className="Swipe-content">
                  <div className="Swipe-content-up">
                      <p>UP</p>
                  </div>
                  <div className="Swipe-content-down">
                      <p id="Font-bold"><b>Элджей</b></p>
                      <p>8 апреля</p>
                      <p>20 человек</p>
                  </div>
               </div>
            </div>
          <div className="App-bottom">
            <p>Footer</p>
          </div>
        </div>
    );
};

export default Test;
