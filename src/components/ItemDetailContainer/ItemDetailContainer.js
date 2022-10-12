import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import Spinner from "../Spinner/Spinner"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])
    const [spinner, setSpinner] = useState(true)

    const { productId } = useParams()

    useEffect (() => {

        setSpinner(true)

        getProductById(productId).then(responde => {
            setProduct(responde)
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
        <div className="detailContainer container mt-5">
            <div>
                <ItemDetail {...product}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer