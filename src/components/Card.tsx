import './Card.scss';

export default function Card(props: any) {
    const { cardNumber, cardHolder, validThru, cardVendor } = props;
    return (
        <div className={`Card ${cardVendor}`}>
            <div className="card-cardnumber">
                <p>{cardNumber}</p>
            </div>
            <div className="card-cardholder">
                <p>Cardholder name</p>
                <p>{cardHolder}</p>
            </div>
            <div className="card-validthru">
                <p>Valid thru</p>
                <p>{validThru?.year} / {validThru?.month}</p>
            </div>
        </div>
    );
}