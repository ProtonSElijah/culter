import React, {Component} from 'react';
import './ComponentsStyle/Card.scss'
import CardView from "./View/CardView";

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
            this.updateByTouch(touches[i])
        }
    };

    onTouchStart = (event) => {
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
                thisHandler.resetCard(false);
                thisHandler.props.onSwipeEnd(isLike);
            },400);
        } else {
            this.resetCard(true);
        }

    };

    updateByTouch = (touch) =>{
        let previousX = this.state.currentX;
        let previousY = this.state.currentY;

        let updatedState = {
            currentX: touch.clientX,
            currentY: touch.clientY,
        };

        if (this.state.isFirstTouch){
            updatedState.isUpperTouch = touch.clientY > 300;
            updatedState.isFirstTouch = false;
        } else {
            updatedState.horizontalShift = this.state.horizontalShift + touch.clientX - previousX;
            updatedState.verticalShift = this.state.verticalShift + touch.clientY - previousY;
        }

        this.setState(updatedState);
    }

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
    resetCard = (withTransition) => {
        this.setState({
            isTransition: withTransition,
            isSwiping: false,
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
