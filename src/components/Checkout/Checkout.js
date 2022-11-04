import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../services/firebase'
import { useNavigate } from 'react-router-dom'
import Swal from "sweetalert2"
import Spinner from '../Spinner/Spinner'
import './Checkout.css'


const Checkout = () => {

    const [spinner, setSpinner] =  useState(false)
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [value3, setValue3] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)


    const navigate = useNavigate()

    const createOrder = async () => {
        
        setSpinner(true)
        
        try {
            const objOrder = {
                buyer: {
                    name: value1,
                    phone: value2,
                    mail: value3
                },
                items: cart,
                total: total
            }

            const batch = writeBatch(db)

            const outOfStock = []
            
            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedCart = cart.find(prod => prod.id === doc.id)
                const prodCount = productAddedCart?.count

                if(stockDb >= prodCount) {
                    batch.update(doc.ref, { stock: stockDb - prodCount })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
            
            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 2000)

                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `El id de su orden es: ${orderAdded.id}`,
                    showConfirmButton: false,
                    timer: 2500
                  })

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No se encontro stock del producto',
                  })
            }

        }catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ocurrio un error al generar orden',
              })
        } finally {
            setSpinner(false)
        } 

    }

    if (spinner) {
        return (
            <Spinner/>
        )
    }

    return (
        <div>
            <h1 className='h3 my-4'>Finaliza tu compra</h1>
            <form className='form-register'>
                <div>
                    <label className='labelForm mb-2'>Nombre:</label>
                    <input className='controls' type={'text'} value={value1} onChange={(e) => setValue1(e.target.value)}></input>
                </div>
                <div>
                    <label className='labelForm mb-2'>Número:</label>
                    <input className='controls' type={'number'} value={value2} onChange={(e) => setValue2(e.target.value)}></input>
                </div>  
                <div>
                    <label className='labelForm mb-2'>Email:</label>
                    <input className='controls' type={'email'} value={value3} onChange={(e) => setValue3(e.target.value)}></input> 
                </div>
                <button onClick={createOrder} className='btn btn-success mt-4'>Generar orden</button>
            </form>
        </div>
    )
}
 
export default Checkout