import React from 'react';
import store from "../redux/store/store";

import '../panels/panelsStyle/Grid.css';
import {setIndex} from '../redux/actions/events-actions';

const GridEventList = ({go, data}) => {

    const handleClick = e => {
        let index = Number(e.currentTarget.dataset.index);
        store.dispatch(setIndex(index));
        go(e);
    }

    return data.map (
        (product, index) =>
            <div className="Grid-eventCell"
               data-name={product.name ? product.name : "unknown"}
               data-to="swipe"
               data-index={index}
               onClick={handleClick}>
                <img src={product.images[0].image ? product.images[0].image : null}/>
            </div>
    );
}

export default GridEventList;
