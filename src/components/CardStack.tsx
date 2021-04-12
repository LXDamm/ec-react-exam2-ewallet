import { useDispatch } from 'react-redux';
import { ICard, ValidDate } from '../card';
import { setActiveCard } from '../redux/cardsSlice';
import Card from './Card';

function CardStack(props: any) {
    const dispatch = useDispatch();
    const handleClick = (cardNumber: number) => {
        dispatch(setActiveCard(cardNumber));
    }
    return (
        <>
            {
                props.cards.map((item: ICard) => {
                    return <>
                        <div onClick={() => { handleClick(item.cardNumber) }}><Card cardNumber={item?.cardNumber} cardHolder={item?.cardHolder} validThru={item?.validThru as ValidDate} ccv={item?.ccv} cardVendor={item?.cardVendor} />
                        </div>
                    </>
                })
            }
        </>
    );
}

export default CardStack;