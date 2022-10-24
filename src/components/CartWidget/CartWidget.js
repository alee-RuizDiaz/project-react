import cart from './assets/cart.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext.js'
import { Link } from 'react-router-dom'


const CartWidget = () => {

    const  { totalCount } = useContext(CartContext)

    return (
        <Link to={'/cart'}>
            <div>
                <sup className='me-2'><img src={cart} alt='cart' /></sup>
                {totalCount} 
            </div>
        </Link>
    )
}

export default CartWidget