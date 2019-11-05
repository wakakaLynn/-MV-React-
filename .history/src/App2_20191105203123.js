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
        111
      </div>
    )
  }

  async componentDidMount() {
    // let res = await confirm("确定删除吗")
    console.log(Modal)
    // if (res) {
    //   console.log("是")
    // } else {
    //   console.log("否")
    // }
  }
}


export default App;
