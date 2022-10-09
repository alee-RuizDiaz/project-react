import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import Spinner from "../Spinner/Spinner"
import Counter from "../ItemCount/ItemCount"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])
    const [spinner, setSpinner] = useState(true)

    useEffect (() => {
        getProductById('3').then(responde => {
            setProduct(responde)
        }).finally (() => {
            setSpinner(false)
        })
    }, [])

    if (spinner) {
        return (
            <Spinner/>
        )
    }

    const addCart = () => {
        console.log("Se agrego al carrito")
      }

    return (
        <div className="detailContainer container">
            <div>
                <ItemDetail {...product}/>
            </div>
            <div className="counterDetail m-auto">
                <Counter stock={product.stock} text={`Stock: ${product.stock}`} onAdd={addCart}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer