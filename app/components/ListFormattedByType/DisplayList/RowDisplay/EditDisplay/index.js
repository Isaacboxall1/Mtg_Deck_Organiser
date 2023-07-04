export default function EditDisplay({quantity, incrementQuantity, decrementQuantity}) {
    
    
    return (
        <div>
            <button onClick={incrementQuantity}>+</button>
            <p>x{quantity}</p>
            <button onClick={decrementQuantity}>-</button>
        </div>
    )
}
    