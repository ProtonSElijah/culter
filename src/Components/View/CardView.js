import React from 'react';
import '../ComponentsStyle/CardView.scss';
import EventInformationView from './EventInformationView';
import PersonInformationView from './PersonInformationView';
import ChoiceLabelsView from './ChoiceLabelsView';
import EventEndView from './EventEndView';
import PeopleEndView from './PeopleEndView';

import defaultImage from '../../assets/defaultEventImage.jpg';

const CardView = ({hasMargin, horizontalShift, verticalShift, isUpperTouch, cardInfo, isTransition}) => {
  const rotationCoefficient = isUpperTouch ? -1 : 1;
  const rotation = rotationCoefficient * horizontalShift / 15;
  const contentStyle = {
    'transform': 'rotate(' + rotation + 'deg)' +
                ' translate('+ horizontalShift + 'px, '+ verticalShift + 'px)',
    'transition': isTransition ? '0.2s' : '',
  };

  if (hasMargin) {
    contentStyle['position'] = 'absolute';
    contentStyle['z-index'] = '10';
  }

  const isEnd = cardInfo.hasOwnProperty('isEnd');
  const isEventEnd = isEnd && cardInfo['end_type'];

  const isEventCard = cardInfo.hasOwnProperty('short_title');

  const imageSource = isEnd ? defaultImage :
            isEventCard ? cardInfo.images[0].image : cardInfo.photo_400_orig;

  return (

    <div className="Swipe-content" style={contentStyle}>

      <div className="Swipe-content-up">
        <ChoiceLabelsView horizontalShift={horizontalShift} />

        <img className="Swipe-content-up-image" src={imageSource} alt="Card"/>
        <div className="shadow"></div>


        <div className="Swipe-content-down">
          {isEnd ?
                        isEventEnd ?
                            <EventEndView/> :
                             <PeopleEndView/> :
                        isEventCard ?
                            <EventInformationView event={cardInfo}/> :
                             <PersonInformationView person={cardInfo}/>}
        </div>

      </div>

    </div>
  );

  /* <div className="Events-content-down">
                    {isEventCard ?
                        <EventInformationView event={cardInfo}/> :
                        <PersonInformationView person={cardInfo}/>}
                </div>*/
};

export default CardView;
