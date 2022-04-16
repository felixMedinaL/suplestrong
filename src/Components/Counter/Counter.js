import { useState } from 'react'

const Counter = () => {

    const [count, SetCount] = useState(0)


    const increment = () => {
        if(count < 10 ) { //si es mejor a 10 suma, para stock
            SetCount( count + 1)
        }
           
    }

    const decrement = () => {
        if(count > 0 ) {
            SetCount( count - 1)
        }
        
    }


    return (
        <div className='counter'>
            <button onClick={increment}>Agregar</button>
            <p>{count}</p>
            <button onClick={decrement} >Quitar</button>
        </div>

    );
}
 
export default Counter
