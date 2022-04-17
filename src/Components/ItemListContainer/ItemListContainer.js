import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(prods => {
            setProducts(prods)
        })

    }, [])

    return (
        <div>
            <h1>{props.greeting}</h1>
            <ul>
                {products.map(products => <li>{products.name}</li>)}
            </ul>
        </div>
        
    );
}
 
export default ItemListContainer;