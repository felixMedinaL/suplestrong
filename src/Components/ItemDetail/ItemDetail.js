import { Card } from 'react-bootstrap';
import './ItemDetail.css'

const ItemDetail = ({id, name, img, price, description, stock, category}) => {
    return (
        <section className="product">
            <img src={img} alt={name} />   
            <Card.Body className='productInfo'>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    $ <span>{price}</span>
                </Card.Text>
                <Card.Text>
                    {category}
                    {description}
                    {stock}
                </Card.Text>
            </Card.Body>
            <footer>
                <button>Añadir al Carrito</button>
            </footer>
        </section>
    )
}
 
export default ItemDetail;