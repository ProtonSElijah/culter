import React, {Component} from 'react';
import Card from "./Card";
import CardView from "./View/CardView";
import {setRate} from "../Api/Ratings";

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            swipesCountFromUpload: 0
        };
        this.onSwipeEnd = this.onSwipeEnd.bind(this);
        this.renderBottomCard = this.renderBottomCard.bind(this);
    }
    
     onSwipeEnd = async function(isLike) {
        this.props.setRateBy(this.props.cards[this.state.currentIndex].id, isLike);

        // Uploading if nessecary
        if (this.state.swipesCountFromUpload == 10){
            this.props.loadCards();
            this.setState({
                swipesCountFromUpload: 0
            })
        }

        // Ticking index for next card and decreasing 
        this.setState({
            currentIndex: this.state.currentIndex + 1,
            swipesCountFromUpload: this.state.swipesCountFromUpload + 1
        });

        
    };

    renderBottomCard = () => {
        return this.props.cards.length > 1 
            ? <CardView hasMargin={true} cardInfo={this.props.cards[this.state.currentIndex+1]}/>
            : <div></div>
    }

    render() {

        let cards = this.props.cards;
        let index = this.state.currentIndex;
        return (

                cards.length > 0 && index < cards.length ?
                <div>
                    <Card cardInfo={cards[index]} onSwipeEnd={this.onSwipeEnd}/>
                    {this.renderBottomCard()}
                </div>
                    : <div>

                    </div>

        );
    }
}

export default Deck;
