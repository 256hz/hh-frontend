import React from 'react';
import RandomButton from './RandomButton'
import ColorList from './ColorList'
import '../App.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <RandomButton />
      <ColorList />
    </div>
  )
}

export default Sidebar