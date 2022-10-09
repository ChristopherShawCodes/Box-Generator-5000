import React from 'react';


const Display = (props) => {
  const { boxArray } = props;

  return (
    <div style={{
      border: "2px solid white",
      width: "70%",
      height: "40%",
      margin: "0 auto"
    }}>
      {
        boxArray.map((box, index) => (
          <div key={index} style={{ 
              display: "inline-block",
              margin: "10px",
              height: box.size, 
              width: box.size, 
              backgroundColor: box.color
              }}>
          </div>
        ))
      }
    </div>
  );
}

export default Display;