import React, { Component } from 'react';
import './App.css';
import Modal from './Modal/index';

const { confirm } = Modal
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        {/* <Modal /> */}
      </div>
    )
  }

  componentDidMount() {
    console.dir(Modal.confirm)
    // confirm('确定删除吗?')
  }
}


export default App;
