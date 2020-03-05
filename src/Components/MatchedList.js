import React, {useState} from 'react';

import CommonEventsList from './CommonEventsList.js';

import chatActive from "../assets/icons/messageRed.svg";
import matchesArrow from "../assets/icons/matchesArrow.svg";
import {fetchCommonEvents} from "../services/Events";

const MatchedList = ({list}) => {
    const openEvents = (e) => {
        let display = e.currentTarget.parentElement.children[3].style.display;
        let isHidden = display ===  "none" || display === "";
        if (isHidden) {
            let otherUserId = parseInt(e.currentTarget.dataset.id);
            fetchCommonEvents(otherUserId);
        }
        e.currentTarget.parentElement.children[3].style.display = isHidden ? "flex" : "none";

        if (isHidden) {
            e.currentTarget.classList.add("arrowActive");
        } else {
            e.currentTarget.classList.remove("arrowActive");
        }
    };

    const toVKChat = (e) => {
        document.location.href = "https://vk.com/im?sel=" + e.currentTarget.dataset.userid;
    };
    return list.map(
        person =>
        <div className="PersonContainer">
            <div className="Person" key={person.key}>
                <img className="avatar" src={person.photo_400_orig} alt="Person photo"/>


                <div className="messageTitle" onClick={toVKChat} data-userid={person.id}>
                    <img src={chatActive} alt="message" />
                    <p>Написать</p>
                </div>

                <div className="personData">
                    <div className="name">{person.first_name}</div>
                    <div className="events">4 Общих события</div>
                </div>

                <div className="eventsContainer">
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
}

/*<a className="PersonPlacesList" href={"https://vk.com/im?sel=" + person.id}>
                            {"Перейти в сообщения"}
                        </a>*/
export default MatchedList;
