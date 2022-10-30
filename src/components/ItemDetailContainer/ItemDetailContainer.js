import { useEffect, useState } from "react"
import Spinner from "../Spinner/Spinner"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])
    const [spinner, setSpinner] = useState(true)

    const { productId } = useParams()

    useEffect (() => {

        setSpinner(true)

        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(responde => {
            const data = responde.data()
            const productAdapted = {id: responde.id, ...data}
            setProduct(productAdapted)
        }).finally (() => {
            setSpinner(false)
        })
    }, [productId])

    if (spinner) {
        return (
            <Spinner/>
        )
    }

    return (
        <div className="detailContainer container mt-4 mt-lg-5 mb-lg-5">
            <div >
                <ItemDetail {...product}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer