import './ButtonCheckout.css'
import { Link } from 'react-router-dom'

const ButtonCheckout = () => {
    return (
        <div className='finCompra p-3'>
            <div className='my-auto checkout'>
                <Link to={'/'} className='py-2 px-5 mb-2  buttonFin'>Seguir Comprando</Link>
                <Link to={'/cart'} className='py-2  buttonFin'>Finalizar Compra</Link>
            </div>
        </div>
    )
}

export default ButtonCheckout