import React, {Component} from 'react';
import Card from "./Card";
import "./testData/exportDataCards"
import {cardsData} from "./testData/exportDataCards";
import CardView from "./CardView";

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: cardsData,
            currentIndex: 0
        }
    }
    onSwipeEnd = () => {
        this.setState({
            currentIndex: this.nextIndex()
        })
    };
    nextIndex = () => {
        return this.state.currentIndex === 0 ? 1 : 0;
    };
    render() {

        return (
            <div>

                <Card cardInfo={this.state.cards[this.state.currentIndex]} onSwipeEnd={this.onSwipeEnd}/>
                <CardView hasMargin={true} cardInfo={this.state.cards[this.nextIndex()]}/>
            </div>
        );
    }
}

export default Deck;
