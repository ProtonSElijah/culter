import React, {Component} from 'react';
import './ComponentsStyle/CardView.css'

const CardView = ({horizontalShift, verticalShift, isSwiping, isUpperTouch}) => {
    let rotationCoefficient = isUpperTouch ? -1 : 1;
    let contentStyle = isSwiping ? {
            "position": "absolute",
            "left": horizontalShift*1 + "px",
            "top": verticalShift + "px",
            "transform": "rotate(" + rotationCoefficient * horizontalShift / 15 + "deg)",
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
                     src="https://img.muz1.tv/img/2018-01-15/fmt_94_124_foto-1.jpg"/>
            </div>
            <div className="Swipe-content-down">
                <p id="Font-bold"><b>Элджей</b></p>
                <p><b>4</b> апреля, суббота, <b>20:00</b></p>
                <p><b>20</b> человек идёт - <b>1</b> друг</p>
            </div>
        </div>
    )

};

export default CardView;
