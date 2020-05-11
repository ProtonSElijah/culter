import spinner from "../../assets/preloader.svg";

import React from 'react';

const LoadingAnimator = () => {
    return (
        <div className="loading-animator-container">
            <img src={spinner} alt="loading spinner"/>
        </div>
    )
}

export default LoadingAnimator;