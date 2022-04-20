import './Item.css'
import {Card} from 'react-bootstrap/'
import { Link } from 'react-router-dom';

const Item = ({id, name, price, description, img}) => {
    return (
        <Card className='card text-center'>
          <Card.Img variant='top' src={img} alt={name}/>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text className='text-secondary'>
              <h4>{description}</h4>
            </Card.Text>
            <Card.Text>
              <h5>$ {price}</h5>
            </Card.Text>
            <Card.Footer>
              <Link to={`/detail/${id}`} className='text-center'>Ver detalle</Link>
            </Card.Footer>
          </Card.Body>  
        </Card>
    );
}
 
export default Item;