import React, {Component} from 'react';
import './ComponentsStyle/CardView.css'

const CardView = ({horizontalShift, verticalShift, isSwiping, isUpperTouch, cardInfo}) => {
    let rotationCoefficient = isUpperTouch ? -1 : 1;
    let contentStyle = isSwiping ? {


            "transform": "rotate(" + rotationCoefficient * horizontalShift / 15 + "deg)" +
                " translate("+ horizontalShift + "px, "+ verticalShift + "px)",
        } : {
            "transition" : "0.5s"
        };

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
                     src={cardInfo.image}/>
            </div>
            <div className="Swipe-content-down">
                <p id="Font-bold"><b>{cardInfo.name}</b></p>
                <p><b>4</b> апреля, суббота, <b>20:00</b></p>
                <p><b>20</b> человек идёт - <b>1</b> друг</p>
            </div>
        </div>
    )

};

export default CardView;
