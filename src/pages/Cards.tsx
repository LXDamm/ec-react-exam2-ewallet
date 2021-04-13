import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ValidDate } from '../card';
import Card from '../components/Card';
import CardStack from '../components/CardStack';
import { AppState, typedUseSelector } from '../redux/store';
import { deleteActiveCard } from '../redux/cardsSlice';
import './Cards.scss';

export default function Cards() {
    const dispatch = useDispatch();
    const activeCardNumber = typedUseSelector((state: AppState) => {
        return state.cardsStack.activeCardNumber;
    });
    const activeCard = typedUseSelector((state: AppState) => {
        let activeCard = state.cardsStack.cards.find((item) => {
            return item.cardNumber === activeCardNumber;
        });
        if (activeCard) return activeCard;
        else if (state.cardsStack.cards.length > 0) return state.cardsStack.cards[0];
        else return null;
    });
    const cards = typedUseSelector((state: AppState) => {
        return state.cardsStack.cards;
    });
    const handleDeleteActiveCard = () => {
        dispatch(deleteActiveCard());
    };
    return (
        <>
            <h1>E-Wallet</h1>
            <p>Active Card</p>
            {activeCard
                ? <><Card cardNumber={activeCard.cardNumber} cardHolder={activeCard.cardHolder} validThru={activeCard.validThru as ValidDate} ccv={activeCard.ccv} cardVendor={activeCard.vendor} /><button className="delete-active-card-button" onClick={() => handleDeleteActiveCard()}>Delete active Card</button></>
                : <p>No active card</p>
            }
            <CardStack cards={cards} />
            {cards.length < 4 &&
                <Link to="/addcard" className="add-card-link"><button className="add-card-button">Add a new Card</button></Link>
            }
        </>
    );
}