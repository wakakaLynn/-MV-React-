import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputNumber extends Component {
    constructor(props) {
        super(props)
        this.state = {
            innerValue: '' //表单内的值
        }
    }
    static propTypes = {
        value: PropTypes.string,
        onChange: PropTypes.func,
        size: PropTypes.string,
    }

    static defaultProps = {
        size: 'middle',
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
            focus
        } = this.state
        const {
            icon,
            children,
            size,
            prefix,
            suffix,
            onChange,
            rule = new RegExp(),
            message,
            ...rest

        } = this.props
        let cls = classNames({
            input: true,
            focus,
            [`size-${size}`]: true,
            'react-ui__input': true
        })
        return (
            <div>
                <div className={cls}>
                    {prefix && <Icon name={prefix} />}
                    <input
                        value={this.value}

                        onFocus={e => {
                            this.setState({
                                focus: true
                            })
                        }}
                        onBlur={e => {
                            this.setState({
                                focus: false
                            })
                        }}
                        onChange={(e) => {
                            if (!this.isControl) {
                                this.setState({
                                    innerValue: e.target.value
                                })
                            }
                            this.props.onChange(e)
                        }}
                    />
                    {suffix && <Icon name={suffix} />}


                </div>
                <p>
                    {!rule.test(this.value) && message}
                </p>
            </div>
        )
    }

    componentDidMount() {
        this.setState({
            innerValue: this.props.defaultValue
        })
    }

}


export default InputNumber
