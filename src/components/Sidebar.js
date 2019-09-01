import React from 'react';
import RandomButton from './RandomButton';
import ColorFilters from './ColorFilters';
import '../App.css';

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