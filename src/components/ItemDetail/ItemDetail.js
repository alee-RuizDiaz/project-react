import "./ItemDetail.css"
import Counter from "../ItemCount/ItemCount"
import Checkout from "../Checkout/Checkout"
import { useState } from "react"


const ItemDetail = ({ id, name, price,  img,  description, stock}) => {
    
    const [finalizar, setFinalizar] = useState('finalizar')

    const ItemCounter = finalizar === 'finalizar' ? Counter : Checkout

    const addCart = (count) => {
        const productToAdd = {
            id, name, price, count
        }

        setFinalizar(finalizar === 'finalizar' ? <Checkout/> : <Counter/>)

        console.log(productToAdd)
    }

    return (
        <div className="cardDetail">
            <div>
                <img className="img-fluid imgDetail" src={img} alt={name}/>
            </div>
            <div className="descriptionCard m-auto">
                <h1 className="h3">{name}</h1>
                <h2 className="h4 my-4"> $ {price}</h2>
                <p>Description: {description}</p>
            </div>
            <div className="counterDetail m-auto ms-5">
                <ItemCounter stock={stock} text={`Stock: ${stock}`} onAdd={addCart}/>
            </div>
        </div>
    )
}

export default ItemDetail