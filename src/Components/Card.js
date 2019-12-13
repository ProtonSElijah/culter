import React, {Component} from 'react';
import './ComponentsStyle/Card.css'
import CardView from "./CardView";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentX: 0,
            currentY: 0,
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
            height: 650
        })
    };

    onTouch = (event) => {  

        let touches = event.changedTouches;
        for (let i = 0; i < touches.length; i++){
            let previousX = this.state.currentX;
            let previousY = this.state.currentY;

            let updatedState = {
                currentX: touches[i].clientX,
                currentY: touches[i].clientY,
            };

            if (this.state.isFirstTouch){
                updatedState.isUpperTouch = touches[i].clientY > this.state.height / 2;
                updatedState.isFirstTouch = false;
            } else {
                updatedState.horizontalShift = this.state.horizontalShift + touches[i].clientX - previousX;
                updatedState.verticalShift = this.state.verticalShift + touches[i].clientY - previousY;
            }

            this.setState(updatedState);
        }
    };

    onTouchStart = (event) => {
        event.preventDefault();
        this.setState({
            isFirstTouch: true,
            isSwiping: true,
            isTransition: false
        });
    };
    onTouchEnd = (event) => {
        if (Math.abs(this.state.horizontalShift) > 100){
            this.setState({
                isTransition: true
            });
            this.setState(
                {
                    horizontalShift: this.state.horizontalShift * 5,
                    verticalShift: this.state.verticalShift * 5,
                });


            let thisHandler = this;
            setTimeout(function () {
                thisHandler.setState({
                    isTransition: false,
                    horizontalShift: 0,
                    verticalShift: 0,
                    currentX: 0,
                    currentY: 0,
                });
                thisHandler.props.onSwipeEnd();
            },400);


        } else {
            this.setState(
                {
                    horizontalShift: 0,
                    verticalShift: 0,
                    currentX: 0,
                    currentY: 0,
                    isSwiping: false,
                    isTransition: true
                });
        }

    };

    render() {

        return (
            <div ref={this.viewRef}
                className="Swipe-main"
                 onTouchMove={this.onTouch}
                 onTouchEnd={this.onTouchEnd}
                 onTouchStart={this.onTouchStart}>
                <CardView
                          cardInfo={this.props.cardInfo}
                          isSwiping={this.state.isSwiping}
                          horizontalShift={this.state.horizontalShift}
                          verticalShift={this.state.verticalShift}
                          isUpperTouch={this.state.isUpperTouch}
                            isTransition={this.state.isTransition}/>
            </div>
        );
    }
}

export default Card;
