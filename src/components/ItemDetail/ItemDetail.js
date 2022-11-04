import "./ItemDetail.css"
import Counter from "../ItemCount/ItemCount"
import ButtonCheckout from "../ButtonCheckout/ButtonCheckout"
import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Swal from "sweetalert2"


const ItemDetail = ({ id, name, price,  img,  description, stock}) => {
    
    const [finalizar, setFinalizar] = useState('finalizar')
    const { addItem, productCount } = useContext(CartContext)

    const ItemCounter = finalizar === 'finalizar' ? Counter : ButtonCheckout

    const addCart = (count) => {
        const productToAdd = {
            id, name, price, count
        }

        addItem(productToAdd, count)
        
        setFinalizar(finalizar === 'finalizar' ? <ButtonCheckout/> : <Counter/>)

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Se agrego correctamente ${count} ${name}`,
            showConfirmButton: false,
            timer: 2000
          })

    }

    const countAdded = productCount(id)


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
                { stock !== 0 ? <ItemCounter stock={stock} text={`Stock: ${stock}`} onAdd={addCart} initial={countAdded}/> : <h1 className="h4">No hay stock</h1>}
            </div>
        </div>
    )
}

export default ItemDetail