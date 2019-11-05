import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputNumber extends Component {
    constructor(props) {
        super(props)
        this.state = {
            innerValue: 0 //表单内的值
        }
    }
    static propTypes = {
        value: PropTypes.string,
        onChange: PropTypes.func,
    }

    static defaultProps = {
        onChange: () => { }
    }

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


    render() {
        const {
            onChange,
            ...rest
        } = this.props
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

    componentDidMount() {
        this.setState({
            innerValue: this.props.defaultValue
        })
    }

}


export default InputNumber
