import { createContext, useState, useEffect} from "react"

export  const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [totalCount, setTotalCount] = useState(0)
    const [total, setTotal] = useState(0)


    useEffect(() =>{
        const contador = countCart()
        setTotalCount(contador)
    }, [cart])

    useEffect(() => {
        const total = totalPrice()
        setTotal(total)
    }, [cart])

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else (
            console.log("ya esta en el carrito")
        )
    }


    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeCart = (id) => {
        const removeProduct = cart.filter(prod => prod.id !== id)
        setCart(removeProduct)
    }

    const countCart = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.count
        })
        
        return accu

    }

    const totalPrice = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.count * prod.price
        })

        return accu

    }

    return (
        <CartContext.Provider value={{cart, addItem, removeCart, totalCount, total}}>
            {children}
        </CartContext.Provider>
    )
}

