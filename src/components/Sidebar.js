import React from 'react';
import RandomButton from './RandomButton';
import ColorFilters from './ColorFilters';
import '../App.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <RandomButton />
      <ColorFilters />
    </div>
  );
};

export default Sidebar