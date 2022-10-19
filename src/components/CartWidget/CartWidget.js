import cart from './assets/cart.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext.js'


const CartWidget = () => {

    const  { totalCount } = useContext(CartContext)

    return (
        <div>
            <sup className='me-2'><img src={cart} alt='cart' /></sup>
            {totalCount} 
        </div>
    )
}

export default CartWidget