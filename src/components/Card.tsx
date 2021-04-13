import './Card.scss';

export default function Card(props: any) {
    const { cardNumber, cardHolder, validThru, cardVendor } = props;
    return (
        <div className={`Card ${cardVendor}`}>
            <div className="card-vendor">
                <p>{cardVendor}</p>
            </div>
            <div className="card-chip-wrapper">
                <div className="card-chip"  />
            </div>
            <div className="card-cardnumber">
                <span>
                    <p>{cardNumber.substr(0, 4)}</p>
                    <p>{cardNumber.substr(4, 4)}</p>
                    <p>{cardNumber.substr(8, 4)}</p>
                    <p>{cardNumber.substr(12, 4)}</p>
                </span>
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