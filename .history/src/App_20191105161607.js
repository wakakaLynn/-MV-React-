import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputNumber from './InputNumber'

function App() {
  const [value, setValue] = useState('aaa')
  let value2 = '';
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
          defaultValue={0}
          onChange={e => {
            value2 = e.target.value
          }} />
      </p>
    </div>
  );
}

export default App;
