import React from 'react';
import '../../App.css';

const Swatch = (props) => {
  // console.log("backgroundColor:", props.color)
  return (
    <div className="swatches__swatch">
      <div className="swatches__swatch__color" style={{backgroundColor: `#${props.color}`}}></div>
      <div className="swatches__swatch__title">#{props.color}</div>
    </div>
  )
}

export default Swatch