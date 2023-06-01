import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
const CounterComponent = ({ backgroundColor, border, borderColor, disabled, ...props }) => {
    const [count, setCount] = useState(0);
    const updateCount = (val) => {
        val === "-" ? setCount(count - 1) : setCount(count + 1);
    };
    return (
        <div style={{ backgroundColor: backgroundColor, border: `${border}px solid ${borderColor}` }}>
            <p>Currently, the count is {count}</p>
            <button onClick={() => updateCount('-')} disabled={disabled}>Subtract</button>
            <button onClick={() => updateCount('+')} disabled={disabled}>Add</button>
        </div >
    );
};

CounterComponent.propTypes = {
    /**
     * Enable / Disable component
     */
    disabled: PropTypes.bool,
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * Set border
     */
    border: PropTypes.number,
    onClick: PropTypes.func,
};

CounterComponent.defaultProps = {
    backgroundColor: null,
    disabled: false,
    border: null,
    borderColor: 'black'
};

export { CounterComponent };
