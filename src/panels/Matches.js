import React, {Component} from 'react';
import {CellButton} from "@vkontakte/vkui";
import ScrollMatchedList from "../Components/ScrollMatchedList";
import MatchedList from "../Components/MatchedList";
import '../ResetBrowser.css';
import './Matches.css';

class Matches extends Component {

    constructor(props){
        super(props);
        this.state = {
            isSelectedFriends: true, //показывает выбранную вкладку
            matchedPeople: [
                {
                    imgLink: "https://sun9-17.userapi.com/c841322/v841322634/36d69/IrmwPwh6tlI.jpg",
                    firstName: "Арсений",
                    lastName: "Молодецкий",
                    commonPlacesCount: 4,
                    commonPlaces: [
                        "Элджей", "Тимати", "Группа Скриптонит", "AC/DC"
                    ]
                },
                {
                    imgLink: "https://sun9-67.userapi.com/c824204/v824204590/aca4d/Xl3J1Oyq1EU.jpg",
                    firstName: "Никита",
                    lastName: "Башкин",
                    commonPlacesCount: 1,
                    commonPlaces: [
                        "Концерт Замая"
                    ]
                },
                                {
                    imgLink: "https://sun9-17.userapi.com/c841322/v841322634/36d69/IrmwPwh6tlI.jpg",
                    firstName: "Арсений",
                    lastName: "Молодецкий",
                    commonPlacesCount: 4,
                    commonPlaces: [
                        "Элджей", "Тимати", "Группа Скриптонит", "AC/DC"
                    ]
                },
                {
                    imgLink: "https://sun9-67.userapi.com/c824204/v824204590/aca4d/Xl3J1Oyq1EU.jpg",
                    firstName: "Никита",
                    lastName: "Башкин",
                    commonPlacesCount: 1,
                    commonPlaces: [
                        "Концерт Замая"
                    ]
                },
                                {
                    imgLink: "https://sun9-67.userapi.com/c824204/v824204590/aca4d/Xl3J1Oyq1EU.jpg",
                    firstName: "Никита",
                    lastName: "Башкин",
                    commonPlacesCount: 1,
                    commonPlaces: [
                        "Концерт Замая"
                    ]
                },
                {
                    imgLink: "https://sun9-17.userapi.com/c841322/v841322634/36d69/IrmwPwh6tlI.jpg",
                    firstName: "Арсений",
                    lastName: "Молодецкий",
                    commonPlacesCount: 4,
                    commonPlaces: [
                        "Элджей", "Тимати", "Группа Скриптонит", "AC/DC"
                    ]
                },
                {
                    imgLink: "https://sun9-17.userapi.com/c841322/v841322634/36d69/IrmwPwh6tlI.jpg",
                    firstName: "Арсений",
                    lastName: "Молодецкий",
                    commonPlacesCount: 4,
                    commonPlaces: [
                        "Элджей", "Тимати", "Группа Скриптонит", "AC/DC"
                    ]
                },
                {
                    imgLink: "https://sun9-45.userapi.com/c854528/v854528685/d255a/ooAN1guMTAc.jpg",
                    firstName: "Данила",
                    lastName: "Сергачев",
                    commonPlacesCount: 1,
                    commonPlaces: [
                        "Рок"
                    ]
                },
                {
                    imgLink: "https://sun9-44.userapi.com/c848536/v848536553/153b99/ypLiVUE1jZA.jpg",
                    firstName: "Илья",
                    lastName: "Курнаков",
                    commonPlacesCount: 1,
                    commonPlaces: [
                        "Треп"
                    ]
                }
            ],
            matchedFriends: [
                {
                    imgLink: "https://sun9-17.userapi.com/c841322/v841322634/36d69/IrmwPwh6tlI.jpg",
                    firstName: "Арсений",
                    lastName: "Молодецкий",
                    commonPlacesCount: 4,
                    commonPlaces: [
                        "Элджей", "Тимати", "Группа Скриптонит", "AC/DC"
                    ]
                }
            ]
        };
    }

    onSwitchClick = (value) => {
        this.setState({isSelectedFriends:value});
    };

    //Список метчей генерируется в MatchedList.js с параметром list, в который передаётся текущий список пользователей
    //Ячейка пользователя из списка метчей генерируется в MatchedPerson.js
    //Скролл список генерируется в ScrollMatchedList.js с параметром list, в который передаётся текущий список пользователей
    render() {
        return (
            <div className="PanelMatches">
                <div className="App-header">
                    <p>Matches</p>
                </div>
               <div className="NavigationButtons">
                    <button onClick={()=> this.onSwitchClick(true)}> 2 Совпали </button>
                    <button onClick={()=> this.onSwitchClick(false)}> 1 друг </button>
                </div>
                <div className="ScrollContainer">
                    <ScrollMatchedList list={this.state.isSelectedFriends
                            ? this.state.matchedPeople
                            : this.state.matchedFriends} />
                </div>
                <div className="ListContainer">
                    <MatchedList list = {this.state.isSelectedFriends
                            ? this.state.matchedPeople
                            : this.state.matchedFriends} />
                </div>
                <div className="App-bottom">
                    <div className="BottomLeftButton"><div></div></div>
                    <div className="BottomRightButton"><div></div></div>
                </div>
            </div>
        );
    }
}

export default Matches;
