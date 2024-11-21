import React from 'react';
import useIncrement from './Increment';

function Counter2() {
    const [count, increase] = useIncrement(1);

    return (
        <div>
            <h1>Counter 2: {count}</h1>
            <button onClick={increase}>Add 2</button>
        </div>
    );
}

export default Counter2;