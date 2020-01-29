import React, {Component} from 'react';
import '../ComponentsStyle/CardView.scss'
import EventInformationView from './EventInformationView';
import PersonInformationView from './PersonInformationView';
import ChoiceLabelsView from './ChoiceLabelsView';


const CardView = ({horizontalShift, verticalShift, hasMargin, isUpperTouch, cardInfo,isTransition}) => {

    let rotationCoefficient = isUpperTouch ? -1 : 1;
    let rotation = rotationCoefficient * horizontalShift / 15 ;
    let contentStyle = {
            "transform": "rotate(" + rotation + "deg)" +
                " translate("+ horizontalShift + "px, "+ verticalShift + "px)",
            "transition" : isTransition ? "0.2s" : ""
        };

    if (hasMargin) {
        contentStyle["marginTop"] =  "-80vmax";
    }

    let isEventCard = cardInfo.hasOwnProperty("short_title");

    let imageSource = isEventCard ? cardInfo.images[0].image : cardInfo.photo_400_orig ;

    return  (

        <div className="Swipe-content" style={contentStyle}>

            <div className="Swipe-content-up">
                <ChoiceLabelsView horizontalShift={horizontalShift} />
                <img className="Swipe-content-up-image" src={imageSource}/>

            </div>

        </div>
    )

    /*<div className="Swipe-content-down">
                    {isEventCard ?
                        <EventInformationView event={cardInfo}/> :
                        <PersonInformationView person={cardInfo}/>}
                </div>*/
};

export default CardView;
