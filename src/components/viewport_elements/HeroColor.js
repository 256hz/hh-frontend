import React from 'react';
import Swatch from './Swatch'
import '../../App.css';

// Returns a hero Swatch (detail view).  The setHeroColor method will hide the
// swatch and return to the previous view.
const HeroColor = (props) => {
  return (
    <div className="swatches__swatch--hero">
      <Swatch color={props.color} 
              hero={true}
              setHeroColor={props.setHeroColor}
      />
    </div>
  )
}

export default HeroColor