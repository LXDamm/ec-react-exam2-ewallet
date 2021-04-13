import { useDispatch } from 'react-redux';
import { ICard, ValidDate } from '../card';
import { setActiveCard } from '../redux/cardsSlice';
import { AppState, typedUseSelector } from '../redux/store';
import Card from './Card';

function CardStack(props: any) {
    const dispatch = useDispatch();
    const activeCardNumber = typedUseSelector((state: AppState) => {
        return state.cardsStack.activeCardNumber;
    });
    const cardList = props.cards.filter((item: ICard) => {
        return item.cardNumber !== activeCardNumber;
    }).map((filteredItem: ICard, index: any) => {
        return <li key={filteredItem.toString()} className={`card-wrapper card-offset-${index}`} onClick={() => handleClick(filteredItem.cardNumber)}><Card cardNumber={filteredItem.cardNumber} cardHolder={filteredItem.cardHolder} validThru={filteredItem.validThru as ValidDate} ccv={filteredItem.ccv} cardVendor={filteredItem.vendor} />
            </li>
    });
    const handleClick = (cardNumber: string) => {
        dispatch(setActiveCard(cardNumber));
    };
    return (
        <ul className="card-stack">
            {cardList}
        </ul>
    );
}

export default CardStack;