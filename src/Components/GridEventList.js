import React from 'react';

import '../panels/panelsStyle/Grid.css';

const GridEventList = ({data}) => {
    return data.map (
        product =>
            <div className="Grid-eventCell"
               data-name={product.name ? product.name : "unknown"}>
                <img src={product.img ? product.img : null}/>
            </div>
    );
}

export default GridEventList;
