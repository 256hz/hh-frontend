import React from 'react';
import '../App.css';

const RandomButton = (props) => {
  return (
    <div>
      <button className="sidebar__button-random"
              onClick={_ => props.setRandomHeroColor()}
              id="random"
      >
        Random Color
      </button>
    </div>
  )
}

export default RandomButton