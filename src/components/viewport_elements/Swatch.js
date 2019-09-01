import React from 'react';
import '../../App.css';

const Swatch = (props) => {
  // console.log("backgroundColor:", props.color)
  return (
    <div className="swatches__swatch"
         onClick={_ => props.setHeroColor(props.color)}
    >
      <div className="swatches__swatch-color" style={{backgroundColor: `#${props.color}`}}></div>
      <div className="swatches__swatch-title">#{props.color}</div>
    </div>
  )
}

export default Swatch