import React, {useState} from 'react';

import CommonEventsList from './CommonEventsList.js';

import chatActive from "../assets/icons/messageRed.svg";
import matchesArrow from "../assets/icons/matchesArrow.svg";
import {fetchCommonEvents} from "../services/Events";

const MatchedList = ({list}) => {
    const [currentOPenBlock, setCurrentOPenBlock] = useState(null);
    let isLoading = false;

    const openEvents = (e) => {
        if ((currentOPenBlock) && (currentOPenBlock.dataset.id !== e.currentTarget.dataset.id)) {
            toggleCommonEvents(currentOPenBlock, false);
        }

        let elementStyle = e.currentTarget.parentElement.children[3].style;

        let height = elementStyle.height;
        let isHidden = height ===  "0vmax" || height === "";
        if (isHidden) {
            let otherUserId = parseInt(e.currentTarget.dataset.id);
            fetchCommonEvents(otherUserId);
        }

        toggleCommonEvents(e.currentTarget, isHidden);

        setCurrentOPenBlock(e.currentTarget);
    };

    const toggleCommonEvents = (target, isClosed) => {
        let elementStyle = target.parentElement.children[3].style;
        elementStyle.height = isClosed ? "22vmax" : "0vmax";
        elementStyle.marginBottom = isClosed ? "1.4vmax" : "0vmax";
        elementStyle.marginTop = isClosed ? "2vmax" : "0vmax";
        let arrow = target.parentElement.getElementsByClassName("arrow")[0];
        if (isClosed){

            arrow.classList.add("arrowActive");
        } else {
            arrow.classList.remove("arrowActive");
        }
    };

    const toVKChat = (e) => {
        document.location.href = "https://vk.com/im?sel=" + e.currentTarget.dataset.userid;
    };

    const toVKProfile = (e) => {
        document.location.href = "https://vk.com/id" + e.currentTarget.dataset.userid;
    };

    const loadCommonEvents = (e) =>{
        let elem = e.currentTarget;


        let otherUserId = parseInt(elem.dataset.id);

        if (elem.scrollWidth - elem.clientWidth*2 <= elem.scrollLeft){
            if (!isLoading){
                let otherUser = list.find((person) => person.id === otherUserId);
                if (otherUser.commonEvents.length < otherUser.count_common_events){
                    isLoading = true;
                    fetchCommonEvents(otherUserId).then(() => {isLoading = false});
                }
            }
        }
    };
    return list.map(
        person =>
        <div className="PersonContainer" key={person.id}>
            <div className="Person">
                <img className="avatar" src={person.photo_400_orig} onClick={toVKProfile} alt="Person"/>


                <div className="messageTitle" onClick={toVKChat} data-userid={person.id}>
                    <img src={chatActive} alt="message" />
                    <p>Написать</p>
                </div>

                <div className="personData" onClick={openEvents} data-id={person.id}>
                    <div className="name">{person.first_name}</div>
                    <div className="events">{person.count_common_events} общих событий</div>
                </div>

                <div className="eventsContainer" data-id={person.id}  onScroll={loadCommonEvents}>
                   <div className="events">
                        <CommonEventsList events={
                            person.commonEvents.length > 0 ?
                                person.commonEvents :
                                []
                        }/>

                    </div>
                </div>

                <img className="arrow" onClick={openEvents} data-id={person.id} src={matchesArrow} alt="icon" />

            </div>
        </div>
    );
};

/*<a className="PersonPlacesList" href={"https://vk.com/im?sel=" + person.id}>
                            {"Перейти в сообщения"}
                        </a>*/
export default MatchedList;
