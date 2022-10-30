import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import Spinner from "../Spinner/Spinner"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [spinner, setSpinner] = useState(true)

    const { categoryId } = useParams()

    useEffect (() => {

        setSpinner(true)

        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId)) 
            : collection(db, 'products') 

        getDocs(collectionRef).then(responde => {
            const productsAdapted = responde.docs.map(doc => {

                const data = doc.data()
                
                return { id: doc.id, ...data }
            })

            setProducts(productsAdapted)

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