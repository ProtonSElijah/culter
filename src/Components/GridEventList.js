import React from 'react';

import '../panels/panelsStyle/Grid.css';

const GridEventList = ({data}) => {
    return data.map (
        product =>
            <div className="Grid-eventCell"
               data-name={product.name ? product.name : "unknown"}>
                <img src={product.images[0].image ? product.images[0].image : null}/>
            </div>
    );
}

export default GridEventList;
