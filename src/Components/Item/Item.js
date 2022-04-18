import './Item.css'
import {Container, CardGroup, Card} from 'react-bootstrap/'
import { Link } from 'react-router-dom';

const Item = ({id, name, price, description, img}) => {
    return (
        <div className='cards'>
            <Container className="p-4">
              <CardGroup>
                <Card>
                  <Card.Img variant="top" src={img} alt={name} />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                      {description}
                      $ {price}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className='ButtonDetail'>
                  <Link to={`/detail/${id}`} className='Boton'>Ver detalle</Link>
                  </Card.Footer>
                </Card>
              </CardGroup>
            </Container>
        </div>        
    );
}
 
export default Item;