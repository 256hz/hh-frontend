import React from 'react';
import Swatch from './Swatch'
import '../../App.css';

const ColorPage = (props) => {
  if (props.pageColors) {
    return (
      <div className="swatches">
        { props.pageColors.map( (color, i) => <Swatch color={color.hex} key={i + "_" + color.hex} /> ) }
      </div>
    )
  } else {
    return(
      <div>Loading...</div>
    ) 
  }
}

export default ColorPage