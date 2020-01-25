import React, { useState, useEffect } from 'react';
import Header from "../Components/Header";
import Bottom from "../Components/Bottom";
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import '../ResetBrowser.css';
import './panelsStyle/Swipe.css';
import Deck from "../Components/Deck";
import {fetchEvents} from "../Api/Events";
import { setRate } from '../Api/Ratings';

const Swipe = ({id, go, user}) => {
    const [events, setEvents] = useState([]);

    async function loadEvents(){
        let eventsResponse = await fetchEvents(user.id);
        let newEvents = await eventsResponse.json();
        
        setEvents(events.concat(newEvents.content));
    }

    async function setRateBy(eventId, isLike){
        setRate(user.id, eventId, isLike );
    }

    // При получении user id, получаем ивенты
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
            <Deck events={events} loadEvents={loadEvents} setRateBy={setRateBy}/>

            <Bottom go={go}/>
        </Panel>
    );
};

export default Swipe;
