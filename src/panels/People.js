import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import Header from "../Components/Header";
import Bottom from "../Components/Bottom";
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import '../ResetBrowser.css';
import './panelsStyle/People.scss';
import Deck from "../Components/Deck";
import {fetchPeople} from "../Api/People";
import { setUserRate } from '../Api/Ratings';

const People = ({id, go, activePanel}) => {
    const user = useSelector(state => state.userState.user);

    const [people, setPeople] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(20);

    async function loadPeople(){
        let peopleResponse = await fetchPeople(user.id, page, size);
        let newPeople = await peopleResponse.json();

        setPage(page + 1);
        setPeople(people.concat(newPeople.content));

    }

    async function setRateBy(otherUserId, isLike){
        setUserRate(user.id, otherUserId, isLike );
    }

    // При получении user id, получаем ивенты
    useEffect(() => {
        if (user != null || user !== undefined)
            loadPeople();
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
            <Deck cards={people} loadCards={loadPeople} setRateBy={setRateBy}/>

            <Bottom go={go} activePanel={activePanel}/>
        </Panel>
    );
};

export default People;
