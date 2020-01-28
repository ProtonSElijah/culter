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
    const [page, setPage] = useState(0);
    const [categories, setCategories] = useState([1,6]);
    const [size, setSize] = useState(20);

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
        let eventsResponse = await fetchEvents(user.id,categories,page,size);

        let newEvents = await eventsResponse.json();

        setPage(page + 1);

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

        window.addEventListener("click", function(e) {
            if (e.target.id == "filter_modal") {
                onModal(e);
            }
        });
    }, []);

    const onModal = e => {
        let modal = document.getElementById("filter_modal");
        modal.style.visibility = (modal.style.visibility == "visible") ? "hidden" : "visible";
    }

    return (
        <Panel id={id}>
            <Header text={id}/>

                <div className="Grid-eventList" onScroll={uploadData}>
                    {dataEvents &&
                        <GridEventList data={dataEvents}/> }
                </div>

                <div className="Filter" onClick={onModal}>
                    <p>Фильтр</p>
                </div>

                <div className="Filter-modal" id="filter_modal" style={{visibility: 'hidden'}} >
                    <div className="Filter-modal-content">
                        <div className="Filter-modal-header">
                            <p>Фильтр</p>
                        </div>
                    </div>
                </div>

            <Bottom go={go}/>
        </Panel>
    );
}

export default Grid;
