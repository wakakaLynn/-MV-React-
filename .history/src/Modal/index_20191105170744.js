import React, { Component } from 'react';
class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '?',
            clickRes: false
        }
    }
    confirm = (title) => {
        this.setState({
            title
        })
        return new Promise((resolve, reject) => {

        })
    }
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <p>{this.state.title}</p>
                <button onClick={() => { this.setState({ clickRes: true }) }}>确定</button>
                <button onClick={() => { this.setState({ clickRes: false }) }}>取消</button>
            </div>
        )
    }
}


export default Modal;
