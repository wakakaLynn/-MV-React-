import Modal from './Modal';
import React, { Component } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

Modal.confirm = (title) => {
    return new Promise((resolve, reject) => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        function renderConfirm() {
            render(<Modal title={title} clickRes={false} />, div);
        }
        renderConfirm()
    })

}

export default Modal;