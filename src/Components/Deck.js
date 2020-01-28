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

    render() {

        let cards = this.props.cards;
        let index = this.state.currentIndex;
        return (

                cards.length > 0 ?
                <div>
                    <Card cardInfo={cards[index]} onSwipeEnd={this.onSwipeEnd}/>
                    <CardView hasMargin={true} cardInfo={cards[index+1]}/>
                </div>
                    : <div>

                    </div>

        );
    }
}

export default Deck;
