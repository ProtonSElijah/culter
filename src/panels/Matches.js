import React, {Component} from 'react';
import {CellButton} from "@vkontakte/vkui";
import MatchedPerson from "../Components/MatchedPerson";

class Matches extends Component {

    constructor(props){
        super(props);
        this.state = {
            isSelectedFriends: true,
            matchedPeople: [
                {
                    imgLink: "https://sun9-17.userapi.com/c841322/v841322634/36d69/IrmwPwh6tlI.jpg",
                    name: "Молодецкий Арсений",
                    commonPlacesCount: 4,
                    commonPlaces: [
                        "Элджей", "Тимати", "Группа Скриптонит", "AC/DC"
                    ]
                },
                {
                    imgLink: "https://sun9-67.userapi.com/c824204/v824204590/aca4d/Xl3J1Oyq1EU.jpg",
                    name: "Никита Башкин",
                    commonPlacesCount: 1,
                    commonPlaces: [
                        "Концерт Замая"
                    ]
                }
            ],
            matchedFriends: [
                {
                    imgLink: "https://sun9-17.userapi.com/c841322/v841322634/36d69/IrmwPwh6tlI.jpg",
                    name: "Молодецкий Арсений",
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

    renderMatchedPeople = () => {
      return this.state.matchedPeople.map(
          person =>
            <li>
                {<MatchedPerson imgLink={person.imgLink}
                               name={person.name}
                               commonPlacesCount={person.commonPlacesCount}
                               commonPlaces={person.commonPlaces}
                />}
            </li>
      )
    };

    renderMatchedFriends = () =>{
        return this.state.matchedFriends.map(
            person =>
                <li>
                    {<MatchedPerson imgLink={person.imgLink}
                                    name={person.name}
                                    commonPlacesCount={person.commonPlacesCount}
                                    commonPlaces={person.commonPlaces}
                    />}
                </li>
        )
    };

    render() {
        return (
            <div>
                <button onClick={()=> this.onSwitchClick(true)} >
                    2 Совпали
                </button>
                <button onClick={()=> this.onSwitchClick(false)} >
                    1 друг
                </button>
                <div>
                    {this.state.isSelectedFriends ? this.renderMatchedPeople() : this.renderMatchedFriends()}
                </div>
            </div>
        );
    }
}

export default Matches;
