import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import Spinner from "../Spinner/Spinner"

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [spinner, setSpinner] = useState(true)

    useEffect (() => {
        getProducts().then(responde => {
            setProducts(responde)
        }).finally (() => {
            setSpinner(false)
        })
    }, [])

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