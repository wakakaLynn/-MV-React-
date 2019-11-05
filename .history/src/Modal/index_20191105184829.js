import React, { Component } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import App from '../App2';
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


        return new Promise((resolve, reject) => {
            render(
                <><Modal /><App /></>, root, () => {
                    this.setState({
                        title
                    })
                }
            )
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
