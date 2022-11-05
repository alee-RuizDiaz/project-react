import { useAsync } from "../../hooks/useAsync"
import ItemList from "../ItemList/ItemList"
import Spinner from "../Spinner/Spinner"
import { useParams } from "react-router-dom"
import { getProducts } from "../../services/firestore/products"

const ItemListContainer = ({greeting}) => {

    const { categoryId } = useParams()

    const getProductsCategory = () => getProducts(categoryId)

    const { data: products, error, spinner } = useAsync(getProductsCategory, [categoryId])

    if (spinner) {
        return (
            <Spinner/>
        )
    }

    if (error) {
        return <h1>Hubo un error...</h1>
    }

    return(
        <div>
            <h1 className="my-5 h4">{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer