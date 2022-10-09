
const products = [
    {
        id: '1',
        name: 'Samsung A33',
        price: 550,
        category: 'Celular',
        img: '/image/a33.webp',
        stock: 8,
        description: 'Descripcion del celular'

    },
    {
        id: '2',
        name: 'Samsung A52',
        price: 750,
        category: 'Celular',
        img: '/image/a52.jpg',
        stock: 12,
        description: 'Descripcion del celular2'

    },
    {
        id: '3',
        name: 'Samsung A13',
        price: 450,
        category: 'Celular',
        img: '/image/a13.webp',
        stock: 10,
        description: 'Descripcion del celular3'  
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductById = (id) => {
    return new Promise ((resolve) =>{
        setTimeout (() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000)
    })
}