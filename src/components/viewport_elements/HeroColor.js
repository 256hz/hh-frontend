import React from 'react';
import Swatch from './Swatch'
import '../../App.css';

const HeroColor = (props) => {
  return (
    <div className="hero-color">
      <Swatch color={props.color} 
              hero={true}
              setHeroColor={props.setHeroColor}
      />
    </div>
  )
}

export default HeroColor