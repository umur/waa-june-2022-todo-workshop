import React, { useState,useSelector } from 'react'
import {increment , incrementByAmount} from './counterSlice'
const Counter = () => {
    const [value, setValue] = useState[0]
    const inCrease = () => {
        setValue(...value + 1);


    }
    const inDerease = () => {
        setValue(...value - 1);


    }
    return (
        <div>

            {value}

            <button onClick={ inCrease }>increement</button>
            <button onClick={inDerease}>decreement </button>

        </div>
    );
}

export default Counter;