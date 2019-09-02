import React from 'react';
import '../App.css';

// Displays the random button in the sidebar.
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