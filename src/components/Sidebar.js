import React from 'react';
import RandomButton from './RandomButton';
import ColorFilters from './ColorFilters';
import '../App.css';

// Child of Content.  Returns the random button and list of color filters.
// setHeroColor is passed to each filter so that they can set it to null when
// a filter is activated.
const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <RandomButton setRandomHeroColor={props.setRandomHeroColor}/>
      <ColorFilters setColorFilter={props.setColorFilter} 
        enabledFilter={props.enabledFilter}
        setHeroColor={props.setHeroColor}
      />
    </div>
  );
};

export default Sidebar