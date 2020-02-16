import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

import Header from "../Components/Header";
import Bottom from "../Components/Bottom";
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import '../ResetBrowser.css';
import './panelsStyle/Events.scss';
import Deck from "../Components/Deck";
import {fetchEvents} from "../Api/Events";
import { setRate } from '../Api/Ratings';
import {setIndex} from "../redux/actions/events-actions";

const Events = ({id, go, activePanel}) => {
    const user = useSelector(state => state.userState.user);
    const events = useSelector(state => state.eventsState.events);
    const index = useSelector(state => state.eventsState.index);

    const [categories, setCategories] = useState(["1","6"]);
    

    async function loadEvents(){
        await fetchEvents(categories);
    }
    async function setRateBy(eventId, isLike){
        setRate(user.id, eventId, isLike );
    }

    // При получении user id, получаем ивенты
    useEffect(() => {
        if (user != null || user != undefined)
            if (events.length == 0){
                loadEvents();
            }
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
            <div className="container">
                <Deck index={index} setIndex={setIndex} cards={events} loadCards={loadEvents} setRateBy={setRateBy}/>
            </div>


            <Bottom go={go} activePanel={activePanel}/>
        </Panel>
    );
};

export default Events;
