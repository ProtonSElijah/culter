import React, { useState, useEffect } from 'react';
import Header from "../Components/Header";
import Bottom from "../Components/Bottom";
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import '../ResetBrowser.css';
import './panelsStyle/Swipe.css';

const Swipe = ({id, go}) => {

    const goTouch = e => {
        alert("Работает " + e.type);
    };

    useEffect(() => {
        async function refreshHeaderVK() {
            document.getElementById(id).children[0].style.paddingTop = 0;
        }
        refreshHeaderVK();
    }, []);

    return (
        <Panel id={id}>
            <Header text={id}/>

            <div className="Swipe-main">
               <div className="Swipe-content">
                  <div className="Swipe-content-up">
                      <img className="el" src="https://img.muz1.tv/img/2018-01-15/fmt_94_124_foto-1.jpg" onTouchEnd={goTouch}/>
                  </div>
                  <div className="Swipe-content-down">
                      <p id="Font-bold"><b>Элджей</b></p>
                      <p>11 апреля</p>
                      <p>20 человек</p>
                  </div>
               </div>
            </div>

            <Bottom go={go} left="personal" right="matches"/>
        </Panel>
    );
};

export default Swipe;
