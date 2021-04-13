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
    const [card, setCard] = useState<ICard>({ cardNumber: '', cardHolder: '', validThru: { year: 0, month: 0 }, ccv: 0, vendor: undefined, isActive: false});
    const [cardValidator, setCardValidator] = useState({ cardNumber: false, cardHolder: false, validThru: false, ccv: false, vendor: false});
    /*const isValidCard = (card: ICard) => {
        if (card.cardNumber.length == 15) {
            setCardValidator({...cardValidator, cardNumber: true});
        } else {
            setCardValidator({...cardValidator, cardNumber: false});
            return false;
        }
        if (card.cardHolder.length < 3 && card.cardHolder.length > 40) return false;
        return true;
    }*/
    const handleCardNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
        let cardNumber = event.target.value;
        setCard({ ...card, cardNumber: cardNumber});
    }
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isValidCard(card)) { 
            dispatch(addCard(card));
            history.push("/cards");
        } else {
            console.log("Not a valid card");
        }
    }
    return (
        <>
            <Card cardNumber={card.cardNumber} cardHolder={card.cardHolder} validThru={card.validThru} ccv={card.ccv} cardVendor={card.vendor} />
            <form className="card-form" onSubmit={(event) => {
                handleSubmit(event);
            }}>
                <label className="card-form-cardnumber">
                    <p>Card number</p>
                    <input required type="number" pattern="[0-9]{13,19}" placeholder="XXXX XXXX XXXX XXXX" onChange={(event: ChangeEvent<HTMLInputElement>) => handleCardNumberChange(event)} />
                </label>
                <label className="card-form-cardholder">
                    <p>Cardholder name</p>
                    <input required type="text" pattern="[a-z]{3,40}" placeholder="FIRSTNAME LASTNAME" onChange={(event: ChangeEvent<HTMLInputElement>) => { setCard({ ...card, cardHolder: String(event.target.value) }) }} />
                </label>
                <label className="card-form-validthru">
                    <p>Valid thru</p>
                    <input type="date" onChange={(event: ChangeEvent<HTMLInputElement>) => { setCard({...card, validThru: { year: parseInt(event.target.value.split('-')[0]), month: parseInt(event.target.value.split('-')[1]) } as ValidDate }) }} />
                </label>
                <label className="card-form-ccv">
                    <p>CCV</p>
                    <input required type="number" placeholder="XXX" onChange={(event: ChangeEvent<HTMLInputElement>) => { setCard({...card, ccv: Number(event.target.value) }) }} />
                </label>
                <label className="card-form-vendor">
                    <p>Vendor</p>
                    <select onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                        console.log(event.target.value);
                        setCard({ ...card, vendor: event.target.value as Vendor}) }} value={card.vendor}>
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