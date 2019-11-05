import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function InputNumber(props) {
    const [innerValue, setValue] = useState('')

    get isControl() {
        return 'value' in this.props
    }

    get value() {
        if (this.isControl) {
            return this.props.value
        } else {
            return this.state.innerValue
        }
    }

    useEffect(() => {
        this.setState({
            innerValue: this.props.defaultValue
        })
    }, [])

    return (
        <input
            value={this.value}
            onChange={(e) => {
                if (!this.isControl) {
                    this.setState({
                        innerValue: e.target.value
                    })
                }
                this.props.onChange(e)
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
