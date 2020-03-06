import React from 'react';
import '../ComponentsStyle/CardView.scss'


const EventInformationView = ({horizontalShift}) => {

    let labelOpacity = Math.min(Math.abs(horizontalShift) / 50,1);
    let labelStyles = {
        left :{
            opacity: horizontalShift < 0 ? labelOpacity : 0
        },
        right :{
            opacity: horizontalShift > 0 ? labelOpacity : 0
        }};
    
    return  (

        <div className="Swipe-content-up-labels">

            <div style={labelStyles.right} className="Swipe-right-label choice-label">
                Like
            </div>

            <div style={labelStyles.left} className="Swipe-left-label choice-label">
                Pass
            </div>
        </div>
    )

};

export default EventInformationView;

