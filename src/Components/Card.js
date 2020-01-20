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
        this.animatePick = this.animatePick.bind(this);
        this.resetCard = this.resetCard.bind(this);
    }

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
                updatedState.isUpperTouch = touches[i].clientY > 300;
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
            let isLike= this.state.horizontalShift > 0;

            this.animatePick();

            let thisHandler = this;
            setTimeout(() => {
                thisHandler.resetCard();
                thisHandler.props.onSwipeEnd(isLike);
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

    // Перемещает карту в сторону свайпа
    animatePick = () => {
        // Задаём сначала транзитивность, а затем перемещаем карточку по вектору движения
        this.setState({
            isTransition: true
        });
        this.setState({
            horizontalShift: this.state.horizontalShift * 5,
            verticalShift: this.state.verticalShift * 5,
        });
    };

    // Возвращает карту в начальное положение
    resetCard = () => {
        this.setState({
            isTransition: false,
            horizontalShift: 0,
            verticalShift: 0,
            currentX: 0,
            currentY: 0,
        });
    };

    render() {

        return (
            <div
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
