import React, { Component } from 'react';
class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <p>确定删除吗？</p>
                <button>确定</button>
                <button>取消</button>
            </div>
        )
    }
}


export default Modal;
