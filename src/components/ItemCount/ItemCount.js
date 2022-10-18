import { useState } from "react";
import './ItemCount.css'

const Counter = ({onAdd, text, stock = 0, initial = 1}) => {

    const [count, setCount] = useState(initial)
    
    const sumar = () => {
        if(count < stock) {
            setCount(count + 1)
        }
        
    }

    const restar = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div className="cart p-3">
            <div className="contentText pb-2">
                <h1 className="h5 text me-5 ms-1">{text}</h1>
            </div>
            <div className="count px-4">
                <div>
                    <button className="buttonCart" onClick={restar}>-</button>
                </div>
                <div>
                    <h1 className="count1">{count}</h1>
                </div>
                <div>
                    <button className="buttonCart" onClick={sumar}>+</button>
                </div>
            </div>
            <div className="mt-3">
                <button  className="buttonCarrito py-1" onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Counter