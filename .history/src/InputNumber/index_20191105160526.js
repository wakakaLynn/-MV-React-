import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function InputNumber(props) {
    const [innerValue, setInnerValue] = useState('')

    const isControl = () => {
        return 'value' in props
    }

    const value = () => {
        if (isControl()) {
            return props.value
        } else {
            return innerValue
        }
    }

    useEffect(() => {
        setInnerValue(props.defaultValue)
    }, [])

    return (
        <input
            value={this.value}
            onChange={(e) => {
                if (!isControl()) {
                    setInnerValue(e.target.value)
                }
                props.onChange(e)
            }}
        />
    )
}
InputNumber.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}
InputNumber.defaultProps = {
    onChange: () => { }
}

export default InputNumber
