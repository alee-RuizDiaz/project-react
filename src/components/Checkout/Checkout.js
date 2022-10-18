import './Checkout.css'
import { Link } from 'react-router-dom'

const Checkout = () => {
    return (
        <div className='finCompra p-3'>
            <div className='my-2 mt-3'>
                <Link to={'/'} className='py-2 px-5  buttonFin'>Seguir Comprando</Link>
            </div>
            <div className='my-3'>
                <Link to={'/cart'} className='py-2 px-5  buttonFin'>Finalizar Compra</Link>
            </div>
        </div>
    )
}

export default Checkout