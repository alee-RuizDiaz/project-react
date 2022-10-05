
const products = [
    {
        id: '1',
        name: 'Samsung A33',
        price: 550,
        category: 'celular',
        img: '/image/a33.webp',
        stock: 25,
        description: 'Descripcion del celular'

    },
    {
        id: '2',
        name: 'Samsung A52',
        price: 750,
        category: 'celular',
        img: '/image/a52.jpg',
        stock: 25,
        description: 'Descripcion del celular2'

    },
    {
        id: '3',
        name: 'Samsung A13',
        price: 450,
        category: 'celular',
        img: '/image/a13.webp',
        stock: 25,
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