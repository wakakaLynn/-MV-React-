import React, { Component } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import App from '../App2';

let root = document.getElementById('root');
const title = '';
class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickRes: false
        }

    }
    confirm = (title) => {
        return new Promise((resolve, reject) => {
            render(
                <><Modal title={title} /><App /></>, root, () => {
                }
            )
        })
    }
    render() {
        return (
            <div ref={'dom'} style={{ textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.1)', width: '100%', height: '100%' }}>
                <div>{this.props.title}</div>
                <br />
                <button onClick={() => { this.setState({ clickRes: true }) }}>确定</button>
                <button onClick={() => { this.setState({ clickRes: false }) }}>取消</button>
            </div>
        )
    }
}

const instance = new Modal()
export default instance;
