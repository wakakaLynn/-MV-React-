import React, { Component } from 'react';
class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '?'
        }
    }
    confirm = (title) => {
        this.setState({
            title
        })
    }
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <p>{this.state.title}</p>
                <button>确定</button>
                <button>取消</button>
            </div>
        )
    }
}


export default Modal;
