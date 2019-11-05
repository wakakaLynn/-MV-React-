import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputNumber from './InputNumber'

function App() {
  const [value, setValue] = useState('aaa')
  return (
    <div className="App">
      <InputNumber value={value} onchange={e => {
        setValue(e.target.value)
      }} />
      <InputNumber default={0} />
    </div>
  );
}

export default App;
