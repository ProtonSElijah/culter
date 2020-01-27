import React, { useState, useEffect } from 'react';

import Header from "../Components/Header";
import Bottom from "../Components/Bottom";

import GridEventList from "../Components/GridEventList";

import '../ResetBrowser.css';
import './panelsStyle/Grid.css';

import {fetchEvents} from "../Api/Events";
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';

const Grid = ({id, go, user}) => {

    const [dataEvents, setDataEvents] = useState([]);

    const uploadData = e => {
        let elem = e.currentTarget;
        if (elem.scrollHeight - elem.clientHeight*2 <= elem.scrollTop) {
            try {
                loadEvents();
            }
            catch (err) {
                console.log(err);
            }
        }
    };


    async function loadEvents(){
        let eventsResponse = await fetchEvents(user.id);
        let newEvents = await eventsResponse.json();

        setDataEvents(dataEvents.concat(newEvents.content));
    }
    useEffect(() => {
        if (user != null)
            loadEvents();
    }, [user]);


    useEffect(() => {
        async function refreshHeaderVK() {
            document.getElementById(id).children[0].style.paddingTop = 0;
        }
        refreshHeaderVK();
    }, []);

    return (
        <Panel id={id}>
            <Header text={id}/>

                <div className="Grid-eventList" onScroll={uploadData}>
                    {dataEvents &&
                        <GridEventList data={dataEvents}/> }
                </div>

            <Bottom go={go}/>
        </Panel>
    );
}

export default Grid;
