import { useState, useEffect } from 'react'
import { getProducts } from '../../Asyncmock'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().them( products => {
            setProducts(products)
        })

    }, [])

    return (
        <div>
            <h1>props.greeting</h1>
            <ul>
                {products.map(products => <li>{products.name}</li>)}
            </ul>
        </div>
        
    );
}
 
export default ItemListContainer;