import React, { useState } from 'react';

const CounterComponent = () => {
    const [count, setCount] = useState(0);
    const updateCount = (val) => {
        val === "-" ? setCount(count - 1) : setCount(count + 1);
    };
    return (
        <div>
            <p>Currently, the count is {count}</p>
            <button onClick={() => updateCount('-')}>Subtract</button>
            <button onClick={() => updateCount('+')}>Add</button>
        </div>
    );
};

export { CounterComponent };