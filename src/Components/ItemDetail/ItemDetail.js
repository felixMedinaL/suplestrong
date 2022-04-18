import { Card, Container } from 'react-bootstrap';
import './ItemDetail.css'



const ItemDetail = (name, img, price, description, stock, category) => {
    return (
        <section className="product">
            <Card.Img>
                <Container>
                    <div className='productPhoto'>
                            <img src={img} alt={name} />
                    </div>
                </Container>
            </Card.Img>
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
    );
}
 
export default ItemDetail;