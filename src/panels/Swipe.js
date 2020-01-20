import React, { useState, useEffect } from 'react';
import Header from "../Components/Header";
import Bottom from "../Components/Bottom";
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import '../ResetBrowser.css';
import './panelsStyle/Swipe.css';
import Card from "../Components/Card";
import Deck from "../Components/Deck";
import {fetchEvents} from "../Api/Events";

const Swipe = ({id, go, user}) => {
    const [events, setEvents] = useState([]);
    const [bufferedEvents, setBufferedEvents] = useState([]);

    useEffect(() => {
        async function loadAndUpdateEvents(){
            let newEventsResponse = await fetchEvents(user.id);
            let newEvents = await newEventsResponse.json();
            setEvents(newEvents);
        }
        if (user != null) loadAndUpdateEvents();
    }, [user]);

    useEffect(() => {
        async function refreshHeaderVK() {
            document.getElementById(id).children[0].style.paddingTop = 0;
        }
        refreshHeaderVK();
    }, []);



    async function loadEvents(){
        let newEventsResponse = await fetchEvents("81818650");
        let newEvents = await newEventsResponse.json();
        setBufferedEvents(newEvents);
    }

    async function updateEvents(){
        setEvents(bufferedEvents);
    }

    return (
        <Panel id={id}>
            <Header text={id}/>
            <Deck events={events} loadEvents={loadEvents} updateEvents={updateEvents}/>

            <Bottom go={go} left="personal" right="matches"/>
        </Panel>
    );
};

export default Swipe;
