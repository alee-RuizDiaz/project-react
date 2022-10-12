import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, img, name, category, price}) => {
    return (
        <div className="card mx-4 my-4">
            <img className="card-img-top" src={img} alt={name}/>
            <div className="card-body">
                <h1 className="card-title h4">{name}</h1>
                <h2 className='h5'>{category}</h2>
                <p>$ {price}</p>
                <div>
                    <Link className='botonCompra button px-5 py-1' to={`/detail/${id}`}>Ver detalles</Link>
                </div>
                {/*<Button content={'Ver Detalles'} clases={'botonCompra button px-5'}/>*/}
            </div>
        </div>
    )
}

export default Item