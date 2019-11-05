import React, { Component } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
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
        // this.setState({
        //     title
        // })
        let modalDom = this.refs.dom
        console.log(root)
        let modalInstance = React.createElement(Modal, null, null)
        root.appendChild(modalInstance)
        // render(
        //     , root
        // )
        return new Promise((resolve, reject) => {

        })
    }
    render() {
        return (
            <div ref={'dom'} style={{ textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.1)', width: '100%', height: '100%' }}>
                <div>{this.state.title}</div>
                <br />
                <button onClick={() => { this.setState({ clickRes: true }) }}>确定</button>
                <button onClick={() => { this.setState({ clickRes: false }) }}>取消</button>
            </div>
        )
    }
}

const instance = new Modal()
export default instance;
