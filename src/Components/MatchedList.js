import React, {useState} from 'react';

import chatActive from "../assets/icons/chatRed.svg";
import matchesArrow from "../assets/icons/matchesArrow.svg";

const MatchedList = ({list}) => {

    const openEvents = (e) => {
        e.currentTarget.parentElement.children[3].style.display =
            e.currentTarget.parentElement.children[3].style.display == "none" ?
            "flex" : "none";
    };

    return list.map(
        person =>
        <div className="PersonContainer">
            <div className="Person" key={person.key}>
                <img className="avatar" src={person.photo_400_orig} alt="Person photo"/>
                <img className="message" src={chatActive} alt="message" />

                <div className="personData">
                    <div className="name">{person.first_name}</div>
                    <div className="events">4 Общих события</div>
                </div>

                <div className="eventsContainer">
                    <div className="eventContainer">
                        <div className="poster">
                            <img src="https://www.nastol.com.ua/download.php?img=201502/1280x1024/nastol.com.ua-130464.jpg" alt="poster" />
                            <div className="annotation">
                                <p>БОЛЬШОЙ ТЕКСТ ГДЕ МНОГО СИМВОЛОВ</p>
                                <p>Текст</p>
                            </div>
                        </div>
                        <div className="name">
                            <p>БОЛЬШОЙ ТЕКСТ ГДЕ МНОГО СИМВОЛОВ</p>
                        </div>
                    </div>

                    <div className="eventContainer">
                        <div className="poster">
                            <img src="https://www.nastol.com.ua/download.php?img=201502/1280x1024/nastol.com.ua-130464.jpg" alt="poster" />
                            <div className="annotation">
                                <p>БОЛЬШОЙ ТЕКСТ ГДЕ МНОГО СИМВОЛОВ</p>
                                <p>Текст</p>
                            </div>
                        </div>
                        <div className="name">
                            <p>БОЛЬШОЙ ТЕКСТ ГДЕ МНОГО СИМВОЛОВ</p>
                        </div>
                    </div>

                    <div className="eventContainer">
                        <div className="poster">
                            <img src="https://www.nastol.com.ua/download.php?img=201502/1280x1024/nastol.com.ua-130464.jpg" alt="poster" />
                            <div className="annotation">
                                <p>БОЛЬШОЙ ТЕКСТ ГДЕ МНОГО СИМВОЛОВ</p>
                                <p>Текст</p>
                            </div>
                        </div>
                        <div className="name">
                            <p>БОЛЬШОЙ ТЕКСТ ГДЕ МНОГО СИМВОЛОВ</p>
                        </div>
                    </div>

                    <div className="eventContainer">
                        <div className="poster">
                            <img src="https://www.nastol.com.ua/download.php?img=201502/1280x1024/nastol.com.ua-130464.jpg" alt="poster" />
                            <div className="annotation">
                                <p>БОЛЬШОЙ ТЕКСТ ГДЕ МНОГО СИМВОЛОВ</p>
                                <p>Текст</p>
                            </div>
                        </div>
                        <div className="name">
                            <p>БОЛЬШОЙ ТЕКСТ ГДЕ МНОГО СИМВОЛОВ</p>
                        </div>
                    </div>

                    <div className="eventContainer">
                        <div className="poster">
                            <img src="https://www.nastol.com.ua/download.php?img=201502/1280x1024/nastol.com.ua-130464.jpg" alt="poster" />
                            <div className="annotation">
                                <p>БОЛЬШОЙ ТЕКСТ ГДЕ МНОГО СИМВОЛОВ</p>
                                <p>Текст</p>
                            </div>
                        </div>
                        <div className="name">
                            <p>БОЛЬШОЙ ТЕКСТ ГДЕ МНОГО СИМВОЛОВ</p>
                        </div>
                    </div>

                    <div className="eventContainer">
                        <div className="poster">
                            <img src="https://www.nastol.com.ua/download.php?img=201502/1280x1024/nastol.com.ua-130464.jpg" alt="poster" />
                            <div className="annotation">
                                <p>БОЛЬШОЙ ТЕКСТ ГДЕ МНОГО СИМВОЛОВ</p>
                                <p>Текст</p>
                            </div>
                        </div>
                        <div className="name">
                            <p>БОЛЬШОЙ ТЕКСТ ГДЕ МНОГО СИМВОЛОВ</p>
                        </div>
                    </div>

                    <div className="eventContainer">
                        <div className="poster">
                            <img src="https://www.nastol.com.ua/download.php?img=201502/1280x1024/nastol.com.ua-130464.jpg" alt="poster" />
                            <div className="annotation">
                                <p>БОЛЬШОЙ ТЕКСТ ГДЕ МНОГО СИМВОЛОВ</p>
                                <p>Текст</p>
                            </div>
                        </div>
                        <div className="name">
                            <p>БОЛЬШОЙ ТЕКСТ ГДЕ МНОГО СИМВОЛОВ</p>
                        </div>
                    </div>
                </div>

                <img class="arrow" onClick={openEvents} src={matchesArrow} alt="icon" />

            </div>
        </div>
    );
}

/*<a className="PersonPlacesList" href={"https://vk.com/im?sel=" + person.id}>
                            {"Перейти в сообщения"}
                        </a>*/
export default MatchedList;
