import React from 'react';
import useIncrement from './Increment';

function Counter1() {
    const [count, increase] = useIncrement(1);

    return (
        <div>
            <h1>Counter 1: {count}</h1>
            <button onClick={increase}>Add 1</button>
        </div>
    );
}

export default Counter1;