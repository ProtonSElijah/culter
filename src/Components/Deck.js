import React, {Component} from 'react';
import store from "../redux/store/store";


import Card from "./Card";
import CardView from "./View/CardView";

import spinner from "../preloader.svg";

const Deck = ({index, setIndex, cards, loadCards, setRateBy}) => {
     const onSwipeEnd = async function(isLike) {
        setRateBy(cards[index].id, isLike);

        // Uploading if nessecary
        if (cards.length - index < 10){
            loadCards();
        }

        store.dispatch(setIndex(index + 1));
    };

    let topCardIndex = index;
    let bottomCardIndex = topCardIndex + 1;
    return (

        cards.length > 0 && topCardIndex < cards.length ?
            <div>
                <Card cardInfo={cards[topCardIndex]} onSwipeEnd={onSwipeEnd}/>
                {
                    bottomCardIndex < cards.length ?
                        <CardView hasMargin={true} cardInfo={cards[bottomCardIndex]} />:
                        <div/>
                }
            </div> :
            <div className="spinner-preloader-forPeople">
                <img src={spinner} alt="loading spinner"/>
            </div>
      
    )
}

export default Deck;
