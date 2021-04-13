import React from 'react';
import { useSelector, useStore } from 'react-redux';
import { Link } from 'react-router-dom';
import { ValidDate } from '../card';
import Card from '../components/Card';
import CardStack from '../components/CardStack';
import { AppState, typedUseSelector } from '../redux/store';
import './Cards.scss';

export default function Cards() {
    const activeCard = typedUseSelector((state: AppState) => {
        return state.cardsStack.cards.find((item) => {
            return item.isActive;
        });
    });
    const cards = typedUseSelector((state: AppState) => {
        return state.cardsStack.cards;
    });
    return (
        <>
            <h1>E-Wallet</h1>
            <p>Active Card</p>
            <Card cardNumber={activeCard?.cardNumber} cardHolder={activeCard?.cardHolder} validThru={activeCard?.validThru as ValidDate} ccv={activeCard?.ccv} cardVendor={activeCard?.vendor} />
            <CardStack cards={cards} />
            <Link to="/addcard" className="add-card-link"><button className="add-card-button">Add a new Card</button></Link>
        </>
    );
}