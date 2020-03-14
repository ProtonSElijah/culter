import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

import Header from "../Components/Header";
import Bottom from "../Components/Bottom";
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import '../ResetBrowser.css';
import './panelsStyle/Events.scss';
import Deck from "../Components/Deck";
import {fetchEvents} from "../services/Events";
import { setEventRate } from '../services/Ratings';
import {setIndex} from "../redux/actions/events-actions";
import spinner from "../assets/preloader.svg";

const Events = ({id}) => {
    const user = useSelector(state => state.userState.user);
    const events = useSelector(state => state.eventsState.events);
    const index = useSelector(state => state.eventsState.index);

    const [categories, setCategories] = useState(["3", "8", "27", "15", "12"]);
    const [isLoading, setIsLoading] = useState(false);

    async function loadEvents(){
        await fetchEvents(categories);
    }
    async function setRateBy(eventId, isLike){
        setEventRate( eventId, isLike );
    }

    // При получении user id, получаем ивенты
    useEffect(() => {
        if (user && events.length === 0) {
            setIsLoading(true);
            loadEvents().then(
                () => {
                    setIsLoading(false);
                }
            );
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
                {!isLoading && <Deck isEventDeck={true} index={index} setIndex={setIndex} cards={events} loadCards={loadEvents} setRateBy={setRateBy}/>}
                {isLoading && <div className="spinner-preloader-forPeople">
                    <img src={spinner} alt="loading spinner"/>
                </div>}
            </div>


            <Bottom />
        </Panel>
    );
};

export default Events;
