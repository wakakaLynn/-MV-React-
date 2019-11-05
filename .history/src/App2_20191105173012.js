import React, { Component } from 'react';
import './App.css';
import Modal from './Modal/index'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Modal />
      </div>
    )
  }

  componentDidMount() {

  }
}


export default App;
