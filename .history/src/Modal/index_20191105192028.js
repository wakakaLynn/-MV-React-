import React, { Component } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import App from '../App2';

let root = document.getElementById('root');
const title = '';
class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickRes: null
        }

    }
    clickConfirm = () => {
        this.setState({ clickRes: true })
    }

    confirm = (title) => {
        return new Promise((resolve, reject) => {
            let renderState = render(
                <><Modal title={title} /><App /></>, root, () => {
                    resolve(this.state.clickRes)
                }
            )

        })
    }
    render() {
        return (
            <div ref={'dom'} style={{ textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.1)', width: '100%', height: '100%' }}>
                <div>{this.props.title}</div>
                <br />
                <button onClick={this.clickConfirm}>确定</button>
                <button onClick={() => { this.setState({ clickRes: false }) }}>取消</button>
            </div>
        )
    }
}

const instance = new Modal()
export default instance;
