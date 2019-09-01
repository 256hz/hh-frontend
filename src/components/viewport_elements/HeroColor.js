import React from 'react';
import Swatch from './Swatch'
import '../../App.css';

const HeroColor = (props) => {
  return (
    <div className="hero-color">
      <Swatch color={props.color}
              className="swatches__swatch swatches__swatch__hero" 
      />
    </div>
  )
}

export default HeroColor