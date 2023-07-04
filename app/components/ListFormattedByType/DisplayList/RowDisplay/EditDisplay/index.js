export default function EditDisplay({quantity, incrementQuantity, decrementQuantity}) {
    
    return (
        <div>
            <button onClick={incrementQuantity}>+</button>
            <p>x{quantity}</p>
            {quantity > 0 ? <button onClick={decrementQuantity}>-</button> : <button disabled>-</button>}
        </div>
    )
}
    