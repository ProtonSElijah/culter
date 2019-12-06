import React, {Component} from 'react';
import '../panels/panelsStyle/Swipe.css';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentX: 0,
            currentY: 0,
            prevX: 0,
            prevY: 0,
            xDifference: 0,
            startX: 0,
            startY: 0,
            xLength: 0,
            yLength: 0,
            isFirstTouch: true,
            isSwiping: false
        }
    }

    onTouch = (e) => {
        e.stopPropagation();
        let touches = e.changedTouches;
        for (let i = 0; i < touches.length; i++){
            let lastX = this.state.currentX;
            let lastY = this.state.currentY;

            let updatedState = {
                prevX: lastX,
                prevY: lastY,
                currentX: touches[i].clientX,
                currentY: touches[i].clientY,
            };

            if (this.state.isFirstTouch){
                updatedState.isFirstTouch = false;
            } else {
                let xDifference = touches[i].clientX - lastX;
                updatedState.xDifference = xDifference;
                updatedState.xLength = this.state.xLength + xDifference;
                let yDifference = touches[i].clientY - lastY;
                updatedState.yDifference = yDifference;
                updatedState.yLength = this.state.yLength + yDifference;
            }

            this.setState(updatedState);
        }
    };

    onTouchStart = (e) => {
        e.preventDefault();
        this.setState({
            isFirstTouch: true,
            isSwiping: true
        });
    };
    onTouchEnd = (e) => {
        this.setState(
            {
                xLength: 0,
                yLength: 0,
                currentX: 0,
                currentY: 0,
                prevX: 0,
                prevY: 0,
                xDifference: 0,
                yDifference: 0,
                isSwiping: false
            });
    };

    render() {
        let contentStyle = this.state.isSwiping
            ?
                this.getStyleForSwipe()
            :
                {"margin": "2vmax 2.5vmin"};
        let labelStyles = this.getStyleForLabels();
        let opacityStyle = {"opacity": (1 -  Math.abs(this.state.xLength) / 500)};
        return (
            <div className="Swipe-main">
                <div className="Swipe-content"
                     style={contentStyle}
                     onTouchMove={this.onTouch}
                     onTouchEnd={this.onTouchEnd}
                     onTouchStart={this.onTouchStart}>
                    <div className="Swipe-content-up">
                        <div className="Swipe-content-up-labels">
                            <div style={labelStyles.right} className="Swipe-right-label choice-label">
                                Круто
                            </div>
                            <div style={labelStyles.left} className="Swipe-left-label choice-label">
                                Отстой
                            </div>
                        </div>
                        <img style={opacityStyle} className="el" src="https://img.muz1.tv/img/2018-01-15/fmt_94_124_foto-1.jpg"/>
                    </div>
                    <div style={opacityStyle} className="Swipe-content-down" >
                        <p id="Font-bold"><b>Элджей</b></p>
                        <p><b>4</b> апреля, суббота, <b>20:00</b></p>
                        <p><b>20</b> человек идёт - <b>1</b> друг</p>
                    </div>
                </div>
            </div>
        );
    }

    getStyleForSwipe = () => {
        return {
            "position": "absolute",
            "left": this.state.xLength*1.3 + "px",
            "top": this.state.yLength*0.9 + "px",
            "transform": "rotate(" + -this.state.xLength / 20 + "deg)",

        };
    };

    getCoords = ({elem}) => {
        let box = elem.getBoundingClientRect();

        return {
            top: box.top + window.pageYOffset,
            left: box.left + window.pageXOffset
        };

    };

    getStyleForLabels = () => {
        let opacity = Math.min(Math.abs(this.state.xLength) / 50,1) ;
        return {
            left :{
                opacity: this.state.xLength < 0 ? opacity : 0
            },
            right :{
                opacity: this.state.xLength > 0 ? opacity : 0
            }
        }
    }
}

export default Card;
