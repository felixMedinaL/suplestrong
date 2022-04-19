import { Card } from 'react-bootstrap';
import './ItemDetail.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const InputCount = ({onConfirm, stock, initial=1}) => {
    const [count, setCount] = useState(initial)
    console.log(stock)
    const handleChange = (e) => {
        if(e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({ onConfirm, stock, initial = 0 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {

            setCount(count + 1)

    }

    const decrement = () => {
            setCount(count - 1)

    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const Select = ({ options = [], onSelect}) => {
    return (
        <select onChange={(e) => onSelect(e.target.value)}>
            {options.map(o => <option key={o.id} value={o.value}>{o.text}</option>)}
        </select>
    )
}

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantity, setQuantity] = useState(0) 
    const options = [{id: 0, value: '', text: '-'}, {id: 1, value: '/', text: 'ItemListContainer'}, {id: 2, value: '/form', text: 'Formulario'}]
    const navigate = useNavigate()

    const handleAdd = (count) => {
        console.log('Agregar al carrito')
        setQuantity(count)
    }

    const handleSelect = (value) => {
        navigate(value)
    }


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
                <Select options={options} onSelect={handleSelect} />
                {quantity > 0 ? <Link to='/cart'>Ir al carrito</Link> : <count onConfirm={handleAdd} stock={stock}/> } 
            </footer>
        </section>
    )
}
 
export default ItemDetail;