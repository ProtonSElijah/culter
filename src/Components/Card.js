import React, {useEffect} from 'react';
import './ComponentsStyle/Card.scss'
import CardView from "./View/CardView";


const Card = ({cardInfo, onSwipeEnd}) => {

    let shiftDict = {
        horizontalShift: 0,
        verticalShift: 0
    };
    let elem = null;
    let currentX = 0;
    let currentY = 0;
    let isFirstTouch = true;
    let isSwiping = false;
    let isTransition = false;
    let isUpperTouch = false;

    let shift = {horizontalShift: 0, verticalShift: 0};


    useEffect(() => {
        updateStyle();
    }, []);
    const onTouch = (event) => {
        let touches = event.changedTouches;
        for (let i = 0; i < touches.length; i++) {
            updateByTouch(touches[i])
        }
    };

    const onTouchStart = (event) => {
        isFirstTouch = true;
        isSwiping = true;
        isTransition = false;
        updateStyle();
    };

    const onTouchEnd = (event) => {
        if (Math.abs(shift.horizontalShift) > 100) {
            let isLike = shift.horizontalShift > 0;
            animatePick();
            setTimeout(() => {
                resetCard(false);
                onSwipeEnd(isLike);
            }, 400);
        } else {
            resetCard(true);
        }

    };

    function updateStyle() {
        elem = elem? elem : document.getElementById("card-id").firstChild;

        let rotationCoefficient = isUpperTouch ? -1 : 1;
        let rotation = rotationCoefficient * shift.horizontalShift / 15 ;

        elem.style.transform = "rotate(" + rotation + "deg)" +
            " translate("+ shift.horizontalShift + "px, "+ shift.verticalShift + "px)";
        elem.style.transition = isTransition ? "0.2s" : "";
    }

    const updateByTouch = (touch) => {
        let previousX = currentX;
        let previousY = currentY;

        currentX = touch.clientX;
        currentY = touch.clientY;

        if (isFirstTouch) {
            isUpperTouch = touch.clientY < 300;

            isFirstTouch = false;
        } else {
            shift =
                {
                    horizontalShift: shift.horizontalShift + touch.clientX - previousX,
                    verticalShift: shift.verticalShift + touch.clientY - previousY
                }

        }
        updateStyle();

    };

    // Перемещает карту в сторону свайпа
    const animatePick = () => {
        // Задаём сначала транзитивность, а затем перемещаем карточку по вектору движения
        isTransition = true;
        shiftDict.horizontalShift = shift.horizontalShift * 5;
        shiftDict.verticalShift = shift.verticalShift * 5;
        shift = shiftDict;
        updateStyle();
    };

    // Возвращает карту в начальное положение
    const resetCard = (withTransition) => {
        isTransition = withTransition;
        isSwiping = false;
        shiftDict.horizontalShift = 0;
        shiftDict.verticalShift = 0;
        shift = shiftDict;
        currentY = 0;
        currentX = 0;
        updateStyle();
    };

    let swipeInfo = {
        isSwiping: isSwiping,
        hasMargin: false,
        horizontalShift: shift.horizontalShift,
        verticalShift: shift.verticalShift,
        isUpperTouch: isUpperTouch,
        isTransition: isTransition
    };
    return (
        <div
            id={"card-id"}
            className="Swipe-main"
            onTouchMove={onTouch}
            onTouchEnd={onTouchEnd}
            onTouchStart={onTouchStart}>
            <CardView
                swipeInfo={swipeInfo}
                cardInfo={cardInfo}
                />
        </div>
    );

};


export default Card;
