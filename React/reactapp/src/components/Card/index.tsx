import "./styles.css";

export type TCard = {
    name: string;
    time: string;
}

export function Card({ name, time }: TCard) {
    return (
        <div className="card">
            <strong>{name}</strong>
            <small>{time}</small>
        </div>
    );
}
