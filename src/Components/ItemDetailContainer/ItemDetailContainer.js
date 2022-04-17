import { useState, useEffect } from 'react'
import { getProductsById } from '../../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProductsById().then(item => {
            setProduct(item)
        }).catch(err => {
            console.log(err);
        }).finally(() =>{
            setLoading(false)
        })

        return (() => {
            setProduct()
        });
    }, [])

    return (
        <div className='ItemDetailContainer'>
            {
                loading ?
                    <h1>Cargando ... </h1> :
                product ?
                    <ItemDetail {...product} /> :
                    <h1>El Producto no existe</h1>
            }
        </div>
    )
}
 
export default ItemDetailContainer;