
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import ItemCart from "../ItemCart/ItemCart"
import "./Cart.css"

const Cart = () => {

    const { cart, total } = useContext(CartContext)


    return (
        <div>
            <div>
                <h1 className="h3 my-4">Tu carrito</h1>
            </div>
            <div>
                {cart.map(prod => <ItemCart key={prod.id} {...prod}/>)}   
            </div>
            <div> 
                Total: ${total}
            </div>
        </div>
    )
}

export default Cart