import { CartContext } from "../../context/CartContext"
import { useContext } from "react"


const ItemCart = ({id, name, price, count}) => {

    const {removeCart} = useContext(CartContext)

    return (
        <div className="d-flex container">
            <div className="cartStyle m-auto my-4">
                <div className="cartName">
                    <h1 className="h5">{name}</h1>
                </div>
                <div className="mx-5">
                    Precio: ${price}
                </div>
                <div className="mx-4">
                    Cantidad: {count}
                </div>
                <div className="mx-4">
                    SubTotal: ${price * count}
                </div>
                <div>
                    <button className="btn btn-danger ms-3" onClick={() => removeCart(id)} >Remover</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCart