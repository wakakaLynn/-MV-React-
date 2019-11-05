import Modal from './Modal';
import * as ReactDOM from 'react-dom';

Modal.confirm = (title) => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    function render() {
        ReactDOM.render(<Modal title={title} clickRes={} />, div);
    }
    render()
}

export default Modal;