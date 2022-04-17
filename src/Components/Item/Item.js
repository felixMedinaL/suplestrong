import './Item.css'
import {Container, CardGroup, Card} from 'react-bootstrap/'
import Button from 'react-bootstrap/Button'

const Item = ({name, price, description, img}) => {
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
                      {price}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button variant="primary">Mas Detalles</Button>{' '}
                  </Card.Footer>
                </Card>
              </CardGroup>
            </Container>
        </div>        
    );
}
 
export default Item;