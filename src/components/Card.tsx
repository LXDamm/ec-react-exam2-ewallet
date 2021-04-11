import './Card.scss';

export default function Card(props: any) {
    return (
        <div className="Card">
            <p>{props.cardNumber}</p>
        </div>
    );
}