import "./ItemDetail.css"
import Counter from "../ItemCount/ItemCount"
import Checkout from "../Checkout/Checkout"
import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Swal from "sweetalert2"


const ItemDetail = ({ id, name, price,  img,  description, stock}) => {
    
    const [finalizar, setFinalizar] = useState('finalizar')
    const { addItem } = useContext(CartContext)

    const ItemCounter = finalizar === 'finalizar' ? Counter : Checkout

    const addCart = (count) => {
        const productToAdd = {
            id, name, price, count
        }

        addItem(productToAdd)
        
        setFinalizar(finalizar === 'finalizar' ? <Checkout/> : <Counter/>)

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Su producto fue agregado al carrito',
            showConfirmButton: false,
            timer: 1800
          })

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
            <div className="counterDetail m-auto ms-lg-5 mb-5 mb-lg-auto">
                <ItemCounter stock={stock} text={`Stock: ${stock}`} onAdd={addCart}/>
            </div>
        </div>
    )
}

export default ItemDetail