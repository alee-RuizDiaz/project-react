import cart from './assets/cart.svg'
import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext.js'
import { Link } from 'react-router-dom'


const CartWidget = () => {

    const  { totalCount } = useContext(CartContext)

    return (
        <Link to={'/cart'} className='linkCart'>
            <div className='cartWidget px-3 py-1'>
                <sub className='me-2'><img src={cart} alt='cart' /></sub>
                <div className='totalCount'>{totalCount} </div>
            </div>
        </Link>
    )
}

export default CartWidget