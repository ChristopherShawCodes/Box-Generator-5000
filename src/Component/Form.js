import React, { useState } from 'react';

const Form = (props) => {
  const { boxArray, setBoxArray } = props;
  const [ color, setColor] = useState("");
  const [ size, setSize] = useState(50);
  
  const submitHandler = (event) => {
    event.preventDefault();
    setBoxArray( [ 
      ...boxArray, 
      { 
        color: color,
        size: size + "px",
      }
      ] );
    setColor("");
    setSize(50);
  }

  return (
    <div>
      <form onSubmit={ submitHandler } style={{ margin: "20px" }}>
        <div>
          <input 
            type="text" 
            placeholder='What color ?'
            name="color"
            value={color}
            onChange={ (e) => setColor(e.target.value) }
          />
        </div>
        <div>
          <input 
            type="text"
            placeholder='Width & Height In PX'
            name="size"
            value={size}
            onChange={ (e) => setSize(e.target.value) }
          />
        </div>
        <button type="submit" id="submit">Add</button>
      </form>
  </div>
  )
}

export default Form;