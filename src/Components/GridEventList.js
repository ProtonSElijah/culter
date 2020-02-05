import React from 'react';

import '../panels/panelsStyle/Grid.css';

const GridEventList = ({go, data}) => {

    const handleClick = e => {
        //setIndex(index);
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
