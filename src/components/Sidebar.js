import React from 'react';
import RandomButton from './RandomButton';
import ColorFilters from './ColorFilters';
import '../App.css';

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <RandomButton />
      <ColorFilters filterColorsMethod={props.filterColorsMethod} 
        enabledFilter={props.enabledFilter} 
      />
    </div>
  );
};

export default Sidebar