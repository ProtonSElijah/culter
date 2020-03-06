import React from 'react';
import store from "../redux/store/store";


import Card from "./Card";
import CardView from "./View/CardView";

const Deck = ({index, setIndex, cards, loadCards, setRateBy, isEventDeck}) => {
     const onSwipeEnd = async function(isLike) {
        setRateBy(cards[index].id, isLike);

        // Uploading if necessary
        if (cards.length - index < 10){
            loadCards();
        }

        store.dispatch(setIndex(index + 1));
    };

    let topCardIndex = index;
    let bottomCardIndex = topCardIndex + 1;

    let endCard = {"isEnd": true, "end_type" : isEventDeck}
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
            <div >
                <Card cardInfo={endCard} onSwipeEnd={()=>{}}/>
            </div>
      
    )
};

export default Deck;
