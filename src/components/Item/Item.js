import './Item.css'
import Button from '../Button/Button'

const Item = ({img, name, category, price}) => {
    return (
        <div className="card mx-4">
            <img className="card-img-top" src={img} alt={name}/>
            <div className="card-body">
                <h1 className="card-title h4">{name}</h1>
                <h2 className='h5'>{category}</h2>
                <p>{price}</p>
                <Button content={'Comprar'} clases={'botonCompra'}/>
            </div>
        </div>
    )
}

export default Item