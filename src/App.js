import './App.css';
import React, { useState } from 'react';
import Form from './Component/Form';
import Display from './Component/Display';

function App() {
  const [ boxArray, setBoxArray ] = useState([])

  return (
    <div className="App">
      <div class="area" >
            <ul class="circles">
            <h1>Box Generator</h1>
            <h2>Model 5000</h2>
            <h3>New and Improved !</h3>
            <Form boxArray={ boxArray } setBoxArray={ setBoxArray } />
            <Display boxArray={ boxArray } />
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
      </div>
    </div>
  );
}
export default App;
