import React, {Component} from 'react';
import {CellButton} from "@vkontakte/vkui";
import MatchedPerson from "../Components/MatchedPerson";
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
            <div>
                {<MatchedPerson
                    imgLink={person.imgLink}
                    name={person.name}
                    commonPlacesCount={person.commonPlacesCount}
                    commonPlaces={person.commonPlaces}
                />}
            </div>
      )
    };

    renderMatchedFriends = () =>{
        return this.state.matchedFriends.map(
            person =>
                <div className="PersonList">
                    {<MatchedPerson
                        imgLink={person.imgLink}
                        name={person.name}
                        commonPlacesCount={person.commonPlacesCount}
                        commonPlaces={person.commonPlaces}
                    />}
                </div>
        )
    };

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
                <div className="ListContainer">
                    {this.state.isSelectedFriends ? this.renderMatchedPeople() : this.renderMatchedFriends()}
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
