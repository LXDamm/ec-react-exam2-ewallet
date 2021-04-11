import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import CardStack from '../components/CardStack';
import './Cards.scss';

export default function Cards() {
    return (
        <>
            <h1>E-Wallet</h1>
            <p>Active Card</p>
            <Card />
            <CardStack />
            <Link to="/addcard" className="add-card-link"><button className="add-card-button">Add a new Card</button></Link>
        </>
    );
}