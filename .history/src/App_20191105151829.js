import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputNumber from './InputNumber'

function App() {
  const [value, setValue] = useState('aaa')
  return (
    <div className="App">
      <p>
        <InputNumber value={value} onchange={e => {
          setValue(e.target.value)
        }} />
      </p>
      <p>
        <InputNumber default={0} />

      </p>
    </div>
  );
}

export default App;
