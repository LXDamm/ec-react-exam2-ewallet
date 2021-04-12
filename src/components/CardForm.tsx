import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router';
import { ICard, ValidDate, Vendor } from '../card';
import { addCard } from '../redux/cardsSlice';
import Card from './Card';
import './CardForm.scss';

export default function CardForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [card, setCard] = useState<ICard>({ cardNumber: 0, cardHolder: '', validThru: { year: 0, month: 0 }, ccv: 0, cardVendor: undefined, isActive: false});
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(addCard(card));
        history.push("/cards");
    }
    return (
        <>
            <Card cardNumber={card.cardNumber} cardHolder={card.cardHolder} validThru={card.validThru} ccv={card.ccv} cardVendor={card.cardVendor} />
            <form className="card-form" onSubmit={(event) => {
                handleSubmit(event);
            }}>
                <label className="card-form-cardnumber">
                    <p>Card number</p>
                    <input type="number" placeholder="XXXX XXXX XXXX XXXX" onChange={(event: ChangeEvent<HTMLInputElement>) => { setCard({ ...card, cardNumber: Number(event.target.value) }) }} />
                </label>
                <label className="card-form-cardholder">
                    <p>Cardholder name</p>
                    <input type="text" placeholder="FIRSTNAME LASTNAME" onChange={(event: ChangeEvent<HTMLInputElement>) => { setCard({ ...card, cardHolder: String(event.target.value) }) }} />
                </label>
                <label className="card-form-validthru">
                    <p>Valid thru</p>
                    <input type="date" onChange={(event: ChangeEvent<HTMLInputElement>) => { setCard({...card, validThru: { year: parseInt(event.target.value.split('-')[0]), month: parseInt(event.target.value.split('-')[1]) } as ValidDate }) }} />
                </label>
                <label className="card-form-ccv">
                    <p>CCV</p>
                    <input type="number" placeholder="XXX" onChange={(event: ChangeEvent<HTMLInputElement>) => { setCard({...card, ccv: Number(event.target.value) }) }} />
                </label>
                <label className="card-form-vendor">
                    <p>Vendor</p>
                    <select onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                        console.log(event.target.value);
                        setCard({ ...card, cardVendor: event.target.value as Vendor}) }} value={card.cardVendor}>
                        <option value="bitcoin">Bitcoin</option>
                        <option value="mastercard">Mastercard</option>
                        <option value="visa">Visa</option>
                        <option value="dogecoin">Dogecoin</option>
                    </select>
                </label>
                <input className="add-card-button" type="submit" value="ADD CARD" />
            </form>
        </>
    );
}