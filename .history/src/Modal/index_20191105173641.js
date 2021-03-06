import React, { Component } from 'react';
let root = document.getElementById('root')
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
            <div style={{ textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.1)', width: '100%', height: '100%' }}>
                <div>{this.state.title}</div>
                <button onClick={() => { this.setState({ clickRes: true }) }}>确定</button>
                <button onClick={() => { this.setState({ clickRes: false }) }}>取消</button>
            </div>
        )
    }
}


export default Modal;
