import { ChangeEvent, useState } from 'react';
import Card from './Card';
import './CardForm.scss';

export default function CardForm() {
    const [card, setCard] = useState({cardNumber: 0});
    const handleSubmit = () => {
    }
    return (
        <>
            <Card cardNumber={card.cardNumber}/>
            <form className="card-form" onSubmit={handleSubmit}>
                <label className="card-form-cardnumber">
                    <p>Card number</p>
                    <input type="number" placeholder="XXXX XXXX XXXX XXXX" onChange={(event: ChangeEvent<HTMLInputElement>) => { setCard({cardNumber: Number(event.target.value)}) }} />
                </label>
                <label className="card-form-cardholder">
                    <p>Cardholder name</p>
                    <input type="text" placeholder="FIRSTNAME LASTNAME" onChange={(event: ChangeEvent<HTMLInputElement>) => { setCard({cardNumber: Number(event.target.value)}) }} />
                </label>
                <label className="card-form-validdate">
                    <p>Valid thru</p>
                    <input type="date" onChange={(event: ChangeEvent<HTMLInputElement>) => { setCard({cardNumber: Number(event.target.value)}) }} />
                </label>
                <label className="card-form-ccv">
                    <p>CCV</p>
                    <input type="number" placeholder="XXX" onChange={(event: ChangeEvent<HTMLInputElement>) => { setCard({cardNumber: Number(event.target.value)}) }} />
                </label>
                <label className="card-form-vendor">
                    <p>Vendor</p>
                    <input type="select" placeholder="XXXX XXXX XXXX XXXX" onChange={(event: ChangeEvent<HTMLInputElement>) => { setCard({cardNumber: Number(event.target.value)}) }} />
                </label>
                <input className="add-card-button" type="submit" value="ADD CARD" />
            </form>
        </>
    );
}