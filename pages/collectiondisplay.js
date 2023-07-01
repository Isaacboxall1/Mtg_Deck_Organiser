import Image from "next/image";
export default function CollectionDisplay () {
    const cardArray = [{name: 'card1', img: '/card1.jpg'}, {name: 'card2', img: '/card2.jpg'}, {name: 'card3', img: '/card3.jpg'}];
    return ( 
        <div>
            {cardArray.map((card, index) => (
                <div key={index}>
                    <Image src={'https://images.saymedia-content.com/.image/t_share/MTc0NDYwNzc3ODAxODUyMjY0/top-magic-the-gathering-cards-of-all-time.jpg'} alt={card.name} width={500} height={500}/>
                    <h1>{card.name}</h1>
                </div>
            ))}
        </div>
    )
}