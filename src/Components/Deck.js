import React, {Component} from 'react';
import Card from "./Card";
import "./testData/exportDataCards"
import {cardsData} from "./testData/exportDataCards";
import CardView from "./CardView";
import {setRate} from "../Api/Ratings";

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        }
        this.onSwipeEnd = this.onSwipeEnd.bind(this);
    }
    
     onSwipeEnd = async function(isLike) {
        setRate("81818650", this.props.events[this.state.currentIndex].id, isLike);

        if (this.state.currentIndex === 5){
            this.props.loadEvents();
        }

        if (this.state.currentIndex === 9){
            await this.props.updateEvents();
        }
        this.setState({
            currentIndex: this.nextIndex()
        });

        
    };
    nextIndex = () => {
        return this.state.currentIndex === 9 ? 0 : this.state.currentIndex + 1;
    };
    render() {

        let events = this.props.events;
        return (

                events.length !== 0 ?
                <div>
                    <Card cardInfo={this.props.events[this.state.currentIndex]} onSwipeEnd={this.onSwipeEnd}/>
                    <CardView hasMargin={true} cardInfo={this.props.events[this.nextIndex()]}/>
                </div>
                    : <div>

                    </div>

        );
    }
}

export default Deck;
