import React, {Component} from 'react';
import store from "../redux/store/store";

import { useSelector } from "react-redux";

import Card from "./Card";
import CardView from "./View/CardView";
import {setRate} from "../Api/Ratings";

import {setIndex} from '../redux/actions/events-actions';

const Deck = ({cards, loadCards, setRateBy}) => {

    const index = useSelector(state => state.eventsState.index);

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
                        <CardView cardInfo={cards[bottomCardIndex]}/>:
                        <div/>
                }
            </div> :
            <div/>
      
    )
}

export default Deck;
