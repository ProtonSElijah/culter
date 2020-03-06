import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import Header from "../Components/Header";
import Bottom from "../Components/Bottom";
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import '../ResetBrowser.css';
import './panelsStyle/People.scss';
import Deck from "../Components/Deck";
import {fetchPeople} from "../services/People";
import { setUserRate } from '../services/Ratings';
import {setIndex} from "../redux/actions/people-actions";

const People = ({id}) => {
    const user = useSelector(state => state.userState.user);
    const people = useSelector(state => state.peopleState.people);
    const index = useSelector(state => state.peopleState.index);

    const [isLoading, setIsLoading] = useState(false);

    async function loadPeople(){
        if (!isLoading){
            setIsLoading(true);
            await fetchPeople(people.length === 0);
            setIsLoading(false);
        }
         
    }

    async function setRateBy(otherUserId, isLike){
        setUserRate( otherUserId, isLike );
    }

    // При получении user id, получаем ивенты
    // useEffect(() => {
    //     if (isUserLoaded() && people.length === 0){
    //         loadPeople();
    //     }
    // }, [user]);


    useEffect(() => {
        async function refreshHeaderVK() {
            document.getElementById(id).children[0].style.paddingTop = 0;
            document.body.style.setProperty('--background_page', 'white');
        }
        refreshHeaderVK();

        if (user && people.length === 0)
            loadPeople();
    }, []);


    return (
        <Panel id={id}>
            <Header panelId={id}/>
            <Deck isEventDeck={false} index={index} setIndex={setIndex} cards={people} loadCards={loadPeople} setRateBy={setRateBy}/>

            <Bottom/>
        </Panel>
    );
};

export default People;
