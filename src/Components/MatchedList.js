import React, {useState} from 'react';

import CommonEventsList from './CommonEventsList.js';

import chatActive from "../assets/icons/messageRed.svg";
import matchesArrow from "../assets/icons/matchesArrow.svg";

const MatchedList = ({list}) => {

    const openEvents = (e) => {
        e.currentTarget.parentElement.children[3].style.display =
            e.currentTarget.parentElement.children[3].style.display == "none" ?
            "flex" : "none";
    };

    let a = [
        {
            img: "https://www.nastol.com.ua/download.php?img=201502/1280x1024/nastol.com.ua-130464.jpg",
            date: "27 октября",
            place: "СК Юбилейный",
            name: "Гомаз",
        },
        {
            img: "https://www.nastol.com.ua/download.php?img=201502/1280x1024/nastol.com.ua-130464.jpg",
            date: "27 октября",
            place: "СК Юбилейный",
            name: "Гомаз",
        },
        {
            img: "https://www.nastol.com.ua/download.php?img=201502/1280x1024/nastol.com.ua-130464.jpg",
            date: "27 октября",
            place: "СК Юбилейный",
            name: "Гомаз",
        },
        {
            img: "https://www.nastol.com.ua/download.php?img=201502/1280x1024/nastol.com.ua-130464.jpg",
            date: "27 октября",
            place: "СК Юбилейный",
            name: "Гомаз",
        },
        {
            img: "https://www.nastol.com.ua/download.php?img=201502/1280x1024/nastol.com.ua-130464.jpg",
            date: "27 октября",
            place: "СК Юбилейный",
            name: "Гомаз",
        },
    ];

    return list.map(
        person =>
        <div className="PersonContainer">
            <div className="Person" key={person.key}>
                <img className="avatar" src={person.photo_400_orig} alt="Person photo"/>


                <div className="messageTitle">
                    <img src={chatActive} alt="message" />
                    <p>Написать</p>
                </div>

                <div className="personData">
                    <div className="name">{person.first_name}</div>
                    <div className="events">4 Общих события</div>
                </div>

                <div className="eventsContainer">
                   <div className="events">

                        <CommonEventsList events={a}/>

                    </div>
                </div>

                <img className="arrow" onClick={openEvents} src={matchesArrow} alt="icon" />

            </div>
        </div>
    );
}

/*<a className="PersonPlacesList" href={"https://vk.com/im?sel=" + person.id}>
                            {"Перейти в сообщения"}
                        </a>*/
export default MatchedList;
