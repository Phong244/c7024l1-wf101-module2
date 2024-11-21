import {useState} from 'react';

function useIncrement(addAmount) {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(prevCount => {
            return prevCount + addAmount;
        });
    }

    return [count, increase];
}

export default useIncrement;