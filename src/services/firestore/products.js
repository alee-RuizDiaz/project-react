import { db } from "../firebase"
import { getDocs, getDoc, doc, collection, query, where } from "firebase/firestore"
import { adaptedProductFirestore } from "../../adapted/productAdapted"

export const getProducts = (categoryId) => {

    return new Promise((resolve, reject) => {
        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId)) 
            : collection(db, 'products') 

        getDocs(collectionRef).then(responde => {
            const productsAdapted = responde.docs.map(doc => {

            return adaptedProductFirestore(doc)

            })

            resolve(productsAdapted)

        })
        .catch(error => {
            reject(error)
        })
    })

}

export const getProduct = (productId) => {
    return new Promise((resolve, reject) => {
        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(responde => {
            const data = responde.data()
            const productAdapted = {id: responde.id, ...data}
            resolve(productAdapted)
        })
        .catch((error) =>{
            reject(error)
        })
    })
}
