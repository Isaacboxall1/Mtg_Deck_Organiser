export default function CardsNotFound({cardsNotFound}) {

    return (
        <ul>
    {cardsNotFound?.map((card, index) => {
    return <li key={index}>{card}</li>
    })}
    </ul>)
}