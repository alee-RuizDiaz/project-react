
const products = [
    {
        id: '1',
        name: 'Samsung A33',
        price: 550,
        category: 'celular',
        img: '/image/a33.webp',
        stock: 8,
        description: 'Descripcion del celular'

    },
    {
        id: '2',
        name: 'Samsung A52',
        price: 750,
        category: 'celular',
        img: '/image/a52.jpg',
        stock: 12,
        description: 'Descripcion del celular2'

    },
    {
        id: '3',
        name: 'Samsung A13',
        price: 450,
        category: 'celular',
        img: '/image/a13.webp',
        stock: 10,
        description: 'Descripcion del celular3'  
    },
    {
        id: '4',
        name: 'Notebook Aorus Intel I7',
        price: 777,
        category: 'notebook',
        img: '/image/notebook.jpg',
        stock: 15,
        description: 'Descripcion del notebook1'  
    },
    {
        id: '5',
        name: 'Tablet Gamer Pro 7 PuLG',
        price: 250,
        category: 'tablet',
        img: '/image/tablet.jpg',
        stock: 13,
        description: 'Descripcion del tablet'  
    },
    {
        
        id: '6',
        name: 'Tablet Sysmarts 7',
        price: 190,
         category: 'tablet',
        img: '/image/tablet2.jpg',
        stock: 10,
        description: 'Descripcion del tablet2'  
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise ((resolve) =>{
        setTimeout (() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() =>{
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}