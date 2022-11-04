import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import "./ItemCart.css"


const ItemCart = ({id, name, price, count}) => {

    const {removeCart} = useContext(CartContext)

    return (
        <div className="d-flex container itemsCart">
            <div className="cartStyle m-auto my-4">
                <div className="cartName">
                    <h1 className="h5">{name}</h1>
                </div>
                <div className="mx-1 mx-lg-5 fontCart">
                    Precio: ${price}
                </div>
                <div className="mx-1 mx-lg-4 fontCart">
                    Cantidad: {count}
                </div>
                <div className="mx-1 mx-lg-4 fontCart">
                    SubTotal: ${price * count}
                </div>
                <div>
                    <button className="btn btn-danger ms-1 ms-lg-3 p-1 p-lg-2 buttonCartSm" onClick={() => removeCart(id)}>Remover</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCart