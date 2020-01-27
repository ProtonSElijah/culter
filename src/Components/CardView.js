import React, {Component} from 'react';
import './ComponentsStyle/CardView.scss'

const CardView = ({horizontalShift, verticalShift, hasMargin, isUpperTouch, cardInfo,isTransition}) => {
    let rotationCoefficient = isUpperTouch ? -1 : 1;
    let contentStyle = {
            "transform": "rotate(" + rotationCoefficient * horizontalShift / 15 + "deg)" +
                " translate("+ horizontalShift + "px, "+ verticalShift + "px)",
            "transition" : isTransition ? "0.2s" : ""
        };

    if (hasMargin) {
        contentStyle["margin-top"] =  "-80vmax";
    }

    let labelOpacity = Math.min(Math.abs(horizontalShift) / 50,1);
    let labelStyles = {
        left :{
            opacity: horizontalShift < 0 ? labelOpacity : 0
        },
        right :{
            opacity: horizontalShift > 0 ? labelOpacity : 0
        }};


    return  (

        <div className="Swipe-content" style={contentStyle}>
            <div className="Swipe-content-up">
                <div className="Swipe-content-up-labels">
                    <div style={labelStyles.right} className="Swipe-right-label choice-label">
                        Круто
                    </div>
                    <div style={labelStyles.left} className="Swipe-left-label choice-label">
                        Отстой
                    </div>
                </div>
                <img className="Swipe-content-up-image"
                     src={cardInfo.images[0].image}/>
            </div>
            <div className="Swipe-content-down">
                <p id="Font-bold"><b>{cardInfo.short_title}</b></p>
                <p><b>4</b> апреля, суббота, <b>20:00</b></p>
                <p><b>20</b> человек идёт - <b>1</b> друг</p>
            </div>
        </div>
    )

};

export default CardView;
