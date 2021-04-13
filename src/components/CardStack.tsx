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
    const handleClick = (cardNumber: string) => {
        dispatch(setActiveCard(cardNumber));
    }
    return (
        <ul className="card-stack">
            {
                props.cards.filter((item: ICard) => {
                    return item.cardNumber !== activeCardNumber;
                }).map((filteredItem: ICard, i: any) => {
                    return <>
                        <li key={i} className={`card-wrapper card-offset-${i}`} onClick={() => handleClick(filteredItem.cardNumber) }><Card cardNumber={filteredItem?.cardNumber} cardHolder={filteredItem?.cardHolder} validThru={filteredItem?.validThru as ValidDate} ccv={filteredItem?.ccv} cardVendor={filteredItem?.vendor} />
                        </li>
                    </>
                })
            }
        </ul>
    );
}

export default CardStack;