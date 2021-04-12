import './Card.scss';

export default function Card(props: any) {
    const { cardNumber, cardHolder, validThru, ccv, cardVendor} = props;
    return (
        <div className={`Card ${cardVendor}`}>
            <p>{cardNumber}</p>
            <p>Cardholder name</p>
            <p>{cardHolder}</p>
            <p>Valid thru</p>
            <p>{validThru?.year} / {validThru?.month}</p>
        </div>
    );
}