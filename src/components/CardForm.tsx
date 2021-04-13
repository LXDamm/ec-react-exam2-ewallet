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
    const [card, setCard] = useState<ICard>({ cardNumber: '', cardHolder: '', validThru: { year: 0, month: 0 }, ccv: 0, vendor: 'dogecoin' });
    const isValidCard = (card: ICard) => {
        return true;
    }
    const handleCardNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
        let cardNumber = event.target.value;
        setCard({ ...card, cardNumber: cardNumber});
    }
    const handleCardHolderChange = (event: ChangeEvent<HTMLInputElement>) => {
        let cardHolder = event.target.value;
        setCard({ ...card, cardHolder: cardHolder});
    }
    const handleValidThruChange = (event: ChangeEvent<HTMLInputElement>) => {
        let validThru = { year: parseInt(event.target.value.split('-')[0]), month: parseInt(event.target.value.split('-')[1]) } as ValidDate;
        setCard({ ...card, validThru: validThru});
    }
    const handleCcvChange = (event: ChangeEvent<HTMLInputElement>) => {
        let ccv = event.target.value;
        setCard({ ...card, ccv: parseInt(ccv)});
    }
    const handleVendorChange = (event: ChangeEvent<HTMLSelectElement>) => {
        let vendor = event.target.value;
        setCard({ ...card, vendor: vendor as Vendor});
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
                    <input required type="text" pattern="[0-9]{13,19}" placeholder="XXXX XXXX XXXX XXXX" onChange={(event: ChangeEvent<HTMLInputElement>) => handleCardNumberChange(event)} />
                </label>
                <label className="card-form-cardholder">
                    <p>Cardholder name</p>
                    <input required type="text" pattern="[a-zA-Z ]{3,40}" placeholder="FIRSTNAME LASTNAME" onChange={(event: ChangeEvent<HTMLInputElement>) => handleCardHolderChange(event)} />
                </label>
                <span>
                <label className="card-form-validthru">
                    <p>Valid thru</p>
                    <input required type="date" onChange={(event: ChangeEvent<HTMLInputElement>) => handleValidThruChange(event)} />
                </label>
                <label className="card-form-ccv">
                    <p>CCV</p>
                    <input required type="text" pattern="[0-9]{3,4}" placeholder="XXX" onChange={(event: ChangeEvent<HTMLInputElement>) => handleCcvChange(event)} />
                </label>
                </span>
                <label className="card-form-vendor">
                    <p>Vendor</p>
                    <select required defaultValue="dogecoin" onChange={(event: ChangeEvent<HTMLSelectElement>) => handleVendorChange(event)}>
                        <option value="bitcoin">Bitcoin</option>
                        <option value="mastercard">Mastercard</option>
                        <option value="visa">Visa</option>
                        <option value="dogecoin">Dogecoin</option>
                    </select>
                </label>
                <button className="add-card-button" type="submit">ADD CARD</button>
            </form>
        </>
    );
}