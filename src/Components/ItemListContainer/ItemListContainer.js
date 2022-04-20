import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../Asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        getProducts(categoryId).then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error);
        })

    }, [categoryId])

    return (
        <div>
            <h1>{props.greeting}</h1>
            <Container className='card'>
              <div className='row'>
                  <div className='col-md-3'>
                    <ItemList products={products}/>
                  </div>              
              </div>                
            </Container>
        </div>
        
    );
}
 
export default ItemListContainer;