import { useEffect, useState } from "react"
import { getProductByCategory, getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import Spinner from "../Spinner/Spinner"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [spinner, setSpinner] = useState(true)

    const { categoryId } = useParams()

    useEffect (() => {

        setSpinner(true)

        const asynFunction = categoryId ? getProductByCategory : getProducts
         
        asynFunction(categoryId).then(responde => {
            setProducts(responde)
        }).finally (() => {
            setSpinner(false)
        })
    }, [categoryId])

    if (spinner) {
        return (
            <Spinner/>
        )
    }

    return(
        <div>
            <h1 className="my-5 h4">{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer