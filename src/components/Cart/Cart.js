
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import ItemCart from "../ItemCart/ItemCart"
import { Link } from "react-router-dom"
import './Cart.css'


const Cart = () => {

    const { cart, total, totalCount} = useContext(CartContext)

    if(totalCount === 0) {
        return (
            <h1 className="h3 my-4">No hay pructos en el carrito</h1>
        )
    }

    return (
        <div>
            <div>
                <h1 className="h3 my-4">Tu carrito</h1>
            </div>
            <div>
                {cart.map(prod => <ItemCart key={prod.id} {...prod}/>)}   
            </div>
            <div className="mt-3 ordenCompra container">
                <div className="mx-5 totalPrice">
                    Total: ${total}
                </div>
                <div className="mx-3">
                    <Link to={'/checkout'} className="btn btn-success">Finalizar Compra</Link>
                </div>
            </div>
        </div>
    )
}

export default Cart