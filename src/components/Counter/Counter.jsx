import React from 'react'
import { useState } from "react";

const Counter = (props) => {
    const [count, setCount] = useState(props.initialValue);

    const increment = () => {
        setCount(count + props.incNumber)
    };

    const decrement = () => {
        setCount(count - props.decNumber)
    };

    return (
        <div>
            <button onClick={increment}>+</button> 
            {count}
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter