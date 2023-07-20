import React from 'react'
import './Counter.css'

function Counter(){
    const [counter, setCounter] = React.useState(0)

    function increment(){
        setCounter(counter + 1)
    }

    function decrement(){
        setCounter(counter -1)
    }

    return(
        <div class='counter'>
            <h1>Counter</h1>
            <div className='button'>
                <button className='rt-button' onClick={decrement}>-</button>
                <h2>{counter}</h2>
                <button className='lt-button' onClick={increment}>+</button>
            </div>
        </div>
    )

}
export default Counter