import React, { useState, useEffect } from 'react';
import Header from "../Components/Header";
import Bottom from "../Components/Bottom";
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import '../ResetBrowser.css';
import './panelsStyle/Swipe.scss';
import Deck from "../Components/Deck";
import {fetchEvents} from "../Api/Events";
import { setRate } from '../Api/Ratings';

const Swipe = ({id, go, user}) => {
    const [events, setEvents] = useState([]);
    const [page, setPage] = useState(0);
    const [categories, setCategories] = useState([1,6]);
    const [size, setSize] = useState(20);

    async function loadEvents(){
        let eventsResponse = await fetchEvents(user.id,categories,page,size);

        let newEventsJson = await eventsResponse.json();
        let newEvents = newEventsJson.content;

        let isLastPartition = newEvents == undefined || newEvents.length < size;
        if (isLastPartition){
            setPage(0);
        } else {
            setPage(page + 1);
        }

        setEvents(events.concat(newEvents));

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
            document.body.style.setProperty('--background_page', 'white');
        }
        refreshHeaderVK();
    }, []);


    return (
        <Panel id={id}>
            <Header panelId={id}/>
            <Deck cards={events} loadCards={loadEvents} setRateBy={setRateBy}/>

            <Bottom go={go}/>
        </Panel>
    );
};

export default Swipe;
