import React from 'react';
import Sidebar from './Sidebar'
import Viewport from './Viewport'
import '../App.css';

const Page = () => {
  return (
    <div className="App">
      <Sidebar />
      <Viewport />
    </div>
  )
}

export default Page