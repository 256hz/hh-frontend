import React from 'react';
import '../../App.css';

const Swatch = (props) => {
  // console.log("backgroundColor:", props.color)
  return (
    <div className={props.hero ? "swatches__swatch swatches__swatch--hero" : "swatches__swatch"}
         onClick={_ => props.setHeroColor(props.color)}
         family={props.family}
    >
      <div className="swatches__swatch-color" style={{backgroundColor: `#${props.color}`}}></div>
      <div className="swatches__swatch-title">#{props.color}</div>
    </div>
  )
}

export default Swatch