import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputNumber from './InputNumber'

function App() {
  const [value, setValue] = useState('aaa')
  let value2 = '123';
  return (
    <div className="App">
      <p>
        <InputNumber
          value={value}
          onChange={e => {
            setValue(e.target.value)
          }} />
      </p>
      <p>
        <InputNumber
          defaultValue={value2}
          onChange={e => {
            value2 = e.target.value
          }} />
      </p>
    </div>
  );
}

export default App;
