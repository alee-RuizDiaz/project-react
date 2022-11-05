import { createContext, useState, useEffect} from "react"

export  const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [totalCount, setTotalCount] = useState(0)
    const [total, setTotal] = useState(0)


    useEffect(() =>{
        const contador = countCart()
        setTotalCount(contador)
    }, [cart]) // eslint-disable-line

    useEffect(() => {
        const total = totalPrice()
        setTotal(total)
    }, [cart]) // eslint-disable-line

    const addItem = (productToAdd, count) => {
        if(!isInCart(productToAdd.id)) {
            productToAdd.count = count
            setCart([...cart, productToAdd])
        } else {
            const cartUpdated = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const productUpdated = {
                        ...prod,
                        count : count
                    }

                    return productUpdated

                } else {
                    return prod
                }
            })

            setCart(cartUpdated)
        }
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

    const productCount = (id) => {
        const product = cart.find(prod => prod.id === id)

       return product?.count
    }

    const clearCart = () => {
        setCart([])
    }


    return (
        <CartContext.Provider value={{cart, addItem, removeCart, totalCount, total, productCount, isInCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

