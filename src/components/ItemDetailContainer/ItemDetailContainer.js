import { useAsync } from "../../hooks/useAsync"
import Spinner from "../Spinner/Spinner"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom"
import { getProduct } from "../../services/firestore/products"

const ItemDetailContainer = () => {

    const { productId } = useParams()

    const getDetailProduct = () => getProduct(productId)
    
    const { data: product, error, spinner } = useAsync(getDetailProduct, [productId])
    
    if (spinner) {
        return (
            <Spinner/>
        )
    }

    if (error) {
        return <h1>Hubo un error...</h1>
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