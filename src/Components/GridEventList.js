import React from 'react';
import store from '../redux/store/store';

import '../panels/panelsStyle/Grid.css';
import {setIndex} from '../redux/actions/events-actions';
import {changePanel} from '../redux/actions/panel-actions';

import panels from '../panels.json';

const GridEventList = ({data}) => {
  const handleClick = (e) => {
    const index = Number(e.currentTarget.dataset.index);
    store.dispatch(setIndex(index));
    store.dispatch(changePanel(panels.events));
  };

  const imageSource = product.images[0].image ? product.images[0].image : null;
  const imageAltName = product.name ? product.name : 'unknown';

  return data.map(
      (product, index) =>
        <div className="Grid-eventCell"
          data-name={product.name ? product.name : 'unknown'}
          data-to="swipe"
          data-index={index}
          key={index}
          onClick={handleClick}>
          <img src={imageSource} alt={imageAltName}/>
        </div>,
  );
};

export default GridEventList;
