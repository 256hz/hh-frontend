import React from 'react';
import '../../App.css';

const Swatch = (props) => {
  // console.log("backgroundColor:", props.color)
  return (
    <div className="swatch">
      <div className="swatch__color" style={{backgroundColor: `#${props.color}`}}></div>
      <div className="swatch__title">#{props.color}</div>
    </div>
  )
}

export default Swatch