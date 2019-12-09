import React, {Component} from 'react';
import './ComponentsStyle/Card.css'
import CardView from "./CardView";

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
            horizontalShift: 0,
            verticalShift: 0,
            isFirstTouch: true,
            isSwiping: false,
            height: 0

        };
        this.viewRef = React.createRef();
    }

    componentDidMount = () => {
        this.setState({
            height: 600
        })
    };

    onTouch = (event) => {  
        event.stopPropagation();
        let touches = event.changedTouches;
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
                updatedState.isUpperTouch = touches[i].clientY > this.state.height / 2;
                updatedState.isFirstTouch = false;
            } else {

                let xDifference = touches[i].clientX - lastX;
                updatedState.xDifference = xDifference;
                updatedState.horizontalShift = this.state.horizontalShift + xDifference;
                let yDifference = touches[i].clientY - lastY;
                updatedState.yDifference = yDifference;
                updatedState.verticalShift = this.state.verticalShift + yDifference;
            }

            this.setState(updatedState);
        }
    };

    onTouchStart = (event) => {
        event.preventDefault();
        this.setState({
            isFirstTouch: true,
            isSwiping: true
        });
    };
    onTouchEnd = (event) => {
        this.setState(
            {
                horizontalShift: 0,
                verticalShift: 0,
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

        return (
            <div ref={this.viewRef}
                className="Swipe-main"
                 onTouchMove={this.onTouch}
                 onTouchEnd={this.onTouchEnd}
                 onTouchStart={this.onTouchStart}>
                <CardView
                          isSwiping={this.state.isSwiping}
                          horizontalShift={this.state.horizontalShift}
                          verticalShift={this.state.verticalShift}
                          isUpperTouch={this.state.isUpperTouch}/>
            </div>
        );
    }
}

export default Card;
