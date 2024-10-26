import React from 'react';
import { useState } from "react";
import './State_t.css'

const State_t = () => {
    const [counter, setCounter] = useState(0); // include the setCounter function

    return (
        <div id="state">
            <button className='button_s' onClick={() => setCounter(counter - 1)}>-</button> 
            <h1>{counter}</h1>
            <button className='button_s' onClick={() => setCounter(counter + 1)}>+</button> 
        </div>
    );
}

export default State_t;
