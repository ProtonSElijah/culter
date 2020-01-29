import React, { useState, useEffect } from 'react';
import Header from "../Components/Header";
import Bottom from "../Components/Bottom";
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import '../ResetBrowser.css';
import './panelsStyle/People.scss';
import Deck from "../Components/Deck";
import {fetchPeople} from "../Api/People";
import { setUserRate } from '../Api/Ratings';

const People = ({id, go, user}) => {
    const [people, setPeople] = useState([]);
    const [page, setPage] = useState(0);
    const [categories, setCategories] = useState([1,6]);
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
        if (user != null) 
            loadPeople();
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
            <Deck cards={people} loadCards={loadPeople} setRateBy={setRateBy}/>

            <Bottom go={go}/>
        </Panel>
    );
};

export default People;
