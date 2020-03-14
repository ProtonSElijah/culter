import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

import Header from "../Components/Header";
import Bottom from "../Components/Bottom";

import GridEventList from "../Components/GridEventList";

import '../ResetBrowser.css';
import './panelsStyle/Grid.css';

import {fetchEvents} from "../services/Events";
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';

const Grid = ({id}) => {
    const user = useSelector(state => state.userState.user);
    const events = useSelector(state => state.eventsState.events);

    const [categoriesId, setCategoriesId] = useState(["3", "8", "27", "15", "12"]);
    const [isLoading, setIsLoading] = useState(false);

    const uploadData = e => {
        let elem = e.currentTarget;
        if (elem.scrollHeight - elem.clientHeight*2 <= elem.scrollTop) {
            try {
                if (!isLoading){
                    setIsLoading(true);
                    loadEvents();
                }
            }
            catch (err) {
                console.log(err);
            }
        }
    };

    const loadEvents = async function (){
        await fetchEvents(categoriesId);
        setIsLoading(false);
    };

    const deleteAndloadEvents = async function (){
        if (user){
            await fetchEvents(categoriesId,true);
            setIsLoading(false);
        }
    };


    useEffect(() => {
        if (user && events.length === 0) {
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

    const onModal = e => {
        let modal = document.getElementById("filter_modal");
        if (modal.style.visibility === "visible") {
            deleteAndloadEvents();
        }
        modal.style.visibility = (modal.style.visibility === "visible") ? "hidden" : "visible";
    };

    const onChangeFilterItemState = e => {
        if (e.currentTarget.dataset.isactive === "false") {
            setCategoriesId(categoriesId.concat(e.currentTarget.dataset.id));
        }
        else categoriesId.splice(categoriesId.indexOf(e.currentTarget.dataset.id), 1);
        e.currentTarget.dataset.isactive = (e.currentTarget.dataset.isactive === "true") ? "false" : "true";
        e.currentTarget.children[0].classList.toggle("Filter-modal-categories-item-checkbox-disabled");
        e.currentTarget.children[0].classList.toggle("Filter-modal-categories-item-checkbox-active");
    };

    const onCloseFilterEnvironment = e => {
        if (e.target.id === "filter_modal") onModal(e);
    };

    return (
        
        <Panel id={id}>
            <Header panelId={id}/>

                <div className="Grid-eventList" onScroll={uploadData}>
                    {events &&
                        <GridEventList data={events}/> }
                </div>

                <div className="Filter" onClick={onModal}>
                    <p>Фильтр</p>
                </div>

                <div className="Filter-modal" id="filter_modal" style={{visibility: 'hidden'}} onClick={onCloseFilterEnvironment}>
                    <div className="Filter-modal-content">

                        <div className="Filter-modal-header">
                            <p>Фильтр</p>
                        </div>

                        <div className="Filter-modal-categoriesTitle">
                            <p>Выберите тип мероприятия</p>
                            <div className="Filter-modal-categoriesTitleBottomLine"></div>
                        </div>

                        <div className="Filter-modal-categories">

                            <div className="Filter-modal-categories-item"
                               onClick={onChangeFilterItemState} data-isactive={true} data-id={3}>
                                <div className="Filter-modal-categories-item-checkbox
                                    Filter-modal-categories-item-checkbox-active"></div>
                                <p className="Filter-modal-categories-item-name">Концерты</p>
                            </div>

                            <div className="Filter-modal-categories-item"
                               onClick={onChangeFilterItemState} data-isactive={true} data-id={6}>
                                <div className="Filter-modal-categories-item-checkbox
                                    Filter-modal-categories-item-checkbox-active"></div>
                                <p className="Filter-modal-categories-item-name">Выставки</p>
                            </div>

                            <div className="Filter-modal-categories-item"
                               onClick={onChangeFilterItemState} data-isactive={true} data-id={8}>
                                <div className="Filter-modal-categories-item-checkbox
                                    Filter-modal-categories-item-checkbox-active"></div>
                                <p className="Filter-modal-categories-item-name">Фестивали</p>
                            </div>

                            <div className="Filter-modal-categories-item"
                               onClick={onChangeFilterItemState} data-isactive={true} data-id={12}>
                                <div className="Filter-modal-categories-item-checkbox
                                    Filter-modal-categories-item-checkbox-active"></div>
                                <p className="Filter-modal-categories-item-name">Выставки</p>
                            </div>

                            <div className="Filter-modal-categories-item"
                               onClick={onChangeFilterItemState} data-isactive={true} data-id={27}>
                                <div className="Filter-modal-categories-item-checkbox
                                    Filter-modal-categories-item-checkbox-active"></div>
                                <p className="Filter-modal-categories-item-name">Ночная жизнь</p>
                            </div>

                        </div>

                        <div className="Filter-modal-buttonOK" onClick={onModal}>
                            <p>ОК</p>
                        </div>

                    </div>
                </div>

            <Bottom/>
        </Panel>
    );
};
export default Grid;
// function mapStateToProps(store) {
//     return {
//         user: store.userState.user
//     }
//   }
//   export default connect(mapStateToProps)(Grid)
